/* =========================================================
   LANGUAGES  (English / اردو / Deutsch)
   ---------------------------------------------------------
   English is whatever is written in index.html — keep editing
   it there as usual. This file holds only Urdu and German.

   TO CHANGE A TRANSLATION: edit the text below.

   TO TRANSLATE A NEW PIECE OF TEXT:
     1. Give its element a key in index.html:
          <p data-i18n="myKey">English text</p>
     2. Add   myKey: '...',   to both  ur  and  de  below.
   A key missing below simply shows the English text.

   Note: if you change English text in index.html, update the
   matching Urdu and German lines here too — they don't follow
   along on their own.

   The invitation opens in Urdu by default. Share a link that opens in
   another language by adding ?lang=en or ?lang=de to the address, e.g.
     https://abdulwasay1100.github.io/invitation/?lang=en
   To change the default, edit DEFAULT_LANG further down this file.
   ========================================================= */

const TRANSLATIONS = {

  /* ---------------- اردو ---------------- */
  ur: {
    title:              'آپ مدعو ہیں',
    tapToOpen:          '✦ کھولنے کے لیے ٹیپ کریں ✦',
    bismillahMeaning:   'شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے',
    quote:              'ہماری زندگی کا ایک خوبصورت باب شروع ہونے جا رہا ہے، اور آپ کی شرکت ہمارے لیے باعثِ اعزاز ہوگی۔',
    name1:              'عبدالواسع',
    name2:              'حدیقہ',
    scrollDown:         'نیچے سکرول کریں',

    host1:              'جناب خالد مسعود و اہلیہ',
    alongWith:          'اور',
    host2:              'جناب صابر خان و اہلیہ',
    withFamilies:       'اپنے اہلِ خانہ کے ہمراہ',
    invitesYou:         'آپ کو مدعو کرتے ہیں',
    toJoinUs:           'ہماری خوشیوں میں شرکت کے لیے',
    // Urdu puts "our son & daughter" before "the ceremony", so these two
    // lines swap meaning compared with the English.
    line1:              'اپنے پیارے بیٹے اور بیٹی کے',
    line2:              'نکاح و ولیمہ کی تقریب میں',
    line3:              'ہمیں خوشی ہوگی کہ آپ اس لمحے کے گواہ بنیں',
    line4:              'جب وہ کہیں',
    qabool:             '"قبول ہے"',

    saveTheDate:        'تاریخ یاد رکھیں',
    scratchToReveal:    'کھرچ کر دیکھیں',
    nikkahRukhsatiCaps: 'نکاح و رخصتی',
    date1:              '29 جنوری 2027',
    hijri1:             '21 شعبان 1448 ہجری',
    receptionCaps:      'ولیمہ',
    date2:              '31 جنوری 2027',
    hijri2:             '23 شعبان 1448 ہجری',

    momentApproaches:   'مبارک گھڑی قریب ہے',
    countdownTitle:     'نکاح میں باقی وقت',
    days:               'دن',
    hours:              'گھنٹے',
    minutes:            'منٹ',
    seconds:            'سیکنڈ',
    today:              'آج!',

    wordsTitle:         'اس نکاح کے بارے میں چند باتیں',
    words1:             'اسلام نے نکاح کو آسان اور سادہ رکھنے کی بنیاد دی۔ ہلکا پھلکا، بغیر کسی مشقت کے۔ وقت کے ساتھ ہمارے رسم و رواج اسے اس سادگی سے بہت دور لے گئے، اور اسے مشکل اور مہنگا بنا دیا۔',
    words2:             'نبی کریم محمد صلی اللہ علیہ وسلم نے فرمایا کہ نکاح دین کا آدھا حصہ مکمل کر دیتا ہے۔ باقی آدھا، میری سمجھ کے مطابق، یہ ہے کہ ہم ساتھ مل کر سیکھتے رہیں اور بہتر ہوتے رہیں۔',
    words3:             'یہ سفر صفر سے کچھ بنانے، مشکلات کا مل کر سامنا کرنے، اور چھوٹی چھوٹی کامیابیوں سے خوشی حاصل کرنے کا ہے۔ سامان کے لین دین کا نہیں۔',
    words4:             'دنیا بدل رہی ہے، اور ہمیں اپنے رواجوں پر دوبارہ سوچنا چاہیے تاکہ شادیاں آسان اور خوشیوں بھری ہوں۔',
    words5:             'اللہ تعالیٰ سب کے لیے آسانی فرمائے۔ آمین',

    nikkahRukhsati:     'نکاح و رخصتی',
    whenWhere:          'کب اور کہاں',
    nikkah:             'نکاح',
    nikkahTime:         'شام 5:00 بجے',
    nikkahNote:         'مسجد — جلد اعلان کیا جائے گا',
    dinner:             'عشائیہ',
    dinnerTime:         'رات 8:00 بجے',
    dinnerNote:         'بینکوئٹ ہال',
    rukhsati:           'رخصتی',
    rukhsatiTime:       'رات 10:00 بجے',
    rukhsatiNote:       'نیک تمناؤں اور دعاؤں کے ساتھ',
    venueVideo:         'ویڈیو میں مقام دیکھیں',
    venue:              'مقام',
    venueTba:           'جلد اعلان کیا جائے گا',
    venueNote:          'مقام کی تفصیلات جلد فراہم کی جائیں گی',

    walimaTitle:        'دعوتِ ولیمہ',
    reception:          'استقبال',
    receptionTime:      'سہ پہر 4:00 بجے',
    receptionNote:      'مہمانوں کی آمد اور استقبال',
    walimaDinner:       'عشائیہ',
    walimaDinnerTime:   'شام 7:00 بجے',
    walimaDinnerNote:   'پرتکلف عشائیہ',

    footerLine:         'ہم آپ کے ساتھ خوشیاں منانے کے منتظر ہیں۔',
    credit:             'ڈیجیٹل دعوت نامہ از: H&W Invites',
  },

  /* ---------------- Deutsch ---------------- */
  de: {
    title:              'Sie sind eingeladen',
    tapToOpen:          '✦ ZUM ÖFFNEN TIPPEN ✦',
    bismillahMeaning:   'Im Namen Allahs, des Allerbarmers, des Barmherzigen',
    quote:              'Ein wunderschönes Kapitel unseres Lebens beginnt – und es wäre uns eine Ehre, Sie dabei zu haben.',
    scrollDown:         'NACH UNTEN SCROLLEN',

    host1:              'Herr & Frau Khalid Masood',
    alongWith:          'GEMEINSAM MIT',
    host2:              'Herr & Frau Sabir Khan',
    withFamilies:       'und ihren Familien',
    invitesYou:         'Wir laden Sie herzlich ein',
    toJoinUs:           'UNS ZU BEGLEITEN',
    line1:              'bei der Nikkah- und Walima-Feier',
    line2:              'unseres geliebten Sohnes und unserer geliebten Tochter',
    line3:              'Es wäre uns eine Ehre, wenn Sie den Moment miterleben,',
    line4:              'in dem sie sagen:',
    qabool:             '„Qabool Hai“',

    saveTheDate:        'TERMIN VORMERKEN',
    scratchToReveal:    'Zum Aufdecken rubbeln',
    date1:              '29. Januar 2027',
    hijri1:             '21. Schaban 1448 n. H.',
    receptionCaps:      'EMPFANG',
    date2:              '31. Januar 2027',
    hijri2:             '23. Schaban 1448 n. H.',

    momentApproaches:   'DER GROSSE MOMENT NAHT',
    countdownTitle:     'Countdown zur Nikkah',
    days:               'TAGE',
    hours:              'STUNDEN',
    minutes:            'MINUTEN',
    seconds:            'SEKUNDEN',
    today:              'Heute!',

    wordsTitle:         'Ein paar Worte, bevor wir beginnen',
    words1:             'Der Islam hat die Ehe einfach und schlicht angelegt, leicht und ohne Mühsal. Mit der Zeit haben unsere Bräuche sie weit von dieser Schlichtheit entfernt und sie schwierig und teuer gemacht.',
    words2:             'Der Prophet Muhammad (Friede sei mit ihm) sagte, dass die Ehe die Hälfte des Glaubens vervollständigt. Die andere Hälfte ist, wie ich es verstehe, dass wir gemeinsam weiterlernen und bessere Menschen werden.',
    words3:             'Auf diesem Weg geht es darum, aus dem Nichts etwas aufzubauen, Schwierigkeiten gemeinsam zu tragen und sich über kleine Erfolge zu freuen, nicht um einen Austausch von Gütern.',
    words4:             'Die Welt verändert sich, und wir sollten unsere Bräuche überdenken, damit Hochzeiten einfach und voller Freude bleiben.',
    words5:             'Möge Allah es allen leicht machen. Amin',

    whenWhere:          'WANN & WO',
    nikkahTime:         '17:00 Uhr',
    nikkahNote:         'Moschee – wird noch bekannt gegeben',
    dinner:             'ABENDESSEN',
    dinnerTime:         '20:00 Uhr',
    dinnerNote:         'Festsaal',
    rukhsatiTime:       '22:00 Uhr',
    rukhsatiNote:       'Mit herzlichen Wünschen & Gebeten',
    venueVideo:         'Video vom Veranstaltungsort ansehen',
    venue:              'ORT',
    venueTba:           'Wird noch bekannt gegeben',
    venueNote:          'Details zum Ort folgen in Kürze',

    walimaTitle:        'Walima-Empfang',
    reception:          'EMPFANG',
    receptionTime:      '16:00 Uhr',
    receptionNote:      'Ankunft & Begrüßung der Gäste',
    walimaDinner:       'ABENDESSEN',
    walimaDinnerTime:   '19:00 Uhr',
    walimaDinnerNote:   'Festliches Abendessen',

    footerLine:         'Wir freuen uns darauf, mit Ihnen zu feiern.',
    credit:             'Digitale Einladung von: H&W Invites',
  },
};

