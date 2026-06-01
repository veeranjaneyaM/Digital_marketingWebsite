import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["framer-motion", "motion-dom", "motion-utils"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
