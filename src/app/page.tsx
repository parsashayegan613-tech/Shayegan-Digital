import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>

      <RevealObserver />
      <Nav />
      <Marquee />
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
