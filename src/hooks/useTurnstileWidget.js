import { useEffect, useRef } from "react";

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
  const pendingChallengeRef = useRef(null);

  useEffect(() => {
    callbacksRef.current = { onSuccess, onExpired, onError };
  }, [onSuccess, onExpired, onError]);

  useEffect(() => {
    return () => {
      pendingChallengeRef.current?.("");
      pendingChallengeRef.current = null;

      const turnstile = getTurnstile();
      if (turnstile && typeof turnstile.remove === "function" && widgetIdRef.current !== null) {
        turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, []);

  const resolvePendingChallenge = (token = "") => {
    if (!pendingChallengeRef.current) {
      return;
    }

    pendingChallengeRef.current(token);
    pendingChallengeRef.current = null;
  };

  const renderWidget = async () => {
    if (!siteKey || !containerRef.current) {
      return null;
    }

    const turnstile = await loadTurnstile();
    if (widgetIdRef.current !== null) {
      return turnstile;
    }

    widgetIdRef.current = turnstile.render(containerRef.current, {
      sitekey: siteKey,
      execution: "execute",
      appearance: "interaction-only",
      callback: (token) => {
        resolvePendingChallenge(token);
        callbacksRef.current.onSuccess?.(token);
      },
      "expired-callback": () => {
        resolvePendingChallenge("");
        callbacksRef.current.onExpired?.();
      },
      "error-callback": () => {
        resolvePendingChallenge("");
        callbacksRef.current.onError?.();
      },
    });

    return turnstile;
  };

  const execute = async () => {
    try {
      const turnstile = await renderWidget();
      if (!turnstile || widgetIdRef.current === null) {
        return "";
      }

      const response = turnstile.getResponse?.(widgetIdRef.current);
      if (response) {
        return response;
      }

      return await new Promise((resolve) => {
        pendingChallengeRef.current = resolve;
        try {
          turnstile.execute(containerRef.current);
        } catch (error) {
          try {
            turnstile.execute(widgetIdRef.current);
          } catch (fallbackError) {
            resolvePendingChallenge("");
            callbacksRef.current.onError?.();
          }
        }
      });
    } catch (error) {
      resolvePendingChallenge("");
      callbacksRef.current.onError?.();
      return "";
    }
  };

  const reset = () => {
    resolvePendingChallenge("");

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

  return { containerRef, execute, reset };
};
