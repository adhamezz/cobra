"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import step1 from "@/assets/how-we-work/step1.json";
import step2 from "@/assets/how-we-work/step2.json";
import step3 from "@/assets/how-we-work/step3.json";
import step4 from "@/assets/how-we-work/step4.json";
import step5 from "@/assets/how-we-work/step5.json";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

type WorkProcessSectionProps = {
  locale: Locale;
  content: LanguageContent["workProcess"];
};

export function WorkProcessSection({ locale, content }: WorkProcessSectionProps) {
  const isArabic = locale === "ar";
  const stepIllustrations = [step1, step2, step3, step4, step5];
  const visibleSteps = content.steps.slice(0, stepIllustrations.length);
  const firstRow = visibleSteps.slice(0, 2);
  const secondRow = visibleSteps.slice(2, 5);

  const renderStepCard = (step: (typeof visibleSteps)[number], index: number) => {
    return (
      <motion.article
        key={`${index}-${step.title}`}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="h-full rounded-2xl border border-gray-200 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
      >
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 p-2">
            <Lottie
              animationData={stepIllustrations[index]}
              loop
              autoplay
              className="mx-auto h-[180px] w-full max-w-[320px] sm:h-[195px]"
            />
          </div>

          <h3 className="text-[1.28rem] font-bold tracking-tight text-[#0F172A]">
            {step.title}
          </h3>

          <p className="text-[1.02rem] leading-8 text-gray-600">
            {step.description}
          </p>
        </div>
      </motion.article>
    );
  };

  return (
    <section id="how-we-work" dir={isArabic ? "rtl" : "ltr"} className="bg-[#f5f8f7] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">{content.sectionTitle}</h2>
          <svg viewBox="0 0 220 24" className="mx-auto mt-3 h-5 w-44 text-[#3A9D91]" fill="none" aria-hidden="true">
            <path
              d="M8 15C48 7 86 6 122 11C150 15 177 18 212 9"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-4 text-base text-[#475569]">{content.sectionSubtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {firstRow.map((step, index) => renderStepCard(step, index))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondRow.map((step, index) => renderStepCard(step, index + 2))}
        </div>
      </div>
    </section>
  );
}
