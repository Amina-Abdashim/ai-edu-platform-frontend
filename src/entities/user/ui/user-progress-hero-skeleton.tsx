import { Card } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

export interface UserProgressHeroSkeletonProps {
  className?: string;
}

export function UserProgressHeroSkeleton({ className }: UserProgressHeroSkeletonProps) {
  return (
    <Card className={className}>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-72" />
          </div>

          <span className="text-sm font-semibold text-blue-600">0%</span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-0 rounded-full bg-blue-600" />
        </div>
      </div>
    </Card>
  );
}
