export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  demoUrl?: string;
  link?: string;
  featured?: boolean;
};

export type ShowcaseProject = {
  title: string;
  image: string;
  link: string;
  category: string;
  featured?: boolean;
  summary?: string;
};

export type ServiceDetailStep = {
  title: string;
  description: string;
};

export type ServiceDetailFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  category: string;
  image: string;
  intro: string;
  overview: string;
  includes: string[];
  audience: string[];
  process: ServiceDetailStep[];
  benefits: string[];
  faqs: ServiceDetailFaq[];
  ctaTitle: string;
  ctaDescription: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Locale = "en" | "ar";
