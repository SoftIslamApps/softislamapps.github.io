(function () {
  "use strict";

  var STORAGE_LANG = "softislam-lang";
  var STORAGE_THEME = "softislam-theme";

  var translations = {
    en: {
      "meta.title": "SoftIslam — Thoughtfully Crafted Islamic Apps | Quran Mushaf, Adhan & TV",
      "meta.description": "Discover SoftIslam's suite of distraction-free, privacy-first Islamic applications: Quran Mushaf (Available now on Android), Adhan Prayer Times, and Adhan TV.",
      "nav.apps": "Our Apps",
      "nav.mushaf": "Quran Mushaf",
      "nav.adhanMobile": "Adhan Mobile",
      "nav.adhanTv": "Adhan TV",
      "nav.values": "Our Values",
      "header.cta": "Get Quran Mushaf",
      "header.mobileToggle": "Toggle navigation menu",
      "lang.toggleLabel": "Switch language",
      "theme.toggleLabel": "Switch theme",
      "hero.bismillah": "Bismillah ar-Rahman ar-Rahim",
      "hero.headline": "Thoughtfully Crafted Islamic Apps for Daily Worship",
      "hero.subhead": "Distraction-free, privacy-first applications engineered for genuine spiritual focus. Read the Holy Quran with authentic Uthmani script and stay anchored to your daily prayers across mobile, TV, and desktop.",
      "hero.ctaDownload": "Download Quran Mushaf",
      "hero.ctaUpcoming": "View Upcoming Apps",
      "trust.adFree": "100% Ad-Free & Pure",
      "trust.privacy": "Zero Tracking · Total Privacy",
      "trust.offline": "Offline-First Reliability",
      "trust.scholarly": "Authentic Scholarly Sources",
      "apps.kicker": "Software Suite",
      "apps.title": "Crafted for Worship Across Every Screen",
      "apps.desc": "From personal mobile recitation to big screen ambient prayer displays for your home or mosque.",
      "mushaf.badge": "AVAILABLE NOW ON ANDROID · DESKTOP IN PROGRESS",
      "mushaf.title": "Quran Mushaf",
      "mushaf.desc": "An authentic, serene Quran reading application featuring true Uthmani script, high-resolution pages, verse-by-verse recitation audio, and a completely distraction-free reading sanctuary.",
      "mushaf.feat1.strong": "Authentic Uthmani Script:",
      "mushaf.feat1.text": "Clear Madani calligraphy with meticulously placed vowel markings (Harakat) and Tajweed clarity.",
      "mushaf.feat2.strong": "Pure Reading Sanctuary:",
      "mushaf.feat2.text": "Completely free from ads, banners, commercial tracking, or interruptions.",
      "mushaf.feat3.strong": "Intuitive Surah & Juz Navigation:",
      "mushaf.feat3.text": "Instant search, bookmarking, and page-flipping designed for fluid recitation.",
      "mushaf.feat4.strong": "Offline Accessibility:",
      "mushaf.feat4.text": "Access the complete holy text and your bookmarks anytime, without needing an internet connection.",
      "mushaf.desktopSoon": "Desktop (macOS / Windows / Linux) — ",
      "mushaf.comingSoon": "Coming soon",
      "adhanMobile.badge": "MOBILE · COMING SOON",
      "adhanMobile.title": "Adhan Prayer Times",
      "adhanMobile.desc": "An elegant, highly accurate prayer times companion for mobile. Provides precise calculation methods worldwide, custom adhan calls, Qibla direction, and battery-efficient background scheduling.",
      "adhanMobile.feat1.strong": "Scholarly Calculation Methods:",
      "adhanMobile.feat1.text": "Supports Umm al-Qura, ISNA, MWL, Egyptian, Karachi, and custom angles.",
      "adhanMobile.feat2.strong": "Harmonious Audio Adhans:",
      "adhanMobile.feat2.text": "Authentic Muezzin recordings from Makkah, Madinah, and Al-Aqsa.",
      "adhanMobile.feat3.strong": "Precise Qibla Compass:",
      "adhanMobile.feat3.text": "Real-time direction with magnetic declination correction.",
      "adhanMobile.footer": "iOS & Android Mobile — ",
      "adhanTv.badge": "BIG SCREEN · COMING SOON",
      "adhanTv.title": "Adhan TV",
      "adhanTv.desc": "Transform your smart TV into an ambient, serene prayer clock for your household, community space, or musalla. Displays prayer schedules, upcoming prayer countdown, and automatic adhan playback.",
      "adhanTv.feat1.strong": "Ambient Living Room Display:",
      "adhanTv.feat1.text": "Subtle animations and tranquil day-to-night lighting adapted for TV screens.",
      "adhanTv.feat2.strong": "Clear Room-Wide Legibility:",
      "adhanTv.feat2.text": "High contrast typographic timetable readable from across large rooms.",
      "adhanTv.feat3.strong": "OLED Burn-in Protection:",
      "adhanTv.feat3.text": "Intelligent pixel micro-shifting designed for all-day TV displays.",
      "adhanTv.footer": "Android TV / Apple TV / Fire TV — ",
      "values.kicker": "Our Philosophy",
      "values.title": "Built with Reverence & Digital Integrity",
      "values.desc": "We build technology as an act of service, putting spiritual focus and privacy above commercial monetization.",
      "values.card1.title": "Zero Advertisements",
      "values.card1.desc": "No commercial banners, popups, or video ads inside sacred moments. Your Quran recitation and prayer reminders remain pure.",
      "values.card2.title": "Strict Privacy",
      "values.card2.desc": "No location telemetry harvesting, no behavioral profiling, and no selling of user data. All prayer calculations happen on-device.",
      "values.card3.title": "Scholarly Accuracy",
      "values.card3.desc": "Quranic scripts and calculation parameters are cross-referenced with established Islamic authorities and standards.",
      "values.card4.title": "Modern Engineering",
      "values.card4.desc": "Fast, battery-efficient, and responsive software built with modern performance standards for mobile, desktop, and TV.",
      "cta.headline": "Experience Quran Mushaf Today",
      "cta.subhead": "Join Muslims reading the Holy Quran with authentic Uthmani calligraphy on Android. Completely free and ad-free.",
      "footer.desc": "Dedicated to crafting purposeful, distraction-free Islamic software. Empowering Muslims worldwide with digital tools for worship, study, and daily remembrance.",
      "footer.applications": "Applications",
      "footer.mushafAndroid": "Quran Mushaf (Android)",
      "footer.mushafDesktop": "Quran Mushaf (Desktop)",
      "footer.adhanMobile": "Adhan Prayer Times (Mobile)",
      "footer.adhanTv": "Adhan TV (Smart TV)",
      "footer.about": "About & Inquiries",
      "footer.philosophy": "Our Philosophy",
      "footer.playStore": "Google Play Store",
      "footer.rights": "All rights reserved.",
      "footer.tagline": "Built with care · Pure Islamic software"
    },
    ar: {
      "meta.title": "سوفت إسلام — تطبيقات إسلامية مصممة بعناية | مصحف القرآن، الأذان والتلفاز",
      "meta.description": "اكتشف مجموعة سوفت إسلام من التطبيقات الإسلامية الخالية من المشتتات والحافظة للخصوصية: مصحف القرآن (متوفر الآن على أندرويد)، مواقيت الأذان، وأذان التلفاز.",
      "nav.apps": "تطبيقاتنا",
      "nav.mushaf": "مصحف القرآن",
      "nav.adhanMobile": "الأذان للجوال",
      "nav.adhanTv": "أذان التلفاز",
      "nav.values": "قيمنا",
      "header.cta": "احصل على مصحف القرآن",
      "header.mobileToggle": "تبديل قائمة التنقل",
      "lang.toggleLabel": "تغيير اللغة",
      "theme.toggleLabel": "تبديل المظهر",
      "hero.bismillah": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "hero.headline": "تطبيقات إسلامية مصممة بعناية للعبادة اليومية",
      "hero.subhead": "تطبيقات خالية من المشتتات وحافظة للخصوصية، مصممة لتركيز روحي حقيقي. اقرأ القرآن الكريم بالرسم العثماني الأصيل وابقَ ملتزمًا بصلواتك اليومية عبر الجوال والتلفاز وسطح المكتب.",
      "hero.ctaDownload": "تحميل مصحف القرآن",
      "hero.ctaUpcoming": "عرض التطبيقات القادمة",
      "trust.adFree": "خالٍ من الإعلانات بنسبة ١٠٠٪",
      "trust.privacy": "بدون تتبع · خصوصية تامة",
      "trust.offline": "موثوقية العمل دون اتصال",
      "trust.scholarly": "مصادر علمية موثوقة",
      "apps.kicker": "مجموعة البرمجيات",
      "apps.title": "مصممة للعبادة على كل شاشة",
      "apps.desc": "من التلاوة الشخصية على الجوال إلى شاشات العرض الكبيرة للصلاة في منزلك أو مسجدك.",
      "mushaf.badge": "متوفر الآن على أندرويد · إصدار سطح المكتب قيد التطوير",
      "mushaf.title": "مصحف القرآن",
      "mushaf.desc": "تطبيق قراءة قرآن أصيل وهادئ يتميز بالرسم العثماني الحقيقي، وصفحات عالية الدقة، وتلاوة صوتية آية بآية، وبيئة قراءة خالية تمامًا من المشتتات.",
      "mushaf.feat1.strong": "الرسم العثماني الأصيل:",
      "mushaf.feat1.text": "خط مدني واضح مع ضبط دقيق للحركات ووضوح أحكام التجويد.",
      "mushaf.feat2.strong": "بيئة قراءة نقية:",
      "mushaf.feat2.text": "خالية تمامًا من الإعلانات واللافتات والتتبع التجاري والمقاطعات.",
      "mushaf.feat3.strong": "تنقل سهل بين السور والأجزاء:",
      "mushaf.feat3.text": "بحث فوري وتحديد الإشارات المرجعية وتقليب صفحات مصمم لتلاوة سلسة.",
      "mushaf.feat4.strong": "إمكانية الوصول دون اتصال:",
      "mushaf.feat4.text": "الوصول إلى النص الكامل والإشارات المرجعية في أي وقت دون الحاجة إلى الإنترنت.",
      "mushaf.desktopSoon": "سطح المكتب (ماك / ويندوز / لينكس) — ",
      "mushaf.comingSoon": "قريبًا",
      "adhanMobile.badge": "للجوال · قريبًا",
      "adhanMobile.title": "مواقيت الأذان",
      "adhanMobile.desc": "رفيق أنيق وعالي الدقة لمواقيت الصلاة على الجوال. يوفر طرق حساب دقيقة عالميًا، ونداءات أذان مخصصة، واتجاه القبلة، وجدولة خلفية موفرة للبطارية.",
      "adhanMobile.feat1.strong": "طرق حساب علمية موثوقة:",
      "adhanMobile.feat1.text": "يدعم أم القرى، وISNA، وMWL، والمصرية، وكراتشي، وزوايا مخصصة.",
      "adhanMobile.feat2.strong": "أذان صوتي متناغم:",
      "adhanMobile.feat2.text": "تسجيلات مؤذنين أصيلة من مكة والمدينة والأقصى.",
      "adhanMobile.feat3.strong": "بوصلة قبلة دقيقة:",
      "adhanMobile.feat3.text": "اتجاه فوري مع تصحيح الانحراف المغناطيسي.",
      "adhanMobile.footer": "آيفون وأندرويد — ",
      "adhanTv.badge": "الشاشة الكبيرة · قريبًا",
      "adhanTv.title": "أذان التلفاز",
      "adhanTv.desc": "حوّل تلفازك الذكي إلى ساعة صلاة هادئة لمنزلك أو مساحتك المجتمعية أو مصلاك. يعرض مواقيت الصلاة والعد التنازلي للصلاة القادمة وتشغيل الأذان تلقائيًا.",
      "adhanTv.feat1.strong": "عرض هادئ لغرفة المعيشة:",
      "adhanTv.feat1.text": "رسوم متحركة خفيفة وإضاءة هادئة من النهار إلى الليل مخصصة لشاشات التلفاز.",
      "adhanTv.feat2.strong": "وضوح من جميع أنحاء الغرفة:",
      "adhanTv.feat2.text": "جدول زمني عالي التباين يمكن قراءته من مسافات بعيدة.",
      "adhanTv.feat3.strong": "حماية من حرق الشاشة OLED:",
      "adhanTv.feat3.text": "إزاحة ذكية للبكسل مصممة لعرض التلفاز طوال اليوم.",
      "adhanTv.footer": "أندرويد تي في / أبل تي في / فاير تي في — ",
      "values.kicker": "فلسفتنا",
      "values.title": "بُنيت بخشوع ونزاهة رقمية",
      "values.desc": "نبني التقنية كعمل خدمي، ونضع التركيز الروحي والخصوصية فوق الربح التجاري.",
      "values.card1.title": "بدون إعلانات",
      "values.card1.desc": "لا لافتات تجارية ولا نوافذ منبثقة ولا إعلانات فيديو داخل اللحظات المقدسة. تبقى تلاوتك للقرآن وتذكيراتك بالصلاة نقية.",
      "values.card2.title": "خصوصية صارمة",
      "values.card2.desc": "لا جمع لبيانات الموقع، ولا تحليل سلوكي، ولا بيع لبيانات المستخدمين. تتم جميع حسابات الصلاة على الجهاز نفسه.",
      "values.card3.title": "دقة علمية",
      "values.card3.desc": "النصوص القرآنية ومعايير الحساب مُراجَعة بالرجوع إلى مراجع وسلطات إسلامية معتمدة.",
      "values.card4.title": "هندسة حديثة",
      "values.card4.desc": "برمجيات سريعة وموفرة للبطارية ومتجاوبة، مبنية بمعايير أداء حديثة للجوال وسطح المكتب والتلفاز.",
      "cta.headline": "جرّب مصحف القرآن اليوم",
      "cta.subhead": "انضم إلى المسلمين الذين يقرؤون القرآن الكريم بالرسم العثماني الأصيل على أندرويد. مجاني تمامًا وخالٍ من الإعلانات.",
      "footer.desc": "مكرّسون لصناعة برمجيات إسلامية هادفة وخالية من المشتتات، تمكّن المسلمين حول العالم بأدوات رقمية للعبادة والدراسة والذكر اليومي.",
      "footer.applications": "التطبيقات",
      "footer.mushafAndroid": "مصحف القرآن (أندرويد)",
      "footer.mushafDesktop": "مصحف القرآن (سطح المكتب)",
      "footer.adhanMobile": "مواقيت الأذان (جوال)",
      "footer.adhanTv": "أذان التلفاز (تلفاز ذكي)",
      "footer.about": "عن الموقع والاستفسارات",
      "footer.philosophy": "فلسفتنا",
      "footer.playStore": "متجر جوجل بلاي",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.tagline": "صُنع بعناية · برمجيات إسلامية نقية"
    }
  };

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_LANG);
    } catch (e) {
      return null;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_LANG, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_THEME);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_THEME, theme);
    } catch (e) {
      /* ignore */
    }
  }

  function resolveInitialLang() {
    var stored = getStoredLang();
    if (stored === "en" || stored === "ar") return stored;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("ar") === 0 ? "ar" : "en";
  }

  function resolveInitialTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") return stored;
    var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f8f7f2" : "#0a0e14");
    var btn = document.getElementById("themeToggleBtn");
    if (btn) btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        nodes[i].textContent = dict[key];
      }
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var h = 0; h < htmlNodes.length; h++) {
      var strongKey = htmlNodes[h].getAttribute("data-i18n-html");
      var textKey = htmlNodes[h].getAttribute("data-i18n-html-text");
      if (dict[strongKey] !== undefined && dict[textKey] !== undefined) {
        var strongEl = document.createElement("strong");
        strongEl.textContent = dict[strongKey] + " ";
        htmlNodes[h].textContent = "";
        htmlNodes[h].appendChild(strongEl);
        htmlNodes[h].appendChild(document.createTextNode(dict[textKey]));
      }
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var a = 0; a < attrNodes.length; a++) {
      var spec = attrNodes[a].getAttribute("data-i18n-attr").split(":");
      var attrName = spec[0];
      var attrKey = spec[1];
      if (dict[attrKey] !== undefined) {
        attrNodes[a].setAttribute(attrName, dict[attrKey]);
      }
    }

    if (dict["meta.title"]) document.title = dict["meta.title"];
    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && dict["meta.description"]) descMeta.setAttribute("content", dict["meta.description"]);

    var langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.textContent = lang === "ar" ? "EN" : "ع";
      langBtn.setAttribute("aria-label", dict["lang.toggleLabel"] || "Switch language");
    }
    var themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", dict["theme.toggleLabel"] || "Switch theme");
    }
  }

  var currentLang = resolveInitialLang();
  var currentTheme = resolveInitialTheme();
  applyTheme(currentTheme);

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(currentLang);
    applyTheme(currentTheme);

    var langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        currentLang = currentLang === "ar" ? "en" : "ar";
        setStoredLang(currentLang);
        applyLang(currentLang);
      });
    }

    var themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        setStoredTheme(currentTheme);
        applyTheme(currentTheme);
      });
    }
  });
})();
