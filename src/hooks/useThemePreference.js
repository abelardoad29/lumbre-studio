import { useEffect, useState } from "react";

export const THEME_PREF_KEY = "themePref";

const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
};

export const useThemePreference = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem(THEME_PREF_KEY);
    const initial = stored === "light" || stored === "dark" ? stored : getSystemTheme();
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_PREF_KEY, next);
  };

  return { theme, toggleTheme };
};
