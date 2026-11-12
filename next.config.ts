import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Duvar kağıdı çizilirken okunan font ve arka plan dosyaları sunucuya da gitsin
  outputFileTracingIncludes: {
    "/bugun.png": ["./assets/fonts/**", "./public/bg/**"],
  },
  async headers() {
    return [
      {
        // iPhone'da dokununca Kestirmeler uygulamasında açılsın
        source: "/Maxims.shortcut",
        headers: [
          { key: "Content-Type", value: "application/octet-stream" },
          { key: "Content-Disposition", value: 'attachment; filename="Maxims.shortcut"' },
        ],
      },
    ];
  },
};

export default nextConfig;
