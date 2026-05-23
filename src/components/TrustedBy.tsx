export default function TrustedBy() {
  const clients = [
    "Big Moose Driving Range",
    "MZ Fit Club",
    "Nand Builders",
    "Village IDA Pharmacy",
    "Invitvo Pharmaceuticals",
  ];

  return (
    <section className="py-[50px] border-b border-black/[0.06]">
      <div className="px-[52px] max-lg:px-6 flex flex-col items-center gap-6">
        <p className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.14em] uppercase text-[var(--ink-mid)]">
          Trusted by Edmonton &amp; Alberta businesses
        </p>
        <div className="flex items-center gap-12 max-sm:gap-8 flex-wrap justify-center">
          {clients.map((client, index) => (
            <div key={client} className="contents">
              {index > 0 ? <span className="w-[1px] h-5 bg-black/[0.1] max-sm:hidden"></span> : null}
              <span className="font-[family-name:var(--font-playfair)] text-[1.1rem] font-bold text-[var(--ink)] opacity-40 transition-opacity duration-300 hover:opacity-80">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
