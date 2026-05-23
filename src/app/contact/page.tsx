import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Shayegan Digital",
  description:
    "Book a free website strategy call with Shayegan Digital. Get direct feedback on your site, conversion path, and next steps.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact | Shayegan Digital",
    description:
      "Book a free website strategy call with Shayegan Digital.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [siteConfig.image],
    locale: "en_CA",
    type: "website",
  },
};

const callTopics = [
  "Website bottlenecks",
  "Local SEO gaps",
  "Conversion path clarity",
  "Pricing fit",
  "Launch timeline",
  "Next-step plan",
];

export default function ContactPage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Marquee />

      <main className="bg-[var(--cream)] pt-[150px]">
        <section className="px-[52px] pb-[110px] max-lg:px-6 max-lg:pb-[80px]">
          <div className="grid grid-cols-[1.05fr_.95fr] items-end gap-16 max-xl:grid-cols-1 rv">
            <div>
              <div className="eyebrow mb-6">Contact</div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.3rem,8vw,7.3rem)] font-black leading-[.95] tracking-[-.045em] text-[var(--ink)] max-w-[960px]">
                Book a free website strategy call.
              </h1>
            </div>
            <div className="max-w-[540px] xl:ml-auto">
              <p className="mb-8 text-[1rem] leading-[1.85] text-[var(--ink-mid)]">
                Send the current state of your website or idea, and I&apos;ll help identify the fastest path to a cleaner offer, stronger trust, and more booked calls.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="calendly_clicked"
                  eventProperties={{ location: "contact_page_hero", label: "Find a time" }}
                  className="bg-[var(--ink)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--white)] transition-colors hover:bg-[var(--gold)]"
                >
                  Find a time
                </TrackedLink>
                <Link
                  href="/work"
                  className="border border-[var(--ink-faint)] bg-[var(--white)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  View work first
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[52px] pb-[120px] max-lg:px-6 max-lg:pb-[84px]">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 rv">
            {callTopics.map((topic) => (
              <div key={topic} className="border border-[var(--ink-faint)] bg-[var(--white)] px-5 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.1em] text-[var(--ink-mid)]">
                {topic}
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
