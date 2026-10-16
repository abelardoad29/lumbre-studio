import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemePreference } from "../hooks/useThemePreference";
import { isEnglishPath } from "../utils/language";
import Icon from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const LABELS = {
  es: { home: "Lumbre Studio, inicio", open: "Abrir menú", close: "Cerrar menú", menu: "Menú", theme: "Cambiar tema" },
  en: { home: "Lumbre Studio, home", open: "Open menu", close: "Close menu", menu: "Menu", theme: "Toggle theme" },
};

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <img src="/favicon.png" alt="" width="36" height="36" className="only-dark h-9 w-9 object-contain" />
    <img src="/favicon-black.png" alt="" width="36" height="36" className="only-light h-9 w-9 object-contain" />
    <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-lumbre-off">
      Lumbre<span className="text-lumbre-brown"> Studio</span>
    </span>
  </span>
);

const Navbar = ({ links = [], ctaLabel = "", ctaHref = "#contacto", activeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme } = useThemePreference();
  const { pathname } = useLocation();
  const progressRef = useRef(null);
  const panelRef = useRef(null);
  const menuId = "mobile-menu";
  const isEnglish = isEnglishPath(pathname);
  const labels = LABELS[isEnglish ? "en" : "es"];
  const homePath = isEnglish ? "/" : "/es";

  // Fondo del header y barra de progreso de lectura (sin re-render por cada pixel de scroll).
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 12);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(scrollTop / max, 1) : 0})`;
      }
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
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Menu movil: Escape para cerrar y foco atrapado dentro del panel.
  useEffect(() => {
    if (!isOpen) {
      return undefined;
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
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.querySelector("button")?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (event) => {
    if (pathname === homePath) {
      event.preventDefault();
      window.scrollTo({ top: 0 });
    }
  };

  const linkClass = (href) => {
    const isActive = activeId && href === `#${activeId}`;
    return `relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
      isActive ? "bg-lumbre-off/10 text-lumbre-off" : "text-lumbre-off/60 hover:text-lumbre-off"
    }`;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          isScrolled
            ? "border-lumbre-off/10 bg-lumbre-black/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="container-page flex h-[72px] items-center justify-between gap-4" aria-label={labels.menu}>
          <Link to={homePath} className="shrink-0 rounded-full" aria-label={labels.home} onClick={handleLogoClick}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-lumbre-off/10 bg-lumbre-off/[0.03] p-1 backdrop-blur lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className={linkClass(link.href)}
                  href={link.href}
                  aria-current={activeId && link.href === `#${activeId}` ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher />
              <ThemeToggle onToggleTheme={toggleTheme} label={labels.theme} />
            </div>
            {ctaLabel ? (
              <a className="btn-primary btn-sm hidden sm:inline-flex" href={ctaHref}>
                {ctaLabel}
              </a>
            ) : null}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lumbre-off/15 text-lumbre-off transition hover:border-lumbre-off/40 lg:hidden"
              type="button"
              aria-label={labels.open}
              aria-expanded={isOpen}
              aria-controls={menuId}
              onClick={() => setIsOpen(true)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </nav>
        <div
          ref={progressRef}
          className="absolute inset-x-0 -bottom-px h-px origin-left bg-gradient-to-r from-lumbre-brown via-lumbre-ember to-lumbre-brown [transform:scaleX(0)]"
          aria-hidden="true"
        />
      </header>

      {isOpen ? (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label={labels.menu}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-lumbre-black/95 backdrop-blur-xl lg:hidden"
        >
          <div className="container-page flex h-[72px] shrink-0 items-center justify-between">
            <Logo />
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lumbre-off/15 text-lumbre-off transition hover:border-lumbre-off/40"
              type="button"
              aria-label={labels.close}
              onClick={closeMenu}
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="container-page flex flex-1 flex-col justify-between gap-10 pb-10 pt-6">
            <ul className="space-y-1">
              {links.map((link, index) => (
                <li key={link.href} className="enter" style={{ "--enter-delay": `${60 + index * 50}ms` }}>
                  <a
                    className="group flex items-center justify-between border-b border-lumbre-off/10 py-4 text-3xl font-semibold tracking-tight text-lumbre-off/85 transition hover:text-lumbre-off"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                    <Icon
                      name="arrow"
                      className="h-5 w-5 -translate-x-2 text-lumbre-brown opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="enter space-y-6" style={{ "--enter-delay": "320ms" }}>
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle onToggleTheme={toggleTheme} label={labels.theme} />
              </div>
              {ctaLabel ? (
                <a className="btn-primary w-full" href={ctaHref} onClick={closeMenu}>
                  {ctaLabel}
                  <Icon name="arrow" className="btn-arrow h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
