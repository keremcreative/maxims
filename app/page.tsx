import Link from "next/link";
import { currentSlot, formatSlot } from "@/lib/schedule";
import { Countdown } from "@/components/Countdown";

export const dynamic = "force-dynamic";

export default function Today() {
  const s = currentSlot();
  const q = s.quote;
  const next = s.end.getTime() - 10 * 60_000; // ekranda 09:00 / 21:00 göster
  return (
    <>
      <p className="eyebrow">{formatSlot(s)}</p>
      <div className="phone">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/bugun.png?w=645&h=1398&s=${s.index}`} alt={`${q.author}: ${q.tr}`} width={645} height={1398} />
        <div className="phone-clock">
          <span className="phone-date">Önizleme</span>
          <span className="phone-time">9:41</span>
        </div>
      </div>

      <section className="card quote-card">
        <blockquote>“{q.tr}”</blockquote>
        {q.orig && <p className="orig">{q.orig}</p>}
        <p className="who">
          <b>{q.author}</b> · {q.role} · {q.life}
        </p>
        <p className="src">Kaynak: {q.source}</p>
      </section>

      <div className="row">
        <a className="btn" href="shortcuts://run-shortcut?name=Maxims&input=text&text=yeni">
          Şimdi değiştir
        </a>
        <a className="btn ghost" href={`/bugun.png?s=${s.index}`} download="maxims.png">
          Görseli indir
        </a>
      </div>
      <p className="muted center small">
        &quot;Şimdi değiştir&quot; rastgele yeni bir söz getirir. Önce <Link href="/kurulum">Maxims kestirmesini</Link> eklemiş olman gerekir.
      </p>
      <p className="muted center">
        Sıradaki söz <Countdown to={next} /> sonra ({s.isEvening ? "sabah 09:00" : "akşam 21:00"})
      </p>
    </>
  );
}
