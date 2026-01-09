# Lumbre Studio Landing

Landing page de una sola pagina para Lumbre Studio, construida con React + Vite + Tailwind.

## Requisitos

- Node.js 18+
- npm

## Correr en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

## Deploy en Vercel

1. Sube este repo a GitHub, GitLab o Bitbucket.
2. Entra a Vercel y crea un nuevo proyecto desde el repo.
3. Vercel detecta Vite automaticamente. Build command: `npm run build`. Output: `dist`.
4. Haz deploy.

## Reemplazar logo y favicon

- Logo principal: `src/assets/logo.svg`
- Favicon: `public/favicon.svg`

Sustituye ambos archivos por los assets reales manteniendo los mismos nombres. Si usas PNG, actualiza la ruta en `src/components/Navbar.jsx` y el link en `index.html`.

## Configuracion de contacto

- Email: `contacto@lumbrestudio.com`
- WhatsApp: reemplaza el placeholder `https://wa.me/0000000000` en `src/App.jsx`
