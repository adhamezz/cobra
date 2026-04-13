import { NextResponse } from "next/server";

type RequestBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  locale?: "en" | "ar";
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL?.trim() || "ert2815@gmail.com";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    const submission = new FormData();
    submission.append("name", body.fullName?.trim() || "");
    submission.append("email", body.email?.trim() || "");
    submission.append("phone", body.phone?.trim() || "");
    submission.append("project_type", body.projectType?.trim() || "");
    submission.append("message", body.message?.trim() || "");
    submission.append("_subject", "New Project Message - Cobra Solutions");
    submission.append("_captcha", "false");
    submission.append("_template", "table");
    submission.append("_locale", body.locale === "en" ? "en" : "ar");

    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: submission,
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, message: "Failed to send request" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Unexpected error" }, { status: 500 });
  }
}
