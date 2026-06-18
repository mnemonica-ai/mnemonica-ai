import type { MetadataRoute } from "next";
import { locales } from "./_dict";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `https://mnemonica.ai/${lang}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://mnemonica.ai/${l}`]),
      ),
    },
  }));
}
