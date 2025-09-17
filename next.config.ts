import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent ESLint errors from failing production builds on Vercel.
  // Linting still runs locally with `npm run lint`.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
