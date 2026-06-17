import { TYPEFORM, socials } from "../_data";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center"
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding:
          "clamp(70px,11vh,130px) clamp(16px,4vw,40px) clamp(40px,6vh,60px)",
      }}
    >
      <span className="font-mono text-cyan" style={{ fontSize: 12, letterSpacing: "0.22em" }}>
        04 / CONTACT
      </span>
      <h2
        className="font-grotesk font-bold"
        style={{
          marginTop: 14,
          fontSize: "clamp(34px,6vw,62px)",
          lineHeight: 1.0,
          letterSpacing: "-0.035em",
          color: "#f3f1fa",
        }}
      >
        Let&apos;s build something.
      </h2>
      <p
        style={{
          marginTop: 18,
          fontSize: 17,
          lineHeight: 1.6,
          color: "#c5bfd8",
          maxWidth: 540,
        }}
      >
        Have a product, an idea, or an AI system that needs hardening? Tell us
        about it — we read every message.
      </p>

      <a
        href={TYPEFORM}
        target="_blank"
        rel="noopener"
        className="font-grotesk transition-shadow"
        style={{
          marginTop: 32,
          fontSize: 16,
          fontWeight: 600,
          color: "#0a0612",
          background: "#38bdf8",
          padding: "16px 32px",
          borderRadius: 999,
          boxShadow:
            "0 0 0 1px rgba(56,189,248,0.5), 0 12px 40px -10px rgba(56,189,248,0.9)",
        }}
      >
        Start a conversation
      </a>

      <div
        className="flex flex-wrap items-center justify-center"
        style={{ gap: "10px 26px", marginTop: 44 }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener"
            className="font-mono hover:text-near transition-colors"
            style={{ fontSize: 13, color: "#b3acc6" }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
