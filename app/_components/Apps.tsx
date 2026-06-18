import { SectionHeading } from "./SectionHeading";
import { apps, type App } from "../_data";
import type { Dict } from "../_dict";

function Card({
  app,
  copy,
  tags,
}: {
  app: App;
  copy: string;
  tags: readonly string[];
}) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener"
      className="card flex flex-col"
      style={{
        padding: 26,
        borderRadius: 18,
        border: `1px solid ${app.accent}38`, // ~0.22
        background: `linear-gradient(180deg, ${app.accent}12, rgba(255,255,255,0.02))`,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="flex items-center justify-center font-grotesk font-bold"
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            background: `${app.accent}1f`,
            color: app.accentText,
            fontSize: 18,
          }}
        >
          {app.monogram}
        </span>
        <span className="font-mono" style={{ fontSize: 12, color: "#8b80b0" }}>
          ↗ {app.label}
        </span>
      </div>

      <h3
        className="font-grotesk"
        style={{ marginTop: 18, fontSize: 21, fontWeight: 600, color: "#f3f1fa" }}
      >
        {app.name}
      </h3>

      <p
        style={{
          marginTop: 10,
          fontSize: 14.5,
          lineHeight: 1.55,
          color: "#b9b2cf",
          textWrap: "pretty",
        }}
      >
        {copy}
      </p>

      <div className="flex flex-wrap" style={{ gap: 8, marginTop: 18 }}>
        {tags.map((t) => (
          <span
            key={t}
            className="font-mono"
            style={{
              fontSize: 11,
              padding: "4px 9px",
              borderRadius: 999,
              background: `${app.accent}1a`,
              border: `1px solid ${app.accent}40`,
              color: app.accentText,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export function Apps({ t }: { t: Dict["apps"] }) {
  return (
    <section id="apps" className="wrap" style={{ paddingBlock: 40 }}>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px,1fr))",
          gap: 20,
        }}
      >
        {apps.map((a, i) => (
          <Card key={a.name} app={a} copy={t.items[i].copy} tags={t.items[i].tags} />
        ))}
      </div>
    </section>
  );
}
