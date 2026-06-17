// Content data for the landing page. Edit copy/links here, not in markup.

export const TYPEFORM = "https://991taq00kun.typeform.com/to/HHCkae8e";

export type App = {
  name: string;
  url: string;
  label: string; // ↗ text
  monogram: string;
  accent: string; // border/bg/chip
  accentText: string; // title-adjacent text
  tags: string[];
  copy: string;
};

export const apps: App[] = [
  {
    name: "Le Confidant",
    url: "https://leconfidant.ai/",
    label: "leconfidant.ai",
    monogram: "Lc",
    accent: "#34d399",
    accentText: "#6ee7b7",
    tags: ["privacy-first", "consumer", "live"],
    copy: "Private, AI-powered insights from your WhatsApp chats — sentiment, engagement, relationship dynamics and red flags. Then chat with your Confidant to go deeper.",
  },
  {
    name: "DeepPress",
    url: "https://deeppress.mnemonica.ai/",
    label: "deeppress.mnemonica.ai",
    monogram: "Dp",
    accent: "#38bdf8",
    accentText: "#7dd3fc",
    tags: ["mcp", "infra", "registry"],
    copy: "Talk to your sites. A public registry of WordPress, Ghost & Substack sites with Model Context Protocol support — connect AI agents and chatbots to your favorite publishing platforms.",
  },
  {
    name: "Prompt",
    url: "https://prompt.mnemonica.ai/",
    label: "prompt.mnemonica.ai",
    monogram: "Pr",
    accent: "#a78bfa",
    accentText: "#c4b5fd",
    tags: ["llm", "tooling"],
    copy: "A focused workspace for crafting, testing and managing prompts — iterate fast and keep your best prompts organized and reusable.",
  },
  {
    name: "Oshepherd",
    url: "https://github.com/mnemonica-ai/oshepherd",
    label: "github",
    monogram: "Os",
    accent: "#fbbf24",
    accentText: "#fcd34d",
    tags: ["open source", "python", "llmops"],
    copy: "Open-source FastAPI service using Celery + Redis to orchestrate multiple Ollama servers as workers. Point any Ollama client at a single endpoint.",
  },
];

export type Service = { num: string; title: string; kicker: string; body: string };

export const services: Service[] = [
  {
    num: "01",
    title: "AI Products",
    kicker: "PRODUCT STRATEGY",
    body: "From idea to shipped product. We scope, prototype and launch focused AI apps that people actually use — like the ones in our portfolio.",
  },
  {
    num: "02",
    title: "AI Cybersecurity",
    kicker: "RED TEAMING",
    body: "We stress-test your models and AI systems — adversarial prompts, jailbreaks, data leakage and abuse paths — before someone else does.",
  },
  {
    num: "03",
    title: "AI Integration",
    kicker: "GO AI-NATIVE",
    body: "We help teams become AI-native: the workflows, tooling and culture that turn AI from a novelty into a daily multiplier across the company.",
  },
];

export type Person = {
  initials: string;
  name: string;
  role: string;
  handle: string;
  url: string;
  gradient: string;
};

export const people: Person[] = [
  {
    initials: "RP",
    name: "Raul Pino",
    role: "Co-founder",
    handle: "in/p1nox ↗",
    url: "https://www.linkedin.com/in/p1nox/",
    gradient: "linear-gradient(135deg,#38bdf8,#a78bfa)",
  },
  {
    initials: "JP",
    name: "Jose Pino",
    role: "Co-founder",
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
