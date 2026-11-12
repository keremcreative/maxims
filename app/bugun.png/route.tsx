import { QUOTES } from "@/data/quotes";
import { currentSlot, EVENING_BG, findQuote, MORNING_BG, secondsToNextChange, slot } from "@/lib/schedule";
import { renderWallpaper } from "@/lib/render";

export const dynamic = "force-dynamic";

/**
 * Sabit adresli duvar kağıdı: /bugun.png
 * Maxims kestirmesi bu adresi indirip duvar kağıdı yapar.
 *
 * Kestirme adrese kendi girdisini ekler: /bugun.png?m=<girdi>
 *   - Otomasyon çalıştırınca girdi boştur  -> günün sözü
 *   - Uygulamadaki "Şimdi değiştir" düğmesi "yeni" gönderir -> rastgele söz ve görsel
 *
 * Diğer parametreler:
 *   ?w=1179&h=2556   farklı telefon boyutu
 *   ?s=<slot no>     arşivdeki belirli bir sabah/akşam
 *   ?q=<söz id>      belirli bir söz (önizleme için)
 */
export async function GET(req: Request) {
  const u = new URL(req.url);
  const w = Number(u.searchParams.get("w")) || undefined;
  const h = Number(u.searchParams.get("h")) || undefined;
  const s = u.searchParams.get("s");
  const q = u.searchParams.get("q");
  const mode = (u.searchParams.get("m") ?? "").trim().toLowerCase();

  if (mode === "yeni") {
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    const isEvening = Math.random() < 0.5;
    const n = isEvening ? EVENING_BG : MORNING_BG;
    const bg = `${isEvening ? "aksam" : "sabah"}-${String(1 + Math.floor(Math.random() * n)).padStart(2, "0")}`;
    const res = await renderWallpaper({ quote, bg, isEvening, width: w, height: h, cacheSeconds: 0 });
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  const isNow = s === null && q === null;
  const base = s !== null && /^-?\d+$/.test(s) ? slot(Number(s)) : currentSlot();
  const quote = (q && findQuote(q)) || base.quote;

  return renderWallpaper({
    quote,
    bg: base.bg,
    isEvening: base.isEvening,
    width: w,
    height: h,
    cacheSeconds: isNow ? secondsToNextChange() : 0,
  });
}
