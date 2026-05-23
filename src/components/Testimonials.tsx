const testimonials = [
  {
    t: "Parsa completely transformed our online presence. The new site is clean, fast, and we've already had patients mention finding us through Google. Exactly what we needed.",
    name: "Village IDA Pharmacy",
    role: "Healthcare • Edmonton",
    initial: "V",
  },
  {
    t: "Parsa built our entire compound catalog and research portal from scratch. The site looks premium, loads fast, and our clients can now browse and request quotes directly online.",
    name: "Invitvo Pharmaceutical",
    role: "Research • Canada",
    initial: "I",
  },
];

export default function Testimonials() {
  return (
    <section id="testi" className="bg-[var(--ink)] py-[140px] overflow-hidden max-lg:py-[100px]">
      <div className="px-[52px] mb-20 max-lg:px-6 rv">
        <div className="eyebrow mb-[24px]">What clients say</div>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,6vw,5.5rem)] font-bold text-[var(--cream-dark)] leading-[1.1] tracking-[-.02em]">
          Trusted by<br /><span className="italic font-normal text-[var(--ink-light)]">real businesses.</span>
        </h2>
      </div>

      <div className="relative w-full px-[52px] max-lg:px-6 rv d2 overflow-visible">
        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="p-[60px] bg-white/[0.04] border border-white/[0.07] flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:border-[rgba(201,169,110,0.3)] max-lg:p-[40px_30px]"
            >
              <div>
                <div className="text-[var(--gold)] text-[1.1rem] mb-8">★★★★★</div>
                <p className="font-[family-name:var(--font-playfair)] text-[1.6rem] italic text-[var(--cream-dark)] leading-[1.7] max-lg:text-[1.25rem]">
                  &ldquo;{t.t}&rdquo;
                </p>
              </div>
              <div className="mt-12 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[rgba(201,169,110,0.15)] flex items-center justify-center font-[family-name:var(--font-playfair)] text-[var(--gold)] text-[1.2rem]">
                  {t.initial}
                </div>
                <div>
                  <div className="font-[family-name:var(--font-dm-mono)] text-[.7rem] font-bold text-[var(--white)] mb-1">{t.name}</div>
                  <div className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.1em] uppercase text-white/48">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
