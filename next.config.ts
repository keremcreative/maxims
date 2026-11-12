import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Duvar kağıdı çizilirken okunan font ve arka plan dosyaları sunucuya da gitsin
  outputFileTracingIncludes: {
    "/bugun.png": ["./assets/fonts/**", "./public/bg/**"],
  },
};

export default nextConfig;
