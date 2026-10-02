// All translatable text lives here, one tree per locale. Structural data
// (urls, colors, monograms, handles) stays in _data.ts.
// ponytail: apps/services/servicePage/articles/about item arrays are
// index-aligned with the arrays in _data.ts. Keep the same order in both files, or labels mismatch.

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
          copy: "Fan-made, open-source desktop player for the Aadam Jacobs Collection on the Internet Archive — built with Tauri, React and TypeScript, with a multi-theme UI and a custom HTML5 audio engine.",
          tags: ["desktop", "open source", "music"],
        },
        {
          copy: "Open-source FastAPI service using Celery + Redis to orchestrate multiple Ollama servers as workers. Point any Ollama client at a single endpoint.",
          tags: ["open source", "python", "llmops"],
        },
        {
          copy: "Hands-on examples for red teaming latent spaces and protecting LLM apps — a notebook-driven toolkit for exploring AI security workflows.",
          tags: ["ai security", "red teaming", "llm"],
        },
        {
          copy: "Capstone research project exploring ensembles of Generative Adversarial Networks as a data augmentation technique for Alzheimer's MRI studies.",
          tags: ["research", "gan", "health ai"],
        },
        {
          copy: "A mindful take on the classic puzzle game — Tetris reimagined with a calm aesthetic and relaxing pace. Drop blocks, clear lines, unwind.",
          tags: ["game", "web", "for fun"],
        },
        {
          copy: "A Spanish-language literary magazine — short stories, author city guides, book previews, a literary horoscope and plenty of bookish humor for book lovers.",
          tags: ["content", "literature", "live"],
        },
      ],
    },
    services: {
      eyebrow: "02 / SERVICES",
      title: "How we work with you",
      intro:
        "Three verticals, one team. We move from idea to production — and stay to harden it.",
      more: "Learn more →",
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
      eyebrow: "04 / ABOUT",
      title: "Built by two brothers",
      intro:
        "Mnemonica is a small indie lab — just us. We build the products we wish existed, ship them fast, and bring that same hands-on approach to client work.",
      roles: ["Co-founder", "Co-founder"],
    },
    articles: {
      eyebrow: "03 / WRITING",
      title: "Articles & guides",
      intro: "Guides and articles from the lab and the products we run.",
      more: "Read the articles ↗",
      items: [
        {
          source: "Le Confidant",
          title: "WhatsApp chat analysis guides",
          body: "How to export a WhatsApp chat and analyze it with AI, which models do it, what happens to your data, and what the statistics actually mean.",
        },
      ],
    },
    servicePage: {
      labels: {
        services: "Services",
        audience: "Who it's for",
        problems: "Problems we solve",
        deliverables: "What you get",
        process: "How it works",
        examples: "Related work",
        faq: "FAQ",
        contact: "CONTACT",
      },
      items: [
        {
          metaTitle: "AI Product Development Studio | mnemonica.ai",
          metaDescription:
            "We take AI product ideas from validation to prototype, MVP and launch — then keep iterating. A small hands-on studio that ships focused AI apps.",
          title: "AI Product Development",
          lead: "From a rough idea to a shipped AI product people actually use. We validate, prototype, build the MVP, launch it — and keep iterating with you.",
          audience: [
            "Founders with an AI product idea who need a technical team to validate and ship it.",
            "Product teams adding an AI feature to an existing app who want it done right the first time.",
            "Companies that want a working prototype before committing the full budget.",
          ],
          problems: [
            "An idea, but no way to tell whether AI can deliver it reliably.",
            "Prototypes that demo well but break with real users and real data.",
            "Unclear trade-offs between model quality, cost and latency.",
            "No in-house experience taking LLM products to production.",
          ],
          deliverables: [
            "Validation brief: feasibility, model options, cost and risk estimate.",
            "Working prototype tested against real inputs.",
            "Production MVP: frontend, backend, model integration and evals.",
            "Launch setup: hosting, analytics, monitoring and guardrails.",
            "Iteration roadmap based on real usage.",
          ],
          process: [
            { title: "Validate", body: "About 1 week. We pressure-test the idea, the data and the model options before writing product code." },
            { title: "Prototype", body: "1–2 weeks. A working slice with real model calls, so you see what works and what doesn't." },
            { title: "Build the MVP", body: "3–6 weeks. The production version: UI, backend, integrations, evals and guardrails." },
            { title: "Launch", body: "We deploy it, add monitoring and analytics, and put it in front of real users." },
            { title: "Iterate", body: "Ongoing. We improve prompts, models and features based on how people actually use it." },
          ],
          timeline:
            "Typical engagement: 4–8 weeks from kickoff to launch. Prototype-only engagements take 2–3 weeks.",
          faqs: [
            {
              q: "Do you build MVPs or production systems?",
              a: "Both. We usually start with a prototype to de-risk the idea, then harden it into a production MVP you can put in front of real users.",
            },
            {
              q: "Which models and tech stack do you use?",
              a: "Whatever fits the problem. We work with OpenAI, Anthropic, Google and open-weight models, and choose based on quality, cost, latency and privacy needs.",
            },
            {
              q: "Can you work with our existing engineering team?",
              a: "Yes. We can own the build end to end, or pair with your team and hand over a codebase they're comfortable maintaining.",
            },
            {
              q: "Who owns the code?",
              a: "You do. Everything we build for you is yours.",
            },
          ],
          cta: {
            title: "Have an AI product idea?",
            body: "Tell us what you want to build. We'll reply with a quick take on feasibility and how we'd approach it.",
          },
        },
        {
          metaTitle: "AI Red Teaming Services | mnemonica.ai",
          metaDescription:
            "Adversarial testing for LLM apps, chatbots and AI agents: jailbreaks, prompt injection, data leakage and abuse paths — plus the fixes to harden them.",
          title: "AI Red Teaming",
          lead: "We attack your AI systems before someone else does. Jailbreaks, prompt injection, data leakage and agent abuse paths — found, documented and fixed.",
          audience: [
            "Teams about to put a chatbot, copilot or AI agent in front of customers.",
            "Companies whose AI features touch private data, payments or internal tools.",
            "Security and compliance teams that need evidence an AI system was tested.",
          ],
          problems: [
            "Users can jailbreak your assistant into harmful, off-brand or embarrassing output.",
            "Instructions hidden in documents, emails or web pages hijack your agent (prompt injection).",
            "System prompts, customer data or secrets leak through model responses.",
            "Agents with tool access can be steered into actions they shouldn't take.",
          ],
          deliverables: [
            "Threat model of your AI system: assets, entry points and abuse paths.",
            "Adversarial test suite: jailbreaks, injections and leakage probes tailored to your app.",
            "Findings report with severity, reproduction steps and evidence.",
            "Hardening recommendations: prompts, guardrails, permissions and architecture.",
            "Re-test after fixes, plus a regression suite you can keep running.",
          ],
          process: [
            { title: "Scope", body: "We learn the system, its data, its users and what a serious incident would look like for your business." },
            { title: "Threat model", body: "We map assets, trust boundaries and the most likely abuse paths." },
            { title: "Attack", body: "Manual and automated adversarial testing against your models, retrieval (RAG) and tools." },
            { title: "Report", body: "Prioritized findings with reproduction steps and concrete fixes." },
            { title: "Harden & re-test", body: "We help you ship the fixes, then test again to confirm they hold." },
          ],
          timeline:
            "Typical engagement: 2–4 weeks, depending on how many models, tools and data sources are in scope.",
          faqs: [
            {
              q: "What is AI red teaming?",
              a: "Adversarial testing for AI systems. We act like a determined attacker or malicious user and try to make your model or agent leak data, break its rules or take unsafe actions — then help you fix what we find.",
            },
            {
              q: "How is this different from a regular penetration test?",
              a: "Pentests target infrastructure and code. AI red teaming targets model behavior: prompts, context, retrieval, tool use and how much your app trusts model output. Most AI-specific risk lives there.",
            },
            {
              q: "Do you need access to our model weights?",
              a: "No. Most testing happens through the same interfaces your users and integrations touch. More access — system prompts, logs, architecture — lets us go deeper.",
            },
            {
              q: "Can you test AI agents with tool access?",
              a: "Yes, and that's usually where the highest-impact issues are. We test how far an agent can be tricked into misusing its tools and permissions.",
            },
          ],
          cta: {
            title: "Launching an AI system soon?",
            body: "Tell us what it does and who uses it. We'll suggest a test scope that matches your risk.",
          },
        },
        {
          metaTitle: "AI Integration Consulting | mnemonica.ai",
          metaDescription:
            "We help teams become AI-native: mapping workflows, automating the right tasks, choosing tooling and building the habits that make AI a daily multiplier.",
          title: "AI Integration Consulting",
          lead: "We help your team become AI-native — the workflows, tooling and habits that turn AI from a novelty into a daily multiplier.",
          audience: [
            "Leadership teams that know AI matters but don't know where to start.",
            "Engineering, product and operations teams that want to move faster with AI tools.",
            "Companies with scattered AI experiments that never reached daily use.",
          ],
          problems: [
            "AI adoption that depends on a few enthusiasts and never spreads.",
            "No clear view of which tasks to automate or which tools are worth paying for.",
            "Privacy and security concerns that stall experimentation.",
            "Pilots that never turn into measurable time or cost savings.",
          ],
          deliverables: [
            "AI opportunity map: workflows ranked by impact and effort.",
            "Tooling recommendations and setup: assistants, coding agents, internal integrations.",
            "Working automations for the top-priority workflows.",
            "Hands-on team workshops and playbooks.",
            "Usage guidelines covering data, privacy and quality.",
          ],
          process: [
            { title: "Discover", body: "We interview your teams and map how work actually gets done today." },
            { title: "Prioritize", body: "We rank opportunities by impact, effort and risk, and agree on success metrics." },
            { title: "Pilot", body: "We ship the first automations and tooling with a small group." },
            { title: "Enable", body: "Workshops and playbooks so the whole team adopts what works." },
            { title: "Scale", body: "We roll out to more teams and keep improving from real usage." },
          ],
          timeline:
            "Typical engagement: 3–6 weeks for the first wave, with optional ongoing support afterwards.",
          faqs: [
            {
              q: "When is a company not ready for AI automation?",
              a: "When the process isn't clearly defined or the data isn't accessible. In that case we start by fixing the workflow itself — automating a broken process just makes it break faster.",
            },
            {
              q: "Do you work with Spanish-speaking teams?",
              a: "Yes. We work in English and Spanish, and run workshops in either language.",
            },
            {
              q: "Do you build custom tools or just recommend them?",
              a: "Both. We prefer off-the-shelf tools when they fit, and build custom integrations — like MCP servers or internal assistants — when they don't.",
            },
            {
              q: "How do we measure success?",
              a: "We agree on a few concrete metrics up front — time saved per workflow, adoption, cycle time — and track them through the pilot.",
            },
          ],
          cta: {
            title: "Ready to make your team AI-native?",
            body: "Tell us about your team and how you work today. We'll tell you where AI can make the biggest difference first.",
          },
        },
      ],
    },
    contact: {
      eyebrow: "05 / CONTACT",
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
      eyebrow: "Laboratorio indie de IA",
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
          copy: "Reproductor de escritorio hecho por fans y de código abierto para la Aadam Jacobs Collection de Internet Archive — construido con Tauri, React y TypeScript, con interfaz multitema y motor de audio HTML5 propio.",
          tags: ["desktop", "código abierto", "música"],
        },
        {
          copy: "Servicio FastAPI de código abierto que usa Celery + Redis para orquestar múltiples servidores Ollama como workers. Apunta cualquier cliente Ollama a un único endpoint.",
          tags: ["código abierto", "python", "llmops"],
        },
        {
          copy: "Ejemplos prácticos para hacer red teaming de espacios latentes y proteger apps con LLMs — un toolkit basado en notebooks para explorar flujos de ciberseguridad de IA.",
          tags: ["seguridad IA", "red teaming", "llm"],
        },
        {
          copy: "Proyecto final de investigación que explora ensambles de Redes Generativas Adversarias (GAN) como técnica de aumento de datos para el estudio del Alzheimer con resonancias magnéticas.",
          tags: ["investigación", "gan", "salud IA"],
        },
        {
          copy: "Una versión zen del clásico juego de puzzles — Tetris reimaginado con una estética serena y un ritmo pausado. Suelta bloques, completa líneas, relájate.",
          tags: ["juego", "web", "diversión"],
        },
        {
          copy: "Una revista de literatura en español — cuentos, guías literarias de ciudades, adelantos de libros, un horóscopo literario y mucho humor para amantes de la lectura.",
          tags: ["contenido", "literatura", "en vivo"],
        },
      ],
    },
    services: {
      eyebrow: "02 / SERVICIOS",
      title: "Cómo trabajamos contigo",
      intro:
        "Tres verticales, un solo equipo. Llevamos tu idea a producción — y nos quedamos para blindarla.",
      more: "Ver más →",
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
      eyebrow: "04 / NOSOTROS",
      title: "Hecho por dos hermanos",
      intro:
        "Mnemonica es un pequeño laboratorio indie — solo nosotros. Construimos los productos que desearíamos que existieran, los lanzamos rápido y llevamos ese mismo enfoque práctico al trabajo con clientes.",
      roles: ["Cofundador", "Cofundador"],
    },
    articles: {
      eyebrow: "03 / ARTÍCULOS",
      title: "Artículos y guías",
      intro: "Guías y artículos del laboratorio y de los productos que mantenemos.",
      more: "Leer los artículos ↗",
      items: [
        {
          source: "Le Confidant",
          title: "Guías de análisis de chats de WhatsApp",
          body: "Cómo exportar y analizar un chat de WhatsApp con IA, qué modelos lo hacen, qué pasa con tus datos y qué significan realmente las estadísticas.",
        },
      ],
    },
    servicePage: {
      labels: {
        services: "Servicios",
        audience: "Para quién es",
        problems: "Problemas que resolvemos",
        deliverables: "Qué recibes",
        process: "Cómo funciona",
        examples: "Proyectos relacionados",
        faq: "Preguntas frecuentes",
        contact: "CONTACTO",
      },
      items: [
        {
          metaTitle: "Desarrollo de Productos de IA | mnemonica.ai",
          metaDescription:
            "Llevamos tu idea de producto de IA de la validación al prototipo, el MVP y el lanzamiento — y seguimos iterando. Un estudio pequeño y práctico.",
          title: "Desarrollo de Productos de IA",
          lead: "De una idea en bruto a un producto de IA en el mercado que la gente realmente usa. Validamos, prototipamos, construimos el MVP, lo lanzamos — y seguimos iterando contigo.",
          audience: [
            "Fundadores con una idea de producto de IA que necesitan un equipo técnico para validarla y lanzarla.",
            "Equipos de producto que agregan una funcionalidad de IA a una app existente y quieren hacerlo bien desde el principio.",
            "Empresas que quieren un prototipo funcional antes de comprometer todo el presupuesto.",
          ],
          problems: [
            "Una idea, pero sin forma de saber si la IA puede resolverla de forma confiable.",
            "Prototipos que lucen bien en una demo pero fallan con usuarios y datos reales.",
            "Dudas sobre cómo equilibrar calidad del modelo, costo y latencia.",
            "Sin experiencia interna llevando productos con LLMs a producción.",
          ],
          deliverables: [
            "Informe de validación: viabilidad, opciones de modelo, estimado de costos y riesgos.",
            "Prototipo funcional probado con datos reales.",
            "MVP en producción: frontend, backend, integración de modelos y evaluaciones.",
            "Infraestructura de lanzamiento: hosting, analítica, monitoreo y guardrails.",
            "Hoja de ruta de iteración basada en el uso real.",
          ],
          process: [
            { title: "Validar", body: "Alrededor de 1 semana. Ponemos a prueba la idea, los datos y las opciones de modelo antes de escribir código de producto." },
            { title: "Prototipar", body: "1–2 semanas. Una versión funcional con llamadas reales al modelo, para ver qué funciona y qué no." },
            { title: "Construir el MVP", body: "3–6 semanas. La versión de producción: UI, backend, integraciones, evaluaciones y guardrails." },
            { title: "Lanzar", body: "Lo desplegamos, agregamos monitoreo y analítica, y lo ponemos frente a usuarios reales." },
            { title: "Iterar", body: "De forma continua. Mejoramos prompts, modelos y funcionalidades según cómo la gente realmente lo usa." },
          ],
          timeline:
            "Proyecto típico: 4–8 semanas desde el inicio hasta el lanzamiento. Si solo necesitas un prototipo, 2–3 semanas.",
          faqs: [
            {
              q: "¿Construyen MVPs o sistemas en producción?",
              a: "Ambas cosas. Normalmente empezamos con un prototipo para reducir el riesgo de la idea y luego lo convertimos en un MVP de producción listo para usuarios reales.",
            },
            {
              q: "¿Qué modelos y tecnologías usan?",
              a: "Lo que mejor se ajuste al problema. Trabajamos con OpenAI, Anthropic, Google y modelos open-weight, y elegimos según calidad, costo, latencia y necesidades de privacidad.",
            },
            {
              q: "¿Pueden trabajar con nuestro equipo de ingeniería?",
              a: "Sí. Podemos encargarnos de todo el desarrollo o trabajar junto a tu equipo y entregarles un código que puedan mantener sin problemas.",
            },
            {
              q: "¿De quién es el código?",
              a: "Tuyo. Todo lo que construimos para ti te pertenece.",
            },
          ],
          cta: {
            title: "¿Tienes una idea de producto de IA?",
            body: "Cuéntanos qué quieres construir. Te responderemos con una opinión rápida sobre su viabilidad y cómo lo abordaríamos.",
          },
        },
        {
          metaTitle: "Red Teaming de IA | mnemonica.ai",
          metaDescription:
            "Pruebas adversarias para apps con LLMs, chatbots y agentes de IA: jailbreaks, inyección de prompts y fugas de datos — y las correcciones para blindarlos.",
          title: "Red Teaming de IA",
          lead: "Atacamos tus sistemas de IA antes de que lo haga alguien más. Jailbreaks, inyección de prompts, fugas de datos y vías de abuso de agentes — detectados, documentados y corregidos.",
          audience: [
            "Equipos a punto de poner un chatbot, copiloto o agente de IA frente a sus clientes.",
            "Empresas cuyas funcionalidades de IA tocan datos privados, pagos o herramientas internas.",
            "Equipos de seguridad y cumplimiento que necesitan evidencia de que un sistema de IA fue probado.",
          ],
          problems: [
            "Los usuarios pueden hacerle jailbreak a tu asistente y obtener respuestas dañinas, vergonzosas o ajenas a tu marca.",
            "Instrucciones ocultas en documentos, correos o páginas web secuestran a tu agente (inyección de prompts).",
            "Prompts de sistema, datos de clientes o secretos se filtran en las respuestas del modelo.",
            "Los agentes con acceso a herramientas pueden ser manipulados para ejecutar acciones que no deberían.",
          ],
          deliverables: [
            "Modelo de amenazas de tu sistema de IA: activos, puntos de entrada y vías de abuso.",
            "Batería de pruebas adversarias: jailbreaks, inyecciones y pruebas de fuga de datos adaptadas a tu app.",
            "Informe de hallazgos con severidad, pasos para reproducir y evidencia.",
            "Recomendaciones de blindaje: prompts, guardrails, permisos y arquitectura.",
            "Verificación tras las correcciones, más una batería de pruebas de regresión que puedes seguir ejecutando.",
          ],
          process: [
            { title: "Alcance", body: "Entendemos el sistema, sus datos, sus usuarios y qué sería un incidente grave para tu negocio." },
            { title: "Modelo de amenazas", body: "Mapeamos activos, límites de confianza y las vías de abuso más probables." },
            { title: "Ataque", body: "Pruebas adversarias manuales y automatizadas contra tus modelos, la recuperación de información (RAG) y las herramientas." },
            { title: "Informe", body: "Hallazgos priorizados con pasos para reproducir y correcciones concretas." },
            { title: "Blindar y verificar", body: "Te ayudamos a aplicar las correcciones y volvemos a probar para confirmar que funcionan." },
          ],
          timeline:
            "Proyecto típico: 2–4 semanas, según cuántos modelos, herramientas y fuentes de datos estén en el alcance.",
          faqs: [
            {
              q: "¿Qué es el red teaming de IA?",
              a: "Pruebas adversarias para sistemas de IA. Actuamos como un atacante motivado o un usuario malintencionado e intentamos que tu modelo o agente filtre datos, rompa sus reglas o tome acciones inseguras — y luego te ayudamos a corregir lo que encontramos.",
            },
            {
              q: "¿En qué se diferencia de una prueba de penetración tradicional?",
              a: "Los pentests apuntan a infraestructura y código. El red teaming de IA apunta al comportamiento del modelo: prompts, contexto, recuperación de datos, uso de herramientas y cuánto confía tu app en lo que responde el modelo. Ahí se concentra la mayor parte del riesgo propio de la IA.",
            },
            {
              q: "¿Necesitan acceso a los pesos de nuestro modelo?",
              a: "No. La mayoría de las pruebas se hacen a través de las mismas interfaces que usan tus usuarios e integraciones. Con más acceso — prompts de sistema, logs, arquitectura — podemos ir más a fondo.",
            },
            {
              q: "¿Pueden probar agentes de IA con acceso a herramientas?",
              a: "Sí, y normalmente ahí están los problemas de mayor impacto. Comprobamos hasta dónde se puede engañar a un agente para que use mal sus herramientas y permisos.",
            },
          ],
          cta: {
            title: "¿Vas a lanzar un sistema de IA pronto?",
            body: "Cuéntanos qué hace y quién lo usa. Te sugeriremos un alcance de pruebas acorde a tu riesgo.",
          },
        },
        {
          metaTitle: "Consultoría de Integración de IA | mnemonica.ai",
          metaDescription:
            "Ayudamos a los equipos a volverse nativos en IA: flujos de trabajo, automatización, herramientas y los hábitos que convierten la IA en un multiplicador diario.",
          title: "Consultoría de Integración de IA",
          lead: "Ayudamos a tu equipo a volverse nativo en IA — los flujos de trabajo, las herramientas y los hábitos que convierten la IA de una novedad en un multiplicador diario.",
          audience: [
            "Equipos directivos que saben que la IA importa pero no saben por dónde empezar.",
            "Equipos de ingeniería, producto y operaciones que quieren avanzar más rápido con herramientas de IA.",
            "Empresas con experimentos de IA dispersos que nunca llegaron al uso diario.",
          ],
          problems: [
            "Una adopción de IA que depende de unos pocos entusiastas y nunca se extiende.",
            "No está claro qué tareas automatizar ni por qué herramientas vale la pena pagar.",
            "Preocupaciones de privacidad y seguridad que frenan la experimentación.",
            "Pilotos que nunca se traducen en ahorros medibles de tiempo o costo.",
          ],
          deliverables: [
            "Mapa de oportunidades de IA: flujos de trabajo ordenados por impacto y esfuerzo.",
            "Recomendación y configuración de herramientas: asistentes, agentes de código, integraciones internas.",
            "Automatizaciones en funcionamiento para los flujos prioritarios.",
            "Talleres prácticos y playbooks para el equipo.",
            "Guías de uso sobre datos, privacidad y calidad.",
          ],
          process: [
            { title: "Descubrir", body: "Entrevistamos a tus equipos y mapeamos cómo se trabaja realmente hoy." },
            { title: "Priorizar", body: "Ordenamos las oportunidades por impacto, esfuerzo y riesgo, y acordamos métricas de éxito." },
            { title: "Probar", body: "Lanzamos las primeras automatizaciones y herramientas con un grupo piloto." },
            { title: "Capacitar", body: "Talleres y playbooks para que todo el equipo adopte lo que funciona." },
            { title: "Escalar", body: "Extendemos a más equipos y seguimos mejorando a partir del uso real." },
          ],
          timeline:
            "Proyecto típico: 3–6 semanas para la primera etapa, con soporte continuo opcional después.",
          faqs: [
            {
              q: "¿Cuándo una empresa no está lista para automatizar con IA?",
              a: "Cuando el proceso no está bien definido o los datos no son accesibles. En ese caso empezamos por arreglar el flujo de trabajo — automatizar un proceso roto solo hace que falle más rápido.",
            },
            {
              q: "¿Trabajan con equipos hispanohablantes?",
              a: "Sí. Trabajamos en español e inglés, y damos talleres en ambos idiomas.",
            },
            {
              q: "¿Construyen herramientas a medida o solo las recomiendan?",
              a: "Ambas cosas. Preferimos herramientas existentes cuando encajan, y construimos integraciones a medida — como servidores MCP o asistentes internos — cuando no.",
            },
            {
              q: "¿Cómo medimos el éxito?",
              a: "Acordamos desde el inicio unas pocas métricas concretas — tiempo ahorrado por flujo, adopción, tiempo de ciclo — y las seguimos durante el piloto.",
            },
          ],
          cta: {
            title: "¿Listo para que tu equipo sea nativo en IA?",
            body: "Cuéntanos sobre tu equipo y cómo trabajan hoy. Te diremos por dónde empezar para que la IA tenga el mayor impacto.",
          },
        },
      ],
    },
    contact: {
      eyebrow: "05 / CONTACTO",
      title: "Construyamos algo.",
      body: "¿Tienes un producto, una idea o un sistema de IA que necesita blindaje? Cuéntanos — leemos cada mensaje.",
      cta: "Inicia una conversación",
    },
    footer: "© 2026 mnemonica.ai · hecho con ☕ y gran imaginación",
    meta: {
      title: "mnemonica.ai — Laboratorio indie de IA",
      description:
        "Apps pequeñas, gran imaginación. Diseñamos, lanzamos y blindamos productos de IA enfocados — y ayudamos a los equipos a volverse nativos en IA.",
    },
  },
};

export const getDict = (lang: string): Dict =>
  dictionaries[isLocale(lang) ? lang : defaultLocale];
