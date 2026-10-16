import { useEffect } from "react";

// Revela los elementos con [data-reveal] cuando entran en pantalla (ver .js [data-reveal] en index.css).
// Se marca con el atributo data-revealed (y no con una clase) para que React no lo borre al re-renderizar.
export const useScrollReveal = (key) => {
  useEffect(() => {
    window.__lumbreRevealReady = true;
    const elements = Array.from(document.querySelectorAll("[data-reveal]:not([data-revealed])"));
    if (!elements.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.setAttribute("data-revealed", ""));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);
};
