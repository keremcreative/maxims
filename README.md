# Maxims

Günde iki kez, seni harekete geçirecek bir söz: her sabah 09:00 ve akşam 21:00'de değişen duvar kağıtları.

- **/bugun.png**: sabit adresli duvar kağıdı. Her zaman o anki sözü verir (iPhone Pro Max/Plus boyutu, `?w=&h=` ile değişir).
- **/**: bugünün sözü, önizleme, kaynak.
- **/arsiv**: son 7 günün duvar kağıtları ve tüm söz listesi.
- **/kurulum**: iPhone Kestirmeler ile otomatik değiştirme rehberi.

## Çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
```

## Sözler

`data/quotes.ts`. Her sözün kaynağı yazılı; yanlış atfedilen popüler sözler bilerek yok.
Yeni söz eklemek için listeye bir satır ekle.

## Arka planlar

`public/bg/sabah-XX.jpg` ve `aksam-XX.jpg` (1290 x 2796, dikey). Gemini ile üretilen karanlık, sinematik,
yüzü görünmeyen yalnız figürler. Yeni görsel eklerken aynı isim düzeniyle bu klasöre koy; sayı değişirse
`lib/schedule.ts` içindeki `MORNING_BG` / `EVENING_BG` güncellenir. Söz alt kısma yazıldığı için görselin
alt %40'ı karanlık olmalı. (`scripts/make_backgrounds.py` ilk prototipteki geçici çizimleri üretiyordu.)

## Yayına alma

KekoScore ile aynı: depoyu GitHub'a gönder → vercel.com/new → depoyu seç → Deploy. Ücretsiz Hobby planı yeterli.
