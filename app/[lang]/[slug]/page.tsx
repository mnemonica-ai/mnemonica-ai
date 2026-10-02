import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GridFloor } from "../../_components/GridFloor";
import { Nav } from "../../_components/Nav";
import { Card } from "../../_components/Apps";
import { Contact } from "../../_components/Contact";
import { Footer } from "../../_components/Footer";
import { LangSwitch } from "../../_components/LangSwitch";
import { Divider } from "../../_components/Divider";
import { apps, services, TYPEFORM } from "../../_data";
import { getDict, isLocale, locales, type Locale } from "../../_dict";

const SITE = "https://mnemonica.ai";

// Unknown lang/slug combos (e.g. /en/red-teaming-ia) 404 instead of rendering.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => services.map((s) => ({ lang, slug: s.slugs[lang] })));
}

function resolve(lang: string, slug: string) {
  if (!isLocale(lang)) notFound();
  const i = services.findIndex((s) => s.slugs[lang] === slug);
  if (i === -1) notFound();
  const paths = Object.fromEntries(
    locales.map((l) => [l, `/${l}/${services[i].slugs[l]}`]),
  ) as Record<Locale, string>;
  return { locale: lang, i, service: services[i], paths };
}

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const { locale, i, paths } = resolve(lang, slug);
  const { metaTitle: title, metaDescription: description } =
    getDict(locale).servicePage.items[i];

  // ponytail: reuses the [lang] OG image (overriding openGraph drops the
  // inherited one). Page-specific OG images are a later SEO item.
  const images = [`/${locale}/opengraph-image`];

  return {
    title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: { ...paths, "x-default": paths.en },
    },
    openGraph: {
      type: "website",
      url: `${SITE}${paths[locale]}`,
      siteName: "mnemonica.ai",
      title,
      description,
      images,
    },
    twitter: { card: "summary_large_image", site: "@mnemonica_ai", title, description, images },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="wrap" style={{ paddingBlock: 32 }}>
      <h2
        className="font-grotesk font-bold text-text"
        style={{ fontSize: "clamp(24px,3.4vw,34px)", letterSpacing: "-0.02em", marginBottom: 22 }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col" style={{ gap: 12, maxWidth: 760 }}>
      {items.map((item) => (
        <li key={item} className="flex" style={{ gap: 12, fontSize: 16, lineHeight: 1.6, color: "#c5bfd8" }}>
          <span className="text-cyan font-mono" aria-hidden>
            →
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params;
  const { locale, i, service, paths } = resolve(lang, slug);
  const t = getDict(locale);
  const p = t.servicePage.items[i];
  const { labels } = t.servicePage;
  const kicker = t.services.items[i].kicker;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: p.title,
        description: p.metaDescription,
        serviceType: p.title,
        url: `${SITE}${paths[locale]}`,
        provider: { "@type": "Organization", name: "mnemonica.ai", url: SITE },
        areaServed: "Worldwide",
        availableLanguage: ["en", "es"],
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "mnemonica.ai", item: `${SITE}/${locale}` },
          { "@type": "ListItem", position: 2, name: labels.services, item: `${SITE}/${locale}#services` },
          { "@type": "ListItem", position: 3, name: p.title, item: `${SITE}${paths[locale]}` },
        ],
      },
    ],
  };

  const examples = service.examples.map((name) => apps.findIndex((a) => a.name === name));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GridFloor />
      <Nav t={t.nav} lang={locale} />
      <main style={{ position: "relative", zIndex: 1, paddingTop: 62 }}>
        <header className="wrap" style={{ paddingTop: "clamp(70px,12vh,120px)", paddingBottom: 40 }}>
          <nav aria-label="Breadcrumb" className="font-mono" style={{ fontSize: 12, color: "#8b80b0" }}>
            <a href={`/${locale}`} className="hover:text-near transition-colors">mnemonica.ai</a>
            {" / "}
            <a href={`/${locale}#services`} className="hover:text-near transition-colors">
              {labels.services.toLowerCase()}
            </a>
          </nav>
          <p
            className="font-mono uppercase text-cyan"
            style={{ marginTop: 28, fontSize: 12, letterSpacing: "0.22em" }}
          >
            {service.num} / {kicker}
          </p>
          <h1
            className="font-grotesk font-bold"
            style={{
              marginTop: 12,
              fontSize: "clamp(38px,7vw,76px)",
              lineHeight: 1.0,
              letterSpacing: "-0.035em",
              color: "#f3f1fa",
            }}
          >
            {p.title}
          </h1>
          <p
            style={{
              marginTop: 22,
              fontSize: "clamp(17px,2.2vw,21px)",
              lineHeight: 1.55,
              color: "#c5bfd8",
              maxWidth: 680,
              textWrap: "pretty",
            }}
          >
            {p.lead}
          </p>
          <a
            href={TYPEFORM}
            target="_blank"
            rel="noopener"
            className="font-grotesk inline-block transition-shadow"
            style={{
              marginTop: 32,
              fontSize: 15,
              fontWeight: 600,
              color: "#0a0612",
              background: "#38bdf8",
              padding: "14px 26px",
              borderRadius: 999,
              boxShadow: "0 0 0 1px rgba(56,189,248,0.5), 0 6px 20px -8px rgba(56,189,248,0.8)",
            }}
          >
            {t.nav.cta} →
          </a>
        </header>

        <Divider />
        <Block title={labels.audience}>
          <List items={p.audience} />
        </Block>
        <Block title={labels.problems}>
          <List items={p.problems} />
        </Block>
        <Block title={labels.deliverables}>
          <List items={p.deliverables} />
        </Block>

        <Divider />
        <Block title={labels.process}>
          <ol
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
              gap: 16,
            }}
          >
            {p.process.map((step, n) => (
              <li
                key={step.title}
                style={{
                  padding: "22px 20px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(167,139,250,0.16)",
                }}
              >
                <span className="font-mono" style={{ fontSize: 13, color: "#38bdf8" }}>
                  {String(n + 1).padStart(2, "0")}
                </span>
                <h3 className="font-grotesk" style={{ marginTop: 10, fontSize: 18, fontWeight: 600, color: "#f3f1fa" }}>
                  {step.title}
                </h3>
                <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: "#b9b2cf" }}>{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="font-mono" style={{ marginTop: 22, fontSize: 13, lineHeight: 1.6, color: "#8b80b0" }}>
            {p.timeline}
          </p>
        </Block>

        <Divider />
        <Block title={labels.examples}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px,1fr))", gap: 20 }}>
            {examples.map((a) => (
              <Card key={a} app={apps[a]} copy={t.apps.items[a].copy} tags={t.apps.items[a].tags} />
            ))}
          </div>
        </Block>

        <Divider />
        <Block title={labels.faq}>
          <div className="flex flex-col" style={{ gap: 12, maxWidth: 820 }}>
            {p.faqs.map((f) => (
              <details
                key={f.q}
                style={{
                  padding: "18px 22px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(167,139,250,0.16)",
                }}
              >
                <summary className="font-grotesk cursor-pointer" style={{ fontSize: 17, fontWeight: 600, color: "#f3f1fa" }}>
                  {f.q}
                </summary>
                <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.6, color: "#b9b2cf" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </Block>

        <Contact t={{ ...t.contact, eyebrow: labels.contact, ...p.cta }} />
        <Footer t={t.footer} />
      </main>
      <LangSwitch lang={locale} paths={paths} />
    </>
  );
}
