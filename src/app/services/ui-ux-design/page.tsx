import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import type { Locale } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type ServicePageProps = {
  searchParams: SearchParams;
};

const SLUG = "ui-ux-design";

function resolveLocale(value: string | string[] | undefined): Locale {
  return value === "en" ? "en" : "ar";
}

export async function generateMetadata({ searchParams }: ServicePageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolveLocale(resolvedSearchParams.lang);
  const service = getServiceBySlug(SLUG, locale);

  return {
    title: `${service?.title ?? "UI/UX Design"} | Cobra Creative Solutions`,
    description:
      service?.intro ??
      "Premium UI/UX design systems for clear, usable, modern digital products.",
  };
}

export default async function UiUxDesignPage({ searchParams }: ServicePageProps) {
  const resolvedSearchParams = await searchParams;
  const locale = resolveLocale(resolvedSearchParams.lang);
  const service = getServiceBySlug(SLUG, locale);

  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} locale={locale} />;
}
