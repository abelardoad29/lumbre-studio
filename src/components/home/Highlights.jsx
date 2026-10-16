import CountUp from "../CountUp";

export const Stats = ({ items }) => (
  <div className="container-page">
    <dl
      className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-lumbre-off/10 bg-lumbre-off/10 lg:grid-cols-4"
      data-reveal=""
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col-reverse bg-lumbre-black px-5 py-7 sm:px-8 sm:py-9">
          <dt className="mt-2 text-sm text-lumbre-off/65">{item.label}</dt>
          <dd className="whitespace-nowrap text-3xl font-semibold tracking-[-0.04em] text-lumbre-off sm:text-5xl">
            {item.prefix ? <span className="text-lumbre-off/60">{item.prefix}</span> : null}
            <CountUp value={item.value} />
            {item.suffix ? <span className="text-gradient">{item.suffix}</span> : null}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export const TechMarquee = ({ label, items }) => (
  <section className="py-16 md:py-20" aria-label={label}>
    <p className="eyebrow container-page text-center !text-lumbre-off/60" data-reveal="fade">
      {label}
    </p>
    <div className="marquee mt-8 overflow-hidden" data-reveal="fade">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={copy === 1 ? "true" : undefined}>
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold tracking-tight text-lumbre-off/60 transition-colors hover:text-lumbre-off md:text-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lumbre-brown/70" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  </section>
);