/* ------------- nothing below needs editing ------------- */

const I18n = (() => {
  const LANGS = { en: 'ltr', de: 'ltr', ur: 'rtl' };
  const STORE_KEY = 'invite-lang';
  const titleEn = document.title;
  const known = lang => Object.prototype.hasOwnProperty.call(LANGS, lang);
  let current = 'en';

  // The English text of an element, captured the first time we see it.
  function english(el) {
    if (!('i18nEn' in el.dataset)) el.dataset.i18nEn = el.textContent;
    return el.dataset.i18nEn;
  }

  function t(key, fallback) {
    const table = TRANSLATIONS[current];
    return (table && table[key]) || fallback;
  }

  function apply(lang) {
    if (!known(lang)) lang = 'en';
    current = lang;

    const root = document.documentElement;
    root.lang = lang;
    root.dir = LANGS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n, english(el));
    });
    document.title = t('title', titleEn);

    document.querySelectorAll('#langSwitch [data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  // Urdu is the default. A visitor who picks a language keeps it (stored
  // below), and ?lang=en / ?lang=de in the address wins over both.
  const DEFAULT_LANG = 'ur';

  function initial() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (known(fromUrl)) return fromUrl;
    try { return localStorage.getItem(STORE_KEY) || DEFAULT_LANG; }
    catch (e) { return DEFAULT_LANG; }
  }

  document.querySelectorAll('#langSwitch [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => apply(btn.dataset.lang));
  });

  // Capture every element's English before the first language is applied.
  document.querySelectorAll('[data-i18n]').forEach(english);
  apply(initial());

  return { apply, t, get current() { return current; } };
})();
