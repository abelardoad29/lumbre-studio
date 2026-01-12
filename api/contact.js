import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
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

  const { name, email, message, service } = payload || {};
  const rawName = String(name || "").trim();
  const rawEmail = String(email || "").trim();
  const rawMessage = String(message || "").trim();

  if (!rawName || !rawEmail || !rawMessage) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  if (!isValidEmail(rawEmail)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
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
