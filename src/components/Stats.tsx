const stats = [
  { target: 5, suffix: "+", label: "Live client\nwebsites" },
  { target: 48, suffix: "hr", label: "Proposal\nturnaround" },
  { target: 100, suffix: "%", label: "Custom-built\nno templates" },
];

export default function Stats() {
  return (
    <div className="bg-[var(--ink)] py-14 px-12 grid grid-cols-4 max-lg:grid-cols-2 max-lg:py-10 max-lg:px-6">
      {stats.map((s, i) => (
        <div 
          key={i} 
          className={`px-8 border-r border-white/10 first:pl-0 last:border-r-0 max-lg:border-r-0 max-lg:border-b max-lg:py-5 max-lg:px-0 max-lg:odd:border-r max-lg:odd:pr-5 max-lg:[&:nth-child(3)]:border-b-0 max-lg:[&:nth-child(4)]:border-b-0 rv d${i + 1}`}
          aria-label={`${s.target}${s.suffix} ${s.label.replace("\n", " ")}`}
        >
          <div className="font-[family-name:var(--font-playfair)] text-[3rem] font-bold text-white leading-none mb-2" aria-hidden="true">
            {s.target}
            <span className="text-[var(--gold)] text-[1.8rem] ml-1">{s.suffix}</span>
          </div>
          <div className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.12em] uppercase text-white/48 leading-[1.65] whitespace-pre-line">
            {s.label}
          </div>
        </div>
      ))}
      <div className="px-8 border-r border-white/10 first:pl-0 last:border-r-0 max-lg:border-r-0 max-lg:border-b max-lg:py-5 max-lg:px-0 max-lg:odd:border-r max-lg:odd:pr-5 max-lg:[&:nth-child(3)]:border-b-0 max-lg:[&:nth-child(4)]:border-b-0 rv d4">
        <div className="font-[family-name:var(--font-playfair)] text-[3rem] font-bold text-white leading-none mb-2">
          AI<span className="text-[var(--gold)] text-[1.8rem] ml-1">+</span>
        </div>
        <div className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.12em] uppercase text-white/48 leading-[1.65] whitespace-pre-line">
          Latest tools{"\n"}&amp; technology
        </div>
      </div>
    </div>
  );
}
