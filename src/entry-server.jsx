import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export { buildStructuredData } from "./content/structuredData.js";

// Lo usa scripts/prerender-seo.mjs para escribir el HTML completo de cada ruta en dist/.
export const render = (url) =>
  renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
