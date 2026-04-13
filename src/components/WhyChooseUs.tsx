"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

import { SectionHeading } from "./SectionHeading";

type WhyChooseUsProps = {
  locale: Locale;
  content: LanguageContent["why"];
};

export function WhyChooseUs({ locale, content }: WhyChooseUsProps) {
  const isArabic = locale === "ar";
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="why" dir={isArabic ? "rtl" : "ltr"} className="border-y border-slate-200 bg-[#fbfcfb] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-7">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
              align={isArabic ? "right" : "left"}
              tone="light"
            />
          </div>

          <div className="mx-auto max-w-4xl space-y-2.5">
            {content.reasons.map((reason, index) => {
              const isOpen = index === openIndex;

              return (
                <article
                  key={reason.title}
                  className="overflow-hidden rounded-[1.1rem] border border-slate-200 bg-white/92 shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition duration-300 hover:border-[#3A9D91]/22 hover:shadow-[0_10px_24px_rgba(58,157,145,0.06)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 ${
                      isArabic ? "flex-row-reverse text-right" : ""
                    }`}
                    aria-expanded={isOpen}
                  >
                    <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#3A9D91]/8 text-[#3A9D91]/85">
                        <HelpCircle className="h-3.5 w-3.5" />
                      </span>
                      <h3 className="text-[0.95rem] font-semibold tracking-tight text-slate-900 sm:text-[0.98rem]">
                        {reason.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`h-4.5 w-4.5 text-slate-500 transition duration-300 ${
                        isOpen ? "rotate-180 text-[#3A9D91]" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-4 pb-4 pt-0 text-sm leading-7 text-slate-600 sm:px-5 ${
                          isArabic ? "text-right" : ""
                        }`}
                      >
                        {reason.description}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
