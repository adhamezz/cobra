"use client";

import { useEffect } from "react";

import type { Locale } from "@/types";

function resolveLocale(value: string | null): Locale {
  return value === "en" ? "en" : "ar";
}

export function DocumentLocale() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const locale = resolveLocale(params.get("lang"));

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, []);

  return null;
}
