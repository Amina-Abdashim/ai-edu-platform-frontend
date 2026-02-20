import { cn } from "@/shared/lib/cn";
import { Icon } from "@/shared/ui/icon";
import { Skeleton } from "@/shared/ui/skeleton";

export interface BreadcrumbItem {
    id?: string;
    label?: string;
    href?: string;
    active?: boolean;
    skeleton?: boolean;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2 text-sm", className)}>
            {items.map((item, index) => {
                const itemKey =
                    item.id ??
                    `${item.label ?? "breadcrumb-item"}-${item.href ?? "no-href"}-${item.active ? "active" : "inactive"}-${item.skeleton ? "skeleton" : "content"}`;

                return (
                    <span key={itemKey} className="flex items-center gap-2">
                        {index > 0 && (
                            <Icon name="chevron_right" size="sm" className="text-slate-400" />
                        )}
                        {item.skeleton ? (
                            <Skeleton className="h-4 w-20" />
                        ) : (
                            <a
                                href={item.href}
                                className={cn(
                                    "transition-colors",
                                    item.active
                                        ? "font-semibold text-slate-900 pointer-events-none"
                                        : "text-slate-500 hover:text-slate-700"
                                )}
                                aria-current={item.active ? "page" : undefined}
                            >
                                {item.label}
                            </a>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}
