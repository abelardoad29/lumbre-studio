# Lumbre Studio Landing

Landing bilingüe (EN/ES) para Lumbre Studio, construida con React + Vite + Tailwind.

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

## Idioma automático

- Detecta idioma con `navigator.language` / `navigator.languages`.
- Guarda preferencia manual en `localStorage` (`langPref`).

## Contenido y productos

- Copys por idioma: `src/pages/LandingEN.jsx` y `src/pages/LandingES.jsx`.
- Productos y precios: `src/content/products.en.js` y `src/content/products.es.js`.
- Links editables (Instagram/WhatsApp): `INSTAGRAM_URL` y `WHATSAPP_LINK` en `src/App.jsx`.
- Botón flotante de Instagram: `src/components/FloatingInstagramButton.jsx`.

## Deploy en Vercel

1. Sube este repo a GitHub, GitLab o Bitbucket.
2. Entra a Vercel y crea un nuevo proyecto desde el repo.
3. Vercel detecta Vite automáticamente. Build command: `npm run build`. Output: `dist`.
4. Asegura fallback para SPA (para rutas como `/es`). Puedes usar `vercel.json` con rewrites.
5. Haz deploy.

## Reemplazar logo y favicon

- Logo principal: `src/assets/logo-cactus.png`
- Archivo fuente: `src/assets/LogoLumbre.png`
- Favicon: `public/favicon.png`

Sustituye los archivos por los assets reales manteniendo los mismos nombres.

## Configuración de contacto

- Email: `contacto@lumbrestudio.com`
- WhatsApp: actualiza `WHATSAPP_LINK` en `src/App.jsx`
- Instagram: actualiza `INSTAGRAM_URL` en `src/App.jsx`
