// "mnemonica" + ".ai" in cyan. Reused in nav, hero, footer at different sizes.
export function Wordmark({
  size,
  className = "",
}: {
  size: number;
  className?: string;
}) {
  return (
    <span
      className={`font-grotesk font-bold text-near ${className}`}
      style={{ fontSize: size, letterSpacing: "-0.02em" }}
    >
      mnemonica<span className="text-cyan">.ai</span>
    </span>
  );
}
