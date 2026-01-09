const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`scroll-mt-28 border-t border-lumbre-gray/70 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.4em] text-lumbre-brown">{eyebrow}</p>
          ) : null}
          {title ? (
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-lumbre-off md:text-4xl">
              {title}
            </h2>
          ) : null}
          {subtitle ? <p className="mt-4 text-base text-lumbre-off/70">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
