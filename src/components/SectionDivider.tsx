export default function SectionDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`section-divider ${dark ? "opacity-20" : ""}`}>
      <div
        className="line"
        style={
          dark
            ? {
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,.12) 20%, rgba(255,255,255,.12) 80%, transparent)",
              }
            : undefined
        }
      />
      <div className="diamond" />
      <div
        className="line"
        style={
          dark
            ? {
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,.12) 20%, rgba(255,255,255,.12) 80%, transparent)",
              }
            : undefined
        }
      />
    </div>
  );
}
