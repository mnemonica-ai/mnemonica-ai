import type { MetadataRoute } from "next";
import { locales, type Locale } from "./_dict";
import { services } from "./_data";

const SITE = "https://mnemonica.ai";

// One entry per locale for each page, each listing all its translations.
function entries(path: (l: Locale) => string): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE}${path(l)}`]));
  return locales.map((l) => ({
    url: `${SITE}${path(l)}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entries((l) => `/${l}`),
    ...services.flatMap((s) => entries((l) => `/${l}/${s.slugs[l]}`)),
  ];
}
