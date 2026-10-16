import { useEffect, useRef } from "react";

// Muestra el valor final en el HTML (SEO y sin JS) y lo anima desde 0 la primera vez que se ve.
const CountUp = ({ value, duration = 1400 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!element || reduceMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          element.textContent = String(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };
        element.textContent = "0";
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return <span ref={ref}>{value}</span>;
};

export default CountUp;
