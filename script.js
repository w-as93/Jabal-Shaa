// لتفعيل تغيير اللغة
const translations = {
    ar: {
        LogoNameMain: "مؤسسة جبل شـاع",
        LogoNameSub: "للإستثمار والتطوير العقاري",
        HomePage: "الصفحة الرئيسية",
        PhonePage: "اتصل بنا",
        TabAbout: "نبذة عنا",
        TabMount: "جبل شاع",
        AboutUs: "نبذة عنا",
        AboutUsContent: "تعد مؤسستنا واحدة من الجهات الرائدة في مجال تطوير العقارات، حيث نسعى إلى تقديم مشاريع عقارية متميزة تجمع بين الجودة العالية، التصاميم العصرية، والاستدامة. <br>نعمل على تطوير المجتمعات السكنية، التجارية، والاستثمارية من خلال حلول مبتكرة تلبي تطلعات عملائنا وتواكب التطورات في القطاع العقاري.<br>نلتزم في مؤسستنا بأعلى معايير البناء والتخطيط العمراني، مع التركيز على تحقيق قيمة مستدامة لعملائنا ومستثمرينا.<br><br> <b>رؤيتنا</b> هي المساهمة في بناء مستقبل عمراني متطور يعكس طموحاتنا في الريادة والابتكار في عالم التطوير العقاري.",
        MountShaa: "جبل شاع",
        MountShaaContent1: "<b>أولاً</b> : الجبال في المنطقة كانت نقطة البداية لرسم الشعار وذلك تلبية لاسم المؤسسة ودعماً لمجال عملها حيث تعبر الجبال بنفس الوقت عن التطور والعلو وهو ما يعكس خدمة الاستثمار والتطوير العقاري التي تقدمها المؤسسة.",
        MountShaaContent2: "<b>ثانياً</b> : اعتماد من (قط العسيري) في هندسة الشعار وهو أحد الفنون التجريدية التي نشأت في منطقة عسير في السعودية، حيث تم رسم الجبال من خلاله الأمر الذي يقوي الرابط بين المؤسسة والمنطقة.",
        CallUs: "-- اتصل بنا --",
        Call: "اتصل",
        Sent: "ارسل",
        FolllowUs: "-- تابعنا --",
        Follow: "تابع",
        LocationUs: "المنطقة الشرقية - الدمام",
        Arabic: "العربية",
        English: "الإنجليزية"
    },

    en: {
        LogoNameMain: "Mount Sha'a Foundation",
        LogoNameSub: "Real Estate Investment and Development",
        HomePage: "Home",
        PhonePage: "Contact Us",
        TabAbout: "About Us",
        TabMount: "Mount Sha'a",
        AboutUs: "About Us",
        AboutUsContent: "Our organization is one of the leading entities in the field of real estate development, where we seek to provide distinguished real estate projects that combine high quality, modern designs, and sustainability.<br> We work to develop residential, commercial, and investment communities through innovative solutions that meet the aspirations of our customers and keep pace with developments in the real estate sector.<br> Our organization is committed to the highest standards of construction and urban planning, with a focus on creating sustainable value for our customers and investors. <br><br> <b>Our vision</b> is to contribute to building a sophisticated urban future that reflects our ambitions to lead and innovate in the world of real estate development.",
        MountShaa: "Mount Sha'a",
        MountShaaContent1: "<b>First</b>: The mountains in the region were the starting point for designing the logo, aligning with the foundation’s name and supporting its field of work. At the same time, the mountains symbolize growth and elevation, reflecting the real estate investment and development services provided by the foundation.",
        MountShaaContent2: "<b>Second</b>: The logo design incorporates elements from (Al-Qatt Al-Asiri), a form of abstract art that originated in the Asir region of Saudi Arabia. The mountains were drawn using this artistic style, strengthening the connection between the foundation and the region.",
        CallUs: "-- Contact us --",
        Call: "Call",
        Sent: "Sent",
        FolllowUs: "-- Follow us --",
        Follow: "Follow",
        LocationUs: "Eastern Province - Dammam",
        Arabic: "Arabic",
        English: "English"
    },
};

