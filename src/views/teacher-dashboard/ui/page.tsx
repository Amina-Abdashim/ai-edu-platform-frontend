import { CourseCard, MOCK_COURSES } from "@/entities/course";
import { UserProgressHero } from "@/entities/user";
import { QuickAITutorWidget } from "@/features/quick-ai-tutor";
import {
  MOCK_TEACHER_DASHBOARD_COPY,
  MOCK_TEACHER_PROGRESS,
  MOCK_TEACHER_STATS,
} from "@/features/teacher-dashboard";
import { Sidebar } from "@/shared/ui/sidebar";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

export function TeacherDashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar />

      <main className="flex flex-1 flex-col overflow-y-auto">
        {/* Page header */}
        <header className="flex shrink-0 items-center justify-between px-8 py-5">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {MOCK_TEACHER_DASHBOARD_COPY.heading}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {MOCK_TEACHER_DASHBOARD_COPY.subtitle}
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <Icon name="add" size="sm" />
            {MOCK_TEACHER_DASHBOARD_COPY.primaryActionLabel}
          </Button>
        </header>

        {/* Content */}
        <div className="flex-1 space-y-6 px-8 pb-8">
          <UserProgressHero {...MOCK_TEACHER_PROGRESS} />

          {/* Stats row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {MOCK_TEACHER_STATS.map((stat) => (
              <div key={stat.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconClassName}`}>
                    <Icon name={stat.icon} size="md" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Courses */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                {MOCK_TEACHER_DASHBOARD_COPY.coursesSectionTitle}
              </h2>
              <button className="text-sm font-medium text-primary hover:underline">
                {MOCK_TEACHER_DASHBOARD_COPY.coursesSectionActionLabel}
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MOCK_COURSES.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <QuickAITutorWidget className="fixed bottom-6 right-6 z-50 w-72 shadow-xl" />
    </div>
  );
}
