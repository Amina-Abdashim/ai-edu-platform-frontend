import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

export interface EnrollmentTableEmptyStateProps {
    className?: string;
    onImport?: () => void;
}

export function EnrollmentTableEmptyState({
    className,
    onImport,
}: EnrollmentTableEmptyStateProps) {
    return (
        <div className={className}>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="rounded-full bg-slate-100 p-6 dark:bg-slate-800">
                    <Icon name="folder_off" size="xl" className="text-slate-400 dark:text-slate-500" />
                </div>

                <div className="flex flex-col gap-1 text-center">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        No data available to display
                    </h3>
                    <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
                        There are no enrollment records yet. Import your first dataset or
                        manually add a new entry to get started.
                    </p>
                </div>

                <div className="mt-2">
                    <button
                        type="button"
                        onClick={onImport}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
                    >
                        <Icon name="upload_file" size="sm" />
                        Import Dataset
                    </button>
                </div>
            </div>
        </div>
    );
}
