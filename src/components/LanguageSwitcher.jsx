import { Link, useLocation } from "react-router-dom";
import { isEnglishPath, saveLanguagePreference } from "../utils/language";

const OPTIONS = [
  { lang: "es", label: "ES", to: "/es", name: "Español" },
  { lang: "en", label: "EN", to: "/", name: "English" },
];

const LanguageSwitcher = ({ className = "" }) => {
  const { pathname } = useLocation();
  const current = isEnglishPath(pathname) ? "en" : "es";

  return (
    <div
      className={`relative inline-flex items-center rounded-full border border-lumbre-off/10 p-1 ${className}`}
      role="group"
      aria-label={current === "es" ? "Idioma" : "Language"}
    >
      <span
        className={`absolute bottom-1 top-1 w-9 rounded-full bg-lumbre-off/10 transition-transform duration-300 ease-out-expo ${
          current === "en" ? "translate-x-9" : "translate-x-0"
        }`}
        aria-hidden="true"
      />
      {OPTIONS.map((option) => {
        const baseClass =
          "relative z-10 inline-flex h-8 w-9 items-center justify-center rounded-full text-xs font-semibold transition-colors";
        // El idioma actual no es un enlace: en las landings en espanol llevaria a /es en lugar de quedarse.
        if (option.lang === current) {
          return (
            <span key={option.lang} className={`${baseClass} text-lumbre-off`} lang={option.lang} aria-current="true">
              <span className="sr-only">{option.name}</span>
              <span aria-hidden="true">{option.label}</span>
            </span>
          );
        }
        return (
          <Link
            key={option.lang}
            className={`${baseClass} text-lumbre-off/60 hover:text-lumbre-off`}
            to={option.to}
            hrefLang={option.lang}
            lang={option.lang}
            aria-label={option.name}
            onClick={() => saveLanguagePreference(option.lang)}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
