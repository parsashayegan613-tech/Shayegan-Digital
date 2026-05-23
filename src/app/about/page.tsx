import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Shayegan Digital",
  description:
    "Meet Parsa Shayegan, founder of Shayegan Digital, a boutique Edmonton web design agency building custom websites for local businesses.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About | Shayegan Digital",
    description:
      "Founder-led custom web design for Edmonton businesses that want direct communication, quality work, and websites built to generate real leads.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [siteConfig.image],
    locale: "en_CA",
    type: "website",
  },
};

const founderSignals = [
  "Founder-led strategy",
  "Direct communication",
  "Custom design only",
  "Limited client load",
  "Built for local trust",
  "Launch support included",
];

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Marquee />

      <main className="bg-[var(--cream)] pt-[150px]">
        <section className="px-[52px] pb-[110px] max-lg:px-6 max-lg:pb-[80px]">
          <div className="grid grid-cols-[1fr_.9fr] items-end gap-16 max-xl:grid-cols-1 rv">
            <div>
              <div className="eyebrow mb-6">About Shayegan Digital</div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.3rem,8vw,7.2rem)] font-black leading-[.95] tracking-[-.045em] text-[var(--ink)] max-w-[960px]">
                Boutique web design with founder-level attention.
              </h1>
            </div>
            <div className="max-w-[540px] xl:ml-auto">
              <p className="mb-8 text-[1rem] leading-[1.85] text-[var(--ink-mid)]">
                Shayegan Digital is run by Parsa Shayegan in Edmonton, built for businesses that want direct strategy, custom design, clean development, and a website that supports real sales conversations.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href="#contact"
                  eventName="cta_clicked"
                  eventProperties={{ location: "about_page_hero", label: "Book a free strategy call" }}
                  className="bg-[var(--ink)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--white)] transition-colors hover:bg-[var(--gold)]"
                >
                  Book a free strategy call
                </TrackedLink>
                <Link
                  href="/work"
                  className="border border-[var(--ink-faint)] bg-[var(--white)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  See client work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[52px] pb-[120px] max-lg:px-6 max-lg:pb-[84px]">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 rv">
            {founderSignals.map((signal) => (
              <div key={signal} className="border border-[var(--ink-faint)] bg-[var(--white)] px-5 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.1em] text-[var(--ink-mid)]">
                {signal}
              </div>
            ))}
          </div>
        </section>

        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
