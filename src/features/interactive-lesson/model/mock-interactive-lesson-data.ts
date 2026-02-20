import type { BreadcrumbItem } from "@/shared/ui/breadcrumb";

export interface InteractiveLessonHeaderLink {
  id: string;
  label: string;
  href: string;
}

export const MOCK_INTERACTIVE_LESSON_COPY = {
  brandLabel: "EduPlatform",
  profileLabel: "Profile",
} as const;

export const MOCK_INTERACTIVE_LESSON_HEADER_LINKS: InteractiveLessonHeaderLink[] = [
  { id: "curriculum", label: "Curriculum", href: "#" },
  { id: "resources", label: "Resources", href: "#" },
  { id: "notes", label: "Notes", href: "#" },
];

export const MOCK_INTERACTIVE_LESSON_BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Courses", href: "#" },
  { label: "Architecture 101", href: "#" },
  { label: "1. Intro to FSD", active: true },
];
