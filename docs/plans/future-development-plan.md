# Future Development Plan

This plan captures product, content, and SEO improvements for mnemonica.ai. The
goal is to turn the current polished homepage into a stronger business site with
more trust signals, clearer service pages, and better indexable content.

## TODO

Progress tracker. Check items off as they land.

### Phase 1: Commercial Clarity

- [x] Service page content model (slugs in `_data.ts`, copy in `_dict.ts`, EN + ES).
- [x] Service detail route `app/[lang]/[slug]/page.tsx` (audience, problems,
      deliverables, process + timeline, portfolio examples, FAQs, contact CTA).
- [x] `/en/ai-product-development` + `/es/desarrollo-productos-ia`.
- [x] `/en/ai-red-teaming` + `/es/red-teaming-ia`.
- [x] `/en/ai-integration-consulting` + `/es/consultoria-integracion-ia`.
- [x] Per-page metadata: title, description, canonical, hreflang (+ `x-default`,
      also added to the homepage). Service pages reuse the locale OG image.
- [x] `Service`, `FAQPage` and `BreadcrumbList` JSON-LD on service pages.
- [x] Service pages in sitemap.
- [x] Homepage service cards link to service pages.
- [x] Nav + language switch work from subpages (switch keeps the same service).
- [x] llms.txt points services at their dedicated pages.

### Extra: Articles slider

