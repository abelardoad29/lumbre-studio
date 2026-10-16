// Mueve el halo de las tarjetas .spotlight hacia la posicion del cursor.
export const trackSpotlight = (event) => {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  element.style.setProperty("--my", `${event.clientY - rect.top}px`);
};

// Retraso escalonado para animaciones de entrada en listas.
export const revealDelay = (index, step = 80) => ({ "--reveal-delay": `${index * step}ms` });
