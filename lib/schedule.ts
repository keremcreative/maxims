import { QUOTES, type Quote } from "@/data/quotes";

/**
 * Zamanlama: Türkiye saatiyle her gün 09:00 ve 21:00'de söz değişir.
 * Telefondaki Kestirme tam 09:00'da çalıştığında yeni sözü kesin alsın diye
 * değişim 10 dakika erken (08:50 / 20:50) yapılır.
 * Türkiye 2016'dan beri yaz saati uygulamıyor: sabit UTC+3.
 */
const HOUR = 3_600_000;
const SLOT_MS = 12 * HOUR;
// 08:50 TSİ = 05:50 UTC
const OFFSET_MS = 5 * HOUR + 50 * 60_000;
const TR_OFFSET = 3 * HOUR;

export const MORNING_BG = 6;
export const EVENING_BG = 6;

export type Slot = {
  index: number;
  isEvening: boolean;
  quote: Quote;
  bg: string;
  /** slotun başladığı an (gösterim için 09:00 / 21:00 olarak yuvarlanır) */
  start: Date;
  end: Date;
};

/** Sabit tohumlu karıştırma: liste her yerde aynı sırada döner */
function shuffled<T>(arr: T[], seed: number): T[] {
  const a = arr.slice();
  let s = seed >>> 0;
  const rnd = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ORDER = shuffled(QUOTES, 20261112);

export function slotIndexAt(t: number): number {
  return Math.floor((t - OFFSET_MS) / SLOT_MS);
}

export function slot(index: number): Slot {
  const startMs = index * SLOT_MS + OFFSET_MS + 10 * 60_000;
  // slot başlangıcı TSİ 09 ise sabah, 21 ise akşam
  const trHour = new Date(startMs + TR_OFFSET).getUTCHours();
  const isEvening = trHour >= 12;
  const n = ORDER.length;
  const quote = ORDER[((index % n) + n) % n];
  const day = Math.floor(index / 2);
  const bg = isEvening
    ? `aksam-${String((((day * 5) % EVENING_BG) + EVENING_BG) % EVENING_BG + 1).padStart(2, "0")}`
    : `sabah-${String((((day * 5) % MORNING_BG) + MORNING_BG) % MORNING_BG + 1).padStart(2, "0")}`;
  return { index, isEvening, quote, bg, start: new Date(startMs), end: new Date(startMs + SLOT_MS) };
}

export function currentSlot(now = Date.now()): Slot {
  return slot(slotIndexAt(now));
}

/** Bir sonraki değişime kalan saniye (önbellek süresi için) */
export function secondsToNextChange(now = Date.now()): number {
  const next = (slotIndexAt(now) + 1) * SLOT_MS + OFFSET_MS;
  return Math.max(30, Math.floor((next - now) / 1000));
}

export function findQuote(id: string): Quote | undefined {
  return QUOTES.find((q) => q.id === id);
}

/** Sözün hangi slotta gösterildiğini bulur (arşiv sayfasındaki görsel için) */
export function recentSlots(count: number, now = Date.now()): Slot[] {
  const cur = slotIndexAt(now);
  return Array.from({ length: count }, (_, i) => slot(cur - i));
}

export function formatSlot(s: Slot): string {
  const d = new Date(s.start.getTime() + TR_OFFSET);
  const date = d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", weekday: "long", timeZone: "UTC" });
  return `${date} · ${s.isEvening ? "Akşam" : "Sabah"}`;
}
