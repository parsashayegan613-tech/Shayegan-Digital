"use client";

import { useState } from "react";
import MagneticButton from "./MagneticButton";
import TrackedLink from "./TrackedLink";

const services = [
  {
    n: "01",
    t: "A website that ranks while you sleep",
    d: "I build your website from scratch — no drag-and-drop templates or bloated page builders. The result? A site that loads fast, looks stunning on every device, and actually shows up when people search for your business on Google.",
    f: [
      "Lightning-fast pages that Google loves",
      "Beautiful on phones, tablets, and desktops",
      "Simple dashboard so you can update text yourself",
      "Built to rank higher in search results",
    ],
    tier: "Launch Site — $800",
  },
  {
    n: "02",
    t: "An online store that sells at 2am",
    d: "Online stores designed to make buying feel effortless. I focus on smooth checkout flows, beautiful product pages, and the kind of speed that keeps shoppers from bouncing to a competitor.",
    f: [
      "Professional online store setup",
      "Easy, secure payment processing",
      "Product pages that sell themselves",
      "Automated abandoned-cart recovery emails",
    ],
    tier: "Growth Site — $2,000",
  },
  {
    n: "03",
    t: "Stop losing leads after hours",
    d: "Stop wasting hours on repetitive tasks. I set up smart AI tools that handle customer questions, route leads to the right inbox, send follow-up emails automatically, and free up your team to focus on real work.",
    f: [
      "AI chatbots trained on your business info",
      "Automated lead routing & email follow-ups",
      "Internal knowledge bases for your team",
      "Connect your existing tools together seamlessly",
    ],
    tier: "Scale System — $3,500+",
  },
  {
    n: "04",
    t: "Growth & Support",
    d: "Your website shouldn't collect dust after launch. I provide ongoing updates, security monitoring, and performance tweaks so your site keeps working as hard as you do — month after month.",
    f: [
      "24/7 security monitoring & daily backups",
      "Monthly content & design updates",
      "Ongoing optimization to convert more visitors",
      "Priority support via email & Slack",
    ],
    tier: "Included in Growth Site",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-[160px] pb-[100px] max-lg:py-25 relative">
      <div id="services" className="scroll-mt-[160px] px-[52px] max-lg:scroll-mt-[130px] max-lg:px-6 max-sm:scroll-mt-[95px] mb-20 rv">
        <div className="eyebrow mb-6">
          What I Do
        </div>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,6vw,5.5rem)] font-bold text-[var(--ink)] leading-[1.1] tracking-[-.02em] max-w-[800px]">
          Most agency websites look good.{" "}
          <span className="italic font-normal text-[var(--ink-light)]">
            Mine make money.
          </span>
        </h2>
      </div>

      <div className="border-t border-black/[0.08] rv">
        {services.map((s, i) => {
          const isActive = active === i;
          const panelId = `service-panel-${i}`;
          return (
            <div
              key={i}
              className="border-b border-black/[0.08] px-[52px] py-[50px] transition-colors duration-300 hover:bg-black/[0.015] max-lg:px-6"
            >
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={panelId}
                onClick={() => setActive(isActive ? null : i)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-baseline gap-10 max-lg:gap-5">
                  <span className="font-[family-name:var(--font-dm-mono)] text-[.6rem] text-[var(--gold)]">
                    {s.n}
                  </span>
                  <div className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3vw,2.5rem)] text-[var(--ink)]">
                    {s.t}
                  </div>
                </div>
                <div
                  className={`w-11 h-11 border border-black/[0.15] rounded-full flex items-center justify-center relative transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
                    ${isActive ? "rotate-90 scale-90 bg-[var(--cream-dark)] border-transparent" : ""}
                    before:content-[''] before:absolute before:bg-[var(--ink)] before:w-[14px] before:h-[1.5px] before:transition-transform before:duration-400 before:ease-[cubic-bezier(.16,1,.3,1)]
                    after:content-[''] after:absolute after:bg-[var(--ink)] after:w-[1.5px] after:h-[14px] after:transition-transform after:duration-400 after:ease-[cubic-bezier(.16,1,.3,1)]
                    ${isActive ? "after:rotate-90 after:scale-0" : ""}
                  `}
                ></div>
              </button>

              <div
                id={panelId}
                className={`grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                  ${isActive ? "[grid-template-rows:1fr] mt-10 opacity-100" : "[grid-template-rows:0fr] mt-0 opacity-0"}
                `}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-2 gap-10 pl-[55px] max-lg:grid-cols-1 max-lg:pl-0 pb-2">
                    <div>
                      <p className="text-[.85rem] leading-[1.9] text-[var(--ink-mid)] max-w-[480px]">
                        {s.d}
                      </p>
                    </div>
                    <div>
                      <ul className="list-none flex flex-col gap-[14px]">
                        {s.f.map((f, j) => (
                          <li
                            key={j}
                            className="font-[family-name:var(--font-dm-mono)] text-[.65rem] text-[var(--ink)] pl-6 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:text-[var(--gold)] before:text-[.7rem]"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.12em] uppercase text-[var(--ink-mid)]">
                        {s.tier}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-[52px] mt-18 grid grid-cols-[1fr_auto] items-center gap-8 border border-[var(--ink-faint)] bg-[var(--white)] p-8 shadow-[0_18px_55px_rgba(12,12,10,0.045)] rv d3 max-lg:mx-6 max-lg:grid-cols-1">
        <div>
          <div className="eyebrow mb-3">Not sure what you need?</div>
          <h3 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3vw,3.25rem)] font-bold leading-[1.08] text-[var(--ink)]">
            Get the fastest path from idea to booked calls.
          </h3>
          <p className="mt-4 max-w-[560px] text-[.86rem] leading-[1.75] text-[var(--ink-mid)]">
            I&apos;ll help you choose the right scope, identify the pages that matter, and avoid paying for features your business does not need yet.
          </p>
        </div>
        <MagneticButton>
          <TrackedLink
            href="#contact"
            eventName="cta_clicked"
            eventProperties={{ location: "services_after", label: "Get My Website Plan" }}
            className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.14em] uppercase text-[var(--white)] bg-[var(--ink)] px-[30px] py-[14px] no-underline block transition-all duration-250 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-[var(--gold)] hover:-translate-y-[2px]"
          >
            Get My Website Plan
          </TrackedLink>
        </MagneticButton>
      </div>
    </section>
  );
}
