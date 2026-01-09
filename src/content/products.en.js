// TODO: set final pricing
export const products = [
  {
    id: "simple-website",
    title: "Simple Website",
    description: "Launch-ready websites built for clarity, speed, and trust.",
    tiers: [
      {
        name: "Starter",
        price: "from $XXX",
        timeline: "Delivery: 2-3 weeks",
        features: [
          "Single page",
          "Responsive layout",
          "Basic SEO",
          "Email contact form",
          "Domain connection",
          "Vercel deploy",
        ],
        ctaPrimary: "Get a quote",
        ctaSecondary: "Email us",
      },
      {
        name: "Standard",
        price: "from $XXX",
        timeline: "Delivery: 3-4 weeks",
        features: [
          "Multi-page (up to 5)",
          "Responsive layout",
          "Basic SEO",
          "Email contact form",
          "Domain connection",
          "Vercel deploy",
        ],
        ctaPrimary: "Get a quote",
        ctaSecondary: "Email us",
      },
      {
        name: "Growth",
        price: "from $XXX",
        timeline: "Delivery: 4-6 weeks",
        features: [
          "Multi-page (up to 8)",
          "Responsive layout",
          "Enhanced SEO setup",
          "Email contact form",
          "Domain connection",
          "Vercel deploy",
        ],
        ctaPrimary: "Get a quote",
        ctaSecondary: "Email us",
      },
    ],
  },
  {
    id: "custom-systems",
    title: "Custom Systems",
    description: "Tailored platforms for operations, data, and growth.",
    priceLabel: "Under quote",
    features: ["Dashboards", "Databases", "Roles & permissions", "Reports", "Integrations"],
    ctaLabel: "Get a quote",
  },
  {
    id: "social-automation",
    title: "Social Media Automation",
    description: "Systems that keep content consistent and measurable.",
    priceLabel: "Under quote",
    features: ["Content calendar", "Automation flows", "Template packs", "Reporting"],
    ctaLabel: "Get a quote",
  },
  {
    id: "whatsapp-agent",
    title: "WhatsApp AI Agent + Calendar",
    description: "Lead capture and scheduling with a human handoff.",
    priceLabel: "Under quote",
    features: ["Calendar integration", "FAQ automation", "Lead capture", "Human handoff", "Tags & segments"],
    ctaLabel: "Get a quote",
  },
  {
    id: "workflows-integrations",
    title: "Workflows & Integrations",
    description: "Connect tools and keep data moving without manual work.",
    priceLabel: "Under quote",
    features: ["Zapier / n8n", "CRM sync", "Spreadsheets", "Email alerts"],
    ctaLabel: "Get a quote",
  },
];

export const scriptsAndTools = [
  {
    title: "Data cleanup scripts",
    description: "Normalize and clean datasets before reporting.",
    ctaLabel: "Ask for details",
  },
  {
    title: "Report automation",
    description: "Scheduled exports and recurring KPI reports.",
    ctaLabel: "Ask for details",
  },
  {
    title: "CSV/Excel to SQL pipelines",
    description: "Reliable imports from spreadsheets into databases.",
    ctaLabel: "Ask for details",
  },
  {
    title: "Monitoring dashboards",
    description: "Operational visibility with clear metrics.",
    ctaLabel: "Ask for details",
  },
];
