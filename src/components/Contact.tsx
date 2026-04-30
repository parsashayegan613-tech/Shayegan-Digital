import Image from "next/image";
import { siteConfig } from "@/lib/site";
import TrackedLink from "./TrackedLink";

export default function Contact() {
  return (
    <section id="contact" className="py-[140px] bg-[var(--cream)] relative max-lg:py-[100px]">
      <div className="flex px-[52px] gap-20 max-lg:flex-col max-lg:gap-14 max-lg:px-6">
        <div className="flex-1 rv">
          <div className="eyebrow mb-[24px]">Direct founder call</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-.03em] text-[var(--ink)] mb-6">
            Book your free <br /><span className="italic text-[var(--gold)] font-normal">strategy call.</span>
          </h2>
          <p className="text-[.95rem] text-[var(--ink-mid)] max-w-[430px] leading-[1.75]">
            Tell me about your business and I&apos;ll give you honest, actionable feedback on your website and growth strategy — completely free. No catch, no pitch.
          </p>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-start rv d2">
           <TrackedLink
             href={siteConfig.calendlyUrl}
             target="_blank"
             rel="noopener noreferrer"
             eventName="calendly_clicked"
             eventProperties={{ location: "contact", label: "Find a time on my calendar" }}
             className="group inline-flex items-center justify-between w-full max-w-[400px] bg-[var(--ink)] text-[var(--white)] py-[22px] px-8 border-none font-[family-name:var(--font-dm-mono)] text-[.75rem] uppercase tracking-[.15em] cursor-pointer rounded-[3px] transition-all duration-300 hover:bg-[var(--gold)] hover:shadow-[0_15px_30px_rgba(201,169,110,0.3)] hover:-translate-y-1"
           >
             <span>Find a time on my calendar</span>
             <span className="text-[1.2rem] transition-transform duration-300 group-hover:translate-x-2">→</span>
           </TrackedLink>
           <div className="mt-6 flex items-center gap-3">
             <span className="w-[6px] h-[6px] rounded-full bg-green-500 animate-pulse"></span>
             <p className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.08em] uppercase text-[var(--ink-mid)]">
               {siteConfig.availability}
             </p>
           </div>
           <div className="mt-9 w-full max-w-[520px] border border-[var(--ink-faint)] bg-[var(--white)] p-6 shadow-[0_18px_50px_rgba(12,12,10,0.05)]">
             <div className="flex items-start gap-4">
               <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[var(--ink-faint)] bg-[var(--cream-dark)]">
                 <Image
                   src="/parsa.jpg"
                   alt="Parsa Shayegan"
                   fill
                   className="object-cover object-top"
                   sizes="64px"
                 />
               </div>
               <div>
                 <p className="font-[family-name:var(--font-playfair)] text-[1.35rem] font-bold leading-[1.2] text-[var(--ink)]">
                   You&apos;ll speak directly with Parsa.
                 </p>
                 <p className="mt-2 text-[.82rem] leading-[1.75] text-[var(--ink-mid)]">
                   I&apos;ll review your current site, identify the fastest conversion wins, and give you a realistic next-step plan before we talk about building anything.
                 </p>
               </div>
             </div>
             <div className="mt-6 grid grid-cols-3 gap-2 max-sm:grid-cols-1">
               {["Website bottlenecks", "Google visibility", "7-day action plan"].map((item) => (
                 <div key={item} className="border border-[var(--ink-faint)] bg-[var(--cream)] px-3 py-3 font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.08em] uppercase text-[var(--ink-mid)]">
                   {item}
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
