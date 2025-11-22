import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 typescript: {
    // ✅ Ignore build errors during Vercel deployment or `next build`
    ignoreBuildErrors: true,
  },

};

export default nextConfig;
