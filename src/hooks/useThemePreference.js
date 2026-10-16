import { useEffect, useState } from "react";

export const THEME_PREF_KEY = "themePref";

const FAVICON_BY_THEME = {
  dark: "/favicon.png",
  light: "/favicon-black.png",
};

const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
};

const updateFavicon = (theme) => {
  const href = FAVICON_BY_THEME[theme] || FAVICON_BY_THEME.dark;
  let favicon = document.getElementById("favicon");

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.id = "favicon";
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  favicon.type = "image/png";
  favicon.href = href;
};

// Misma logica que el script inline de index.html, que aplica el tema antes del primer pintado.
const getInitialTheme = () => {
  const stored = localStorage.getItem(THEME_PREF_KEY);
  return stored === "light" || stored === "dark" ? stored : getSystemTheme();
};

export const useThemePreference = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    updateFavicon(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_PREF_KEY, next);
  };

  return { theme, toggleTheme };
};
