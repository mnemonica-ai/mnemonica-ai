import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pin root so Next stops picking up a stray lockfile above the repo
  turbopack: { root: __dirname },
};

export default nextConfig;