- [x] Homepage "Writing" section with a horizontal slider of blog/article links.
- [x] First link: Le Confidant articles (https://leconfidant.ai/articles).

### Later phases

- [ ] Visual QA of service pages and slider on desktop + mobile (not yet done
      in a browser).
- [ ] Phase 2: Proof and Trust.
- [ ] Phase 3: Conversion Improvements.
- [ ] Phase 4: Content and SEO Depth.

## Current Baseline

The site already has a strong foundation:

- Multilingual English and Spanish routes.
- Clear positioning as an indie AI lab.
- Portfolio section with shipped apps.
- Service section for AI products, AI cybersecurity, and AI integration.
- Founder/about section.
- Contact CTA.
- Sitemap, robots, Open Graph image, Twitter metadata, JSON-LD, analytics, and
  llms.txt.

The main gap is not visual polish or basic metadata. The main gap is depth:
there are not yet enough dedicated pages and proof points for search engines,
prospects, and AI assistants to understand the lab's expertise.

## Priorities

### Phase 1: Commercial Clarity

Create dedicated service landing pages. Each page should be available in English
and Spanish.

- `/en/ai-product-development`
- `/es/desarrollo-productos-ia`
- `/en/ai-red-teaming`
- `/es/red-teaming-ia`
- `/en/ai-integration-consulting`
- `/es/consultoria-integracion-ia`

Each service page should include:

- Who the service is for.
- Problems it solves.
- Deliverables.
- Process and timeline.
- Relevant portfolio examples.
- FAQs.
- Strong contact CTA.

Suggested positioning:

- AI Product Development: idea validation, prototype, MVP, launch, iteration.
- AI Red Teaming: jailbreak testing, adversarial prompts, data leakage, abuse
  paths, model and agent hardening.
- AI Integration Consulting: internal workflows, team enablement, automation,
  tooling, operating model, AI-native culture.

### Phase 2: Proof and Trust

Add product deep-dive or case-study pages for key apps.

- Le Confidant: privacy-first AI insights for WhatsApp conversations.
- DeepPress: MCP support for publishing platforms.
- Prompt: workspace for creating and managing prompts.
- Oshepherd: open-source Ollama worker orchestration.

Each case study should include:

- Problem.
- Audience.
- Product decisions.
- Technical shape.
- What was shipped.
- Lessons learned.
- Link to the live app or repository.

Add a homepage trust/proof section with concrete signals:

- Number of shipped apps.
- Open-source work.
- Live products.
- Founder profiles.
- Public GitHub and social links.
- Any available traction metrics.

### Phase 3: Conversion Improvements

Add a "How we work" section to the homepage:

1. Discovery.
2. Prototype.
3. Ship.
4. Harden.
5. Iterate.

Add an FAQ section to the homepage and relevant service pages. Good starter
questions:

- What does an AI lab do?
- Do you build MVPs or production systems?
- What is AI red teaming?
- How long does an AI prototype take?
- Can you work with an existing product or engineering team?
- Do you support Spanish-speaking teams?

Improve the contact path:

- Keep the Typeform CTA.
- Consider adding a direct email fallback.
- Consider adding a short "best for" line near the CTA, such as product idea,
  AI security review, or team AI adoption.

### Phase 4: Content and SEO Depth

Add a lightweight insights or notes section. Avoid generic AI news. Focus on
topics that match the lab's actual work and services.

Potential topics:

- How to red-team an AI chatbot before launch.
- When your company is not ready for AI automation.
- MCP use cases for publishers.
- What makes an AI product actually useful.
- AI-native workflows for small teams.
- Common failure modes in AI product prototypes.
- How to evaluate data leakage risk in LLM apps.

Each article should link back to one relevant service page and, when useful, one
relevant portfolio project.

## SEO Plan

### Technical SEO

- Add `x-default` hreflang to localized metadata.
- Stop using a fresh `new Date()` for every sitemap entry unless the content
  actually changed. Prefer real update dates or omit `lastModified`.
- Add service pages and case-study pages to the sitemap.
- Add canonical URLs for every new page.
- Keep the generated Open Graph image, but consider page-specific OG images for
  service pages and major case studies.
- Check all pages in Google Search Console after launch.

### Structured Data

The homepage already uses `Organization` JSON-LD. Add more specific schema as
pages are created:

- `Service` schema for service pages.
- `SoftwareApplication` schema for app/product pages.
- `Person` schema for founder profiles.
- `FAQPage` schema for FAQ sections.
- `BreadcrumbList` schema for subpages.

### Metadata

Make page titles more search-oriented while preserving the brand tone.

Homepage title options:

- `mnemonica.ai - AI Product Studio & Red Teaming Lab`
- `mnemonica.ai - Indie AI Lab for Products, Security, and Integration`

Service page title examples:

- `AI Product Development Studio | mnemonica.ai`
- `AI Red Teaming Services | mnemonica.ai`
- `AI Integration Consulting | mnemonica.ai`

Spanish examples:

- `Desarrollo de Productos de IA | mnemonica.ai`
- `Red Teaming de IA | mnemonica.ai`
- `Consultoria de Integracion de IA | mnemonica.ai`

### Internal Linking

Create intentional links between:

- Homepage service cards and service pages.
- Service pages and relevant case studies.
- Case studies and related services.
- Blog/insight posts and service pages.
- Founder/about section and public profiles.

### Content Guidelines

- Write for specific buyer intent, not broad AI keywords.
- Prefer concrete expertise over generic claims.
- Include examples, deliverables, and decision criteria.
- Keep English and Spanish pages equivalent, but not necessarily literal
  translations when local phrasing should differ.
- Use screenshots or product visuals when they help users understand what was
  shipped.

## Suggested Implementation Order

1. Add content model/data structures for service pages.
2. Build reusable page sections for service detail pages.
3. Launch the three service pages in English and Spanish.
4. Update sitemap, metadata, hreflang, and structured data.
5. Add homepage links to service pages.
6. Add FAQ section to homepage and service pages.
7. Add the first two case studies: Le Confidant and DeepPress.
8. Add case-study schema and internal links.
9. Add insights section after service and case-study pages are live.
10. Review Search Console after indexing and refine titles/descriptions based on
    real query data.

## Success Metrics

Track whether the changes improve:

- Organic impressions for service-related queries.
- Indexed pages.
- Click-through rate from search.
- Contact CTA clicks.
- Typeform submissions.
- Referrals from portfolio pages and case studies.
- Queries around AI red teaming, AI product development, MCP, and AI integration.

## Open Questions

- Should the site prioritize English, Spanish, or both equally for new content?
- Which service is the strongest commercial wedge: product development,
  red teaming, or integration?
- Are there client projects or private engagements that can be anonymized into
  case studies?
- Should Mnemonica publish under the company brand only, or also under founder
  bylines?
- Is a direct email CTA desirable alongside Typeform?
