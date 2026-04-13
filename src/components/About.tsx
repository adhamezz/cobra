"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutAnimation from "@/assets/animations/about.json";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  locale: Locale;
  content: LanguageContent["about"];
};

export function About({ locale, content }: AboutProps) {
  const isArabic = locale === "ar";
  const alignClass = isArabic ? "text-right" : "text-left";

  return (
    <section id="about" dir={isArabic ? "rtl" : "ltr"} className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className={`order-1 rounded-[1.85rem] border border-slate-200/85 bg-white p-6 shadow-[0_18px_46px_rgba(15,23,42,0.06)] sm:p-7 lg:order-2 ${alignClass}`}
          >
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
              align={isArabic ? "right" : "left"}
              tone="light"
            />

            <div className="mt-5 rounded-2xl border border-[#3A9D91]/14 bg-[#EAF5F0]/55 px-4 py-3">
              <p className="text-sm leading-7 text-slate-700">{content.mission}</p>
            </div>

            <div className="mt-6 space-y-3.5">
              {content.highlights.map((point) => (
                <div
                  key={point.title}
                  className={`flex items-start gap-3.5 rounded-xl border border-slate-200/75 bg-white px-4 py-3.5 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF5F0] text-[#2f857b]">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{point.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.06 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-[1.8rem] border border-[#3A9D91]/16 bg-[linear-gradient(180deg,#F6FCF9_0%,#FFFFFF_100%)] p-4 shadow-[0_16px_40px_rgba(15,23,42,0.07)] sm:p-5">
              <div className="overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white">
                <div className="relative aspect-[4/4] sm:aspect-[5/4] lg:aspect-[4/3]">
                  <Lottie
                    animationData={aboutAnimation}
                    loop
                    autoplay
                    className="h-full w-full"
                  />
                </div>
              </div>

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
