import type { Metadata } from "next";
import { Playfair_Display, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://shayegandigital.ca"),
  title: "Shayegan Digital | Edmonton Web Design Agency",
  description: "Edmonton's premium web design agency. We build custom, high-converting websites, AI automations, and digital marketing strategies for local businesses.",
  keywords: ["Edmonton Web Design", "Web Design Edmonton", "Web Agency Edmonton", "Custom Website Builder", "SEO Edmonton", "Digital Marketing Alberta"],
  openGraph: {
    title: "Shayegan Digital | Premium Web Design Agency",
    description: "Edmonton's premium web design agency. We build custom, high-converting websites and digital marketing strategies that actually grow businesses.",
    url: 'https://shayegandigital.ca',
    siteName: 'Shayegan Digital',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Shayegan Digital | Premium Web Design",
    description: "Edmonton's premium web design agency. We build custom, high-converting websites for businesses.",
  },
  alternates: {
    canonical: "https://shayegandigital.ca",
  }
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Shayegan Digital",
              "url": "https://shayegandigital.ca",
              "telephone": "+17809091213",
              "email": "admin@shayegandigital.ca",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Edmonton",
                "addressRegion": "AB",
                "addressCountry": "CA"
              },
              "description": "Edmonton's premium web design agency. We build custom, high-converting websites, AI automations, and digital marketing strategies for local businesses.",
              "sameAs": [
                "https://shayegandigital.ca"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
