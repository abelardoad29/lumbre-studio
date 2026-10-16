import fs from "node:fs";
import path from "node:path";
import { LANGUAGE_ALTERNATES, PAGE_SEO, SITE_URL } from "../src/content/seo.js";

// Corre despues de `vite build`. Genera un HTML por ruta (dist/es.html, dist/sistema-nomina-agricola.html, ...)
// con lang, title, description, canonical, Open Graph y hreflang propios en el HTML inicial, para que Google
// y las vistas previas de WhatsApp/redes no dependan de JavaScript. vercel.json sirve cada archivo en su ruta.

const root = process.cwd();
const distDir = path.join(root, "dist");
const baseUrl = (process.env.VITE_PUBLIC_SITE_URL || SITE_URL).trim().replace(/\/+$/, "");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const absoluteUrl = (route) => new URL(route, baseUrl).toString();

const routeFile = (route) => (route === "/" ? "index.html" : `${route.slice(1)}.html`);

const replaceTag = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`prerender-seo: no se encontro ${label} en dist/index.html`);
  }
  return html.replace(pattern, () => replacement);
};

const metaPattern = (attr, key) => new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/>`);

const buildHtml = (route, { title, description, lang }) => {
  const url = absoluteUrl(route);
  const hasAlternates = LANGUAGE_ALTERNATES.some((alternate) => alternate.path === route);
  const alternates = hasAlternates
    ? LANGUAGE_ALTERNATES.map(
        (alternate) =>
          `\n    <link rel="alternate" href="${absoluteUrl(alternate.path)}" hreflang="${alternate.hreflang}" />`
      ).join("")
    : "";

  let html = template;
  html = replaceTag(html, /<html lang="[^"]*">/, `<html lang="${lang}">`, "<html lang>");
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`, "<title>");

  const metas = [
    ["name", "description", description],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:url", url],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
  ];
  metas.forEach(([attr, key, value]) => {
    html = replaceTag(html, metaPattern(attr, key), `<meta ${attr}="${key}" content="${escapeHtml(value)}" />`, key);
  });

  html = html.replace(/\s*<link rel="alternate" href="[^"]*" hreflang="[^"]*" \/>/g, "");
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />${alternates}`,
    "canonical"
  );
  return html;
};

// Cada ruta (excepto "/") necesita su rewrite en vercel.json, si no Vercel serviria index.html.
const vercelConfig = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf-8"));
const rewrites = new Map((vercelConfig.rewrites || []).map((rewrite) => [rewrite.source, rewrite.destination]));
const missingRewrites = Object.keys(PAGE_SEO)
  .filter((route) => route !== "/" && rewrites.get(route) !== `/${routeFile(route)}`)
  .map((route) => `{ "source": "${route}", "destination": "/${routeFile(route)}" }`);
if (missingRewrites.length) {
  throw new Error(`prerender-seo: faltan rewrites en vercel.json (antes del catch-all):\n${missingRewrites.join("\n")}`);
}

Object.entries(PAGE_SEO).forEach(([route, seo]) => {
  const file = routeFile(route);
  fs.writeFileSync(path.join(distDir, file), buildHtml(route, seo), "utf-8");
  console.log(`SEO HTML ${route} -> dist/${file}`);
});
