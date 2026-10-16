import Icon from "../Icon";
import Section from "../Section";

const WhyUs = ({ id, copy }) => (
  <Section id={id} eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} align="center">
    <div
      className="grid gap-px overflow-hidden rounded-3xl border border-lumbre-off/10 bg-lumbre-off/10 sm:grid-cols-2 lg:grid-cols-3"
      data-reveal=""
    >
      {copy.items.map((item) => (
        <article
          key={item.title}
          className="group bg-lumbre-black p-7 transition-colors duration-300 hover:bg-lumbre-off/[0.02] sm:p-9"
        >
          <Icon
            name={item.icon}
            className="h-7 w-7 text-lumbre-brown transition-transform duration-500 ease-out-expo group-hover:scale-110"
            strokeWidth={1.4}
          />
          <h3 className="mt-6 text-lg font-semibold tracking-tight text-lumbre-off">{item.title}</h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-lumbre-off/60">{item.body}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default WhyUs;
