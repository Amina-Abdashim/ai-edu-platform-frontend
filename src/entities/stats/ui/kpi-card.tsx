import { cn } from "@/shared/lib/cn";
import { Card } from "@/shared/ui/card";
import { Icon } from "@/shared/ui/icon";

export interface KpiCardProps {
    label: string;
    icon: string;
    value: string | number;
    className?: string;
}

export function KpiCard({ label, icon, value, className }: KpiCardProps) {
    return (
        <Card
            className={cn(
                "p-6 dark:border-slate-800 dark:bg-[#182635]",
                className
            )}
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {label}
                    </p>
                    <Icon name={icon} size="lg" className="text-slate-400" />
                </div>
                <p className="text-3xl font-bold text-slate-400 dark:text-slate-500">
                    {value}
                </p>
            </div>
        </Card>
    );
}
