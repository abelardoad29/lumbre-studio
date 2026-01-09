import logo from "../assets/logo-cactus.png";

const Footer = ({ description = "", copyrightLabel = "All rights reserved." }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lumbre-gray/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-lumbre-off/70 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <img src={logo} alt="Lumbre Studio logo" className="h-10 w-auto logo-mark" />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-lumbre-off">Lumbre Studio</p>
            {description ? <p className="mt-2 max-w-md text-xs text-lumbre-off/60">{description}</p> : null}
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 text-xs text-lumbre-off/50 md:items-end">
          <div>© {year} Lumbre Studio. {copyrightLabel}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
