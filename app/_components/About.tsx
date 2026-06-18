import { SectionHeading } from "./SectionHeading";
import { people } from "../_data";
import type { Dict } from "../_dict";

export function About({ t }: { t: Dict["about"] }) {
  return (
    <section id="about" className="wrap" style={{ paddingBlock: 40 }}>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          color: "#b9b2cf",
          maxWidth: 600,
          marginBottom: 38,
          marginTop: -16,
        }}
      >
        {t.intro}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 20,
        }}
      >
        {people.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener"
            className="card flex items-center"
            style={{
              gap: 18,
              padding: 22,
              borderRadius: 18,
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(167,139,250,0.16)",
            }}
          >
            <span
              className="flex items-center justify-center font-grotesk font-bold shrink-0"
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: p.gradient,
                color: "#0a0612",
                fontSize: 20,
              }}
            >
              {p.initials}
            </span>
            <span className="flex flex-col">
              <span className="font-grotesk" style={{ fontSize: 18, fontWeight: 600, color: "#f3f1fa" }}>
                {p.name}
              </span>
              <span style={{ fontSize: 14, color: "#b9b2cf" }}>{t.roles[i]}</span>
              <span className="font-mono" style={{ fontSize: 12, color: "#38bdf8", marginTop: 4 }}>
                {p.handle}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
