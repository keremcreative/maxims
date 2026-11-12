import { headers } from "next/headers";
import { CopyButton } from "@/components/CopyButton";

export const dynamic = "force-dynamic";

export default async function Setup() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "maxims-brown.vercel.app";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const url = `${proto}://${host}/bugun.png`;

  return (
    <>
      <h1 className="h1">Kilit ekranına kur</h1>
      <p className="muted">İki adım, toplam bir dakika. iPhone'da Safari ile aç.</p>

      <section className="card setup-step">
        <span className="step-no">1</span>
        <h3>Kestirmeyi ekle</h3>
        <p>Düğmeye dokun, açılan ekranda <b>Kestirme Ekle</b>'ye bas. Sonra kestirmeye bir kere dokun: duvar kağıdın hemen değişir.</p>
        <a className="btn big" href="/Maxims.shortcut">
          Maxims kestirmesini ekle
        </a>
      </section>

      <section className="card setup-step">
        <span className="step-no">2</span>
        <h3>Her gün kendiliğinden değişsin</h3>
        <p>Kestirmeler uygulamasında:</p>
        <ol className="taps">
          <li><b>Otomasyon</b> sekmesi</li>
          <li>Sağ üstte <b>+</b></li>
          <li><b>Günün Saati</b> → <b>09:00</b> → <b>Hemen Çalıştır</b> → <b>İleri</b></li>
          <li>Listeden <b>Maxims</b>'i seç</li>
        </ol>
        <p className="muted">Akşam sözü için aynısını <b>21:00</b> ile bir kere daha yap.</p>
      </section>

      <section className="card setup-step">
        <span className="step-no">3</span>
        <h3>Kilit ekranından sıradakine geç (isteğe bağlı)</h3>
        <p>Kestirme otomasyon saatleri dışında çalışınca sıradaki duvar kağıdını getirir. İki kolay yol:</p>
        <ol className="taps">
          <li>
            <b>Telefonun arkasına 3 kez dokun:</b> Ayarlar → Erişilebilirlik → Dokunma → <b>Arkaya Dokunma</b> → <b>Üç Kez Dokunma</b> → listeden <b>Maxims</b>.
          </li>
          <li>
            <b>Kilit ekranına düğme koy (iOS 18):</b> Kilit ekranına basılı tut → <b>Özelleştir</b> → <b>Kilit Ekranı</b> → alttaki fener ya da kamera düğmesindeki <b>–</b> → boş yere dokun → <b>Kestirmeler</b> → <b>Maxims</b>.
          </li>
        </ol>
      </section>

      <details className="card more">
        <summary>Sorun mu var?</summary>
        <p>
          <b>Duvar kağıdı değişmiyor:</b> Kilit ekranına basılı tut → <b>+</b> → <b>Fotoğraflar</b> ile herhangi bir fotoğrafı duvar kağıdı yap.
          Kestirme sadece fotoğraflı duvar kağıdını değiştirebiliyor.
        </p>
        <p>
          <b>Kestirmeyi elle kurmak istersen:</b> <i>URL'nin İçeriğini Al</i> ve <i>Duvar Kağıdı Fotoğrafını Ayarla</i> eylemlerini ekle, adres olarak bunu kullan:
        </p>
        <code>{url}</code>
        <CopyButton text={url} label="Adresi kopyala" />
      </details>

      <h2 className="h1" style={{ marginTop: 28 }}>Uygulamayı ana ekrana ekle</h2>
      <p className="muted">
        Safari'de Paylaş → <b>Ana Ekrana Ekle</b>. Bugünün sözünü, arşivi ve kaynakları buradan görürsün.
      </p>
    </>
  );
}
