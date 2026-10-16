import { useState } from "react";
import Icon from "./Icon";
import { revealDelay } from "../utils/spotlight";

// Acordeon accesible: las respuestas siempre estan en el HTML (SEO) y se animan al abrir.
const Faq = ({ items, idPrefix = "faq" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-lumbre-off/10 border-y border-lumbre-off/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${idPrefix}-q-${index}`;
        const panelId = `${idPrefix}-a-${index}`;
        return (
          <div key={item.question} data-reveal="fade" style={revealDelay(index, 50)}>
            <h3>
              <button
                id={buttonId}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold text-lumbre-off transition-colors hover:text-lumbre-brown sm:text-lg"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.question}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ease-out-expo ${
                    isOpen
                      ? "rotate-45 border-lumbre-brown bg-lumbre-brown text-lumbre-black"
                      : "border-lumbre-off/15 text-lumbre-off/70 group-hover:border-lumbre-brown/60"
                  }`}
                  aria-hidden="true"
                >
                  <Icon name="plus" className="h-4 w-4" strokeWidth={2} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className="collapse-panel"
              data-open={isOpen}
            >
              <div>
                <p className="max-w-3xl pb-6 pr-12 text-[15px] leading-relaxed text-lumbre-off/60">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
