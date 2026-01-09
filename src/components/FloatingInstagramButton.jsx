const FloatingInstagramButton = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <a
      className="fixed left-4 top-20 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-lumbre-brown bg-lumbre-black/90 text-lumbre-off transition hover:border-lumbre-off hover:text-white md:left-6 md:top-24 md:h-12 md:w-12"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      title="Instagram"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
};

export default FloatingInstagramButton;
