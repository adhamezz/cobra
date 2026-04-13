"use client";

import Image from "next/image";
import { type MouseEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

type NavbarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  content: LanguageContent["nav"];
};

const NAV_LABELS: Record<Locale, string[]> = {
  en: ["Home", "Join Us", "Why Cobra", "How We Work", "Services", "Projects", "About", "FAQ"],
  ar: ["الرئيسية", "اشترك معنا", "لماذا كوبرا", "طريقة العمل", "الخدمات", "المشاريع", "من نحن", "الأسئلة الشائعة"],
};

const BRANDING_COPY: Record<Locale, { name: string; subtitle: string }> = {
  en: {
    name: "Cobra",
    subtitle: "We turn your ideas into digital growth",
  },
  ar: {
    name: "كوبرا",
    subtitle: "نحوّل أفكارك إلى حضور رقمي يجذب عملائك",
  },
};

export function Navbar({ locale, onLocaleChange, content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isArabic = locale === "ar";
  const isServicePage = pathname?.startsWith("/services") ?? false;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isServicePage]);

  useEffect(() => {
    if (isServicePage || typeof window === "undefined") {
      return;
    }

    const sections = content.links
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);

    const observedSections = sections
      .map((section) => document.getElementById(section))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!observedSections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5],
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [content.links, isServicePage]);

  const languageLabel = isArabic ? "EN" : "AR";
  const brandCopy = BRANDING_COPY[locale];

  const navLinks = content.links.map((link, index) => {
    const href = isServicePage ? `/?lang=${locale}${link.href}` : link.href;
    const label = NAV_LABELS[locale][index] ?? link.label;
    const sectionId = link.href.replace("#", "");
    const isActive = !isServicePage && sectionId === activeSection;

    return { ...link, href, label, isActive };
  });

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId: string,
  ) => {
    if (isServicePage || !href.startsWith("#")) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    event.preventDefault();

    const navbarOffset = 128;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);
  };

  const homeHref = isServicePage ? `/?lang=${locale}#home` : "#home";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-4">
      <div
        className={`mx-auto w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0F14]/95 shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
            : "bg-[#0B0F14]/92 shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-xl"
        }`}
      >
        {/* White branded header: hides on scroll, keeps dark navbar fixed */}
        <div
          className={`overflow-hidden bg-white px-4 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "max-h-0 py-0 opacity-0"
              : "max-h-40 py-2.5 opacity-100 sm:py-3"
          }`}
        >
          <a
            href={homeHref}
            className="mx-auto inline-flex w-full items-center justify-center"
            aria-label={brandCopy.name}
          >
            <div className="inline-flex min-w-0 flex-col items-center justify-center">
              <div className={`relative inline-flex items-center gap-1 ${isArabic ? "flex-row-reverse" : ""}`}>
                <motion.span
                  className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12"
                  animate={{ y: [0, -4.5, -1.5, 0], rotate: [0, -1.1, 0.7, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/logos/Main-logo.png"
                    alt="Cobra logo"
                    width={50}
                    height={50}
                    className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                    priority
                  />
                </motion.span>

                <span className="text-[1.02rem] font-extrabold leading-none tracking-[0.01em] text-[#0F172A] sm:text-[1.16rem]">
                  {brandCopy.name}
                </span>

                <motion.span
                  aria-hidden="true"
                  className="brand-header-underline"
                  animate={{ scaleX: [0.58, 1, 0.88, 1], opacity: [0.48, 0.95, 0.78, 0.95] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <p className="mt-1 max-w-[240px] text-center text-[0.68rem] font-medium leading-relaxed text-[#64748B] sm:max-w-[360px] sm:text-[0.8rem]">
                {brandCopy.subtitle}
              </p>
            </div>
          </a>
        </div>

        {/* Bottom dark links navbar */}
        <div className="border-t border-white/10 px-4 py-2 sm:px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
            <button
              type="button"
              onClick={() => onLocaleChange(locale === "en" ? "ar" : "en")}
              className="inline-flex h-8 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 px-3 text-xs font-semibold text-white transition hover:bg-white/15"
              aria-label="Change language"
            >
              {languageLabel}
            </button>

            <div className="flex items-center justify-center">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/12 md:hidden"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <nav
                dir={isArabic ? "rtl" : "ltr"}
                className="hidden items-center justify-center gap-8 whitespace-nowrap md:flex"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) =>
                      handleSectionClick(event, link.href, link.href.replace("#", ""))
                    }
                    className={`group relative py-1 text-[0.88rem] font-semibold !text-white drop-shadow-sm transition duration-300 [text-shadow:0_1px_1px_rgba(0,0,0,0.25)] ${
                      link.isActive ? "!text-white" : "!text-white/80 hover:!text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-px origin-center rounded-full bg-[#5FB3A8] transition-transform duration-300 ${
                        link.isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                ))}
              </nav>
            </div>

            <span aria-hidden="true" className="h-8 w-8" />
          </div>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="border-t border-white/10 bg-[#0B0F14]/98 px-4 py-3 backdrop-blur-2xl md:hidden">
            <nav
              className={`mx-auto flex w-full max-w-7xl flex-col gap-2 text-sm font-semibold text-white ${
                isArabic ? "items-end text-right" : "items-start text-left"
              }`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    handleSectionClick(event, link.href, link.href.replace("#", ""));
                    setIsOpen(false);
                  }}
                  className="w-full rounded-2xl px-3 py-2 !text-white/80 drop-shadow-sm transition duration-300 [text-shadow:0_1px_1px_rgba(0,0,0,0.25)] hover:bg-white/6 hover:!text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
