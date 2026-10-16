// Home page content in English (/). Prices are shown in USD.
// Reference amounts and their rationale live in docs/precios.md.
import { formatPrice } from "./site.js";

const locale = "en-US";
const currency = "USD";
const usd = (amount) => formatPrice(amount, { locale, currency });

const PRICES = {
  landing: 630,
  business: 1350,
  premium: 2390,
  automation: 630,
  automationMonthly: 79,
  system: 3100,
  platform: 7100,
  store: 2790,
  qrMenu: 230,
  social: 199,
  care: 39,
};

const home = {
  lang: "en",
  locale,
  currency,
  path: "/",
  skipLink: "Skip to main content",

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Get a quote",
  },

  hero: {
    badge: "Web development studio",
    title: {
      before: "Websites and custom software that",
      accent: "grow",
      after: "your business.",
    },
    description:
      "We design and build fast, elegant, SEO-ready websites, plus custom software that runs your operations: web apps, automations and AI.",
    primaryCta: "Get a quote",
    secondaryCta: "See pricing",
    highlights: ["Reply within 24 hours", "No commitment", "Fixed price before we start"],
    mockup: {
      url: "yourbusiness.com",
      speed: "Fast loading",
      seo: "Technical SEO",
      mobile: "Fully responsive",
      dashboard: "Custom dashboard",
      code: ["const project = lumbre.build({", '  web: "custom",', "  seo: true,", '  software: "scalable",', "});"],
    },
  },

  stats: [
    { prefix: "< ", value: 24, suffix: " h", label: "Response time" },
    { prefix: "2–", value: 4, suffix: " wks", label: "Typical website delivery" },
    { value: 100, suffix: "%", label: "Custom design and code" },
    { value: 90, suffix: "+", label: "Lighthouse score target" },
  ],

  stack: {
    label: "Modern technology we build with",
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
    eyebrow: "Services",
    title: "Web development and custom software for your business",
    subtitle: "From your first website to the system that runs your operations. One team, end to end.",
    cta: "See pricing",
    items: [
      {
        icon: "browser",
        title: "Websites & landing pages",
        description:
          "Custom sites that build trust, load fast and turn visitors into leads through forms or WhatsApp.",
        bullets: ["Custom UX/UI design", "Technical SEO from day one", "Mobile-first"],
        wide: true,
      },
      {
        icon: "cart",
        title: "Online stores",
        description: "Catalog, cart and online payments so you can sell around the clock.",
        bullets: ["Card payments", "Inventory & orders"],
      },
      {
        icon: "sparkles",
        title: "Automation & AI",
        description: "AI WhatsApp agents, chatbots and workflows that work for you.",
        bullets: ["Scheduling & follow-up", "Lead capture"],
      },
      {
        icon: "layers",
        title: "Custom software",
        description:
          "Web apps that bring order to your operations: dashboards, inventory, client portals and internal tools with roles and permissions.",
        bullets: ["Dashboards & reports", "Roles & permissions", "Your data in the cloud"],
        wide: true,
      },
      {
        icon: "search",
        title: "SEO & performance",
        description: "Audits, speed (Core Web Vitals) and structure so Google can find you.",
        bullets: ["Search Console", "Structured data"],
      },
      {
        icon: "plug",
        title: "Integrations & APIs",
        description: "We connect your site to CRMs, ERPs, payments and spreadsheets to centralize your data.",
        bullets: ["CRM, ERP & payments", "n8n / Zapier"],
      },
      {
        icon: "shield",
        title: "Care plans & hosting",
        description: "Hosting, SSL, backups, monitoring and monthly updates. Always up to date.",
        bullets: ["Ongoing support", "Backups"],
      },
    ],
  },

  why: {
    eyebrow: "Why Lumbre",
    title: "A boutique studio with agency standards",
    subtitle: "You work directly with the people who design and build your project. No middlemen, no templates.",
    items: [
      {
        icon: "pen",
        title: "Custom design",
        body: "No generic templates: every site and app is designed for your brand and your customers.",
      },
      {
        icon: "bolt",
        title: "Real speed",
        body: "Clean, optimized code that loads fast on any phone, even on a weak connection.",
      },
      {
        icon: "search",
        title: "SEO built in",
        body: "Structure, metadata and performance designed so Google understands and ranks your site.",
      },
      {
        icon: "target",
        title: "Built to convert",
        body: "Clear calls to action, WhatsApp and forms that generate leads, not just visits.",
      },
      {
        icon: "key",
        title: "You own everything",
        body: "Domain, content and code in your name, with access and documentation so you never depend on anyone.",
      },
      {
        icon: "lifebuoy",
        title: "Support that sticks around",
        body: "We don't ship and disappear: we support, iterate and evolve your project with you.",
      },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "How we work with you",
    subtitle: "A simple, transparent process with visible progress every week.",
    steps: [
      {
        title: "Discovery",
        time: "Day 1",
        description: "A short call to understand your business, your goals and what your project needs to achieve.",
      },
      {
        title: "Proposal",
        time: "24–48 h",
        description: "You get scope, timeline and a fixed price. No surprises, no fine print.",
      },
      {
        title: "Design & build",
        time: "1–8 weeks",
        description: "We design, build and share progress every week so you can give feedback along the way.",
      },
      {
        title: "Launch & support",
        time: "Ongoing",
        description: "We launch, set up Google Search Console and analytics, train your team and keep improving.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Website and custom software pricing",
    subtitle: "Reference packages so you know where we start. Every project is quoted to fit.",
    tabsLabel: "Project type",
    from: "From",
    popular: "Most popular",
    deliveryLabel: "Delivery",
    cta: "Get this plan",
    tabs: [
      {
        id: "web",
        label: "Websites",
        plans: [
          {
            id: "landing",
            name: "Landing Page",
            tagline: "One focused page built to convert: perfect to launch a business, a service or a campaign.",
            price: PRICES.landing,
            suffix: "one-time",
            delivery: "1–2 weeks",
            features: [
              "Custom design (up to 6 sections)",
              "Fully responsive: phone, tablet, desktop",
              "Technical SEO + Google Search Console",
              "Contact form + WhatsApp button",
              "Domain and SSL setup",
              "Fast hosting deployment",
            ],
          },
          {
            id: "business",
            name: "Business Website",
            tagline: "A complete site for businesses and professionals who want to look sharp and show up on Google.",
            price: PRICES.business,
            suffix: "one-time",
            delivery: "2–3 weeks",
            featured: true,
            features: [
              "Up to 5 pages (Home, Services, About…)",
              "Custom UX/UI design with animations",
              "On-page SEO per page + sitemap",
              "Google Analytics and Search Console",
              "WhatsApp, social media and Google Maps",
              "Speed-optimized (Core Web Vitals)",
            ],
          },
          {
            id: "premium",
            name: "Premium Website",
            tagline: "For brands that need editable content, a blog, two languages or integrations.",
            price: PRICES.premium,
            suffix: "one-time",
            delivery: "3–4 weeks",
            features: [
              "Up to 10 pages",
              "Content editor or blog",
              "Bilingual English / Spanish (optional)",
              "Advanced SEO + structured data",
              "Custom animations and interactions",
              "Integrations: CRM, booking, newsletter",
            ],
          },
        ],
      },
      {
        id: "software",
        label: "Custom software",
        plans: [
          {
            id: "automation",
            name: "Automation & AI",
            tagline: "AI WhatsApp agents, chatbots and automated workflows that answer 24/7.",
            price: PRICES.automation,
            suffix: `+ ${usd(PRICES.automationMonthly)}/mo`,
            delivery: "1–3 weeks",
            features: [
              "AI WhatsApp agent + scheduling",
              "Automated FAQ answers",
              "Lead capture and tagging",
              "Human handoff when needed",
              "CRM, spreadsheet and n8n integrations",
            ],
          },
          {
            id: "system",
            name: "Custom web app",
            tagline: "Internal tools, dashboards and portals that bring order to your operations.",
            price: PRICES.system,
            suffix: "per project",
            delivery: "4–8 weeks",
            featured: true,
            features: [
              "Real-time dashboards and reports",
              "Users with roles and permissions",
              "Secure cloud database",
              "Excel / CSV imports",
              "Integrations with your current tools",
              "Training and documentation",
            ],
          },
          {
            id: "platform",
            name: "Custom platform",
            tagline: "Full web applications to operate or sell: SaaS, marketplaces or client portals.",
            price: PRICES.platform,
            suffix: "per project",
            delivery: "8–16 weeks",
            features: [
              "Product discovery and UX/UI design",
              "Scalable architecture and APIs",
              "Online payments and subscriptions",
              "Admin dashboard",
              "Testing, monitoring and deployment",
              "Ongoing support and evolution",
            ],
          },
        ],
      },
    ],
    extrasTitle: "More services",
    extras: [
      {
        id: "store",
        icon: "cart",
        name: "Online store",
        description: "Catalog, cart and online payments, ready to sell.",
        price: PRICES.store,
      },
      {
        id: "qr-menu",
        icon: "qr",
        name: "Digital QR menu",
        description: "A web menu for restaurants, organized by category, with a branded QR code.",
        price: PRICES.qrMenu,
      },
      {
        id: "social",
        icon: "calendar",
        name: "Social media automation",
        description: "Content calendar, scheduled posts and reporting.",
        price: PRICES.social,
        period: "/mo",
      },
      {
        id: "care",
        icon: "shield",
        name: "Care plan & hosting",
        description: "Hosting, SSL, backups, monitoring and minor monthly updates.",
        price: PRICES.care,
        period: "/mo",
      },
    ],
    note: "Reference prices in US dollars (USD). Before we start you get a proposal with scope, timeline and a fixed price.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    subtitle: "What clients usually ask before starting a project.",
    moreTitle: "Have another question?",
    moreBody: "Message us on WhatsApp and we'll get back to you the same day.",
    moreCta: "Ask on WhatsApp",
    items: [
      {
        question: "How much does a website cost?",
        answer: `A landing page starts at ${usd(PRICES.landing)} USD and a business website with up to 5 pages at ${usd(
          PRICES.business
        )} USD. The final price depends on sections, features and integrations; after a short call we send you a proposal with a fixed price.`,
      },
      {
        question: "How much does custom software cost?",
        answer: `An AI automation starts at ${usd(PRICES.automation)} USD and a custom web app at ${usd(
          PRICES.system
        )} USD. We quote by scope and define together the must-have features to launch fast and grow in stages.`,
      },
      {
        question: "How long does it take?",
        answer:
          "A landing page is usually ready in 1 to 2 weeks and a full website in 2 to 4 weeks. Custom web apps take 4 to 8 weeks depending on complexity.",
      },
      {
        question: "Are domain and hosting included?",
        answer: `We set up your domain, SSL certificate and fast hosting. The domain is registered in your name and its yearly cost is separate; hosting and maintenance are covered by a care plan from ${usd(
          PRICES.care
        )} USD/month.`,
      },
      {
        question: "Will my website show up on Google?",
        answer:
          "Yes. Every site includes technical SEO: proper structure, metadata, sitemap, optimized speed and Google Search Console setup. Ranking at the top for competitive searches takes time; if you need it, we offer ongoing SEO.",
      },
      {
        question: "Can I edit my website myself?",
        answer:
          "Yes. The Premium Website includes an editor for text, images and blog posts. On other plans we make changes for you as part of your care plan.",
      },
      {
        question: "Do I own the website and the code?",
        answer:
          "Yes. The domain, content and code are yours. We hand over access and documentation so you never depend on us.",
      },
      {
        question: "Do you work with clients in the US and other countries?",
        answer:
          "Yes. We work remotely with clients across the US, Mexico and beyond, in English or Spanish, with video calls and weekly progress updates.",
      },
    ],
  },

  ctaBand: {
    title: "Ready for an online presence that matches your business?",
    body: "Tell us about your idea and we'll get back to you within 24 hours with next steps.",
    whatsapp: "Message us on WhatsApp",
    quote: "Get a quote",
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us about your project",
    subtitle: "We reply within 24 hours with next steps. No commitment.",
    whatsappMessage: "Hi Lumbre Studio, I'd like a quote for a project.",
    emailSubject: "Quote request - Lumbre Studio",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      phone: "Phone / WhatsApp (optional)",
      phonePlaceholder: "+1 555 123 4567",
      projectType: "What do you need?",
      projectTypePlaceholder: "Select an option",
      otherOption: "Other / not sure yet",
      message: "Message",
      messagePlaceholder: "Tell us what you want to achieve, when you need it and whether you have a budget in mind.",
      submit: "Send message",
      sending: "Sending…",
      privacy: "We only use your details to reply to you.",
      protected: "Spam protection by Cloudflare Turnstile.",
      successTitle: "Message sent!",
      successBody: "Thanks for reaching out. We'll get back to you within 24 hours.",
      successReset: "Send another message",
      error: "Something went wrong. Please try again or message us on WhatsApp.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter your email.",
        emailInvalid: "Please check your email address.",
        message: "Tell us a bit about your project.",
        captcha: "Please confirm you're not a robot.",
      },
    },
    nextTitle: "What happens next?",
    nextSteps: [
      "We review your message and reply within 24 hours.",
      "We schedule a short call to understand your project.",
      "You get a proposal with scope, timeline and a fixed price.",
    ],
    directTitle: "Prefer to talk directly?",
  },

  footer: {
    description:
      "Web design and development studio. Websites, online stores, custom software and AI automation.",
    navLabel: "Explore",
    contactLabel: "Contact",
    rights: "All rights reserved.",
    tagline: "Code that’s pure fire.",
  },
};

export default home;
