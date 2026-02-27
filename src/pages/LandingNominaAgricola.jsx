import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { useActiveSection } from "../hooks/useActiveSection";
import { applySeo } from "../utils/seo";

const MAILTO_LINK =
  "mailto:contacto@lumbrestudio.com?subject=Demo%20-%20Sistema%20Nomina%20Agricola";

const LandingNominaAgricola = ({ whatsappLink }) => {
  const pageTitle = "Sistema nomina agricola para cuadrillas | Lumbre Studio";
  const pageDescription =
    "Sistema nomina agricola para calcular pagos por jornada, destajo y bonos con asistencia, horas extra y cumplimiento laboral en una sola plataforma.";
  const canonicalPath = "/sistema-nomina-agricola";

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
    "Calculo automatico de pagos por jornada, destajo y productividad.",
    "Control de horas extra, incidencias y descansos sin doble captura.",
    "Transparencia para supervisores y recursos humanos.",
    "Reportes listos para cumplir con auditorias y requisitos legales.",
    "Reduccion de errores y tiempos de cierre de nomina.",
  ];

  const features = [
    "Registro de cuadrillas, campos, frentes y tareas por temporada.",
    "Tablas de tarifas por cultivo, corte y rendimiento.",
    "Integracion con control de asistencia o listas diarias.",
    "Exportacion a bancos y sistemas contables.",
    "Panel con costos por hectarea, lote o supervisor.",
  ];

  const faqItems = [
    {
      question: "Sirve para pagos por destajo y bonos?",
      answer:
        "Si. Configuramos tarifas por tarea o rendimiento, incluyendo bonos por calidad y productividad.",
    },
    {
      question: "Puede manejar temporadas y contrataciones temporales?",
      answer:
        "Si. El sistema permite altas masivas, fechas de vigencia y control por temporada o proyecto.",
    },
    {
      question: "Se puede integrar con control asistencia QR?",
      answer:
        "Si. Podemos conectar la asistencia diaria para que la nomina se calcule automaticamente.",
    },
    {
      question: "Que tan rapido se implementa?",
      answer:
        "Un piloto funcional puede estar listo en pocas semanas, segun la complejidad de tus reglas de pago.",
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
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Nomina sin sorpresas.</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Sistema nomina agricola
              </h1>
              <p className="mt-5 text-lg text-lumbre-off/80">
                Calcula pagos por jornada, destajo y bonos con un sistema que integra asistencia, rendimientos
                y reglas laborales. Ideal para operaciones agricolas con cuadrillas, temporadas intensas y
                multiples frentes de trabajo.
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
                Nomina clara para colaboradores y supervisores
              </p>
            </div>
            <div className="rounded-3xl border border-lumbre-gray/80 bg-lumbre-gray/40 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Enfoque</p>
                  <p className="mt-3 text-lg font-semibold text-lumbre-off">
                    Control total de pagos, incidencias y costos por campo.
                  </p>
                </div>
                <div className="grid gap-4 text-sm text-lumbre-off/70">
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Evita ajustes de ultimo minuto y pagos duplicados.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Reportes listos para auditorias y contabilidad.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Visibilidad de costos por hectarea, tarea y supervisor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problema"
          eyebrow="Problema"
          title="La nomina agricola suele ser manual, tardada y vulnerable a errores"
          subtitle="Sin un sistema, los cierres de temporada se vuelven un caos."
        >
          <p className="text-sm text-lumbre-off/70">
            Cuando la asistencia se captura en listas sueltas y los pagos se calculan en Excel, cualquier
            cambio de tarifa o incidencia provoca retrabajo. Los supervisores pierden tiempo explicando
            diferencias y recursos humanos enfrenta reclamos cada semana.
          </p>
          <p className="mt-4 text-sm text-lumbre-off/70">
            Un sistema nomina agricola centraliza datos y reglas para que el pago sea consistente, auditable
            y comprensible para todos los involucrados.
          </p>
        </Section>

        <Section
          id="solucion"
          eyebrow="Solucion"
          title="Nomina automatizada con reglas agricolas reales"
          subtitle="Pagos, incidencias y costos en una sola plataforma."
        >
          <p className="text-sm text-lumbre-off/70">
            Implementamos un sistema nomina agricola que integra asistencia diaria, rendimiento por tarea y
            tarifas por cultivo. El calculo se hace automaticamente y se valida con reglas claras antes de
            cerrar la semana o la quincena.
          </p>
          <p className="mt-4 text-sm text-lumbre-off/70">
            Recursos humanos obtiene reportes listos para contabilidad y los supervisores pueden revisar
            datos por cuadrilla, evitando discusiones de ultima hora.
          </p>
        </Section>

        <Section
          id="beneficios"
          eyebrow="Beneficios"
          title="Beneficios que se sienten en cada cierre"
          subtitle="Menos retrabajo, mas transparencia y pagos puntuales."
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
          title="Funcionalidades del sistema nomina agricola"
          subtitle="Preparado para operaciones con alta rotacion y multiples frentes."
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
          subtitle="Resolvemos dudas antes de configurar tus reglas de pago."
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
          title="Agenda una demo y calcula tu nomina sin errores"
          subtitle="Definimos reglas, tarifas y reportes con tu equipo operativo."
          className="bg-lumbre-gray/20"
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm text-lumbre-off/70">
              Compartenos tu esquema de pagos y asistencias. En poco tiempo tendras un flujo automatizado
              para que cada cierre de nomina sea rapido y confiable.
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
              <a className="underline" href="/software-empaque-agricola">
                Software empaque agricola
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
        description="Nomina y operaciones agricolas con datos confiables y listos para auditoria."
        links={navLinks}
        socialLinks={[{ label: "Instagram", href: "https://instagram.com/lumbre.studiomx" }]}
        labels={{
          navLabel: "Navegacion",
          legalLabel: "Legal",
          connectionsLabel: "Conexiones",
          tagline: "Sistemas a medida para equipos agricolas.",
        }}
        copyrightLabel="Todos los derechos reservados."
      />
    </div>
  );
};

export default LandingNominaAgricola;