// Datos de contacto compartidos por todas las paginas, el formulario y los datos estructurados (JSON-LD).

export const CONTACT = {
  email: "contacto@lumbrestudio.com",
  whatsappNumber: "5216682471627",
  whatsappDisplay: "+52 668 247 1627",
  instagramUrl: "https://instagram.com/lumbre.studiomx",
  instagramHandle: "@lumbre.studiomx",
};

export const whatsappUrl = (text = "") =>
  `https://wa.me/${CONTACT.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mailtoUrl = (subject = "") =>
  `mailto:${CONTACT.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

// Formatea montos segun el idioma de la pagina: es-MX -> MXN, en-US -> USD.
export const formatPrice = (amount, { locale, currency }) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
