import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";
import TrustSection from "../components/TrustSection";
import { products, scriptsAndTools } from "../content/products.en.js";
import { useActiveSection } from "../hooks/useActiveSection";

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
  const pageTitle = "Custom Software & Automation Studio | Lumbre Studio";
  const pageDescription =
    "We design custom software and automate business processes for companies that need order, control, and operational clarity.";
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

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Trust", href: "#trust" },
    { label: "Process", href: "#process" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  const activeSection = useActiveSection(["services", "trust", "process", "faqs", "contact"]);

  const services = [
    {
      title: "Automation and AI",
      description: "Smart workflows that reduce operational friction.",
      bullets: ["Chatbots and assistants", "Automation and integrations"],
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
      title: "Web and App Development",
      description: "Fast, clean, and scalable digital experiences.",
      bullets: ["Premium frontends", "MVPs ready to launch"],
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
      title: "Custom software",
      description: "Internal systems built to keep critical processes ordered.",
      bullets: ["Dashboards and reporting", "Roles and permissions"],
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
      title: "Integrations and APIs",
      description: "Connect tools and centralize critical data.",
      bullets: ["CRM, ERP, and payments", "Zapier / n8n"],
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

  const trustCards = [
    {
      title: "Built for real operations",
      body: "Internal systems and automations designed to bring order, control, and clarity.",
    },
    {
      title: "Delivery windows",
      body: (
        <>
          Typical delivery: 2&ndash;4 weeks, depending on scope and complexity.
        </>
      ),
    },
    {
      title: "Support & evolution",
      body: "We don't ship and disappear. We support, iterate, and evolve your system.",
    },
    {
      title: "Clear process",
      body: (
        <>
          Discovery &rarr; Design &rarr; Build &rarr; Improve. Simple, transparent, and measurable.
        </>
      ),
    },
  ];


  const processSteps = [
    {
      title: "Discovery",
      description: "We align on goals, processes, and success metrics.",
    },
    {
      title: "Proposal and plan",
      description: "We define scope, deliverables, and timeline.",
    },
    {
      title: "Build and delivery",
      description: "We ship in iterations with visible checkpoints.",
    },
    {
      title: "Support and improvement",
      description: "Ongoing refinement to sustain results.",
    },
  ];

  const faqItems = [
    {
      question: "How long does a project take?",
      answer:
        "It depends on scope. During discovery we set realistic timelines and delivery checkpoints.",
    },
    {
      question: "What do you need from my team?",
      answer:
        "Access to key information, a point of contact, and fast decision-making for critical choices.",
    },
    {
      question: "Do you offer maintenance?",
      answer:
        "Yes. We provide ongoing support and monitoring after launch when needed.",
    },
    {
      question: "Do you integrate with WhatsApp, CRM, or ERP?",
      answer:
        "Yes. We integrate with existing tools and APIs to centralize data and automate workflows.",
    },
    {
      question: "How do you price projects?",
      answer:
        "We price by scope and complexity. You get a clear plan with phases and a transparent budget.",
    },
  ];

  const serviceOptions = [
    { value: "", label: "Select one" },
    { value: "website", label: "Website" },
    { value: "custom-systems", label: "Custom Systems" },
    { value: "social-automation", label: "Social Media Automation" },
    { value: "whatsapp-agent", label: "WhatsApp AI Agent + Calendar" },
    { value: "other", label: "Other" },
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
    if (formStatus !== "idle") {
      setFormStatus("idle");
    }
    setFormErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formValues.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email)) {
      errors.email = "Invalid email.";
    }
    if (!formValues.message.trim()) {
      errors.message = "Tell us about your project.";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setFormStatus("loading");
    try {
      const selectedService =
        serviceOptions.find((option) => option.value === formValues.projectType)?.label || "";
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          service: selectedService,
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) {
        setFormStatus("error");
        return;
      }
      setFormValues({
        name: "",
        email: "",
        message: "",
        projectType: "",
      });
      setFormErrors({});
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-lumbre-off focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-lumbre-black"
        href="#main"
      >
        Skip to main content
      </a>
      <Navbar
        links={navLinks}
        ctaLabel="Schedule a call"
        ctaHref="#contact"
        activeId={activeSection}
      />
      <main id="main" className="pb-24">
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_top,_var(--lumbre-hero-glow),_transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-28">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Code that's pure fire.</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Custom Software & Automation Studio
              </h1>
              <p className="mt-5 text-lg text-lumbre-off/80">
                We deliver custom software development, business automation, and internal systems for B2B teams that
                need operational clarity.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a className={primaryButton} href="#contact">
                  Schedule a call
                </a>
                <a className={secondaryButton} href="#services">
                  View services
                </a>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-lumbre-off/60">
                Fast response | No commitment
              </p>
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
                    Roadmaps with measurable deliverables.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Clean architecture with documentation and handoff.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Systems ready to scale without friction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="services"
          eyebrow="Services"
          title="Services for teams that cannot slow down"
          subtitle="Pick the area to solve first and we will build the right plan."
        >
          <p className="mb-8 text-sm text-lumbre-off/70">
            As a software studio focused on custom software development, business automation, and internal systems, we
            design solutions that make operations measurable and predictable.
          </p>
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
                  href="#contact"
                >
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </Section>
        <TrustSection
          id="trust"
          title="Trust"
          subtitle="Signals that reduce risk and set expectations."
          cards={trustCards}
        />

        <Section
          id="process"
          eyebrow="Process"
          title="How we work"
          subtitle="A clear methodology with visible deliverables."
        >
          <ol className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-6"
              >
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
          scriptsTitle="Scripts and tools"
          scriptsSubtitle="Focused automations that remove recurring friction."
          scripts={scriptsAndTools}
          mailtoLink={MAILTO_LINK}
        />

        <Section
          id="faqs"
          eyebrow="FAQs"
          title="Common questions"
          subtitle="Clear answers to move forward with confidence."
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
                    <span className="text-lumbre-brown">{isOpen ? "-" : "+"}</span>
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
          id="contact"
          eyebrow="Contact"
          title="Schedule a call and define the scope"
          subtitle="Share your goals and we will shape the right plan."
          className="bg-lumbre-gray/20"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-black/40 p-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/60">
                  Name
                  <input
                    className="rounded-xl border border-lumbre-gray/70 bg-transparent px-4 py-3 text-sm text-lumbre-off outline-none transition focus:border-lumbre-off"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
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
                    placeholder="you@company.com"
                  />
                  {formErrors.email ? <span className="text-xs text-red-400">{formErrors.email}</span> : null}
                </label>
              </div>
              <label className="mt-4 flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/60">
                Project type (optional)
                <select
                  className="rounded-xl border border-lumbre-gray/70 bg-transparent px-4 py-3 text-sm text-lumbre-off outline-none transition focus:border-lumbre-off"
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleInputChange}
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value || "placeholder"} className="bg-white text-black" value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/60">
                Message
                <textarea
                  className="min-h-[140px] rounded-xl border border-lumbre-gray/70 bg-transparent px-4 py-3 text-sm text-lumbre-off outline-none transition focus:border-lumbre-off"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Describe your goal or challenge."
                />
                {formErrors.message ? (
                  <span className="text-xs text-red-400">{formErrors.message}</span>
                ) : null}
              </label>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className={primaryButton} type="submit" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? "Sending..." : "Send"}
                </button>
                {formStatus === "success" ? (
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-brown">
                    Thanks for reaching out. We'll get back to you shortly.
                  </p>
                ) : null}
                {formStatus === "error" ? (
                  <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </p>
                ) : null}
              </div>
            </form>

            <div className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Direct contact</p>
              <p className="mt-3 text-lg font-semibold text-lumbre-off">Let's talk today.</p>
              <p className="mt-3 text-sm text-lumbre-off/70">
                Prefer a direct channel? Use the options below.
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
                We can also schedule a call around your availability.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer
        description="Premium software studio focused on automation, integrations, and operational clarity."
        links={navLinks}
        socialLinks={[{ label: "Instagram", href: "https://instagram.com/lumbre.studiomx" }]}
        labels={{
          navLabel: "Navigation",
          legalLabel: "Legal",
          connectionsLabel: "Connect",
          tagline: "Premium software studio for teams that need control.",
        }}
        copyrightLabel="All rights reserved."
      />
    </div>
  );
};

export default LandingEN;
