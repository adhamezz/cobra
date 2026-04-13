"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, X } from "lucide-react";

import type { Locale } from "@/types";

type ServiceRequestModalProps = {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  onSuccess?: (message: string) => void;
};

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactFormState, string>>;

type ModalCopy = {
  title: string;
  subtitle: string;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectTypePlaceholder: string;
  message: string;
  send: string;
  sending: string;
  close: string;
  success: string;
  error: string;
  configError: string;
  validation: {
    fullName: string;
    email: string;
    projectType: string;
    message: string;
  };
  options: string[];
};

const initialFormState: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MODAL_COPY: Record<Locale, ModalCopy> = {
  ar: {
    title: "ابدأ مشروعك",
    subtitle: "ابعتلنا بياناتك وهنتواصل معاك",
    fullName: "اسمك",
    email: "إيميلك",
    phone: "رقمك",
    projectType: "نوع الخدمة",
    projectTypePlaceholder: "اختر الخدمة",
    message: "اكتب طلبك",
    send: "إرسال",
    sending: "جاري الإرسال...",
    close: "إغلاق",
    success: "تم إرسال الرسالة بنجاح",
    error: "حصلت مشكلة أثناء الإرسال، حاول مرة تانية",
    configError: "إعدادات الإرسال غير مكتملة حالياً",
    validation: {
      fullName: "من فضلك اكتب اسمك",
      email: "من فضلك اكتب إيميل صحيح",
      projectType: "من فضلك اختر نوع الخدمة",
      message: "من فضلك اكتب طلبك",
    },
    options: [
      "تطوير المواقع",
      "حلول التجارة الإلكترونية",
      "تصميم UI/UX",
      "تطوير Shopify",
      "الاستضافة والإطلاق",
      "الصيانة والدعم",
    ],
  },
  en: {
    title: "Start Your Project",
    subtitle: "Send us your details and we’ll get back to you shortly",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    projectType: "Project Type",
    projectTypePlaceholder: "Select a service",
    message: "Tell us about your project",
    send: "Send Message",
    sending: "Sending...",
    close: "Close",
    success: "Your message was sent successfully",
    error: "Something went wrong. Please try again",
    configError: "Email service is not configured yet",
    validation: {
      fullName: "Please enter your full name",
      email: "Please enter a valid email",
      projectType: "Please select a service",
      message: "Please tell us about your project",
    },
    options: [
      "Website Development",
      "E-commerce Solutions",
      "UI/UX Design",
      "Shopify Development",
      "Hosting & Deployment",
      "Maintenance & Support",
    ],
  },
};

function validateForm(values: ContactFormState, copy: ModalCopy): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = copy.validation.fullName;
  }

  if (!values.email.trim() || !emailPattern.test(values.email.trim())) {
    errors.email = copy.validation.email;
  }

  if (!values.projectType.trim()) {
    errors.projectType = copy.validation.projectType;
  }

  if (!values.message.trim()) {
    errors.message = copy.validation.message;
  }

  return errors;
}

