import { SectionHeading } from "./SectionHeading";
import { services } from "../_data";
import type { Dict } from "../_dict";

export function Services({ t }: { t: Dict["services"] }) {
  return (
    <section id="services" className="wrap" style={{ paddingBlock: 40 }}>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
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
        {t.intro}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: 20,
        }}
      >
        {services.map((s, i) => (
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
              {t.items[i].title}
            </h3>
            <span
              className="font-mono uppercase"
              style={{ marginTop: 8, fontSize: 12, letterSpacing: "0.04em", color: "#8b80b0" }}
            >
              {t.items[i].kicker}
            </span>
            <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, color: "#b9b2cf" }}>
              {t.items[i].body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
