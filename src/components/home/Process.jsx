import { useEffect, useRef } from "react";
import { SectionHeader } from "../Section";

// La linea del timeline se "llena" conforme el usuario hace scroll por la seccion.
const useScrollProgress = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
      element.style.setProperty("--progress", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
};

const Process = ({ id, copy }) => {
  const timelineRef = useRef(null);
  useScrollProgress(timelineRef);

  return (
    <section id={id} className="relative">
      <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} className="!mb-0" />
        </div>

        <ol ref={timelineRef} className="relative space-y-6 [--progress:0]">
          <span className="absolute bottom-6 left-[23px] top-6 w-px bg-lumbre-off/10" aria-hidden="true" />
          <span
            className="absolute bottom-6 left-[23px] top-6 w-px origin-top bg-gradient-to-b from-lumbre-brown via-lumbre-ember to-lumbre-brown [transform:scaleY(var(--progress))]"
            aria-hidden="true"
          />
          {copy.steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-6" data-reveal="left">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lumbre-brown/40 bg-lumbre-black font-mono text-sm font-medium text-lumbre-brown">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="card flex-1 p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-lumbre-off">{step.title}</h3>
                  <span className="chip font-mono !text-[11px]">{step.time}</span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-lumbre-off/60">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
