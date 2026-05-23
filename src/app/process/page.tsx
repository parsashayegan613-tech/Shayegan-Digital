import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process | Shayegan Digital",
  description:
    "See the Shayegan Digital website process, from strategy and design prototyping to custom development, launch, tracking, and scale.",
  alternates: {
    canonical: `${siteConfig.url}/process`,
  },
  openGraph: {
    title: "Process | Shayegan Digital",
    description:
      "A clear website process for Edmonton businesses: strategy, custom design, development, launch, and tracking.",
    url: `${siteConfig.url}/process`,
    siteName: siteConfig.name,
    images: [siteConfig.image],
    locale: "en_CA",
    type: "website",
  },
};

const outcomes = [
  "Clear strategy before design",
  "Conversion path planned up front",
  "Custom build with no templates",
  "Mobile and speed testing",
  "Analytics-ready launch",
  "Post-launch next steps",
];

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <Marquee />

      <main className="bg-[var(--cream)] pt-[150px]">
        <section className="px-[52px] pb-[110px] max-lg:px-6 max-lg:pb-[80px]">
          <div className="grid grid-cols-[1.05fr_.95fr] items-end gap-16 max-xl:grid-cols-1 rv">
            <div>
              <div className="eyebrow mb-6">Website Process</div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.3rem,8vw,7.4rem)] font-black leading-[.95] tracking-[-.045em] text-[var(--ink)] max-w-[920px]">
                A clear path from first call to live website.
              </h1>
            </div>
            <div className="max-w-[540px] xl:ml-auto">
              <p className="mb-8 text-[1rem] leading-[1.85] text-[var(--ink-mid)]">
                Every build starts with the business goal, then moves through strategy, design, custom development, launch, and tracking so the final site is built around real leads.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href="#contact"
                  eventName="cta_clicked"
                  eventProperties={{ location: "process_page_hero", label: "Book a free strategy call" }}
                  className="bg-[var(--ink)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--white)] transition-colors hover:bg-[var(--gold)]"
                >
                  Book a free strategy call
                </TrackedLink>
                <Link
                  href="/work"
                  className="border border-[var(--ink-faint)] bg-[var(--white)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  See finished work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[52px] pb-[120px] max-lg:px-6 max-lg:pb-[84px]">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 rv">
            {outcomes.map((outcome) => (
              <div key={outcome} className="border border-[var(--ink-faint)] bg-[var(--white)] px-5 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.1em] text-[var(--ink-mid)]">
                {outcome}
              </div>
            ))}
          </div>
        </section>

        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
