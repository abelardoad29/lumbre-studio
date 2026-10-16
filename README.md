# Lumbre Studio Landing

Sitio bilingüe (EN/ES) de Lumbre Studio, estudio de páginas web y software a medida.
React + Vite + Tailwind, con HTML pre-renderizado por ruta para SEO.

## Requisitos

- Node.js 18+
- npm

## Correr en local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Rutas (bilingüe)

- `/` = Inglés (EN)
- `/es` = Español (ES)

## Idioma y moneda automáticos

- Un script inline en `index.html` lee `navigator.languages` antes de pintar: si el navegador prefiere español,
  redirige de `/` a `/es` sin parpadeo. Nunca saca a nadie de `/es` (Google navega en inglés).
- El idioma define la moneda: `/es` muestra precios en MXN y `/` en USD (ver `docs/precios.md`).
- El selector ES/EN guarda la preferencia manual en `localStorage` (`langPref`) y desactiva la redirección.

## Contenido y precios

- Todo el texto de la página principal: `src/content/home.es.js` y `src/content/home.en.js`
  (una sola página, `src/pages/Home.jsx`, renderiza ambos idiomas).
- Precios: objeto `PRICES` al inicio de cada archivo de contenido. Justificación y fuentes en `docs/precios.md`.
- Email, WhatsApp e Instagram: `src/content/site.js`.
- Secciones de la página: `src/components/home/`.
- Botón flotante de Instagram: `src/components/FloatingInstagramButton.jsx` (aparece al bajar, se oculta sobre el
  formulario y el footer, y se puede descartar).
- Landings agrícolas (solo español): `src/pages/Landing*Agricola*.jsx` y `LandingControlAsistenciaQr.jsx`.

## Animaciones

- Al hacer scroll: agrega `data-reveal` (`""`, `"fade"`, `"scale"`, `"left"`, `"right"`) a cualquier elemento.
  `src/hooks/useScrollReveal.js` lo revela al entrar en pantalla. Retraso escalonado con `revealDelay()` de
  `src/utils/spotlight.js`.
- Respetan `prefers-reduced-motion`. Sin JavaScript el contenido se muestra completo.

## Deploy en Vercel

1. Sube este repo a GitHub, GitLab o Bitbucket.
2. Entra a Vercel y crea un nuevo proyecto desde el repo.
3. Vercel detecta Vite automáticamente. Build command: `npm run build`. Output: `dist`.
4. `vercel.json` ya sirve el HTML pre-renderizado de cada ruta (rewrites) y `404.html` para rutas desconocidas.
5. Haz deploy.

## Reemplazar logo y favicon

- Archivo fuente (crema sobre transparente): `src/assets/logo-lumbre.png`
- Logo del footer: `src/assets/logo-cactus.png` (crema; en modo claro se invierte con `.logo-mark`)
- Logo del navbar y favicon de la pestaña según el tema: `public/favicon.png` / `public/favicon-black.png`
- Favicon para Google, ícono PWA/iOS, logo JSON-LD e imagen OG: ver "Assets SEO" en `docs/seo.md`.
  El favicon para Google debe tener fondo sólido: Google no ejecuta el cambio de tema y lo muestra sobre fondo claro.

Sustituye los archivos por los assets reales manteniendo los mismos nombres.

## SEO

Títulos, descripciones y rutas viven en `src/content/seo.js`. Ver `docs/seo.md`.

## Configuración de contacto

- Email, WhatsApp e Instagram: `CONTACT` en `src/content/site.js`.

## Formulario de contacto (Resend + Vercel)

- Endpoint: `POST /api/contact`
- Variables de entorno en Vercel (Production/Preview/Development):
  - `RESEND_API_KEY`
  - `CONTACT_TO` (ej. `contacto@lumbrestudio.com`)
  - `CONTACT_FROM` (ej. `hola@lumbrestudio.com`, debe estar verificado en Resend)
  - `TURNSTILE_SECRET_KEY` (Cloudflare Turnstile)
  - `VITE_TURNSTILE_SITE_KEY` (Cloudflare Turnstile, frontend)
- Después de configurar env vars, haz redeploy.

### Local

Crea `.env.local` en la raíz:

```bash
RESEND_API_KEY=tu_api_key
CONTACT_TO=contacto@lumbrestudio.com
CONTACT_FROM=hola@lumbrestudio.com
TURNSTILE_SECRET_KEY=tu_turnstile_secret
VITE_TURNSTILE_SITE_KEY=tu_turnstile_site_key
```

Reinicia `npm run dev`.
