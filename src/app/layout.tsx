import type { Metadata } from "next";
import "./globals.css";
import { faqItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Shayegan Digital | Edmonton Web Design Agency",
  description: "Edmonton's premium web design agency. We build custom, high-converting websites, AI automations, and digital marketing strategies for local businesses.",
  keywords: ["Edmonton Web Design", "Web Design Edmonton", "Web Agency Edmonton", "Custom Website Builder", "SEO Edmonton", "Digital Marketing Alberta"],
  openGraph: {
    title: "Shayegan Digital | Premium Web Design Agency",
    description: "Edmonton's premium web design agency. We build custom, high-converting websites and digital marketing strategies that actually grow businesses.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.image],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Shayegan Digital | Premium Web Design",
    description: "Edmonton's premium web design agency. We build custom, high-converting websites for businesses.",
  },
  alternates: {
    canonical: siteConfig.url,
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      "name": siteConfig.name,
      "url": siteConfig.url,
      "image": siteConfig.image,
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
      "priceRange": "$800-$3,500+",
      "areaServed": [
        {
          "@type": "City",
          "name": "Edmonton"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Alberta"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.address.locality,
        "addressRegion": siteConfig.address.region,
        "addressCountry": siteConfig.address.country
      },
      "description": "Edmonton's premium web design agency. We build custom, high-converting websites, AI automations, and digital marketing strategies for local businesses.",
      "sameAs": [siteConfig.url]
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "name": siteConfig.name,
      "url": siteConfig.url,
      "publisher": {
        "@id": `${siteConfig.url}/#business`
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[family-name:var(--font-syne)]">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const measurementId = ${JSON.stringify(siteConfig.gaMeasurementId)};
                let initialized = false;
                const initializeAnalytics = () => {
                  if (initialized || !measurementId) return;
                  initialized = true;
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function gtag(){ window.dataLayer.push(arguments); };
                  window.gtag('js', new Date());
                  window.gtag('config', measurementId);
                  const script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
                  document.head.appendChild(script);
                };
                const interactionOptions = { once: true, passive: true };
                window.addEventListener('pointerdown', initializeAnalytics, interactionOptions);
                window.addEventListener('scroll', initializeAnalytics, interactionOptions);
                window.addEventListener('keydown', initializeAnalytics, { once: true });
                window.setTimeout(initializeAnalytics, 12000);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </body>
    </html>
  );
}
