"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          setValue(0);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / 1600, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}</span>;
}

const stats = [
  { target: 2, suffix: "+", label: "Live client\nwebsites" },
  { target: 48, suffix: "hr", label: "Proposal\nturnaround" },
  { target: 100, suffix: "%", label: "Custom-built\nno templates" },
];

export default function Stats() {
  return (
    <div className="bg-[var(--ink)] py-14 px-12 grid grid-cols-4 max-lg:grid-cols-2 max-lg:py-10 max-lg:px-6">
      {stats.map((s, i) => (
        <div 
          key={i} 
          className={`px-8 border-r border-white/10 first:pl-0 last:border-r-0 max-lg:border-r-0 max-lg:border-b max-lg:py-5 max-lg:px-0 max-lg:odd:border-r max-lg:odd:pr-5 max-lg:[&:nth-child(3)]:border-b-0 max-lg:[&:nth-child(4)]:border-b-0 rv d${i + 1}`}
          aria-label={`${s.target}${s.suffix} ${s.label.replace("\n", " ")}`}
        >
          <div className="font-[family-name:var(--font-playfair)] text-[3rem] font-bold text-white leading-none mb-2" aria-hidden="true">
            <CountUp target={s.target} />
            <span className="text-[var(--gold)] text-[1.8rem] ml-1">{s.suffix}</span>
          </div>
          <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.18em] uppercase text-white/30 leading-[1.7] whitespace-pre-line">
            {s.label}
          </div>
        </div>
      ))}
      <div className="px-8 border-r border-white/10 first:pl-0 last:border-r-0 max-lg:border-r-0 max-lg:border-b max-lg:py-5 max-lg:px-0 max-lg:odd:border-r max-lg:odd:pr-5 max-lg:[&:nth-child(3)]:border-b-0 max-lg:[&:nth-child(4)]:border-b-0 rv d4">
        <div className="font-[family-name:var(--font-playfair)] text-[3rem] font-bold text-white leading-none mb-2">
          AI<span className="text-[var(--gold)] text-[1.8rem] ml-1">+</span>
        </div>
        <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.18em] uppercase text-white/30 leading-[1.7] whitespace-pre-line">
          Latest tools{"\n"}&amp; technology
        </div>
      </div>
    </div>
  );
}
