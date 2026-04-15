export default function Marquee() {
  // Premium, high-converting copy
  const words = [
    "High-Performance Web Apps",
    "Conversion-Driven Design", 
    "Custom Next.js Development",
    "Technical SEO Solutions",
    "Scalable Digital Systems"
  ];
  
  // Duplicate the array significantly to ensure the track is massively wider than any 8K monitor
  const chunk = [...words, ...words, ...words, ...words];

  return (
    <div className="fixed top-[76px] left-0 right-0 z-[801] flex flex-nowrap overflow-hidden bg-[var(--gold)] py-[6px] border-b border-black/[0.07] max-lg:top-[68px] rv d1">
      <div className="flex w-max animate-[mq_120s_linear_infinite]">
        {[1, 2].map((i) => (
          <div key={i} className="flex">
            {chunk.map((text, j) => (
              <span
                key={`${i}-${j}`}
                className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.22em] uppercase text-[var(--ink)] px-11 whitespace-nowrap before:content-['✦'] before:mr-11 before:text-[.46rem]"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
