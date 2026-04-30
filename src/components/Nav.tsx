"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { scrollToHash } from "@/lib/scroll-to-hash";
import MagneticButton from "./MagneticButton";
import TrackedLink from "./TrackedLink";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#featured-work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const anchorPrefix = pathname === "/" ? "" : "/";

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);

    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);

    if (pathname !== "/" || !href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    scrollToHash(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[800] flex items-center justify-between py-[22px] px-12 max-lg:py-[18px] max-lg:px-6 rv before:content-[''] before:absolute before:inset-0 before:bg-[rgba(245,242,236,0.9)] before:backdrop-blur-[18px] before:border-b before:border-[rgba(201,169,110,0.12)] before:-z-10">
        <Link href="/" onClick={handleLogoClick} className={`font-[family-name:var(--font-playfair)] text-[1.1rem] font-bold tracking-[.04em] transition-colors duration-300 relative z-[801] ${isOpen ? 'text-[var(--white)]' : 'text-[var(--ink)]'}`}>
          Shayegan<em className="italic font-normal text-[var(--gold)]">Digital</em>
        </Link>
        <ul className="flex gap-6 list-none max-lg:hidden">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={`${anchorPrefix}${item.href}`}
                onClick={(event) => handleAnchorClick(event, item.href)}
                className="font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.18em] uppercase text-[var(--ink-light)] transition-colors duration-200 relative group hover:text-[var(--ink)]"
              >
                {item.label}
                <span className="absolute -bottom-[3px] left-0 w-0 h-[1px] bg-[var(--gold)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-4">
          <div className="max-lg:hidden">
            <MagneticButton>
              <TrackedLink
                href={`${anchorPrefix}#contact`}
                eventName="cta_clicked"
                eventProperties={{ location: "nav", label: "Free Strategy Call" }}
                className="block font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.14em] uppercase text-[var(--white)] bg-[var(--ink)] px-[22px] py-[10px] transition-colors duration-250 hover:bg-[var(--gold)]"
              >
                Free Strategy Call
              </TrackedLink>
            </MagneticButton>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="hidden max-lg:flex justify-center items-center w-10 h-10 border transition-colors duration-300 rounded-full z-[801] relative cursor-pointer"
            style={{ 
              backgroundColor: isOpen ? 'transparent' : 'var(--cream)', 
              borderColor: isOpen ? 'rgba(253,252,249,0.2)' : 'rgba(0,0,0,0.12)' 
            }}
            aria-label="Toggle Menu"
          >
            <span className={`absolute w-3.5 h-[1.5px] transition-all duration-300 ${isOpen ? 'bg-[var(--white)] rotate-45' : 'bg-[var(--ink)] -translate-y-1'}`} />
            <span className={`absolute w-3.5 h-[1.5px] transition-all duration-300 ${isOpen ? 'bg-[var(--white)] opacity-0' : 'bg-[var(--ink)] opacity-100'}`} />
            <span className={`absolute w-3.5 h-[1.5px] transition-all duration-300 ${isOpen ? 'bg-[var(--white)] -rotate-45' : 'bg-[var(--ink)] translate-y-1'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`hidden max-lg:flex fixed inset-0 z-[799] bg-[var(--ink)] flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col gap-8 items-center list-none p-0 m-0">
          {links.map((item, i) => (
            <li key={item.label} className="overflow-hidden p-2">
              <a
                href={`${anchorPrefix}${item.href}`}
                onClick={(event) => handleAnchorClick(event, item.href)}
                style={{ transitionDelay: `${isOpen ? 100 + (i * 60) : 0}ms` }}
                className={`block font-[family-name:var(--font-playfair)] text-[2.6rem] font-bold text-[var(--white)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0' : 'translate-y-[120%]'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-8 flex justify-center w-full overflow-hidden p-2">
            <TrackedLink
              href={`${anchorPrefix}#contact`}
              onClick={() => setIsOpen(false)}
              eventName="cta_clicked"
              eventProperties={{ location: "mobile_nav", label: "Free Strategy Session" }}
              style={{ transitionDelay: `${isOpen ? 350 : 0}ms` }}
              className={`block font-[family-name:var(--font-dm-mono)] text-[.7rem] tracking-[.15em] uppercase text-[var(--ink)] bg-[var(--gold)] px-[36px] py-[18px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0' : 'translate-y-[120%]'}`}
            >
              Free Strategy Session
            </TrackedLink>
          </li>
        </ul>
      </div>
    </>
  );
}
