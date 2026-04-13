import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

import { ProjectsSection } from "./ProjectsSection";

type ShowcaseProps = {
  locale: Locale;
  content: LanguageContent["showcase"];
};

export function Projects({ locale, content }: ShowcaseProps) {
  return <ProjectsSection locale={locale} content={content} />;
}
