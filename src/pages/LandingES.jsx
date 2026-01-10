import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";
import { products, scriptsAndTools } from "../content/products.es.js";
import { useActiveSection } from "../hooks/useActiveSection";

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

const LandingES = ({ whatsappLink }) => {
  const pageTitle = "Lumbre Studio | Software premium y automatización para empresas";
  const pageDescription =
    "Diseñamos software a medida, automatización e integraciones para equipos que necesitan orden y control.";
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

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Casos", href: "#casos" },
    { label: "Proceso", href: "#proceso" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contacto", href: "#contacto" },
  ];

  const activeSection = useActiveSection([
    "servicios",
    "casos",
    "proceso",
    "faqs",
    "contacto",
  ]);

  const services = [
    {
      title: "Automatización e IA",
      description: "Flujos inteligentes para reducir fricción operativa.",
      bullets: ["Chatbots y asistentes", "Automatizaciones e integraciones"],
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
        </svg>
      ),
    },
    {
      title: "Desarrollo Web / Apps",
      description: "Experiencias digitales rápidas, limpias y escalables.",
      bullets: ["Frontends premium", "MVPs listos para lanzar"],
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 19h8" />
        </svg>
      ),
    },
    {
      title: "Software a medida",
      description: "Sistemas internos para ordenar procesos críticos.",
      bullets: ["Dashboards y reporting", "Roles y permisos"],
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4l8 4-8 4-8-4 8-4Z" />
          <path d="M4 12l8 4 8-4" />
          <path d="M4 16l8 4 8-4" />
        </svg>
      ),
    },
    {
      title: "Integraciones & APIs",
      description: "Conecta herramientas y centraliza datos clave.",
      bullets: ["CRM, ERP y pagos", "Zapier / n8n"],
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10 13a3 3 0 0 1 0-4l2-2a3 3 0 0 1 4 4l-1 1" />
          <path d="M14 11a3 3 0 0 1 0 4l-2 2a3 3 0 0 1-4-4l1-1" />
        </svg>
      ),
    },
  ];

  const trustIndicators = [
    {
      label: "Proyectos entregados",
      value: "TODO",
      note: "Definir métricas reales.",
    },
    {
      label: "Tiempo promedio de entrega",
      value: "TODO",
      note: "Actualizar con datos reales.",
    },
    {
      label: "Soporte y evolución",
      value: "TODO",
      note: "Detalle por definir.",
    },
  ];

  const testimonials = [
    {
      quote: "TODO: Agregar testimonio real del cliente.",
      author: "TODO: Nombre y cargo.",
      company: "TODO: Empresa.",
    },
    {
      quote: "TODO: Agregar testimonio real del cliente.",
      author: "TODO: Nombre y cargo.",
      company: "TODO: Empresa.",
    },
  ];

  const caseStudies = [
    {
      title: "Operación interna ordenada",
      problem: "Procesos fragmentados y reportes manuales.",
      solution: "Diseñamos un sistema central con automatizaciones clave.",
      result: "TODO: métricas reales de impacto.",
    },
    {
      title: "Ventas con mejor seguimiento",
      problem: "Pérdida de leads y poca trazabilidad.",
      solution: "Integramos CRM, formularios y alertas automáticas.",
      result: "TODO: métricas reales de mejora.",
    },
    {
      title: "Atención automatizada",
      problem: "Consultas repetitivas saturaban al equipo.",
      solution: "Implementamos flujos de WhatsApp y FAQs inteligentes.",
      result: "TODO: métricas reales de reducción de carga.",
    },
  ];

  const processSteps = [
    {
      title: "Diagnóstico",
      description: "Entendemos objetivos, procesos y métricas clave.",
    },
    {
      title: "Propuesta y plan",
      description: "Definimos alcance, entregables y cronograma.",
    },
    {
      title: "Construcción y entregas",
      description: "Iteramos con visibilidad y checkpoints constantes.",
    },
    {
      title: "Soporte y mejora",
      description: "Ajustes continuos para mantener resultados.",
    },
  ];

  const faqItems = [
    {
      question: "¿Cuánto tarda un proyecto?",
      answer:
        "Depende del alcance. En diagnóstico definimos tiempos realistas y un plan de entregas claro.",
    },
    {
      question: "¿Qué necesitan de mi parte?",
      answer:
        "Acceso a la información clave, responsables del negocio y una persona de contacto para decisiones rápidas.",
    },
    {
      question: "¿Trabajan con mantenimiento?",
      answer:
        "Sí, ofrecemos soporte evolutivo y monitoreo posterior al lanzamiento según la necesidad.",
    },
    {
      question: "¿Hacen integraciones con WhatsApp/CRM/ERP?",
      answer:
        "Sí. Integramos con herramientas existentes y APIs para centralizar datos y automatizar procesos.",
    },
    {
      question: "¿Cómo cotizan?",
      answer:
        "Cotizamos por alcance y complejidad. Presentamos un plan con fases y presupuesto transparente.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) {
      errors.name = "Ingresa tu nombre.";
    }
    if (!formValues.email.trim()) {
      errors.email = "Ingresa tu email.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email)) {
      errors.email = "Email inválido.";
    }
    if (!formValues.message.trim()) {
      errors.message = "Cuéntanos sobre tu proyecto.";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormStatus("error");
      return;
    }
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-lumbre-off focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-lumbre-black"
        href="#main"
      >
        Saltar al contenido principal
      </a>
      <Navbar links={navLinks} ctaLabel="Agendar llamada" ctaHref="#contacto" activeId={activeSection} />
      <main id="main" className="pb-24">
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_top,_var(--lumbre-hero-glow),_transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-28">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Code that’s pure fire.</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Software a medida y automatización para empresas que necesitan orden y control.
              </h1>
              <p className="mt-5 text-lg text-lumbre-off/80">
                Diseñamos sistemas, integraciones y flujos con IA para reducir tiempos y mejorar decisiones.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a className={primaryButton} href="#contacto">
                  Agendar llamada
                </a>
                <a className={secondaryButton} href="#servicios">
                  Ver servicios
                </a>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-lumbre-off/60">
                Te respondemos rápido • Sin compromiso
              </p>
            </div>
            <div className="rounded-3xl border border-lumbre-gray/80 bg-lumbre-gray/40 p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Enfoque</p>
                  <p className="mt-3 text-lg font-semibold text-lumbre-off">
                    Claridad operativa, automatización y control de datos.
                  </p>
                </div>
                <div className="grid gap-6 text-sm text-lumbre-off/70">
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Roadmaps con entregables y foco en impacto.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Arquitectura limpia y documentación para continuidad.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Sistemas diseñados para escalar sin fricción.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="servicios"
          eyebrow="Servicios"
          title="Servicios pensados para equipos que no pueden detenerse"
          subtitle="Selecciona el frente que necesitas resolver y construimos la solución."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6 transition hover:border-lumbre-brown/80"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-lumbre-brown/60 bg-lumbre-black/40 text-lumbre-brown">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-lumbre-off">{service.title}</h3>
                    <p className="mt-2 text-sm text-lumbre-off/70">{service.description}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-lumbre-off/70">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-5 inline-flex text-xs uppercase tracking-[0.3em] text-lumbre-brown transition hover:text-lumbre-off"
                  href="#contacto"
                >
                  Ver más
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="confianza"
          eyebrow="Confianza"
          title="Confían en nosotros"
          subtitle="Indicadores de confianza (placeholders a actualizar)."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {trustIndicators.map((item) => (
              <div key={item.label} className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-lumbre-off">{item.value}</p>
                <p className="mt-2 text-xs text-lumbre-off/60">{item.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="testimonios"
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes (TODO)"
          subtitle="Reemplazar con testimonios reales antes de publicar."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <figure
                key={`${item.author}-${index}`}
                className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6"
              >
                <blockquote className="text-sm text-lumbre-off/80">“{item.quote}”</blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.3em] text-lumbre-off/60">
                  {item.author} · {item.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section
          id="casos"
          eyebrow="Casos"
          title="Casos de éxito (TODO)"
          subtitle="Ejemplos de problema → solución → resultado. Reemplazar con datos reales."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6"
              >
                <h3 className="text-lg font-semibold text-lumbre-off">{item.title}</h3>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Problema</p>
                <p className="mt-2 text-sm text-lumbre-off/70">{item.problem}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Qué hicimos</p>
                <p className="mt-2 text-sm text-lumbre-off/70">{item.solution}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Resultado</p>
                <p className="mt-2 text-sm text-lumbre-off/70">{item.result}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="proceso"
          eyebrow="Proceso"
          title="Cómo trabajamos"
          subtitle="Metodología clara con entregables visibles."
        >
          <ol className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-6"
              >
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
          title="Productos diseñados para orden y control"
          subtitle="Paquetes y servicios para avanzar con claridad."
          products={products}
          scriptsTitle="Scripts y herramientas"
          scriptsSubtitle="Automatizaciones puntuales para eliminar fricción repetitiva."
          scripts={scriptsAndTools}
          mailtoLink={MAILTO_LINK}
        />

        <Section
          id="faqs"
          eyebrow="FAQs"
          title="Resolvemos las dudas comunes"
          subtitle="Respuestas directas para tomar decisiones rápidas."
        >
          <div className="divide-y divide-lumbre-gray/70 rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40">
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === `faq-${index}`;
              const panelId = `faq-panel-${index}`;
              return (
                <div key={item.question} className="p-6">
                  <button
                    className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-lumbre-off"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      const next = isOpen ? "" : `faq-${index}`;
                      setActiveFaq(next);
                    }}
                  >
                    <span>{item.question}</span>
                    <span className="text-lumbre-brown">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    id={panelId}
                    className={`mt-3 text-sm text-lumbre-off/70 ${isOpen ? "" : "hidden"}`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          id="contacto"
          eyebrow="Contacto"
          title="Agenda una llamada y definamos el alcance"
          subtitle="Cuéntanos tu necesidad y proponemos el plan ideal."
          className="bg-lumbre-gray/20"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-black/40 p-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/60">
                  Nombre
                  <input
                    className="rounded-xl border border-lumbre-gray/70 bg-transparent px-4 py-3 text-sm text-lumbre-off outline-none transition focus:border-lumbre-off"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                  />
                  {formErrors.name ? <span className="text-xs text-red-400">{formErrors.name}</span> : null}
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/60">
                  Email
                  <input
                    className="rounded-xl border border-lumbre-gray/70 bg-transparent px-4 py-3 text-sm text-lumbre-off outline-none transition focus:border-lumbre-off"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="correo@empresa.com"
                  />
                  {formErrors.email ? <span className="text-xs text-red-400">{formErrors.email}</span> : null}
                </label>
              </div>
              <label className="mt-4 flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/60">
                Tipo de proyecto (opcional)
                <select
                  className="rounded-xl border border-lumbre-gray/70 bg-transparent px-4 py-3 text-sm text-lumbre-off outline-none transition focus:border-lumbre-off"
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="automatizacion">Automatización / IA</option>
                  <option value="software">Software a medida</option>
                  <option value="web">Web / App</option>
                  <option value="integraciones">Integraciones</option>
                </select>
              </label>
              <label className="mt-4 flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/60">
                Mensaje
                <textarea
                  className="min-h-[140px] rounded-xl border border-lumbre-gray/70 bg-transparent px-4 py-3 text-sm text-lumbre-off outline-none transition focus:border-lumbre-off"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Describe tu objetivo o problema a resolver."
                />
                {formErrors.message ? (
                  <span className="text-xs text-red-400">{formErrors.message}</span>
                ) : null}
              </label>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className={primaryButton} type="submit" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? "Enviando..." : "Enviar"}
                </button>
                {formStatus === "success" ? (
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-brown">
                    Gracias, te contactaremos pronto.
                  </p>
                ) : null}
                {formStatus === "error" ? (
                  <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                    Revisa los campos marcados.
                  </p>
                ) : null}
              </div>
            </form>

            <div className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Contacto directo</p>
              <p className="mt-3 text-lg font-semibold text-lumbre-off">Hablemos hoy mismo.</p>
              <p className="mt-3 text-sm text-lumbre-off/70">
                Si prefieres un canal directo, aquí están las alternativas rápidas.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a className={secondaryButton} href={MAILTO_LINK}>
                  contacto@lumbrestudio.com
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
              <p className="mt-4 text-xs text-lumbre-off/60">
                También podemos coordinar una llamada según disponibilidad.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer
        description="Estudio premium de software y automatización para equipos que necesitan claridad."
        links={navLinks}
        legalLinks={[
          { label: "Privacidad (TODO)", href: "/privacidad" },
          { label: "Términos (TODO)", href: "/terminos" },
        ]}
        socialLinks={[{ label: "Instagram", href: "https://instagram.com/lumbre.studiomx" }]}
        labels={{
          navLabel: "Navegación",
          legalLabel: "Legal",
          connectionsLabel: "Conexiones",
          tagline: "Premium software studio para equipos que necesitan control.",
        }}
        copyrightLabel="Todos los derechos reservados."
      />
    </div>
  );
};

export default LandingES;
