import { QUOTES } from "@/data/quotes";
import { currentSlot, EVENING_BG, findQuote, MORNING_BG, slot } from "@/lib/schedule";
import { renderWallpaper } from "@/lib/render";

export const dynamic = "force-dynamic";

/**
 * Sabit adresli duvar kağıdı: /bugun.png
 * Maxims kestirmesi bu adresi indirip duvar kağıdı yapar.
 *
 * Ne zaman ne gelir:
 *   - Otomasyon saatlerinde (telefonun yerel saatiyle 08:50–09:15 ve 20:50–21:15) -> günün sözü
 *   - Bunun dışında kestirme elle çalıştırılınca (Arkaya Dokunma, kilit ekranı düğmesi,
 *     Kestirmeler uygulaması) -> sıradaki duvar kağıdı (rastgele söz ve görsel)
 *   - ?m=yeni (uygulamadaki "Şimdi değiştir" düğmesi) -> her zaman yeni söz
 * Telefonun saat dilimi Vercel'in x-vercel-ip-timezone başlığından okunur.
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

  const isPlain = s === null && q === null;
  if (mode === "yeni" || (isPlain && !inAutomationWindow(req))) {
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    const isEvening = Math.random() < 0.5;
    const n = isEvening ? EVENING_BG : MORNING_BG;
    const bg = `${isEvening ? "aksam" : "sabah"}-${String(1 + Math.floor(Math.random() * n)).padStart(2, "0")}`;
    const res = await renderWallpaper({ quote, bg, isEvening, width: w, height: h, cacheSeconds: 0 });
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  const base = s !== null && /^-?\d+$/.test(s) ? slot(Number(s)) : currentSlot();
  const quote = (q && findQuote(q)) || base.quote;

  return renderWallpaper({
    quote,
    bg: base.bg,
    isEvening: base.isEvening,
    width: w,
    height: h,
    cacheSeconds: 0,
  }).then((res) => {
    if (isPlain) res.headers.set("Cache-Control", "no-store");
    return res;
  });
}

/** İstek, telefonun yerel saatiyle 09:00 veya 21:00 otomasyonuna denk geliyor mu? */
function inAutomationWindow(req: Request): boolean {
  const tz = req.headers.get("x-vercel-ip-timezone") || "Europe/Istanbul";
  let hm: string;
  try {
    hm = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date());
  } catch {
    hm = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Istanbul", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date());
  }
  const [h, m] = hm.split(":").map(Number);
  const mins = h * 60 + m;
  const near = (target: number) => mins >= target - 10 && mins <= target + 15;
  return near(9 * 60) || near(21 * 60);
}
