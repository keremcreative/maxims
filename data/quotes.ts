/**
 * Söz listesi: disiplin, emek, başarı, kişisel gelişim.
 *
 * Kurallar:
 * - Kısa, motto gibi, insanı harekete geçiren sözler.
 * - Yalnızca kaynağı belli, gerçekten o kişiye ait sözler (eser / mektup / konuşma / röportaj).
 *   Motivasyon sözleri internette en çok yanlış atfedilen tür; şunlar bilerek alınmadı:
 *   "Başarı son değildir..." (Churchill), "Ne kadar yavaş gittiğin önemli değil..." (Konfüçyüs),
 *   "Mükemmellik bir alışkanlıktır" (Aristoteles değil, Will Durant), "Şans hazırlıkla fırsatın buluşmasıdır" (Seneca).
 * - `tr` duvar kağıdına yazılan Türkçe metin, `orig` özgün dildeki hali, `source` nereden geldiği.
 * - Yeni söz eklerken id'yi benzersiz tut.
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
  // Başlamak ve ertelememek
  { id: "seneca-erteleme", tr: "Biz ertelerken hayat akıp gider.", orig: "Dum differtur vita transcurrit.", author: "Seneca", life: "MÖ 4 – MS 65", role: "Stoacı filozof", source: "Lucilius'a Mektuplar, 1" },
  { id: "horatius-baslayan", tr: "Başlayan, işin yarısını bitirmiştir.", orig: "Dimidium facti qui coepit habet.", author: "Horatius", life: "MÖ 65–8", role: "Şair", source: "Mektuplar, I.2" },
  { id: "laozi-bin-mil", tr: "Bin millik yolculuk tek bir adımla başlar.", orig: "千里之行，始於足下", author: "Lao Tzu", life: "MÖ 6. yy", role: "Filozof", source: "Tao Te Ching, 64. bölüm" },
  { id: "platon-baslangic", tr: "Başlangıç, işin en önemli parçasıdır.", orig: "ἀρχὴ παντὸς ἔργου μέγιστον", author: "Platon", life: "MÖ 427–347", role: "Filozof", source: "Devlet, 377a" },
  { id: "horatius-carpe-diem", tr: "Anı yakala.", orig: "Carpe diem.", author: "Horatius", life: "MÖ 65–8", role: "Şair", source: "Odlar, I.11" },
  { id: "epiktetos-ne-zamana", tr: "Kendinden en iyisini istemeyi daha ne kadar erteleyeceksin?", author: "Epiktetos", life: "50–135", role: "Stoacı filozof", source: "Enkheiridion, 51" },
  { id: "aurelius-sabah", tr: "Sabah kalkmakta zorlandığında kendine şunu söyle: Bir insanın işini yapmak için kalkıyorum.", author: "Marcus Aurelius", life: "121–180", role: "Roma İmparatoru", source: "Kendime Düşünceler, V.1" },
  { id: "franklin-zaman", tr: "Hayatı seviyor musun? O halde zamanı boşa harcama; hayat ondan yapılmıştır.", orig: "Dost thou love life? Then do not squander time, for that's the stuff life is made of.", author: "Benjamin Franklin", life: "1706–1790", role: "Bilim insanı, devlet adamı", source: "Poor Richard's Almanack, 1746" },
  { id: "franklin-kayip-zaman", tr: "Kaybedilen zaman bir daha asla bulunmaz.", orig: "Lost time is never found again.", author: "Benjamin Franklin", life: "1706–1790", role: "Bilim insanı, devlet adamı", source: "Poor Richard's Almanack, 1748" },
  { id: "jobs-zaman", tr: "Zamanın sınırlı; onu başkasının hayatını yaşayarak harcama.", orig: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", life: "1955–2011", role: "Apple'ın kurucusu", source: "Stanford mezuniyet konuşması, 2005" },

  // Emek ve disiplin
  { id: "vergilius-emek", tr: "Emek her şeyi yener.", orig: "Labor omnia vincit.", author: "Vergilius", life: "MÖ 70–19", role: "Şair", source: "Georgica, I.145" },
  { id: "edison-ter", tr: "Dahilik yüzde bir ilham, yüzde doksan dokuz terdir.", orig: "Genius is one per cent inspiration, ninety-nine per cent perspiration.", author: "Thomas Edison", life: "1847–1931", role: "Mucit", source: "Harper's Monthly röportajı, 1932" },
  { id: "ovidius-damla", tr: "Damla damla su, taşı deler.", orig: "Gutta cavat lapidem.", author: "Ovidius", life: "MÖ 43 – MS 17", role: "Şair", source: "Pontus'tan Mektuplar, IV.10" },
  { id: "vangogh-kucuk", tr: "Büyük işler, bir araya getirilmiş küçük işlerden oluşur.", orig: "Great things are done by a series of small things brought together.", author: "Vincent van Gogh", life: "1853–1890", role: "Ressam", source: "Kardeşi Theo'ya mektup, 1882" },
  { id: "aristoteles-yaparak", tr: "Adil işler yaparak adil, cesur işler yaparak cesur oluruz.", author: "Aristoteles", life: "MÖ 384–322", role: "Filozof", source: "Nikomakhos'a Etik, II.1" },
  { id: "aristoteles-egitim", tr: "Eğitimin kökleri acı, meyveleri tatlıdır.", author: "Aristoteles", life: "MÖ 384–322", role: "Filozof", source: "Diogenes Laertios'un aktarımı, V.18" },
  { id: "franklin-tembellik", tr: "Tembellik pas gibidir; emekten çok daha hızlı aşındırır.", orig: "Sloth, like rust, consumes faster than labour wears.", author: "Benjamin Franklin", life: "1706–1790", role: "Bilim insanı, devlet adamı", source: "Poor Richard's Almanack, 1744" },
  { id: "leonardo-demir", tr: "Demir kullanılmazsa paslanır; hareketsizlik de zihnin gücünü öyle tüketir.", author: "Leonardo da Vinci", life: "1452–1519", role: "Ressam, mucit", source: "Codex Atlanticus" },
  { id: "franklin-iyi-yapilmis", tr: "İyi yapılmış, iyi söylenmişten daha iyidir.", orig: "Well done is better than well said.", author: "Benjamin Franklin", life: "1706–1790", role: "Bilim insanı, devlet adamı", source: "Poor Richard's Almanack, 1737" },
  { id: "roosevelt-calisma", tr: "Hayatın sunduğu en büyük ödül, yapmaya değer bir iş için çok çalışma fırsatıdır.", orig: "Far and away the best prize that life offers is the chance to work hard at work worth doing.", author: "Theodore Roosevelt", life: "1858–1919", role: "ABD Başkanı", source: "İşçi Bayramı konuşması, 1903" },
  { id: "ezop-yavas", tr: "Yavaş ama istikrarlı olan yarışı kazanır.", orig: "Slow but steady wins the race.", author: "Ezop", life: "MÖ 620–564", role: "Masalcı", source: "Kaplumbağa ile Tavşan masalı" },
  { id: "goethe-yapmak", tr: "Bilmek yetmez, uygulamalıyız. İstemek yetmez, yapmalıyız.", orig: "Es ist nicht genug zu wissen, man muß auch anwenden; es ist nicht genug zu wollen, man muß auch tun.", author: "Goethe", life: "1749–1832", role: "Şair, yazar", source: "Wilhelm Meister'in Gezi Yılları, 1829" },
  { id: "voltaire-mukemmel", tr: "Mükemmel, iyinin düşmanıdır.", orig: "Le mieux est l'ennemi du bien.", author: "Voltaire", life: "1694–1778", role: "Yazar, filozof", source: "Felsefe Sözlüğü, 1764" },

  // Kendini yenmek
  { id: "platon-kendini-yenmek", tr: "İlk ve en büyük zafer, insanın kendini yenmesidir.", author: "Platon", life: "MÖ 427–347", role: "Filozof", source: "Yasalar, 626e" },
  { id: "laozi-kendini-yenen", tr: "Başkalarını yenen güçlüdür; kendini yenen gerçekten kudretlidir.", orig: "勝人者有力，自勝者強", author: "Lao Tzu", life: "MÖ 6. yy", role: "Filozof", source: "Tao Te Ching, 33. bölüm" },
  { id: "herakleitos-karakter", tr: "Karakter, insanın kaderidir.", orig: "ἦθος ἀνθρώπῳ δαίμων", author: "Herakleitos", life: "MÖ 535–475", role: "Filozof", source: "Fragman B119" },
  { id: "epiktetos-ne-olmak", tr: "Önce ne olmak istediğini kendine söyle, sonra yapman gerekeni yap.", author: "Epiktetos", life: "50–135", role: "Stoacı filozof", source: "Söylevler, III.23" },
  { id: "aurelius-iyi-insan", tr: "İyi bir insanın nasıl olması gerektiğini tartışmayı bırak. İyi insan ol.", author: "Marcus Aurelius", life: "121–180", role: "Roma İmparatoru", source: "Kendime Düşünceler, X.16" },
  { id: "tolstoy-kendini", tr: "Herkes dünyayı değiştirmeyi düşünür, ama kimse kendini değiştirmeyi düşünmez.", author: "Lev Tolstoy", life: "1828–1910", role: "Yazar", source: "Üç Reform Yöntemi, 1900" },
  { id: "konfucyus-hata", tr: "Hata yapıp onu düzeltmemek, asıl hatadır.", orig: "過而不改，是謂過矣", author: "Konfüçyüs", life: "MÖ 551–479", role: "Filozof", source: "Konuşmalar (Analektler), 15.30" },

  // Zorluk, engel, yenilgi
  { id: "aurelius-engel", tr: "Yolun önündeki engel, yolun kendisi olur.", author: "Marcus Aurelius", life: "121–180", role: "Roma İmparatoru", source: "Kendime Düşünceler, V.20" },
  { id: "seneca-cesaret", tr: "Zor oldukları için cesaret edemediğimiz şeyler yok; cesaret edemediğimiz için zor olan şeyler var.", orig: "Non quia difficilia sunt non audemus, sed quia non audemus, difficilia sunt.", author: "Seneca", life: "MÖ 4 – MS 65", role: "Stoacı filozof", source: "Lucilius'a Mektuplar, 104" },
  { id: "nietzsche-oldurmeyen", tr: "Beni öldürmeyen şey güçlendirir.", orig: "Was mich nicht umbringt, macht mich stärker.", author: "Friedrich Nietzsche", life: "1844–1900", role: "Filozof", source: "Putların Alacakaranlığı, 1889" },
  { id: "nietzsche-nicin", tr: "Yaşamak için bir nedeni olan, hemen her nasıla katlanabilir.", orig: "Hat man sein warum? des Lebens, so verträgt man sich fast mit jedem wie?", author: "Friedrich Nietzsche", life: "1844–1900", role: "Filozof", source: "Putların Alacakaranlığı, 1889" },
  { id: "beckett-daha-iyi", tr: "Hep denedin. Hep yenildin. Önemi yok. Yine dene. Yine yenil. Daha iyi yenil.", orig: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.", author: "Samuel Beckett", life: "1906–1989", role: "Yazar, Nobel ödüllü", source: "Worstward Ho, 1983" },
  { id: "jordan-basarisiz", tr: "Hayatımda defalarca başarısız oldum. İşte bu yüzden başarılıyım.", orig: "I've failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan", life: "1963–", role: "Basketbolcu", source: "Nike reklamı, 1997" },
  { id: "gretzky-sut", tr: "Atmadığın şutların yüzde yüzünü kaçırırsın.", orig: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", life: "1961–", role: "Buz hokeyi efsanesi", source: "The Hockey News röportajı, 1983" },
  { id: "churchill-pes-etme", tr: "Asla pes etmeyin. Asla, asla, asla.", orig: "Never give in, never give in, never, never, never.", author: "Winston Churchill", life: "1874–1965", role: "İngiltere Başbakanı", source: "Harrow Okulu konuşması, 1941" },
  { id: "douglass-mucadele", tr: "Mücadele yoksa ilerleme de yoktur.", orig: "If there is no struggle, there is no progress.", author: "Frederick Douglass", life: "1818–1895", role: "Yazar, hak savunucusu", source: "Batı Hindistan Özgürlük konuşması, 1857" },
  { id: "roosevelt-arena", tr: "Övgü, gerçekten arenada olana aittir; yüzü toz, ter ve kanla kaplı olana.", orig: "The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood.", author: "Theodore Roosevelt", life: "1858–1919", role: "ABD Başkanı", source: "Bir Cumhuriyette Vatandaşlık, Sorbonne, 1910" },
  { id: "spinoza-nadir", tr: "Bütün yüce şeyler, ender oldukları kadar zordur.", orig: "Sed omnia praeclara tam difficilia quam rara sunt.", author: "Baruch Spinoza", life: "1632–1677", role: "Filozof", source: "Etika, V. kısım" },
  { id: "einstein-bisiklet", tr: "Hayat bisiklete binmek gibidir. Dengeni korumak için hareket etmeye devam etmelisin.", orig: "Life is like riding a bicycle. To keep your balance you must keep moving.", author: "Albert Einstein", life: "1879–1955", role: "Fizikçi", source: "Oğlu Eduard'a mektup, 1930" },

  // İnanmak ve cesaret
  { id: "vergilius-inanirlar", tr: "Yapabileceklerine inandıkları için yapabilirler.", orig: "Possunt quia posse videntur.", author: "Vergilius", life: "MÖ 70–19", role: "Şair", source: "Aeneis, V.231" },
  { id: "ford-inan", tr: "Yapabileceğine de inansan, yapamayacağına da inansan, haklısın.", orig: "Whether you believe you can do a thing or not, you are right.", author: "Henry Ford", life: "1863–1947", role: "Ford'un kurucusu", source: "Reader's Digest, 1947" },
  { id: "vangogh-ses", tr: "İçinden bir ses 'resim yapamazsın' diyorsa, o zaman mutlaka resim yap; o ses susacaktır.", orig: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", author: "Vincent van Gogh", life: "1853–1890", role: "Ressam", source: "Kardeşi Theo'ya mektup, 1883" },
  { id: "keller-macera", tr: "Hayat ya cesur bir maceradır ya da hiçbir şey.", orig: "Life is either a daring adventure or nothing.", author: "Helen Keller", life: "1880–1968", role: "Yazar, aktivist", source: "Açık Kapı, 1957" },
  { id: "seneca-liman", tr: "Hangi limana gideceğini bilmeyene hiçbir rüzgâr yardım etmez.", orig: "Ignoranti quem portum petat nullus suus ventus est.", author: "Seneca", life: "MÖ 4 – MS 65", role: "Stoacı filozof", source: "Lucilius'a Mektuplar, 71" },
  { id: "thoreau-hayaller", tr: "Hayallerinin yönünde kendinden emin ilerleyen, hiç beklemediği bir başarıyla karşılaşır.", orig: "If one advances confidently in the direction of his dreams… he will meet with a success unexpected in common hours.", author: "Henry David Thoreau", life: "1817–1862", role: "Yazar, filozof", source: "Walden, 1854" },
  { id: "emerson-heves", tr: "Hiçbir büyük şey heves olmadan başarılmamıştır.", orig: "Nothing great was ever achieved without enthusiasm.", author: "Ralph Waldo Emerson", life: "1803–1882", role: "Yazar, filozof", source: "Çemberler, 1841" },
  { id: "jobs-ac-kal", tr: "Aç kal, budala kal.", orig: "Stay hungry. Stay foolish.", author: "Steve Jobs", life: "1955–2011", role: "Apple'ın kurucusu", source: "Stanford mezuniyet konuşması, 2005" },
  { id: "kant-sapere-aude", tr: "Kendi aklını kullanma cesaretini göster!", orig: "Sapere aude!", author: "Immanuel Kant", life: "1724–1804", role: "Filozof", source: "Aydınlanma Nedir?, 1784" },
  { id: "sezar-veni", tr: "Geldim, gördüm, yendim.", orig: "Veni, vidi, vici.", author: "Jül Sezar", life: "MÖ 100–44", role: "Roma komutanı", source: "Zela zaferi sonrası, MÖ 47 (Plutarkhos'un aktarımı)" },
  { id: "sezar-zar", tr: "Zar atıldı.", orig: "Alea iacta est.", author: "Jül Sezar", life: "MÖ 100–44", role: "Roma komutanı", source: "Rubicon'u geçerken, MÖ 49 (Suetonius'un aktarımı)" },
  { id: "napolyon-imkansiz", tr: "İmkânsız, Fransızca bir kelime değildir.", orig: "Impossible n'est pas français.", author: "Napolyon Bonapart", life: "1769–1821", role: "Fransız İmparatoru", source: "General Lemarois'ya mektup, 1813" },
  { id: "arsimet-dayanak", tr: "Bana bir dayanak noktası verin, dünyayı yerinden oynatayım.", author: "Arşimet", life: "MÖ 287–212", role: "Matematikçi, mucit", source: "İskenderiyeli Pappus'un aktarımı" },
  { id: "bacon-bilgi-guc", tr: "Bilgi güçtür.", orig: "Ipsa scientia potestas est.", author: "Francis Bacon", life: "1561–1626", role: "Filozof, devlet adamı", source: "Meditationes Sacrae, 1597" },
  { id: "wilde-yildizlar", tr: "Hepimiz çamurun içindeyiz ama bazılarımız yıldızlara bakıyor.", orig: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde", life: "1854–1900", role: "Yazar", source: "Lady Windermere'in Yelpazesi, 1892" },

  // Türkçe
  { id: "ataturk-kudret", tr: "Muhtaç olduğun kudret, damarlarındaki asil kanda mevcuttur.", author: "Mustafa Kemal Atatürk", life: "1881–1938", role: "Türkiye Cumhuriyeti'nin kurucusu", source: "Gençliğe Hitabe, 1927" },
  { id: "ataturk-ilim", tr: "Hayatta en hakiki mürşit ilimdir.", author: "Mustafa Kemal Atatürk", life: "1881–1938", role: "Türkiye Cumhuriyeti'nin kurucusu", source: "Samsun öğretmenlerine konuşma, 1924" },
  { id: "nazim-ciddiyet", tr: "Yaşamak şakaya gelmez, büyük bir ciddiyetle yaşayacaksın.", author: "Nâzım Hikmet", life: "1902–1963", role: "Şair", source: "Yaşamaya Dair, 1948" },
];
