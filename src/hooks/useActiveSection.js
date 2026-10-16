import { useEffect, useState } from "react";

// Devuelve el id de la seccion que esta en la franja superior de la pantalla ("" si ninguna, p. ej. en el hero).
export const useActiveSection = (sectionIds = []) => {
  const [activeId, setActiveId] = useState("");
  // Las paginas pasan un arreglo nuevo en cada render; se usa una llave estable para no
  // recrear el IntersectionObserver en cada render.
  const idsKey = sectionIds.join(",");

  useEffect(() => {
    const ids = idsKey ? idsKey.split(",") : [];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) {
      return undefined;
    }

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRect.height);
          } else {
            visible.delete(entry.target.id);
          }
        });
        const [topId = ""] = [...visible.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id);
        setActiveId(topId);
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
};
