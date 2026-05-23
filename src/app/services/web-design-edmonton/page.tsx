import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Design Edmonton | Shayegan Digital",
  description:
    "Custom web design in Edmonton for local businesses that need faster websites, clearer calls to action, local SEO foundations, and tracked leads.",
  keywords: [
    "Web Design Edmonton",
    "Edmonton web design",
    "Edmonton website designer",
    "custom websites Edmonton",
    "local SEO Edmonton",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/web-design-edmonton`,
  },
  openGraph: {
    title: "Web Design Edmonton | Shayegan Digital",
    description:
      "Custom web design in Edmonton for businesses that need better local trust and more booked calls.",
    url: `${siteConfig.url}/services/web-design-edmonton`,
    siteName: siteConfig.name,
    images: [siteConfig.image],
    locale: "en_CA",
    type: "website",
  },
};

const serviceBlocks = [
  {
    label: "01",
    title: "Conversion-first page structure",
    copy: "Your pages are planned around the next action a visitor should take: call, book, request a quote, get directions, or submit a form.",
  },
  {
    label: "02",
    title: "Custom design and development",
    copy: "No drag-and-drop templates. The site is designed around your brand, then built with clean Next.js code for speed and flexibility.",
  },
  {
    label: "03",
    title: "Local SEO foundation",
    copy: "Core pages, metadata, headings, internal links, and technical structure are shaped around Edmonton search intent.",
  },
  {
    label: "04",
    title: "Launch and tracking setup",
    copy: "Your site launches with analytics-ready events so you can see which pages and calls to action are doing the work.",
  },
];

const proofPoints = [
  "Fast-loading pages",
  "Mobile-first layout",
  "Clear local trust signals",
  "SEO-friendly URLs",
  "Tracked lead actions",
  "Founder-led strategy",
];

export default function WebDesignEdmontonPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/web-design-edmonton/#service`,
    "name": "Web Design Edmonton",
    "description":
      "Custom web design and local SEO foundations for Edmonton businesses.",
    "provider": {
      "@id": `${siteConfig.url}/#business`,
    },
    "areaServed": {
      "@type": "City",
      "name": "Edmonton",
    },
    "url": `${siteConfig.url}/services/web-design-edmonton`,
  };

  return (
    <>
      <Nav />
      <Marquee />

      <main className="bg-[var(--cream)] pt-[150px]">
        <section className="px-[52px] pb-[110px] max-lg:px-6 max-lg:pb-[80px]">
          <div className="grid grid-cols-[1.1fr_.9fr] gap-16 items-end max-xl:grid-cols-1 rv">
            <div>
              <div className="eyebrow mb-6">Web Design Edmonton</div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.2rem,8vw,7.5rem)] leading-[.95] tracking-[-.045em] font-black text-[var(--ink)] max-w-[980px]">
                Custom websites for Edmonton businesses that need booked calls.
              </h1>
            </div>
            <div className="max-w-[540px] xl:ml-auto">
              <p className="mb-8 text-[1rem] leading-[1.85] text-[var(--ink-mid)]">
                I build fast, custom websites for local businesses that need stronger trust, clearer calls to action, and a cleaner path from Google search to real leads.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href="#contact"
                  eventName="cta_clicked"
                  eventProperties={{ location: "web_design_edmonton_hero", label: "Book a free strategy call" }}
                  className="bg-[var(--ink)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--white)] transition-colors hover:bg-[var(--gold)]"
                >
                  Book a free strategy call
                </TrackedLink>
                <Link
                  href="/work"
                  className="border border-[var(--ink-faint)] bg-[var(--white)] px-7 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  See the work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[52px] pb-[120px] max-lg:px-6 max-lg:pb-[84px]">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 rv">
            {proofPoints.map((point) => (
              <div key={point} className="border border-[var(--ink-faint)] bg-[var(--white)] px-5 py-4 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.1em] text-[var(--ink-mid)]">
                {point}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--ink)] px-[52px] py-[120px] text-[var(--white)] max-lg:px-6 max-lg:py-[84px]">
          <div className="mb-16 max-w-[760px] rv">
            <div className="eyebrow mb-6">What is included</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.7rem,5vw,5.4rem)] font-bold leading-[1.05] tracking-[-.03em] text-[var(--cream-dark)]">
              A site that explains, proves, and converts.
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">
            {serviceBlocks.map((block, index) => (
              <article
                key={block.title}
                className={`border border-white/[0.1] bg-white/[0.04] p-8 rv ${index > 0 ? `d${index}` : ""}`}
              >
                <p className="mb-6 font-[family-name:var(--font-dm-mono)] text-[.62rem] uppercase tracking-[.16em] text-[var(--gold)]">
                  {block.label}
                </p>
                <h3 className="mb-4 font-[family-name:var(--font-playfair)] text-[1.7rem] font-bold leading-[1.15] text-[var(--white)]">
                  {block.title}
                </h3>
                <p className="text-[.84rem] leading-[1.8] text-white/62">
                  {block.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-[52px] py-[120px] max-lg:px-6 max-lg:py-[84px]">
          <div className="grid grid-cols-[.8fr_1.2fr] gap-14 max-lg:grid-cols-1">
            <div className="rv">
              <div className="eyebrow mb-6">Why a dedicated page matters</div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.05] tracking-[-.03em] text-[var(--ink)]">
                Edmonton search intent deserves its own page.
              </h2>
            </div>
            <div className="grid gap-4 rv d2">
              {[
                ["Clearer search match", "A dedicated web design Edmonton page gives Google and visitors one focused URL for the local service."],
                ["Better internal linking", "The homepage, work page, pricing page, and case studies can all point back to the service that matters most."],
                ["Cleaner sales flow", "Visitors can understand the offer before jumping into pricing or booking a strategy call."],
              ].map(([title, copy]) => (
                <article key={title} className="border border-[var(--ink-faint)] bg-[var(--white)] p-8">
                  <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-[1.55rem] font-bold text-[var(--ink)]">
                    {title}
                  </h3>
                  <p className="text-[.86rem] leading-[1.8] text-[var(--ink-mid)]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[52px] pb-[120px] max-lg:px-6 max-lg:pb-[84px]">
          <div className="grid grid-cols-[1fr_auto] items-center gap-10 border border-[var(--ink-faint)] bg-[var(--white)] p-10 shadow-[0_18px_55px_rgba(12,12,10,0.045)] max-lg:grid-cols-1 rv">
            <div>
              <div className="eyebrow mb-4">Most common fit</div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,4.2rem)] font-bold leading-[1.05] tracking-[-.03em] text-[var(--ink)]">
                Most local businesses start with the Growth Site.
              </h2>
              <p className="mt-5 max-w-[620px] text-[.9rem] leading-[1.8] text-[var(--ink-mid)]">
                It gives you enough room for service pages, local SEO structure, analytics, and a stronger lead flow without turning the first build into a bloated project.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-[var(--gold)] px-8 py-5 font-[family-name:var(--font-dm-mono)] text-[.65rem] uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--white)]"
            >
              View pricing
            </Link>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
