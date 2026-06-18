import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Space_Mono } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { getDict, isLocale, defaultLocale } from "../_dict";

const GA_ID = "G-150YHSN513";

const grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const { title, description } = getDict(lang).meta;
  const locale = isLocale(lang) ? lang : defaultLocale;

  return {
    metadataBase: new URL("https://mnemonica.ai"),
    title,
    description,
    keywords: [
      "AI lab",
      "AI products",
      "AI consulting",
      "AI red teaming",
      "AI integration",
      "mnemonica",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es" },
    },
    // reusing the square logo as the share image. Swap for a real
    // 1200×630 og image when one exists.
    openGraph: {
      type: "website",
      url: `https://mnemonica.ai/${locale}`,
      siteName: "mnemonica.ai",
      title,
      description,
      images: [{ url: "/logo.jpg", width: 510, height: 510, alt: "mnemonica.ai" }],
    },
    twitter: {
      card: "summary",
      site: "@mnemonica_ai",
      title,
      description,
      images: ["/logo.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <html
      lang={locale}
      className={`${grotesk.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}
    >
      <body>{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </html>
  );
}
