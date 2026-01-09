const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lumbre-gray/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-lumbre-off/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-lumbre-off">Lumbre Studio</p>
          <p className="mt-2 max-w-md text-xs text-lumbre-off/60">
            Estudio digital enfocado en producto, performance y crecimiento sostenible.
          </p>
        </div>
        <div className="text-xs text-lumbre-off/50">© {year} Lumbre Studio. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
