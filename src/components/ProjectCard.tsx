"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { Locale, ShowcaseProject } from "@/types";

type ProjectCardProps = {
  project: ShowcaseProject;
  index: number;
  locale: Locale;
};

export function ProjectCard({ project, index, locale }: ProjectCardProps) {
  const isArabic = locale === "ar";
  const actionLabel = isArabic ? "مشاهدة المشروع" : "View project";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
      className="group h-full"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="brand-card relative flex h-full min-h-[25rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={encodeURI(project.image)}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.07]"
          />
        </div>

        {/* طبقة خفيفة جدًا بلون الهوية للحفاظ على وضوح الصورة */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,157,145,0.04)_0%,rgba(58,157,145,0.08)_48%,rgba(15,23,42,0.32)_100%)] transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(58,157,145,0.07)_0%,rgba(58,157,145,0.14)_48%,rgba(15,23,42,0.48)_100%)]" />

        {/* ستارة reveal ناعمة تظهر أولاً عند hover */}
        <div className="absolute inset-0 origin-top scale-y-0 bg-[linear-gradient(180deg,rgba(58,157,145,0.06)_0%,rgba(58,157,145,0.16)_50%,rgba(15,23,42,0.54)_100%)] opacity-0 transition duration-500 ease-out group-hover:scale-y-100 group-hover:opacity-100" />

        {/* Watermark مستوحاة من الهوية بشكل subtle جدًا */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-3 text-[4.8rem] font-extrabold leading-none text-white/[0.08] transition duration-300 group-hover:text-white/[0.11] ${
            isArabic ? "left-3" : "right-3"
          }`}
        >
          C
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
          <div className="flex w-full max-w-[82%] flex-col items-center justify-center gap-3 text-center text-white">
            <h3 className="text-lg font-semibold tracking-tight opacity-100 transition-all duration-500 ease-out md:-translate-y-4 md:opacity-0 md:delay-75 md:group-hover:translate-y-0 md:group-hover:opacity-100 sm:text-[1.12rem]">
              {project.title}
            </h3>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center rounded-full border border-white/20 bg-white/12 px-4 text-sm font-semibold text-white opacity-100 transition-all duration-500 ease-out hover:border-[color:var(--brand-500)] hover:bg-[color:var(--brand-500)] md:translate-y-4 md:opacity-0 md:delay-150 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            >
              {actionLabel}
            </a>
          </div>
        </div>

      </div>
    </motion.article>
  );
}
