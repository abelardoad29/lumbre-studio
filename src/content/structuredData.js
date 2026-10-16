// Datos estructurados (JSON-LD) por ruta. scripts/prerender-seo.mjs los escribe en el HTML de cada pagina.
// Se generan del mismo contenido que se muestra (precios y FAQ), asi nunca quedan desactualizados.
import { CONTACT } from "./site.js";
import { PAGE_SEO, SITE_URL } from "./seo.js";
import homeEs from "./home.es.js";
import homeEn from "./home.en.js";

const HOME_BY_PATH = { "/": homeEn, "/es": homeEs };

const SERVICE_NAME = {
  es: "Diseño de páginas web y desarrollo de software a medida",
  en: "Web design and custom software development",
};

const SERVICE_TYPES = {
  es: ["Diseño de páginas web", "Desarrollo web", "Tiendas en línea", "Software a medida", "Automatización con IA"],
  en: ["Web design", "Web development", "E-commerce development", "Custom software development", "AI automation"],
};

const buildOffer = (item, home, pageUrl, pricingAnchor) => ({
  "@type": "Offer",
  name: item.name,
  description: item.tagline || item.description,
  url: `${pageUrl}${pricingAnchor}`,
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    minPrice: item.price,
    priceCurrency: home.currency,
    ...(item.period ? { unitText: "MONTH" } : {}),
  },
});

export const buildStructuredData = (path, baseUrl = SITE_URL) => {
  const seo = PAGE_SEO[path];
  const pageUrl = new URL(path, baseUrl).toString();
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const telephone = CONTACT.whatsappDisplay.replace(/\s+/g, "");

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Lumbre Studio",
      url: `${baseUrl}/`,
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo-cactus.png`, width: 512, height: 512 },
      image: `${baseUrl}/og-cover.png`,
      email: CONTACT.email,
      telephone,
      sameAs: [CONTACT.instagramUrl],
      areaServed: ["MX", "US"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT.email,
          telephone,
          availableLanguage: ["Spanish", "English"],
          areaServed: ["MX", "US"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${baseUrl}/`,
      name: "Lumbre Studio",
      inLanguage: ["en", "es"],
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: seo.lang,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
    },
  ];

  const home = HOME_BY_PATH[path];
  if (home) {
    const pricingAnchor = home.nav.links.find((link) => link.href === "#precios" || link.href === "#pricing").href;
    const items = [...home.pricing.tabs.flatMap((tab) => tab.plans), ...home.pricing.extras];

    graph.push(
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: SERVICE_NAME[home.lang],
        serviceType: SERVICE_TYPES[home.lang],
        description: seo.description,
        provider: { "@id": organizationId },
        areaServed: [
          { "@type": "Country", name: "Mexico" },
          { "@type": "Country", name: "United States" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: home.pricing.title,
          itemListElement: items.map((item) => buildOffer(item, home, pageUrl, pricingAnchor)),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: home.lang,
        mainEntity: home.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    );
  }

  return { "@context": "https://schema.org", "@graph": graph };
};
