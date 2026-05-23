import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import RevealObserver from "@/components/RevealObserver";
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
      <RevealObserver />
      <Nav />
      <Marquee />

      <main className="bg-[var(--cream)] pt-[96px]">
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
