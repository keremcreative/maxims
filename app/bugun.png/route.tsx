import { currentSlot, findQuote, secondsToNextChange, slot } from "@/lib/schedule";
import { renderWallpaper } from "@/lib/render";

export const dynamic = "force-dynamic";

/**
 * Sabit adresli duvar kağıdı: /bugun.png
 * Kestirme her sabah ve akşam bu adresi indirip duvar kağıdı yapar.
 *
 * İsteğe bağlı parametreler:
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
