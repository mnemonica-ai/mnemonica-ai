import { Logo } from "./Logo";
import { TYPEFORM } from "../_data";
import type { Dict } from "../_dict";

// Each block fades/translates up, staggered.
function block(delay: number): React.CSSProperties {
  return { animationDelay: `${delay}s` };
}

export function Hero({ t }: { t: Dict["hero"] }) {
  return (
    <header
      className="flex flex-col items-center text-center"
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding:
          "clamp(130px,18vh,200px) 24px clamp(80px,12vh,140px)",
      }}
    >
      <div className="hero-in" style={block(0)}>
        <Logo size="clamp(96px,16vw,140px)" radius={18} glow />
      </div>

      <p
        className="hero-in font-mono uppercase"
        style={{
          ...block(0.05),
          marginTop: 30,
          fontSize: 12,
          letterSpacing: "0.34em",
          color: "#8b80b0",
        }}
      >
        {t.eyebrow}
      </p>

      <h1
        className="hero-in font-grotesk font-bold"
        style={{
          ...block(0.05),
          fontSize: "clamp(46px,9vw,104px)",
          lineHeight: 0.96,
          letterSpacing: "-0.035em",
          color: "#f3f1fa",
        }}
      >
        mnemonica<span className="text-cyan">.ai</span>
      </h1>

      <p
        className="hero-in"
        style={{
          ...block(0.12),
          marginTop: 22,
          fontSize: "clamp(18px,2.4vw,23px)",
          lineHeight: 1.5,
          color: "#c5bfd8",
          maxWidth: 600,
          textWrap: "pretty",
        }}
      >
        {t.tagline}
      </p>

      <div
        className="hero-in flex flex-wrap items-center justify-center"
        style={{ ...block(0.2), gap: 14, marginTop: 38 }}
      >
        <a
          href="#apps"
          className="font-grotesk transition-shadow"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#0a0612",
            background: "#38bdf8",
            padding: "14px 26px",
            borderRadius: 999,
            boxShadow:
              "0 0 0 1px rgba(56,189,248,0.5), 0 6px 20px -8px rgba(56,189,248,0.8)",
          }}
        >
          {t.ctaPrimary}
        </a>
        <a
          href={TYPEFORM}
          target="_blank"
          rel="noopener"
          className="font-grotesk transition-colors"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#ece9f5",
            background: "rgba(167,139,250,0.08)",
            border: "1px solid rgba(167,139,250,0.32)",
            padding: "14px 26px",
            borderRadius: 999,
          }}
        >
          {t.ctaSecondary}
        </a>
      </div>
    </header>
  );
}
