import MagneticButton from "./MagneticButton";

const tiers = [
  {
    tag: "Starter",
    name: "Launch Site",
    price: "$800",
    desc: "A clean, professional website that gets your business online. Perfect for startups, freelancers, and local businesses that need a strong first impression.",
    features: [
      "Up to 5 custom-designed pages",
      "Mobile-responsive on all devices",
      "Basic SEO setup & Google indexing",
      "Contact form integration",
      "Fast 1-week delivery",
    ],
    dark: false,
    highlight: false,
  },
  {
    tag: "Most Popular",
    name: "Growth Site",
    price: "$2,000",
    desc: "A high-converting website built to rank on Google, capture leads, and actually grow your business. Includes advanced SEO and analytics.",
    features: [
      "Up to 10 custom-designed pages",
      "Advanced SEO & speed optimization",
      "Analytics & conversion tracking",
      "CMS for easy content updates",
      "1-2 weeks delivery",
    ],
    dark: true,
    highlight: true,
  },
  {
    tag: "Premium",
    name: "Scale System",
    price: "$3,500+",
    desc: "The full digital system — a premium website with AI automations, e-commerce capabilities, and everything your business needs to scale online.",
    features: [
      "E-commerce or booking integration",
      "AI chatbot trained on your business",
      "Automated lead routing & follow-ups",
      "Priority support & ongoing growth",
      "2-3 weeks delivery",
    ],
    dark: false,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-[140px] bg-[var(--cream)] max-lg:py-[100px]">
      <div className="px-[52px] mb-20 max-lg:px-6 rv">
        <div className="font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.2em] uppercase text-[var(--gold)] mb-[24px]">Investment</div>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,6vw,5.5rem)] font-bold text-[var(--ink)] leading-[1.1] tracking-[-.02em] max-w-[800px]">
          Transparent <span className="italic font-normal text-[var(--ink-light)]">pricing.</span>
        </h2>
        <p className="text-[.88rem] leading-[1.8] text-[var(--ink-mid)] max-w-[520px] mt-6">
          No hidden fees, no scope creep, no surprises. Pick the tier that fits your business and let&apos;s get started.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 px-[52px] items-stretch max-xl:grid-cols-1 max-lg:px-6">
        {tiers.map((t, i) => (
          <div
            key={i}
            className={`relative border p-12 rounded-[2px] flex flex-col rv d${i + 1} max-sm:p-8
              ${t.dark
                ? "bg-[var(--ink)] border-white/[0.08]"
                : "bg-[var(--white)] border-[var(--ink-faint)]"
              }
              ${t.highlight ? "ring-2 ring-[var(--gold)] ring-offset-4 ring-offset-[var(--cream)]" : ""}
            `}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[var(--ink)] font-[family-name:var(--font-dm-mono)] text-[.5rem] tracking-[.2em] uppercase px-4 py-[5px] rounded-full">
                Recommended
              </div>
            )}

            <div className={`font-[family-name:var(--font-dm-mono)] text-[.56rem] tracking-[.2em] uppercase mb-4 ${t.dark ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}>
              {t.tag}
            </div>

            <h3 className={`font-[family-name:var(--font-playfair)] text-[2rem] font-bold mb-2 ${t.dark ? "text-[var(--white)]" : "text-[var(--ink)]"}`}>
              {t.name}
            </h3>

            <p className={`text-[.82rem] leading-[1.8] mb-8 max-w-[400px] ${t.dark ? "text-white/55" : "text-[var(--ink-mid)]"}`}>
              {t.desc}
            </p>

            <div className={`font-[family-name:var(--font-playfair)] text-[3rem] font-bold mb-10 leading-none ${t.dark ? "text-[var(--white)]" : "text-[var(--ink)]"}`}>
              {t.price}
              <span className={`font-[family-name:var(--font-dm-mono)] text-[.55rem] font-normal block mt-1 tracking-widest uppercase ${t.dark ? "text-white/35" : "text-[var(--ink-light)]"}`}>
                Fixed price
              </span>
            </div>

            <ul className={`flex flex-col gap-[14px] list-none pt-8 border-t mb-10 flex-1 ${t.dark ? "border-white/10" : "border-[var(--ink-faint)]"}`}>
              {t.features.map((f, j) => (
                <li
                  key={j}
                  className={`font-[family-name:var(--font-dm-mono)] text-[.62rem] pl-7 relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[var(--gold)] before:text-[.75rem]
                    ${t.dark ? "text-white/80" : "text-[var(--ink)]"}
                  `}
                >
                  {f}
                </li>
              ))}
            </ul>

            <MagneticButton>
              <a
                href="#contact"
                className={`font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.14em] uppercase px-[28px] py-[14px] no-underline block text-center transition-all duration-250 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-[2px]
                  ${t.dark
                    ? "bg-[var(--gold)] text-[var(--ink)] hover:bg-white"
                    : "bg-[var(--ink)] text-[var(--white)] hover:bg-[var(--gold)]"
                  }
                `}
              >
                Get Started
              </a>
            </MagneticButton>
          </div>
        ))}
      </div>

      <div className="mt-32 px-[52px] max-lg:px-6 rv">
        <h3 className="font-[family-name:var(--font-playfair)] text-[2.2rem] font-bold text-[var(--ink)] mb-8">
          Optional Add-ons
        </h3>
        <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {[
            { tag: "STORE", name: "E-Commerce", price: "$1,000", desc: "Full online store, payment gateway, and product pages." },
            { tag: "SUPPORT", name: "AI Chatbot", price: "$500", desc: "Smart AI assistant trained on your business data to capture leads." },
            { tag: "DESIGN", name: "Logo & Branding", price: "$400", desc: "Complete visual identity, font selection, and logo files." },
            { tag: "RETAINER", name: "Growth Support", price: "$150/mo", desc: "Monthly updates, security checks, backups, and analytics." },
          ].map((addon, i) => (
            <div key={i} className="border border-[var(--ink-faint)] bg-[var(--white)] p-8 relative transition-colors duration-300 hover:bg-black/[0.02]">
              <div className="flex justify-between items-start mb-4">
                <p className="font-[family-name:var(--font-dm-mono)] text-[.5rem] tracking-[.2em] uppercase text-[var(--ink-light)]">{addon.tag}</p>
                <div className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[var(--gold)]">{addon.price}</div>
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-[1.4rem] font-bold text-[var(--ink)] mb-2">{addon.name}</h4>
              <p className="text-[.72rem] leading-[1.7] text-[var(--ink-light)] max-w-[200px]">{addon.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[52px] max-lg:px-6 mt-16 rv d4">
        <p className="font-[family-name:var(--font-dm-mono)] text-[.58rem] tracking-[.12em] text-[var(--ink-light)] text-center">
          All plans include a free 30-minute strategy call. Need something custom? <a href="#contact" className="text-[var(--gold)] underline underline-offset-2 hover:text-[var(--ink)] transition-colors">Let&apos;s talk.</a>
        </p>
      </div>
    </section>
  );
}
