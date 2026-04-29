"use client";

import MagneticButton from "./MagneticButton";
import SplitText from "./SplitText";
import TrackedLink from "./TrackedLink";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--white)] pt-[100px] relative overflow-hidden z-10">
      <div className="px-[52px] max-lg:px-[24px] pb-[80px] grid grid-cols-[1fr_auto] max-lg:grid-cols-1 gap-10 items-end rv">
        <div>
          <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.2em] uppercase text-[var(--gold)] mb-[24px]">Ready?</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-6 leading-[1.05] tracking-[-.02em] max-w-[600px]">
            Let&apos;s build something <span className="italic font-normal text-[var(--white)] opacity-50">extraordinary.</span>
          </h2>
          <p className="text-[.9rem] leading-[1.7] text-white/40 max-w-[400px]">
            Based in Edmonton, AB. Working with founders & businesses worldwide to build scalable digital systems.
          </p>
        </div>
        <div className="flex flex-col justify-end max-lg:mt-4 max-lg:mb-6">
          <MagneticButton>
            <TrackedLink
              href="#contact"
              eventName="cta_clicked"
              eventProperties={{ location: "footer", label: "Start your project" }}
              className="inline-flex items-center gap-4 bg-[var(--gold)] text-[var(--ink)] px-[38px] py-[22px] rounded-[100px] font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.15em] uppercase transition-all duration-300 hover:bg-[var(--white)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(201,169,110,0.2)] group"
            >
              Start your project
              <span className="text-[1.1rem] transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </TrackedLink>
          </MagneticButton>
        </div>
      </div>

      {/* Massive Typography Decoration */}
      <div className="w-full flex justify-center px-[2vw] pb-6 rv d2 select-none cursor-blend">
        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.8rem,15vw,20rem)] font-black tracking-[-.04em] leading-[0.8] text-center text-white/[0.06] w-full flex justify-between uppercase">
          <SplitText delay={200} stagger={50}>Shayegan</SplitText>
          <SplitText className="italic font-normal ml-8 text-white/[0.07]" delay={500} stagger={50}>Digital</SplitText>
        </h1>
      </div>

      <div className="flex justify-center items-center px-[52px] py-8 border-t border-[rgba(255,255,255,0.06)] max-lg:px-[24px]">
        <div className="font-[family-name:var(--font-dm-mono)] text-[.55rem] text-white/30 tracking-[.1em] text-center">
          © {new Date().getFullYear()} SHAYEGAN DIGITAL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
