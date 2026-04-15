"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import SplitText from "./SplitText";

const words = ["websites", "brands", "systems", "results"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative overflow-hidden h-[1.15em] align-bottom">
      <span
        className="inline-block transition-all duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)]"
        style={{
          transform: animating ? "translateY(-110%)" : "translateY(0)",
          opacity: animating ? 0 : 1,
        }}
      >
        {words[index]}.
      </span>
    </span>
  );
}

export default function Hero() {
  const stackRef = useRef<HTMLDivElement>(null);

  const handleStackMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = stackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  }, []);

  const handleStackLeave = useCallback(() => {
    const el = stackRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    el.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 600);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen grid grid-cols-2 pt-[108px] relative overflow-hidden max-lg:grid-cols-1 max-lg:pt-[120px]"
    >
      <div 
        className="absolute top-[-10%] left-[48%] w-[3px] h-[120%] bg-gradient-to-b from-transparent via-[var(--gold)] via-20% to-[var(--gold)] to-80% transform rotate-[8deg] origin-top opacity-25 pointer-events-none"
      ></div>

      <div className="flex flex-col justify-center px-[52px] py-[60px] pb-[80px] relative z-2 max-lg:px-6 max-lg:py-10 max-lg:pb-16">
        <p className="inline-flex items-center gap-[10px] font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.2em] uppercase text-[var(--gold)] mb-9 opacity-0 animate-[fup_.7s_cubic-bezier(.16,1,.3,1)_.2s_forwards] before:content-[''] before:w-7 before:h-[1px] before:bg-[var(--gold)]">
          Edmonton Digital Agency &nbsp;/&nbsp; Est. 2026
        </p>
        <h1 className="cursor-blend font-[family-name:var(--font-playfair)] text-[clamp(3.8rem,7.5vw,8rem)] font-black leading-[.92] tracking-[-.03em] text-[var(--ink)] max-lg:text-[clamp(3rem,12vw,5.5rem)] max-sm:text-[clamp(2.6rem,14vw,4rem)]">
          <span className="block overflow-clip">
            <SplitText className="block" delay={350} stagger={40}>I build</SplitText>
          </span>
          <span className="block overflow-clip">
            <span className="block animate-[sup_.9s_cubic-bezier(.16,1,.3,1)_.5s_both]">
              <span className="font-[family-name:var(--font-playfair)] italic text-[var(--gold)]">
                <RotatingWord />
              </span>
            </span>
          </span>
          <span className="block overflow-clip">
            <SplitText className="block" delay={650} stagger={40}>that convert.</SplitText>
          </span>
        </h1>
        <p className="mt-10 text-[.88rem] font-normal leading-[1.8] text-[var(--ink-mid)] max-w-[400px] opacity-0 animate-[fup_.8s_cubic-bezier(.16,1,.3,1)_.9s_forwards]">
          I help businesses get found on Google, look professional online, and turn visitors into paying customers. 
          Everything is custom-designed and built from scratch. No templates. No hidden fees. No ghosting after launch.
        </p>
        <div className="mt-11 flex items-center gap-6 flex-wrap opacity-0 animate-[fup_.8s_cubic-bezier(.16,1,.3,1)_1.05s_forwards]">
          <MagneticButton>
            <a
              href="#our-work"
              className="font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.14em] uppercase text-[var(--white)] bg-[var(--ink)] px-[34px] py-[15px] no-underline block transition-all duration-250 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-[var(--gold)] hover:-translate-y-[2px]"
            >
              Featured Work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.14em] uppercase text-[var(--ink-light)] no-underline flex items-center gap-2 py-[15px] px-[20px] transition-colors duration-200 after:content-['↗'] after:text-[.9rem] after:transition-transform after:duration-300 after:ease-[cubic-bezier(.16,1,.3,1)] hover:text-[var(--ink)] hover:after:translate-x-[3px] hover:after:-translate-y-[3px]"
            >
              Book a Free Strategy Call
            </a>
          </MagneticButton>
        </div>
      </div>

      <div className="flex items-center justify-center px-[52px] py-[60px] pb-[80px] pl-6 relative z-2 max-lg:hidden">
        <div 
          className="relative w-[360px] h-[420px] group" 
          ref={stackRef}
          onMouseMove={handleStackMove}
          onMouseLeave={handleStackLeave}
        >
          {/* Card 3 — Scale System */}
          <div className="absolute border border-[var(--ink-faint)] p-8 bg-[var(--cream-dark)] transition-all duration-700 ease-[cubic-bezier(.34,1.56,.64,1)] top-[80px] left-[24px] w-[300px] -rotate-1 z-[3] group-hover:translate-x-[160px] group-hover:-translate-y-[110px] group-hover:rotate-[6deg] group-hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] hover:!scale-[1.10] hover:!z-50 hover:!rotate-0 cursor-pointer">
            <p className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.18em] uppercase text-[var(--gold)] mb-3">Premium</p>
            <h3 className="font-[family-name:var(--font-playfair)] text-[1.3rem] font-bold text-[var(--ink)] mb-2">Scale System</h3>
            <p className="text-[.76rem] font-normal leading-[1.7] text-[var(--ink-light)]">The full digital system — website, AI automations, and e-commerce.</p>
            <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-[var(--ink)] mt-4">$3.5k <span className="font-[family-name:var(--font-dm-mono)] text-[.75rem] font-normal text-[var(--gold)]">+</span></div>
          </div>
          {/* Card 2 — Growth Site */}
          <div className="absolute border border-[var(--ink-faint)] p-8 bg-[var(--cream)] transition-all duration-700 ease-[cubic-bezier(.34,1.56,.64,1)] top-[40px] left-[50px] w-[300px] rotate-[1.5deg] z-[2] group-hover:-translate-x-[10px] group-hover:translate-y-[10px] group-hover:-rotate-2 group-hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] hover:!scale-[1.10] hover:!z-50 hover:!rotate-0 cursor-pointer">
            <p className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.18em] uppercase text-[var(--gold)] mb-3">Most Popular</p>
            <h3 className="font-[family-name:var(--font-playfair)] text-[1.3rem] font-bold text-[var(--ink)] mb-2">Growth Site</h3>
            <p className="text-[.76rem] font-normal leading-[1.7] text-[var(--ink-light)]">A high-converting website built to rank on Google and capture leads.</p>
            <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-[var(--ink)] mt-4">$2k <span className="font-[family-name:var(--font-dm-mono)] text-[.75rem] font-normal text-[var(--gold)]">+</span></div>
          </div>
          {/* Card 1 — Launch Site */}
          <div className="absolute border border-[var(--ink-faint)] p-8 bg-[var(--white)] transition-all duration-700 ease-[cubic-bezier(.34,1.56,.64,1)] top-0 left-0 w-[300px] -rotate-3 z-[1] group-hover:-translate-x-[180px] group-hover:translate-y-[130px] group-hover:-rotate-[10deg] group-hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] hover:!scale-[1.10] hover:!z-50 hover:!rotate-0 cursor-pointer">
            <p className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.18em] uppercase text-[var(--gold)] mb-3">Starter</p>
            <h3 className="font-[family-name:var(--font-playfair)] text-[1.3rem] font-bold text-[var(--ink)] mb-2">Launch Site</h3>
            <p className="text-[.76rem] font-normal leading-[1.7] text-[var(--ink-light)]">A clean, professional website that gets your business online.</p>
            <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-[var(--ink)] mt-4">$800 <span className="font-[family-name:var(--font-dm-mono)] text-[.75rem] font-normal text-[var(--gold)]">+</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
