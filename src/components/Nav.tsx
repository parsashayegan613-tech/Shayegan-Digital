const links = [
  { label: "Services", href: "/services/web-design-edmonton" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <>
      <input
        id="mobile-menu-toggle"
        type="checkbox"
        aria-label="Toggle Menu"
        className="mobile-menu-toggle sr-only"
      />

      <nav className="fixed top-0 left-0 right-0 z-[800] flex items-center justify-between py-[22px] px-12 max-lg:py-[18px] max-lg:px-6 rv before:content-[''] before:absolute before:inset-0 before:bg-[rgba(245,242,236,0.9)] before:backdrop-blur-[18px] before:border-b before:border-[rgba(201,169,110,0.12)] before:-z-10">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="brand-link font-[family-name:var(--font-playfair)] text-[1.1rem] font-bold tracking-[.04em] transition-colors duration-300 relative z-[801] text-[var(--ink)]">
          Shayegan<em className="italic font-normal text-[var(--gold)]">Digital</em>
        </a>

        <ul className="flex gap-6 list-none max-lg:hidden">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
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
            <a
              href="/contact"
              className="block font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.14em] uppercase text-[var(--white)] bg-[var(--ink)] px-[22px] py-[10px] transition-colors duration-250 hover:bg-[var(--gold)]"
            >
              Free Strategy Call
            </a>
          </div>

          <label
            htmlFor="mobile-menu-toggle"
            className="menu-toggle hidden max-lg:flex justify-center items-center w-10 h-10 border transition-colors duration-300 rounded-full z-[801] relative cursor-pointer bg-[var(--cream)] border-black/12"
          >
            <span className="menu-line menu-line-top absolute w-3.5 h-[1.5px] transition-all duration-300 bg-[var(--ink)] -translate-y-1" />
            <span className="menu-line menu-line-mid absolute w-3.5 h-[1.5px] transition-all duration-300 bg-[var(--ink)] opacity-100" />
            <span className="menu-line menu-line-bottom absolute w-3.5 h-[1.5px] transition-all duration-300 bg-[var(--ink)] translate-y-1" />
          </label>
        </div>
      </nav>

      <div className="mobile-menu-panel hidden max-lg:flex fixed left-0 right-0 bottom-0 top-[76px] z-[799] bg-[var(--ink)] flex-col items-center justify-start overflow-y-auto overscroll-contain px-6 pt-10 pb-[calc(32px+env(safe-area-inset-bottom))] opacity-0 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <ul className="flex min-h-full flex-col items-center justify-center gap-7 list-none p-0 m-0 max-sm:gap-5">
          {links.map((item, i) => (
            <li key={item.label} className="overflow-hidden p-2">
              <a
                href={item.href}
                style={{ transitionDelay: `${100 + (i * 60)}ms` }}
                className="mobile-menu-link block translate-y-[120%] font-[family-name:var(--font-playfair)] text-[clamp(2.1rem,11vw,2.6rem)] font-bold leading-[1.05] text-[var(--white)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-6 flex justify-center w-full overflow-hidden p-2 max-sm:mt-4">
            <a
              href="/contact"
              style={{ transitionDelay: "350ms" }}
              className="mobile-menu-link block translate-y-[120%] font-[family-name:var(--font-dm-mono)] text-[.7rem] tracking-[.15em] uppercase text-[var(--ink)] bg-[var(--gold)] px-[36px] py-[18px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              Free Strategy Session
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
