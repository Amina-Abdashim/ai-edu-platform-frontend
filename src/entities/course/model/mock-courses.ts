import type { CourseCardProps } from "../ui/course-card";

export const MOCK_COURSES: CourseCardProps[] = [
  {
    title: "Architecture 101: Feature-Sliced Design",
    subtitle: "12 students enrolled",
    lessonsCount: 8,
    completedLessons: 3,
    href: "/lesson",
    accentColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    title: "React Fundamentals",
    subtitle: "24 students enrolled",
    lessonsCount: 12,
    completedLessons: 7,
    href: "/lesson",
    accentColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
  },
  {
    title: "TypeScript Deep Dive",
    subtitle: "18 students enrolled",
    lessonsCount: 10,
    completedLessons: 2,
    href: "/lesson",
    accentColor: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
];
