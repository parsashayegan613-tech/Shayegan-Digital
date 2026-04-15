export default function Contact() {
  return (
    <section id="contact" className="py-[140px] bg-[var(--cream)] relative max-lg:py-[100px]">
      <div className="flex px-[52px] gap-20 max-lg:flex-col max-lg:gap-14 max-lg:px-6">
        <div className="flex-1 rv">
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-.03em] text-[var(--ink)] mb-6">
            Book your free <br /><span className="italic text-[var(--gold)] font-normal">strategy call.</span>
          </h2>
          <p className="text-[.95rem] text-[var(--ink-light)] max-w-[400px] leading-[1.7]">
            Tell me about your business and I&apos;ll give you honest, actionable feedback on your website and growth strategy — completely free. No catch, no pitch.
          </p>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-start rv d2">
           <a 
             href="https://calendly.com/admin-shayegandigital/30min" 
             target="_blank"
             rel="noopener noreferrer"
             className="group inline-flex items-center justify-between w-full max-w-[400px] bg-[var(--ink)] text-[var(--white)] py-[22px] px-8 border-none font-[family-name:var(--font-dm-mono)] text-[.75rem] uppercase tracking-[.15em] cursor-pointer rounded-[3px] transition-all duration-300 hover:bg-[var(--gold)] hover:shadow-[0_15px_30px_rgba(201,169,110,0.3)] hover:-translate-y-1"
           >
             <span>Find a time on my calendar</span>
             <span className="text-[1.2rem] transition-transform duration-300 group-hover:translate-x-2">→</span>
           </a>
           <p className="mt-5 font-[family-name:var(--font-dm-mono)] text-[.55rem] tracking-[.1em] uppercase text-[var(--ink-light)]">
             Takes less than 60 seconds.
           </p>
        </div>
      </div>
    </section>
  );
}
