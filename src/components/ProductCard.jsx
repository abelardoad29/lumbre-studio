const ProductCard = ({
  title,
  description,
  priceLabel,
  features = [],
  tiers = [],
  ctaLabel = "Get a quote",
  mailtoLink,
}) => {
  const hasTiers = Array.isArray(tiers) && tiers.length > 0;
  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-lumbre-off px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-black transition hover:bg-white";
  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-lumbre-brown px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-off transition hover:border-lumbre-off hover:text-white";

  return (
    <article className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6">
      <div>
        <h3 className="text-lg font-semibold text-lumbre-off">{title}</h3>
        {description ? <p className="mt-2 text-sm text-lumbre-off/70">{description}</p> : null}
        {!hasTiers && priceLabel ? <p className="mt-3 text-xs text-lumbre-off/60">{priceLabel}</p> : null}
      </div>

      {hasTiers ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-semibold text-lumbre-off">{tier.name}</p>
                <p className="text-xs text-lumbre-off/70">{tier.price}</p>
              </div>
              {tier.timeline ? <p className="mt-2 text-xs text-lumbre-off/60">{tier.timeline}</p> : null}
              <ul className="mt-3 space-y-2 text-xs text-lumbre-off/70">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lumbre-brown" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <a className={primaryButton} href={mailtoLink}>
                  {tier.ctaPrimary}
                </a>
                <a className={secondaryButton} href={mailtoLink}>
                  {tier.ctaSecondary}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <ul className="mt-4 space-y-2 text-sm text-lumbre-off/70">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a className={primaryButton} href={mailtoLink}>
              {ctaLabel}
            </a>
          </div>
        </>
      )}
    </article>
  );
};

export default ProductCard;
