import type { Locale, NavLink, ProjectItem, ServiceItem } from "@/types";

type HeroSlide = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type LanguageContent = {
  nav: {
    links: NavLink[];
    primaryCta: string;
    languageToggleLabel: string;
  };
  hero: {
    slides: HeroSlide[];
    typingLines: string[];
    highlights: string[];
    stats: { value: string; label: string }[];
  };
  joinUsBenefits: {
    sectionTitle: string;
    items: string[];
  };
  whatYouGet: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  workProcess: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      image: string;
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    mission: string;
    highlights: { title: string; description: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    reasons: { title: string; description: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    notes: string[];
  };
  footer: {
    brandName: string;
    brandTagline: string;
    description: string;
    servicesTitle: string;
    quickLinksTitle: string;
    contactTitle: string;
    contactText: string;
    copyright: string;
  };
  whatsapp: {
    tooltipTitle: string;
    tooltipText: string;
  };
};

const sharedProjectsEn: ProjectItem[] = [
  {
    title: "Galaxy Repair UAE",
    category: "Service Website",
    description: "A credibility-first site that frames services clearly and supports quick action.",
    impact: "Clear positioning that turns visitors into inquiries.",
    image: "/images/projects/galaxyrepairuae-img.png",
    demoUrl: "#contact",
  },
  {
    title: "FreshCart Commerce",
    category: "E-commerce",
    description: "A conversion-ready storefront focused on product discovery and a smoother path to checkout.",
    impact: "A shopping flow designed to support stronger sales intent.",
    image: "/images/projects/fresh-cart-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Daniels Portfolio",
    category: "Personal Brand",
    description: "A refined portfolio that presents expertise with confidence and clarity.",
    impact: "A premium personal brand presentation with strong visual authority.",
    image: "/images/projects/DANIELS-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Yummy App",
    category: "Restaurant UI",
    description: "A polished food experience with friendly navigation and a warm visual rhythm.",
    impact: "A memorable interface that makes browsing feel effortless.",
    image: "/images/projects/yummy-app-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Fashion Boutique",
    category: "Retail Experience",
    description: "An editorial-style storefront designed to showcase products with taste.",
    impact: "A stylish retail system that highlights product value instantly.",
    image: "/images/projects/fustan-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Social Campaign Hub",
    category: "Marketing Landing",
    description: "A conversion-focused landing page built around message clarity and momentum.",
    impact: "A stronger campaign presentation with a clear action path.",
    image: "/images/projects/saqrablkmedia-img.png",
    demoUrl: "#contact",
  },
];

const sharedProjectsAr: ProjectItem[] = [
  {
    title: "Galaxy Repair UAE",
    category: "موقع خدمات",
    description: "موقع يضع المصداقية في المقدمة ويعرض الخدمات بوضوح ويشجع على التواصل السريع.",
    impact: "تموضع أوضح يحول الزوار إلى استفسارات.",
    image: "/images/projects/galaxyrepairuae-img.png",
    demoUrl: "#contact",
  },
  {
    title: "FreshCart Commerce",
    category: "تجارة إلكترونية",
    description: "تجربة متجر مصممة لدعم نية الشراء وتحسين المسار نحو الدفع.",
    impact: "مسار شراء يدعم نية البيع بشكل أقوى.",
    image: "/images/projects/fresh-cart-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Daniels Portfolio",
    category: "علامة شخصية",
    description: "عرض شخصي راقٍ يقدم الخبرة بوضوح وثقة.",
    impact: "تقديم شخصي فاخر يمنح الحضور البصري قوة أكبر.",
    image: "/images/projects/DANIELS-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Yummy App",
    category: "واجهة مطعم",
    description: "واجهة طعام أنيقة بتصفح سهل وإيقاع بصري دافئ.",
    impact: "تجربة لا تنسى تجعل التصفح سلسًا.",
    image: "/images/projects/yummy-app-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Fashion Boutique",
    category: "تجربة بيع",
    description: "واجهة متجر أنيقة تبرز قيمة المنتجات فورًا.",
    impact: "عرض أقوى للمنتجات يعزز الإحساس بالجودة من أول نظرة.",
    image: "/images/projects/fustan-img.png",
    demoUrl: "#contact",
  },
  {
    title: "Social Campaign Hub",
    category: "صفحة تسويقية",
    description: "صفحة هبوط تركز على وضوح الرسالة والزخم.",
    impact: "عرض أوضح للحملة مع مسار إجراء واضح.",
    image: "/images/projects/saqrablkmedia-img.png",
    demoUrl: "#contact",
  },
];

export const contentByLocale: Record<Locale, LanguageContent> = {
  en: {
    nav: {
      links: [
        { label: "Home", href: "#home" },
        { label: "Join Us", href: "#join-us-benefits" },
        { label: "Why Cobra", href: "#what-you-get" },
        { label: "How We Work", href: "#how-we-work" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "FAQ", href: "#why" },
      ],
      primaryCta: "Start Your Project",
      languageToggleLabel: "العربية",
    },
    hero: {
      slides: [
        {
          image: "/images/hero/hero1.png",
          eyebrow: "",
          title: "We build premium websites for brands that want more trust, more leads, and better conversions.",
          description:
            "We help service businesses and growing brands turn their website into a clearer sales tool with strong design, smooth UX, and a focused call to action.",
          primaryCta: "Start Your Project",
          secondaryCta: "WhatsApp Us",
        },
        {
          image: "/images/hero/hero2.png",
          eyebrow: "E-commerce Focus",
          title: "Online stores designed to look premium and sell with less friction.",
          description:
            "From storefront structure to checkout flow, we create shopping experiences that feel reliable, modern, and easy to buy from.",
          primaryCta: "Start Your Project",
          secondaryCta: "WhatsApp Us",
        },
        {
          image: "/images/hero/hero3.png",
          eyebrow: "Full Service Delivery",
          title: "Design, development, and launch handled in one focused workflow.",
          description:
            "We take ideas from structure to launch with clear communication, clean execution, and attention to every detail that affects results.",
          primaryCta: "Start Your Project",
          secondaryCta: "WhatsApp Us",
        },
      ],
      typingLines: [
        "We design to build trust.",
        "We build for growth.",
        "We turn clicks into inquiries.",
        "We help brands look premium online.",
      ],
      highlights: ["Premium design direction", "Responsive by default", "SEO-friendly structure"],
      stats: [
        { value: "03", label: "Core service pillars" },
        { value: "100%", label: "Responsive-first builds" },
        { value: "24/7", label: "Support-ready mindset" },
      ],
    },
    joinUsBenefits: {
      sectionTitle: "Join Us and Get",
      items: [
        "A Website Designed Specifically for You",
        "A Professional Digital Brand Identity",
        "Better Search Engine Visibility (SEO)",
        "A Professional Business Email for Your Brand",
        "Effective Digital Advertising Campaigns",
      ],
    },
    whatYouGet: {
      sectionTitle: "What You Get With Us",
      sectionSubtitle: "Premium outcomes designed to strengthen your digital presence and growth.",
      items: [
        {
          title: "Professional Ad Management",
          description: "Data-driven ad management to reach qualified audiences and improve ROI.",
        },
        {
          title: "Better Google My Business Visibility",
          description: "Optimized local presence that helps customers discover and trust your business.",
        },
        {
          title: "Regular Website Updates",
          description: "Continuous content and technical updates to keep your website fresh and effective.",
        },
        {
          title: "Ongoing Technical Support",
          description: "Reliable support to solve issues quickly and keep operations smooth.",
        },
        {
          title: "Better Search Engine Visibility",
          description: "SEO enhancements that improve ranking opportunities for high-intent keywords.",
        },
        {
          title: "Responsive Design for All Devices",
          description: "A consistent experience across mobile, tablet, and desktop screens.",
        },
        {
          title: "Automatic Security and Technical Updates",
          description: "Preventive updates that keep your platform stable, secure, and current.",
        },
        {
          title: "Accurate Performance Reports",
          description: "Clear reporting dashboards for traffic, behavior, and campaign outcomes.",
        },
        {
          title: "Conversion and Sales Optimization",
          description: "Practical CRO improvements that turn visits into more inquiries and sales.",
        },
        {
          title: "Professional Social Media Management",
          description: "Consistent social execution aligned with your brand and business goals.",
        },
        {
          title: "Better Website Speed and Performance",
          description: "Performance optimization that improves load time and user experience.",
        },
        {
          title: "Stronger Business Email and Digital Identity",
          description: "Professional communication setup that reinforces credibility and trust.",
        },
      ],
    },
    workProcess: {
      sectionTitle: "How We Work",
      sectionSubtitle: "A structured process built to turn your vision into measurable digital growth.",
      steps: [
        {
          number: "1#",
          title: "Understanding Your Vision",
          description:
            "We begin by exploring your business goals, target audience, and positioning. This discovery phase gives us a strong strategic foundation before design and development start.",
          image: "/images/services/service1.svg",
        },
        {
          number: "2#",
          title: "Strategic Planning",
          description:
            "We build a clear roadmap covering structure, features, priorities, and user flow. Every decision is aligned with growth, scalability, and long-term business outcomes.",
          image: "/images/services/service2.svg",
        },
        {
          number: "3#",
          title: "Design & User Experience",
          description:
            "We craft modern interfaces that are visually refined and easy to navigate. The experience is designed to reflect your brand while improving engagement and trust.",
          image: "/images/services/service3.svg",
        },
        {
          number: "4#",
          title: "Development & Implementation",
          description:
            "We translate approved designs into high-quality code with responsive behavior, clean architecture, and reliable performance across modern devices and browsers.",
          image: "/images/services/service4.svg",
        },
        {
          number: "5#",
          title: "Testing & Quality Assurance",
          description:
            "We run comprehensive checks for usability, speed, responsiveness, and technical quality to ensure your product is stable, polished, and ready for launch.",
          image: "/images/services/service5.svg",
        },
        {
          number: "6#",
          title: "Launch & Continuous Growth",
          description:
            "After launch, we monitor performance, optimize key touchpoints, and provide ongoing support to help your digital presence keep growing with confidence.",
          image: "/images/services/service6.svg",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "A premium service stack built for modern brands that need clarity and momentum.",
      description:
        "We combine design, development, deployment, and support into a clear system that helps your business look sharper, load faster, and convert better.",
      items: [
        {
          slug: "web-development",
          title: "Website Development",
          description: "Custom websites engineered for speed, clarity, and stronger conversion paths.",
          image: "/images/services/service1.svg",
          badge: "Build",
        },
        {
          slug: "ecommerce-solutions",
          title: "E-commerce Solutions",
          description: "Conversion-focused storefronts, product journeys, and checkout flows built to drive revenue.",
          image: "/images/services/service2.svg",
          badge: "Sell",
        },
        {
          slug: "ui-ux-design",
          title: "UI/UX Design",
          description: "Premium interface design, intuitive flow, and visual systems that feel refined and modern.",
          image: "/images/services/service3.svg",
          badge: "Design",
        },
        {
          slug: "shopify-development",
          title: "Shopify Development",
          description: "Flexible Shopify builds with polished storefronts, smoother discovery, and a scalable structure.",
          image: "/images/services/service4.svg",
          badge: "Shopify",
        },
        {
          slug: "hosting-deployment",
          title: "Hosting & Deployment",
          description: "Reliable hosting setup, deployment workflows, and performance-focused technical support.",
          image: "/images/services/service5.svg",
          badge: "Launch",
        },
        {
          slug: "maintenance-support",
          title: "Maintenance & Support",
          description: "Ongoing updates, optimizations, and practical support to keep your site healthy and fast.",
          image: "/images/services/service6.svg",
          badge: "Care",
        },
      ],
    },
    showcase: {
      eyebrow: "Featured Work",
      title: "Success stories that show how design turns into business momentum.",
      description:
        "A more meaningful showcase built around real outcomes, brand clarity, and the kind of presentation that makes work feel valuable.",
      items: sharedProjectsEn,
    },
    about: {
      eyebrow: "About",
      title: "A creative partner for brands that want to look sharper, cleaner, and more trustworthy online.",
      description:
        "Cobra Creative Solutions helps businesses present themselves with confidence through modern design, responsive development, and reliable delivery that feels premium from the first visit.",
      mission:
        "Our mission is to create digital experiences that feel premium from the first impression and still stay practical to manage after launch.",
      highlights: [
        {
          title: "Strategy-first",
          description: "We align the goals, audience, and structure before the first visual detail begins.",
        },
        {
          title: "Polished execution",
          description: "We care about detail, spacing, and interaction polish in a consistent, considered way.",
        },
        {
          title: "Scalable systems",
          description: "We build clean structures that can grow as your brand and content evolve.",
        },
      ],
    },
    why: {
      eyebrow: "Why Us",
      title: "Practical reasons Cobra Creative Solutions is a trusted choice.",
      description:
        "The goal is not just a beautiful page, but a digital foundation that signals credibility, works efficiently, and remains easy to evolve later.",
      reasons: [
        {
          title: "Why does the design feel premium?",
          description:
            "Visual balance, strong typography, and thoughtful spacing give the first impression real value.",
        },
        {
          title: "How do you handle responsiveness?",
          description:
            "We make sure every screen feels natural and comfortable on mobile, tablet, and desktop.",
        },
        {
          title: "Is the structure good for search engines?",
          description:
            "Yes, we use semantic structure and clear hierarchy to support understanding and discovery.",
        },
        {
          title: "Will the website stay fast?",
          description:
            "We keep the implementation light and the media optimized so the experience stays smooth.",
        },
        {
          title: "Can the website grow later?",
          description:
            "Absolutely, the codebase is modular and ready to expand as your needs evolve.",
        },
        {
          title: "Do you provide support after launch?",
          description:
            "Yes, we provide practical post-launch support to make maintenance and improvements easier.",
        },
      ],
    },
    cta: {
      eyebrow: "Start now",
      title: "Ready to build a website that feels premium from day one?",
      description:
        "Let's shape a homepage that introduces your brand clearly, presents your work with confidence, and gives potential clients a reason to reach out.",
      primary: "Start Your Project",
      secondary: "WhatsApp Us",
      notes: [
        "Fast response and clear communication",
        "A structured plan before development begins",
        "A clean launch-ready handoff",
      ],
    },
    footer: {
      brandName: "Cobra",
      brandTagline: "We turn your ideas into digital growth",
      description:
        "Cobra Creative Solutions builds polished digital experiences that help brands present themselves with confidence, clarity, and momentum.",
      servicesTitle: "Services",
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact",
      contactText: "Clear response, direct contact, practical next step.",
      copyright: "Copyright 2026 Cobra Creative Solutions. All rights reserved.",
    },
    whatsapp: {
      tooltipTitle: "Need help?",
      tooltipText: "Chat with us for a fast reply",
    },
  },
  ar: {
    nav: {
      links: [
        { label: "الرئيسية", href: "#home" },
        { label: "اشترك معنا", href: "#join-us-benefits" },
        { label: "لماذا كوبرا", href: "#what-you-get" },
        { label: "طريقة العمل", href: "#how-we-work" },
        { label: "الخدمات", href: "#services" },
        { label: "المشاريع", href: "#projects" },
        { label: "من نحن", href: "#about" },
        { label: "الأسئلة الشائعة", href: "#why" },
      ],
      primaryCta: "ابدأ مشروعك",
      languageToggleLabel: "العربية",
    },
    hero: {
      slides: [
        {
          image: "/images/hero/hero1.png",
          eyebrow: "",
          title: "كوبرا للحلول الإبداعية",
          description:
            "مواقع عصرية، وتصميم استراتيجي، وتنفيذ احترافي يعزز الثقة ويدفع الجمهور لاتخاذ القرار.",
          primaryCta: "ابدأ مشروعك",
          secondaryCta: "استعرض الخدمات",
        },
        {
          image: "/images/hero/hero2.png",
          eyebrow: "التجارة الإلكترونية",
          title: "حلول تجارة إلكترونية ذكية مصممة للتحويل",
          description:
            "من تصميم المتجر إلى التنفيذ القابل للتوسع، نبني تجارب رقمية تدعم النمو الحقيقي.",
          primaryCta: "استعرض الأعمال",
          secondaryCta: "تواصل معنا",
        },
        {
          image: "/images/hero/hero3.png",
          eyebrow: "تنفيذ متكامل",
          title: "التصميم، التطوير، والإطلاق في مسار واحد",
          description:
            "نحوّل الأفكار إلى منتجات رقمية عالية الأداء بوضوح وسرعة واهتمام بالتفاصيل.",
          primaryCta: "ابدأ الآن",
          secondaryCta: "شاهد الخدمات",
        },
      ],
      typingLines: [
        "نبني مواقع تحقق النتائج.",
        "نصمم تجارب تُباع.",
        "نساعد العلامات على النمو.",
        "نحوّل الأفكار إلى نجاح رقمي.",
      ],
      highlights: ["اتجاه بصري فاخر", "متجاوب في كل الأجهزة", "هيكل مناسب لمحركات البحث"],
      stats: [
        { value: "03", label: "محاور خدمة أساسية" },
        { value: "100%", label: "تصميم متجاوب أولاً" },
        { value: "24/7", label: "جاهزية للدعم والمتابعة" },
      ],
    },
    joinUsBenefits: {
      sectionTitle: "اشترك معنا واحصل على",
      items: [
        "موقع إلكتروني مصمم خصيصًا لك",
        "هوية تجارية رقمية احترافية",
        "تحسين الظهور في محركات البحث (SEO)",
        "بريد إلكتروني احترافي يعكس علامتك التجارية",
        "حملات إعلانية رقمية فعالة",
      ],
    },
    whatYouGet: {
      sectionTitle: "اشترك معنا واحصل على",
      sectionSubtitle: "منظومة نتائج رقمية احترافية لتقوية حضورك وزيادة فرص النمو.",
      items: [
        {
          title: "إدارة إعلانية احترافية",
          description: "نُدير حملاتك بشكل مدروس للوصول للعملاء المناسبين وتحقيق نتائج أفضل.",
        },
        {
          title: "تحسين ظهورك على Google My Business",
          description: "نعزز حضورك المحلي حتى يظهر نشاطك بوضوح أمام العملاء القريبين منك.",
        },
        {
          title: "تحديثات منتظمة للموقع",
          description: "نحافظ على موقعك محدثًا باستمرار ليبقى سريعًا وفعالًا ومواكبًا للنمو.",
        },
        {
          title: "دعم فني مستمر",
          description: "دعم تقني واضح وسريع لمعالجة أي مشكلة وضمان استقرار عملك الرقمي.",
        },
        {
          title: "تحسين الظهور في محركات البحث",
          description: "نُحسن بنية الموقع والمحتوى لزيادة فرص الظهور في نتائج البحث.",
        },
        {
          title: "تصميم متجاوب لكل الأجهزة",
          description: "تجربة استخدام متوازنة ومريحة على الهاتف والتابلت وسطح المكتب.",
        },
        {
          title: "تحديثات أمنية وتقنية تلقائية",
          description: "تحديثات دورية تقلل المخاطر وتحافظ على أمان الموقع واستقراره.",
        },
        {
          title: "تقارير أداء دقيقة",
          description: "تقارير واضحة تساعدك على فهم النتائج واتخاذ قرارات تسويقية أذكى.",
        },
        {
          title: "تحسين التحويلات والمبيعات",
          description: "تحسين مستمر لمسار الزائر لرفع نسبة التحويل وزيادة المبيعات.",
        },
        {
          title: "إدارة احترافية للسوشيال ميديا",
          description: "خطة محتوى وتنفيذ منتظم يعكسان قوة علامتك أمام جمهورك.",
        },
        {
          title: "سرعة وأداء أفضل للموقع",
          description: "تحسينات تقنية تجعل الموقع أسرع وأكثر استقرارًا لتجربة أفضل.",
        },
        {
          title: "بريد احترافي وهوية رقمية أقوى",
          description: "بريد أعمال احترافي وهوية رقمية متماسكة تعززان ثقة العملاء.",
        },
      ],
    },
    workProcess: {
      sectionTitle: "طريقة عملنا",
      sectionSubtitle: "منهج عمل منظم يحول رؤيتك إلى حضور رقمي قوي ونتائج قابلة للقياس.",
      steps: [
        {
          number: "1#",
          title: "فهم رؤيتك وأهدافك",
          description:
            "نبدأ بدراسة أهداف نشاطك، جمهورك المستهدف، وتموضعك في السوق. هذه المرحلة تمنحنا أساسًا استراتيجيًا واضحًا قبل البدء بأي تصميم أو تطوير.",
          image: "/images/services/service1.svg",
        },
        {
          number: "2#",
          title: "التخطيط الاستراتيجي",
          description:
            "نضع خارطة طريق دقيقة تشمل البنية، الأولويات، المزايا، وتدفق المستخدم. كل قرار يُبنى على أهدافك التجارية وقابلية التوسع على المدى الطويل.",
          image: "/images/services/service2.svg",
        },
        {
          number: "3#",
          title: "التصميم وتجربة المستخدم",
          description:
            "نصمم واجهات عصرية واضحة تعكس هوية علامتك وتقدم تجربة استخدام سلسة. الهدف هو رفع التفاعل وتعزيز الثقة منذ أول زيارة.",
          image: "/images/services/service3.svg",
        },
        {
          number: "4#",
          title: "التطوير والتنفيذ الدقيق",
          description:
            "نحوّل التصميم إلى منتج رقمي فعلي بكود نظيف وهيكل قوي، مع أداء متجاوب واستقرار عالٍ على مختلف الأجهزة والمتصفحات.",
          image: "/images/services/service4.svg",
        },
        {
          number: "5#",
          title: "الاختبار وضمان الجودة",
          description:
            "نجري اختبارات شاملة للأداء، سهولة الاستخدام، والتوافق لضمان تجربة متكاملة ومستقرة قبل الإطلاق النهائي.",
          image: "/images/services/service5.svg",
        },
        {
          number: "6#",
          title: "الإطلاق والتطوير المستمر",
          description:
            "بعد الإطلاق نتابع الأداء ونقدّم تحسينات مستمرة ودعمًا عمليًا يساعد نشاطك على النمو الرقمي بثبات وثقة.",
          image: "/images/services/service6.svg",
        },
      ],
    },
    services: {
      eyebrow: "الخدمات",
      title: "منظومة خدمات فاخرة مصممة للعلامات الحديثة.",
      description:
        "نجمع بين التصميم، والتطوير، والنشر، والدعم ضمن نظام واضح يساعد نشاطك على الحركة أسرع والظهور بشكل أفضل.",
      items: [
        {
          slug: "web-development",
          title: "تطوير المواقع",
          description: "مواقع مخصصة بتركيز على الأداء، والوضوح، ومسارات تحويل قوية.",
          image: "/images/services/service1.svg",
          badge: "بناء",
        },
        {
          slug: "ecommerce-solutions",
          title: "حلول التجارة الإلكترونية",
          description: "متاجر متكاملة وتجارب شراء تركز على تحويل الزوار إلى عملاء.",
          image: "/images/services/service2.svg",
          badge: "بيع",
        },
        {
          slug: "ui-ux-design",
          title: "تصميم UI/UX",
          description: "واجهات راقية، وتجارب استخدام واضحة، ونظام بصري حديث ومهني.",
          image: "/images/services/service3.svg",
          badge: "تصميم",
        },
        {
          slug: "shopify-development",
          title: "تطوير Shopify",
          description: "متاجر Shopify مرنة بهيكل قابل للتوسع واكتشاف منتجات سلس.",
          image: "/images/services/service4.svg",
          badge: "Shopify",
        },
        {
          slug: "hosting-deployment",
          title: "الاستضافة والإطلاق",
          description: "إعداد استضافة موثوقة ومسارات نشر عملية ودعم تقني يركز على السرعة.",
          image: "/images/services/service5.svg",
          badge: "إطلاق",
        },
        {
          slug: "maintenance-support",
          title: "الصيانة والدعم",
          description: "تحديثات وتحسينات ودعم مستمر للحفاظ على الموقع سريعًا وسليمًا.",
          image: "/images/services/service6.svg",
          badge: "رعاية",
        },
      ],
    },
    showcase: {
      eyebrow: "أعمال مميزة",
      title: "قصص نجاح تُظهر كيف يتحول التصميم إلى زخم تجاري.",
      description:
        "عرض أكثر معنى يركز على النتائج، ووضوح العلامة، وطريقة تقديم توحي بقيمة حقيقية للعمل.",
      items: sharedProjectsAr,
    },
    about: {
      eyebrow: "من نحن",
      title: "شريك إبداعي للعلامات التي تريد حضورًا بصريًا أقوى.",
      description:
        "تساعد Cobra Creative Solutions الشركات على تقديم نفسها بثقة عبر التصميم الحديث، والتطوير المتجاوب، والتنفيذ الموثوق.",
      mission:
        "هدفنا بناء تجارب رقمية تبدو فاخرة من أول انطباع، وتبقى عملية وسهلة الإدارة بعد الإطلاق.",
      highlights: [
        {
          title: "استراتيجية أولاً",
          description: "ننّسق الأهداف والجمهور والبنية قبل أن يبدأ أي تفصيل بصري.",
        },
        {
          title: "تنفيذ راقٍ",
          description: "نعتني بالتفاصيل والمسافات والتفاعلات بشكل متسق ومدروس.",
        },
        {
          title: "أنظمة قابلة للتوسع",
          description: "نبني هياكل نظيفة يمكنها النمو مع تطور العلامة والمحتوى.",
        },
      ],
    },
    why: {
      eyebrow: "لماذا نحن",
      title: "أسباب عملية تجعل Cobra Creative Solutions خيارًا موثوقًا.",
      description:
        "الهدف ليس مجرد صفحة جميلة، بل أساس رقمي يوحي بالمصداقية، ويعمل بكفاءة، ويسهل تطويره لاحقًا.",
      reasons: [
        {
          title: "لماذا يبدو التصميم فاخراً؟",
          description:
            "توازن بصري، وطباعة قوية، ومسافات مدروسة تمنح الانطباع الأول قيمة حقيقية.",
        },
        {
          title: "كيف تتعاملون مع التوافق مع الشاشات؟",
          description:
            "نراعي كل الشاشات ليبدو الموقع طبيعيًا ومريحًا على الهاتف واللوحي والكمبيوتر.",
        },
        {
          title: "هل الهيكل مناسب لمحركات البحث؟",
          description:
            "نعم، نستخدم ترميزًا دلاليًا وهيكلًا واضحًا يدعم الفهم والاكتشاف.",
        },
        {
          title: "هل سيبقى الموقع سريعًا؟",
          description:
            "نحافظ على تنفيذ خفيف ووسائط محسنة لتبقى التجربة سريعة وسلسة.",
        },
        {
          title: "هل يمكن تطوير الموقع لاحقًا؟",
          description:
            "بالتأكيد، قاعدة الكود مرنة وقابلة للتوسعة مع تطور احتياجاتك.",
        },
        {
          title: "هل يوجد دعم بعد الإطلاق؟",
          description:
            "نعم، نوفر دعمًا عمليًا بعد الإطلاق لضمان سهولة الصيانة والتحسين.",
        },
      ],
    },
    cta: {
      eyebrow: "ابدأ الآن",
      title: "هل أنت جاهز لبناء موقع يبدو فاخراً منذ اليوم الأول؟",
      description:
        "لنصمم صفحة رئيسية تقدم علامتك بوضوح، وتعرض أعمالك بشكل جميل، وتعطي العملاء سببًا حقيقيًا للتواصل معك.",
      primary: "ابدأ مشروعك",
      secondary: "واتساب",
      notes: [
        "استجابة سريعة وتواصل واضح",
        "خطة منظمة قبل بدء التنفيذ",
        "تسليم نظيف وجاهز للإطلاق",
      ],
    },
    footer: {
      brandName: "كوبرا",
      brandTagline: "نحوّل أفكارك إلى حضور رقمي يجذب عملاءك",
      description:
        "تبني Cobra Creative Solutions تجارب رقمية مصقولة تساعد العلامات التجارية على الظهور بثقة ووضوح وزخم.",
      servicesTitle: "الخدمات",
      quickLinksTitle: "روابط سريعة",
      contactTitle: "تواصل",
      contactText: "رد واضح، تواصل مباشر، وخطوة تالية عملية.",
      copyright: "حقوق النشر 2026 Cobra Creative Solutions. جميع الحقوق محفوظة.",
    },
    whatsapp: {
      tooltipTitle: "تحتاج مساعدة؟",
      tooltipText: "تحدث معنا",
    },
  },
};


