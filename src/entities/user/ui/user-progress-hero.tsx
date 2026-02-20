import { Card } from "@/shared/ui/card";
import { ProgressBar } from "@/shared/ui/progress-bar";
import { cn } from "@/shared/lib/cn";

export interface UserProgressHeroProps {
  className?: string;
  title?: string;
  subtitle?: string;
  completionRate?: number;
}

export function UserProgressHero({
  className,
  title = "Setup Progress",
  subtitle = "Complete your profile to unlock all features.",
  completionRate = 0,
}: UserProgressHeroProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              {title}
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              {subtitle}
            </p>
          </div>
          <span className="shrink-0 text-sm font-semibold text-primary">
            {completionRate}%
          </span>
        </div>

        <ProgressBar value={completionRate} barClassName="bg-primary" />
      </div>
    </Card>
  );
}
