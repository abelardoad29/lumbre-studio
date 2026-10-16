import Icon from "../Icon";

// Posiciones fijas (no aleatorias) para que el HTML pre-renderizado y el del navegador coincidan.
const EMBERS = [
  { left: "8%", size: "3px", duration: "11s", delay: "0s", drift: "30px" },
  { left: "18%", size: "4px", duration: "9s", delay: "2.5s", drift: "-20px" },
  { left: "31%", size: "2px", duration: "12s", delay: "5s", drift: "25px" },
  { left: "46%", size: "3px", duration: "10s", delay: "1s", drift: "-35px" },
  { left: "58%", size: "4px", duration: "13s", delay: "6.5s", drift: "20px" },
  { left: "69%", size: "2px", duration: "9.5s", delay: "3.5s", drift: "-15px" },
  { left: "81%", size: "3px", duration: "11.5s", delay: "7.5s", drift: "30px" },
  { left: "92%", size: "4px", duration: "10.5s", delay: "4.5s", drift: "-25px" },
];

export const HeroBackground = () => (
  <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1100px] overflow-hidden" aria-hidden="true">
    <div className="bg-grid absolute inset-0" />
    <div className="absolute left-1/2 top-[-280px] h-[680px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--lumbre-hero-glow),transparent)]" />
    <div className="animate-float-slow absolute right-[-120px] top-[180px] h-[420px] w-[420px] rounded-full bg-lumbre-ember/10 blur-[110px]" />
    <div className="animate-float absolute left-[-140px] top-[420px] h-[360px] w-[360px] rounded-full bg-lumbre-brown/10 blur-[110px]" />
    {EMBERS.map((ember) => (
      <span
        key={ember.left}
        className="ember"
        style={{
          left: ember.left,
          top: "760px",
          "--size": ember.size,
          "--duration": ember.duration,
          "--delay": ember.delay,
          "--drift": ember.drift,
        }}
      />
    ))}
  </div>
);

const Bar = ({ className = "" }) => <span className={`block rounded-full bg-lumbre-off/10 ${className}`} />;

const Chip = ({ icon, label, className = "", style }) => (
  <div
    className={`absolute flex items-center gap-2 rounded-2xl border border-lumbre-off/10 bg-lumbre-black/85 px-3 py-2 text-xs font-medium text-lumbre-off shadow-elev backdrop-blur-xl ${className}`}
    style={style}
  >
    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-lumbre-brown/15 text-lumbre-brown">
      <Icon name={icon} className="h-4 w-4" />
    </span>
    {label}
  </div>
);

