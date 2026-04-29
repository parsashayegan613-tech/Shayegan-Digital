import type { Metadata } from "next";
import { Playfair_Display, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { faqItems, siteConfig } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

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
    <html
      lang="en"
      className={`${playfair.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <body className="font-[family-name:var(--font-syne)]">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
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
