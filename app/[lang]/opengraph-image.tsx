import { ImageResponse } from "next/og";
import { getDict, locales } from "../_dict";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "mnemonica.ai — Indie AI Lab";

// Prerender one PNG per locale at build time — content is static, so no
// reason to re-render via Satori on every crawler hit.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Generates /[lang]/opengraph-image.png. Also reused as the twitter image.
// ponytail: default font, no custom font fetch — brand is the gradient + mark.
export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0612",
          padding: "72px 80px",
          color: "#f3f1fa",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          mnemonica.ai
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 30, color: "#a78bfa", fontWeight: 600 }}>
            {t.hero.eyebrow}
          </div>
          <div style={{ fontSize: 46, lineHeight: 1.2, color: "#f3f1fa" }}>
            {t.hero.tagline}
          </div>
        </div>
        <div
          style={{
            height: 8,
            width: "100%",
            background: "linear-gradient(90deg,#38bdf8,#a78bfa)",
          }}
        />
      </div>
    ),
    size,
  );
}