const HeroMockup = ({ copy }) => (
  <div className="enter relative mx-auto w-full max-w-[540px] lg:mx-0" style={{ "--enter-delay": "350ms" }} aria-hidden="true">
    <div className="animate-float">
      {/* Ventana de navegador con un sitio "en construccion". */}
      <div className="shadow-elev overflow-hidden rounded-[1.4rem] border border-lumbre-off/10 bg-lumbre-black">
        <div className="flex items-center gap-3 border-b border-lumbre-off/10 bg-lumbre-off/[0.03] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
          </div>
          <div className="mx-auto flex min-w-0 items-center gap-1.5 rounded-full bg-lumbre-off/[0.06] px-3 py-1 font-mono text-[11px] text-lumbre-off/65">
            <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            <span className="truncate">{copy.url}</span>
          </div>
          <span className="w-10" />
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="h-5 w-5 rounded-md bg-gradient-to-br from-lumbre-brown to-lumbre-ember" />
            <div className="hidden gap-3 sm:flex">
              <Bar className="h-2 w-10" />
              <Bar className="h-2 w-10" />
              <Bar className="h-2 w-10" />
            </div>
            <span className="h-6 w-16 rounded-full bg-lumbre-off/80" />
          </div>

          <div className="space-y-3 pt-2">
            <span className="block h-4 w-4/5 rounded-full bg-lumbre-off/80" />
            <span className="block h-4 w-3/5 rounded-full bg-gradient-to-r from-lumbre-brown to-lumbre-ember" />
            <Bar className="h-2 w-full" />
            <Bar className="h-2 w-5/6" />
            <div className="flex gap-2 pt-2">
              <span className="h-7 w-24 rounded-full bg-lumbre-off/80" />
              <span className="h-7 w-20 rounded-full border border-lumbre-off/20" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-1">
            {[0, 1, 2].map((item) => (
              <div key={item} className="space-y-2 rounded-xl border border-lumbre-off/10 bg-lumbre-off/[0.03] p-3">
                <span className="block h-5 w-5 rounded-md bg-lumbre-brown/25" />
                <span className="block h-2 w-4/5 animate-shimmer rounded-full bg-[linear-gradient(90deg,rgb(var(--lumbre-off)/0.08),rgb(var(--lumbre-off)/0.22),rgb(var(--lumbre-off)/0.08))] bg-[length:200%_100%]" />
                <Bar className="h-1.5 w-3/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Panel de software a medida. */}
    <div className="animate-float-slow absolute -bottom-10 right-3 w-48 rounded-2xl border border-lumbre-off/10 bg-lumbre-black/90 p-4 shadow-elev backdrop-blur-xl sm:-right-6 sm:w-56">
      <div className="flex items-center justify-between text-[11px] font-medium text-lumbre-off/70">
        <span>{copy.dashboard}</span>
        <Icon name="layers" className="h-3.5 w-3.5 text-lumbre-brown" />
      </div>
      <div className="mt-4 flex h-16 items-end gap-1.5">
        {[38, 55, 42, 68, 60, 82, 74, 95].map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-[3px] bg-gradient-to-t from-lumbre-brown/40 to-lumbre-ember"
            style={{ height: `${height}%`, opacity: 0.45 + index * 0.07 }}
          />
        ))}
      </div>
    </div>

    {/* Fragmento de codigo. */}
    <div className="animate-float absolute -bottom-14 left-2 hidden rounded-2xl border border-lumbre-off/10 bg-lumbre-black/90 p-4 font-mono text-[11px] leading-relaxed shadow-elev backdrop-blur-xl sm:block md:-left-8" style={{ animationDelay: "-3s" }}>
      {copy.code.map((line, index) => (
        <div key={index} className="whitespace-pre text-lumbre-off/70">
          <span className="mr-3 select-none text-lumbre-off/25">{index + 1}</span>
          {index === 0 || index === copy.code.length - 1 ? (
            <span className="text-lumbre-brown">{line}</span>
          ) : (
            line
          )}
        </div>
      ))}
    </div>

    <Chip icon="bolt" label={copy.speed} className="animate-float-slow -top-5 left-2 sm:-left-6" />
    <Chip icon="search" label={copy.seo} className="animate-float right-2 top-[38%] sm:-right-8" style={{ animationDelay: "-2s" }} />
    <Chip icon="browser" label={copy.mobile} className="animate-float-slow hidden lg:flex -left-14 top-[52%]" style={{ animationDelay: "-5s" }} />
  </div>
);

const Hero = ({ copy, contactHref, pricingHref }) => (
  <section id="hero" className="relative">
    <div className="container-page grid items-center gap-20 pb-28 pt-10 sm:pt-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:pb-32 lg:pt-20">
      <div>
        <p className="enter inline-flex items-center gap-2.5 rounded-full border border-lumbre-off/10 bg-lumbre-off/[0.04] py-1.5 pl-2.5 pr-4 text-xs font-medium text-lumbre-off/75 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lumbre-ember opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lumbre-ember" />
          </span>
          {copy.badge}
        </p>

        <h1
          className="enter mt-7 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.04em] text-lumbre-off sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]"
          style={{ "--enter-delay": "80ms" }}
        >
          {copy.title.before} <span className="text-gradient">{copy.title.accent}</span> {copy.title.after}
        </h1>

        <p
          className="enter mt-6 max-w-xl text-pretty text-lg leading-relaxed text-lumbre-off/65"
          style={{ "--enter-delay": "160ms" }}
        >
          {copy.description}
        </p>

        <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--enter-delay": "240ms" }}>
          <a className="btn-primary" href={contactHref}>
            {copy.primaryCta}
            <Icon name="arrow" className="btn-arrow h-4 w-4" />
          </a>
          <a className="btn-secondary" href={pricingHref}>
            {copy.secondaryCta}
          </a>
        </div>

        <ul
          className="enter mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-lumbre-off/65"
          style={{ "--enter-delay": "320ms" }}
        >
          {copy.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-lumbre-brown" strokeWidth={2.2} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <HeroMockup copy={copy.mockup} />
    </div>
  </section>
);

export default Hero;
