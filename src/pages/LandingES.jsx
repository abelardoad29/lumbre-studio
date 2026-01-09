import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";
import { products, scriptsAndTools } from "../content/products.es.js";

const MAILTO_LINK =
  "mailto:contacto@lumbrestudio.com?subject=Cotizaci%C3%B3n%20-%20Lumbre%20Studio";

const setMetaTag = (attrName, attrValue, content) => {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setLinkTag = (rel, href) => {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const LandingES = ({ instagramLink, whatsappLink }) => {
  const pageTitle = "Lumbre Studio | C\u00f3digo que es pura lumbre.";
  const pageDescription =
    "Dise\u00f1amos software y automatizamos procesos para empresas que necesitan orden y control.";
  const canonicalPath = "/es";

  useEffect(() => {
    const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();
    document.title = pageTitle;
    document.documentElement.lang = "es";
    setMetaTag("name", "description", pageDescription);
    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("property", "og:description", pageDescription);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", "website");
    setLinkTag("canonical", canonicalUrl);
  }, [pageTitle, pageDescription]);

  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-lumbre-off px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-black transition hover:bg-white";
  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-lumbre-brown px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-off transition hover:border-lumbre-off hover:text-white";

  const whatsappReady = Boolean(whatsappLink);
  const whatsappButtonClass = `${secondaryButton} ${whatsappReady ? "" : "pointer-events-none opacity-50"}`;

  const services = [
    {
      title: "Estrategia y discovery",
      description: "Definimos alcance, KPIs y arquitectura antes de construir.",
    },
    {
      title: "Frontend de producto",
      description: "Interfaces r\u00e1pidas y accesibles alineadas con la marca.",
    },
    {
      title: "Automatizaci\u00f3n e integraciones",
      description: "Conectamos herramientas y eliminamos procesos manuales.",
    },
    {
      title: "Dashboards y reportes",
      description: "Visibilidad operativa con m\u00e9tricas claras.",
    },
  ];

  const processSteps = [
    {
      title: "Inmersi\u00f3n",
      description: "Entendemos el negocio, usuarios y realidad operativa.",
    },
    {
      title: "Arquitectura",
      description: "Definimos stack, alcance y plan de entrega.",
    },
    {
      title: "Construcci\u00f3n",
      description: "Iteramos con entregas claras y avance medible.",
    },
    {
      title: "Optimizaci\u00f3n",
      description: "Mejoramos performance, estabilidad y escala.",
    },
  ];

  const navLinks = [
    { label: "Problema", href: "#problema" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Productos", href: "#productos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-lumbre-off focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-lumbre-black"
        href="#main"
      >
        Saltar al contenido principal
      </a>
      <Navbar links={navLinks} instagramLink={instagramLink} instagramLabel="Instagram" />
      <main id="main">
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_top,_rgba(42,42,42,0.6),_transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-28">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Estudio digital</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Software industrial para equipos que necesitan claridad.
              </h1>
              <p className="mt-6 text-lg text-lumbre-off/80">C\u00f3digo que es pura lumbre.</p>
              <p className="mt-4 text-sm text-lumbre-off/60">
                Dise\u00f1amos software y automatizamos procesos para empresas que necesitan orden y
                control.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a className={primaryButton} href={MAILTO_LINK}>
                  Cotizar
                </a>
                <a
                  className={whatsappButtonClass}
                  href={whatsappReady ? whatsappLink : "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!whatsappReady}
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-lumbre-gray/80 bg-lumbre-gray/40 p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Enfoque</p>
                  <p className="mt-3 text-lg font-semibold text-lumbre-off">
                    Claridad, automatizaci\u00f3n y control operativo.
                  </p>
                </div>
                <div className="grid gap-6 text-sm text-lumbre-off/70">
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Roadmaps alineados a crecimiento y equipos internos.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Implementaci\u00f3n limpia con documentaci\u00f3n y handoff.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Sistemas de dise\u00f1o preparados para escalar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problema"
          eyebrow="Problema"
          title="La brecha entre visi\u00f3n y ejecuci\u00f3n"
          subtitle="Las operaciones necesitan velocidad sin perder orden, pero los procesos tradicionales frenan."
        >
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-base text-lumbre-off/80">
              Lumbre Studio trabaja como equipo senior extendido: alineamos estrategia y tecnolog\u00eda
              para que cada release tenga claridad y un impacto medible.
            </p>
            <ul className="space-y-4 text-sm text-lumbre-off/70">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Proyectos con tiempos extendidos y foco difuso.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Herramientas desconectadas y flujos manuales.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Equipos saturados sin una ruta clara de entrega.
              </li>
            </ul>
          </div>
        </Section>

        <Section
          id="servicios"
          eyebrow="Servicios"
          title="Soporte claro para producto y operaciones"
          subtitle="Selecciona el nivel de apoyo que necesitas: de estrategia a entrega completa."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6 transition hover:border-lumbre-brown/80"
              >
                <h3 className="text-lg font-semibold text-lumbre-off">{service.title}</h3>
                <p className="mt-3 text-sm text-lumbre-off/70">{service.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="proceso"
          eyebrow="Proceso"
          title="Un flujo enfocado para equipos que no pueden detenerse"
          subtitle="Metodolog\u00eda compacta con entregables visibles y checkpoints."
        >
          <ol className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-lumbre-brown">
                  Paso {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-lumbre-off">{step.title}</h3>
                <p className="mt-2 text-sm text-lumbre-off/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Section>

        <ProductsSection
          id="productos"
          eyebrow="Productos"
          title="Productos dise\u00f1ados para orden y control"
          subtitle="Paquetes y servicios para llevar operaciones a otro nivel."
          products={products}
          scriptsTitle="Scripts y herramientas"
          scriptsSubtitle="Automatizaciones puntuales para eliminar fricci\u00f3n repetitiva."
          scripts={scriptsAndTools}
          mailtoLink={MAILTO_LINK}
        />

        <Section
          id="contacto"
          eyebrow="Contacto"
          title="Listos para ordenar tu operaci\u00f3n"
          subtitle="Cu\u00e9ntanos tus objetivos y definimos el alcance ideal."
          className="bg-lumbre-gray/20"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <a className={primaryButton} href={MAILTO_LINK}>
              Cotizar
            </a>
            <a
              className={whatsappButtonClass}
              href={whatsappReady ? whatsappLink : "#"}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!whatsappReady}
            >
              WhatsApp
            </a>
          </div>
        </Section>
      </main>
      <Footer
        description="Estudio digital industrial enfocado en software, automatizaci\u00f3n y crecimiento sostenible."
        instagramLink={instagramLink}
        instagramLabel="Instagram"
        copyrightLabel="Todos los derechos reservados."
      />
    </div>
  );
};

export default LandingES;