const languageSelector = document.querySelector('select');

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang");
    setLanguage(language);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-translate");
        element.innerHTML = translations[language][translationKey] 
    });
    document.dir = language === "ar" ? "rtl" : "ltr";

        // تحديث الشعار عند تغيير اللغة
        let logoImg = document.getElementById("logo");
        let logoText = document.getElementById("logo-name-main");
        let logoSubText = document.getElementById("logo-name-sub");
    
        if (language === "en") {
            logoImg.src = "img/logo.png"; // صورة بدون نص
            logoText.classList.remove("hidden"); // إظهار النص
            logoSubText.classList.remove("hidden");
        } else {
            logoImg.src = "img/LogoAr.png"; // صورة مع النص بالعربية
            logoText.classList.add("hidden"); // إخفاء النص
            logoSubText.classList.add("hidden");
        }
};

// لتفعيل زر المنيو
function toggleMenu() {
    let menu = document.querySelector(".content-section nav");
    let toggleIcon = document.querySelector(".menu-toggle i");

    menu.classList.toggle("active");

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", function closeMenu(event) {
        if (!menu.contains(event.target) && !toggleIcon.contains(event.target)) {
            menu.classList.remove("active");

            // إعادة الأيقونة إلى "الخطوط" عند إغلاق القائمة
            toggleIcon.classList.remove("bx-x");
            toggleIcon.classList.add("bx-menu");

            document.removeEventListener("click", closeMenu);
        }
    });

    // تبديل الأيقونة مع تأثير دوران ناعم
    if (menu.classList.contains("active")) {
        toggleIcon.classList.remove("bx-menu");
        toggleIcon.classList.add("bx-x");
    } else {
        toggleIcon.classList.remove("bx-x");
        toggleIcon.classList.add("bx-menu");
    }
}

// لجعل الصفحات غير مرئية الا عند الضغط على الرز
function showTab(tabNumber) {
    let content1 = document.getElementById("content1");
    let content2 = document.getElementById("content2");

    if (tabNumber === 1) {
        content1.style.display = "flex";
        content2.style.display = "none";
    } else {
        content1.style.display = "none";
        content2.style.display = "flex";
    }
}

//لجعل الازرار ثابتة اللون عند الضغط عليها
// حاليا حاطة نفس اللون ولكن الكود شغال عشان لو احتجت اغير بعدين
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function() {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("selected"));
        this.classList.add("selected");
    });
});

//لجعل الكتابة تكتب عند تحميل الصفحة
/* document.addEventListener("DOMContentLoaded", function () {
    let text = [
        "تعد مؤسستنا واحدة من الجهات الرائدة في مجال تطوير العقارات، حيث نسعى إلى تقديم مشاريع عقارية متميزة تجمع بين الجودة العالية، التصاميم العصرية، والاستدامة.",
        "نعمل على تطوير المجتمعات السكنية، التجارية، والاستثمارية من خلال حلول مبتكرة تلبي تطلعات عملائنا وتواكب التطورات في القطاع العقاري.",
        "نلتزم في مؤسستنا بأعلى معايير البناء والتخطيط العمراني، مع التركيز على تحقيق قيمة مستدامة لعملائنا ومستثمرينا.",
        "رؤيتنا هي المساهمة في بناء مستقبل عمراني متطور يعكس طموحاتنا في الريادة والابتكار في عالم التطوير العقاري."
    ];

    let index = 0;
    let paragraphIndex = 0;
    let typingSpeed = 100; // سرعة الكتابة لكل حرف (مللي ثانية)
    let delayBetweenParagraphs = 400; // تأخير بين كل فقرة وأخرى
    let typingText = document.getElementById("typing-text");

    function typeParagraph() {
        if (paragraphIndex < text.length) {
            let words = text[paragraphIndex].split(" ");
            index = 0;
            typingText.innerHTML += "<p id='paragraph" + paragraphIndex + "'></p>"; // إنشاء فقرة جديدة لكل جزء
            
            function typeWord() {
                if (index < words.length) {
                    let word = words[index];
                    if (word === "رؤيتنا") {
                        word = "<br><strong>" + word + "</strong>"; // جعل الكلمة بخط عريض
                    }
                    document.getElementById("paragraph" + paragraphIndex).innerHTML += word + " ";
                    index++;
                    setTimeout(typeWord, typingSpeed);
                } else {
                    paragraphIndex++;
                    setTimeout(typeParagraph, delayBetweenParagraphs);
                }
            }

            typeWord();
        }
    }

    typeParagraph();
}); */

// تفعيل زرالوضع الليلي
let switchInput = document.querySelector("#switch");
let body = document.body;

// إذا لم يكن هناك إعداد مخزن، اجعل الوضع النهاري هو الافتراضي
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
}

// تطبيق الوضع المخزن عند تحميل الصفحة
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    switchInput.checked = true;
}

switchInput.addEventListener("change", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
