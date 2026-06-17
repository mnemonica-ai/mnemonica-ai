import { Logo } from "./Logo";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center justify-between"
      style={{
        maxWidth: 1140,
        margin: "40px auto 0",
        padding: "28px clamp(16px,4vw,40px)",
        borderTop: "1px solid rgba(167,139,250,0.14)",
        gap: 14,
      }}
    >
      <div className="flex items-center" style={{ gap: 8 }}>
        <Logo size={26} radius={7} />
        <Wordmark size={15} />
      </div>
      <span className="font-mono" style={{ fontSize: 12, color: "#6f6790" }}>
        © 2026 mnemonica.ai · built with ☕ & big imagination
      </span>
    </footer>
  );
}
