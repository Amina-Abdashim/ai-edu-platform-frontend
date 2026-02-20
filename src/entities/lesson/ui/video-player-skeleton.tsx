import { cn } from "@/shared/lib/cn";
import { Icon } from "@/shared/ui/icon";
import { Skeleton } from "@/shared/ui/skeleton";

export interface VideoPlayerSkeletonProps {
    className?: string;
}

export function VideoPlayerSkeleton({ className }: VideoPlayerSkeletonProps) {
    return (
        <div
            className={cn(
                "relative flex aspect-video w-full items-center justify-center rounded-xl bg-slate-100 border border-slate-200",
                className
            )}
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <Icon name="play_arrow" size="xl" className="text-slate-900 ml-1" />
            </div>
        </div>
    );
}
