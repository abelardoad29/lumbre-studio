# SEO basico

## Dominio
- El dominio canonico es `SITE_URL` en `src/content/seo.js` (`https://lumbrestudio.com`).
- `VITE_PUBLIC_SITE_URL` puede sobrescribirlo (SEO en el navegador, HTML por ruta y sitemap).
- Usa el dominio sin slash final, por ejemplo: `https://lumbrestudio.com`.
- `index.html` tambien tiene el dominio escrito en OG image y JSON-LD; si cambias de dominio, actualizalo ahi.

## Cambiar title/description por pagina
- Todo vive en `PAGE_SEO` dentro de `src/content/seo.js` (title, description, lang por ruta).
- Las paginas lo aplican con `applySeo` (`src/utils/seo.js`) y el build lo escribe en el HTML inicial.

## HTML por ruta (importante para Google y vistas previas)
- `npm run build` corre `scripts/prerender-seo.mjs` al final (`postbuild`). Genera `dist/es.html`,
  `dist/software-empaque-agricola.html`, etc., cada uno con su `lang`, title, description, canonical, OG y hreflang.
- `vercel.json` sirve cada archivo en su ruta con un rewrite. Si falta un rewrite, el build falla y te dice cual agregar.
- hreflang solo une `/` (en) y `/es` (es). Las landings agricolas son solo en espanol y no llevan hreflang.
- El idioma automatico solo redirige de `/` a `/es` (navegador en espanol). Nunca saca a nadie de `/es`:
  Googlebot navega en ingles y debe poder ver la pagina en espanol.

## Agregar una pagina nueva
1. Agrega la ruta en `src/App.jsx`.
2. Agrega su entrada en `PAGE_SEO` (`src/content/seo.js`) y usala en la pagina con `applySeo`.
3. Agrega su rewrite en `vercel.json`, antes del catch-all `/(.*)`.
4. El sitemap la incluye solo.

## Sitemap y robots
- `public/robots.txt` apunta a `https://lumbrestudio.com/sitemap.xml`.
- El sitemap se genera en cada build con `scripts/generate-sitemap.mjs` a partir de las rutas de `PAGE_SEO`.

## Assets SEO
- Favicon (lo que ve Google): `public/favicon.ico` (16/32/48) y `public/icon-192.png`, con fondo solido `#0B0B0B`.
  Google no ejecuta JS para leer el favicon y lo muestra sobre fondo claro: no usar iconos con fondo transparente aqui.
- `public/favicon.png` y `public/favicon-black.png` (transparentes) solo los usa el Navbar y el cambio de tema en `useThemePreference`.
- PWA: `public/icon-192.png`, `public/icon-512.png`.
- Apple touch icon: `public/apple-touch-icon.png` (180x180).
- Logo JSON-LD (Organization): `public/logo-cactus.png` (512x512, negro sobre blanco).
- OG image: `public/og-cover.png` (1200x630).
- Se generan desde `src/assets/logo-lumbre.png`.

## Request indexing en Search Console
1. Entra a Search Console y selecciona la propiedad correcta.
2. Ve a "Inspeccion de URL" y pega la pagina que quieres indexar.
3. Haz clic en "Solicitar indexacion".
4. En "Sitemaps", envia `https://lumbrestudio.com/sitemap.xml` si aun no esta.

## Checklist rapido
- Favicon visible en resultados.
- Cada ruta tiene su propio title, description y canonical en el HTML (ver codigo fuente, no el inspector).
- `/robots.txt` y `/sitemap.xml` responden correctamente.
- Las landing pages nuevas tienen H1, metadata unica y enlaces internos.
