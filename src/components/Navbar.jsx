import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo-cactus.png";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ links = [], ctaLabel = "", ctaHref = "#contacto", activeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef(null);
  const menuId = "mobile-menu";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleFocus = () => {
      const first = panelRef.current?.querySelector('a[href], button, input, select, textarea');
      first?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    handleFocus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const getLinkClass = (href) => {
    if (!activeId) {
      return "text-lumbre-off/70 hover:text-lumbre-off";
    }
    return href === `#${activeId}`
      ? "text-lumbre-off"
      : "text-lumbre-off/60 hover:text-lumbre-off";
  };

  const headerClass = `sticky top-0 z-50 border-b border-lumbre-gray/80 backdrop-blur transition ${
    isScrolled ? "bg-lumbre-black/90" : "bg-lumbre-black/70"
  }`;

  const ctaClass =
    "inline-flex items-center justify-center rounded-full bg-lumbre-off px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-black transition hover:bg-white";
  const ctaMobileClass =
    "inline-flex items-center justify-center rounded-full bg-lumbre-off px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-lumbre-black transition hover:bg-white";
  const mobileButtonClass =
    "inline-flex items-center justify-center rounded-full border border-lumbre-gray/70 p-2 text-lumbre-off/80 transition hover:border-lumbre-off hover:text-lumbre-off";
  const menuIcon = isOpen ? (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );

  return (
    <>
      <header className={headerClass}>
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              className={`${mobileButtonClass} md:hidden`}
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls={menuId}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {menuIcon}
            </button>
            <a href="#hero" className="flex items-center">
              <img src={logo} alt="Lumbre Studio logo" className="h-10 w-auto logo-mark" />
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <ul className="flex items-center gap-5 text-xs uppercase tracking-[0.35em]">
              {links.map((link) => (
                <li key={link.href}>
                  <a className={`transition ${getLinkClass(link.href)}`} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
            <ThemeToggle />
            {ctaLabel ? (
              <a className={ctaClass} href={ctaHref}>
                {ctaLabel}
              </a>
            ) : null}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {ctaLabel ? (
              <a className={ctaMobileClass} href={ctaHref}>
                {ctaLabel}
              </a>
            ) : null}
          </div>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] bg-lumbre-black md:hidden">
          <button
            className="absolute inset-0"
            type="button"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            className="absolute left-0 top-0 z-[70] flex h-full w-full max-w-xs flex-col gap-6 bg-lumbre-black px-6 py-6 shadow-2xl ring-1 ring-lumbre-gray/70"
          >
            <div className="flex items-center gap-3">
              <button
                className={mobileButtonClass}
                type="button"
                aria-label="Close menu"
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setIsOpen(false)}
              >
                {menuIcon}
              </button>
              <span className="text-xs uppercase tracking-[0.35em] text-lumbre-off/70">Menu</span>
            </div>
            <ul className="space-y-4 text-sm uppercase tracking-[0.3em] text-lumbre-off/80">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className="block transition hover:text-lumbre-off"
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            {ctaLabel ? (
              <a className={ctaClass} href={ctaHref} onClick={() => setIsOpen(false)}>
                {ctaLabel}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
