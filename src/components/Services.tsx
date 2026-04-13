import Link from "next/link";
import {
  Globe,
  Palette,
  Rocket,
  ShoppingCart,
  Store,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { LanguageContent } from "@/data/siteContent";
import type { Locale } from "@/types";

type ServicesProps = {
  locale: Locale;
  content: LanguageContent["services"];
};

type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
};

const iconBySlug: Record<string, LucideIcon> = {
  "web-development": Globe,
  "ecommerce-solutions": ShoppingCart,
  "ui-ux-design": Palette,
  "shopify-development": Store,
  "hosting-deployment": Rocket,
  "maintenance-support": Wrench,
};

export function Services({ locale, content }: ServicesProps) {
  const isArabic = locale === "ar";
  const sectionEyebrow = isArabic ? "الخدمات" : content.eyebrow;
  const sectionTitle = isArabic
    ? "خدمات رقمية متكاملة تبني حضورك بثقة"
    : content.title;
  const sectionDescription = isArabic
    ? "حلول تصميم وتطوير حديثة تساعد علامتك على الظهور بشكل احترافي وتحقيق نتائج أوضح."
    : content.description;
  const cardCtaLabel = isArabic ? "عرض التفاصيل" : "View Details";

  const services: ServiceEntry[] = content.items.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
  }));

  return (
    <section
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      className="scroll-mt-28 bg-[#f8fcfa] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3A9D91]">
            {sectionEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#475569] sm:text-[1.03rem]">
            {sectionDescription}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => {
            const Icon = iconBySlug[service.slug] ?? Globe;

            return (
              <article
                key={service.slug}
                className={`group flex h-full flex-col rounded-[1.6rem] border border-[#dce8e4] bg-[#fbfefd] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#3A9D91]/28 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] sm:p-6 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#3A9D91]/18 bg-[#EAF5F0] text-[#2f857b]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-4 text-[1.08rem] font-semibold tracking-tight text-[#0F172A] sm:text-[1.12rem]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#526175]">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}?lang=${locale}`}
                  className="mt-auto inline-flex h-9 items-center justify-center self-start rounded-full border border-[#3A9D91]/22 bg-white px-4 text-xs font-semibold text-[#2f857b] transition group-hover:bg-[#EAF5F0]/70"
                >
                  {cardCtaLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
