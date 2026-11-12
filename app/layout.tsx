import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { TabBar } from "@/components/TabBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxims",
  description: "Günde iki kez, büyük düşünürlerden bir söz",
  appleWebApp: { capable: true, title: "Maxims", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#121016",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <header className="topbar">
          <Link href="/" className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-mark" src="/icon.svg" alt="" width={28} height={28} />
            <span className="brand-text">
              Maxims<small>Günde iki kez, büyük düşünürlerden bir söz</small>
            </span>
          </Link>
        </header>
        <main className="wrap">{children}</main>
        <TabBar />
      </body>
    </html>
  );
}
