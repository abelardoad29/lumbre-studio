import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { DEFAULT_OG_IMAGE, LANGUAGE_ALTERNATES, PAGE_SEO, SITE_URL } from "../src/content/seo.js";

// Corre despues de `vite build` y del build SSR (dist-ssr/). Genera un HTML por ruta
// (dist/index.html, dist/es.html, dist/sistema-nomina-agricola.html, ...) con:
// - el contenido de la pagina ya renderizado (Google, redes sociales y crawlers lo leen sin ejecutar JS),
// - lang, title, description, canonical, Open Graph, hreflang y datos estructurados JSON-LD propios,
// - precarga de la fuente principal.
// Tambien genera dist/404.html, que Vercel sirve con estado 404 para rutas desconocidas.

const root = process.cwd();
const distDir = path.join(root, "dist");
const baseUrl = (process.env.VITE_PUBLIC_SITE_URL || SITE_URL).trim().replace(/\/+$/, "");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const { render, buildStructuredData } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// JSON dentro de <script>: evita que un "</script>" en el contenido cierre la etiqueta.
const safeJson = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

const absoluteUrl = (route) => new URL(route, baseUrl).toString();

const routeFile = (route) => (route === "/" ? "index.html" : `${route.slice(1)}.html`);

const replaceTag = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`prerender-seo: no se encontro ${label} en dist/index.html`);
  }
  return html.replace(pattern, () => replacement);
};

const metaPattern = (attr, key) => new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/>`);

const ROOT_PATTERN = /<div id="root"><\/div>/;

// Fuente variable principal (subset latino): se precarga para que el titulo no cambie de fuente al cargar.
const fontFile = fs
  .readdirSync(path.join(distDir, "assets"))
  .find((file) => /^plus-jakarta-sans-latin-wght-normal-.*\.woff2$/.test(file));
const fontPreload = fontFile
  ? `\n    <link rel="preload" href="/assets/${fontFile}" as="font" type="font/woff2" crossorigin />`
  : "";

const buildHtml = (route, { title, description, lang, locale, image, imageAlt }) => {
  const url = absoluteUrl(route);
  const imageUrl = absoluteUrl(image || DEFAULT_OG_IMAGE);
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
    ["property", "og:locale", locale],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:url", url],
    ["property", "og:image", imageUrl],
    ["property", "og:image:alt", imageAlt || title],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
    ["name", "twitter:image", imageUrl],
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

  const jsonLd = `\n    <script type="application/ld+json">${safeJson(buildStructuredData(route, baseUrl))}</script>`;
  html = html.replace("</head>", `${fontPreload}${jsonLd}\n  </head>`);
  html = replaceTag(html, ROOT_PATTERN, `<div id="root" data-path="${route}">${render(route)}</div>`, '<div id="root">');
  return html;
};

const build404 = () => {
  let html = template;
  html = replaceTag(html, /<title>[^<]*<\/title>/, "<title>404 | Lumbre Studio</title>", "<title>");
  html = replaceTag(
    html,
    metaPattern("name", "robots"),
    '<meta name="robots" content="noindex" />',
    "robots"
  );
  html = html.replace(/\s*<link rel="alternate" href="[^"]*" hreflang="[^"]*" \/>/g, "");
  html = html.replace(/\s*<link rel="canonical" href="[^"]*" \/>/, "");
  html = html.replace("</head>", `${fontPreload}\n  </head>`);
  return replaceTag(html, ROOT_PATTERN, `<div id="root" data-path="*">${render("/404")}</div>`, '<div id="root">');
};

// Cada ruta (excepto "/") necesita su rewrite en vercel.json, si no Vercel responderia 404.
const vercelConfig = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf-8"));
const rewrites = new Map((vercelConfig.rewrites || []).map((rewrite) => [rewrite.source, rewrite.destination]));
const missingRewrites = Object.keys(PAGE_SEO)
  .filter((route) => route !== "/" && rewrites.get(route) !== `/${routeFile(route)}`)
  .map((route) => `{ "source": "${route}", "destination": "/${routeFile(route)}" }`);
if (missingRewrites.length) {
  throw new Error(`prerender-seo: faltan rewrites en vercel.json:\n${missingRewrites.join("\n")}`);
}

Object.entries(PAGE_SEO).forEach(([route, seo]) => {
  const file = routeFile(route);
  fs.writeFileSync(path.join(distDir, file), buildHtml(route, seo), "utf-8");
  console.log(`HTML pre-renderizado ${route} -> dist/${file}`);
});

fs.writeFileSync(path.join(distDir, "404.html"), build404(), "utf-8");
console.log("HTML pre-renderizado 404 -> dist/404.html");
