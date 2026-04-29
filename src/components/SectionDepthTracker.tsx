"use client";

import { useEffect } from "react";
import { trackMarketingEvent } from "@/lib/analytics";

const trackedSections = [
  "home",
  "services",
  "featured-work",
  "process",
  "pricing",
  "about",
  "contact",
];

export default function SectionDepthTracker() {
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (!entry.isIntersecting || seen.has(sectionId)) return;

          seen.add(sectionId);
          trackMarketingEvent("section_viewed", { section_id: sectionId });

          if (seen.size === trackedSections.length) {
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    trackedSections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
