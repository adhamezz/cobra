"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";

import get1 from "@/assets/get-with-us/get1.json";
import get2 from "@/assets/get-with-us/get2.json";
import get3 from "@/assets/get-with-us/get3.json";
import get4 from "@/assets/get-with-us/get4.json";
import get5 from "@/assets/get-with-us/get5.json";
import type { LanguageContent } from "@/data/siteContent";
import type { Locale } from "@/types";

type JoinUsBenefitsSectionProps = {
  locale: Locale;
  content: LanguageContent["joinUsBenefits"];
};

const benefitAnimations = [get1, get2, get3, get4, get5];

export function JoinUsBenefitsSection({ locale, content }: JoinUsBenefitsSectionProps) {
  const isArabic = locale === "ar";
  const items = content.items.slice(0, benefitAnimations.length);
  const firstRowItems = items.slice(0, 2);
  const secondRowItems = items.slice(2, 5);

  const renderItem = (label: string, index: number) => (
    <motion.article
      key={`${label}-${index}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
      className={`flex w-full max-w-[290px] flex-col gap-3 items-center text-center md:${isArabic ? "items-end text-right" : "items-start text-left"}`}
    >
      <div className="w-full max-w-[240px]">
        <Lottie animationData={benefitAnimations[index]} loop autoplay className="h-auto w-full" />
      </div>
      <p className="text-[1rem] font-medium leading-7 text-[#334155]">{label}</p>
    </motion.article>
  );

  return (
    <section id="join-us-benefits" dir={isArabic ? "rtl" : "ltr"} className="bg-[#f8fcfa] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
            {content.sectionTitle}
          </h2>
          <svg viewBox="0 0 220 24" className="mx-auto mt-3 h-5 w-44 text-[#3A9D91]" fill="none" aria-hidden="true">
            <path
              d="M8 15C48 7 86 6 122 11C150 15 177 18 212 9"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="grid justify-items-center gap-8 md:grid-cols-2">
            {items.map((label, index) => renderItem(label, index))}
          </div>
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="flex justify-center gap-10 xl:gap-14">
            {firstRowItems.map((label, index) => renderItem(label, index))}
          </div>
          <div className="mt-10 flex justify-center gap-8 xl:gap-10">
            {secondRowItems.map((label, index) => renderItem(label, index + 2))}
          </div>
        </div>
      </div>
    </section>
  );
}
