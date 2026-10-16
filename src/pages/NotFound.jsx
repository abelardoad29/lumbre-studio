import { useEffect } from "react";
import { HeroBackground } from "../components/home/Hero";
import Icon from "../components/Icon";

// Se pre-renderiza como dist/404.html; Vercel lo sirve con estado 404 para cualquier ruta desconocida.
const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Lumbre Studio";
  }, []);

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center px-5 py-20">
      <HeroBackground />
      <main className="text-center">
        <img src="/favicon.png" alt="" width="56" height="56" className="only-dark mx-auto h-14 w-14" />
        <img src="/favicon-black.png" alt="" width="56" height="56" className="only-light mx-auto h-14 w-14" />
        <p className="eyebrow mt-8">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-lumbre-off sm:text-5xl">
          <span lang="es">Página no encontrada</span>
          <span className="mt-2 block text-2xl text-lumbre-off/60 sm:text-3xl" lang="en">
            Page not found
          </span>
        </h1>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="btn-primary" href="/es" hrefLang="es">
            Ir al inicio
            <Icon name="arrow" className="btn-arrow h-4 w-4" />
          </a>
          <a className="btn-secondary" href="/" hrefLang="en">
            Go to homepage
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
