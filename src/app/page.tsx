"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SiteLoader } from "@/components/SiteLoader";
import { contentByLocale } from "@/data/siteContent";
import type { Locale } from "@/types";

const JoinUsBenefitsSection = dynamic(
  () => import("@/components/JoinUsBenefitsSection").then((mod) => mod.JoinUsBenefitsSection),
);
const Services = dynamic(() => import("@/components/Services").then((mod) => mod.Services));
const WhatYouGetSection = dynamic(
  () => import("@/components/WhatYouGetSection").then((mod) => mod.WhatYouGetSection),
);
const WorkProcessSection = dynamic(
  () => import("@/components/WorkProcessSection").then((mod) => mod.WorkProcessSection),
);
const Projects = dynamic(() => import("@/components/Projects").then((mod) => mod.Projects));
const About = dynamic(() => import("@/components/About").then((mod) => mod.About));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs").then((mod) => mod.WhyChooseUs));
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer));
const FloatingServiceRequestButton = dynamic(
  () => import("@/components/FloatingServiceRequestButton").then((mod) => mod.FloatingServiceRequestButton),
);
const ServiceRequestModal = dynamic(
  () => import("@/components/ServiceRequestModal").then((mod) => mod.ServiceRequestModal),
);
const BackToTopButton = dynamic(
  () => import("@/components/BackToTopButton").then((mod) => mod.BackToTopButton),
);

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = searchParams?.get("lang") === "en" ? "en" : "ar";
  const content = contentByLocale[locale];
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const handleLocaleChange = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("lang", nextLocale);
    router.replace(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <main className="flex-1 bg-white text-slate-900" dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteLoader />
      <Navbar
        locale={locale}
        onLocaleChange={handleLocaleChange}
        content={content.nav}
      />
      <Hero
        key={locale}
        locale={locale}
        content={content.hero}
        onStartProject={() => setContactOpen(true)}
      />
      <JoinUsBenefitsSection locale={locale} content={content.joinUsBenefits} />
      <Services locale={locale} content={content.services} />
      <WhatYouGetSection locale={locale} content={content.whatYouGet} />
      <WorkProcessSection locale={locale} content={content.workProcess} />
      <Projects locale={locale} content={content.showcase} />
      <About locale={locale} content={content.about} />
      <WhyChooseUs locale={locale} content={content.why} />
      <Footer locale={locale} content={content.footer} />
      <FloatingServiceRequestButton
        locale={locale}
        onOpen={() => setContactOpen(true)}
      />
      <ServiceRequestModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        locale={locale}
      />
      <BackToTopButton />
    </main>
  );
}
