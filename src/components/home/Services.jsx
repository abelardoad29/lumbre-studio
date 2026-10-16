import Icon from "../Icon";
import Section from "../Section";
import { revealDelay, trackSpotlight } from "../../utils/spotlight";

// Las tarjetas "wide" ocupan 2 columnas; la ultima tambien en tablet para no dejar un hueco.
const ServiceCard = ({ service, index, isLast, pricingHref, ctaLabel }) => (
  <article
    className={`spotlight card group flex flex-col p-7 transition-colors duration-300 hover:border-lumbre-brown/40 sm:p-8 ${
      service.wide ? "md:col-span-2" : isLast ? "md:col-span-2 lg:col-span-1" : ""
    }`}
    onPointerMove={trackSpotlight}
    data-reveal=""
    style={revealDelay(index % 3)}
  >
    <div className="flex items-start justify-between gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lumbre-brown/30 bg-gradient-to-br from-lumbre-brown/20 to-transparent text-lumbre-brown transition duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:rotate-[-6deg]">
        <Icon name={service.icon} className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <span className="font-mono text-xs text-lumbre-off/25">{String(index + 1).padStart(2, "0")}</span>
    </div>
    <h3 className="mt-7 text-xl font-semibold tracking-tight text-lumbre-off">{service.title}</h3>
    <p className={`mt-3 text-[15px] leading-relaxed text-lumbre-off/60 ${service.wide ? "max-w-xl" : ""}`}>
      {service.description}
    </p>
    <ul className="mt-6 flex flex-wrap gap-2">
      {service.bullets.map((bullet) => (
        <li key={bullet} className="chip">
          <Icon name="check" className="h-3.5 w-3.5 text-lumbre-brown" strokeWidth={2.2} />
          {bullet}
        </li>
      ))}
    </ul>
    {service.wide ? (
      <a
        className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-lumbre-brown transition-colors hover:text-lumbre-off"
        href={pricingHref}
      >
        {ctaLabel}
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    ) : null}
  </article>
);

const Services = ({ id, copy, pricingHref }) => (
  <Section id={id} eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle}>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {copy.items.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          index={index}
          isLast={index === copy.items.length - 1}
          pricingHref={pricingHref}
          ctaLabel={copy.cta}
        />
      ))}
    </div>
  </Section>
);

export default Services;
