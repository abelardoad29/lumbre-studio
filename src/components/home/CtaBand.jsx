import Icon from "../Icon";

const CtaBand = ({ copy, whatsappHref, contactHref }) => (
  <section className="container-page py-10 md:py-16">
    <div
      className="relative isolate overflow-hidden rounded-[2rem] border border-lumbre-off/10 bg-lumbre-off/[0.03] px-6 py-16 text-center sm:px-12 md:py-24"
      data-reveal="scale"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-full -z-10 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--lumbre-ember)/0.35),rgb(var(--lumbre-brown)/0.12)_55%,transparent)] blur-2xl"
        aria-hidden="true"
      />
      <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] text-lumbre-off sm:text-4xl md:text-5xl">
        {copy.title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-pretty text-lumbre-off/65 md:text-lg">{copy.body}</p>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <a className="btn-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
          <Icon name="chat" className="h-4 w-4" />
          {copy.whatsapp}
        </a>
        <a className="btn-secondary" href={contactHref}>
          {copy.quote}
          <Icon name="arrow" className="btn-arrow h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default CtaBand;
