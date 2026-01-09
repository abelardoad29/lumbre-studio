import { Link, useLocation } from "react-router-dom";
import { LANG_PREF_KEY } from "../hooks/useAutoLanguageRedirect";

const LanguageSwitcher = () => {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es");

  const baseClass = "text-xs uppercase tracking-[0.35em] transition";
  const activeClass = "text-lumbre-off";
  const inactiveClass = "text-lumbre-off/50 hover:text-lumbre-off";

  const setPreference = (lang) => {
    localStorage.setItem(LANG_PREF_KEY, lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Link
        className={`${baseClass} ${!isSpanish ? activeClass : inactiveClass}`}
        to="/"
        onClick={() => setPreference("en")}
      >
        EN
      </Link>
      <span className="text-xs text-lumbre-off/40">|</span>
      <Link
        className={`${baseClass} ${isSpanish ? activeClass : inactiveClass}`}
        to="/es"
        onClick={() => setPreference("es")}
      >
        ES
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
