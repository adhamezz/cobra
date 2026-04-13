# Cobra Creative Solutions

واجهة موقع شركة احترافية مبنية بـ Next.js + TypeScript + Tailwind CSS، مع دعم اللغتين العربية والإنجليزية (RTL/LTR)، صفحات خدمات ديناميكية، صفحة 404 مخصصة، وحركات UI حديثة.

A professional company website built with Next.js + TypeScript + Tailwind CSS, featuring Arabic/English support (RTL/LTR), dynamic service pages, a custom 404 page, and modern UI animations.

## العربية

### نظرة عامة
- موقع شركة/وكالة رقمية بواجهة عصرية.
- دعم تغيير اللغة بين العربية والإنجليزية.
- صفحات خدمات مفصلة لكل خدمة.
- نموذج تواصل مرتبط بـ EmailJS.
- صفحة Not Found مخصصة باستخدام Lottie.

### التقنيات المستخدمة
- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Framer Motion`
- `Lottie React`

### التشغيل محليًا
1. تثبيت الحزم:
```bash
npm install
```
2. إنشاء ملف البيئة:
```bash
cp .env.example .env
```
أو على PowerShell:
```powershell
Copy-Item .env.example .env
```
3. تعبئة متغيرات البيئة في `.env` (بيانات EmailJS).
4. تشغيل السيرفر:
```bash
npm run dev
```
5. افتح:
`http://localhost:3000`

### أوامر المشروع
```bash
npm run dev    # تشغيل التطوير
npm run build  # بناء الإنتاج
npm run start  # تشغيل نسخة الإنتاج
npm run lint   # فحص ESLint
```

### متغيرات البيئة
موجودة في:
[`.env.example`](./.env.example)

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL=
```

### المسارات الأساسية
- `/` الصفحة الرئيسية
- `/services/[slug]` صفحة خدمة ديناميكية
- `/services/web-development` صفحات خدمات مباشرة
- `*` صفحة 404 مخصصة عبر `app/not-found.tsx`

### ملاحظات
- أثناء `npm run build` قد يحتاج تحميل خط Google (`Cairo`) اتصال إنترنت.

---

## English

### Overview
- Modern company/agency website interface.
- Arabic/English language switching.
- Detailed service pages.
- Contact form integrated with EmailJS.
- Custom Not Found page powered by Lottie.

### Tech Stack
- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Framer Motion`
- `Lottie React`

### Run Locally
1. Install dependencies:
```bash
npm install
```
2. Create your env file:
```bash
cp .env.example .env
```
Or on PowerShell:
```powershell
Copy-Item .env.example .env
```
3. Fill in EmailJS values in `.env`.
4. Start dev server:
```bash
npm run dev
```
5. Open:
`http://localhost:3000`

### Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Environment Variables
See:
[`.env.example`](./.env.example)

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL=
```

### Main Routes
- `/` Home page
- `/services/[slug]` Dynamic service page
- `/services/web-development` Direct service routes
- `*` Custom 404 via `app/not-found.tsx`

### Notes
- `npm run build` may require internet access to fetch the Google `Cairo` font.
