import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { useActiveSection } from "../hooks/useActiveSection";
import { applySeo } from "../utils/seo";

const MAILTO_LINK =
  "mailto:contacto@lumbrestudio.com?subject=Demo%20-%20Control%20Asistencia%20QR";

const LandingControlAsistenciaQr = ({ whatsappLink }) => {
  const pageTitle = "Control asistencia QR para equipos operativos | Lumbre Studio";
  const pageDescription =
    "Control asistencia QR para cuadrillas en campo o planta: registros rapidos, georreferencia y reportes listos para nomina y auditorias.";
  const canonicalPath = "/control-asistencia-qr";

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
    "Registro de entradas y salidas en segundos con un codigo QR unico.",
    "Validacion por ubicacion para evitar registros fuera de sitio.",
    "Elimina hojas manuales y reduce errores en la nomina.",
    "Visibilidad de asistencia por cuadrilla y supervisor en tiempo real.",
    "Datos historicos listos para auditorias o certificaciones.",
  ];

  const features = [
    "Codigos QR por colaborador, turno o frente de trabajo.",
    "Checklist rapido para incidencias, descansos o cambios de cuadrilla.",
    "Modo offline para zonas con baja conectividad.",
    "Integracion con sistema nomina agricola y reportes exportables.",
    "Panel de control con alertas por ausencias o retardos.",
  ];

  const faqItems = [
    {
      question: "Funciona en campo con poca senal?",
      answer:
        "Si. El control asistencia QR permite capturar datos offline y sincronizar cuando hay conexion.",
    },
    {
      question: "Se puede usar con varios supervisores?",
      answer:
        "Si. Cada supervisor tiene acceso a su cuadrilla y el administrador ve la operacion completa.",
    },
    {
      question: "Se integra con nomina?",
      answer:
        "Si. Los registros se exportan o se conectan directo para calcular pagos sin doble captura.",
    },
    {
      question: "Que equipo necesito?",
      answer:
        "Solo celulares o tablets. Podemos imprimir QR en credenciales o listas de acceso.",
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
              <p className="text-xs uppercase tracking-[0.45em] text-lumbre-brown">Asistencia sin friccion.</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-lumbre-off md:text-6xl">
                Control asistencia QR
              </h1>
              <p className="mt-5 text-lg text-lumbre-off/80">
                Registra entradas y salidas en segundos con un control asistencia QR pensado para cuadrillas
                en campo, planta o empaque. Datos claros, auditables y listos para la nomina.
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
                Implementacion rapida en pocas semanas
              </p>
            </div>
            <div className="rounded-3xl border border-lumbre-gray/80 bg-lumbre-gray/40 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-lumbre-off/60">Enfoque</p>
                  <p className="mt-3 text-lg font-semibold text-lumbre-off">
                    Asistencia confiable y lista para integrarse con nomina.
                  </p>
                </div>
                <div className="grid gap-4 text-sm text-lumbre-off/70">
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Escaneo QR por colaborador, cuadrilla o turno.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Validacion de ubicacion para reducir fraudes.
                  </div>
                  <div className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-4">
                    Reportes diarios listos para recursos humanos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problema"
          eyebrow="Problema"
          title="La asistencia manual genera errores y discusiones"
          subtitle="Un registro impreciso afecta pagos, productividad y confianza."
        >
          <p className="text-sm text-lumbre-off/70">
            Las listas en papel se pierden, los cambios de cuadrilla no quedan claros y es dificil saber quien
            llego a tiempo. Al final, recursos humanos debe reconciliar datos y los supervisores pierden horas
            justificando diferencias.
          </p>
          <p className="mt-4 text-sm text-lumbre-off/70">
            Con control asistencia QR, cada registro queda validado y disponible en tiempo real para nomina,
            auditorias o cumplimiento interno.
          </p>
        </Section>

        <Section
          id="solucion"
          eyebrow="Solucion"
          title="Un control asistencia QR simple para el piso operativo"
          subtitle="Rapido para supervisores, claro para administracion."
        >
          <p className="text-sm text-lumbre-off/70">
            Diseñamos un flujo donde el supervisor escanea QR, valida ubicacion y registra incidencias en
            segundos. Toda la informacion se consolida en un panel unico, con historicos por persona, turno y
            frente de trabajo.
          </p>
          <p className="mt-4 text-sm text-lumbre-off/70">
            La informacion puede exportarse o integrarse con un sistema nomina agricola para automatizar
            calculos de pagos y reducir retrabajo.
          </p>
        </Section>

        <Section
          id="beneficios"
          eyebrow="Beneficios"
          title="Beneficios inmediatos en operacion y recursos humanos"
          subtitle="Menos errores, mas control y pagos puntuales."
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
          title="Funciones clave del control asistencia QR"
          subtitle="Listo para ambientes exigentes y turnos rotativos."
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
          subtitle="Lo esencial antes de activar el sistema."
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
          title="Implementa control asistencia QR en tu operacion"
          subtitle="Define reglas, ubicaciones y reportes con nosotros."
          className="bg-lumbre-gray/20"
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm text-lumbre-off/70">
              Te ayudamos a configurar codigos, permisos y reportes para que la asistencia quede lista desde el
              primer dia. Es ideal para integrarse con tu nomina y evitar ajustes manuales.
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
              <a className="underline" href="/sistema-nomina-agricola">
                Sistema nomina agricola
              </a>
              <a className="underline" href="/es">
                Volver al inicio
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer
        description="Control de asistencia en tiempo real para operaciones de campo y planta."
        links={navLinks}
        socialLinks={[{ label: "Instagram", href: "https://instagram.com/lumbre.studiomx" }]}
        labels={{
          navLabel: "Navegacion",
          legalLabel: "Legal",
          connectionsLabel: "Conexiones",
          tagline: "Automatizacion y control operativo para equipos en campo.",
        }}
        copyrightLabel="Todos los derechos reservados."
      />
    </div>
  );
};

export default LandingControlAsistenciaQr;