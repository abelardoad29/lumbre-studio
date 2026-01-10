import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds = []) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => Boolean(el));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};
