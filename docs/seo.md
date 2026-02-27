# SEO basico

## Variables de entorno
- `VITE_PUBLIC_SITE_URL` controla el dominio canonical y las URLs de OG/JSON-LD en `index.html`.
- En desarrollo puedes usar el valor actual, pero en produccion debes configurarlo en tu hosting.
- Usa el dominio sin slash final, por ejemplo: `https://lumbrestudio.com`.

## Cambiar title/description por pagina
- Las paginas usan `applySeo` desde `src/utils/seo.js`.
Edita `pageTitle`, `pageDescription` y `canonicalPath` en cada pagina:
- `src/pages/LandingEN.jsx`
- `src/pages/LandingES.jsx`
- `src/pages/LandingEmpaqueAgricola.jsx`
- `src/pages/LandingNominaAgricola.jsx`
- `src/pages/LandingControlAsistenciaQr.jsx`

## Sitemap y robots
- `public/robots.txt` apunta a `https://lumbrestudio.com/sitemap.xml`.
- `public/sitemap.xml` contiene las rutas actuales y `lastmod`.
- Si cambias el dominio o agregas nuevas rutas, actualiza ambos archivos.

## Assets SEO
- Favicon: `public/favicon.ico`, `public/favicon.png`, `public/favicon.svg`.
- Apple touch icon: `public/apple-touch-icon.png`.
- OG image: `public/og-cover.png`.

## Request indexing en Search Console
1. Entra a Search Console y selecciona la propiedad correcta.
2. Ve a "Inspeccion de URL" y pega la pagina que quieres indexar.
3. Haz clic en "Solicitar indexacion".
4. En "Sitemaps", envia `https://lumbrestudio.com/sitemap.xml` si aun no esta.

## Checklist rapido
- Favicon visible en resultados.
- `index.html` incluye canonical, OG, Twitter y JSON-LD.
- `/robots.txt` y `/sitemap.xml` responden correctamente.
- Las landing pages nuevas tienen H1, metadata unica y enlaces internos.
