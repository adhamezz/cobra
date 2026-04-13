"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState, type MouseEvent } from "react";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

import HeroParticles from "./HeroParticles";

type HeroProps = {
  locale: Locale;
  content: LanguageContent["hero"];
  onStartProject: () => void;
};

type TypingState = {
  phraseIndex: number;
  charIndex: number;
  isDeleting: boolean;
};

const TYPE_SPEED = 72;
const DELETE_SPEED = 42;
const PAUSE_AFTER_TYPE = 1200;
const PAUSE_AFTER_DELETE = 380;

type TypingLineProps = {
  phrases: string[];
};

const brandWordPattern = /(كوبرا|Cobra)/g;

function TypingLine({ phrases }: TypingLineProps) {
  const [typingState, setTypingState] = useState<TypingState>({
    phraseIndex: 0,
    charIndex: 0,
    isDeleting: false,
  });

  useEffect(() => {
    const currentPhrase = phrases[typingState.phraseIndex];

    const timer = window.setTimeout(
      () => {
        setTypingState((current) => {
          const phrase = phrases[current.phraseIndex];

          if (!current.isDeleting && current.charIndex < phrase.length) {
            return {
              ...current,
              charIndex: current.charIndex + 1,
            };
          }

          if (!current.isDeleting && current.charIndex === phrase.length) {
            return {
              ...current,
              isDeleting: true,
            };
          }

          if (current.isDeleting && current.charIndex > 0) {
            return {
              ...current,
              charIndex: current.charIndex - 1,
            };
          }

          return {
            phraseIndex: (current.phraseIndex + 1) % phrases.length,
            charIndex: 0,
            isDeleting: false,
          };
        });
      },
      currentPhrase.length === typingState.charIndex && !typingState.isDeleting
        ? PAUSE_AFTER_TYPE
        : typingState.isDeleting && typingState.charIndex === 0
          ? PAUSE_AFTER_DELETE
          : typingState.isDeleting
            ? DELETE_SPEED
            : TYPE_SPEED,
    );

    return () => window.clearTimeout(timer);
  }, [phrases, typingState]);

  const activePhrase = phrases[typingState.phraseIndex] ?? "";
  const typedText = activePhrase.slice(0, typingState.charIndex);

  return (
    <motion.p
      key={typingState.phraseIndex}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto mt-4 min-h-[2.8rem] font-rubik text-[1.25rem] font-semibold leading-tight tracking-tight text-[#2f857b] sm:text-[1.45rem] lg:text-[1.7rem]"
    >
      <span className="inline-flex items-center gap-2">
        <span>{typedText}</span>
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block h-[1.2rem] w-[1.5px] rounded-full bg-[#2f857b]/80"
        />
      </span>
    </motion.p>
  );
}

export function Hero({ locale, content, onStartProject }: HeroProps) {
  const isArabic = locale === "ar";
  const heroSlide = content.slides[0];
  const servicesButtonLabel = isArabic ? "استعرض الخدمات" : "Explore Services";

  const phrases = useMemo(
    () =>
      isArabic
        ? [
            "نبني مواقع تحقق نتائج فعلية",
            "نصمم تجارب رقمية احترافية",
            "نطوّر حضورك الرقمي بذكاء",
            "نحوّل أفكارك إلى نجاح رقمي",
          ]
        : [
            "We build websites that deliver real results",
            "We craft premium digital experiences",
            "We grow your digital presence smartly",
            "We turn your ideas into digital success",
          ],
    [isArabic],
  );

  const handleServicesScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const servicesSection = document.getElementById("services");

    if (!servicesSection) {
      window.location.hash = "services";
      return;
    }

    const navbarOffset = 128;
    const top = servicesSection.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const renderTitle = (title: string | undefined) => {
    if (!title) {
      return null;
    }

    const parts = title.split(brandWordPattern);
    return parts.map((part, index) => (
      part === "كوبرا" || part === "Cobra" ? (
        <span key={`brand-${index}`} className="cobra-text" data-cobra-text={part}>
          {part}
        </span>
      ) : (
        <span key={`text-${index}`} className="hero-title-tail">
          {part}
        </span>
      )
    ));
  };

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#f8fcfa] text-[#0f172a]"
    >
      <HeroParticles />

      <div className="relative z-10 mx-auto flex min-h-[90svh] w-full max-w-7xl items-center justify-center px-4 pt-40 pb-20 text-center sm:px-6 sm:pt-44 sm:pb-24 lg:px-8 lg:pt-48 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex w-full max-w-4xl flex-col items-center"
        >
          {heroSlide?.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3A9D91]">
              {heroSlide.eyebrow}
            </p>
          ) : null}

          <h1
            className={`hero-main-title ${isArabic ? "hero-title-cobra-theme hero-title-ar-inline" : ""} ${
              heroSlide?.eyebrow ? "mt-5" : "mt-0"
            } text-balance text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl lg:text-[3.35rem]`}
          >
            {renderTitle(heroSlide?.title)}
          </h1>

          <TypingLine key={locale} phrases={phrases} />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 max-w-3xl text-balance text-base leading-8 text-[#475569] sm:text-[1.03rem]"
          >
            {heroSlide?.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <button
              type="button"
              onClick={onStartProject}
              className="brand-button-primary rounded-2xl px-6 py-3 text-sm font-semibold sm:text-[0.95rem]"
            >
              {heroSlide?.primaryCta ?? "Start Project"}
            </button>

            <a
              href="#services"
              onClick={handleServicesScroll}
              className="brand-button-secondary rounded-2xl px-6 py-3 text-sm font-semibold sm:text-[0.95rem]"
            >
              {servicesButtonLabel}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
