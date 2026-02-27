import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { useActiveSection } from "../hooks/useActiveSection";
import { applySeo } from "../utils/seo";

const MAILTO_LINK =
  "mailto:contacto@lumbrestudio.com?subject=Demo%20-%20Software%20Empaque%20Agricola";

const LandingEmpaqueAgricola = ({ whatsappLink }) => {
  const pageTitle = "Software empaque agricola para trazabilidad | Lumbre Studio";
  const pageDescription =
    "Software empaque agricola para controlar recepcion, clasificacion, lotes, calidad y despacho con trazabilidad completa y reportes en tiempo real.";
  const canonicalPath = "/software-empaque-agricola";

  useEffect(() => {
    applySeo({
      title: pageTitle,
      description: pageDescription,
      path: canonicalPath,
      lang: "es",
    });
  }, [pageTitle, pageDescription, canonicalPath]);

  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-lumbre-off px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-black transition hover:bg-white";
  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-lumbre-brown px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-lumbre-off transition hover:border-lumbre-off hover:text-white";

  const whatsappReady = Boolean(whatsappLink);
  const whatsappButtonClass = `${secondaryButton} ${whatsappReady ? "" : "pointer-events-none opacity-50"}`;

  const navLinks = [
    { label: "Problema", href: "#problema" },
    { label: "Solucion", href: "#solucion" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#cta" },
  ];

  const activeSection = useActiveSection(["problema", "solucion", "beneficios", "features", "faq", "cta"]);

  const benefits = [
    "Trazabilidad por lote desde recepcion hasta despacho.",
    "Control de calidad en tiempo real por cuadrilla o linea.",
    "Etiquetado con codigos de barra o QR para evitar errores.",
    "Inventario de empaques, tarimas y materiales siempre actualizado.",
    "Reportes diarios de rendimiento, mermas y productividad.",
  ];

  const features = [
    "Captura rapida en recepcion y clasificacion por categorias.",
    "Asignacion de lotes y ordenes de empaque con reglas FIFO.",
    "Registro de inspecciones, rechazos y evidencias fotografias.",
    "Integracion con basculas y exportacion de datos a Excel o ERP.",
    "Panel operativo con alertas de cuello de botella y tiempos muertos.",
  ];

  const faqItems = [
    {
      question: "Funciona para exportacion y certificaciones?",
      answer:
        "Si. El sistema guarda trazabilidad por lote, evidencias de calidad y bitacoras que facilitan auditorias y cumplimiento.",
    },
    {
      question: "Se puede usar en piso con tablets o celulares?",
      answer:
        "Si. La interfaz es ligera y funciona en dispositivos moviles, con formularios rapidos para operacion en linea.",
    },
    {
      question: "Se adapta a nuestro flujo de trabajo?",
      answer:
        "Mapeamos tu proceso actual y configuramos etapas, reglas y reportes para que el sistema refleje tu operacion real.",
    },
    {
      question: "Que pasa si no tenemos ERP?",
      answer:
        "Puedes operar solo con el software de empaque o integrar despues cuando el ERP este listo.",
    },
  ];

  return (
    <div className="min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-lumbre-off focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-lumbre-black"
        href="#main"
      >
        Saltar al contenido principal
      </a>
      <Navbar links={navLinks} ctaLabel="Solicitar demo" ctaHref="#cta" activeId={activeSection} />
      <main id="main" className="pb-24">
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_top,_var(--lumbre-hero-glow),_transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-28">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Operaciones de empaque bajo control.</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Software empaque agricola
              </h1>
              <p className="mt-5 text-lg text-lumbre-off/80">
                Digitaliza recepcion, clasificacion, empaque y despacho con un sistema unico que conecta lotes,
                calidad y productividad. Ideal para empacadoras, exportadoras y centros de acopio que necesitan
                trazabilidad real y datos confiables en cada turno.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a className={primaryButton} href="#cta">
                  Solicitar demo
                </a>
                <a className={secondaryButton} href="/es#contacto">
                  Hablar con el equipo
                </a>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-lumbre-off/60">
                Respuesta en menos de 24 horas
              </p>
            </div>
            <div className="rounded-3xl border border-lumbre-gray/80 bg-lumbre-gray/40 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Enfoque</p>
                  <p className="mt-3 text-lg font-semibold text-lumbre-off">
                    Trazabilidad, control de calidad y rendimiento por linea.
                  </p>
                </div>
                <div className="grid gap-4 text-sm text-lumbre-off/70">
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Seguimiento de lotes sin perder tiempo en hojas de calculo.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Reportes diarios listos para exportacion y auditorias.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Alertas de mermas y cuellos de botella en tiempo real.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problema"
          eyebrow="Problema"
          title="Cuando el empaque depende de Excel, la trazabilidad se rompe"
          subtitle="Los errores de registro y la falta de visibilidad impactan costos y cumplimiento."
        >
          <p className="text-sm text-lumbre-off/70">
            En muchas empacadoras el control de lotes, la calidad y los rendimientos se anotan en papel o en
            archivos dispersos. Eso provoca retrasos para detectar mermas, errores en etiquetas y poca claridad
            sobre lo que realmente salio en cada embarque.
          </p>
          <p className="mt-4 text-sm text-lumbre-off/70">
            El resultado es doble: pierdes tiempo en reconciliar datos y pierdes confianza frente a clientes o
            certificadoras. Un software empaque agricola unifica el flujo y elimina la incertidumbre operativa.
          </p>
        </Section>

        <Section
          id="solucion"
          eyebrow="Solucion"
          title="Un sistema de empaque conectado de punta a punta"
          subtitle="Recepcion, clasificacion, empaque y despacho con la misma fuente de datos."
        >
          <p className="text-sm text-lumbre-off/70">
            Implementamos un software empaque agricola que captura datos en cada etapa, asigna lotes, controla
            calidad y libera pedidos con reglas claras. Cada movimiento queda registrado para que el equipo de
            produccion y el de calidad trabajen con la misma version de la verdad.
          </p>
          <p className="mt-4 text-sm text-lumbre-off/70">
            El panel operativo muestra rendimientos por linea, tiempos muertos y cumplimiento de ordenes, con
            reportes listos para exportar o integrar con tu ERP.
          </p>
        </Section>

        <Section
          id="beneficios"
          eyebrow="Beneficios"
          title="Beneficios reales para operaciones agroindustriales"
          subtitle="Menos errores, mas control y decisiones basadas en datos diarios."
        >
          <ul className="grid gap-3 text-sm text-lumbre-off/70 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                {benefit}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="features"
          eyebrow="Features"
          title="Funcionalidades clave del software"
          subtitle="Diseñado para operar en piso sin perder velocidad."
        >
          <ul className="grid gap-3 text-sm text-lumbre-off/70 md:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                {feature}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas mas comunes antes de iniciar."
        >
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-5">
                <h3 className="text-sm font-semibold text-lumbre-off">{item.question}</h3>
                <p className="mt-2 text-sm text-lumbre-off/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="cta"
          eyebrow="Contacto"
          title="Agenda una demo y define tu flujo ideal"
          subtitle="Te mostramos como el software empaque agricola se adapta a tu planta."
          className="bg-lumbre-gray/20"
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm text-lumbre-off/70">
              Cuentanos cuantas lineas tienes, que productos empacas y que reportes necesitas. En menos de una
              semana puedes tener un piloto funcional con los datos de tu operacion.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className={primaryButton} href={MAILTO_LINK}>
                Solicitar demo
              </a>
              <a
                className={whatsappButtonClass}
                href={whatsappReady ? whatsappLink : "/es#contacto"}
                target={whatsappReady ? "_blank" : undefined}
                rel={whatsappReady ? "noreferrer" : undefined}
                aria-disabled={!whatsappReady}
              >
                WhatsApp directo
              </a>
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Enlaces relacionados</div>
            <div className="flex flex-col gap-2 text-sm text-lumbre-off/70">
              <a className="underline" href="/sistema-nomina-agricola">
                Sistema nomina agricola
              </a>
              <a className="underline" href="/control-asistencia-qr">
                Control asistencia QR
              </a>
              <a className="underline" href="/es">
                Volver al inicio
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer
        description="Software operativo para empacadoras y agroindustrias que necesitan control y trazabilidad."
        links={navLinks}
        socialLinks={[{ label: "Instagram", href: "https://instagram.com/lumbre.studiomx" }]}
        labels={{
          navLabel: "Navegacion",
          legalLabel: "Legal",
          connectionsLabel: "Conexiones",
          tagline: "Software a medida para operaciones agroindustriales.",
        }}
        copyrightLabel="Todos los derechos reservados."
      />
    </div>
  );
};

export default LandingEmpaqueAgricola;