"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { Wordmark } from "./Wordmark";
import { TYPEFORM } from "../_data";
import type { Dict, Locale } from "../_dict";

function NavLinks({
  t,
  onClick,
}: {
  t: Dict["nav"];
  onClick?: () => void;
}) {
  const links = [
    { label: t.links.apps, href: "#apps" },
    { label: t.links.services, href: "#services" },
    { label: t.links.about, href: "#about" },
  ];
  return links.map((l) => (
    <a
      key={l.href}
      href={l.href}
      onClick={onClick}
      className="font-mono text-muted hover:text-near transition-colors"
      style={{ fontSize: 13, letterSpacing: "0.02em" }}
    >
      {l.label}
    </a>
  ));
}

const ctaStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  color: "#0a0612",
  background: "#38bdf8",
  padding: "9px 18px",
  borderRadius: 999,
  boxShadow:
    "0 0 0 1px rgba(56,189,248,0.5), 0 6px 20px -8px rgba(56,189,248,0.8)",
};

export function Nav({ lang, t }: { lang: Locale; t: Dict["nav"] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,6,18,0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(167,139,250,0.14)",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          padding: "14px clamp(16px,4vw,40px)",
          gap: 16,
          maxWidth: 1140,
          margin: "0 auto",
        }}
      >
        <a href="#" className="flex items-center" style={{ gap: 10 }}>
          <Logo size={34} radius={8} />
          <Wordmark size={19} />
        </a>

        {/* desktop links */}
        <div className="hidden items-center min-[820px]:flex" style={{ gap: 30 }}>
          <NavLinks t={t} />
          <LangSwitch lang={lang} />
          <a
            href={TYPEFORM}
            target="_blank"
            rel="noopener"
            className="font-grotesk transition-shadow"
            style={ctaStyle}
          >
            {t.cta}
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col items-center justify-center min-[820px]:hidden"
          style={{
            width: 40,
            height: 40,
            gap: 4,
            borderRadius: 10,
            background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.22)",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ width: 18, height: 2, background: "#ece9f5" }}
            />
          ))}
        </button>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div
          className="flex flex-col min-[820px]:hidden"
          style={{
            gap: 18,
            padding: "20px clamp(16px,4vw,40px)",
            background: "rgba(12,8,22,0.96)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(167,139,250,0.14)",
          }}
        >
          <NavLinks t={t} onClick={() => setOpen(false)} />
          <LangSwitch lang={lang} />
          <a
            href={TYPEFORM}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="font-grotesk text-center"
            style={ctaStyle}
          >
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
