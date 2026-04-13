import type { Locale, ServiceDetail } from "@/types";

type LocalizedService = {
  slug: string;
  en: ServiceDetail;
  ar: ServiceDetail;
};

const services: LocalizedService[] = [
  {
    slug: "web-development",
    en: {
      slug: "web-development",
      title: "Website Development",
      category: "Custom Web Experiences",
      image: "/images/services/service1.svg",
      intro:
        "We build premium websites that feel clear, fast, and credible from the first second a visitor lands on the page.",
      overview:
        "Website development at Cobra Creative Solutions is built around business outcomes. We plan the structure, design the experience, and develop the pages so the final product feels premium, responsive, and easy to grow.",
      includes: [
        "Discovery and page planning",
        "Responsive interface development",
        "Semantic, SEO-friendly structure",
        "Performance optimization",
        "Content and layout refinement",
        "Launch support and handoff",
      ],
      audience: [
        "Brands launching a new website",
        "Businesses refreshing an outdated site",
        "Teams that need a scalable web foundation",
      ],
      process: [
        { title: "Discover", description: "We define goals, audience, and page flow before design begins." },
        { title: "Design System", description: "We shape spacing, typography, and interaction style." },
        { title: "Build", description: "We turn the approved structure into a production-ready site." },
        { title: "Launch", description: "We review quality, polish details, and hand over a stable build." },
      ],
      benefits: [
        "Stronger first impression",
        "Faster browsing experience",
        "Clearer conversion paths",
        "Easier long-term growth",
      ],
      faqs: [
        { question: "How long does a website project usually take?", answer: "Most brochure-style sites move quickly once the structure and content are approved." },
        { question: "Will the website be responsive?", answer: "Yes. Every page is built to adapt cleanly across mobile, tablet, laptop, and desktop screens." },
        { question: "Can the site grow later?", answer: "Absolutely. We keep the structure modular so future sections and features can be added without rebuilding the site." },
      ],
      ctaTitle: "Need a website that feels premium and performs well?",
      ctaDescription: "Let's plan a website that presents your brand clearly and gives visitors a strong reason to take action.",
    },
    ar: {
      slug: "web-development",
      title: "تطوير المواقع",
      category: "تجارب ويب مخصصة",
      image: "/images/services/service1.svg",
      intro:
        "نبني مواقع احترافية تبدو واضحة وسريعة وموثوقة من أول لحظة يدخل فيها الزائر.",
      overview:
        "في Cobra Creative Solutions، نطوّر المواقع مع التركيز على النتيجة التجارية. نخطط الهيكل، ونصمم التجربة، ونبني الصفحات لتخرج بشكل فخم ومتجاوب وسهل التوسع.",
      includes: [
        "تحديد الهدف وتخطيط الصفحات",
        "تطوير واجهات متجاوبة",
        "بنية دلالية مناسبة لمحركات البحث",
        "تحسين الأداء والسرعة",
        "تنسيق المحتوى والتخطيط",
        "دعم الإطلاق والتسليم",
      ],
      audience: [
        "العلامات التجارية التي تطلق موقعًا جديدًا",
        "الشركات التي تحدث موقعًا قديمًا",
        "الفرق التي تحتاج أساسًا رقميًا قابلًا للتوسع",
      ],
      process: [
        { title: "الاكتشاف", description: "نحدد الأهداف والجمهور وتدفق الصفحات قبل بدء التصميم." },
        { title: "نظام التصميم", description: "نضبط المسافات والخطوط وطريقة التفاعل." },
        { title: "البناء", description: "نحوّل الهيكل المعتمد إلى موقع جاهز للإطلاق." },
        { title: "الإطلاق", description: "نراجع الجودة ونصقل التفاصيل ونجهز تسليمًا مستقرًا." },
      ],
      benefits: [
        "انطباع أول أقوى",
        "تصفح أسرع وأكثر سلاسة",
        "مسارات تحويل أوضح",
        "قابلية أفضل للنمو",
      ],
      faqs: [
        { question: "كم يستغرق تنفيذ الموقع؟", answer: "غالبًا نتحرك بسرعة بعد اعتماد الهيكل والمحتوى." },
        { question: "هل سيكون متجاوبًا؟", answer: "نعم، يتم بناء كل صفحة لتعمل بوضوح على الهاتف والتابلت والكمبيوتر." },
        { question: "هل يمكن تطويره لاحقًا؟", answer: "بالتأكيد، لأننا نبني الهيكل بشكل مرن يسمح بالتوسع لاحقًا." },
      ],
      ctaTitle: "هل تحتاج موقعًا يبدو فخمًا ويؤدي بشكل ممتاز؟",
      ctaDescription: "دعنا نخطط لموقع يعرض علامتك بوضوح ويمنح الزائر سببًا قويًا لاتخاذ الخطوة التالية.",
    },
  },
  {
    slug: "ecommerce-solutions",
    en: {
      slug: "ecommerce-solutions",
      title: "E-commerce Solutions",
      category: "Conversion-Driven Storefronts",
      image: "/images/services/service2.svg",
      intro:
        "We create online stores that make browsing feel smooth and turn product interest into confident buying decisions.",
      overview:
        "Our e-commerce work removes friction at every step of the journey. From product storytelling to checkout clarity, we build stores that feel trustworthy, premium, and easy to use.",
      includes: [
        "Store structure and category planning",
        "Product page experience",
        "Cart and checkout flow optimization",
        "Conversion-focused content blocks",
        "Responsive storefront design",
        "Launch and post-launch support",
      ],
      audience: [
        "Retail brands selling online",
        "Founders launching a digital product catalog",
        "Teams looking to improve conversion performance",
      ],
      process: [
        { title: "Map", description: "We organize products and journeys so the store feels easy to shop." },
        { title: "Design", description: "We shape product presentation and trust cues around buying intent." },
        { title: "Build", description: "We implement responsive layouts and clean checkout pathways." },
        { title: "Optimize", description: "We review performance, clarity, and usability before launch." },
      ],
      benefits: [
        "Cleaner shopping journeys",
        "Stronger product presentation",
        "Better checkout confidence",
        "More scalable store structure",
      ],
      faqs: [
        { question: "Can you improve an existing store?", answer: "Yes. We can redesign and refine an existing storefront so it feels more premium and easier to use." },
        { question: "Do you support larger catalogs?", answer: "Yes. We can structure stores for both small collections and larger catalogs with clear navigation patterns." },
        { question: "Can the design support future campaigns?", answer: "Yes. We keep campaign sections modular so future promotions are easy to add." },
      ],
      ctaTitle: "Ready to make your store look better and sell better?",
      ctaDescription: "Let's build a storefront that feels premium, trustworthy, and designed to convert.",
    },
    ar: {
      slug: "ecommerce-solutions",
      title: "حلول التجارة الإلكترونية",
      category: "متاجر موجهة للتحويل",
      image: "/images/services/service2.svg",
      intro:
        "نصمم متاجر إلكترونية تجعل استكشاف المنتجات أكثر سلاسة وتحول الاهتمام إلى قرار شراء واثق.",
      overview:
        "نقلل الاحتكاك في كل خطوة من الرحلة. من سرد المنتج إلى وضوح الدفع، نبني متاجر موثوقة وفخمة وسهلة الاستخدام.",
      includes: [
        "تخطيط هيكل المتجر والفئات",
        "تجربة صفحة المنتج",
        "تحسين سلة الشراء ومسار الدفع",
        "مساحات محتوى موجهة للتحويل",
        "تصميم متجر متجاوب",
        "دعم الإطلاق وما بعده",
      ],
      audience: [
        "العلامات التجارية التي تبيع عبر الإنترنت",
        "المؤسسون الذين يطلقون كتالوجًا رقميًا",
        "الفرق التي تريد رفع معدلات التحويل",
      ],
      process: [
        { title: "تخطيط", description: "ننظم المنتجات والمسارات حتى يصبح التسوق أسهل." },
        { title: "تصميم", description: "نصمم عرض المنتج والعناصر الموثوقة لدعم نية الشراء." },
        { title: "بناء", description: "ننفذ المتجر بواجهات متجاوبة ومسارات دفع واضحة." },
        { title: "تحسين", description: "نراجع الأداء والوضوح وسهولة الاستخدام قبل الإطلاق." },
      ],
      benefits: [
        "رحلة شراء أوضح",
        "عرض منتجات أقوى",
        "ثقة أكبر في الدفع",
        "هيكل متجري قابل للتوسع",
      ],
      faqs: [
        { question: "هل يمكنكم تحسين متجر موجود بالفعل؟", answer: "نعم، يمكننا إعادة تصميم المتجر وتحسينه ليصبح أكثر فخامة وأسهل في الاستخدام." },
        { question: "هل تدعمون المتاجر الكبيرة؟", answer: "نعم، يمكننا تنظيم المتاجر الصغيرة والكبيرة مع بنية واضحة للتصفح." },
        { question: "هل يدعم التصميم الحملات المستقبلية؟", answer: "بالتأكيد، لأننا نبقي الأقسام مرنة حتى تكون الإضافات المستقبلية سهلة." },
      ],
      ctaTitle: "هل تريد متجرًا يبدو أفضل ويبيع بشكل أفضل؟",
      ctaDescription: "دعنا نبني متجرًا يبدو فخمًا وموثوقًا ومصممًا لرفع التحويل.",
    },
  },
  {
    slug: "ui-ux-design",
    en: {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      category: "Interface Design Systems",
      image: "/images/services/service3.svg",
      intro:
        "We design interfaces that feel polished, intuitive, and aligned with how people naturally navigate a digital product.",
      overview:
        "Our UI/UX work turns ideas into structured experiences that are easier to understand and more enjoyable to use. We focus on hierarchy, spacing, readability, and interaction patterns that guide users with confidence.",
      includes: [
        "User flow planning",
        "Wireframe direction",
        "Visual system design",
        "Responsive interface layouts",
        "Interaction guidance",
        "Hand-off-ready design files",
      ],
      audience: [
        "Brands needing a clear product interface",
        "Startups shaping a new digital experience",
        "Teams that want a stronger visual system",
      ],
      process: [
        { title: "Understand", description: "We define the core actions users need and reduce unnecessary friction." },
        { title: "Shape", description: "We create wireframes and layout logic that stay easy to scan." },
        { title: "Refine", description: "We apply typography, spacing, and color systems to give the product a premium feel." },
        { title: "Prepare", description: "We organize the design into a clean system ready for development." },
      ],
      benefits: [
        "Clearer navigation",
        "Higher usability",
        "A more premium brand presence",
        "Easier development handoff",
      ],
      faqs: [
        { question: "Do you design for both web and mobile?", answer: "Yes. We consider responsive behavior from the beginning so the interface works across all key screen sizes." },
        { question: "Can you work from an existing brand?", answer: "Absolutely. We can extend an existing identity or create a clearer digital layer around it." },
        { question: "Do you provide a design system?", answer: "Yes. We keep components, spacing, and colors organized so the product stays consistent as it grows." },
      ],
      ctaTitle: "Want an interface that feels polished and effortless?",
      ctaDescription: "Let's design a product experience that guides users naturally and makes your brand look sharper online.",
    },
    ar: {
      slug: "ui-ux-design",
      title: "تصميم UI/UX",
      category: "أنظمة واجهات رقمية",
      image: "/images/services/service3.svg",
      intro:
        "نصمم واجهات تبدو أنيقة وبديهية ومتوافقة مع الطريقة الطبيعية التي يتنقل بها المستخدم داخل المنتج الرقمي.",
      overview:
        "يحوّل عملنا في UI/UX الأفكار إلى تجارب منظمة أسهل في الفهم وأكثر متعة في الاستخدام. نركز على التسلسل البصري والمسافات والقراءة وأنماط التفاعل التي ترشد المستخدم بثقة.",
      includes: [
        "تخطيط مسارات المستخدم",
        "تحديد هيكل الشاشات",
        "تصميم النظام البصري",
        "واجهات متجاوبة",
        "إرشاد التفاعلات",
        "ملفات جاهزة للتطوير",
      ],
      audience: [
        "العلامات التي تحتاج واجهة منتج واضحة",
        "الشركات الناشئة التي تبني تجربة رقمية جديدة",
        "الفرق التي تريد نظامًا بصريًا أقوى",
      ],
      process: [
        { title: "فهم", description: "نحدد الأفعال الأساسية ونقلل التعقيد غير الضروري." },
        { title: "تشكيل", description: "ننشئ Wireframes ومنطق تخطيط سهل المسح بصريًا." },
        { title: "صقل", description: "نطبق الخطوط والمسافات والألوان ليبدو المنتج أكثر فخامة." },
        { title: "الاستعداد", description: "ننظم التصميم داخل نظام واضح وجاهز للتنفيذ." },
      ],
      benefits: [
        "تنقل أوضح",
        "سهولة استخدام أعلى",
        "حضور بصري أفخم",
        "تسليم أسهل للمطورين",
      ],
      faqs: [
        { question: "هل تصممون للويب والموبايل معًا؟", answer: "نعم، نأخذ السلوك المتجاوب في الاعتبار من البداية حتى تعمل الواجهة على كل المقاسات الأساسية." },
        { question: "هل يمكن العمل فوق هوية قائمة؟", answer: "بالتأكيد، يمكننا تطوير الهوية الحالية أو بناء طبقة رقمية أوضح حولها." },
        { question: "هل تقدمون نظام تصميم؟", answer: "نعم، نحافظ على العناصر والمسافات والألوان بشكل منظم حتى يبقى المنتج متسقًا مع نموه." },
      ],
      ctaTitle: "هل تريد واجهة تبدو أنيقة وسهلة في الوقت نفسه؟",
      ctaDescription: "دعنا نصمم تجربة منتج ترشد المستخدم بشكل طبيعي وتظهر علامتك بصورة أقوى.",
    },
  },
  {
    slug: "shopify-development",
    en: {
      slug: "shopify-development",
      title: "Shopify Development",
      category: "Shopify Commerce Builds",
      image: "/images/services/service4.svg",
      intro:
        "We build Shopify stores that look refined, feel smooth to browse, and support long-term growth.",
      overview:
        "Shopify development with our team is focused on clean storefront structure, strong product presentation, and a scalable setup that is easy to manage after launch.",
      includes: [
        "Theme setup and customization",
        "Homepage and collection pages",
        "Product page refinement",
        "Navigation and filtering structure",
        "Responsive checkout support",
        "Launch and maintenance guidance",
      ],
      audience: [
        "Brands launching on Shopify",
        "Stores that need a better visual layer",
        "Teams that want a practical commerce setup",
      ],
      process: [
        { title: "Plan", description: "We define the shop structure and the shopping path before development starts." },
        { title: "Customize", description: "We tailor the storefront so it feels closer to the brand." },
        { title: "Refine", description: "We improve product pages, browsing, and calls to action." },
        { title: "Launch", description: "We test the build thoroughly and prepare a clean release." },
      ],
      benefits: [
        "More polished storefronts",
        "Better product storytelling",
        "Simpler store management",
        "A scalable base for growth",
      ],
      faqs: [
        { question: "Do you only customize themes?", answer: "We can customize themes deeply and shape a storefront that feels tailored to the brand." },
        { question: "Can you improve product pages?", answer: "Yes. We can refine the layout, visuals, and content structure to improve clarity and trust." },
        { question: "Is Shopify a good fit for my business?", answer: "If you need a practical commerce platform with room to scale, Shopify is often a strong choice." },
      ],
      ctaTitle: "Need a Shopify store that feels premium and easy to run?",
      ctaDescription: "We can help you launch a storefront that looks sharper, loads smoothly, and supports your business goals.",
    },
    ar: {
      slug: "shopify-development",
      title: "تطوير Shopify",
      category: "بناء متاجر Shopify",
      image: "/images/services/service4.svg",
      intro:
        "نبني متاجر Shopify تبدو أنيقة وسهلة التصفح وتدعم النمو على المدى الطويل.",
      overview:
        "يركز تطوير Shopify لدينا على هيكل متجر نظيف وعرض قوي للمنتجات وإعداد قابل للتوسع وسهل الإدارة بعد الإطلاق.",
      includes: [
        "إعداد القالب وتخصيصه",
        "الصفحة الرئيسية وصفحات التجميع",
        "تحسين صفحات المنتجات",
        "تنظيم التصفح والفلاتر",
        "دعم تجربة الدفع على كل الشاشات",
        "إرشادات الإطلاق والصيانة",
      ],
      audience: [
        "العلامات التجارية التي تبدأ على Shopify",
        "المتاجر التي تحتاج مظهرًا أقوى",
        "الفرق التي تريد إعدادًا تجاريًا عمليًا",
      ],
      process: [
        { title: "تخطيط", description: "نحدد هيكل المتجر ومسار التسوق قبل بدء التنفيذ." },
        { title: "تخصيص", description: "نعدل المتجر ليبدو أقرب إلى الهوية التجارية." },
        { title: "تحسين", description: "نحسن صفحات المنتجات والتصفح والدعوات للإجراء." },
        { title: "إطلاق", description: "نختبر البناء بدقة ونجهز المتجر لإطلاق نظيف." },
      ],
      benefits: [
        "متاجر أكثر فخامة",
        "سرد أفضل للمنتجات",
        "إدارة أبسط للمتجر",
        "قاعدة قابلة للنمو",
      ],
      faqs: [
        { question: "هل تكتفون بتخصيص القوالب فقط؟", answer: "لا، يمكننا تخصيص القالب بعمق بحيث يبدو المتجر مخصصًا للعلامة." },
        { question: "هل يمكن تحسين صفحات المنتجات؟", answer: "نعم، نستطيع تحسين التخطيط والمرئيات وبنية المحتوى لرفع الوضوح والثقة." },
        { question: "هل Shopify مناسب لعملي؟", answer: "إذا كنت تحتاج منصة تجارة عملية وقابلة للتوسع، فغالبًا Shopify يكون خيارًا قويًا." },
      ],
      ctaTitle: "هل تحتاج متجر Shopify يبدو احترافيًا وسهل الإدارة؟",
      ctaDescription: "يمكننا مساعدتك على إطلاق متجر يبدو أفضل ويعمل بسلاسة ويدعم أهدافك التجارية.",
    },
  },
  {
    slug: "hosting-deployment",
    en: {
      slug: "hosting-deployment",
      title: "Hosting & Deployment",
      category: "Reliable Launch Infrastructure",
      image: "/images/services/service5.svg",
      intro:
        "We handle the technical side of getting your website online so the launch feels stable, smooth, and well prepared.",
      overview:
        "A strong website needs more than design and code. It also needs a dependable launch setup. We handle hosting and deployment with a focus on speed, reliability, and practical maintenance.",
      includes: [
        "Deployment workflow setup",
        "Hosting configuration",
        "Performance checks",
        "SSL and domain support",
        "Release validation",
        "Technical launch guidance",
      ],
      audience: [
        "Businesses getting ready to launch",
        "Teams that need a stable deployment process",
        "Brands that want a simpler technical handoff",
      ],
      process: [
        { title: "Prepare", description: "We review the project and prepare the deployment steps." },
        { title: "Configure", description: "We make sure hosting, domain, and launch settings are aligned." },
        { title: "Deploy", description: "We launch the site and review performance and behavior." },
        { title: "Support", description: "We leave you with a clear setup and practical guidance." },
      ],
      benefits: [
        "A smoother launch process",
        "Less technical friction",
        "Better launch confidence",
        "A dependable site foundation",
      ],
      faqs: [
        { question: "Do you help with the domain connection?", answer: "Yes. We can guide the deployment setup, including domain and hosting configuration." },
        { question: "Can you improve performance?", answer: "We review key technical areas to help the site feel fast and stable after launch." },
        { question: "Can you support future updates?", answer: "Yes. We keep the setup practical so updates and deployments remain manageable later." },
      ],
      ctaTitle: "Need a smooth launch without the technical stress?",
      ctaDescription: "Let us handle hosting and deployment so your website goes live with confidence.",
    },
    ar: {
      slug: "hosting-deployment",
      title: "الاستضافة والنشر",
      category: "بنية إطلاق موثوقة",
      image: "/images/services/service5.svg",
      intro:
        "نتولى الجانب التقني من إطلاق موقعك بحيث تكون العملية مستقرة وسلسة ومجهزة جيدًا.",
      overview:
        "الموقع القوي لا يحتاج إلى التصميم والبرمجة فقط، بل إلى إعداد إطلاق موثوق أيضًا. نحن نتعامل مع الاستضافة والنشر مع تركيز على السرعة والاعتمادية والصيانة العملية.",
      includes: [
        "إعداد مسار النشر",
        "تهيئة الاستضافة",
        "مراجعة الأداء",
        "دعم الـ SSL والنطاق",
        "التحقق من جاهزية الإصدار",
        "إرشاد تقني للإطلاق",
      ],
      audience: [
        "الشركات الجاهزة للإطلاق",
        "الفرق التي تحتاج مسار نشر مستقر",
        "العلامات التي تريد تسليمًا تقنيًا أسهل",
      ],
      process: [
        { title: "التجهيز", description: "نراجع المشروع ونجهز خطوات النشر." },
        { title: "التهيئة", description: "نتأكد من توافق الاستضافة والنطاق وإعدادات الإطلاق." },
        { title: "النشر", description: "نطلق الموقع ونراجع الأداء والسلوك التقني." },
        { title: "الدعم", description: "نترك لك إعدادًا واضحًا وإرشادات عملية للخطوات التالية." },
      ],
      benefits: [
        "إطلاق أكثر سلاسة",
        "احتكاك تقني أقل",
        "ثقة أعلى وقت الإطلاق",
        "أساس موثوق للموقع",
      ],
      faqs: [
        { question: "هل تساعدون في ربط الدومين؟", answer: "نعم، يمكننا مساعدتك في إعداد النشر بما في ذلك ربط النطاق والاستضافة." },
        { question: "هل يمكن تحسين الأداء؟", answer: "نراجع الجوانب التقنية الأساسية حتى يبدو الموقع سريعًا ومستقرًا بعد الإطلاق." },
        { question: "هل يمكنكم دعم التحديثات المستقبلية؟", answer: "نعم، نحافظ على إعداد عملي يجعل التحديثات والنشر لاحقًا أسهل." },
      ],
      ctaTitle: "هل تحتاج إطلاقًا سلسًا بدون ضغط تقني؟",
      ctaDescription: "دعنا نتولى الاستضافة والنشر حتى يخرج موقعك إلى النور بثقة.",
    },
  },
  {
    slug: "maintenance-support",
    en: {
      slug: "maintenance-support",
      title: "Maintenance & Support",
      category: "Ongoing Website Care",
      image: "/images/services/service6.svg",
      intro:
        "We keep your website healthy after launch with support that protects performance, stability, and usability.",
      overview:
        "Post-launch support is what helps a website stay useful over time. We provide practical maintenance and updates so your site can continue performing without becoming hard to manage.",
      includes: [
        "Content and layout updates",
        "Bug fixing and quality checks",
        "Performance review",
        "Security and stability maintenance",
        "Responsive issue support",
        "General site improvements",
      ],
      audience: [
        "Brands that want ongoing help",
        "Teams without an internal web specialist",
        "Businesses that want a healthier, more stable site",
      ],
      process: [
        { title: "Review", description: "We assess the site and identify the areas that need attention first." },
        { title: "Fix", description: "We handle practical updates, quality fixes, and small refinements." },
        { title: "Monitor", description: "We watch for performance or usability issues so the site stays reliable." },
        { title: "Improve", description: "We continue refining the experience so the website remains strong over time." },
      ],
      benefits: [
        "Less maintenance stress",
        "A more stable website",
        "Faster issue resolution",
        "Better long-term performance",
      ],
      faqs: [
        { question: "Can you maintain an existing site you did not build?", answer: "Yes. We can usually step in, review the setup, and support the site from there." },
        { question: "Do you handle small changes too?", answer: "Absolutely. Maintenance often includes small content, design, and technical updates." },
        { question: "Is support ongoing or project-based?", answer: "We can structure support around what your business needs, whether that is ongoing care or periodic help." },
      ],
      ctaTitle: "Want your website looked after after launch?",
      ctaDescription: "We can help keep the site fast, stable, and ready for the next phase of growth.",
    },
    ar: {
      slug: "maintenance-support",
      title: "الصيانة والدعم",
      category: "رعاية مستمرة للموقع",
      image: "/images/services/service6.svg",
      intro:
        "نحافظ على صحة موقعك بعد الإطلاق من خلال دعم يحمي الأداء والثبات وسهولة الاستخدام.",
      overview:
        "الدعم بعد الإطلاق هو ما يجعل الموقع مفيدًا مع مرور الوقت. نحن نقدم صيانة وتحديثات عملية حتى يظل موقعك فعالًا دون أن يصبح صعب الإدارة.",
      includes: [
        "تحديثات المحتوى والتخطيط",
        "إصلاح الأخطاء ومراجعة الجودة",
        "مراجعة الأداء",
        "الصيانة الأمنية والثبات",
        "دعم مشاكل التوافق والاستجابة",
        "تحسينات عامة للموقع",
      ],
      audience: [
        "العلامات التي تريد دعمًا مستمرًا",
        "الفرق التي لا تملك مختص ويب داخلي",
        "الشركات التي تريد موقعًا أكثر استقرارًا",
      ],
      process: [
        { title: "المراجعة", description: "نقيّم الموقع ونحدد الجوانب التي تحتاج اهتمامًا أولًا." },
        { title: "الإصلاح", description: "نتولى التحديثات العملية والإصلاحات البسيطة." },
        { title: "المراقبة", description: "نتابع مشاكل الأداء أو الاستخدام حتى يبقى الموقع موثوقًا." },
        { title: "التحسين", description: "نواصل تحسين التجربة حتى يظل الموقع قويًا بمرور الوقت." },
      ],
      benefits: [
        "ضغط أقل في الصيانة",
        "موقع أكثر ثباتًا",
        "استجابة أسرع للمشكلات",
        "أداء أفضل على المدى الطويل",
      ],
      faqs: [
        { question: "هل يمكنكم صيانة موقع لم تبنوه أنتم؟", answer: "نعم، غالبًا نستطيع مراجعة الإعداد الحالي ودعم الموقع من هناك مباشرة." },
        { question: "هل تتعاملون مع التعديلات الصغيرة أيضًا؟", answer: "بالتأكيد، فالصيانة عادة تشمل تحديثات محتوى وتصميم وتعديلات تقنية بسيطة." },
        { question: "هل الدعم مستمر أم حسب المشروع؟", answer: "يمكن تنظيم الدعم حسب احتياجك، سواء كان دعمًا مستمرًا أو بشكل دوري." },
      ],
      ctaTitle: "هل تريد من يهتم بموقعك بعد الإطلاق؟",
      ctaDescription: "نستطيع مساعدتك في إبقاء الموقع سريعًا ومستقرًا وجاهزًا للمرحلة التالية من النمو.",
    },
  },
];

export function getServiceBySlug(slug: string, locale: Locale = "ar") {
  const item = services.find((service) => service.slug === slug);
  if (!item) return undefined;
  return item[locale];
}

export function getLocalizedServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
