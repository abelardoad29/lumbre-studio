export const getSiteUrl = () => {
  const envUrl = import.meta.env.VITE_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim()) {
    return envUrl.replace(/\/+$/, "");
  }
  if (typeof window !== "undefined" && window.location && window.location.origin) {
    return window.location.origin;
  }
  return "";
};

export const buildUrl = (path = "/") => {
  const base = getSiteUrl();
  if (!base) {
    return path;
  }
  return new URL(path, base).toString();
};

const setMetaTag = (attrName, attrValue, content) => {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setLinkTag = (rel, href) => {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

export const applySeo = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  lang,
}) => {
  const canonicalUrl = buildUrl(path);
  const imageUrl = image || buildUrl("/og-cover.png");

  if (title) {
    document.title = title;
  }
  if (lang) {
    document.documentElement.lang = lang;
  }
  if (description) {
    setMetaTag("name", "description", description);
  }

  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", canonicalUrl);
  setMetaTag("property", "og:type", type);
  setMetaTag("property", "og:image", imageUrl);

  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  setMetaTag("name", "twitter:image", imageUrl);

  setLinkTag("canonical", canonicalUrl);
};