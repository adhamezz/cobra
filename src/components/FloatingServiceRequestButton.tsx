"use client";

import { motion } from "framer-motion";
import { MessageSquareText } from "lucide-react";

import type { Locale } from "@/types";

type FloatingServiceRequestButtonProps = {
  locale: Locale;
  onOpen: () => void;
};

export function FloatingServiceRequestButton({ locale, onOpen }: FloatingServiceRequestButtonProps) {
  const isArabic = locale === "ar";
  const sideClass = isArabic ? "right-3 sm:right-5 lg:right-6" : "left-3 sm:left-5 lg:left-6";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={isArabic ? "ابدأ مشروعك" : "Start Project"}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-1/2 -translate-y-1/2 ${sideClass} z-50 inline-flex h-11 items-center gap-2 rounded-full border border-[#3A9D91]/25 bg-white/95 px-3 text-xs font-semibold text-[#1f4b44] shadow-[0_14px_34px_rgba(58,157,145,0.2)] backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:border-[#3A9D91]/45 hover:bg-[#EAF5F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A9D91]/55 focus-visible:ring-offset-2 sm:h-12 sm:px-4 sm:text-sm`}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF5F0] text-[#2f857b] sm:h-8 sm:w-8">
        <MessageSquareText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
      <span>{isArabic ? "ابدأ مشروعك" : "Start Project"}</span>
    </motion.button>
  );
}
