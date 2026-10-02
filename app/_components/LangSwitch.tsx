import { locales, type Locale } from "../_dict";

// Fixed bottom-right pill so language is reachable from anywhere without
// crowding the nav. Subpages pass `paths` so switching keeps the same page.
export function LangSwitch({
  lang,
  paths,
}: {
  lang: Locale;
  paths?: Record<Locale, string>;
}) {
  return (
    <div
      className="fixed flex items-center font-mono uppercase z-50"
      style={{
        right: "clamp(16px,4vw,28px)",
        bottom: "clamp(16px,4vw,28px)",
        gap: 2,
        padding: 4,
        fontSize: 12,
        borderRadius: 999,
        background: "rgba(12,8,22,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(167,139,250,0.22)",
        boxShadow: "0 8px 24px -10px rgba(0,0,0,0.7)",
      }}
    >
      {locales.map((l) => (
        <a
          key={l}
          href={paths?.[l] ?? `/${l}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className="transition-colors"
          style={{
            padding: "5px 11px",
            borderRadius: 999,
            letterSpacing: "0.06em",
            color: l === lang ? "#0a0612" : "#b3acc6",
            background: l === lang ? "#38bdf8" : "transparent",
          }}
        >
          {l}
        </a>
      ))}
    </div>
  );
}
