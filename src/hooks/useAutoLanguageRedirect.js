import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const LANG_PREF_KEY = "langPref";

// Solo "/" esta en ingles; "/es" y las landings agricolas son en espanol.
export const isEnglishPath = (pathname) => pathname === "/";

const detectLanguage = () => {
  const langs = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  const hasSpanish = langs.some((lang) => String(lang).toLowerCase().startsWith("es"));
  return hasSpanish ? "es" : "en";
};

export const useAutoLanguageRedirect = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem(LANG_PREF_KEY);
    if (stored === "en" || stored === "es") {
      return;
    }

    // Solo se redirige desde "/" hacia "/es". Nunca se saca a nadie de "/es": quien abre esa URL
    // quiere espanol, y Googlebot (navegador en ingles) debe poder renderizar e indexar "/es".
    if (pathname !== "/") {
      return;
    }

    if (detectLanguage() === "es") {
      navigate("/es", { replace: true });
    }
  }, [navigate, pathname]);
};
