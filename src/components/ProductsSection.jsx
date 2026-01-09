import Section from "./Section";
import ProductCard from "./ProductCard";

const ProductsSection = ({
  id,
  eyebrow,
  title,
  subtitle,
  products = [],
  scriptsTitle,
  scriptsSubtitle,
  scripts = [],
  mailtoLink,
}) => {
  return (
    <Section id={id} eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div className="grid gap-6 lg:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} mailtoLink={mailtoLink} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/40 p-6">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-lumbre-brown">{scriptsTitle}</p>
          {scriptsSubtitle ? <p className="mt-2 text-sm text-lumbre-off/70">{scriptsSubtitle}</p> : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {scripts.map((tool) => (
            <div key={tool.title} className="rounded-2xl border border-lumbre-gray/70 bg-lumbre-black/60 p-4">
              <p className="text-sm font-semibold text-lumbre-off">{tool.title}</p>
              <p className="mt-2 text-xs text-lumbre-off/70">{tool.description}</p>
              <a
                className="mt-3 inline-flex text-xs uppercase tracking-[0.3em] text-lumbre-brown transition hover:text-lumbre-off"
                href={mailtoLink}
              >
                {tool.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProductsSection;
