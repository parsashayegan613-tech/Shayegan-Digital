"use client";

import MagneticButton from "./MagneticButton";
import TrackedLink from "./TrackedLink";

const steps = [
  {
    num: "01",
    title: "Strategy & Discovery",
    desc: "I don't start coding blindly. I analyze your business, your competitors, and your ideal customer to build a blueprint for conversion."
  },
  {
    num: "02",
    title: "Design Prototyping",
    desc: "I craft a premium, bespoke visual identity using high-end typography, custom branding elements, and modern UI patterns."
  },
  {
    num: "03",
    title: "Custom Development",
    desc: "No slow templates. I build your site from scratch using powerful tech, ensuring lightning-fast load times and flawless SEO."
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "After rigorously testing across all devices, I deploy your site on global edge networks and integrate analytics so you can track your growth."
  }
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-[100px] bg-[var(--ink)] py-[140px] max-lg:py-[100px] overflow-hidden">
      <div className="px-[52px] max-lg:px-6 mb-24 max-lg:mb-16 rv">
        <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.2em] uppercase text-[var(--gold)] mb-[24px]">My Process</div>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,5rem)] font-bold text-white leading-[1.1] tracking-[-.02em] max-w-[800px]">
          How I build <span className="italic font-normal text-[var(--white)] opacity-50">systems.</span>
        </h2>
      </div>

      <div className="px-[52px] max-lg:px-6 mb-16">
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-1 max-lg:gap-14">
          {steps.map((step, i) => (
            <div key={i} className={`relative group rv ${i > 0 ? `d${i}` : ''}`}>
              {/* Timeline Line */}
              <div className="w-[calc(100%+32px)] h-[1px] bg-white/10 mb-8 relative max-lg:w-[2px] max-lg:h-[120%] max-lg:absolute max-lg:left-0 max-lg:top-2 max-lg:mb-0">
                <div className="absolute top-0 left-0 h-full bg-[var(--gold)] w-0 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full max-lg:w-full max-lg:h-0 max-lg:group-hover:h-full" />
                <div className="absolute -top-[4px] left-0 w-[9px] h-[9px] rounded-full bg-[var(--ink)] border border-[rgba(255,255,255,0.4)] transition-all duration-500 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] max-lg:-left-[3px] max-lg:-top-1 group-hover:shadow-[0_0_15px_rgba(201,169,110,0.6)]" />
              </div>
              
              {/* Content */}
              <div className="max-lg:pl-8">
                <div className="font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.18em] uppercase text-[var(--gold)] mb-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{step.num}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-[1.8rem] font-bold text-white mb-4 leading-[1.2]">{step.title}</h3>
                <p className="text-[.85rem] leading-[1.7] text-white/60 pr-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-[52px] max-lg:px-6 rv d4">
        <MagneticButton>
          <TrackedLink
            href="#contact"
            eventName="cta_clicked"
            eventProperties={{ location: "process", label: "Start Your Project Today" }}
            className="font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.14em] uppercase text-[var(--ink)] bg-[var(--gold)] px-[34px] py-[15px] no-underline block transition-all duration-250 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-white hover:-translate-y-[2px]"
          >
            Start Your Project Today
          </TrackedLink>
        </MagneticButton>
      </div>
    </section>
  );
}
