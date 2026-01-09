import { useThemePreference } from "../hooks/useThemePreference";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemePreference();
  const isLight = theme === "light";
  const label = isLight ? "Dark" : "Light";

  return (
    <button
      className="inline-flex items-center justify-center rounded-full border border-lumbre-gray/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-off/70 transition hover:border-lumbre-off hover:text-lumbre-off"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {label}
    </button>
  );
};

export default ThemeToggle;
