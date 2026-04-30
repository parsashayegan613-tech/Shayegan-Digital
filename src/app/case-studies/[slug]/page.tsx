import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import TrackedLink from "@/components/TrackedLink";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  const url = `${siteConfig.url}/case-studies/${study.slug}`;

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: study.image,
          alt: study.imageAlt,
        },
      ],
      locale: "en_CA",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,
      images: [study.image],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/case-studies/${study.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": study.metaTitle,
        "description": study.metaDescription,
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`,
        },
        "about": {
          "@id": `${siteConfig.url}/#business`,
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}${study.image}`,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}/#case-study`,
        "name": `${study.title} case study`,
        "headline": study.metaTitle,
        "description": study.summary,
        "image": `${siteConfig.url}${study.image}`,
        "url": pageUrl,
        "publisher": {
          "@id": `${siteConfig.url}/#business`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.url,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": `${siteConfig.url}/#featured-work`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": study.title,
            "item": pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <RevealObserver />
      <Nav />

      <main className="bg-[var(--cream)] pt-[120px]">
        <section className="px-[52px] pb-[96px] max-lg:px-6 max-lg:pb-[72px]">
          <div className="mb-10 rv">
            <Link
              href="/#featured-work"
              className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.14em] uppercase text-[var(--ink-light)] transition-colors hover:text-[var(--gold)]"
            >
              ← Back to featured work
            </Link>
          </div>

          <div className="grid grid-cols-[1.05fr_.95fr] gap-14 items-end max-xl:grid-cols-1 max-xl:gap-10">
            <div className="rv">
              <div className="eyebrow mb-6">{study.eyebrow}</div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.2rem,8vw,7.5rem)] leading-[.95] tracking-[-.045em] font-black text-[var(--ink)] max-w-[920px]">
                {study.title}
              </h1>
            </div>

            <div className="rv d2 max-w-[540px] xl:ml-auto">
              <p className="text-[1.05rem] leading-[1.8] text-[var(--ink-mid)] mb-8">
                {study.summary}
              </p>
              <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                {[study.industry, study.location, study.scope].map((item) => (
                  <div key={item} className="border border-[var(--ink-faint)] bg-[var(--white)] px-4 py-3">
                    <p className="font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.12em] uppercase text-[var(--ink-mid)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-[52px] pb-[120px] max-lg:px-6 max-lg:pb-[84px]">
          <div className="relative overflow-hidden rounded-[8px] border border-[var(--ink-faint)] bg-[var(--white)] shadow-[0_30px_90px_rgba(0,0,0,0.08)] rv">
            <Image
              src={study.image}
              alt={study.imageAlt}
              width={1800}
              height={1125}
              priority
              className="w-full h-auto object-cover object-top"
              sizes="100vw"
            />
          </div>
        </section>

        <section className="bg-[var(--ink)] px-[52px] py-[120px] text-[var(--white)] max-lg:px-6 max-lg:py-[84px]">
          <div className="grid grid-cols-[.8fr_1.2fr] gap-16 max-lg:grid-cols-1">
            <div className="rv">
              <div className="eyebrow mb-6">Project Breakdown</div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-[-.03em] font-bold text-[var(--cream-dark)]">
                Built around the buyer&apos;s next action.
              </h2>
            </div>

            <div className="grid gap-5 rv d2">
              {[
                ["The problem", study.problem],
                ["The solution", study.solution],
                ["The outcome", study.outcome],
              ].map(([label, copy]) => (
                <article key={label} className="border border-white/[0.1] bg-white/[0.04] p-8">
                  <p className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.14em] uppercase text-[var(--gold)] mb-4">
                    {label}
                  </p>
                  <p className="text-[.95rem] leading-[1.85] text-white/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[52px] py-[120px] max-lg:px-6 max-lg:py-[84px]">
          <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
            {study.highlights.map((highlight, index) => (
              <article
                key={highlight.label}
                className={`border border-[var(--ink-faint)] bg-[var(--white)] p-8 rv ${index === 1 ? "d1" : index === 2 ? "d2" : ""}`}
              >
                <p className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.14em] uppercase text-[var(--gold)] mb-5">
                  {highlight.label}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-[1.8rem] leading-[1.1] font-bold text-[var(--ink)] mb-4">
                  {highlight.value}
                </h3>
                <p className="text-[.86rem] leading-[1.75] text-[var(--ink-mid)]">{highlight.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-[52px] pb-[120px] max-lg:px-6 max-lg:pb-[84px]">
          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
            <div className="border border-[var(--ink-faint)] bg-[var(--white)] p-10 rv">
              <p className="eyebrow mb-6">Services Used</p>
              <ul className="grid gap-4">
                {study.services.map((service) => (
                  <li key={service} className="font-[family-name:var(--font-dm-mono)] text-[.72rem] tracking-[.08em] uppercase text-[var(--ink)] border-b border-[var(--ink-faint)] pb-4 last:border-b-0 last:pb-0">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[var(--ink-faint)] bg-[var(--white)] p-10 rv d2">
              <p className="eyebrow mb-6">Key Deliverables</p>
              <ul className="grid gap-4">
                {study.deliverables.map((deliverable) => (
                  <li key={deliverable} className="font-[family-name:var(--font-dm-mono)] text-[.72rem] tracking-[.08em] uppercase text-[var(--ink)] border-b border-[var(--ink-faint)] pb-4 last:border-b-0 last:pb-0">
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-[52px] pb-[130px] max-lg:px-6 max-lg:pb-[90px]">
          <div className="bg-[var(--ink)] text-[var(--white)] p-[64px] grid grid-cols-[1fr_auto] gap-10 items-center max-lg:grid-cols-1 max-lg:p-8 rv">
            <div>
              <p className="eyebrow mb-5">Want this kind of system?</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] tracking-[-.03em] font-bold text-[var(--cream-dark)] max-w-[720px]">
                Let&apos;s map the highest-leverage version for your business.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <TrackedLink
                href="/#contact"
                eventName="cta_clicked"
                eventProperties={{ location: "case_study", label: "Book a strategy call", project: study.title }}
                className="inline-flex items-center justify-center bg-[var(--gold)] px-8 py-5 font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.14em] uppercase text-[var(--ink)] transition-colors hover:bg-[var(--white)]"
              >
                Book a strategy call
              </TrackedLink>
              <TrackedLink
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="portfolio_clicked"
                eventProperties={{ project: study.title, location: "case_study", destination: "live_site" }}
                className="inline-flex items-center justify-center border border-white/15 px-8 py-5 font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.14em] uppercase text-white/70 transition-colors hover:text-[var(--gold)]"
              >
                View live website ↗
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
