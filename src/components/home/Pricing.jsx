import { useRef, useState } from "react";
import { formatPrice } from "../../content/site.js";
import Icon from "../Icon";
import Section from "../Section";
import { revealDelay, trackSpotlight } from "../../utils/spotlight";

const PlanCard = ({ plan, copy, money, currency, contactHref, onSelectPlan, index }) => (
  <article
    className={`card relative flex flex-col p-7 sm:p-8 ${
      plan.featured ? "border-glow border-transparent bg-lumbre-off/[0.05] lg:-my-4 lg:py-12" : ""
    }`}
    data-reveal="scale"
    style={revealDelay(index, 90)}
  >
    {plan.featured ? (
      <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-lumbre-brown to-lumbre-ember px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-lumbre-black shadow-elev">
        {copy.popular}
      </span>
    ) : null}

    <h3 className="text-xl font-semibold tracking-tight text-lumbre-off">{plan.name}</h3>
    <p className="mt-3 min-h-[4.5rem] text-[15px] leading-relaxed text-lumbre-off/60">{plan.tagline}</p>

    <div className="mt-6 border-t border-lumbre-off/10 pt-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lumbre-off/60">{copy.from}</p>
      <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
        <span className="text-[2.6rem] font-semibold leading-none tracking-[-0.04em] text-lumbre-off">
          {money(plan.price)}
        </span>
        <span className="text-sm font-medium text-lumbre-off/60">{currency}</span>
      </p>
      <p className="mt-2 text-sm text-lumbre-off/60">{plan.suffix}</p>
    </div>

    <a
      className={`${plan.featured ? "btn-primary" : "btn-secondary"} mt-7 w-full`}
      href={contactHref}
      onClick={() => onSelectPlan(plan.id)}
    >
      {copy.cta}
      <Icon name="arrow" className="btn-arrow h-4 w-4" />
    </a>

    <ul className="mt-8 space-y-3.5">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-[15px] text-lumbre-off/75">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lumbre-brown/15 text-lumbre-brown">
            <Icon name="check" className="h-3 w-3" strokeWidth={2.6} />
          </span>
          {feature}
        </li>
      ))}
    </ul>

    <p className="mt-auto flex items-center gap-2 pt-8 text-sm text-lumbre-off/60">
      <Icon name="calendar" className="h-4 w-4 text-lumbre-brown" />
      {copy.deliveryLabel}: {plan.delivery}
    </p>
  </article>
);

const Pricing = ({ id, copy, locale, currency, contactHref, onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState(copy.tabs[0].id);
  const tabRefs = useRef({});
  const money = (amount) => formatPrice(amount, { locale, currency });
  const activeIndex = copy.tabs.findIndex((tab) => tab.id === activeTab);

  // Flechas izquierda/derecha para moverse entre pestanas (patron WAI-ARIA de tabs).
  const handleTabKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = copy.tabs[(activeIndex + step + copy.tabs.length) % copy.tabs.length];
    setActiveTab(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <Section id={id} eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} align="center">
      <div className="flex justify-center" data-reveal="fade">
        <div
          className="relative grid grid-cols-2 rounded-full border border-lumbre-off/10 bg-lumbre-off/[0.03] p-1"
          role="tablist"
          aria-label={copy.tabsLabel}
        >
          <span
            className="absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full bg-lumbre-off transition-transform duration-500 ease-out-expo"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
            aria-hidden="true"
          />
          {copy.tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  tabRefs.current[tab.id] = node;
                }}
                id={`${id}-tab-${tab.id}`}
                className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-7 ${
                  isActive ? "text-lumbre-black" : "text-lumbre-off/60 hover:text-lumbre-off"
                }`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${id}-panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={handleTabKeyDown}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {copy.tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${id}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${tab.id}`}
          hidden={tab.id !== activeTab}
          className={`mt-14 items-stretch gap-5 lg:grid-cols-3 lg:gap-6 ${tab.id === activeTab ? "grid" : "hidden"}`}
        >
          {tab.plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              copy={copy}
              money={money}
              currency={currency}
              contactHref={contactHref}
              onSelectPlan={onSelectPlan}
              index={index}
            />
          ))}
        </div>
      ))}

      <div className="mt-20">
        <h3 className="text-center text-2xl font-semibold tracking-tight text-lumbre-off" data-reveal="">
          {copy.extrasTitle}
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {copy.extras.map((extra, index) => (
            <a
              key={extra.id}
              className="spotlight card group grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 p-5 transition-colors duration-300 hover:border-lumbre-brown/40 sm:grid-cols-[auto_1fr_auto] sm:gap-x-5 sm:p-6"
              href={contactHref}
              onClick={() => onSelectPlan(extra.id)}
              onPointerMove={trackSpotlight}
              data-reveal=""
              style={revealDelay(index % 2)}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lumbre-brown/15 text-lumbre-brown">
                <Icon name={extra.icon} className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-lumbre-off">{extra.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-lumbre-off/65">{extra.description}</span>
              </span>
              <span className="col-start-2 sm:col-start-auto sm:text-right">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-lumbre-off/60">
                  {copy.from}
                </span>
                <span className="block whitespace-nowrap text-lg font-semibold text-lumbre-off">
                  {money(extra.price)}
                  {extra.period ? <span className="text-sm font-medium text-lumbre-off/60">{extra.period}</span> : null}
                </span>
              </span>
            </a>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-lumbre-off/60" data-reveal="fade">
          {copy.note}
        </p>
      </div>
    </Section>
  );
};

export default Pricing;
