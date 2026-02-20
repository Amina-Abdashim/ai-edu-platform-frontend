import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Icon } from "@/shared/ui/icon";

const PLACEHOLDER_CARD_KEYS = ["placeholder-card-1", "placeholder-card-2"] as const;

export interface CourseListEmptyStateProps {
  className?: string;
  onCreateCourse?: () => void;
}

export function CourseListEmptyState({
  className,
  onCreateCourse,
}: CourseListEmptyStateProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Background skeleton cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDER_CARD_KEYS.map((cardKey) => (
          <Card key={cardKey} className="opacity-50">
            <div className="space-y-4 p-4">
              <div className="h-32 w-full rounded-lg bg-slate-100" />
              <div className="space-y-2">
                <div className="h-5 w-3/4 rounded bg-slate-100" />
                <div className="h-4 w-1/2 rounded bg-slate-100" />
              </div>
              <div className="h-8 w-28 rounded bg-slate-100" />
            </div>
          </Card>
        ))}
      </div>

      {/* Overlay modal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Card className="mx-4 max-w-md shadow-lg">
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <div className="text-slate-400">
              <Icon name="folder_off" size="xl" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              No active courses found
            </h3>

            <p className="text-sm text-slate-500">
              It looks like you haven&apos;t created any courses yet. Get started
              by creating your first curriculum today.
            </p>

            <Button
              size="lg"
              className="w-full gap-2 bg-primary hover:bg-primary/90"
              onClick={onCreateCourse}
            >
              <Icon name="add_circle" size="md" />
              Create Course
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
