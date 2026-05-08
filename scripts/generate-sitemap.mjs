import fs from "node:fs";
import path from "node:path";

const readEnvFile = (filepath) => {
  if (!fs.existsSync(filepath)) {
    return {};
  }
  const content = fs.readFileSync(filepath, "utf-8");
  const env = {};
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }
    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      return;
    }
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key) {
      env[key] = value;
    }
  });
  return env;
};

const loadEnv = () => {
  const root = process.cwd();
  const envFiles = [".env.local", ".env"];
  return envFiles.reduce((acc, file) => {
    const filepath = path.join(root, file);
    return { ...acc, ...readEnvFile(filepath) };
  }, {});
};

const envFromFiles = loadEnv();
const normalizeBaseUrl = (value) => {
  if (!value || !value.trim()) {
    return "";
  }

  const normalized = value.trim().replace(/\/+$/, "");
  if (/^https?:\/\//i.test(normalized)) {
    return normalized;
  }

  return `https://${normalized}`;
};

const baseUrl = normalizeBaseUrl(
  process.env.VITE_PUBLIC_SITE_URL ||
    envFromFiles.VITE_PUBLIC_SITE_URL ||
    process.env.VITE_VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VITE_VERCEL_URL ||
    process.env.VERCEL_URL ||
    "https://lumbrestudio.com"
);

if (!baseUrl) {
  console.error("Missing site URL for sitemap generation.");
  process.exit(1);
}

const routes = [
  "/",
  "/es",
  "/software-empaque-agricola",
  "/sistema-nomina-agricola",
  "/control-asistencia-qr",
];
const lastmod = new Date().toISOString().slice(0, 10);

const urls = routes
  .map((route) => {
    const url = new URL(route, baseUrl).toString();
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, xml, "utf-8");
console.log(`Sitemap written to ${outputPath}`);
