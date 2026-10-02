import type { MetadataRoute } from "next";
import { locales, type Locale } from "./_dict";
import { services } from "./_data";

const SITE = "https://mnemonica.ai";

// One entry per locale for each page, each listing all its translations.
function entries(path: (l: Locale) => string): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE}${path(l)}`]));
  return locales.map((l) => ({
    // ponytail: no lastModified — "now" on every request teaches Google to
    // ignore it. Add real per-page dates if content starts changing often.
    url: `${SITE}${path(l)}`,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entries((l) => `/${l}`),
    ...services.flatMap((s) => entries((l) => `/${l}/${s.slugs[l]}`)),
  ];
}
