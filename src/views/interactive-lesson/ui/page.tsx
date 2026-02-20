import { LessonContent, VideoPlayerSkeleton } from "@/entities/lesson";
import { AiAssistantPanel } from "@/features/ai-assistant";
import {
    MOCK_INTERACTIVE_LESSON_BREADCRUMBS,
    MOCK_INTERACTIVE_LESSON_COPY,
    MOCK_INTERACTIVE_LESSON_HEADER_LINKS,
} from "@/features/interactive-lesson";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { Icon } from "@/shared/ui/icon";
import { Sidebar } from "@/shared/ui/sidebar";

export function InteractiveLessonPage() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-white">
            {/* ── Left Column — Sidebar ── */}
            <Sidebar />

            {/* ── Middle Column — Main Content ── */}
            <div className="flex flex-1 flex-col min-w-0">
                {/* Top Header */}
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center text-primary">
                            <Icon name="school" size="lg" />
                        </div>
                        <h1 className="text-lg font-bold text-slate-900">
                            {MOCK_INTERACTIVE_LESSON_COPY.brandLabel}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <nav className="hidden items-center gap-6 md:flex">
                            {MOCK_INTERACTIVE_LESSON_HEADER_LINKS.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="text-sm font-medium text-slate-600 hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <div className="h-4 w-px bg-slate-200" />
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            <Icon name="account_circle" size="md" />
                            {MOCK_INTERACTIVE_LESSON_COPY.profileLabel}
                        </button>
                    </div>
                </header>

                {/* Scrollable Lesson Content */}
                <main className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-8">
                    <Breadcrumb
                        items={MOCK_INTERACTIVE_LESSON_BREADCRUMBS}
                        className="mb-6"
                    />
                    <VideoPlayerSkeleton className="mb-8" />
                    <LessonContent />
                </main>
            </div>

            {/* ── Right Column — AI Tutor ── */}
            <AiAssistantPanel className="w-[350px] shrink-0" />
        </div>
    );
}
