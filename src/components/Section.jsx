export const SectionHeader = ({ eyebrow, title, subtitle, align = "left", className = "" }) => {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} mb-12 max-w-2xl md:mb-16 ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow flex items-center gap-3 ${centered ? "justify-center" : ""}`} data-reveal="fade">
          <span className="h-px w-6 bg-lumbre-brown/60" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2
          className="mt-5 text-balance text-3xl font-semibold tracking-[-0.03em] text-lumbre-off sm:text-4xl md:text-5xl md:leading-[1.08]"
          data-reveal=""
        >
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="mt-5 text-pretty text-base text-lumbre-off/65 md:text-lg" data-reveal="" style={{ "--reveal-delay": "80ms" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

const Section = ({ id, eyebrow, title, subtitle, children, className = "", align = "left", ...rest }) => {
  return (
    <section id={id} className={`relative ${className}`} {...rest}>
      <div className="container-page py-20 md:py-28">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align={align} />
        {children}
      </div>
    </section>
  );
};

export default Section;
