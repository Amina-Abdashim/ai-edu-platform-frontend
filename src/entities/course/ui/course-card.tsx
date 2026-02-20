import Link from "next/link";

import { Card } from "@/shared/ui/card";
import { Icon } from "@/shared/ui/icon";
import { ProgressBar } from "@/shared/ui/progress-bar";

export interface CourseCardProps {
    title: string;
    subtitle: string;
    lessonsCount: number;
    completedLessons: number;
    href: string;
    accentColor?: string;
}

export function CourseCard({
    title,
    subtitle,
    lessonsCount,
    completedLessons,
    href,
    accentColor = "bg-blue-500",
}: CourseCardProps) {
    const progress = Math.round((completedLessons / lessonsCount) * 100);

    return (
        <Link href={href} className="group block">
            <Card className="overflow-hidden transition-shadow hover:shadow-md">
                {/* Color banner */}
                <div className={`h-32 w-full ${accentColor} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                            name="play_circle"
                            size="2xl"
                            className="text-white/80 transition-transform group-hover:scale-110"
                        />
                    </div>
                </div>

                <div className="space-y-3 p-4">
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{completedLessons}/{lessonsCount} lessons</span>
                        <span className="font-medium text-primary">{progress}%</span>
                    </div>
                    <ProgressBar value={progress} className="h-1.5" barClassName="bg-primary" />
                </div>
            </Card>
        </Link>
    );
}
