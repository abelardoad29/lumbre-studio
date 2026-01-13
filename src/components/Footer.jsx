import logo from "../assets/logo-cactus.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = ({
  description = "",
  links = [],
  legalLinks = [],
  socialLinks = [],
  copyrightLabel = "All rights reserved.",
  labels = {},
}) => {
  const year = new Date().getFullYear();
  const {
    navLabel = "Navegación",
    legalLabel = "Legal",
    connectionsLabel = "Conexiones",
    tagline = "Premium software studio for teams that need control.",
  } = labels;
  const hasLegalLinks = legalLinks.length > 0;
  const gridClass = hasLegalLinks
    ? "md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]"
    : "md:grid-cols-[1.2fr_0.8fr_0.8fr]";

  return (
    <footer className="border-t border-lumbre-gray/70 pb-16 md:pb-0">
      <div className={`mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 text-sm text-lumbre-off/70 ${gridClass}`}>
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Lumbre Studio logo" className="h-10 w-auto logo-mark" />
          <p className="text-xs uppercase tracking-[0.4em] text-lumbre-off">Lumbre Studio</p>
          {description ? <p className="text-xs text-lumbre-off/60">{description}</p> : null}
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">{navLabel}</p>
          <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em]">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-lumbre-off" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {hasLegalLinks ? (
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">{legalLabel}</p>
            <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em]">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition hover:text-lumbre-off" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">{connectionsLabel}</p>
          <div className="mt-4 flex flex-col gap-3 text-xs">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-lumbre-off/70 transition hover:text-lumbre-off"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="border-t border-lumbre-gray/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-lumbre-off/50 md:flex-row md:items-center md:justify-between">
          <span>© {year} Lumbre Studio. {copyrightLabel}</span>
          <span>{tagline}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
