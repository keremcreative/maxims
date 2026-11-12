/**
 * Söz listesi: disiplin, emek, başarı, kişisel gelişim.
 *
 * Kurallar:
 * - Kısa, motto gibi, insanı harekete geçiren sözler. Ağırlık günümüzden isimlerde
 *   (sporcular, girişimciler, yazarlar, liderler); birkaç klasik söz yeter.
 * - Yalnızca kaynağı belli sözler (kitap / konuşma / röportaj / film).
 *   Motivasyon sözleri internette en çok yanlış atfedilen tür; şunlar bilerek alınmadı:
 *   "Başarı son değildir..." (Churchill), "Hiç kaybetmem, ya kazanırım ya öğrenirim" (Mandela),
 *   "10.000 tekmeyi bir kez çalışan..." (Bruce Lee), "Antrenmanın her dakikasından nefret ettim" (Ali),
 *   "Mükemmellik bir alışkanlıktır" (Aristoteles değil, Will Durant).
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
  // Sporcular
  { id: "jordan-basarisiz", tr: "Hayatımda defalarca başarısız oldum. İşte bu yüzden başarılıyım.", orig: "I've failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan", life: "1963–", role: "Basketbolcu", source: "Nike reklamı, 1997" },
  { id: "gretzky-sut", tr: "Atmadığın şutların yüzde yüzünü kaçırırsın.", orig: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", life: "1961–", role: "Buz hokeyi efsanesi", source: "The Hockey News röportajı, 1983" },
  { id: "tyson-plan", tr: "Herkesin bir planı vardır, ta ki ağzına yumruğu yiyene kadar.", orig: "Everybody has a plan until they get punched in the mouth.", author: "Mike Tyson", life: "1966–", role: "Boksör", source: "Gazete röportajı, 1987" },
  { id: "senna-bosluk", tr: "Var olan bir boşluğa artık girmiyorsan, artık bir yarış pilotu değilsin.", orig: "If you no longer go for a gap that exists, you are no longer a racing driver.", author: "Ayrton Senna", life: "1960–1994", role: "Formula 1 şampiyonu", source: "Jackie Stewart röportajı, 1990" },
  { id: "bruce-lee-su", tr: "Zihnini boşalt. Şekilsiz ol, su gibi ol.", orig: "Empty your mind. Be formless, shapeless, like water.", author: "Bruce Lee", life: "1940–1973", role: "Dövüş sanatçısı, aktör", source: "Longstreet dizisi, 1971" },
  { id: "goggins-konfor", tr: "Öyle rahat bir hayat yaşama tehlikesindesin ki, gerçek potansiyelini hiç fark etmeden öleceksin.", orig: "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.", author: "David Goggins", life: "1975–", role: "Ultramaraton koşucusu, eski Navy SEAL", source: "Can't Hurt Me, 2018" },
  { id: "jocko-disiplin", tr: "Disiplin özgürlüktür.", orig: "Discipline equals freedom.", author: "Jocko Willink", life: "1971–", role: "Eski Navy SEAL komutanı", source: "Discipline Equals Freedom, 2017" },
  { id: "murakami-aci", tr: "Acı kaçınılmazdır. Istırap ise bir tercih.", orig: "Pain is inevitable. Suffering is optional.", author: "Haruki Murakami", life: "1949–", role: "Yazar, maratoncu", source: "Koşmasaydım Yazamazdım, 2007" },
  { id: "rocky-darbe", tr: "Mesele ne kadar sert vurduğun değil. Ne kadar sert darbe alıp ilerlemeye devam edebildiğin.", orig: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.", author: "Rocky Balboa", life: "Sylvester Stallone", role: "Film karakteri", source: "Rocky Balboa, 2006" },

  // Girişimciler ve bilim insanları
  { id: "jobs-sev", tr: "Harika iş çıkarmanın tek yolu, yaptığın işi sevmektir.", orig: "The only way to do great work is to love what you do.", author: "Steve Jobs", life: "1955–2011", role: "Apple'ın kurucusu", source: "Stanford mezuniyet konuşması, 2005" },
  { id: "jobs-zaman", tr: "Zamanın sınırlı; onu başkasının hayatını yaşayarak harcama.", orig: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", life: "1955–2011", role: "Apple'ın kurucusu", source: "Stanford mezuniyet konuşması, 2005" },
  { id: "jobs-ac-kal", tr: "Aç kal, budala kal.", orig: "Stay hungry. Stay foolish.", author: "Steve Jobs", life: "1955–2011", role: "Apple'ın kurucusu", source: "Stanford mezuniyet konuşması, 2005" },
  { id: "ford-inan", tr: "Yapabileceğine de inansan, yapamayacağına da inansan, haklısın.", orig: "Whether you believe you can do a thing or not, you are right.", author: "Henry Ford", life: "1863–1947", role: "Ford'un kurucusu", source: "Reader's Digest, 1947" },
  { id: "edison-ter", tr: "Dahilik yüzde bir ilham, yüzde doksan dokuz terdir.", orig: "Genius is one per cent inspiration, ninety-nine per cent perspiration.", author: "Thomas Edison", life: "1847–1931", role: "Mucit", source: "Harper's Monthly röportajı, 1932" },
  { id: "hawking-zor", tr: "Hayat ne kadar zor görünürse görünsün, yapabileceğin ve başarabileceğin bir şey mutlaka vardır.", orig: "However difficult life may seem, there is always something you can do and succeed at.", author: "Stephen Hawking", life: "1942–2018", role: "Fizikçi", source: "Royal Institution konferansı, 2016" },
  { id: "einstein-bisiklet", tr: "Hayat bisiklete binmek gibidir. Dengeni korumak için hareket etmeye devam etmelisin.", orig: "Life is like riding a bicycle. To keep your balance you must keep moving.", author: "Albert Einstein", life: "1879–1955", role: "Fizikçi", source: "Oğlu Eduard'a mektup, 1930" },
  { id: "armstrong-adim", tr: "Bu, bir insan için küçük, insanlık için dev bir adım.", orig: "That's one small step for man, one giant leap for mankind.", author: "Neil Armstrong", life: "1930–2012", role: "Ay'a ilk ayak basan insan", source: "Apollo 11, 1969" },

  // Liderler
  { id: "churchill-pes-etme", tr: "Asla pes etmeyin. Asla, asla, asla.", orig: "Never give in, never give in, never, never, never.", author: "Winston Churchill", life: "1874–1965", role: "İngiltere Başbakanı", source: "Harrow Okulu konuşması, 1941" },
  { id: "kennedy-zor", tr: "Bunları kolay oldukları için değil, zor oldukları için yapmayı seçiyoruz.", orig: "We choose to go to the Moon... not because they are easy, but because they are hard.", author: "John F. Kennedy", life: "1917–1963", role: "ABD Başkanı", source: "Rice Üniversitesi konuşması, 1962" },
  { id: "mlk-ilerle", tr: "Uçamıyorsan koş, koşamıyorsan yürü, yürüyemiyorsan sürün; ama ne yaparsan yap, ilerlemeye devam et.", orig: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", author: "Martin Luther King Jr.", life: "1929–1968", role: "Sivil haklar lideri", source: "Spelman Koleji konuşması, 1967" },
  { id: "mandela-cesaret", tr: "Cesaretin korkunun yokluğu değil, ona karşı kazanılan zafer olduğunu öğrendim.", orig: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela", life: "1918–2013", role: "Güney Afrika Devlet Başkanı", source: "Özgürlüğe Giden Uzun Yol, 1994" },
  { id: "roosevelt-arena", tr: "Övgü, gerçekten arenada olana aittir; yüzü toz, ter ve kanla kaplı olana.", orig: "The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood.", author: "Theodore Roosevelt", life: "1858–1919", role: "ABD Başkanı", source: "Sorbonne konuşması, 1910" },
  { id: "roosevelt-calisma", tr: "Hayatın sunduğu en büyük ödül, yapmaya değer bir iş için çok çalışma fırsatıdır.", orig: "Far and away the best prize that life offers is the chance to work hard at work worth doing.", author: "Theodore Roosevelt", life: "1858–1919", role: "ABD Başkanı", source: "İşçi Bayramı konuşması, 1903" },
  { id: "ataturk-kudret", tr: "Muhtaç olduğun kudret, damarlarındaki asil kanda mevcuttur.", author: "Mustafa Kemal Atatürk", life: "1881–1938", role: "Türkiye Cumhuriyeti'nin kurucusu", source: "Gençliğe Hitabe, 1927" },
  { id: "ataturk-ilim", tr: "Hayatta en hakiki mürşit ilimdir.", author: "Mustafa Kemal Atatürk", life: "1881–1938", role: "Türkiye Cumhuriyeti'nin kurucusu", source: "Samsun öğretmenlerine konuşma, 1924" },

  // Yazarlar ve düşünürler (modern)
  { id: "frankl-degis", tr: "Bir durumu artık değiştiremiyorsak, kendimizi değiştirmeye zorlanırız.", orig: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl", life: "1905–1997", role: "Psikiyatrist, toplama kampı hayatta kalanı", source: "İnsanın Anlam Arayışı, 1946" },
  { id: "camus-yaz", tr: "Kışın ortasında, içimde yenilmez bir yaz olduğunu keşfettim.", orig: "Au milieu de l'hiver, j'apprenais enfin qu'il y avait en moi un été invincible.", author: "Albert Camus", life: "1913–1960", role: "Yazar, Nobel ödüllü", source: "Tipasa'ya Dönüş, 1952" },
  { id: "hemingway-kirik", tr: "Dünya herkesi kırar; sonra çoğu, kırıldığı yerden güçlenir.", orig: "The world breaks everyone and afterward many are strong at the broken places.", author: "Ernest Hemingway", life: "1899–1961", role: "Yazar, Nobel ödüllü", source: "Silahlara Veda, 1929" },
  { id: "bukowski-ates", tr: "Asıl önemli olan, ateşin içinden nasıl yürüdüğündür.", orig: "What matters most is how well you walk through the fire.", author: "Charles Bukowski", life: "1920–1994", role: "Şair, yazar", source: "How Is Your Heart?, şiir" },
  { id: "beckett-daha-iyi", tr: "Hep denedin. Hep yenildin. Önemi yok. Yine dene. Yine yenil. Daha iyi yenil.", orig: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.", author: "Samuel Beckett", life: "1906–1989", role: "Yazar, Nobel ödüllü", source: "Worstward Ho, 1983" },
  { id: "keller-macera", tr: "Hayat ya cesur bir maceradır ya da hiçbir şey.", orig: "Life is either a daring adventure or nothing.", author: "Helen Keller", life: "1880–1968", role: "Yazar, aktivist", source: "Açık Kapı, 1957" },
  { id: "tolkien-zaman", tr: "Karar vermemiz gereken tek şey, bize verilen zamanla ne yapacağımız.", orig: "All we have to decide is what to do with the time that is given us.", author: "J. R. R. Tolkien", life: "1892–1973", role: "Yazar", source: "Yüzüklerin Efendisi: Yüzük Kardeşliği, 1954" },
  { id: "yoda-dene", tr: "Yap ya da yapma. Denemek diye bir şey yok.", orig: "Do. Or do not. There is no try.", author: "Yoda", life: "Star Wars", role: "Film karakteri", source: "Star Wars: İmparator'un Dönüşü, 1980" },
  { id: "nazim-ciddiyet", tr: "Yaşamak şakaya gelmez, büyük bir ciddiyetle yaşayacaksın.", author: "Nâzım Hikmet", life: "1902–1963", role: "Şair", source: "Yaşamaya Dair, 1948" },
  { id: "vangogh-ses", tr: "İçinden bir ses 'resim yapamazsın' diyorsa, o zaman mutlaka resim yap; o ses susacaktır.", orig: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", author: "Vincent van Gogh", life: "1853–1890", role: "Ressam", source: "Kardeşi Theo'ya mektup, 1883" },
  { id: "vangogh-kucuk", tr: "Büyük işler, bir araya getirilmiş küçük işlerden oluşur.", orig: "Great things are done by a series of small things brought together.", author: "Vincent van Gogh", life: "1853–1890", role: "Ressam", source: "Kardeşi Theo'ya mektup, 1882" },
  { id: "nietzsche-oldurmeyen", tr: "Beni öldürmeyen şey güçlendirir.", orig: "Was mich nicht umbringt, macht mich stärker.", author: "Friedrich Nietzsche", life: "1844–1900", role: "Filozof", source: "Putların Alacakaranlığı, 1889" },
  { id: "nietzsche-nicin", tr: "Yaşamak için bir nedeni olan, hemen her nasıla katlanabilir.", orig: "Hat man sein warum? des Lebens, so verträgt man sich fast mit jedem wie?", author: "Friedrich Nietzsche", life: "1844–1900", role: "Filozof", source: "Putların Alacakaranlığı, 1889" },

  // Az sayıda klasik
  { id: "seneca-erteleme", tr: "Biz ertelerken hayat akıp gider.", orig: "Dum differtur vita transcurrit.", author: "Seneca", life: "MÖ 4 – MS 65", role: "Stoacı filozof", source: "Lucilius'a Mektuplar, 1" },
  { id: "aurelius-engel", tr: "Yolun önündeki engel, yolun kendisi olur.", author: "Marcus Aurelius", life: "121–180", role: "Roma İmparatoru", source: "Kendime Düşünceler, V.20" },
  { id: "aurelius-sabah", tr: "Sabah kalkmakta zorlandığında kendine şunu söyle: Bir insanın işini yapmak için kalkıyorum.", author: "Marcus Aurelius", life: "121–180", role: "Roma İmparatoru", source: "Kendime Düşünceler, V.1" },
  { id: "vergilius-emek", tr: "Emek her şeyi yener.", orig: "Labor omnia vincit.", author: "Vergilius", life: "MÖ 70–19", role: "Şair", source: "Georgica, I.145" },
  { id: "franklin-zaman", tr: "Hayatı seviyor musun? O halde zamanı boşa harcama; hayat ondan yapılmıştır.", orig: "Dost thou love life? Then do not squander time, for that's the stuff life is made of.", author: "Benjamin Franklin", life: "1706–1790", role: "Bilim insanı, devlet adamı", source: "Poor Richard's Almanack, 1746" },
];
