import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";
import { products, scriptsAndTools } from "../content/products.en.js";

const MAILTO_LINK = "mailto:contacto@lumbrestudio.com?subject=Quote%20-%20Lumbre%20Studio";

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

const LandingEN = ({ whatsappLink }) => {
  const pageTitle = "Lumbre Studio | Code that's pure fire.";
  const pageDescription =
    "We design software and automate processes for companies that need order and control.";
  const canonicalPath = "/";

  useEffect(() => {
    const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();
    document.title = pageTitle;
    document.documentElement.lang = "en";
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
      title: "Strategy & discovery",
      description: "Define scope, KPIs, and architecture before build.",
    },
    {
      title: "Frontend systems",
      description: "Fast, accessible interfaces aligned with your brand.",
    },
    {
      title: "Automation & integrations",
      description: "Connect tools and remove manual steps across teams.",
    },
    {
      title: "Dashboards & reporting",
      description: "Operational visibility with clear metrics.",
    },
  ];

  const processSteps = [
    {
      title: "Immersion",
      description: "Understand the business, users, and operational reality.",
    },
    {
      title: "Architecture",
      description: "Define the stack, scope, and delivery plan.",
    },
    {
      title: "Build",
      description: "Ship in focused iterations with measurable progress.",
    },
    {
      title: "Optimization",
      description: "Improve performance, reliability, and scale.",
    },
  ];

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-lumbre-off focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-lumbre-black"
        href="#main"
      >
        Skip to main content
      </a>
      <Navbar links={navLinks} />
      <main id="main">
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_top,_var(--lumbre-hero-glow),_transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-28">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Digital studio</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Industrial-grade software for teams that need clarity.
              </h1>
              <p className="mt-6 text-lg text-lumbre-off/80">Code that's pure fire.</p>
              <p className="mt-4 text-sm text-lumbre-off/60">
                We design software and automate processes for companies that need order and control.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a className={primaryButton} href={MAILTO_LINK}>
                  Get a quote
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
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Focus</p>
                  <p className="mt-3 text-lg font-semibold text-lumbre-off">
                    Clarity, automation, and operational control.
                  </p>
                </div>
                <div className="grid gap-6 text-sm text-lumbre-off/70">
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Roadmaps aligned to growth and internal teams.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Clean implementation with documentation and handoff.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Design systems built to scale without rework.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problem"
          eyebrow="Problem"
          title="The gap between strategy and execution"
          subtitle="Operations need speed without losing order, but traditional workflows slow delivery."
        >
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-base text-lumbre-off/80">
              Lumbre Studio works as a senior extension of your team: we align strategy and technology
              so every release brings clarity and measurable impact.
            </p>
            <ul className="space-y-4 text-sm text-lumbre-off/70">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Projects that stretch timelines and lose focus.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Disconnected tools and manual workflows.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Teams overloaded without a clear delivery path.
              </li>
            </ul>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Services"
          title="Clear support across product and operations"
          subtitle="Select the level of support you need, from strategy to full delivery."
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
          id="process"
          eyebrow="Process"
          title="A focused flow for teams that cannot pause"
          subtitle="Compact methodology with visible milestones and delivery checkpoints."
        >
          <ol className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-lumbre-brown">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-lumbre-off">{step.title}</h3>
                <p className="mt-2 text-sm text-lumbre-off/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Section>

        <ProductsSection
          id="products"
          eyebrow="Products"
          title="Products built for order and control"
          subtitle="Packages and services designed to move operations forward."
          products={products}
          scriptsTitle="Scripts & Tools"
          scriptsSubtitle="Small automations that remove recurring friction."
          scripts={scriptsAndTools}
          mailtoLink={MAILTO_LINK}
        />

        <Section
          id="contact"
          eyebrow="Contact"
          title="Ready to bring order to your operations"
          subtitle="Share your goals and we will shape the right scope."
          className="bg-lumbre-gray/20"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <a className={primaryButton} href={MAILTO_LINK}>
              Get a quote
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
        description="Industrial digital studio focused on software, automation, and sustainable growth."
        copyrightLabel="All rights reserved."
      />
    </div>
  );
};

export default LandingEN;
