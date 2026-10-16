import { useLocation } from "react-router-dom";
import logo from "../assets/logo-cactus.png";
import { CONTACT, mailtoUrl, whatsappUrl } from "../content/site.js";
import { isEnglishPath } from "../utils/language";
import Icon from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";

const SOCIAL_ICONS = { Instagram: "instagram" };

const Footer = ({
  description = "",
  links = [],
  legalLinks = [],
  socialLinks = [],
  copyrightLabel = "All rights reserved.",
  labels = {},
}) => {
  const { pathname } = useLocation();
  const isEnglish = isEnglishPath(pathname);
  const year = new Date().getFullYear();
  const {
    navLabel = isEnglish ? "Explore" : "Navegación",
    legalLabel = "Legal",
    connectionsLabel = isEnglish ? "Contact" : "Contacto",
    tagline = "Code that’s pure fire.",
  } = labels;

  const contactLinks = [
    { label: CONTACT.email, href: mailtoUrl(), icon: "mail" },
    { label: "WhatsApp", href: whatsappUrl(), icon: "chat", external: true },
    ...socialLinks.map((link) => ({ ...link, icon: SOCIAL_ICONS[link.label] || "globe", external: true })),
  ];

  const columnTitle = "font-mono text-[11px] uppercase tracking-[0.24em] text-lumbre-off/60";
  const linkClass = "text-sm text-lumbre-off/70 transition-colors hover:text-lumbre-off";

  return (
    <footer className="relative overflow-hidden border-t border-lumbre-off/10" data-fab-hide="">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img src={logo} alt="Lumbre Studio" width="104" height="160" className="logo-mark h-12 w-auto" loading="lazy" />
          {description ? <p className="mt-6 max-w-sm text-sm leading-relaxed text-lumbre-off/60">{description}</p> : null}
          <div className="mt-6">
            <LanguageSwitcher />
          </div>
        </div>

        <nav className="md:col-span-3" aria-label={navLabel}>
          <p className={columnTitle}>{navLabel}</p>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a className={linkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {legalLinks.length ? (
          <div className="md:col-span-2">
            <p className={columnTitle}>{legalLabel}</p>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a className={linkClass} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className={legalLinks.length ? "md:col-span-2" : "md:col-span-4"}>
          <p className={columnTitle}>{connectionsLabel}</p>
          <ul className="mt-5 space-y-3">
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`${linkClass} inline-flex items-center gap-2.5 break-all`}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon name={link.icon} className="h-4 w-4 shrink-0 text-lumbre-brown" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page" aria-hidden="true">
        <p className="select-none bg-gradient-to-b from-lumbre-off/[0.09] to-transparent bg-clip-text text-center text-[19vw] font-bold leading-[0.8] tracking-[-0.06em] text-transparent md:text-[11.5rem]">
          LUMBRE
        </p>
      </div>

      <div className="border-t border-lumbre-off/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-lumbre-off/60 sm:flex-row sm:items-center sm:justify-between">
          <span suppressHydrationWarning>
            © {year} Lumbre Studio. {copyrightLabel}
          </span>
          <span className="font-mono">{tagline}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
