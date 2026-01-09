import { Link, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es");

  const baseClass = "text-xs uppercase tracking-[0.35em] transition";
  const activeClass = "text-lumbre-off";
  const inactiveClass = "text-lumbre-off/50 hover:text-lumbre-off";

  return (
    <div className="flex items-center gap-2">
      <Link className={`${baseClass} ${!isSpanish ? activeClass : inactiveClass}`} to="/">
        EN
      </Link>
      <span className="text-xs text-lumbre-off/40">|</span>
      <Link className={`${baseClass} ${isSpanish ? activeClass : inactiveClass}`} to="/es">
        ES
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
