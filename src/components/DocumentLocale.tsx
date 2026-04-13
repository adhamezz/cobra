"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import type { Locale } from "@/types";

function resolveLocale(value: string | null): Locale {
  return value === "en" ? "en" : "ar";
}

export function DocumentLocale() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams?.get("lang") ?? null);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
