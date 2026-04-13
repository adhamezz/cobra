"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";
import { contentByLocale } from "@/data/siteContent";

type FloatingWhatsAppButtonProps = {
  locale?: Locale;
  content?: LanguageContent["whatsapp"];
};

export function FloatingWhatsAppButton({ locale, content }: FloatingWhatsAppButtonProps) {
  const searchParams = useSearchParams();
  const resolvedLocale: Locale = locale ?? (searchParams?.get("lang") === "en" ? "en" : "ar");
  const resolvedContent = content ?? contentByLocale[resolvedLocale].whatsapp;
  const isArabic = resolvedLocale === "ar";

  const message = encodeURIComponent(
    isArabic
      ? "مرحبًا Cobra Creative Solutions، أرغب في مناقشة مشروع."
      : "Hi Cobra Creative Solutions, I would like to discuss a project.",
  );
  const href = `https://wa.me/971523416509?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group fixed right-6 bottom-6 z-[60] flex items-end gap-3 sm:right-8 sm:bottom-8"
    >
      <div
        className={`hidden max-w-[220px] rounded-2xl rounded-br-md border border-slate-200 bg-white px-4 py-3 text-sm shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:block ${
          isArabic ? "text-right" : ""
        }`}
      >
        <p className="font-medium text-slate-900">{resolvedContent.tooltipTitle}</p>
        <p className="mt-1 text-slate-600">{resolvedContent.tooltipText}</p>
      </div>

      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.42)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_55px_rgba(37,211,102,0.5)]">
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8" fill="currentColor">
          <path d="M19.11 17.45c-.29-.15-1.71-.85-1.98-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.44s1.06 2.83 1.2 3.02c.15.2 2.06 3.15 4.99 4.42.7.3 1.24.48 1.66.61.7.22 1.34.19 1.85.12.56-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.35z" />
          <path d="M16.02 3C8.83 3 3 8.69 3 15.69c0 2.25.61 4.43 1.76 6.34L3 29l7.24-1.68c1.84.96 3.91 1.47 5.98 1.47 7.19 0 13.02-5.69 13.02-12.69S23.21 3 16.02 3zm0 23.14c-1.87 0-3.7-.5-5.3-1.45l-.38-.22-4.3 1 1.03-4.1-.25-.41a10.24 10.24 0 0 1-1.6-5.5C5.22 9.5 10.07 4.8 16.02 4.8c5.95 0 10.8 4.7 10.8 10.49 0 5.79-4.85 10.85-10.8 10.85z" />
        </svg>
      </span>
    </motion.a>
  );
}
