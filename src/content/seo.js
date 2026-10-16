// Fuente unica de metadatos SEO por ruta.
// La usan las paginas (applySeo), scripts/prerender-seo.mjs (HTML por ruta) y scripts/generate-sitemap.mjs.
// Al agregar una ruta: agregala aqui, en src/App.jsx y como rewrite en vercel.json.

export const SITE_URL = "https://lumbrestudio.com";

export const PAGE_SEO = {
  "/": {
    title: "Custom Software & Automation Studio | Lumbre Studio",
    description:
      "We design custom software and automate business processes for companies that need order, control, and operational clarity.",
    lang: "en",
  },
  "/es": {
    title: "Software a Medida y Automatización | Lumbre Studio",
    description:
      "Diseñamos software a medida y automatizamos procesos para empresas que buscan orden, control y claridad operativa.",
    lang: "es",
  },
  "/software-empaque-agricola": {
    title: "Software empaque agrícola para trazabilidad | Lumbre Studio",
    description:
      "Software empaque agrícola para controlar recepción, clasificación, lotes, calidad y despacho con trazabilidad completa y reportes en tiempo real.",
    lang: "es",
  },
  "/sistema-nomina-agricola": {
    title: "Sistema nómina agrícola para cuadrillas | Lumbre Studio",
    description:
      "Sistema nómina agrícola para calcular pagos por jornada, destajo y bonos con asistencia, horas extra y cumplimiento laboral en una sola plataforma.",
    lang: "es",
  },
  "/control-asistencia-qr": {
    title: "Control asistencia QR para equipos operativos | Lumbre Studio",
    description:
      "Control asistencia QR para cuadrillas en campo o planta: registros rápidos, georreferencia y reportes listos para nómina y auditorías.",
    lang: "es",
  },
};

// Solo "/" y "/es" son la misma pagina en dos idiomas; las landings agricolas son solo en espanol.
export const LANGUAGE_ALTERNATES = [
  { hreflang: "en", path: "/" },
  { hreflang: "es", path: "/es" },
  { hreflang: "x-default", path: "/" },
];
