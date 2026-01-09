import logo from "../assets/logo-cactus.png";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ links = [] }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-lumbre-gray/80 bg-lumbre-black/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Primary"
      >
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Lumbre Studio logo" className="h-10 w-auto logo-mark" />
        </a>
        <div className="flex flex-wrap items-center gap-4">
          <ul className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-lumbre-off/70">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-lumbre-off" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
