import Icon from "./Icon";

const ThemeToggle = ({ onToggleTheme, label = "Toggle theme" }) => (
  <button
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lumbre-off/10 text-lumbre-off/70 transition duration-300 hover:rotate-12 hover:border-lumbre-off/30 hover:text-lumbre-off"
    type="button"
    onClick={onToggleTheme}
    aria-label={label}
    title={label}
  >
    <span className="only-dark">
      <Icon name="sun" className="h-[18px] w-[18px]" />
    </span>
    <span className="only-light">
      <Icon name="moon" className="h-[18px] w-[18px]" />
    </span>
  </button>
);

export default ThemeToggle;
