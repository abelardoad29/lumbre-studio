import { useEffect, useRef, useState } from "react";

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-api";
const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let turnstileLoadPromise;

const getTurnstile = () => {
  if (typeof window === "undefined") {
    return null;
  }
  if (window.turnstile && typeof window.turnstile.render === "function") {
    return window.turnstile;
  }
  return null;
};

const loadTurnstile = () => {
  const readyTurnstile = getTurnstile();
  if (readyTurnstile) {
    return Promise.resolve(readyTurnstile);
  }

  if (typeof document === "undefined") {
    return Promise.reject(new Error("Turnstile can only load in the browser."));
  }

  if (turnstileLoadPromise) {
    return turnstileLoadPromise;
  }

  turnstileLoadPromise = new Promise((resolve, reject) => {
    const resolveWhenReady = () => {
      const turnstile = getTurnstile();
      if (turnstile) {
        resolve(turnstile);
        return;
      }

      turnstileLoadPromise = null;
      reject(new Error("Turnstile script loaded without exposing window.turnstile."));
    };

    const rejectLoad = () => {
      turnstileLoadPromise = null;
      reject(new Error("Turnstile script failed to load."));
    };

    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener("load", resolveWhenReady, { once: true });
      existingScript.addEventListener("error", rejectLoad, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", resolveWhenReady, { once: true });
    script.addEventListener("error", rejectLoad, { once: true });
    document.head.appendChild(script);
  });

  return turnstileLoadPromise;
};

export const useTurnstileWidget = ({ siteKey, onSuccess, onExpired, onError }) => {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const callbacksRef = useRef({ onSuccess, onExpired, onError });
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    callbacksRef.current = { onSuccess, onExpired, onError };
  }, [onSuccess, onExpired, onError]);

  useEffect(() => {
    if (!siteKey || shouldLoad) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [siteKey, shouldLoad]);

  useEffect(() => {
    if (!siteKey || !shouldLoad) {
      return;
    }

    let cancelled = false;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) {
          return;
        }

        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => callbacksRef.current.onSuccess?.(token),
          "expired-callback": () => callbacksRef.current.onExpired?.(),
          "error-callback": () => callbacksRef.current.onError?.(),
        });
      })
      .catch(() => {
        if (!cancelled) {
          callbacksRef.current.onError?.();
        }
      });

    return () => {
      cancelled = true;
      const turnstile = getTurnstile();
      if (turnstile && typeof turnstile.remove === "function" && widgetIdRef.current !== null) {
        turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [siteKey, shouldLoad]);

  const reset = () => {
    const turnstile = getTurnstile();
    if (!turnstile || typeof turnstile.reset !== "function") {
      return;
    }

    if (widgetIdRef.current !== null) {
      turnstile.reset(widgetIdRef.current);
      return;
    }

    turnstile.reset();
  };

  return { containerRef, reset };
};
