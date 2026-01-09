/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lumbre: {
          black: "rgb(var(--lumbre-black) / <alpha-value>)",
          gray: "rgb(var(--lumbre-gray) / <alpha-value>)",
          brown: "rgb(var(--lumbre-brown) / <alpha-value>)",
          off: "rgb(var(--lumbre-off) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
