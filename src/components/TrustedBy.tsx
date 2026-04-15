export default function TrustedBy() {
  return (
    <section className="py-[50px] border-b border-black/[0.06]">
      <div className="px-[52px] max-lg:px-6 flex flex-col items-center gap-6">
        <p className="font-[family-name:var(--font-dm-mono)] text-[.5rem] tracking-[.25em] uppercase text-[var(--ink-light)]">
          Trusted by Edmonton businesses
        </p>
        <div className="flex items-center gap-12 max-sm:gap-8 flex-wrap justify-center">
          <span className="font-[family-name:var(--font-playfair)] text-[1.1rem] font-bold text-[var(--ink)] opacity-40 transition-opacity duration-300 hover:opacity-80">
            Village IDA Pharmacy
          </span>
          <span className="w-[1px] h-5 bg-black/[0.1] max-sm:hidden"></span>
          <span className="font-[family-name:var(--font-playfair)] text-[1.1rem] font-bold text-[var(--ink)] opacity-40 transition-opacity duration-300 hover:opacity-80">
            Invitvo Pharmaceuticals
          </span>
        </div>
      </div>
    </section>
  );
}
