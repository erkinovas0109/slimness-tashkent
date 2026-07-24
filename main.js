// ---------- i18n ----------
const translations = {
  "nav.services": { ru: "Услуги", uz: "Xizmatlar", en: "Services" },
  "nav.programs": { ru: "Курсы", uz: "Kurslar", en: "Programs" },
  "nav.reviews": { ru: "Отзывы", uz: "Sharhlar", en: "Reviews" },
  "nav.faq": { ru: "Вопросы", uz: "Savollar", en: "FAQ" },
  "nav.contacts": { ru: "Контакты", uz: "Kontaktlar", en: "Contacts" },
  "nav.book": { ru: "Записаться", uz: "Yozilish", en: "Book now" },

  "hero.eyebrow": { ru: "Первая студия Slimness в Ташкенте", uz: "Toshkentdagi birinchi Slimness studiyasi", en: "The first Slimness studio in Tashkent" },
  "hero.title": { ru: "Авторская коррекция фигуры и омоложение тела", uz: "Tana shaklini muallif usulida tuzatish va yoshartirish", en: "Signature body correction and rejuvenation" },
  "hero.subtitle": { ru: "Приходите на пробную процедуру и почувствуйте результат уже после первого визита в студию.", uz: "Sinov muolajasiga keling va studiyaga birinchi tashrifdanoq natijani his qiling.", en: "Book a trial session and feel the result after your very first visit." },
  "hero.point1": { ru: "Без жёстких диет и изнурительных тренировок", uz: "Qattiq parhez va charchatuvchi mashqlarsiz", en: "No strict diets or exhausting workouts" },
  "hero.point2": { ru: "Без долгого восстановления после процедур", uz: "Muolajalardan keyin uzoq tiklanishsiz", en: "No lengthy recovery after procedures" },
  "hero.point3": { ru: "Заметный эффект с первых сеансов", uz: "Birinchi seanslardanoq sezilarli natija", en: "Visible effect from the first sessions" },
  "hero.cta": { ru: "Записаться на бесплатный чек-ап", uz: "Bepul tekshiruvga yozilish", en: "Book a free check-up" },

  "checkup.eyebrow": { ru: "Бесплатно", uz: "Bepul", en: "Free" },
  "checkup.title": { ru: "Чек-ап тела перед стартом курса", uz: "Kurs boshlanishidan oldin tana tekshiruvi", en: "Body check-up before starting your course" },
  "checkup.item1": { ru: "Консультация специалиста по коррекции фигуры", uz: "Tana shaklini tuzatish bo'yicha mutaxassis konsultatsiyasi", en: "Consultation with a body-correction specialist" },
  "checkup.item2": { ru: "Анализ состава тела и особенностей организма", uz: "Tana tarkibi va organizm xususiyatlarini tahlil qilish", en: "Body composition and individual factors analysis" },
  "checkup.item3": { ru: "Поиск причин лишнего веса, отёков и дряблости кожи", uz: "Ortiqcha vazn, shish va teri bo'shashishi sabablarini aniqlash", en: "Identifying causes of excess weight, swelling and skin laxity" },
  "checkup.item4": { ru: "Индивидуальный план процедур без диет и стресса", uz: "Parhez va stresssiz individual muolajalar rejasi", en: "Personal procedure plan without diets or stress" },
  "checkup.duration_label": { ru: "Длительность", uz: "Davomiyligi", en: "Duration" },
  "checkup.duration_value": { ru: "45 минут", uz: "45 daqiqa", en: "45 minutes" },
  "checkup.price_label": { ru: "Стоимость", uz: "Narxi", en: "Price" },
  "checkup.price_value": { ru: "Бесплатно", uz: "Bepul", en: "Free" },
  "checkup.cta": { ru: "Записаться на чек-ап", uz: "Tekshiruvga yozilish", en: "Book the check-up" },

  "problems.title": { ru: "Это для вас, если", uz: "Bu siz uchun, agar", en: "This is for you if" },
  "problems.item1": { ru: "Хотите избавиться от проблемных зон и лишнего веса", uz: "Muammoli zonalar va ortiqcha vazndan xalos bo'lmoqchisiz", en: "You want to lose problem-area fat and excess weight" },
  "problems.item2": { ru: "Беспокоит целлюлит и рыхлость кожи", uz: "Sellyulit va teri bo'shashishi bezovta qiladi", en: "Cellulite and loose skin bother you" },
  "problems.item3": { ru: "Мучают отёки и усталость в ногах", uz: "Oyoqlarda shish va charchoq azob beradi", en: "You suffer from swelling and heavy legs" },
  "problems.item4": { ru: "Хочется быстрее восстановиться после родов", uz: "Tug'ruqdan keyin tezroq tiklanishni xohlaysiz", en: "You want faster postpartum recovery" },
  "problems.item5": { ru: "Активно тренируетесь, но не видите результата в объёмах", uz: "Faol mashq qilasiz, lekin hajmlarda natija ko'rmayapsiz", en: "You train hard but see no change in body measurements" },
  "problems.item6": { ru: "Не устраивает качество и тонус кожи", uz: "Teri sifati va tonusi qoniqtirmaydi", en: "You're unhappy with skin quality and tone" },

  "services.title": { ru: "Услуги студии", uz: "Studiya xizmatlari", en: "Studio services" },
  "services.subtitle": { ru: "Специалисты подбирают программу индивидуально после подробной консультации.", uz: "Mutaxassislar batafsil konsultatsiyadan so'ng dasturni individual tanlaydi.", en: "Specialists select a program individually after a detailed consultation." },

  "why.title": { ru: "Почему выбирают Slimness", uz: "Nega Slimness tanlanadi", en: "Why choose Slimness" },
  "why.stat1": { ru: "лет практики методики", uz: "yillik metodika tajribasi", en: "years of method practice" },
  "why.stat2": { ru: "клиентов довольны результатом", uz: "mijozlar natijadan mamnun", en: "of clients are satisfied with results" },
  "why.stat3": { ru: "размера за курс процедур", uz: "o'lcham kurs davomida", en: "sizes down per course" },
  "why.item1": { ru: "Специалисты с медицинским образованием", uz: "Tibbiy ma'lumotga ega mutaxassislar", en: "Specialists with medical training" },
  "why.item2": { ru: "Индивидуальный план по итогам чек-апа", uz: "Tekshiruv natijalari asosida individual reja", en: "Personal plan based on your check-up" },
  "why.item3": { ru: "Комфортные методики без боли и травм кожи", uz: "Og'riqsiz va terini shikastlamaydigan qulay usullar", en: "Comfortable methods, no pain or skin trauma" },
  "why.item4": { ru: "Гибкая оплата и рассрочка на курсы", uz: "Kurslar uchun moslashuvchan to'lov va muddatli to'lov", en: "Flexible payment and installments for courses" },

  "programs.title": { ru: "Индивидуальные программы", uz: "Individual dasturlar", en: "Individual programs" },
  "programs.subtitle": { ru: "Курс процедур с чётким графиком закрепляет результат надолго.", uz: "Aniq jadval bilan o'tkaziladigan kurs natijani uzoq muddat mustahkamlaydi.", en: "A course with a clear schedule locks in results for the long run." },
  "programs.cta": { ru: "Подобрать программу", uz: "Dastur tanlash", en: "Choose a program" },

  "reviews.title": { ru: "Отзывы наших клиентов", uz: "Mijozlarimiz sharhlari", en: "Client reviews" },
  "reviews.subtitle": { ru: "Здесь появятся отзывы гостей ташкентской студии — этот блок наполняется по мере работы.", uz: "Bu yerda Toshkent studiyasi mehmonlarining sharhlari joylashtiriladi — bo'lim ish jarayonida to'ldiriladi.", en: "Reviews from Tashkent studio guests will appear here as the studio operates." },
  "reviews.placeholder1": { ru: "Место для первого отзыва клиента студии.", uz: "Birinchi mijoz sharhi uchun joy.", en: "Space for the first client review." },
  "reviews.placeholder2": { ru: "Место для второго отзыва клиента студии.", uz: "Ikkinchi mijoz sharhi uchun joy.", en: "Space for the second client review." },
  "reviews.placeholder3": { ru: "Место для третьего отзыва клиента студии.", uz: "Uchinchi mijoz sharhi uchun joy.", en: "Space for the third client review." },
  "reviews.placeholder_author": { ru: "Имя клиента", uz: "Mijoz ismi", en: "Client name" },

  "certs.title": { ru: "Подарочный сертификат", uz: "Sovg'a sertifikati", en: "Gift certificate" },
  "certs.text": { ru: "Идеальный подарок близкому человеку — сертификат на любую сумму или на конкретный курс процедур.", uz: "Yaqin insoningizga ajoyib sovg'a — istalgan summaga yoki muayyan kursga sertifikat.", en: "The perfect gift — a certificate for any amount or for a specific course." },
  "certs.cta": { ru: "Оставить заявку на сертификат", uz: "Sertifikatga so'rov qoldirish", en: "Request a certificate" },

  "faq.title": { ru: "Частые вопросы", uz: "Ko'p beriladigan savollar", en: "Frequently asked questions" },

  "contacts.title": { ru: "Контакты студии", uz: "Studiya kontaktlari", en: "Studio contacts" },
  "contacts.address_label": { ru: "Адрес", uz: "Manzil", en: "Address" },
  "contacts.hours_label": { ru: "Часы работы", uz: "Ish vaqti", en: "Working hours" },
  "contacts.hours_value": { ru: "пн–вс, 8:00–22:00 (по записи)", uz: "dush–yaks, 8:00–22:00 (oldindan yozilish)", en: "Mon–Sun, 8:00–22:00 (by appointment)" },
  "contacts.phone_label": { ru: "Телефон", uz: "Telefon", en: "Phone" },
  "contacts.email_label": { ru: "Email", uz: "Email", en: "Email" },
  "contacts.map_placeholder": { ru: "[КАРТА — добавить embed после выбора адреса]", uz: "[XARITA — manzil tanlangach qo'shiladi]", en: "[MAP — add embed once the address is set]" },

  "footer.legal": { ru: "[ЮР. ЛИЦО / ИНН — заполнить после регистрации]", uz: "[YURIDIK MA'LUMOTLAR — ro'yxatdan o'tgach to'ldiriladi]", en: "[LEGAL ENTITY / TAX ID — fill in after registration]" },
  "footer.rights": { ru: "© 2026 Все права защищены.", uz: "© 2026 Barcha huquqlar himoyalangan.", en: "© 2026 All rights reserved." },

  "booking.title": { ru: "Записаться на бесплатный чек-ап", uz: "Bepul tekshiruvga yozilish", en: "Book a free check-up" },
  "booking.subtitle": { ru: "Оставьте контакты — администратор свяжется с вами для подтверждения времени.", uz: "Kontaktlaringizni qoldiring — administrator vaqtni tasdiqlash uchun bog'lanadi.", en: "Leave your contact details — our administrator will confirm the time with you." },
  "booking.name_label": { ru: "Имя", uz: "Ism", en: "Name" },
  "booking.phone_label": { ru: "Телефон", uz: "Telefon", en: "Phone" },
  "booking.service_label": { ru: "Интересующая услуга", uz: "Qiziqtirgan xizmat", en: "Service of interest" },
  "booking.comment_label": { ru: "Комментарий", uz: "Izoh", en: "Comment" },
  "booking.submit": { ru: "Отправить заявку", uz: "So'rovni yuborish", en: "Send request" },
  "booking.sending": { ru: "Отправляем…", uz: "Yuborilmoqda…", en: "Sending…" },
  "booking.success": { ru: "Заявка отправлена! Мы скоро свяжемся с вами.", uz: "So'rov yuborildi! Tez orada bog'lanamiz.", en: "Request sent! We'll contact you shortly." },
  "booking.error": { ru: "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.", uz: "So'rovni yuborib bo'lmadi. Qayta urinib ko'ring yoki bizga qo'ng'iroq qiling.", en: "Couldn't send the request. Please try again or call us." },
};

