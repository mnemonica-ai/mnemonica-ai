// Eyebrow ("01 / PORTFOLIO") on the same baseline as the H2. Used by Apps,
// Services, About. Contact has its own centered heading.
export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline" style={{ gap: 16, marginBottom: 36 }}>
      <span
        className="font-mono text-cyan"
        style={{ fontSize: 12, letterSpacing: "0.22em" }}
      >
        {eyebrow}
      </span>
      <h2
        className="font-grotesk font-bold text-text"
        style={{
          fontSize: "clamp(30px,5vw,50px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
