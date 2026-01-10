import { useEffect, useState } from "react";

const STORAGE_KEY = "igFabHidden";

const FloatingInstagramButton = ({ url }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsHidden(true);
    }
  }, []);

  if (!url || isHidden) {
    return null;
  }

  const hide = () => {
    setIsHidden(true);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const icon = (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-lumbre-gray/70 bg-lumbre-black/95 md:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-off"
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            {icon}
            Instagram
          </a>
          <button
            className="rounded-full border border-lumbre-gray/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/70 transition hover:border-lumbre-off hover:text-lumbre-off"
            type="button"
            onClick={hide}
            aria-label="Ocultar botón de Instagram"
          >
            Ocultar
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 md:flex">
        <a
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-lumbre-brown bg-lumbre-black/90 text-lumbre-off transition hover:border-lumbre-off hover:text-white"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          {icon}
        </a>
        <button
          className="rounded-full border border-lumbre-gray/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-lumbre-off/70 transition hover:border-lumbre-off hover:text-lumbre-off"
          type="button"
          onClick={hide}
          aria-label="Ocultar botón de Instagram"
        >
          Ocultar
        </button>
      </div>
    </>
  );
};

export default FloatingInstagramButton;
