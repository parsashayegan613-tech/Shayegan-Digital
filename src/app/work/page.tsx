import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import TrackedLink from "@/components/TrackedLink";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work | Shayegan Digital",
  description:
    "Explore Shayegan Digital case studies for Edmonton and Alberta businesses, including websites for recreation, fitness, construction, healthcare, and pharmaceutical brands.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: "Work | Shayegan Digital",
    description:
      "Custom website case studies for Edmonton and Alberta businesses.",
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    images: [siteConfig.image],
    locale: "en_CA",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <Marquee />

      <main className="bg-[var(--ink)] pt-[160px] text-[var(--white)]">
        <section className="px-[52px] pb-[96px] max-lg:px-6 max-lg:pb-[72px]">
          <div className="grid grid-cols-[1fr_.75fr] gap-14 items-end max-xl:grid-cols-1 rv">
            <div>
              <div className="eyebrow mb-6">Selected Work</div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.2rem,8vw,7rem)] leading-[.96] tracking-[-.045em] font-black text-[var(--cream-dark)] max-w-[980px]">
                Websites built around real business actions.
              </h1>
            </div>
            <p className="max-w-[520px] text-[.95rem] leading-[1.85] text-white/62 xl:ml-auto">
              Each project is custom-built from scratch around the client&apos;s real conversion path: calls, quote requests, bookings, refills, directions, or product inquiries.
            </p>
          </div>
        </section>

        <section className="px-[52px] pb-[130px] max-lg:px-6 max-lg:pb-[90px]">
          <div className="grid grid-cols-2 gap-x-10 gap-y-16 max-lg:grid-cols-1">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className={`group flex h-full flex-col rv ${index % 2 === 1 ? "d2" : ""}`}
              >
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[6px] border border-white/[0.12] bg-white/[0.04] shadow-[0_18px_70px_rgba(0,0,0,0.22)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-2 font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.1em] uppercase text-white/78 backdrop-blur">
                    Case File {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex flex-1 flex-col pr-4">
                  <div className="mb-3 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
                    <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold leading-[1.15] text-[var(--cream-dark)]">
                      {study.title}
                    </h2>
                    <div className="rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 font-[family-name:var(--font-dm-mono)] text-[.58rem] uppercase tracking-[.14em] text-[var(--gold)]">
                      {study.category}
                    </div>
                  </div>

                  <p className="mb-6 max-w-[560px] text-[.88rem] leading-[1.75] text-white/62 lg:min-h-[4.8rem]">
                    {study.summary}
                  </p>

                  <div className="mb-6 grid grid-cols-[110px_1fr] gap-x-4 gap-y-3 border border-white/[0.1] bg-white/[0.035] p-4 lg:min-h-[13.5rem] max-sm:grid-cols-1">
                    {[
                      ["Goal", study.proof.goal],
                      ["Result", study.proof.result],
                      ["Stack", study.proof.techStack],
                    ].map(([label, value]) => (
                      <div key={label} className="contents max-sm:block">
                        <span className="font-[family-name:var(--font-dm-mono)] text-[.56rem] uppercase tracking-[.14em] text-[var(--gold)]">
                          {label}
                        </span>
                        <p className="text-[.76rem] leading-[1.65] text-white/72 max-sm:mb-3 max-sm:mt-1">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
                    <TrackedLink
                      href={`/case-studies/${study.slug}`}
                      eventName="portfolio_clicked"
                      eventProperties={{ project: study.title, location: "work_page", destination: "case_study" }}
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.12em] text-white/45 transition-colors duration-300 hover:text-[var(--gold)]"
                    >
                      Read Case Study <span className="text-[.8rem]">-&gt;</span>
                    </TrackedLink>
                    <TrackedLink
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName="portfolio_clicked"
                      eventProperties={{ project: study.title, location: "work_page", destination: "live_site" }}
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.12em] text-[var(--gold)] transition-colors duration-300 hover:text-white"
                    >
                      View Live Website <span className="text-[.8rem]">↗</span>
                    </TrackedLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
