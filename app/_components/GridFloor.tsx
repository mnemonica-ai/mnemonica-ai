"use client";

import { useEffect, useState } from "react";

const NAV_H = 64;
const BASE = 0.6; // grid base opacity (Subtle)

// Fixed vaporwave perspective grid pinned behind content. The horizon line
// rests at ~52vh while the hero is in view, then sticks to the top of #apps
// and rides up (fading out) so it never floats over body content.
export function GridFloor() {
  const [{ top, opacity }, set] = useState({ top: 0, opacity: BASE });

  useEffect(() => {
    let raf = 0;
    let lastTop = -1;

    const loop = () => {
      const center = window.innerHeight * 0.52;
      const appsTop =
        document.getElementById("apps")?.getBoundingClientRect().top ?? center;
      const t = Math.min(center, appsTop);
      const fade = Math.max(0, Math.min(1, (t - NAV_H) / (center - NAV_H)));

      if (Math.abs(t - lastTop) > 0.5) {
        lastTop = t;
        set({ top: t, opacity: BASE * fade });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        top,
        height: "64vh",
        zIndex: 0,
        opacity,
        pointerEvents: "none",
      }}
    >
      {/* horizon line — always visible */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(56,189,248,0.7), rgba(167,92,246,0.7), transparent)",
          boxShadow: "0 0 22px 3px rgba(124,92,246,0.5)",
        }}
      />
      {/* perspective grid */}
      <div
        className="animate-grid-move"
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          right: "-100%",
          height: "70vh",
          transform: "perspective(340px) rotateX(64deg)",
          transformOrigin: "top center",
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(139,92,246,0.42) 0 1px, transparent 1px 78px), repeating-linear-gradient(to bottom, rgba(139,92,246,0.42) 0 1px, transparent 1px 78px)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 42%, transparent 88%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 42%, transparent 88%)",
        }}
      />
    </div>
  );
}
