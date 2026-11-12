/**
 * Söz listesi.
 *
 * Kurallar:
 * - Yalnızca kaynağı belli, gerçekten o kişiye ait sözler (eser / mektup / konuşma).
 *   İnternette dolaşan ama yanlış atfedilen sözler bilerek alınmadı
 *   (ör. "Ne olursan ol yine gel", "Coğrafya kaderdir", Einstein'ın "delilik" sözü).
 * - `tr` duvar kağıdına yazılan Türkçe metin, `orig` özgün dildeki hali, `source` nereden geldiği.
 * - Sıra önemli değil; uygulama listeyi her gün iki kez sırayla döndürür.
 * - Yeni söz eklerken id'yi benzersiz tut (arşiv linkleri id ile çalışır).
 */
export type Quote = {
  id: string;
  tr: string;
  orig?: string;
  author: string;
  life: string;
  role: string;
  source: string;
};

export const QUOTES: Quote[] = [
  { id: "sokrates-sorgulanmamis", tr: "Sorgulanmamış bir hayat yaşanmaya değmez.", orig: "ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ", author: "Sokrates", life: "MÖ 470–399", role: "Filozof", source: "Platon, Sokrates'in Savunması, 38a" },
  { id: "laozi-bin-mil", tr: "Bin millik yolculuk tek bir adımla başlar.", orig: "千里之行，始於足下", author: "Lao Tzu", life: "MÖ 6. yy", role: "Filozof", source: "Tao Te Ching, 64. bölüm" },
  { id: "aurelius-iyi-insan", tr: "İyi bir insanın nasıl olması gerektiğini tartışarak daha fazla vakit kaybetme. İyi insan ol.", author: "Marcus Aurelius", life: "121–180", role: "Roma İmparatoru, filozof", source: "Kendime Düşünceler, X.16" },
  { id: "seneca-hayal", tr: "Gerçekte olduğundan çok, hayalimizde acı çekeriz.", orig: "Plura sunt quae nos terrent quam quae premunt, et saepius opinione quam re laboramus.", author: "Seneca", life: "MÖ 4 – MS 65", role: "Stoacı filozof", source: "Lucilius'a Mektuplar, 13" },
  { id: "epiktetos-yargilar", tr: "İnsanları rahatsız eden şeylerin kendisi değil, o şeyler hakkındaki yargılarıdır.", author: "Epiktetos", life: "50–135", role: "Stoacı filozof", source: "Enkheiridion, 5" },
  { id: "konfucyus-bilgi", tr: "Bildiğini bildiğini, bilmediğini bilmediğini bilmek: İşte gerçek bilgi budur.", orig: "知之為知之，不知為不知，是知也。", author: "Konfüçyüs", life: "MÖ 551–479", role: "Filozof", source: "Konuşmalar (Analektler), 2.17" },
  { id: "descartes-cogito", tr: "Düşünüyorum, öyleyse varım.", orig: "Je pense, donc je suis.", author: "René Descartes", life: "1596–1650", role: "Filozof, matematikçi", source: "Yöntem Üzerine Konuşma, 1637" },
  { id: "pascal-kalp", tr: "Kalbin, aklın bilmediği sebepleri vardır.", orig: "Le cœur a ses raisons que la raison ne connaît point.", author: "Blaise Pascal", life: "1623–1662", role: "Filozof, matematikçi", source: "Düşünceler (Pensées), 277" },
  { id: "pascal-oda", tr: "İnsanlığın bütün dertleri, insanın bir odada tek başına sessizce oturamamasından gelir.", orig: "Tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre.", author: "Blaise Pascal", life: "1623–1662", role: "Filozof, matematikçi", source: "Düşünceler (Pensées), 139" },
  { id: "spinoza-nadir", tr: "Bütün yüce şeyler, ender oldukları kadar zordur.", orig: "Sed omnia praeclara tam difficilia quam rara sunt.", author: "Baruch Spinoza", life: "1632–1677", role: "Filozof", source: "Etika, V. kısım, son cümle" },
  { id: "kant-yildizli-gok", tr: "İki şey zihnimi her seferinde yeni ve artan bir hayranlıkla doldurur: Üstümdeki yıldızlı gök ve içimdeki ahlak yasası.", orig: "Der bestirnte Himmel über mir und das moralische Gesetz in mir.", author: "Immanuel Kant", life: "1724–1804", role: "Filozof", source: "Pratik Aklın Eleştirisi, 1788" },
  { id: "kant-sapere-aude", tr: "Kendi aklını kullanma cesaretini göster!", orig: "Sapere aude! Habe Mut, dich deines eigenen Verstandes zu bedienen!", author: "Immanuel Kant", life: "1724–1804", role: "Filozof", source: "Aydınlanma Nedir?, 1784" },
  { id: "nietzsche-nicin", tr: "Yaşamak için bir nedeni olan, hemen her nasıla katlanabilir.", orig: "Hat man sein warum? des Lebens, so verträgt man sich fast mit jedem wie?", author: "Friedrich Nietzsche", life: "1844–1900", role: "Filozof", source: "Putların Alacakaranlığı, 1889" },
  { id: "nietzsche-oldurmeyen", tr: "Beni öldürmeyen şey güçlendirir.", orig: "Was mich nicht umbringt, macht mich stärker.", author: "Friedrich Nietzsche", life: "1844–1900", role: "Filozof", source: "Putların Alacakaranlığı, 1889" },
  { id: "voltaire-bahce", tr: "Bahçemizi yetiştirmeliyiz.", orig: "Il faut cultiver notre jardin.", author: "Voltaire", life: "1694–1778", role: "Yazar, filozof", source: "Candide, 1759" },
  { id: "newton-devler", tr: "Daha uzağı görebildiysem, devlerin omuzlarında durduğum içindir.", orig: "If I have seen further it is by standing on the shoulders of Giants.", author: "Isaac Newton", life: "1643–1727", role: "Fizikçi, matematikçi", source: "Robert Hooke'a mektup, 1675" },
  { id: "einstein-hayal-gucu", tr: "Hayal gücü bilgiden daha önemlidir.", orig: "Imagination is more important than knowledge.", author: "Albert Einstein", life: "1879–1955", role: "Fizikçi", source: "The Saturday Evening Post röportajı, 1929" },
  { id: "einstein-bisiklet", tr: "Hayat bisiklete binmek gibidir. Dengeni korumak için hareket etmeye devam etmelisin.", orig: "Life is like riding a bicycle. To keep your balance you must keep moving.", author: "Albert Einstein", life: "1879–1955", role: "Fizikçi", source: "Oğlu Eduard'a mektup, 1930" },
  { id: "shakespeare-olmak", tr: "Olmak ya da olmamak, işte bütün mesele bu.", orig: "To be, or not to be, that is the question.", author: "William Shakespeare", life: "1564–1616", role: "Şair, oyun yazarı", source: "Hamlet, III. perde" },
  { id: "shakespeare-kendine", tr: "Her şeyden önce, kendine karşı dürüst ol.", orig: "This above all: to thine own self be true.", author: "William Shakespeare", life: "1564–1616", role: "Şair, oyun yazarı", source: "Hamlet, I. perde" },
  { id: "goethe-yapmak", tr: "Bilmek yetmez, uygulamalıyız. İstemek yetmez, yapmalıyız.", orig: "Es ist nicht genug zu wissen, man muß auch anwenden; es ist nicht genug zu wollen, man muß auch tun.", author: "Johann Wolfgang von Goethe", life: "1749–1832", role: "Şair, yazar", source: "Wilhelm Meister'in Gezi Yılları, 1829" },
  { id: "tolstoy-aileler", tr: "Bütün mutlu aileler birbirine benzer; her mutsuz ailenin ise kendine özgü bir mutsuzluğu vardır.", orig: "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.", author: "Lev Tolstoy", life: "1828–1910", role: "Yazar", source: "Anna Karenina, 1877" },
  { id: "dostoyevski-guzellik", tr: "Güzellik dünyayı kurtaracak.", orig: "Мир спасёт красота.", author: "Fyodor Dostoyevski", life: "1821–1881", role: "Yazar", source: "Budala, 1869" },
  { id: "wilde-yildizlar", tr: "Hepimiz çamurun içindeyiz ama bazılarımız yıldızlara bakıyor.", orig: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde", life: "1854–1900", role: "Yazar", source: "Lady Windermere'in Yelpazesi, 1892" },
  { id: "franklin-iyi-yapilmis", tr: "İyi yapılmış, iyi söylenmişten daha iyidir.", orig: "Well done is better than well said.", author: "Benjamin Franklin", life: "1706–1790", role: "Bilim insanı, devlet adamı", source: "Poor Richard's Almanack, 1737" },
  { id: "franklin-zaman", tr: "Kaybedilen zaman bir daha asla bulunmaz.", orig: "Lost time is never found again.", author: "Benjamin Franklin", life: "1706–1790", role: "Bilim insanı, devlet adamı", source: "Poor Richard's Almanack, 1748" },
  { id: "ataturk-ilim", tr: "Hayatta en hakiki mürşit ilimdir.", author: "Mustafa Kemal Atatürk", life: "1881–1938", role: "Türkiye Cumhuriyeti'nin kurucusu", source: "Samsun öğretmenlerine konuşma, 1924" },
  { id: "ataturk-sulh", tr: "Yurtta sulh, cihanda sulh.", author: "Mustafa Kemal Atatürk", life: "1881–1938", role: "Türkiye Cumhuriyeti'nin kurucusu", source: "1931 yurt gezisi konuşmaları" },
  { id: "yunus-tanis", tr: "Gelin tanış olalım, işi kolay kılalım; sevelim sevilelim, dünya kimseye kalmaz.", author: "Yunus Emre", life: "1238–1320", role: "Şair, mutasavvıf", source: "Yunus Emre Divanı" },
  { id: "nazim-agac", tr: "Yaşamak bir ağaç gibi tek ve hür ve bir orman gibi kardeşçesine.", author: "Nâzım Hikmet", life: "1902–1963", role: "Şair", source: "Davet şiiri" },
  { id: "thoreau-sessiz", tr: "İnsanların çoğu sessiz bir umutsuzluk içinde yaşar.", orig: "The mass of men lead lives of quiet desperation.", author: "Henry David Thoreau", life: "1817–1862", role: "Yazar, filozof", source: "Walden, 1854" },
  { id: "emerson-heves", tr: "Hiçbir büyük şey heves olmadan başarılmamıştır.", orig: "Nothing great was ever achieved without enthusiasm.", author: "Ralph Waldo Emerson", life: "1803–1882", role: "Yazar, filozof", source: "Çemberler (Circles), 1841" },
  { id: "platon-baslangic", tr: "Başlangıç, işin en önemli parçasıdır.", orig: "ἀρχὴ παντὸς ἔργου μέγιστον", author: "Platon", life: "MÖ 427–347", role: "Filozof", source: "Devlet, 377a" },
  { id: "rousseau-ozgur", tr: "İnsan özgür doğar, oysa her yerde zincire vurulmuştur.", orig: "L'homme est né libre, et partout il est dans les fers.", author: "Jean-Jacques Rousseau", life: "1712–1778", role: "Filozof", source: "Toplum Sözleşmesi, 1762" },
  { id: "hipokrat-sanat", tr: "Hayat kısa, sanat uzun.", orig: "Ὁ βίος βραχύς, ἡ δὲ τέχνη μακρή.", author: "Hipokrat", life: "MÖ 460–370", role: "Hekim", source: "Aforizmalar, I.1" },
  { id: "cicero-bahce-kutuphane", tr: "Bir bahçen ve bir kütüphanen varsa, hiçbir eksiğin yok demektir.", orig: "Si hortum in bibliotheca habes, deerit nihil.", author: "Cicero", life: "MÖ 106–43", role: "Devlet adamı, hatip", source: "Varro'ya mektup (Ad Familiares IX.4)" },
  { id: "epikuros-dostluk", tr: "Bilgeliğin bizi mutlu etmek için sunduğu şeylerin en büyüğü dostluktur.", author: "Epikuros", life: "MÖ 341–270", role: "Filozof", source: "Temel Öğretiler, 27" },
  { id: "bacon-bilgi-guc", tr: "Bilgi güçtür.", orig: "Ipsa scientia potestas est.", author: "Francis Bacon", life: "1561–1626", role: "Filozof, devlet adamı", source: "Meditationes Sacrae, 1597" },
  { id: "kierkegaard-geriye", tr: "Hayat ancak geriye bakarak anlaşılır, ama ileriye doğru yaşanmalıdır.", author: "Søren Kierkegaard", life: "1813–1855", role: "Filozof", source: "Günlükler, 1843" },
  { id: "schopenhauer-deha", tr: "Yetenek, kimsenin vuramadığı bir hedefi vurur; deha, kimsenin göremediği bir hedefi.", author: "Arthur Schopenhauer", life: "1788–1860", role: "Filozof", source: "İsteme ve Tasarım Olarak Dünya, II. cilt" },
  { id: "sokrates-bilmiyorum", tr: "Bildiğim tek şey, hiçbir şey bilmediğimdir.", author: "Sokrates", life: "MÖ 470–399", role: "Filozof", source: "Platon'un Savunma'sından yaygın aktarım, 21d" },
  { id: "suntzu-kendini-bil", tr: "Düşmanını ve kendini tanırsan, yüz savaşta bile tehlikeye düşmezsin.", orig: "知彼知己，百戰不殆", author: "Sun Tzu", life: "MÖ 544–496", role: "Komutan, düşünür", source: "Savaş Sanatı, 3. bölüm" },
  { id: "arsimet-dayanak", tr: "Bana bir dayanak noktası verin, dünyayı yerinden oynatayım.", author: "Arşimet", life: "MÖ 287–212", role: "Matematikçi, mucit", source: "İskenderiyeli Pappus'un aktarımı" },
  { id: "cehov-kisalik", tr: "Kısalık, yeteneğin kız kardeşidir.", orig: "Краткость — сестра таланта.", author: "Anton Çehov", life: "1860–1904", role: "Yazar", source: "Kardeşi Aleksandr'a mektup, 1889" },
  { id: "hegel-minerva", tr: "Minerva'nın baykuşu kanatlarını ancak alacakaranlık çökerken açar.", author: "G. W. F. Hegel", life: "1770–1831", role: "Filozof", source: "Hukuk Felsefesinin İlkeleri, 1820" },
  { id: "aurelius-mutluluk", tr: "Mutlu bir hayat için çok az şey gerekir; hepsi senin içinde, düşünme biçimindedir.", author: "Marcus Aurelius", life: "121–180", role: "Roma İmparatoru, filozof", source: "Kendime Düşünceler, VII.67" },
  { id: "seneca-erteleme", tr: "Biz ertelerken hayat akıp gider.", orig: "Dum differtur vita transcurrit.", author: "Seneca", life: "MÖ 4 – MS 65", role: "Stoacı filozof", source: "Lucilius'a Mektuplar, 1" },
  { id: "montaigne-ne-biliyorum", tr: "Ne biliyorum ki?", orig: "Que sais-je ?", author: "Michel de Montaigne", life: "1533–1592", role: "Yazar, filozof", source: "Denemeler, II.12" },
  { id: "aristoteles-egitim", tr: "Eğitimin kökleri acı, meyveleri tatlıdır.", author: "Aristoteles", life: "MÖ 384–322", role: "Filozof", source: "Diogenes Laertios'un aktarımı, V.18" },
  { id: "tolstoy-kendini", tr: "Herkes dünyayı değiştirmeyi düşünür, ama kimse kendini değiştirmeyi düşünmez.", author: "Lev Tolstoy", life: "1828–1910", role: "Yazar", source: "Üç Reform Yöntemi, 1900" },
];
