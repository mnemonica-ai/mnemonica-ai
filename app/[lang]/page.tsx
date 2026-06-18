import { GridFloor } from "../_components/GridFloor";
import { Nav } from "../_components/Nav";
import { Hero } from "../_components/Hero";
import { Apps } from "../_components/Apps";
import { Services } from "../_components/Services";
import { About } from "../_components/About";
import { Contact } from "../_components/Contact";
import { Footer } from "../_components/Footer";
import { LangSwitch } from "../_components/LangSwitch";
import { Divider } from "../_components/Divider";
import { getDict, isLocale, locales, defaultLocale } from "../_dict";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <>
      <GridFloor />
      <Nav t={t.nav} />
      <main style={{ position: "relative", zIndex: 1, paddingTop: 62 }}>
        <Hero t={t.hero} />
        <Apps t={t.apps} />
        <Divider />
        <Services t={t.services} />
        <Divider />
        <About t={t.about} />
        <Divider />
        <Contact t={t.contact} />
        <Footer t={t.footer} />
      </main>
      <LangSwitch lang={locale} />
    </>
  );
}
