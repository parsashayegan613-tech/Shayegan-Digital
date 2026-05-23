import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing | Shayegan Digital",
  description:
    "Transparent website pricing for Edmonton businesses. Compare launch sites, growth sites, scale systems, and optional add-ons.",
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
  openGraph: {
    title: "Pricing | Shayegan Digital",
    description:
      "Transparent custom website pricing for Edmonton businesses.",
    url: `${siteConfig.url}/pricing`,
    siteName: siteConfig.name,
    images: [siteConfig.image],
    locale: "en_CA",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <Marquee />

      <main className="bg-[var(--cream)] pt-[96px]">
        <section className="px-[52px] pb-[70px] pt-[54px] max-lg:px-6 max-lg:pb-[44px] max-lg:pt-[38px]">
          <div className="grid grid-cols-[1.05fr_.95fr] items-end gap-16 max-xl:grid-cols-1 rv">
            <div>
              <div className="eyebrow mb-6">Website Pricing</div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.3rem,8vw,7.2rem)] font-black leading-[.95] tracking-[-.045em] text-[var(--ink)] max-w-[950px]">
                Transparent pricing for custom websites.
              </h1>
            </div>
            <div className="max-w-[540px] xl:ml-auto">
              <p className="mb-8 text-[1rem] leading-[1.85] text-[var(--ink-mid)]">
                Choose the level of build that fits your business now. Every tier is custom-designed, mobile-ready, and built with clean conversion paths.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href="#contact"
                  eventName="cta_clicked"
                  eventProperties={{ location: "pricing_page_hero", label: "Ask what fits" }}
                  className="bg-[var(--ink)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--white)] transition-colors hover:bg-[var(--gold)]"
                >
                  Ask what fits
                </TrackedLink>
                <Link
                  href="/work"
                  className="border border-[var(--ink-faint)] bg-[var(--white)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  Compare with work
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