export function ServiceRequestModal({
  open,
  onClose,
  locale,
  onSuccess,
}: ServiceRequestModalProps) {
  const isArabic = locale === "ar";
  const copy = useMemo(() => MODAL_COPY[locale], [locale]);

  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormState((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: undefined }));
    setErrorMessage(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formState, copy);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setSuccessMessage(null);
      return;
    }

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      process.env.VITE_EMAILJS_PUBLIC_KEY;
    const receiverEmail = process.env.NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL?.trim();
    const canUseEmailJs = Boolean(serviceId && templateId && publicKey);

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const templateParams = {
        full_name: formState.fullName.trim(),
        name: formState.fullName.trim(),
        email: formState.email.trim(),
        phone: formState.phone.trim(),
        project_type: formState.projectType,
        message: formState.message.trim(),
        language: locale,
        receiver_email: receiverEmail,
        to_email: receiverEmail,
      };

      if (process.env.NODE_ENV !== "production") {
        console.info("[EmailJS] submit attempt", {
          serviceId,
          templateId,
          usingMainContactTemplate: templateId === "template_tjc5oii",
          hasPublicKey: Boolean(publicKey),
          payload: templateParams,
        });
      }

      if (canUseEmailJs) {
        const result = await emailjs.send(
          serviceId as string,
          templateId as string,
          templateParams,
          publicKey as string,
        );

        if (result.status !== 200) {
          throw new Error("EmailJS send did not return success status");
        }
      } else {
        const response = await fetch("/api/service-request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formState.fullName.trim(),
            email: formState.email.trim(),
            phone: formState.phone.trim(),
            projectType: formState.projectType,
            message: formState.message.trim(),
            locale,
          }),
        });

        if (!response.ok) {
          throw new Error("Fallback request send failed");
        }
      }

      setFormState(initialFormState);
      setFieldErrors({});
      setSuccessMessage(copy.success);
      onSuccess?.(copy.success);
    } catch (error: unknown) {
      if (process.env.NODE_ENV !== "production") {
        const details =
          error && typeof error === "object"
            ? {
                status: "status" in error ? (error as { status?: unknown }).status : undefined,
                text: "text" in error ? (error as { text?: unknown }).text : undefined,
                message: "message" in error ? (error as { message?: unknown }).message : undefined,
                name: "name" in error ? (error as { name?: unknown }).name : undefined,
                stack: "stack" in error ? (error as { stack?: unknown }).stack : undefined,
              }
            : { raw: error };
        console.error("[EmailJS] submission failed", details);
      }
      setErrorMessage(copy.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (fieldName: keyof ContactFormState) =>
    `h-11 w-full rounded-xl border bg-white px-4 text-slate-900 outline-none transition focus:ring-4 focus:ring-[#EAF5F0] ${
      fieldErrors[fieldName]
        ? "border-rose-300 focus:border-rose-400"
        : "border-[#3A9D91]/18 focus:border-[#3A9D91]"
    }`;

  const labelAlignment = isArabic ? "text-right" : "text-left";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[4px]" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={copy.title}
            dir={isArabic ? "rtl" : "ltr"}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="relative z-[1] w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-[#3A9D91]/20 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={copy.close}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#3A9D91]/20 bg-white text-[#356f67] transition hover:bg-[#EAF5F0]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="bg-[linear-gradient(180deg,#F7FCFA_0%,#FFFFFF_100%)] p-5 sm:p-7">
              <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.9rem]">
                {copy.title}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-7 text-slate-600 sm:text-[0.96rem]">
                {copy.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={`space-y-1.5 text-sm font-medium text-slate-700 ${labelAlignment}`}>
                    <span>{copy.fullName}</span>
                    <input
                      name="fullName"
                      value={formState.fullName}
                      onChange={handleInputChange}
                      autoComplete="name"
                      placeholder={copy.fullName}
                      aria-invalid={Boolean(fieldErrors.fullName)}
                      className={inputClassName("fullName")}
                    />
                    {fieldErrors.fullName ? (
                      <p className="text-xs font-medium text-rose-600">{fieldErrors.fullName}</p>
                    ) : null}
                  </label>

                  <label className={`space-y-1.5 text-sm font-medium text-slate-700 ${labelAlignment}`}>
                    <span>{copy.email}</span>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      placeholder={copy.email}
                      aria-invalid={Boolean(fieldErrors.email)}
                      className={inputClassName("email")}
                    />
                    {fieldErrors.email ? (
                      <p className="text-xs font-medium text-rose-600">{fieldErrors.email}</p>
                    ) : null}
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={`space-y-1.5 text-sm font-medium text-slate-700 ${labelAlignment}`}>
                    <span>{copy.phone}</span>
                    <input
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      placeholder={copy.phone}
                      className={inputClassName("phone")}
                    />
                  </label>

                  <label className={`space-y-1.5 text-sm font-medium text-slate-700 ${labelAlignment}`}>
                    <span>{copy.projectType}</span>
                    <select
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(fieldErrors.projectType)}
                      className={inputClassName("projectType")}
                    >
                      <option value="">{copy.projectTypePlaceholder}</option>
                      {copy.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.projectType ? (
                      <p className="text-xs font-medium text-rose-600">{fieldErrors.projectType}</p>
                    ) : null}
                  </label>
                </div>

                <label className={`space-y-1.5 text-sm font-medium text-slate-700 ${labelAlignment}`}>
                  <span>{copy.message}</span>
                  <textarea
                    rows={5}
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder={copy.message}
                    aria-invalid={Boolean(fieldErrors.message)}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4 focus:ring-[#EAF5F0] ${
                      fieldErrors.message
                        ? "border-rose-300 focus:border-rose-400"
                        : "border-[#3A9D91]/18 focus:border-[#3A9D91]"
                    }`}
                  />
                  {fieldErrors.message ? (
                    <p className="text-xs font-medium text-rose-600">{fieldErrors.message}</p>
                  ) : null}
                </label>

                <AnimatePresence>
                  {successMessage ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{successMessage}</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <AnimatePresence>
                  {errorMessage ? (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
                      role="alert"
                    >
                      {errorMessage}
                    </motion.p>
                  ) : null}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#3A9D91] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(58,157,145,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2f857b] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {copy.sending}
                    </>
                  ) : (
                    copy.send
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
