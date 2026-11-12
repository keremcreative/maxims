import { QUOTES } from "@/data/quotes";
import { formatSlot, recentSlots } from "@/lib/schedule";

export const dynamic = "force-dynamic";

export default function Archive() {
  const slots = recentSlots(14);
  return (
    <>
      <h1 className="h1">Son 7 gün</h1>
      <div className="grid">
        {slots.map((s) => (
          <a key={s.index} className="tile" href={`/bugun.png?s=${s.index}`} target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/bugun.png?w=390&h=845&s=${s.index}`} alt={s.quote.tr} loading="lazy" width={390} height={845} />
            <span>{formatSlot(s)}</span>
          </a>
        ))}
      </div>

      <h2 className="h1" style={{ marginTop: 28 }}>
        Tüm sözler <span className="muted">({QUOTES.length})</span>
      </h2>
      <p className="muted">Her söz kaynağıyla birlikte. İnternette yanlış kişiye atfedilen sözler listeye alınmadı.</p>
      <div className="card">
        {QUOTES.map((q) => (
          <div key={q.id} className="list-item">
            <p className="li-quote">“{q.tr}”</p>
            <p className="li-meta">
              <b>{q.author}</b> · {q.source}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
