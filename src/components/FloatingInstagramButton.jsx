import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { isEnglishPath } from "../utils/language";
import Icon from "./Icon";

const STORAGE_KEY = "igFabHidden";
const SHOW_AFTER_PX = 480;

// Boton flotante compacto: aparece al bajar, se oculta sobre el formulario de contacto y el footer
// (elementos con [data-fab-hide]) para no tapar botones, y se puede descartar con la "x".
const FloatingInstagramButton = ({ url, handle = "" }) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isOverHiddenZone, setIsOverHiddenZone] = useState(false);
  const { pathname } = useLocation();
  const isEnglish = isEnglishPath(pathname);
  const followLabel = isEnglish ? "Follow us on Instagram" : "Síguenos en Instagram";
  const hideLabel = isEnglish ? "Hide Instagram button" : "Ocultar botón de Instagram";

  useEffect(() => {
    try {
      setIsDismissed(localStorage.getItem(STORAGE_KEY) === "true");
    } catch (error) {
      // Sin almacenamiento: se muestra normalmente.
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setIsPastHero(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const zones = Array.from(document.querySelectorAll("[data-fab-hide]"));
    if (!zones.length || !("IntersectionObserver" in window)) {
      return undefined;
    }
    const visibleZones = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleZones.add(entry.target);
        } else {
          visibleZones.delete(entry.target);
        }
      });
      setIsOverHiddenZone(visibleZones.size > 0);
    });
    zones.forEach((zone) => observer.observe(zone));
    return () => observer.disconnect();
  }, [pathname]);

  if (!url || isDismissed) {
    return null;
  }

  const isVisible = isPastHero && !isOverHiddenZone;

  const dismiss = () => {
    setIsDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (error) {
      // Sin almacenamiento: se oculta solo en esta visita.
    }
  };

  return (
    <div
      className={`safe-bottom group fixed right-4 z-40 transition-[opacity,transform,visibility] duration-500 ease-out-expo sm:right-6 ${
        isVisible ? "visible translate-y-0 opacity-100" : "invisible translate-y-6 opacity-0"
      }`}
    >
      <a
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-lumbre-off/15 bg-lumbre-black/85 text-lumbre-off shadow-elev backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${followLabel}${handle ? ` (${handle})` : ""}`}
      >
        <span
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <Icon name="instagram" className="relative h-6 w-6" />
      </a>

      <span
        className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full border border-lumbre-off/10 bg-lumbre-black/90 px-3.5 py-2 text-xs font-medium text-lumbre-off opacity-0 shadow-elev backdrop-blur transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block"
        aria-hidden="true"
      >
        {followLabel}
      </span>

      <button
        className="absolute -left-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-lumbre-off/15 bg-lumbre-black text-lumbre-off/70 shadow transition hover:text-lumbre-off md:opacity-0 md:group-focus-within:opacity-100 md:group-hover:opacity-100"
        type="button"
        onClick={dismiss}
        aria-label={hideLabel}
        title={hideLabel}
      >
        <Icon name="close" className="h-3 w-3" strokeWidth={2.2} />
      </button>
    </div>
  );
};

export default FloatingInstagramButton;
