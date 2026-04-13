import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceBySlug, serviceSlugs } from "@/data/services";
import type { Locale } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: SearchParams;
};

function resolveLocale(value: string | string[] | undefined): Locale {
  return value === "en" ? "en" : "ar";
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params, searchParams }: ServicePageProps): Promise<Metadata> {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const locale = resolveLocale(resolvedSearchParams.lang);
  const service = getServiceBySlug(resolvedParams.slug, locale);

  if (!service) {
    return {
      title: "Service not found | Cobra Creative Solutions",
    };
  }

  return {
    title: `${service.title} | Cobra Creative Solutions`,
    description: service.intro,
  };
}

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const locale = resolveLocale(resolvedSearchParams.lang);
  const service = getServiceBySlug(resolvedParams.slug, locale);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} locale={locale} />;
}
