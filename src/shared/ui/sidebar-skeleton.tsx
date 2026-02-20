import { cn } from "@/shared/lib/cn";
import { Skeleton } from "@/shared/ui/skeleton";

const NAV_PLACEHOLDERS = ["dashboard", "courses", "students", "reports"] as const;

export interface SidebarSkeletonProps {
  className?: string;
}

export function SidebarSkeleton({ className }: SidebarSkeletonProps) {
  return (
    <aside
      className={cn(
        "flex h-screen w-56 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-6",
        className
      )}
    >
      <div className="mb-8 flex items-center gap-3 px-2">
        <Skeleton className="h-8 w-8 rounded-md" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_PLACEHOLDERS.map((placeholder) => (
          <div
            key={placeholder}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5"
          >
            <Skeleton className="h-4 w-4 rounded-sm" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-3 border-t border-slate-200 px-2 pt-4">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="min-w-0 space-y-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </aside>
  );
}
