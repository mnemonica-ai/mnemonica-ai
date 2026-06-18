// All translatable text lives here, one tree per locale. Structural data
// (urls, colors, monograms, handles) stays in _data.ts.
// ponytail: apps/services/about item arrays are index-aligned with the arrays
// in _data.ts. Keep the same order in both files, or labels mismatch.

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

export type Dict = (typeof dictionaries)["en"];

export const dictionaries = {
  en: {
    nav: {
      links: { apps: "apps", services: "services", about: "about" },
      cta: "Work with us",
    },
    hero: {
      eyebrow: "Indie AI Lab",
      tagline:
        "Small apps, big imagination. We design, ship and harden focused AI products — and help teams become AI-native.",
      ctaPrimary: "Explore our apps",
      ctaSecondary: "Work with us →",
    },
    apps: {
      eyebrow: "01 / PORTFOLIO",
      title: "Apps we've shipped",
      items: [
        {
          copy: "Private, AI-powered insights from your WhatsApp chats — sentiment, engagement, relationship dynamics and red flags. Then chat with your Confidant to go deeper.",
          tags: ["privacy-first", "consumer", "live"],
        },
        {
          copy: "Talk to your sites. A public registry of WordPress, Ghost & Substack sites with Model Context Protocol support — connect AI agents and chatbots to your favorite publishing platforms.",
          tags: ["mcp", "infra", "registry"],
        },
        {
          copy: "A focused workspace for crafting, testing and managing prompts — iterate fast and keep your best prompts organized and reusable.",
          tags: ["llm", "tooling"],
        },
        {
          copy: "Open-source FastAPI service using Celery + Redis to orchestrate multiple Ollama servers as workers. Point any Ollama client at a single endpoint.",
          tags: ["open source", "python", "llmops"],
        },
        {
          copy: "A mindful take on the classic puzzle game — Tetris reimagined with a calm aesthetic and relaxing pace. Drop blocks, clear lines, unwind.",
          tags: ["game", "web", "for fun"],
        },
        {
          copy: "A Spanish-language literary magazine — short stories, author city guides, book previews, a literary horoscope and plenty of bookish humor for reading lovers.",
          tags: ["content", "literature", "live"],
        },
      ],
    },
    services: {
      eyebrow: "02 / SERVICES",
      title: "How we work with you",
      intro:
        "Three verticals, one team. We move from idea to production — and stay to harden it.",
      items: [
        {
          title: "AI Products",
          kicker: "PRODUCT STRATEGY",
          body: "From idea to shipped product. We scope, prototype and launch focused AI apps that people actually use — like the ones in our portfolio.",
        },
        {
          title: "AI Cybersecurity",
          kicker: "RED TEAMING",
          body: "We stress-test your models and AI systems — adversarial prompts, jailbreaks, data leakage and abuse paths — before someone else does.",
        },
        {
          title: "AI Integration",
          kicker: "GO AI-NATIVE",
          body: "We help teams become AI-native: the workflows, tooling and culture that turn AI from a novelty into a daily multiplier across the company.",
        },
      ],
    },
    about: {
      eyebrow: "03 / ABOUT",
      title: "Built by two brothers",
      intro:
        "Mnemonica is a small indie lab — just us. We build the products we wish existed, ship them fast, and bring that same hands-on approach to client work.",
      roles: ["Co-founder", "Co-founder"],
    },
    contact: {
      eyebrow: "04 / CONTACT",
      title: "Let's build something.",
      body: "Have a product, an idea, or an AI system that needs hardening? Tell us about it — we read every message.",
      cta: "Start a conversation",
    },
    footer: "© 2026 mnemonica.ai · built with ☕ & big imagination",
    meta: {
      title: "mnemonica.ai — Indie AI Lab",
      description:
        "Small apps, big imagination. We design, ship and harden focused AI products — and help teams become AI-native.",
    },
  },
  es: {
    nav: {
      links: { apps: "apps", services: "servicios", about: "nosotros" },
      cta: "Trabaja con nosotros",
    },
    hero: {
      eyebrow: "Laboratorio de IA Indie",
      tagline:
        "Apps pequeñas, gran imaginación. Diseñamos, lanzamos y blindamos productos de IA enfocados — y ayudamos a los equipos a volverse nativos en IA.",
      ctaPrimary: "Explora nuestras apps",
      ctaSecondary: "Trabaja con nosotros →",
    },
    apps: {
      eyebrow: "01 / PORTAFOLIO",
      title: "Apps que hemos lanzado",
      items: [
        {
          copy: "Análisis privados, impulsados por IA, de tus chats de WhatsApp — sentimiento, interacción, dinámicas de relación y señales de alerta. Luego conversa con tu Confidant para profundizar.",
          tags: ["privacidad ante todo", "consumo", "en vivo"],
        },
        {
          copy: "Habla con tus sitios. Un registro público de sitios WordPress, Ghost y Substack con soporte para el Model Context Protocol — conecta agentes de IA y chatbots a tus plataformas de publicación favoritas.",
          tags: ["mcp", "infraestructura", "registro"],
        },
        {
          copy: "Un espacio de trabajo enfocado para crear, probar y gestionar prompts — itera rápido y mantén tus mejores prompts organizados y reutilizables.",
          tags: ["llm", "herramientas"],
        },
        {
          copy: "Servicio FastAPI de código abierto que usa Celery + Redis para orquestar múltiples servidores Ollama como workers. Apunta cualquier cliente Ollama a un único endpoint.",
          tags: ["código abierto", "python", "llmops"],
        },
        {
          copy: "Una versión consciente del clásico juego de puzzle — Tetris reimaginado con una estética serena y un ritmo relajante. Suelta bloques, completa líneas, desconéctate.",
          tags: ["juego", "web", "diversión"],
        },
        {
          copy: "Una revista de literatura en español — cuentos, guías de ciudades de autores, adelantos de libros, un horóscopo literario y mucho humor para amantes de la lectura.",
          tags: ["contenido", "literatura", "en vivo"],
        },
      ],
    },
    services: {
      eyebrow: "02 / SERVICIOS",
      title: "Cómo trabajamos contigo",
      intro:
        "Tres verticales, un solo equipo. Vamos de la idea a producción — y nos quedamos a blindarlo.",
      items: [
        {
          title: "Productos de IA",
          kicker: "ESTRATEGIA DE PRODUCTO",
          body: "De la idea al producto lanzado. Definimos el alcance, prototipamos y lanzamos apps de IA enfocadas que la gente realmente usa — como las de nuestro portafolio.",
        },
        {
          title: "Ciberseguridad de IA",
          kicker: "RED TEAMING",
          body: "Ponemos a prueba tus modelos y sistemas de IA — prompts adversarios, jailbreaks, fugas de datos y vías de abuso — antes de que lo haga alguien más.",
        },
        {
          title: "Integración de IA",
          kicker: "VUÉLVETE NATIVO EN IA",
          body: "Ayudamos a los equipos a volverse nativos en IA: los flujos de trabajo, las herramientas y la cultura que convierten la IA de una novedad en un multiplicador diario en toda la empresa.",
        },
      ],
    },
    about: {
      eyebrow: "03 / NOSOTROS",
      title: "Hecho por dos hermanos",
      intro:
        "Mnemonica es un pequeño laboratorio indie — solo nosotros. Construimos los productos que desearíamos que existieran, los lanzamos rápido y llevamos ese mismo enfoque práctico al trabajo con clientes.",
      roles: ["Cofundador", "Cofundador"],
    },
    contact: {
      eyebrow: "04 / CONTACTO",
      title: "Construyamos algo.",
      body: "¿Tienes un producto, una idea o un sistema de IA que necesita blindaje? Cuéntanos — leemos cada mensaje.",
      cta: "Inicia una conversación",
    },
    footer: "© 2026 mnemonica.ai · hecho con ☕ y gran imaginación",
    meta: {
      title: "mnemonica.ai — Laboratorio de IA Indie",
      description:
        "Apps pequeñas, gran imaginación. Diseñamos, lanzamos y blindamos productos de IA enfocados — y ayudamos a los equipos a volverse nativos en IA.",
    },
  },
};

export const getDict = (lang: string): Dict =>
  dictionaries[isLocale(lang) ? lang : defaultLocale];
