import { SectionHeading } from "./SectionHeading";
import { services } from "../_data";

export function Services() {
  return (
    <section id="services" className="wrap" style={{ paddingBlock: 40 }}>
      <SectionHeading eyebrow="02 / SERVICES" title="How we work with you" />
      <p
        style={{
          fontSize: 16,
          color: "#b9b2cf",
          maxWidth: 560,
          marginBottom: 38,
          marginTop: -16,
          lineHeight: 1.6,
        }}
      >
        Three verticals, one team. We move from idea to production — and stay to
        harden it.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: 20,
        }}
      >
        {services.map((s) => (
          <div
            key={s.num}
            className="card flex flex-col"
            style={{
              padding: "30px 26px",
              borderRadius: 18,
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(167,139,250,0.16)",
            }}
          >
            <span className="font-mono" style={{ fontSize: 13, color: "#38bdf8" }}>
              {s.num}
            </span>
            <h3
              className="font-grotesk"
              style={{ marginTop: 14, fontSize: 22, fontWeight: 600, color: "#f3f1fa" }}
            >
              {s.title}
            </h3>
            <span
              className="font-mono uppercase"
              style={{ marginTop: 8, fontSize: 12, letterSpacing: "0.04em", color: "#8b80b0" }}
            >
              {s.kicker}
            </span>
            <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, color: "#b9b2cf" }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