// ---------- Services / Programs / FAQ data ----------
const servicesData = [
  { id: "madero", ru: ["Мадеротерапия", "Глубокий массаж деревянными инструментами, работает с плотностью жировой ткани и помогает при фиброзном целлюлите."], uz: ["Maderoterapiya", "Yog'och asboblar bilan chuqur massaj, yog' to'qimasi zichligiga ta'sir qiladi va fibroz sellyulitga yordam beradi."], en: ["Madero-therapy", "Deep massage with wooden tools that works on fat tissue density and helps with fibrous cellulite."] },
  { id: "skinbody", ru: ["Моделирование тела SkinBody", "Обёртывание с гипсовым составом уменьшает объёмы, снимает отёчность и подтягивает проблемные зоны."], uz: ["SkinBody tana modellashtirish", "Gips tarkibli o'rash hajmlarni kamaytiradi, shishni yo'qotadi va muammoli zonalarni tortadi."], en: ["SkinBody modeling wrap", "A plaster-based wrap that reduces volume, relieves swelling and tightens problem areas."] },
  { id: "lpg", ru: ["LPG-массаж", "Аппаратный лимфодренажный массаж с лифтинг-эффектом, курс помогает уменьшить объёмы на 1-2 размера."], uz: ["LPG-massaj", "Lifting effektiga ega apparat limfodrenaj massaji, kurs 1-2 o'lchamga hajmni kamaytirishga yordam beradi."], en: ["LPG massage", "Device-based lymphatic drainage massage with a lifting effect; a course can reduce volume by 1-2 sizes."] },
  { id: "rsleek", ru: ["R-sleek", "Методика нормализует работу лимфатической системы, снимает отёки и запускает процесс похудения."], uz: ["R-sleek", "Metodika limfa tizimi ishini normallashtiradi, shishni yo'qotadi va vazn yo'qotish jarayonini boshlaydi."], en: ["R-sleek", "A method that normalizes the lymphatic system, relieves swelling and kick-starts fat loss."] },
  { id: "wrap", ru: ["Интеллектуальное обертывание", "Комплексное обёртывание быстрого действия для кожи, жировой прослойки и мышц."], uz: ["Intellektual o'rash", "Teri, yog' qatlami va mushaklar uchun tez ta'sir qiluvchi kompleks o'rash."], en: ["Intelligent wrap", "A fast-acting complex wrap targeting skin, fat layer and muscle."] },
  { id: "cavitation", ru: ["Кавитация", "Безоперационная липосакция ультразвуком — за одну процедуру можно уменьшить жировую прослойку в проблемной зоне."], uz: ["Kavitatsiya", "Ultratovush yordamida operatsiyasiz liposaksiya — bir muolajada muammoli zonadagi yog' qatlamini kamaytiradi."], en: ["Cavitation", "Non-surgical ultrasound liposuction — one session can reduce fat in a target area."] },
  { id: "rfbody", ru: ["RF-лифтинг тела", "Радиоволны точечно воздействуют на проблемные участки, повышают тонус кожи и стимулируют выработку коллагena."], uz: ["Tana uchun RF-lifting", "Radioto'lqinlar muammoli hududlarga nuqtali ta'sir qiladi, teri tonusini oshiradi va kollagen ishlab chiqarishni rag'batlantiradi."], en: ["Body RF-lifting", "Radio waves target problem areas, improve skin tone and stimulate collagen production."] },
  { id: "rfface", ru: ["RF-лифтинг лица", "Подтягивает овал лица, сглаживает носогубные складки, делает кожу более упругой."], uz: ["Yuz uchun RF-lifting", "Yuz ovalini tortadi, burun-lab burmalarini silliqlaydi, terini elastik qiladi."], en: ["Face RF-lifting", "Lifts the facial contour, smooths nasolabial folds and firms the skin."] },
];

