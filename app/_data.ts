// Non-translatable structural data. User-facing copy lives in _dict.ts.
// ponytail: apps/services/people arrays are index-aligned with _dict.ts items.

export const TYPEFORM = "https://991taq00kun.typeform.com/to/HHCkae8e";

export type App = {
  name: string;
  url: string;
  label: string; // ↗ text
  monogram: string;
  accent: string; // border/bg/chip
  accentText: string; // title-adjacent text
};

export const apps: App[] = [
  {
    name: "Le Confidant",
    url: "https://leconfidant.ai/",
    label: "leconfidant.ai",
    monogram: "Lc",
    accent: "#34d399",
    accentText: "#6ee7b7",
  },
  {
    name: "DeepPress",
    url: "https://deeppress.mnemonica.ai/",
    label: "deeppress.mnemonica.ai",
    monogram: "Dp",
    accent: "#38bdf8",
    accentText: "#7dd3fc",
  },
  {
    name: "Prompt",
    url: "https://prompt.mnemonica.ai/",
    label: "prompt.mnemonica.ai",
    monogram: "Pr",
    accent: "#a78bfa",
    accentText: "#c4b5fd",
  },
  {
    name: "Oshepherd",
    url: "https://github.com/mnemonica-ai/oshepherd",
    label: "github",
    monogram: "Os",
    accent: "#fbbf24",
    accentText: "#fcd34d",
  },
  {
    name: "Zen Tetris",
    url: "https://zen-tetris.vercel.app/",
    label: "zen-tetris.vercel.app",
    monogram: "Zt",
    accent: "#2dd4bf",
    accentText: "#5eead4",
  },
  {
    name: "Marcapágina",
    url: "https://www.marcapagina.page/",
    label: "marcapagina.page",
    monogram: "Mp",
    accent: "#fb7185",
    accentText: "#fda4af",
  },
];

export type Service = { num: string };

export const services: Service[] = [{ num: "01" }, { num: "02" }, { num: "03" }];

export type Person = {
  initials: string;
  name: string;
  handle: string;
  url: string;
  gradient: string;
};

export const people: Person[] = [
  {
    initials: "RP",
    name: "Raul Pino",
    handle: "in/p1nox ↗",
    url: "https://www.linkedin.com/in/p1nox/",
    gradient: "linear-gradient(135deg,#38bdf8,#a78bfa)",
  },
  {
    initials: "JP",
    name: "Jose Pino",
    handle: "in/jose-pino ↗",
    url: "https://www.linkedin.com/in/jos%C3%A9-pino-carrasquero/",
    gradient: "linear-gradient(135deg,#a78bfa,#38bdf8)",
  },
];

export const socials: { label: string; url: string }[] = [
  { label: "X / Twitter", url: "https://x.com/mnemonica_ai" },
  { label: "Instagram", url: "https://www.instagram.com/mnemonica_ai" },
  { label: "Discord", url: "https://discord.com/invite/99xEZmZYt9" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/mnemonica-ai" },
  { label: "GitHub", url: "https://github.com/mnemonica-ai" },
];
