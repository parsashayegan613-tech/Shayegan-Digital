"use client";

import { track } from "@vercel/analytics/react";

type EventValue = string | number | boolean | null;
export type EventProperties = Record<string, EventValue>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      eventParameters?: Record<string, string | number | boolean>
    ) => void;
  }
}

function removeNullValues(properties?: EventProperties) {
  if (!properties) return undefined;

  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== null)
  ) as Record<string, string | number | boolean>;
}

export function trackMarketingEvent(
  eventName: string,
  eventProperties?: EventProperties
) {
  track(eventName, eventProperties);

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, removeNullValues(eventProperties));
}
