"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

type FooterProps = {
  locale: Locale;
  content: LanguageContent["footer"];
};

export function Footer({ locale, content }: FooterProps) {
  const isArabic = locale === "ar";
  const pathname = usePathname();
  const isServicePage = pathname?.startsWith("/services") ?? false;

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) {
      return href;
    }

    return isServicePage ? `/?lang=${locale}${href}` : href;
  };

  const quickLinks = isArabic
    ? [
        { label: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", href: resolveHref("#home") },
        { label: "\u0645\u0646 \u0646\u062d\u0646", href: resolveHref("#about") },
        { label: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", href: resolveHref("#services") },
        { label: "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639", href: resolveHref("#projects") },
        { label: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", href: resolveHref("#why") },
        { label: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627", href: "https://wa.me/971523416509", external: true },
      ]
    : [
        { label: "Home", href: resolveHref("#home") },
        { label: "About", href: resolveHref("#about") },
        { label: "Services", href: resolveHref("#services") },
        { label: "Projects", href: resolveHref("#projects") },
        { label: "FAQ", href: resolveHref("#why") },
        { label: "Contact", href: "https://wa.me/971523416509", external: true },
      ];

  const serviceLinks = isArabic
    ? [
        { label: "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639", href: `/services/web-development?lang=${locale}` },
        { label: "\u062d\u0644\u0648\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629", href: `/services/ecommerce-solutions?lang=${locale}` },
        { label: "\u062a\u0635\u0645\u064a\u0645 UI/UX", href: `/services/ui-ux-design?lang=${locale}` },
        { label: "\u062a\u0637\u0648\u064a\u0631 Shopify", href: `/services/shopify-development?lang=${locale}` },
        { label: "\u0627\u0644\u0635\u064a\u0627\u0646\u0629 \u0648\u0627\u0644\u062f\u0639\u0645", href: `/services/maintenance-support?lang=${locale}` },
      ]
    : [
        { label: "Website Development", href: `/services/web-development?lang=${locale}` },
        { label: "E-commerce Solutions", href: `/services/ecommerce-solutions?lang=${locale}` },
        { label: "UI/UX Design", href: `/services/ui-ux-design?lang=${locale}` },
        { label: "Shopify Development", href: `/services/shopify-development?lang=${locale}` },
        { label: "Maintenance & Support", href: `/services/maintenance-support?lang=${locale}` },
      ];

  const contactLinks = [
    {
      label: "WhatsApp",
      href: "https://wa.me/971523416509",
      icon: FaWhatsapp,
      external: true,
    },
    {
      label: isArabic ? "\u0627\u0644\u0628\u0631\u064a\u062f" : "Email",
      href: "mailto:ert2815@gmail.com",
      icon: FaEnvelope,
      external: true,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/cobra.solutions",
      icon: FaFacebookF,
      external: true,
    },
    {
      label: isArabic ? "\u0627\u0644\u0647\u0627\u062a\u0641" : "Phone",
      href: "tel:+201093100639",
      icon: FaPhone,
      external: true,
    },
  ] as const;

  const footerLinkFxClass =
    "brand-link inline-flex py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#2f857b]";

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate border-t border-emerald-100 bg-[linear-gradient(180deg,#f5faf8_0%,#f8fcfa_40%,#ffffff_100%)] text-slate-900"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100/70 bg-white/85 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <section className="space-y-4">
              <Link
                href={resolveHref("#home")}
                className="inline-flex items-center gap-2 text-[#0f172a] transition hover:opacity-90"
                aria-label={content.brandName}
              >
                <Image
                  src="/images/logos/main-logo.svg"
                  alt="Cobra"
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-lg font-extrabold tracking-tight">{content.brandName}</span>
              </Link>

              <p className="text-sm font-semibold text-emerald-700/90">{content.brandTagline}</p>
              <p className="max-w-xs text-sm leading-7 text-slate-600">{content.description}</p>
            </section>

            <section>
              <h3 className="text-sm font-extrabold tracking-wide text-slate-900">{content.quickLinksTitle}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 [&:has(a:hover)_a:not(:hover)]:opacity-45 [&:has(a:hover)_a:not(:hover)]:blur-[1.5px] [&:has(a:hover)_a]:transition-all [&:has(a:hover)_a]:duration-300">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerLinkFxClass}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={footerLinkFxClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-extrabold tracking-wide text-slate-900">{content.servicesTitle}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 [&:has(a:hover)_a:not(:hover)]:opacity-45 [&:has(a:hover)_a:not(:hover)]:blur-[1.5px] [&:has(a:hover)_a]:transition-all [&:has(a:hover)_a]:duration-300">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link href={service.href} className={footerLinkFxClass}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-extrabold tracking-wide text-slate-900">{content.contactTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{content.contactText}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {contactLinks.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external && href.startsWith("http") ? "_blank" : undefined}
                    rel={external && href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50/75 text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100/70 hover:text-[#1f6f66]"
                  >
                    <Icon className="h-4 w-4 text-[#2f857b] transition group-hover:text-[#24685f]" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-emerald-100 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:text-sm">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-4 [&:has(a:hover)_a:not(:hover)]:opacity-45 [&:has(a:hover)_a:not(:hover)]:blur-[1.5px] [&:has(a:hover)_a]:transition-all [&:has(a:hover)_a]:duration-300">
              <Link href={resolveHref("#why")} className={footerLinkFxClass}>
                {isArabic ? "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629" : "FAQ"}
              </Link>
              <Link href={resolveHref("#about")} className={footerLinkFxClass}>
                {isArabic ? "\u0645\u0646 \u0646\u062d\u0646" : "About"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
