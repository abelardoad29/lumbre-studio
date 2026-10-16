import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// En produccion cada ruta llega pre-renderizada (scripts/prerender-seo.mjs) y se hidrata en lugar de
// volver a pintar. data-path dice que ruta contiene el HTML ("*" = pagina 404); si no coincide con la URL
// (p. ej. un servidor que responde index.html para todo), se descarta y se renderiza desde cero.
// En desarrollo el contenedor llega vacio.
const prerenderedPath = container.dataset.path;
if (prerenderedPath && (prerenderedPath === "*" || prerenderedPath === window.location.pathname)) {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.textContent = "";
  ReactDOM.createRoot(container).render(app);
}
