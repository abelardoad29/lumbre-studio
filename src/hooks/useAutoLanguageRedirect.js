import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const LANG_PREF_KEY = "langPref";

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

    if (pathname !== "/" && pathname !== "/es") {
      return;
    }

    const detected = detectLanguage();
    const target = detected === "es" ? "/es" : "/";
    if (pathname !== target) {
      navigate(target, { replace: true });
    }
  }, [navigate, pathname]);
};
