import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

const mailtoLink =
  "mailto:contacto@lumbrestudio.com?subject=Cotizaci%C3%B3n%20-%20Lumbre%20Studio";
const whatsappLink = "https://wa.me/0000000000";

const services = [
  {
    title: "Estrategia y discovery",
    description:
      "Alineamos vision, metas y alcance para que el producto salga al mercado con claridad.",
  },
  {
    title: "Frontend premium",
    description:
      "Interfaces rapidas, accesibles y coherentes con tu marca, listas para escalar.",
  },
  {
    title: "Plataformas a medida",
    description:
      "Sistemas web y dashboards robustos con integraciones y automatizaciones clave.",
  },
];

const processSteps = [
  {
    title: "Inmersion",
    description: "Entendemos el negocio, el usuario y el contexto tecnico real.",
  },
  {
    title: "Arquitectura",
    description: "Definimos el plan, el stack y los entregables con precision.",
  },
  {
    title: "Construccion",
    description: "Iteramos con entregas continuas, pruebas y visibilidad total.",
  },
  {
    title: "Evolucion",
    description: "Medimos impacto, optimizamos y mantenemos velocidad.",
  },
];

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-lumbre-off px-6 py-3 text-sm font-semibold text-lumbre-black transition hover:bg-white";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-lumbre-brown px-6 py-3 text-sm font-semibold text-lumbre-off transition hover:border-lumbre-off hover:text-white";

function App() {
  return (
    <div className="min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-lumbre-off focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-lumbre-black"
        href="#main"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main">
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_top,_rgba(42,42,42,0.6),_transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-24 md:pt-28">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Estudio digital</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Producto digital con estetica industrial y precision tecnica.
              </h1>
              <p className="mt-6 text-lg text-lumbre-off/80">C&oacute;digo que es pura lumbre.</p>
              <p className="mt-4 text-sm text-lumbre-off/60">
                Construimos plataformas y experiencias web que combinan diseno minimalista, velocidad y
                estrategia de negocio.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a className={primaryButton} href={mailtoLink}>
                  Solicitar cotizacion
                </a>
                <a className={secondaryButton} href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-lumbre-gray/80 bg-lumbre-gray/40 p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Enfoque</p>
                  <p className="mt-3 text-lg font-semibold text-lumbre-off">
                    Producto, performance, escalabilidad.
                  </p>
                </div>
                <div className="grid gap-6 text-sm text-lumbre-off/70">
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Roadmap claro para equipos internos o startups en crecimiento.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Implementacion limpia, documentada y facil de mantener.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Diseno funcional con enfoque en conversion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problema"
          eyebrow="Problema"
          title="La brecha entre vision y ejecucion tecnica"
          subtitle="Los equipos de producto necesitan velocidad sin sacrificar calidad, pero los procesos tradicionales frenan la innovacion."
        >
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-base text-lumbre-off/80">
              Lumbre Studio trabaja como un equipo senior extendido: alineamos estrategia y tecnologia
              para que cada release tenga impacto tangible y sostenga el crecimiento.
            </p>
            <ul className="space-y-4 text-sm text-lumbre-off/70">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Proyectos con tiempos extendidos y poco foco en experiencia de usuario.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Plataformas sin mantenimiento o con arquitectura fragil.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lumbre-brown" aria-hidden="true" />
                Equipos internos saturados que necesitan apoyo inmediato.
              </li>
            </ul>
          </div>
        </Section>

        <Section
          id="servicios"
          eyebrow="Servicios"
          title="Soluciones digitales con enfoque en impacto"
          subtitle="Selecciona el nivel de apoyo que necesitas: desde discovery hasta construccion completa."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-lumbre-gray/80 bg-lumbre-gray/30 p-6 transition hover:border-lumbre-brown/80"
              >
                <h3 className="text-lg font-semibold text-lumbre-off">{service.title}</h3>
                <p className="mt-3 text-sm text-lumbre-off/70">{service.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="proceso"
          eyebrow="Proceso"
          title="Un flujo claro para equipos que no pueden detenerse"
          subtitle="Metodologia compacta con visibilidad y entregables medibles."
        >
          <ol className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-lumbre-brown">
                  Paso {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-lumbre-off">{step.title}</h3>
                <p className="mt-2 text-sm text-lumbre-off/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="contacto"
          eyebrow="Contacto"
          title="Listos para encender tu producto"
          subtitle="Escribenos para una cotizacion inicial y definamos el siguiente release."
          className="bg-lumbre-gray/20"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <a className={primaryButton} href={mailtoLink}>
              Solicitar cotizacion
            </a>
            <a className={secondaryButton} href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
