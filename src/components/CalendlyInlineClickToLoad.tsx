"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  /** Calendly URL */
  url: string;

  /** Optional: Vorbefüllung */
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };

  /** Optional: UTM / Tracking Parameter */
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };

  /** Höhe des Widgets (px) */
  height?: number;

  /** Überschrift */
  title?: string;

  /** Intro-Text */
  intro?: string;

  /** Button Text */
  buttonLabel?: string;

  /** Datenschutz-Hinweis */
  privacyHint?: string;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

function buildCalendlyUrl(
  baseUrl: string,
  prefill?: Props["prefill"],
  utm?: Props["utm"]
) {
  const url = new URL(baseUrl);

  if (utm) {
    if (utm.utmCampaign) url.searchParams.set("utm_campaign", utm.utmCampaign);
    if (utm.utmSource) url.searchParams.set("utm_source", utm.utmSource);
    if (utm.utmMedium) url.searchParams.set("utm_medium", utm.utmMedium);
    if (utm.utmContent) url.searchParams.set("utm_content", utm.utmContent);
    if (utm.utmTerm) url.searchParams.set("utm_term", utm.utmTerm);
  }

  if (prefill?.name) url.searchParams.set("name", prefill.name);
  if (prefill?.email) url.searchParams.set("email", prefill.email);

  return url.toString();
}

export default function CalendlyInlineClickToLoad({
  url,
  prefill,
  utm,
  height = 780,
  title = "Arbeitsstandard prüfen lassen",
  intro = "Wählen Sie einen Termin. Calendly wird erst nach Klick geladen.",
  buttonLabel = "Termin anzeigen",
  privacyHint = "Hinweis: Beim Laden wird Calendly (Drittanbieter) eingebunden. Es können Daten übertragen werden.",
}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScriptReady, setIsScriptReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const calendlyUrl = useMemo(
    () => buildCalendlyUrl(url, prefill, utm),
    [url, prefill, utm]
  );

  useEffect(() => {
    if (!isLoaded) return;

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-calendly="true"]'
    );
    if (existing) {
      setIsScriptReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendly = "true";
    script.onload = () => setIsScriptReady(true);
    document.body.appendChild(script);

    const cssExisting = document.querySelector<HTMLLinkElement>(
      'link[data-calendly-css="true"]'
    );
    if (!cssExisting) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      link.dataset.calendlyCss = "true";
      document.head.appendChild(link);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded || !isScriptReady) return;
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    if (window.Calendly?.initInlineWidget) {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: containerRef.current,
      });
    }
  }, [isLoaded, isScriptReady, calendlyUrl]);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          {intro}
        </p>

        {!isLoaded ? (
          <div className="mt-6 rounded-xl border border-border bg-background p-5 md:p-6">
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 font-medium text-background transition hover:bg-foreground/90"
            >
              {buttonLabel}
            </button>
            <p className="mt-3 text-sm text-muted-foreground">{privacyHint}</p>
          </div>
        ) : (
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-background">
            <div style={{ height }} ref={containerRef} />
          </div>
        )}
      </div>
    </section>
  );
}

