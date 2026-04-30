"use client";

import Image from "next/image";
import TrackedLink from "./TrackedLink";

const projects = [
  {
    img: "/portfolio-village-ida.jpg",
    cat: "Healthcare",
    title: "Village IDA Pharmacy",
    desc: "Full digital platform with online prescription refills, appointment booking, and patient management.",
    url: "https://www.villageidapharmacy.com/",
    outcome: "A local healthcare experience designed around refills, booking, and trust.",
    scope: "Pharmacy platform",
    proof: ["Prescription refill flow", "Appointment booking", "Local SEO foundation"],
  },
  {
    img: "/portfolio-invitvo.jpg",
    cat: "Pharmaceutical",
    title: "Invitvo",
    desc: "Research compound catalog and e-commerce portal for a Canadian pharmaceutical company.",
    url: "https://www.invitvo.com/",
    outcome: "A research-focused catalog that makes quote requests easier for technical buyers.",
    scope: "Research commerce",
    proof: ["Compound catalog", "Quote request pathway", "Research-focused UX"],
  },
];

export default function Portfolio() {
  return (
    <section id="featured-work" className="scroll-mt-[140px] bg-[var(--ink)] py-[140px] max-lg:py-[100px] border-t border-white/[0.08] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_12%,rgba(201,169,110,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_34%)]" />
      <div className="absolute inset-x-[52px] top-24 h-px bg-white/[0.08] max-lg:inset-x-6" />

      <div className="relative z-10 px-[52px] mb-20 max-lg:px-6 rv">
        <div className="eyebrow mb-[24px]">Featured Work</div>
        <div className="flex justify-between items-end gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,5rem)] font-bold text-[var(--cream-dark)] leading-[1.1] tracking-[-.02em] max-w-[800px]">
            Real <span className="italic font-normal text-white/45">results.</span>
          </h2>
          <p className="text-[.9rem] leading-[1.75] text-white/62 max-w-[410px] pb-3">
            Every project is custom-built from scratch. No templates, no shortcuts — just clean code that performs.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-10 px-[52px] max-lg:grid-cols-1 max-lg:px-6">
        {projects.map((p, i) => (
          <TrackedLink
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            eventName="portfolio_clicked"
            eventProperties={{ project: p.title, location: "featured_work" }}
            className={`group block w-full relative rv ${i > 0 ? 'd2' : ''}`}
          >
            <div className="aspect-[16/10] relative overflow-hidden rounded-[6px] border border-white/[0.12] mb-6 bg-white/[0.04] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] shadow-[0_18px_70px_rgba(0,0,0,0.22)] group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.35)] group-hover:-translate-y-1.5">
              <Image 
                src={p.img} 
                alt={p.title} 
                fill
                priority
                className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-[cubic-bezier(.16,1,.3,1)]" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-2 font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.1em] uppercase text-white/78 backdrop-blur">
                Case File 0{i + 1}
              </div>
            </div>

            {/* Text Below */}
            <div className="pr-4">
              <div className="flex items-center justify-between gap-4 mb-3 max-sm:flex-col max-sm:items-start">
                <h3 className="font-[family-name:var(--font-playfair)] text-[1.9rem] font-bold text-[var(--cream-dark)] leading-[1.2]">{p.title}</h3>
                <div className="font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.14em] uppercase text-[var(--gold)] px-3 py-1.5 bg-white/[0.06] border border-white/[0.12] rounded-full">{p.cat}</div>
              </div>
              <p className="text-[.88rem] leading-[1.75] text-white/62 max-w-[500px] mb-4">{p.desc}</p>
              <div className="mb-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-l border-[var(--gold)]/50 pl-4 max-sm:grid-cols-1">
                <span className="font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.14em] uppercase text-white/52">{p.scope}</span>
                <p className="text-[.8rem] leading-[1.7] text-white/72">{p.outcome}</p>
              </div>
              <ul className="mb-6 grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                {p.proof.map((item) => (
                  <li key={item} className="font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.08em] uppercase text-white/58 border border-white/[0.1] bg-white/[0.04] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.12em] uppercase text-white/45 transition-colors duration-300 group-hover:text-[var(--gold)]">
                View Live Project <span className="text-[.8rem] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
            </div>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
