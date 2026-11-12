import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Quote } from "@/data/quotes";

/**
 * Duvar kağıdını çizer. Varsayılan boyut iPhone Pro Max / Plus (1290 x 2796).
 * Yerleşim kilit ekranına göre: üstteki saat/tarih alanı (yaklaşık ilk %35) ve
 * alttaki fener/kamera düğmeleri (son %10) boş bırakılır, söz ortanın biraz altına yazılır.
 */
const ROOT = process.cwd();
let fontCache: { name: string; data: Buffer; weight: 400 | 600 | 700; style: "normal" | "italic" }[] | null = null;

async function fonts() {
  if (fontCache) return fontCache;
  const f = (n: string) => readFile(path.join(ROOT, "assets/fonts", n));
  const [pi, pie, pb, pbe, i4, i4e, i6, i6e] = await Promise.all([
    f("playfair-display-latin-400-italic.woff"),
    f("playfair-display-latin-ext-400-italic.woff"),
    f("playfair-display-latin-700-normal.woff"),
    f("playfair-display-latin-ext-700-normal.woff"),
    f("inter-latin-400-normal.woff"),
    f("inter-latin-ext-400-normal.woff"),
    f("inter-latin-600-normal.woff"),
    f("inter-latin-ext-600-normal.woff"),
  ]);
  fontCache = [
    { name: "Playfair", data: pi, weight: 400, style: "italic" },
    { name: "Playfair", data: pie, weight: 400, style: "italic" },
    { name: "Playfair", data: pb, weight: 700, style: "normal" },
    { name: "Playfair", data: pbe, weight: 700, style: "normal" },
    { name: "Inter", data: i4, weight: 400, style: "normal" },
    { name: "Inter", data: i4e, weight: 400, style: "normal" },
    { name: "Inter", data: i6, weight: 600, style: "normal" },
    { name: "Inter", data: i6e, weight: 600, style: "normal" },
  ];
  return fontCache;
}

function quoteSize(len: number) {
  if (len <= 30) return 96;
  if (len <= 60) return 82;
  if (len <= 100) return 70;
  if (len <= 140) return 62;
  return 56;
}

export async function renderWallpaper(opts: {
  quote: Quote;
  bg: string;
  isEvening: boolean;
  width?: number;
  height?: number;
  cacheSeconds?: number;
}) {
  const width = Math.min(Math.max(opts.width ?? 1290, 320), 2000);
  const height = Math.min(Math.max(opts.height ?? 2796, 480), 4000);
  const k = width / 1290;
  const { quote } = opts;

  const bgBuf = await readFile(path.join(ROOT, "public/bg", `${opts.bg}.jpg`));
  const bgSrc = `data:image/jpeg;base64,${bgBuf.toString("base64")}`;
  const size = quoteSize(quote.tr.length) * k;
  const accent = opts.isEvening ? "#f3d9a4" : "#ffe6b0";

  const res = new ImageResponse(
    (
      <div style={{ width, height, display: "flex", position: "relative", background: "#111" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bgSrc} width={width} height={height} style={{ position: "absolute", top: 0, left: 0, width, height, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute", top: 0, left: 0, width, height, display: "flex",
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 36%, rgba(8,8,14,${opts.isEvening ? 0.45 : 0.5}) 52%, rgba(8,8,14,${opts.isEvening ? 0.55 : 0.6}) 80%, rgba(8,8,14,0.35) 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute", left: 120 * k, right: 120 * k, top: height * 0.44, bottom: height * 0.12,
            display: "flex", flexDirection: "column", justifyContent: "center", color: "#fbf8f1",
          }}
        >
          <div style={{ display: "flex", fontFamily: "Playfair", fontWeight: 700, fontSize: 200 * k, lineHeight: 0.6, color: accent, height: 110 * k, opacity: 0.9 }}>
            “
          </div>
          <div
            style={{
              display: "flex", fontFamily: "Playfair", fontStyle: "italic", fontSize: size, lineHeight: 1.28,
              letterSpacing: -0.5 * k, textShadow: `0 ${2 * k}px ${18 * k}px rgba(0,0,0,0.55)`,
            }}
          >
            {quote.tr}
          </div>
          <div style={{ display: "flex", width: 90 * k, height: 3 * k, background: accent, marginTop: 56 * k, marginBottom: 32 * k, opacity: 0.85 }} />
          <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 600, fontSize: 40 * k, letterSpacing: 1 * k, textShadow: `0 ${1 * k}px ${10 * k}px rgba(0,0,0,0.6)` }}>
            {quote.author}
          </div>
          <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 400, fontSize: 30 * k, marginTop: 10 * k, color: "rgba(251,248,241,0.72)" }}>
            {`${quote.role} · ${quote.life}`}
          </div>
        </div>
      </div>
    ),
    { width, height, fonts: await fonts() },
  );
  const s = opts.cacheSeconds ?? 0;
  res.headers.set("Cache-Control", s > 0 ? `public, max-age=0, s-maxage=${s}` : "public, max-age=31536000, immutable");
  return res;
}