const programsData = [
  { ru: "Лечение целлюлита", uz: "Sellyulitni davolash", en: "Cellulite treatment" },
  { ru: "Восстановление после родов", uz: "Tug'ruqdan keyin tiklanish", en: "Postpartum recovery" },
  { ru: "Тонкая талия", uz: "Nozik bel", en: "Slim waist" },
  { ru: "90/60/90", uz: "90/60/90", en: "90/60/90" },
  { ru: "Устранение отёчности", uz: "Shishni bartaraf etish", en: "Swelling removal" },
  { ru: "Курс для беременных", uz: "Homilador ayollar uchun kurs", en: "Prenatal course" },
];

const faqData = [
  {
    ru: ["Насколько болезненны процедуры?", "Первые сеансы могут быть чувствительными, но специалист подбирает параметры индивидуально — дальше процедуры переносятся комфортно."],
    uz: ["Muolajalar og'riqlimi?", "Birinchi seanslar sezgir bo'lishi mumkin, lekin mutaxassis parametrlarni individual tanlaydi — keyingi muolajalar qulay o'tadi."],
    en: ["How uncomfortable are the procedures?", "The first sessions can feel sensitive, but the specialist adjusts settings individually — later sessions are comfortable."],
  },
  {
    ru: ["Сколько процедур нужно для результата?", "У многих клиентов заметные изменения видны уже после 3 посещений, но точное количество зависит от целей и особенностей организма."],
    uz: ["Natija uchun nechta muolaja kerak?", "Ko'pchilik mijozlarda 3-tashrifdan keyin sezilarli o'zgarishlar ko'rinadi, lekin aniq son maqsad va organizm xususiyatlariga bog'liq."],
    en: ["How many sessions are needed for results?", "Many clients notice visible changes after 3 visits, though the exact number depends on your goals and body."],
  },
  {
    ru: ["Не могу выбрать процедуру — что делать?", "Запишитесь на бесплатную консультацию: специалист изучит ваш запрос и предложит подходящий план."],
    uz: ["Muolajani tanlay olmayapman — nima qilay?", "Bepul konsultatsiyaga yoziling: mutaxassis so'rovingizni o'rganib, mos rejani taklif qiladi."],
    en: ["I can't decide on a procedure — what should I do?", "Book a free consultation: the specialist will review your goals and suggest a suitable plan."],
  },
  {
    ru: ["Насколько комфортны методики?", "Мы используем методики, которые не травмируют кожу и не вызывают боли. Все процедуры проводят под контролем специалистов."],
    uz: ["Usullar qanchalik qulay?", "Biz terini shikastlamaydigan va og'riq keltirmaydigan usullardan foydalanamiz. Barcha muolajalar mutaxassislar nazorati ostida o'tkaziladi."],
    en: ["How comfortable are the methods?", "We use methods that don't harm the skin or cause pain. All procedures are supervised by specialists."],
  },
  {
    ru: ["Можно ли оплатить курс в рассрочку?", "Да, для курсов процедур доступна рассрочка — уточните условия у администратора при записи."],
    uz: ["Kursni bo'lib to'lash mumkinmi?", "Ha, muolajalar kursi uchun muddatli to'lov mavjud — yozilishda administratordan shartlarni aniqlashtiring."],
    en: ["Can I pay for a course in installments?", "Yes, installment plans are available for procedure courses — ask the administrator for details when booking."],
  },
  {
    ru: ["Есть ли противопоказания?", "Список противопоказаний минимален. На консультации специалист оценивает состояние здоровья, чтобы исключить риски."],
    uz: ["Qarshi ko'rsatmalar bormi?", "Qarshi ko'rsatmalar ro'yxati minimal. Konsultatsiyada mutaxassis xatarlarni istisno qilish uchun sog'liq holatini baholaydi."],
    en: ["Are there any contraindications?", "The list of contraindications is minimal. During the consultation the specialist assesses your health to rule out risks."],
  },
  {
    ru: ["Что нужно, чтобы начать курс?", "Для устойчивого результата важно соблюдать регулярность визитов и рекомендации специалиста."],
    uz: ["Kursni boshlash uchun nima kerak?", "Barqaror natija uchun tashriflarning muntazamligi va mutaxassis tavsiyalariga rioya qilish muhim."],
    en: ["What's needed to start a course?", "For lasting results, regular visits and following the specialist's recommendations matter most."],
  },
  {
    ru: ["Нужно ли соблюдать диету и заниматься спортом во время курса?", "Жёсткие диеты не требуются — мы делаем акцент на бережном подходе к телу. Из активности достаточно обычной нормы шагов."],
    uz: ["Kurs davomida parhez va sport bilan shug'ullanish kerakmi?", "Qattiq parhez talab qilinmaydi — biz tanaga g'amxo'rlik bilan yondashamiz. Faollikdan oddiy qadam normasi yetarli."],
    en: ["Do I need to diet or exercise during the course?", "Strict diets aren't required — we focus on a gentle approach to the body. A normal daily step count is enough activity."],
  },
];

