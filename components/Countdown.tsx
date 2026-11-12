"use client";
import { useEffect, useState } from "react";

/** Bir sonraki söze kalan süre */
export function Countdown({ to }: { to: number }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return <span>&nbsp;</span>;
  const m = Math.max(0, Math.round((to - now) / 60_000));
  const h = Math.floor(m / 60);
  return <span>{h > 0 ? `${h} sa ${m % 60} dk` : `${m} dk`}</span>;
}
