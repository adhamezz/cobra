import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import type { Locale } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type ServicePageProps = {
  searchParams: SearchParams;
};

const SLUG = "hosting-deployment";

function resolveLocale(value: string | string[] | undefined): Locale {
  return value === "en" ? "en" : "ar";
}

export async function generateMetadata({ searchParams }: ServicePageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const locale = resolveLocale(resolvedSearchParams.lang);
  const service = getServiceBySlug(SLUG, locale);

  return {
    title: `${service?.title ?? "Hosting & Deployment"} | Cobra Creative Solutions`,
    description:
      service?.intro ??
      "Reliable hosting, deployment, and launch support for modern websites.",
  };
}

export default async function HostingDeploymentPage({ searchParams }: ServicePageProps) {
  const resolvedSearchParams = await searchParams;
  const locale = resolveLocale(resolvedSearchParams.lang);
  const service = getServiceBySlug(SLUG, locale);

  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} locale={locale} />;
}
