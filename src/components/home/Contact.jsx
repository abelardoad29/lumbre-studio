import { useEffect, useRef, useState } from "react";
import { CONTACT, mailtoUrl, whatsappUrl } from "../../content/site.js";
import { useTurnstileWidget } from "../../hooks/useTurnstileWidget";
import Icon from "../Icon";
import { SectionHeader } from "../Section";

const EMPTY_FORM = { name: "", email: "", phone: "", projectType: "", message: "" };
const CAPTCHA_ERRORS = ["Captcha required", "Captcha verification failed"];

// Opciones del selector: paquetes de ambas pestanas de precios + servicios extra.
const buildServiceOptions = (pricing, otherLabel) => [
  ...pricing.tabs.map((tab) => ({
    group: tab.label,
    options: tab.plans.map((plan) => ({ value: plan.id, label: plan.name })),
  })),
  {
    group: pricing.extrasTitle,
    options: [
      ...pricing.extras.map((extra) => ({ value: extra.id, label: extra.name })),
      { value: "other", label: otherLabel },
    ],
  },
];

const Contact = ({ id, copy, pricing, lang, selectedPlan }) => {
  const form = copy.form;
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const serviceGroups = buildServiceOptions(pricing, form.otherOption);
  const [formValues, setFormValues] = useState(EMPTY_FORM);
  const [formStatus, setFormStatus] = useState("idle");
  const [formErrors, setFormErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const nameInputRef = useRef(null);

  // Al elegir un paquete en Precios se preselecciona aqui.
  useEffect(() => {
    if (!selectedPlan) {
      return;
    }
    setFormValues((prev) => ({ ...prev, projectType: selectedPlan.id }));
    setFormStatus("idle");
    const timer = window.setTimeout(() => nameInputRef.current?.focus({ preventScroll: true }), 600);
    return () => window.clearTimeout(timer);
  }, [selectedPlan]);

  const clearError = (field) => {
    setFormErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (formStatus === "error") {
      setFormStatus("idle");
    }
    clearError(name);
  };

  const {
    containerRef: captchaContainerRef,
    execute: executeTurnstile,
    reset: resetTurnstile,
  } = useTurnstileWidget({
    siteKey: turnstileSiteKey,
    onSuccess: (token) => {
      setCaptchaToken(token);
      clearError("captcha");
    },
    onExpired: () => setCaptchaToken(""),
    onError: () => setCaptchaToken(""),
  });

  const resetCaptcha = () => {
    setCaptchaToken("");
    resetTurnstile();
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) {
      errors.name = form.errors.name;
    }
    if (!formValues.email.trim()) {
      errors.email = form.errors.email;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email.trim())) {
      errors.email = form.errors.emailInvalid;
    }
    if (!formValues.message.trim()) {
      errors.message = form.errors.message;
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      const firstInvalid = event.currentTarget.querySelector(`[name="${Object.keys(errors)[0]}"]`);
      firstInvalid?.focus();
      return;
    }

    setFormStatus("loading");
    try {
      const verifiedCaptchaToken = turnstileSiteKey ? captchaToken || (await executeTurnstile()) : "";
      if (turnstileSiteKey && !verifiedCaptchaToken) {
        setFormErrors((prev) => ({ ...prev, captcha: form.errors.captcha }));
        setFormStatus("idle");
        return;
      }

      const selectedService = serviceGroups
        .flatMap((group) => group.options)
        .find((option) => option.value === formValues.projectType)?.label;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          message: formValues.message,
          service: selectedService || "",
          lang,
          captchaToken: verifiedCaptchaToken,
        }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        resetCaptcha();
        if (payload && CAPTCHA_ERRORS.includes(payload.error)) {
          setFormErrors((prev) => ({ ...prev, captcha: form.errors.captcha }));
          setFormStatus("idle");
          return;
        }
        setFormStatus("error");
        return;
      }

      setFormValues(EMPTY_FORM);
      setFormErrors({});
      resetCaptcha();
      setFormStatus("success");
    } catch (error) {
      resetCaptcha();
      setFormStatus("error");
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: formValues[name],
    onChange: handleInputChange,
    "aria-invalid": formErrors[name] ? "true" : undefined,
    "aria-describedby": formErrors[name] ? `contact-${name}-error` : undefined,
  });

  const fieldError = (name) =>
    formErrors[name] ? (
      <p id={`contact-${name}-error`} className="mt-2 text-sm text-lumbre-error">
        {formErrors[name]}
      </p>
    ) : null;

  const directLinks = [
    { label: "WhatsApp", detail: CONTACT.whatsappDisplay, href: whatsappUrl(copy.whatsappMessage), icon: "chat", external: true },
    { label: "Email", detail: CONTACT.email, href: mailtoUrl(copy.emailSubject), icon: "mail" },
    { label: "Instagram", detail: CONTACT.instagramHandle, href: CONTACT.instagramUrl, icon: "instagram", external: true },
  ];

  return (
    <section id={id} className="relative" data-fab-hide="">
      <div className="container-page py-20 md:py-28">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          <div className="card relative flex min-w-0 flex-col overflow-hidden p-6 sm:p-9" data-reveal="">
            {/* El formulario se queda montado (solo oculto) para no perder el widget de Turnstile. */}
            {formStatus === "success" ? (
              <div className="enter flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-lumbre-brown to-lumbre-ember text-lumbre-black">
                  <Icon name="check" className="h-8 w-8" strokeWidth={2.4} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-lumbre-off">{form.successTitle}</h3>
                <p className="mt-3 max-w-sm text-lumbre-off/60">{form.successBody}</p>
                <button className="btn-secondary mt-8" type="button" onClick={() => setFormStatus("idle")}>
                  {form.successReset}
                </button>
              </div>
            ) : null}
            <form className={formStatus === "success" ? "hidden" : "flex flex-1 flex-col"} noValidate onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="contact-name">
                    {form.name}
                  </label>
                  <input
                    ref={nameInputRef}
                    className="field"
                    type="text"
                    autoComplete="name"
                    placeholder={form.namePlaceholder}
                    {...fieldProps("name")}
                  />
                  {fieldError("name")}
                </div>
                <div>
                  <label className="field-label" htmlFor="contact-email">
                    {form.email}
                  </label>
                  <input
                    className="field"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder={form.emailPlaceholder}
                    {...fieldProps("email")}
                  />
                  {fieldError("email")}
                </div>
                <div>
                  <label className="field-label" htmlFor="contact-phone">
                    {form.phone}
                  </label>
                  <input
                    className="field"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={form.phonePlaceholder}
                    {...fieldProps("phone")}
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="contact-projectType">
                    {form.projectType}
                  </label>
                  <div className="relative">
                    <select className="field appearance-none pr-11" {...fieldProps("projectType")}>
                      <option value="">{form.projectTypePlaceholder}</option>
                      {serviceGroups.map((group) => (
                        <optgroup key={group.group} label={group.group}>
                          {group.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-lumbre-off/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <label className="field-label" htmlFor="contact-message">
                  {form.message}
                </label>
                <textarea
                  className="field min-h-[150px] flex-1 resize-y"
                  placeholder={form.messagePlaceholder}
                  {...fieldProps("message")}
                />
                {fieldError("message")}
              </div>

              {turnstileSiteKey ? (
                <div className="mt-5">
                  <div ref={captchaContainerRef} />
                  {formErrors.captcha ? <p className="mt-2 text-sm text-lumbre-error">{formErrors.captcha}</p> : null}
                </div>
              ) : null}

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-lumbre-off/60">{form.privacy}</p>
                <button className="btn-primary sm:min-w-[200px]" type="submit" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-lumbre-black/30 border-t-lumbre-black" />
                      {form.sending}
                    </>
                  ) : (
                    <>
                      {form.submit}
                      <Icon name="arrow" className="btn-arrow h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              <div aria-live="polite">
                {formStatus === "error" ? (
                  <p className="mt-5 rounded-2xl border border-lumbre-error/30 bg-lumbre-error/10 px-4 py-3 text-sm text-lumbre-error">
                    {form.error}
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <div className="flex min-w-0 flex-col gap-6">
            <div className="card p-6 sm:p-8" data-reveal="" style={{ "--reveal-delay": "100ms" }}>
              <h3 className="text-lg font-semibold tracking-tight text-lumbre-off">{copy.nextTitle}</h3>
              <ol className="mt-6 space-y-5">
                {copy.nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-[15px] leading-relaxed text-lumbre-off/65">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-lumbre-brown/40 font-mono text-xs text-lumbre-brown">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-6 sm:p-8" data-reveal="" style={{ "--reveal-delay": "180ms" }}>
              <h3 className="text-lg font-semibold tracking-tight text-lumbre-off">{copy.directTitle}</h3>
              <ul className="mt-5 space-y-2">
                {directLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-lumbre-off/[0.05]"
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lumbre-brown/15 text-lumbre-brown">
                        <Icon name={link.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-lumbre-off">{link.label}</span>
                        <span className="block truncate text-sm text-lumbre-off/65">{link.detail}</span>
                      </span>
                      <Icon
                        name="arrow"
                        className="h-4 w-4 shrink-0 text-lumbre-off/30 transition duration-300 group-hover:translate-x-1 group-hover:text-lumbre-brown"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
