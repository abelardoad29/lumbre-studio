import Section from "./Section";

const TrustSection = ({ id, title, subtitle, cards = [] }) => {
  if (!cards.length) {
    return null;
  }

  return (
    <Section id={id} title={title} subtitle={subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <article
            key={`${card.title}-${index}`}
            className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6"
          >
            {card.stat ? (
              <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">{card.stat}</p>
            ) : null}
            <h3 className={`text-lg font-semibold text-lumbre-off ${card.stat ? "mt-3" : ""}`.trim()}>
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-lumbre-off/70">{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default TrustSection;
