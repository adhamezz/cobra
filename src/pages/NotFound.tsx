"use client";

import Link from "next/link";
import Lottie from "lottie-react";

import notFoundAnimation from "@/assets/animations/not-found.json";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#f8fcfa] px-6 py-16 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(58,157,145,0.11),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(95,179,168,0.13),transparent_35%),linear-gradient(180deg,#f8fcfa_0%,#ffffff_100%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 rounded-[2rem] border border-emerald-100/70 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-10 lg:grid-cols-2 lg:gap-14">
        <section className="order-2 flex flex-col items-start justify-center text-right lg:order-1" dir="rtl">
          <span className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            404 Error
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            الصفحة غير موجودة
          </h1>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            عذرًا، الصفحة التي تبحث عنها قد تكون نُقلت إلى رابط آخر أو تم حذفها.
            يمكنك العودة إلى الصفحة الرئيسية أو الرجوع للصفحة السابقة.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-7 text-base font-semibold text-white shadow-[0_12px_32px_rgba(5,150,105,0.24)] transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              العودة للصفحة الرئيسية
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
            >
              الرجوع للصفحة السابقة
            </button>
          </div>
        </section>

        <section className="order-1 flex items-center justify-center lg:order-2">
          <div className="w-full max-w-md lg:max-w-xl">
            <Lottie animationData={notFoundAnimation} loop />
          </div>
        </section>
      </div>
    </main>
  );
}
