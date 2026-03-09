// Basic UI interactions and bilingual support for the landing page

const LANGUAGE_STORAGE_KEY = "preferredLanguage";

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    statistics: "Statistics",
    contact: "Contact",
    hero_kicker: "Est. 2024 • Premium Studio",
    hero_heading: "We build with confidence for a better tomorrow.",
    hero_subtitle:
      "At FutureBuild, we merge cutting-edge technology with meticulous craftsmanship to create spaces that redefine modern living.",
    hero_cta_primary: "Request a Free Consultation",
    hero_cta_secondary: "View Signature Projects",
    hero_stat1_label: "On-time completion",
    hero_stat1_value: "98%",
    hero_stat2_label: "Projects delivered",
    hero_stat2_value: "120+",
    about_kicker: "About the studio",
    about_title: "Crafting tomorrow’s landmarks today.",
    about_paragraph1:
      "FutureBuild Architects is a multidisciplinary studio dedicated to creating refined, high-performance spaces for discerning clients. From first sketch to final handover, we orchestrate every detail with precision and transparency.",
    about_paragraph2:
      "Our team brings together architects, engineers, and project managers who share a single goal: to transform ambitious briefs into timeless, functional architecture that elevates everyday life.",
    services_kicker: "Our services",
    services_title: "End-to-end architectural solutions.",
    services_description:
      "From concept to construction, we provide fully integrated services that keep your project aligned with its vision, budget, and timeline.",
    service1_title: "Architectural Design",
    service1_text:
      "Distinctive, functional designs that balance aesthetics, comfort, and long-term performance.",
    service2_title: "Project Management",
    service2_text:
      "Rigorous planning and coordination that keep every stakeholder aligned from day one.",
    service3_title: "Construction & Delivery",
    service3_text:
      "High-standard construction overseen by seasoned engineers for quality that stands the test of time.",
    projects_kicker: "Selected work",
    projects_title: "Signature projects & case studies.",
    projects_cta: "Discuss your project",
    project1_tag: "Residential",
    project1_title: "Horizon Residence",
    project2_tag: "Commercial",
    project2_title: "Axis Business Tower",
    project3_tag: "Mixed-use",
    project3_title: "Meridian Complex",
    project4_tag: "Interior",
    project4_title: "Lumière Lobby",
    stats_kicker: "By the numbers",
    stats_title: "Proven performance across every project.",
    stat1_value: "15+",
    stat1_label: "Years of combined experience",
    stat2_value: "120+",
    stat2_label: "Projects successfully delivered",
    stat3_value: "98%",
    stat3_label: "Projects completed on schedule",
    stat4_value: "4.9",
    stat4_label: "Average client rating",
    contact_kicker: "Contact",
    contact_title: "Let’s shape your next landmark.",
    contact_description:
      "Share a few details about your upcoming project and our team will reach out within one business day.",
    contact_label_name: "Full name",
    contact_label_email: "Email address",
    contact_label_company: "Company (optional)",
    contact_label_budget: "Estimated budget",
    contact_label_message: "Project details",
    budget_placeholder: "Select range",
    budget_option1: "$250k – $500k",
    budget_option2: "$500k – $1M",
    budget_option3: "$1M – $5M",
    budget_option4: "$5M+",
    contact_placeholder_message:
      "Tell us about your timeline, site location, and project goals.",
    contact_cta: "Send inquiry",
    footer_brand: "FutureBuild Architects",
    footer_text:
      "Designing future-ready spaces with precision, transparency, and sustainable thinking.",
    footer_studio_heading: "Studio",
    footer_connect_heading: "Connect",
    footer_rights: "All rights reserved.",
    footer_madeby: "Website concept for demo purposes."
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    projects: "المشاريع",
    statistics: "الإحصائيات",
    contact: "تواصل معنا",
    hero_kicker: "تأسس 2024 • استوديو هندسي",
    hero_heading: "نبني بثقة من أجل غدٍ أفضل.",
    hero_subtitle:
      "في فيوتشر بيلد نمزج بين التكنولوجيا الحديثة والدقة الهندسية لنصمم مساحات تعيد تعريف أسلوب الحياة المعاصر.",
    hero_cta_primary: "احجز استشارة مجانية",
    hero_cta_secondary: "استعرض مشاريعنا المميزة",
    hero_stat1_label: "نسبة إنجاز في الموعد",
    hero_stat1_value: "98٪",
    hero_stat2_label: "مشروع تم تسليمه",
    hero_stat2_value: "120+",
    about_kicker: "عن الاستوديو",
    about_title: "نصنع معالم الغد من اليوم.",
    about_paragraph1:
      "فيوتشر بيلد هو استوديو هندسي متعدد التخصصات يركز على إنشاء مساحات عالية الأداء لعملاء يتطلعون للتميز. ندير مشروعك من أول فكرة حتى التسليم النهائي بأعلى درجات الشفافية.",
    about_paragraph2:
      "يجمع فريقنا بين مهندسين معماريين، ومهندسين إنشائيين، ومديري مشاريع يتشاركون هدفاً واحداً: تحويل الرؤى الطموحة إلى واقع معماري عملي وجميل يدوم طويلاً.",
    services_kicker: "خدماتنا",
    services_title: "حلول معمارية متكاملة.",
    services_description:
      "نوفّر سلسلة متكاملة من الخدمات من التخطيط المبدئي حتى التنفيذ، لنضمن انسجام المشروع مع رؤيتك وميزانيتك والجدول الزمني.",
    service1_title: "التصميم المعماري",
    service1_text:
      "تصاميم مميزة تجمع بين الجمالية والراحة والأداء العالي على المدى الطويل.",
    service2_title: "إدارة المشاريع",
    service2_text:
      "تخطيط ومتابعة دقيقة تضمن تناغم جميع الأطراف وسير العمل بسلاسة.",
    service3_title: "التنفيذ والتسليم",
    service3_text:
      "تنفيذ إنشائي بمعايير جودة وأمان عالية ليبقى المبنى في أفضل حال لسنوات طويلة.",
    projects_kicker: "أعمال مختارة",
    projects_title: "مشاريع مميزة ودراسات حالة.",
    projects_cta: "ناقش مشروعك معنا",
    project1_tag: "سكني",
    project1_title: "مجمع هورايزون السكني",
    project2_tag: "تجاري",
    project2_title: "برج أكسيس للأعمال",
    project3_tag: "متعدد الاستخدامات",
    project3_title: "مجمع ميريديان",
    project4_tag: "تصميم داخلي",
    project4_title: "بهو لوميير",
    stats_kicker: "بلغة الأرقام",
    stats_title: "نتائج موثوقة في كل مشروع.",
    stat1_value: "15+",
    stat1_label: "سنوات من الخبرة المتراكمة",
    stat2_value: "120+",
    stat2_label: "مشروع تم تسليمه بنجاح",
    stat3_value: "98٪",
    stat3_label: "مشاريع أُنجزت في الوقت المحدد",
    stat4_value: "4.9",
    stat4_label: "متوسط تقييم العملاء",
    contact_kicker: "تواصل",
    contact_title: "لنصمم معاً معلمك القادم.",
    contact_description:
      "شاركنا بعض التفاصيل عن مشروعك القادم، وسيتواصل معك فريقنا خلال يوم عمل واحد.",
    contact_label_name: "الاسم الكامل",
    contact_label_email: "البريد الإلكتروني",
  
    contact_label_budget: "استفسارك عن ماذا",
    contact_label_message: "تفاصيل الموضوع",
    budget_placeholder: "اختر الموضوع",
    budget_option1: "استفسار عام ",
    budget_option2: "استفسار عام ",
    budget_option3: "استفسار عام ",
    budget_option4: "استفسار عام ",
    contact_placeholder_message:
      "أخبرنا عن موقع المشروع، والجدول الزمني، وأهم أهدافك.",
    contact_cta: "إرسال الطلب",
    footer_brand: "فيوتشر بيلد للهندسة المعمارية",
    footer_text:
      "نصمم مساحات مستقبلية بدقة وشفافية وفكر مستدام.",
    footer_studio_heading: "الاستوديو",
    footer_connect_heading: "تواصل",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_madeby: "مفهوم موقع تجريبي لأغراض العرض."
  }
};

