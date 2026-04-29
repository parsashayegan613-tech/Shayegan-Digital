"use client";

import Image from "next/image";
import TrackedLink from "./TrackedLink";

const projects = [
  {
    img: "/village-ida.jpg",
    cat: "Healthcare",
    title: "Village IDA Pharmacy",
    desc: "Full digital platform with online prescription refills, appointment booking, and patient management.",
    url: "https://www.villageidapharmacy.com/",
    proof: ["Prescription refill flow", "Appointment booking", "Local SEO foundation"],
  },
  {
    img: "/invitvo.jpg",
    cat: "Pharmaceutical",
    title: "Invitvo",
    desc: "Research compound catalog and e-commerce portal for a Canadian pharmaceutical company.",
    url: "https://www.invitvo.com/",
    proof: ["Compound catalog", "Quote request pathway", "Research-focused UX"],
  },
];

export default function Portfolio() {
  return (
    <section id="featured-work" className="scroll-mt-[140px] bg-[var(--cream)] py-[140px] max-lg:py-[100px] border-t border-[var(--ink-faint)]">
      <div className="px-[52px] mb-20 max-lg:px-6 rv">
        <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.2em] uppercase text-[var(--gold)] mb-[24px]">Featured Work</div>
        <div className="flex justify-between items-end gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,5rem)] font-bold text-[var(--ink)] leading-[1.1] tracking-[-.02em] max-w-[800px]">
            Real <span className="italic font-normal text-[var(--ink-light)]">results.</span>
          </h2>
          <p className="text-[.85rem] leading-[1.7] text-[var(--ink-mid)] max-w-[380px] pb-3">
            Every project is custom-built from scratch. No templates, no shortcuts — just clean code that performs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 px-[52px] max-lg:grid-cols-1 max-lg:px-6">
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
            <div className="aspect-[16/10] relative overflow-hidden rounded-[4px] border border-[var(--ink-faint)] mb-6 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
              <Image 
                src={p.img} 
                alt={p.title} 
                fill
                className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 ease-[cubic-bezier(.16,1,.3,1)]" />
            </div>

            {/* Text Below */}
            <div className="pr-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-[1.8rem] font-bold text-[var(--ink)] leading-[1.2]">{p.title}</h3>
                <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.18em] uppercase text-[var(--gold)] px-3 py-1 bg-[var(--white)] border border-[var(--ink-faint)] rounded-full">{p.cat}</div>
              </div>
              <p className="text-[.85rem] leading-[1.7] text-[var(--ink-mid)] max-w-[440px] mb-6">{p.desc}</p>
              <ul className="mb-6 grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                {p.proof.map((item) => (
                  <li key={item} className="font-[family-name:var(--font-dm-mono)] text-[.52rem] tracking-[.1em] uppercase text-[var(--ink-light)] border border-[var(--ink-faint)] bg-[var(--white)] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.14em] uppercase text-[var(--ink-light)] transition-colors duration-300 group-hover:text-[var(--gold)]">
                View Live Project <span className="text-[.8rem] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
            </div>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