// ---------- State ----------
let currentLang = "ru";

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (entry && entry[lang]) el.textContent = entry[lang];
  });
  document.querySelectorAll("#langSwitch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  renderServices(lang);
  renderPrograms(lang);
  renderFaq(lang);
  renderBookingServiceOptions(lang);
}

function renderServices(lang) {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = servicesData
    .map((s) => `<div class="service-card"><h3>${s[lang][0]}</h3><p>${s[lang][1]}</p></div>`)
    .join("");
}

function renderPrograms(lang) {
  const grid = document.getElementById("programsGrid");
  grid.innerHTML = programsData.map((p) => `<div class="program-card">${p[lang]}</div>`).join("");
}

function renderFaq(lang) {
  const list = document.getElementById("faqList");
  list.innerHTML = faqData
    .map(
      (f, i) => `
      <div class="faq-item" data-index="${i}">
        <button type="button" class="faq-question">${f[lang][0]}</button>
        <div class="faq-answer"><p>${f[lang][1]}</p></div>
      </div>`
    )
    .join("");
  list.querySelectorAll(".faq-item").forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}

function renderBookingServiceOptions(lang) {
  const select = document.getElementById("bookingServiceSelect");
  const generalLabel = { ru: "Бесплатный чек-ап", uz: "Bepul tekshiruv", en: "Free check-up" }[lang];
  select.innerHTML =
    `<option value="checkup">${generalLabel}</option>` +
    servicesData.map((s) => `<option value="${s.id}">${s[lang][0]}</option>`).join("");
}

