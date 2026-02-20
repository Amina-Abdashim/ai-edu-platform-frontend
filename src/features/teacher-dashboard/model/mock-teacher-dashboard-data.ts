import type { UserProgressHeroProps } from "@/entities/user";

export interface TeacherDashboardStatItem {
  id: string;
  icon: string;
  value: number;
  label: string;
  iconClassName: string;
}

export const MOCK_TEACHER_DASHBOARD_COPY = {
  heading: "Welcome back, Prof. Alex",
  subtitle: "Manage your courses and track student progress.",
  primaryActionLabel: "New Course",
  coursesSectionTitle: "Recent Courses",
  coursesSectionActionLabel: "View All",
} as const;

export const MOCK_TEACHER_PROGRESS: UserProgressHeroProps = {
  title: "Setup Progress",
  subtitle: "Complete your profile to unlock all features.",
  completionRate: 35,
};

export const MOCK_TEACHER_STATS: TeacherDashboardStatItem[] = [
  {
    id: "active-courses",
    icon: "school",
    value: 3,
    label: "Active Courses",
    iconClassName: "bg-blue-50 text-blue-600",
  },
  {
    id: "total-students",
    icon: "group",
    value: 54,
    label: "Total Students",
    iconClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "lessons-published",
    icon: "task_alt",
    value: 12,
    label: "Lessons Published",
    iconClassName: "bg-amber-50 text-amber-600",
  },
];
