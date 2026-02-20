import { cn } from "@/shared/lib/cn";

export interface ProgressBarProps {
    value: number;
    max?: number;
    barClassName?: string;
    className?: string;
}

export function ProgressBar({
    value,
    max = 100,
    barClassName,
    className,
}: ProgressBarProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div
            className={cn("h-2 w-full overflow-hidden rounded-full bg-slate-200", className)}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
        >
            <div
                className={cn("h-full rounded-full bg-primary transition-all", barClassName)}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
