import type { ShowcaseProject } from "@/types";

type ProjectImageKey =
  | "lawyer-portfolio-img"
  | "eldokshmators-img"
  | "fresh-cart-img"
  | "quotewise-img"
  | "dhai-img"
  | "fustan-img"
  | "galaxyrepairuae-img"
  | "yummy-app-img"
  | "mealify-img"
  | "saqrablkmedia-img"
  | "sharke1-img"
  | "daniels-img"
  | "personal-portfolio-img";

type ProjectImageMap = Record<ProjectImageKey, string>;

// خريطة الصور: نحول أسماء العناصر المنطقية إلى أسماء الملفات الفعلية داخل public
const projectImageMap: ProjectImageMap = {
  "lawyer-portfolio-img": "/images/projects/lawer protoflio-img.png",
  "eldokshmators-img": "/images/projects/eldokshmators-img.png",
  "fresh-cart-img": "/images/projects/fresh-cart-img.png",
  "quotewise-img": "/images/projects/QuoteWise-img.png",
  "dhai-img": "/images/projects/dhai-img.png",
  "fustan-img": "/images/projects/fustan-img.png",
  "galaxyrepairuae-img": "/images/projects/galaxyrepairuae-img.png",
  "yummy-app-img": "/images/projects/yummy-app-img.png",
  "mealify-img": "/images/projects/mealify-img.png",
  "saqrablkmedia-img": "/images/projects/saqrablkmedia-img.png",
  "sharke1-img": "/images/projects/generated-image-64b34a82-5e68-4cae-b0b1-d31eb514db70.png",
  "daniels-img": "/images/projects/DANIELS-img.png",
  "personal-portfolio-img": "/images/projects/personal-protoflio-img.png",
};

function resolveProjectImage(imageKey: ProjectImageKey): string {
  return projectImageMap[imageKey] ?? projectImageMap["fresh-cart-img"];
}

export const projectsData: ShowcaseProject[] = [
  {
    title: "محمد سامي – مستشار قانوني",
    image: resolveProjectImage("lawyer-portfolio-img"),
    link: "https://mohamed-sami-i58t.vercel.app/services/legal-memos",
    category: "Business Website",
    summary: "A trust-focused legal presence designed to convert visitors into direct inquiries.",
  },
  {
    title: "منصة بيع السيارات",
    image: resolveProjectImage("eldokshmators-img"),
    link: "https://eldokshmators.netlify.app/?fbclid=IwY2xjawQ-8d5leHRuA2FlbQIxMABicmlkETFFTUdSYVBjUThuT3pkNXZyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmfgz8iNmdXUfx_-fYLiKnrq8v59EL8HWeREEPpOhzEknkj3boNBhQ3VZdw7_aem_wPOnowI6BHga-NL_WrS-lA#fromHistory",
    category: "Marketplace",
    summary: "A marketplace layout built to present inventory clearly and push faster discovery.",
  },
  {
    title: "Fresh Cart",
    image: resolveProjectImage("fresh-cart-img"),
    link: "https://fresh-cart-iota-nine.vercel.app/offers",
    category: "E-Commerce",
    summary: "A conversion-ready commerce experience with a cleaner path to purchase.",
  },
  {
    title: "QuoteWise",
    image: resolveProjectImage("quotewise-img"),
    link: "https://adhamezz.github.io/QuoteWise/",
    category: "Mobile UI",
    featured: true,
    summary: "A bold mobile interface concept with a polished, app-first visual rhythm.",
  },
  {
    title: "Dhai Store",
    image: resolveProjectImage("dhai-img"),
    link: "https://dhai-store.com/",
    category: "Store",
    summary: "A modern storefront presentation built around clean product storytelling.",
  },
  {
    title: "Fustan",
    image: resolveProjectImage("fustan-img"),
    link: "https://fustan.cloud/?fbclid=IwY2xjawQ_DW5leHRuA2FlbQIxMABicmlkETF4Nm9mTVhuMGtnWHlyTXhLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhmAW7JduEfLGqPLL733lOfkBNZPP0aWPnsb6rgajw-GoKEHiMhwpYHzvaZJ_aem_ogq8JqAR7DqY_D4BUa_Kew#fromHistory",
    category: "Fashion",
    summary: "An editorial fashion experience designed to feel premium and visually sharp.",
  },
  {
    title: "Galaxy Repair UAE",
    image: resolveProjectImage("galaxyrepairuae-img"),
    link: "https://www.galaxyrepairuae.com/#fromHistory",
    category: "Service Website",
    summary: "A service-led website that prioritizes clarity, credibility, and conversion.",
  },
  {
    title: "Yummy App",
    image: resolveProjectImage("yummy-app-img"),
    link: "https://adhamezz.github.io/Yummy-App-/",
    category: "Food App",
    summary: "A warm, polished food interface that makes browsing feel effortless.",
  },
  {
    title: "Mealify",
    image: resolveProjectImage("mealify-img"),
    link: "https://adhamezz.github.io/mealify/",
    category: "Restaurant Website",
    summary: "A clean restaurant showcase with an inviting structure and premium feel.",
  },
  {
    title: "Aqrablk Media",
    image: resolveProjectImage("saqrablkmedia-img"),
    link: "https://aqrablkmedia.com/",
    category: "Media Website",
    summary: "A media presence built to support authority, coverage, and brand clarity.",
  },
  {
    title: "Sharke1",
    image: resolveProjectImage("sharke1-img"),
    link: "https://sharke1.netlify.app/?fbclid=IwY2xjawQ_DXdleHRuA2FlbQIxMABicmlkETF4Nm9mTVhuMGtnWHlyTXhLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqjBj2SkwwfRyhJFeu28pRISKJU920pZxk9ULgZZTj8mm22teorTkcmsXmRp_aem_ROhrfb0rhAd1qkywTbO83g",
    category: "Business Website",
    summary: "A business-first design that balances confidence, structure, and momentum.",
  },
  {
    title: "Daniels Portfolio",
    image: resolveProjectImage("daniels-img"),
    link: "https://adhamezz.github.io/Daniels_portfolio/",
    category: "Portfolio",
    summary: "A premium personal portfolio with a stronger, more editorial presentation.",
  },
  {
    title: "DevFolio Portfolio",
    image: resolveProjectImage("personal-portfolio-img"),
    link: "https://adhamezz.github.io/DevFolio_portfolio/",
    category: "Portfolio",
    summary: "A refined portfolio build that showcases skills with clarity and style.",
  },
];
