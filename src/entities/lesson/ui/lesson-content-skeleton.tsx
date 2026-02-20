import { cn } from "@/shared/lib/cn";
import { Skeleton } from "@/shared/ui/skeleton";

export interface LessonContentSkeletonProps {
    className?: string;
}

export function LessonContentSkeleton({ className }: LessonContentSkeletonProps) {
    return (
        <div className={cn("space-y-6", className)}>
            {/* Title */}
            <Skeleton className="h-10 w-3/4 rounded-lg" />

            {/* Tags */}
            <div className="flex gap-3">
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-16 rounded-full" />
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200" />

            {/* Paragraph block 1 */}
            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
            </div>

            {/* Paragraph block 2 */}
            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        </div>
    );
}
