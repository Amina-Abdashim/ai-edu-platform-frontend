import { Icon } from "@/shared/ui/icon";

export function LessonContent() {
    return (
        <div className="space-y-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-900">
                1. Introduction to Feature-Sliced Design
            </h1>

            {/* Tags */}
            <div className="flex gap-3">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    Architecture
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    Frontend
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    Best Practices
                </span>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200" />

            {/* Content Text */}
            <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed">
                    Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it&apos;s a set of rules and conventions on how to organize your code. The main purpose of this methodology is to make the project understandable and structured in the face of ever-changing business requirements.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                    In this lesson, we will explore the core layers of FSD:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                    <li><strong>App:</strong> Global app setup and providers.</li>
                    <li><strong>Pages (Views):</strong> Composition of pages.</li>
                    <li><strong>Widgets:</strong> Compositional blocks for pages.</li>
                    <li><strong>Features:</strong> User scenarios and interactions.</li>
                    <li><strong>Entities:</strong> Business logic and data.</li>
                    <li><strong>Shared:</strong> Reusable infrastructure code.</li>
                </ul>
                <p className="mt-4 text-slate-600 leading-relaxed">
                    By the end of this module, you will be able to structure any React project using these principles, ensuring scalability and maintainability.
                </p>
            </div>

            {/* Resources / Attachments */}
            <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Lesson Resources
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                    <a href="#" className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                            <Icon name="picture_as_pdf" size="md" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">FSD_Cheatsheet.pdf</p>
                            <p className="text-xs text-slate-500">1.2 MB</p>
                        </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <Icon name="code" size="md" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">Starter Project</p>
                            <p className="text-xs text-slate-500">GitHub Repository</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
