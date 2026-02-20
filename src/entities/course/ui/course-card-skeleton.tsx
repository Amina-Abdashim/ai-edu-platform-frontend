import { Card } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

export interface CourseCardSkeletonProps {
  className?: string;
}

export function CourseCardSkeleton({ className }: CourseCardSkeletonProps) {
  return (
    <Card className={className}>
      <div className="space-y-4 p-4">
        <Skeleton className="h-32 w-full rounded-lg" />

        <div className="space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <Skeleton className="h-8 w-28" />
      </div>
    </Card>
  );
}
