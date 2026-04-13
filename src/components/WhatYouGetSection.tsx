"use client";

import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import { motion, type Variants } from "framer-motion";

import feature1 from "@/assets/why-choose-us-grid/feature1.json";
import feature2 from "@/assets/why-choose-us-grid/feature2.json";
import feature3 from "@/assets/why-choose-us-grid/feature3.json";
import feature4 from "@/assets/why-choose-us-grid/feature4.json";
import feature5 from "@/assets/why-choose-us-grid/feature5.json";
import feature6 from "@/assets/why-choose-us-grid/feature6.json";
import feature7 from "@/assets/why-choose-us-grid/feature7.json";
import feature8 from "@/assets/why-choose-us-grid/feature8.json";
import feature9 from "@/assets/why-choose-us-grid/feature9.json";
import feature10 from "@/assets/why-choose-us-grid/feature10.json";
import feature11 from "@/assets/why-choose-us-grid/feature11.json";
import feature12 from "@/assets/why-choose-us-grid/feature12.json";
import type { LanguageContent } from "@/data/siteContent";
import type { Locale } from "@/types";

type WhatYouGetSectionProps = {
  locale: Locale;
  content: LanguageContent["whatYouGet"];
};

const animations = [
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
  feature9,
  feature10,
  feature11,
  feature12,
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function WhatYouGetSection({ locale, content }: WhatYouGetSectionProps) {
  const isArabic = locale === "ar";
  const items = content.items.slice(0, animations.length);
  const rotatingTitles = useMemo(
    () =>
      isArabic
        ? ["لماذا تختار كوبرا", "لماذا تعتمد على كوبرا", "لماذا توظف كوبرا"]
        : ["Why Choose Cobra", "Why Rely on Cobra", "Why Hire Cobra"],
    [isArabic],
  );
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTitleIndex((current) => (current + 1) % rotatingTitles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [rotatingTitles.length]);

  return (
    <section id="what-you-get" dir={isArabic ? "rtl" : "ltr"} className="bg-[#eef7f3] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
            <motion.span
              key={activeTitleIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="inline-block"
            >
              {rotatingTitles[activeTitleIndex]}
            </motion.span>
          </h2>
          <svg viewBox="0 0 220 24" className="mx-auto mt-3 h-5 w-44 text-[#3A9D91]" fill="none" aria-hidden="true">
            <path
              d="M8 15C48 7 86 6 122 11C150 15 177 18 212 9"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-4 text-base leading-8 text-[#475569]">{content.sectionSubtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              className="group rounded-[1.3rem] border border-[#3A9D91]/16 bg-white/78 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-[1px] hover:shadow-[0_18px_36px_rgba(58,157,145,0.12)]"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-[1.02rem] font-semibold leading-6 text-[#0F172A]">{item.title}</h3>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="mx-auto w-full max-w-[240px]"
                >
                  <Lottie
                    animationData={animations[index]}
                    loop
                    autoplay
                    className="h-40 w-full sm:h-44"
                  />
                </motion.div>

                <p className="w-full text-[0.92rem] leading-7 text-[#475569]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
