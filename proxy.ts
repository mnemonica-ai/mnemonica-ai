import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./app/_dict";

// ponytail: 2 locales, so Accept-Language detection is a one-liner — no
// negotiator/intl-localematcher dependency. Add one if locale matching needs
// region/quality weighting.
function pickLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language") ?? "";
  const wanted = header.split(",")[0]?.trim().slice(0, 2).toLowerCase();
  return (locales as readonly string[]).includes(wanted) ? wanted : defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  req.nextUrl.pathname = `/${pickLocale(req)}${pathname}`;
  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  // skip _next, api and files with an extension (favicon.ico, logo.jpg, …)
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
