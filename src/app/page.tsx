"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { About } from "@/components/About";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Footer } from "@/components/Footer";
import { FloatingServiceRequestButton } from "@/components/FloatingServiceRequestButton";
import { Hero } from "@/components/Hero";
import { JoinUsBenefitsSection } from "@/components/JoinUsBenefitsSection";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { ServiceRequestModal } from "@/components/ServiceRequestModal";
import { SiteLoader } from "@/components/SiteLoader";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WorkProcessSection } from "@/components/WorkProcessSection";
import { contentByLocale } from "@/data/siteContent";
import type { Locale } from "@/types";

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
