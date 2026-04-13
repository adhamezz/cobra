"use client";

import { useMemo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";
import { projectsData } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

type ProjectsSectionProps = {
  locale: Locale;
  content: LanguageContent["showcase"];
};

export function ProjectsSection({ locale, content }: ProjectsSectionProps) {
  const isArabic = locale === "ar";
  void content;

  const slideCards = useMemo(
    () =>
      projectsData.map((project, index) => (
        <SwiperSlide key={`${project.title}-${index}`}>
          <ProjectCard project={project} index={index} locale={locale} />
        </SwiperSlide>
      )),
    [locale]
  );

  return (
    <section
      id="projects"
      dir={isArabic ? "rtl" : "ltr"}
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className={`text-sm text-slate-500 ${isArabic ? "text-right" : ""}`}>
              {isArabic ? "تصفح بعض الأعمال المختارة" : "Selected work, presented cleanly"}
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={isArabic ? "السابق" : "Previous project"}
                className="projects-prev brand-button-secondary h-11 w-11 text-slate-700"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={isArabic ? "التالي" : "Next project"}
                className="projects-next brand-button-secondary h-11 w-11 text-slate-700"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            grabCursor
            speed={900}
            spaceBetween={20}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".projects-pagination",
            }}
            navigation={{
              prevEl: ".projects-prev",
              nextEl: ".projects-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1.02 },
              640: { slidesPerView: 1.15 },
              768: { slidesPerView: 1.5 },
              1200: { slidesPerView: 3.05 },
            }}
            className="pb-14"
          >
            {slideCards}
          </Swiper>

          <div className="projects-pagination mt-4 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
