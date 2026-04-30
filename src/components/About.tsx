import ParallaxImage from "./ParallaxImage";

export default function About() {
  return (
    <section id="about" className="bg-[var(--white)] py-[140px] border-t border-black/[0.08] max-lg:py-[100px]">
      <div className="grid grid-cols-[1fr_1fr] gap-20 px-[52px] items-start max-lg:grid-cols-1 max-lg:gap-14 max-lg:px-6">
        <div className="rv">
          <div className="w-full aspect-square bg-[#eee] relative rounded-[4px] overflow-hidden">
            <ParallaxImage 
              src="/parsa.jpg" 
              alt="Parsa - Shayegan Digital Founder" 
              className="rounded-[4px] border border-black/5"
            />
          </div>
        </div>
        <div className="rv">
          <div className="eyebrow mb-[24px]">About Me</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[var(--ink)] leading-[1.1] tracking-[-.02em] mb-10">
            A boutique agency <br />
            <span className="italic font-normal text-[var(--ink-light)]">that actually cares.</span>
          </h2>
          <p className="text-[.92rem] leading-[1.85] text-[var(--ink-mid)] mb-7 max-w-[520px]">
            Hi, I&apos;m Parsa. I started Shayegan Digital because I saw too many great businesses losing customers to slow, ugly, outdated websites — and paying way too much for them.
          </p>
          <p className="text-[.92rem] leading-[1.85] text-[var(--ink-mid)] mb-10 max-w-[520px]">
            I&apos;m not a high-volume template shop. I take on a handful of projects at a time so every client gets my full attention, direct communication, and a website that&apos;s actually built to grow their revenue.
          </p>

          <div className="border-t border-black/[0.08] pt-8">
            <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
              <div>
                <div className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.12em] uppercase text-[var(--gold)] mb-4">Who I work with</div>
                <ul className="list-none flex flex-col gap-3 pb-2">
                  {[
                    "Service businesses ready to scale",
                    "E-commerce brands that want results",
                    "Founders who value quality over cheap",
                  ].map((item, i) => (
                    <li key={i} className="text-[.8rem] leading-[1.6] text-[var(--ink)] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[var(--gold)] before:text-[.7rem]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-[family-name:var(--font-dm-mono)] text-[.62rem] tracking-[.12em] uppercase text-[var(--ink-mid)] mb-4">Not a fit</div>
                <ul className="list-none flex flex-col gap-3 pb-2">
                  {[
                    "Looking for a $300 WordPress template",
                    "Need it done yesterday (I don't rush)",
                    "Want the cheapest option available",
                  ].map((item, i) => (
                    <li key={i} className="text-[.8rem] leading-[1.6] text-[var(--ink-light)] pl-5 relative before:content-['✗'] before:absolute before:left-0 before:top-0 before:text-[var(--ink-light)] before:text-[.7rem]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
