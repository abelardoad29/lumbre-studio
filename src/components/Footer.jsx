const Footer = ({
  description = "",
  instagramLink = "",
  instagramLabel = "Instagram",
  copyrightLabel = "All rights reserved.",
}) => {
  const year = new Date().getFullYear();
  const instagramClasses =
    "inline-flex items-center justify-center rounded-full border border-lumbre-gray/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-off/70 transition hover:border-lumbre-off hover:text-lumbre-off";

  return (
    <footer className="border-t border-lumbre-gray/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-lumbre-off/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-lumbre-off">Lumbre Studio</p>
          {description ? <p className="mt-2 max-w-md text-xs text-lumbre-off/60">{description}</p> : null}
        </div>
        <div className="flex flex-col items-start gap-3 text-xs text-lumbre-off/50 md:items-end">
          {instagramLink ? (
            <a className={instagramClasses} href={instagramLink} target="_blank" rel="noreferrer">
              {instagramLabel}
            </a>
          ) : null}
          <div>© {year} Lumbre Studio. {copyrightLabel}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
