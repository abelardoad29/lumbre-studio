// Fuente unica de metadatos SEO por ruta.
// La usan las paginas (applySeo), scripts/prerender-seo.mjs (HTML por ruta) y scripts/generate-sitemap.mjs.
// Al agregar una ruta: agregala aqui, en src/App.jsx y como rewrite en vercel.json.

export const SITE_URL = "https://lumbrestudio.com";

export const PAGE_SEO = {
  "/": {
    title: "Web Design & Custom Software Studio | Lumbre Studio",
    description:
      "We design and build fast, SEO-ready websites and custom software: landing pages, online stores, web apps and AI automation. Clear pricing in USD.",
    lang: "en",
    locale: "en_US",
    image: "/og-en.png",
    imageAlt: "Lumbre Studio — Websites and custom software that grow your business",
  },
  "/es": {
    title: "Páginas Web y Software a Medida en México | Lumbre Studio",
    description:
      "Diseño de páginas web y desarrollo de software a medida en México: landing pages, tiendas en línea, sistemas web y automatización con IA. Cotiza sin compromiso.",
    lang: "es",
    locale: "es_MX",
    image: "/og-es.png",
    imageAlt: "Lumbre Studio — Páginas web y software a medida que hacen crecer tu negocio",
  },
  "/software-empaque-agricola": {
    title: "Software empaque agrícola para trazabilidad | Lumbre Studio",
    description:
      "Software empaque agrícola para controlar recepción, clasificación, lotes, calidad y despacho con trazabilidad completa y reportes en tiempo real.",
    lang: "es",
    locale: "es_MX",
  },
  "/sistema-nomina-agricola": {
    title: "Sistema nómina agrícola para cuadrillas | Lumbre Studio",
    description:
      "Sistema nómina agrícola para calcular pagos por jornada, destajo y bonos con asistencia, horas extra y cumplimiento laboral en una sola plataforma.",
    lang: "es",
    locale: "es_MX",
  },
  "/control-asistencia-qr": {
    title: "Control asistencia QR para equipos operativos | Lumbre Studio",
    description:
      "Control asistencia QR para cuadrillas en campo o planta: registros rápidos, georreferencia y reportes listos para nómina y auditorías.",
    lang: "es",
    locale: "es_MX",
  },
};

export const DEFAULT_OG_IMAGE = "/og-cover.png";

// Solo "/" y "/es" son la misma pagina en dos idiomas; las landings agricolas son solo en espanol.
export const LANGUAGE_ALTERNATES = [
  { hreflang: "en", path: "/" },
  { hreflang: "es", path: "/es" },
  { hreflang: "x-default", path: "/" },
];
