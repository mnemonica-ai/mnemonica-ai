import { SectionHeading } from "./SectionHeading";
import { articles } from "../_data";
import type { Dict } from "../_dict";

// ponytail: native scroll-snap slider (swipe / trackpad / tab). Add prev/next
// buttons once there are enough links that mouse users need them.
export function Articles({ t }: { t: Dict["articles"] }) {
  return (
    <section id="articles" className="wrap" style={{ paddingBlock: 40 }}>
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

      <div className="slider" role="list">
        {articles.map((a, i) => (
          <a
            key={a.url}
            role="listitem"
            href={a.url}
            target="_blank"
            rel="noopener"
            className="card flex flex-col"
            style={{
              padding: 26,
              borderRadius: 18,
              border: `1px solid ${a.accent}38`,
              background: `linear-gradient(180deg, ${a.accent}12, rgba(255,255,255,0.02))`,
            }}
          >
            <span className="font-mono" style={{ fontSize: 12, color: "#8b80b0" }}>
              {t.items[i].source} · {a.label}
            </span>
            <h3
              className="font-grotesk"
              style={{ marginTop: 14, fontSize: 21, fontWeight: 600, color: "#f3f1fa" }}
            >
              {t.items[i].title}
            </h3>
            <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.55, color: "#b9b2cf" }}>
              {t.items[i].body}
            </p>
            <span
              className="font-mono"
              style={{ marginTop: "auto", paddingTop: 18, fontSize: 13, color: a.accent }}
            >
              {t.more}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