function applyLanguage(lang) {
  const chosenLang = lang === "ar" ? "ar" : "en";
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  htmlEl.lang = chosenLang;
  htmlEl.dir = chosenLang === "ar" ? "rtl" : "ltr";

  if (bodyEl) {
    bodyEl.classList.toggle("is-rtl", chosenLang === "ar");
  }

  const dict = translations[chosenLang] || {};

  // Update text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    // Skip numeric counters, they are controlled by animation
    if (el.hasAttribute("data-counter")) return;
    const value = dict[key];
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const value = dict[key];
    if (typeof value === "string" && el instanceof HTMLInputElement) {
      el.placeholder = value;
    }
    if (typeof value === "string" && el instanceof HTMLTextAreaElement) {
      el.placeholder = value;
    }
  });

  // Update language toggle label (simple indicator)
  const toggleButton = document.querySelector(".lang-toggle");
  if (toggleButton instanceof HTMLButtonElement) {
    toggleButton.textContent = chosenLang === "ar" ? "EN" : "AR";
  }

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, chosenLang);
  } catch {
    // ignore storage errors
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const yearSpan = document.getElementById("year");
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const portfolioItems = document.querySelectorAll("[data-portfolio-item]");
  const langToggle = document.querySelector(".lang-toggle");
  const loader = document.querySelector(".page-loader");
  const heroMedia = document.querySelector(".hero-media");

  // Set current year in footer
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // Hide loader once everything is loaded
  if (loader) {
    window.addEventListener("load", () => {
      loader.classList.add("is-hidden");
      window.setTimeout(() => {
        loader.remove();
      }, 500);
    });
  }

  // Initialize language from storage or default to English
  let initialLang = "en";
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "ar" || stored === "en") {
      initialLang = stored;
    }
  } catch {
    // ignore storage errors
  }
  applyLanguage(initialLang);

  // Mobile navigation toggle
  if (navToggle && header && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile nav after clicking a link
    mobileMenu.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        header.classList.remove("is-nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Language toggle button
  if (langToggle instanceof HTMLButtonElement) {
    langToggle.addEventListener("click", () => {
      const currentLang = document.documentElement.lang === "ar" ? "ar" : "en";
      const nextLang = currentLang === "en" ? "ar" : "en";
      applyLanguage(nextLang);
    });
  }

  // Smooth scrolling for in-page navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Portfolio hover effect
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("is-hovered");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("is-hovered");
    });

    // For touch devices: toggle highlight on tap
    item.addEventListener("touchstart", () => {
      item.classList.toggle("is-hovered");
    });
  });

  // Scroll reveal animations
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target instanceof HTMLElement) {
              target.classList.add("is-visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // Sequential delays for specific groups
  const servicesCards = document.querySelectorAll(".services-grid .service-card");
  servicesCards.forEach((card, index) => {
    if (card instanceof HTMLElement) {
      card.style.setProperty("--reveal-delay", `${index * 0.1}s`);
    }
  });

  const statItems = document.querySelectorAll(".stats-grid .stat-item");
  statItems.forEach((item, index) => {
    if (item instanceof HTMLElement) {
      item.style.setProperty("--reveal-delay", `${index * 0.1}s`);
    }
  });

  const contactSection = document.querySelectorAll("#contact .section-header, #contact .contact-form");
  contactSection.forEach((block, index) => {
    if (block instanceof HTMLElement) {
      block.classList.add("reveal-on-scroll");
      block.style.setProperty("--reveal-delay", `${index * 0.1}s`);
    }
  });

  // Animated counters for statistics
  const counterEls = document.querySelectorAll("[data-counter]");

  if (counterEls.length) {
    const animateCounter = (el) => {
      if (!(el instanceof HTMLElement)) return;

      const targetStr = el.getAttribute("data-counter-target") || "0";
      const suffix = el.getAttribute("data-counter-suffix") || "";
      const target = parseFloat(targetStr.replace(/[^\d.]/g, "")) || 0;
      const duration = 1500;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        if (Number.isInteger(target)) {
          el.textContent = `${Math.round(current)}${suffix}`;
        } else {
          el.textContent = `${current.toFixed(1)}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el instanceof HTMLElement && !el.hasAttribute("data-counter-done")) {
              el.setAttribute("data-counter-done", "true");
              animateCounter(el);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    counterEls.forEach((el) => counterObserver.observe(el));
  }

  // Parallax effect for hero background
  if (heroMedia instanceof HTMLElement) {
    let ticking = false;

    const updateParallax = () => {
      const offset = window.scrollY * 0.18;
      heroMedia.style.transform = `translateY(${offset * -0.4}px)`;
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }
});

