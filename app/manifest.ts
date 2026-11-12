import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maxims",
    short_name: "Maxims",
    description: "Günde iki kez, seni harekete geçirecek bir söz",
    start_url: "/",
    display: "standalone",
    background_color: "#121016",
    theme_color: "#121016",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
