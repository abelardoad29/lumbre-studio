import logo from "../assets/logo.svg";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-lumbre-gray/80 bg-lumbre-black/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Navegacion principal"
      >
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Logo de Lumbre Studio" className="h-9 w-9" />
          <span className="text-xs uppercase tracking-[0.4em] text-lumbre-off">Lumbre Studio</span>
        </a>
        <ul className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-lumbre-off/70">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-lumbre-off" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
