import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // export static,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
