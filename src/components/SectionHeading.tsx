type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center" | "right";
  tone?: "dark" | "light";
  showTitleStroke?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  showTitleStroke = false,
}: SectionHeadingProps) {
  const eyebrowClass = tone === "dark" ? "text-[#5FB3A8]" : "text-[#3A9D91]";
  const titleClass = tone === "dark" ? "text-white" : "text-slate-900";
  const descriptionClass = tone === "dark" ? "text-slate-300" : "text-slate-600";
  const alignmentClass =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : align === "right"
        ? "ml-auto max-w-3xl text-right"
        : "mr-auto max-w-3xl text-left";

  return (
    <div className={alignmentClass}>
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-pretty text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      {showTitleStroke ? (
        <div className={`mt-3 ${align === "center" ? "mx-auto w-28" : "w-24"}`}>
          {/* خط مائل بسيط يضيف لمسة براند هادئة تحت العنوان */}
          <svg viewBox="0 0 120 24" className="h-3.5 w-full" aria-hidden="true">
            <path
              d="M8 16C28 12 44 11 60 13C76 15 92 14 112 9"
              fill="none"
              stroke="#3A9D91"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      ) : null}
      <p className={`mt-4 max-w-2xl text-base leading-8 sm:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}
