"use client";

import { useState } from "react";

const services = [
  {
    n: "01",
    t: "Web Development",
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
    t: "E-Commerce",
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
    t: "AI Automation",
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
    <section id="services" className="py-[160px] pb-[100px] max-lg:py-25 relative">
      <div className="px-[52px] max-lg:px-6 mb-20 rv">
        <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.2em] uppercase text-[var(--gold)] mb-6">
          What I Do
        </div>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,6vw,5.5rem)] font-bold text-[var(--ink)] leading-[1.1] tracking-[-.02em] max-w-[800px]">
          Everything your business needs{" "}
          <span className="italic font-normal text-[var(--ink-light)]">
            to grow online.
          </span>
        </h2>
      </div>

      <div className="border-t border-black/[0.08] rv">
        {services.map((s, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              className="border-b border-black/[0.08] px-[52px] py-[50px] cursor-pointer transition-colors duration-300 hover:bg-black/[0.015] max-lg:px-6"
              onClick={() => setActive(isActive ? null : i)}
            >
              <div className="flex items-center justify-between">
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
              </div>

              <div
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
                      <div className="mt-8 font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.18em] uppercase text-[var(--ink-light)]">
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
    </section>
  );
}
