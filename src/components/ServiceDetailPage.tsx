"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

import type { Locale, ServiceDetail } from "@/types";
import { contentByLocale } from "@/data/siteContent";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type ServiceDetailPageProps = {
  service: ServiceDetail;
  locale: Locale;
};

export function ServiceDetailPage({ service, locale }: ServiceDetailPageProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openFaq, setOpenFaq] = useState(0);
  const isArabic = locale === "ar";
  const siteContent = contentByLocale[locale];

  const updateLocale = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("lang", nextLocale);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const emailHref = `mailto:ert2815@gmail.com?subject=${encodeURIComponent(
    isArabic ? `${service.title} - طلب مشروع` : `${service.title} - Project inquiry`,
  )}`;
  const whatsappHref = `https://wa.me/971523416509?text=${encodeURIComponent(
    isArabic
      ? `مرحبًا Cobra Creative Solutions، أريد مناقشة ${service.title}.`
      : `Hi Cobra Creative Solutions, I would like to discuss ${service.title}.`,
  )}`;
  const backToServicesHref = `/?lang=${locale}#services`;

  return (
    <main className="bg-white text-slate-900" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar locale={locale} onLocaleChange={updateLocale} content={siteContent.nav} />

      <section className="relative overflow-hidden pt-32 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(58,157,145,0.08),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f8fcfa_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col justify-center ${isArabic ? "text-right" : ""}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9D91]">
              {service.category}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {service.intro}
            </p>

            <div className={`mt-8 flex flex-wrap gap-3 ${isArabic ? "justify-end" : ""}`}>
              <Link
                href={backToServicesHref}
                className={`inline-flex items-center gap-2 rounded-full border border-[#3A9D91]/25 bg-[#EAF5F0]/70 px-4 py-2.5 text-sm font-semibold text-[#1f6f66] transition duration-300 hover:bg-[#EAF5F0] ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <ArrowLeft className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} />
                {isArabic ? "العودة إلى الخدمات" : "Back to Services"}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(58,157,145,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(95,179,168,0.1),transparent_48%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#fbfcfb]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={520}
                  height={390}
                  className="h-full w-full max-w-[32rem] object-contain p-6 sm:p-10"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className={`rounded-[2rem] border border-slate-200 bg-[#fbfcfb] p-8 shadow-[0_18px_48px_rgba(15,23,42,0.05)] ${isArabic ? "text-right" : ""}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3A9D91]">
              {isArabic ? "نظرة عامة" : "Overview"}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {isArabic ? "ماذا يفعل هذا الخدمة؟" : "What this service is designed to do"}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {service.overview}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className={`rounded-[2rem] border border-slate-200 bg-[#fbfcfb] p-8 shadow-[0_18px_48px_rgba(15,23,42,0.05)] ${isArabic ? "text-right" : ""}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3A9D91]">
              {isArabic ? "مناسب لمن" : "Who it is for"}
            </p>
            <div className="mt-5 space-y-3">
              {service.audience.map((item) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 ${isArabic ? "flex-row-reverse text-right" : ""}`}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9D91]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#fbfcfb] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9D91]">
              {isArabic ? "ما الذي يتضمنه العمل" : "What is included"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {isArabic ? "كل خدمة مبنية لتغطية الأساسيات بوضوح" : "Every service is structured to cover the essentials well"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {service.includes.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="brand-card rounded-[1.5rem] bg-white px-5 py-5 text-sm text-slate-700"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9D91]">
              {isArabic ? "طريقة التنفيذ" : "Our process"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {isArabic ? "مسار عمل واضح ومريح" : "A clear delivery flow keeps the work efficient and predictable"}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                className="brand-card rounded-[1.75rem] bg-[#fcfdfc] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand-500)] text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#fbfcfb] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9D91]">
              {isArabic ? "لماذا يهم ذلك" : "Why it matters"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {isArabic ? "القيمة تتجاوز الشكل البصري" : "The value goes beyond the visual layer"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {service.benefits.map((benefit) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="brand-card rounded-[1.5rem] bg-white px-5 py-6 text-sm font-medium text-slate-800"
              >
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9D91]">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {isArabic ? "أسئلة شائعة قبل البدء" : "Common questions before starting"}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className={`w-full rounded-[1.5rem] border border-slate-200 bg-white p-5 text-left shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:border-[#3A9D91]/30 hover:bg-[#fcfdfc] ${isArabic ? "text-right" : ""}`}
                >
                  <div className={`flex items-center justify-between gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#3A9D91] transition duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#fbfcfb] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff,#f8fbf9)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9D91]">
                  {isArabic ? "الخطوة التالية" : "Final CTA"}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {service.ctaTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {service.ctaDescription}
                </p>
              </div>

              <div className={`flex flex-wrap gap-3 ${isArabic ? "lg:justify-start" : "lg:justify-end"}`}>
                <Link
                  href={emailHref}
                  className="brand-button-primary inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
                >
                  {isArabic ? "ابدأ مشروعك" : "Start Your Project"}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-button-secondary inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900"
                >
                  <MessageCircle className="h-4 w-4" />
                  {isArabic ? "واتساب" : "WhatsApp Us"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} content={siteContent.footer} />
    </main>
  );
}
