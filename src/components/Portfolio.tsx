"use client";

import Image from "next/image";
import TrackedLink from "./TrackedLink";
import { caseStudies } from "@/lib/case-studies";

export default function Portfolio() {
  return (
    <section className="bg-[var(--ink)] py-[140px] max-lg:py-[100px] border-t border-white/[0.08] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_12%,rgba(201,169,110,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_34%)]" />
      <div className="absolute inset-x-[52px] top-24 h-px bg-white/[0.08] max-lg:inset-x-6" />

      <div id="featured-work" className="relative z-10 scroll-mt-[160px] px-[52px] mb-20 max-lg:scroll-mt-[130px] max-lg:px-6 max-sm:scroll-mt-[95px] rv">
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
        {caseStudies.map((p, i) => (
          <TrackedLink
            key={i}
            href={`/case-studies/${p.slug}`}
            eventName="portfolio_clicked"
            eventProperties={{ project: p.title, location: "featured_work", destination: "case_study" }}
            className={`group block w-full relative rv ${i > 0 ? 'd2' : ''}`}
          >
            <div className="aspect-[16/10] relative overflow-hidden rounded-[6px] border border-white/[0.12] mb-6 bg-white/[0.04] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] shadow-[0_18px_70px_rgba(0,0,0,0.22)] group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.35)] group-hover:-translate-y-1.5">
              <Image
                src={p.image}
                alt={p.imageAlt}
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
                <div className="font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.14em] uppercase text-[var(--gold)] px-3 py-1.5 bg-white/[0.06] border border-white/[0.12] rounded-full">{p.category}</div>
              </div>
              <p className="text-[.88rem] leading-[1.75] text-white/62 max-w-[500px] mb-5">{p.summary}</p>
              <div className="mb-6 grid grid-cols-[110px_1fr] gap-x-4 gap-y-3 border border-white/[0.1] bg-white/[0.035] p-4 max-sm:grid-cols-1">
                {[
                  ["Goal", p.proof.goal],
                  ["Changed", p.proof.changed],
                  ["Result", p.proof.result],
                  ["Stack", p.proof.techStack],
                  ["Timeline", p.proof.timeline],
                ].map(([label, value]) => (
                  <div key={label} className="contents max-sm:block">
                    <span className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.14em] uppercase text-[var(--gold)]">
                      {label}
                    </span>
                    <p className="text-[.76rem] leading-[1.65] text-white/72 max-sm:mt-1 max-sm:mb-3">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mb-6 grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                {p.deliverables.slice(0, 3).map((item) => (
                  <li key={item} className="font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.08em] uppercase text-white/58 border border-white/[0.1] bg-white/[0.04] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.12em] uppercase text-white/45 transition-colors duration-300 group-hover:text-[var(--gold)]">
                Read Case Study <span className="text-[.8rem] transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </TrackedLink>
        ))}
      </div>

      <div className="relative z-10 mx-[52px] mt-20 border border-white/[0.12] bg-white/[0.055] p-8 flex items-center justify-between gap-8 rv d3 max-lg:mx-6 max-lg:flex-col max-lg:items-start">
        <div>
          <div className="eyebrow mb-3">Need proof for your business?</div>
          <h3 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3vw,3.4rem)] font-bold leading-[1.08] text-[var(--cream-dark)]">
            Let&apos;s map your highest-converting case study.
          </h3>
          <p className="mt-4 max-w-[560px] text-[.86rem] leading-[1.75] text-white/62">
            I&apos;ll show you what your current site is missing, which pages should drive calls, and what proof needs to be visible before someone books.
          </p>
        </div>
        <TrackedLink
          href="#contact"
          eventName="cta_clicked"
          eventProperties={{ location: "portfolio_after", label: "Plan My Website" }}
          className="shrink-0 font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.14em] uppercase text-[var(--ink)] bg-[var(--gold)] px-[30px] py-[14px] no-underline transition-all duration-250 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-white hover:-translate-y-[2px]"
        >
          Plan My Website
        </TrackedLink>
      </div>
    </section>
  );
}
