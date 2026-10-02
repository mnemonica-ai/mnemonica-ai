import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pin root so Next stops picking up a stray lockfile above the repo
  turbopack: { root: __dirname },
  poweredByHeader: false,
  // ponytail: no full CSP — GA + Vercel scripts make it brittle for a static
  // marketing site. frame-ancestors alone blocks clickjacking.
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
      ],
    },
  ],
};

export default nextConfig;