// ---------- Booking modal ----------
const overlay = document.getElementById("bookingOverlay");

function openBooking() {
  overlay.classList.add("open");
}
function closeBooking() {
  overlay.classList.remove("open");
}

document.querySelectorAll("[data-open-booking], #openBookingBtn").forEach((el) => {
  el.addEventListener("click", openBooking);
});
document.getElementById("closeBookingBtn").addEventListener("click", closeBooking);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeBooking();
});

// ---------- Lang switch ----------
document.getElementById("langSwitch").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (btn) applyTranslations(btn.dataset.lang);
});

// ---------- Mobile nav ----------
document.getElementById("burgerBtn").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

// ---------- Supabase booking submission ----------
let supabaseClient = null;
function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  if (window.supabase && window.SLIMNESS_SUPABASE_CONFIG) {
    supabaseClient = window.supabase.createClient(
      window.SLIMNESS_SUPABASE_CONFIG.url,
      window.SLIMNESS_SUPABASE_CONFIG.anonKey
    );
  }
  return supabaseClient;
}

document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("bookingStatus");
  const submitBtn = form.querySelector('button[type="submit"]');
  const payload = {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    service: form.service.value,
    comment: form.comment.value.trim(),
    lang: currentLang,
  };

  status.className = "form-status";
  status.textContent = translations["booking.sending"][currentLang];
  submitBtn.disabled = true;

  try {
    const client = getSupabaseClient();
    if (!client) throw new Error("Supabase client not configured");
    const { error } = await client.from("bookings").insert([payload]);
    if (error) throw error;
    status.textContent = translations["booking.success"][currentLang];
    status.classList.add("success");
    form.reset();
  } catch (err) {
    console.error(err);
    status.textContent = translations["booking.error"][currentLang];
    status.classList.add("error");
  } finally {
    submitBtn.disabled = false;
  }
});

// ---------- Init ----------
applyTranslations("ru");
