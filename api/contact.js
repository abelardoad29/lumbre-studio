import { Resend } from "resend";

const rateLimitStore = new Map();
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const readInt = (value, fallback) => {
  const parsed = parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return parsed;
};

const RATE_LIMITS = {
  ip: {
    windowMs: readInt(process.env.CONTACT_RATE_LIMIT_WINDOW_MS, 10 * 60 * 1000),
    max: readInt(process.env.CONTACT_RATE_LIMIT_MAX, 4),
    minIntervalMs: readInt(process.env.CONTACT_RATE_LIMIT_MIN_INTERVAL_MS, 10 * 1000),
  },
  email: {
    windowMs: readInt(process.env.CONTACT_EMAIL_RATE_LIMIT_WINDOW_MS, 60 * 60 * 1000),
    max: readInt(process.env.CONTACT_EMAIL_RATE_LIMIT_MAX, 2),
    minIntervalMs: 0,
  },
};

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].split(",")[0].trim();
  }
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];
  if (Array.isArray(realIp) && realIp.length > 0) {
    return realIp[0];
  }
  if (typeof realIp === "string" && realIp.trim()) {
    return realIp.trim();
  }

  if (req.socket && req.socket.remoteAddress) {
    return req.socket.remoteAddress;
  }
  if (req.connection && req.connection.remoteAddress) {
    return req.connection.remoteAddress;
  }

  return "unknown";
};

const pruneRateLimitStore = (now) => {
  if (rateLimitStore.size < 1000) {
    return;
  }
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) {
      rateLimitStore.delete(key);
    }
  }
};

const checkRateLimit = (key, limits) => {
  if (!key || !limits) {
    return { blocked: false };
  }

  const now = Date.now();
  pruneRateLimitStore(now);

  const entry = rateLimitStore.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + limits.windowMs,
      lastAt: now,
    });
    return { blocked: false };
  }

  if (limits.minIntervalMs && now - entry.lastAt < limits.minIntervalMs) {
    const retryAfter = Math.ceil((limits.minIntervalMs - (now - entry.lastAt)) / 1000);
    return { blocked: true, retryAfter: Math.max(retryAfter, 1) };
  }

  if (entry.count >= limits.max) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { blocked: true, retryAfter: Math.max(retryAfter, 1) };
  }

  entry.count += 1;
  entry.lastAt = now;
  return { blocked: false };
};

const rateLimitResponse = (res, retryAfter) => {
  const seconds = Math.max(1, Number.isFinite(retryAfter) ? retryAfter : 60);
  res.setHeader("Retry-After", String(seconds));
  return res.status(429).json({ ok: false, error: "Rate limit exceeded", retryAfter: seconds });
};

const verifyTurnstileToken = async (token, ip, secret) => {
  if (!token || !secret) {
    return { success: false };
  }
  const body = new URLSearchParams({ secret, response: token });
  if (ip && ip !== "unknown") {
    body.append("remoteip", ip);
  }
  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!response.ok) {
      return { success: false };
    }
    return await response.json().catch(() => ({ success: false }));
  } catch (error) {
    console.error("Turnstile error:", error);
    return { success: false };
  }
};

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (value = "") => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(value));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM, TURNSTILE_SECRET_KEY } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM || !TURNSTILE_SECRET_KEY) {
    return res.status(500).json({ ok: false, error: "Missing server configuration" });
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch (error) {
      return res.status(400).json({ ok: false, error: "Invalid JSON" });
    }
  }

  const { name, email, message, service, captchaToken } = payload || {};
  const rawName = String(name || "").trim();
  const rawEmail = String(email || "").trim();
  const rawMessage = String(message || "").trim();

  if (!rawName || !rawEmail || !rawMessage) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  if (!isValidEmail(rawEmail)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  if (!captchaToken) {
    return res.status(400).json({ ok: false, error: "Captcha required" });
  }

  const clientIp = getClientIp(req);
  const captchaResult = await verifyTurnstileToken(captchaToken, clientIp, TURNSTILE_SECRET_KEY);
  if (!captchaResult || !captchaResult.success) {
    return res.status(400).json({ ok: false, error: "Captcha verification failed" });
  }

  const ipLimit = checkRateLimit(`ip:${clientIp}`, RATE_LIMITS.ip);
  if (ipLimit.blocked) {
    return rateLimitResponse(res, ipLimit.retryAfter);
  }

  const emailKey = rawEmail ? `email:${rawEmail.toLowerCase()}` : null;
  const emailLimit = checkRateLimit(emailKey, RATE_LIMITS.email);
  if (emailLimit.blocked) {
    return rateLimitResponse(res, emailLimit.retryAfter);
  }

  const safeName = escapeHtml(rawName);
  const safeEmail = escapeHtml(rawEmail);
  const safeMessage = escapeHtml(rawMessage).replace(/\n/g, "<br />");
  const safeService = service ? escapeHtml(service) : "";
  const subjectName = rawName.replace(/[\r\n]+/g, " ").trim();

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New contact request</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safeService ? `<p><strong>Service:</strong> ${safeService}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `;

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Lumbre Studio <${CONTACT_FROM}>`,
      to: CONTACT_TO,
      replyTo: rawEmail,
      subject: `New contact from website - ${subjectName}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ ok: false, error: "Email send failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
}
