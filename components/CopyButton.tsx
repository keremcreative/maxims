"use client";
import { useState } from "react";

export function CopyButton({ text, label = "Kopyala" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      className="btn small"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {}
      }}
    >
      {done ? "Kopyalandı ✓" : label}
    </button>
  );
}
