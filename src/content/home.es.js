// Contenido de la pagina principal en espanol (/es). Los precios se muestran en MXN.
// Los montos de referencia y su justificacion estan en docs/precios.md.
import { formatPrice } from "./site.js";

const locale = "es-MX";
const currency = "MXN";
const mxn = (amount) => formatPrice(amount, { locale, currency });

const PRICES = {
  landing: 5490,
  business: 11900,
  premium: 22300,
  automation: 9600,
  automationMonthly: 1200,
  system: 31900,
  platform: 71900,
  store: 23900,
  qrMenu: 3100,
  social: 2800,
  care: 470,
};

const home = {
  lang: "es",
  locale,
  currency,
  path: "/es",
  skipLink: "Saltar al contenido principal",

  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Precios", href: "#precios" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: "Cotiza tu proyecto",
  },

  hero: {
    badge: "Estudio de desarrollo web en México",
    title: {
      before: "Páginas web y software a medida que",
      accent: "hacen crecer",
      after: "tu negocio.",
    },
    description:
      "Diseñamos y programamos páginas web rápidas, elegantes y optimizadas para Google, y software a medida que ordena tu operación: sistemas web, automatizaciones e inteligencia artificial.",
    primaryCta: "Cotiza tu proyecto",
    secondaryCta: "Ver precios",
    highlights: ["Respuesta en menos de 24 h", "Sin compromiso", "Precio cerrado antes de empezar"],
    mockup: {
      url: "tunegocio.com",
      speed: "Carga rápida",
      seo: "SEO técnico",
      mobile: "100% responsive",
      dashboard: "Panel a medida",
      code: ["const proyecto = lumbre.crear({", '  web: "a medida",', "  seo: true,", '  software: "escalable",', "});"],
    },
  },

  stats: [
    { prefix: "< ", value: 24, suffix: " h", label: "Tiempo de respuesta" },
    { prefix: "2–", value: 4, suffix: " sem", label: "Entrega típica de un sitio web" },
    { value: 100, suffix: "%", label: "Diseño y código a medida" },
    { value: 90, suffix: "+", label: "Puntaje objetivo en Lighthouse" },
  ],

  stack: {
    label: "Tecnología moderna con la que construimos",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Vercel",
      "Cloudflare",
      "Stripe",
      "WhatsApp API",
      "n8n",
      "Google Search Console",
    ],
  },

  services: {
    eyebrow: "Servicios",
    title: "Desarrollo web y software a medida para tu negocio",
    subtitle:
      "Desde tu primera página web hasta el sistema que administra tu operación. Un solo equipo, de principio a fin.",
    cta: "Ver precios",
    items: [
      {
        icon: "browser",
        title: "Páginas web y landing pages",
        description:
          "Sitios a medida que transmiten confianza, cargan rápido y convierten visitas en prospectos por WhatsApp o formulario.",
        bullets: ["Diseño UX/UI a medida", "SEO técnico desde el día uno", "Optimizadas para celular"],
        wide: true,
      },
      {
        icon: "cart",
        title: "Tiendas en línea",
        description: "Catálogo, carrito y pagos en línea para vender las 24 horas.",
        bullets: ["Pagos con tarjeta", "Inventario y pedidos"],
      },
      {
        icon: "sparkles",
        title: "Automatización e IA",
        description: "Agentes de WhatsApp con IA, chatbots y flujos que trabajan por ti.",
        bullets: ["Agenda y seguimiento", "Captación de prospectos"],
      },
      {
        icon: "layers",
        title: "Software a medida",
        description:
          "Sistemas web que ordenan tu operación: dashboards, inventarios, portales de clientes y herramientas internas con roles y permisos.",
        bullets: ["Dashboards y reportes", "Roles y permisos", "Tu información en la nube"],
        wide: true,
      },
      {
        icon: "search",
        title: "SEO y rendimiento",
        description: "Auditoría, velocidad (Core Web Vitals) y estructura para que Google te encuentre.",
        bullets: ["Search Console", "Datos estructurados"],
      },
      {
        icon: "plug",
        title: "Integraciones y APIs",
        description: "Conectamos tu web con CRM, ERP, pagos y hojas de cálculo para centralizar tus datos.",
        bullets: ["CRM, ERP y pagos", "n8n / Zapier"],
      },
      {
        icon: "shield",
        title: "Mantenimiento y hosting",
        description: "Hosting, SSL, respaldos, monitoreo y cambios cada mes. Tu sitio siempre al día.",
        bullets: ["Soporte continuo", "Respaldos"],
      },
    ],
  },

  why: {
    eyebrow: "Por qué Lumbre",
    title: "Un estudio pequeño, con estándares de agencia",
    subtitle: "Trabajas directo con quien diseña y programa tu proyecto. Sin intermediarios ni plantillas.",
    items: [
      {
        icon: "pen",
        title: "Diseño a medida",
        body: "Nada de plantillas genéricas: cada sitio y sistema se diseña para tu marca y tus clientes.",
      },
      {
        icon: "bolt",
        title: "Velocidad real",
        body: "Código limpio y optimizado para cargar rápido en cualquier celular, incluso con mala señal.",
      },
      {
        icon: "search",
        title: "SEO desde la base",
        body: "Estructura, metadatos y rendimiento pensados para que Google entienda y muestre tu sitio.",
      },
      {
        icon: "target",
        title: "Enfocado en resultados",
        body: "Llamadas a la acción claras, WhatsApp y formularios que generan prospectos, no solo visitas.",
      },
      {
        icon: "key",
        title: "Todo es tuyo",
        body: "Dominio, contenido y código a tu nombre, con accesos y documentación para que nunca dependas de nadie.",
      },
      {
        icon: "lifebuoy",
        title: "Soporte que no desaparece",
        body: "No entregamos y desaparecemos: damos soporte, iteramos y evolucionamos tu proyecto contigo.",
      },
    ],
  },

  process: {
    eyebrow: "Proceso",
    title: "Así trabajamos contigo",
    subtitle: "Un proceso simple y transparente, con avances visibles cada semana.",
    steps: [
      {
        title: "Diagnóstico",
        time: "Día 1",
        description:
          "Una llamada corta para entender tu negocio, tus objetivos y lo que necesitas que logre tu proyecto.",
      },
      {
        title: "Propuesta",
        time: "24–48 h",
        description: "Te enviamos alcance, calendario y precio cerrado. Sin sorpresas ni letras pequeñas.",
      },
      {
        title: "Diseño y desarrollo",
        time: "1–8 semanas",
        description: "Diseñamos, programamos y te mostramos avances cada semana para que des tu retroalimentación.",
      },
      {
        title: "Lanzamiento y soporte",
        time: "Continuo",
        description:
          "Publicamos, configuramos Google Search Console y analítica, te capacitamos y seguimos contigo para mejorar.",
      },
    ],
  },

  pricing: {
    eyebrow: "Precios",
    title: "Precios de páginas web y software a medida",
    subtitle: "Paquetes de referencia para que sepas desde dónde partimos. Cada proyecto se cotiza a la medida.",
    tabsLabel: "Tipo de proyecto",
    from: "Desde",
    popular: "Más elegido",
    deliveryLabel: "Entrega",
    cta: "Cotizar este plan",
    tabs: [
      {
        id: "web",
        label: "Páginas web",
        plans: [
          {
            id: "landing",
            name: "Landing Page",
            tagline: "Una página enfocada en convertir: ideal para lanzar tu negocio, un servicio o una campaña.",
            price: PRICES.landing,
            suffix: "pago único",
            delivery: "1–2 semanas",
            features: [
              "Diseño a medida (hasta 6 secciones)",
              "100% responsive: celular, tablet y escritorio",
              "SEO técnico base + Google Search Console",
              "Formulario de contacto + botón de WhatsApp",
              "Configuración de dominio y certificado SSL",
              "Publicación en hosting rápido",
            ],
          },
          {
            id: "business",
            name: "Sitio Profesional",
            tagline: "Sitio completo para negocios y profesionales que quieren verse serios y aparecer en Google.",
            price: PRICES.business,
            suffix: "pago único",
            delivery: "2–3 semanas",
            featured: true,
            features: [
              "Hasta 5 páginas (Inicio, Servicios, Nosotros…)",
              "Diseño UX/UI a medida con animaciones",
              "SEO on-page por página + sitemap",
              "Google Analytics y Search Console",
              "WhatsApp, redes sociales y Google Maps",
              "Optimizado para velocidad (Core Web Vitals)",
            ],
          },
          {
            id: "premium",
            name: "Sitio Premium",
            tagline: "Para marcas que necesitan contenido editable, blog, dos idiomas o integraciones.",
            price: PRICES.premium,
            suffix: "pago único",
            delivery: "3–4 semanas",
            features: [
              "Hasta 10 páginas",
              "Panel para editar contenido o blog",
              "Sitio bilingüe español / inglés (opcional)",
              "SEO avanzado + datos estructurados",
              "Animaciones e interacciones a medida",
              "Integraciones: CRM, reservas, newsletter",
            ],
          },
        ],
      },
      {
        id: "software",
        label: "Software a medida",
        plans: [
          {
            id: "automation",
            name: "Automatización e IA",
            tagline: "Agentes de WhatsApp con IA, chatbots y flujos automáticos que atienden 24/7.",
            price: PRICES.automation,
            suffix: `+ ${mxn(PRICES.automationMonthly)}/mes`,
            delivery: "1–3 semanas",
            features: [
              "Agente de WhatsApp con IA + agenda",
              "Respuestas a preguntas frecuentes",
              "Captación y etiquetado de prospectos",
              "Traspaso a una persona cuando hace falta",
              "Integración con CRM, hojas de cálculo y n8n",
            ],
          },
          {
            id: "system",
            name: "Sistema web a medida",
            tagline: "Herramientas internas, dashboards y portales que ordenan tu operación.",
            price: PRICES.system,
            suffix: "por proyecto",
            delivery: "4–8 semanas",
            featured: true,
            features: [
              "Dashboards y reportes en tiempo real",
              "Usuarios con roles y permisos",
              "Base de datos segura en la nube",
              "Importación desde Excel / CSV",
              "Integraciones con tus herramientas actuales",
              "Capacitación y documentación",
            ],
          },
          {
            id: "platform",
            name: "Plataforma a medida",
            tagline: "Aplicaciones web completas para operar o vender: SaaS, marketplaces o portales de clientes.",
            price: PRICES.platform,
            suffix: "por proyecto",
            delivery: "8–16 semanas",
            features: [
              "Descubrimiento y diseño UX/UI del producto",
              "Arquitectura escalable y APIs",
              "Pagos en línea y suscripciones",
              "Panel de administración",
              "Pruebas, monitoreo y despliegue",
              "Soporte y evolución continua",
            ],
          },
        ],
      },
    ],
    extrasTitle: "Más servicios",
    extras: [
      {
        id: "store",
        icon: "cart",
        name: "Tienda en línea",
        description: "Catálogo, carrito y pagos en línea, lista para vender.",
        price: PRICES.store,
      },
      {
        id: "qr-menu",
        icon: "qr",
        name: "Menú digital QR",
        description: "Menú web para restaurantes por categorías, con QR personalizado.",
        price: PRICES.qrMenu,
      },
      {
        id: "social",
        icon: "calendar",
        name: "Automatización de redes",
        description: "Calendario de contenido, publicaciones programadas y reportes.",
        price: PRICES.social,
        period: "/mes",
      },
      {
        id: "care",
        icon: "shield",
        name: "Mantenimiento y hosting",
        description: "Hosting, SSL, respaldos, monitoreo y cambios menores cada mes.",
        price: PRICES.care,
        period: "/mes",
      },
    ],
    note: "Precios de referencia en pesos mexicanos (MXN). Antes de empezar recibes una propuesta con alcance, tiempos y precio cerrado.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    subtitle: "Lo que más nos preguntan antes de empezar un proyecto.",
    moreTitle: "¿Tienes otra pregunta?",
    moreBody: "Escríbenos por WhatsApp y te respondemos el mismo día.",
    moreCta: "Preguntar por WhatsApp",
    items: [
      {
        question: "¿Cuánto cuesta una página web?",
        answer: `Una landing page empieza en ${mxn(PRICES.landing)} MXN y un sitio profesional de hasta 5 páginas en ${mxn(
          PRICES.business
        )} MXN. El precio final depende de las secciones, funciones e integraciones; después de una llamada corta te enviamos una propuesta con precio cerrado.`,
      },
      {
        question: "¿Cuánto cuesta un software o sistema a medida?",
        answer: `Una automatización con IA empieza en ${mxn(PRICES.automation)} MXN y un sistema web a medida en ${mxn(
          PRICES.system
        )} MXN. Lo cotizamos por alcance: definimos juntos las funciones indispensables para lanzar rápido y crecer por etapas.`,
      },
      {
        question: "¿Cuánto tiempo tarda en estar lista mi página?",
        answer:
          "Una landing page suele estar lista en 1 a 2 semanas y un sitio completo en 2 a 4 semanas. Los sistemas a medida toman de 4 a 8 semanas según su complejidad.",
      },
      {
        question: "¿Incluye dominio y hosting?",
        answer: `Configuramos dominio, certificado SSL y publicación en un hosting rápido. El dominio se registra a tu nombre y su costo anual va aparte; el hosting y el mantenimiento se cubren con un plan mensual desde ${mxn(
          PRICES.care
        )} MXN.`,
      },
      {
        question: "¿Mi página va a aparecer en Google?",
        answer:
          "Sí. Todas nuestras páginas incluyen SEO técnico: estructura correcta, metadatos, sitemap, velocidad optimizada y alta en Google Search Console. Posicionar en los primeros lugares en búsquedas competidas toma tiempo; si lo necesitas, te acompañamos con SEO continuo.",
      },
      {
        question: "¿Podré editar mi página yo mismo?",
        answer:
          "Sí. El Sitio Premium incluye un panel para editar textos, imágenes o publicar en tu blog. En los demás planes hacemos los cambios por ti dentro de tu plan de mantenimiento.",
      },
      {
        question: "¿El sitio y el código son míos?",
        answer:
          "Sí. El dominio, el contenido y el código son tuyos. Te entregamos accesos y documentación para que nunca dependas de nosotros.",
      },
      {
        question: "¿Trabajan con clientes de otras ciudades o países?",
        answer:
          "Sí. Trabajamos en línea con clientes de todo México y del extranjero, en español o inglés, con videollamadas y avances cada semana.",
      },
    ],
  },

  ctaBand: {
    title: "¿Listo para tener una presencia digital a la altura de tu negocio?",
    body: "Cuéntanos tu idea y en menos de 24 horas te respondemos con los siguientes pasos.",
    whatsapp: "Escríbenos por WhatsApp",
    quote: "Cotiza tu proyecto",
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos de tu proyecto",
    subtitle: "Te respondemos en menos de 24 horas con los siguientes pasos. Sin compromiso.",
    whatsappMessage: "Hola Lumbre Studio, me interesa cotizar un proyecto.",
    emailSubject: "Cotización - Lumbre Studio",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@empresa.com",
      phone: "WhatsApp (opcional)",
      phonePlaceholder: "668 123 4567",
      projectType: "¿Qué necesitas?",
      projectTypePlaceholder: "Selecciona una opción",
      otherOption: "Otro / aún no lo sé",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos qué quieres lograr, para cuándo lo necesitas y si tienes un presupuesto en mente.",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      privacy: "Solo usamos tus datos para responderte.",
      protected: "Protegido contra spam con Cloudflare Turnstile.",
      captchaFallback: "Escribir por WhatsApp",
      successTitle: "¡Mensaje enviado!",
      successBody: "Gracias por escribirnos. Te responderemos en menos de 24 horas.",
      successReset: "Enviar otro mensaje",
      error: "Ocurrió un error al enviar. Intenta de nuevo o escríbenos por WhatsApp.",
      errors: {
        name: "Ingresa tu nombre.",
        email: "Ingresa tu email.",
        emailInvalid: "Revisa que tu email sea válido.",
        message: "Cuéntanos un poco sobre tu proyecto.",
        captcha:
          "No pudimos verificar tu navegador (protección anti-spam). Intenta de nuevo en unos segundos o escríbenos por WhatsApp.",
      },
    },
    nextTitle: "¿Qué pasa después?",
    nextSteps: [
      "Revisamos tu mensaje y te respondemos en menos de 24 horas.",
      "Agendamos una llamada corta para entender tu proyecto.",
      "Recibes una propuesta con alcance, tiempos y precio cerrado.",
    ],
    directTitle: "¿Prefieres hablar directo?",
  },

  footer: {
    description:
      "Estudio de diseño y desarrollo web en México. Páginas web, tiendas en línea, software a medida y automatización con IA.",
    navLabel: "Explorar",
    contactLabel: "Contacto",
    rights: "Todos los derechos reservados.",
    tagline: "Code that’s pure fire.",
  },
};

export default home;
