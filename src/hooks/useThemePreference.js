import { useCallback, useEffect } from "react";

export const THEME_PREF_KEY = "themePref";

const FAVICON_BY_THEME = {
  dark: "/favicon.png",
  light: "/favicon-black.png",
};

const THEME_COLOR = {
  dark: "#0B0B0B",
  light: "#F7F4EF",
};

// El tema inicial lo aplica el script inline de index.html antes del primer pintado.
// Aqui solo se lee de <html data-theme>, asi el render es igual en el servidor y en el navegador
// (los iconos y logos que dependen del tema se intercambian con CSS: .only-dark / .only-light).
const getCurrentTheme = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

const syncThemeAssets = (theme) => {
  let favicon = document.getElementById("favicon");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.id = "favicon";
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }
  favicon.type = "image/png";
  favicon.href = FAVICON_BY_THEME[theme];

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", THEME_COLOR[theme]);
  }
};

export const useThemePreference = () => {
  useEffect(() => {
    syncThemeAssets(getCurrentTheme());
  }, []);

  const toggleTheme = useCallback(() => {
    const next = getCurrentTheme() === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    syncThemeAssets(next);
    try {
      localStorage.setItem(THEME_PREF_KEY, next);
    } catch (error) {
      // Sin almacenamiento: el tema aplica solo a esta visita.
    }
  }, []);

  return { toggleTheme };
};
