import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Icon from "../components/Icon";
import { SectionHeader } from "../components/Section";
import Hero, { HeroBackground } from "../components/home/Hero";
import { Stats, TechMarquee } from "../components/home/Highlights";
import Services from "../components/home/Services";
import WhyUs from "../components/home/WhyUs";
import Process from "../components/home/Process";
import Pricing from "../components/home/Pricing";
import CtaBand from "../components/home/CtaBand";
import Contact from "../components/home/Contact";
import homeEs from "../content/home.es.js";
import homeEn from "../content/home.en.js";
import { CONTACT, whatsappUrl } from "../content/site.js";
import { PAGE_SEO } from "../content/seo.js";
import { useActiveSection } from "../hooks/useActiveSection";
import { applySeo } from "../utils/seo";

export const HOME_CONTENT = { es: homeEs, en: homeEn };

// Una sola pagina para "/" (ingles, USD) y "/es" (espanol, MXN); el idioma lo decide la ruta.
const Home = ({ lang }) => {
  const content = HOME_CONTENT[lang];
  // Los ids de seccion salen del menu: servicios, proceso, precios, faq, contacto (o su version en ingles).
  const sectionIds = content.nav.links.map((link) => link.href.slice(1));
  const [servicesId, processId, pricingId, faqId, contactId] = sectionIds;
  const contactHref = `#${contactId}`;
  const pricingHref = `#${pricingId}`;
  const whatsappHref = whatsappUrl(content.contact.whatsappMessage);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    applySeo({ ...PAGE_SEO[content.path], path: content.path });
  }, [content.path]);

  // Objeto nuevo en cada clic para que el formulario reaccione aunque se repita el mismo paquete.
  const selectPlan = (id) => setSelectedPlan({ id });

  return (
    <div className="relative isolate min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-lumbre-off focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-lumbre-black"
        href="#main"
      >
        {content.skipLink}
      </a>
      <HeroBackground />
      <Navbar links={content.nav.links} ctaLabel={content.nav.cta} ctaHref={contactHref} activeId={activeSection} />

      <main id="main">
        <Hero copy={content.hero} contactHref={contactHref} pricingHref={pricingHref} />
        <Stats items={content.stats} />
        <TechMarquee label={content.stack.label} items={content.stack.items} />
        <Services id={servicesId} copy={content.services} pricingHref={pricingHref} />
        <WhyUs id={lang === "es" ? "por-que" : "why"} copy={content.why} />
        <Process id={processId} copy={content.process} />
        <Pricing
          id={pricingId}
          copy={content.pricing}
          locale={content.locale}
          currency={content.currency}
          contactHref={contactHref}
          onSelectPlan={selectPlan}
        />

        <section id={faqId} className="relative">
          <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeader
                eyebrow={content.faq.eyebrow}
                title={content.faq.title}
                subtitle={content.faq.subtitle}
                className="!mb-0"
              />
              <div className="card mt-10 p-6" data-reveal="">
                <p className="font-semibold text-lumbre-off">{content.faq.moreTitle}</p>
                <p className="mt-2 text-sm text-lumbre-off/60">{content.faq.moreBody}</p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lumbre-brown transition-colors hover:text-lumbre-off"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="chat" className="h-4 w-4" />
                  {content.faq.moreCta}
                </a>
              </div>
            </div>
            <Faq items={content.faq.items} idPrefix={`faq-${lang}`} />
          </div>
        </section>

        <CtaBand copy={content.ctaBand} whatsappHref={whatsappHref} contactHref={contactHref} />
        <Contact
          id={contactId}
          copy={content.contact}
          pricing={content.pricing}
          lang={lang}
          selectedPlan={selectedPlan}
        />
      </main>

      <Footer
        description={content.footer.description}
        links={content.nav.links}
        socialLinks={[{ label: "Instagram", href: CONTACT.instagramUrl }]}
        labels={{
          navLabel: content.footer.navLabel,
          connectionsLabel: content.footer.contactLabel,
          tagline: content.footer.tagline,
        }}
        copyrightLabel={content.footer.rights}
      />
    </div>
  );
};

export default Home;
