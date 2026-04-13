import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import { DocumentLocale } from "@/components/DocumentLocale";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cobra Creative Solutions",
    template: "%s | Cobra Creative Solutions",
  },
  description:
    "Premium digital agency homepage for Cobra Creative Solutions, focused on app development, e-commerce, hosting, and modern UI/UX delivery.",
  keywords: [
    "Cobra Creative Solutions",
    "digital agency",
    "app development",
    "e-commerce",
    "UI UX",
    "Shopify",
    "hosting",
  ],
  openGraph: {
    title: "Cobra Creative Solutions",
    description:
      "A polished, responsive agency homepage built for premium digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body suppressHydrationWarning className={`${cairo.variable} flex min-h-full flex-col bg-[#f8fcfa] text-slate-900`}>
        <DocumentLocale />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
