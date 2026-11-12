import { headers } from "next/headers";
import { CopyButton } from "@/components/CopyButton";

export const dynamic = "force-dynamic";

export default async function Setup() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "maxims.vercel.app";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const url = `${proto}://${host}/bugun.png`;

  return (
    <>
      <h1 className="h1">iPhone'da otomatik değişsin</h1>
      <p className="muted">
        Apple'ın kendi <b>Kestirmeler</b> uygulamasıyla telefon her sabah 09:00'da ve akşam 21:00'de yeni sözü indirip kilit ekranına koyar.
        Bir kere kurulur, yaklaşık 3 dakika sürer.
      </p>

      <div className="card urlbox">
        <p className="label">Duvar kağıdı adresi</p>
        <code>{url}</code>
        <CopyButton text={url} label="Adresi kopyala" />
      </div>

      <ol className="steps">
        <li>
          <h3>Önce bir fotoğraf duvar kağıdı seç</h3>
          <p>
            Kilit ekranına basılı tut → <b>+</b> → <b>Fotoğraflar</b> → herhangi bir fotoğraf → <b>Ekle</b>.
            Kestirme yalnızca fotoğraflı duvar kağıdını değiştirebilir, bu yüzden bir kere fotoğraflı olanı seçmek gerekiyor.
          </p>
        </li>
        <li>
          <h3>Otomasyonu oluştur</h3>
          <p>
            <b>Kestirmeler</b> uygulamasını aç → alttan <b>Otomasyon</b> → sağ üstte <b>+</b> → <b>Günün Saati</b>.
            Saati <b>09:00</b>, tekrarı <b>Her Gün</b> yap. Altta <b>Hemen Çalıştır</b>'ı seç (sormadan çalışsın) → <b>İleri</b>.
          </p>
        </li>
        <li>
          <h3>Görseli indirme adımı</h3>
          <p>
            <b>Yeni Boş Otomasyon</b> → <b>Eylem Ekle</b> → aramaya <i>URL</i> yaz → <b>URL'nin İçeriğini Al</b> (Get Contents of URL).
            Adres yerine yukarıda kopyaladığın adresi yapıştır.
          </p>
        </li>
        <li>
          <h3>Duvar kağıdı yapma adımı</h3>
          <p>
            Arama kutusuna <i>duvar kağıdı</i> yaz → <b>Duvar Kağıdı Fotoğrafını Ayarla</b> (Set Wallpaper Photo).
            Mavi yazıya dokunup <b>Kilit Ekranı</b>'nı seç. Oka (›) dokun, <b>Önizlemeyi Göster</b> ve <b>Konuyu Kırp</b> kapalı olsun → <b>Bitti</b>.
          </p>
        </li>
        <li>
          <h3>Akşam için tekrarla</h3>
          <p>Aynı adımları <b>21:00</b> için bir kere daha yap. Böylece sabah ve akşam iki ayrı söz gelir.</p>
        </li>
        <li>
          <h3>Dene</h3>
          <p>Otomasyonu açıp sağ alttaki ▶ düğmesine bas. Kilit ekranına bak: söz gelmiş olmalı.</p>
        </li>
      </ol>

      <div className="card tip">
        <p>
          <b>İpucu:</b> Ana ekranda da istersen 4. adımda <b>Kilit Ekranı ve Ana Ekran</b>'ı seç.
          Söz ekranın ortasının biraz altına yazılıyor; saat ve alt köşedeki fener/kamera düğmelerine denk gelmiyor.
        </p>
      </div>

      <h2 className="h1" style={{ marginTop: 28 }}>Uygulamayı ana ekrana ekle</h2>
      <p className="muted">
        Bu sayfayı <b>Safari</b> ile aç → Paylaş düğmesi → <b>Ana Ekrana Ekle</b>. Bugünün sözünü, arşivi ve kaynakları buradan görürsün.
      </p>
    </>
  );
}
