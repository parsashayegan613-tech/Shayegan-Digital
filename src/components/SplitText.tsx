"use client";

import { useEffect, useRef } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function SplitText({
  children,
  className = "",
  delay = 0,
  stagger = 40,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("st-in");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Split into words, then chars within words (preserves word wrapping)
  const words = children.split(" ");

  return (
    <span ref={ref} className={`st-wrap ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="st-word">
          {word.split("").map((char, ci) => {
            const globalIndex =
              words.slice(0, wi).reduce((acc, w) => acc + w.length, 0) + ci;
            return (
              <span
                key={ci}
                className="st-char"
                style={{
                  transitionDelay: `${delay + globalIndex * stagger}ms`,
                }}
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 && <span className="st-char st-space">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
