import enArTransl from "./en.js";

// نحصل على اللغة المحفوظة أو نبدأ بـ "en"
const savedLang = localStorage.getItem("language") || "en";
changeLanguage(savedLang);

// الزر الجديد لتبديل اللغة
const langButton = document.getElementById("lang-switcher");
langButton.textContent = savedLang === "en" ? "عربي" : "Eng";

// عند الضغط على الزر نبدّل اللغة
langButton.addEventListener("click", () => {
  const newLang = savedLang === "en" ? "ar" : "en";
  localStorage.setItem("language", newLang);
  location.reload(); // نعيد تحميل الصفحة لتطبيق التغيير
});

function changeLanguage(lang) {
  if (!enArTransl[lang]) return;

  const elements = {
    "title": "title",
    "about-link":"aboutLink",
    "services-link":"servicesLink",
    "projects-link":"projectsLink",
    "contacts":"contact",
    "search-btn":"searchBtn",
    "title-prag":"titlePrag",
    "pragone":"pragone",
    "pragtwo":"pragtwo",
    "our-service":"service",
    "service-prag":"servicePrag",
    "web-text":"webText",
    "web-info":"webInfo",
    "ved-text":"vedText",
    "ved-info":"vedInfo",
    "photo-text":"photoText",
    "photo-info":"photoInfo",
    "brand-text":"brandText",
    "brand-info":"brandInfo",
    "mark-text":"markText",
    "mark-info":"markInfo",
    "post-text":"postText",
    "post-info":"postInfo",
    "social-text":"socialText",
    "social-info":"socialInfo",
    "print-text":"printText",
    "print-info":"printInfo",
    "project":"project",
    "project-prag":"projectPrag",
    "contact-title":"contactTitle"
  };

  Object.keys(elements).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = enArTransl[lang][elements[id]];
    }
  });
  
  // تغيير الخط حسب اللغة
  if (lang === "ar") {
    document.body.style.fontFamily = "'Cairo', 'Amiri', serif";
  } else {
    document.body.style.fontFamily = "Arial, sans-serif";
  }

  document.documentElement.setAttribute("lang", lang);
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}
