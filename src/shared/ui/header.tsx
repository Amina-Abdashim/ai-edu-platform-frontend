import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";
import { Icon } from "@/shared/ui/icon";
import { Skeleton } from "@/shared/ui/skeleton";

export interface HeaderProps {
    brandIcon?: string;
    brandLabel?: string;
    navItems?: Array<{
        label: string;
        href: string;
    }>;
    rightSlot?: ReactNode;
    skeleton?: boolean;
    className?: string;
}

export function Header({
    brandIcon = "school",
    brandLabel = "EduPlatform",
    navItems,
    rightSlot,
    skeleton = false,
    className,
}: HeaderProps) {
    const skeletonKeys =
        navItems?.map((item) => `header-skeleton-${item.label}`) ?? [
            "header-skeleton-1",
            "header-skeleton-2",
            "header-skeleton-3",
        ];

    return (
        <header
            className={cn(
                "flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#182635] px-6 py-4 md:px-10",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center text-primary">
                    <Icon name={brandIcon} size="lg" />
                </div>
                <h2 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
                    {brandLabel}
                </h2>
            </div>

            <div className="flex items-center gap-4">
                {skeleton ? (
                    <div className="hidden items-center gap-4 md:flex">
                        {skeletonKeys.map((skeletonKey) => (
                            <Skeleton key={skeletonKey} className="h-9 w-24 rounded-lg bg-slate-100" />
                        ))}
                    </div>
                ) : null}

                {!skeleton && navItems ? (
                    <nav className="hidden items-center gap-6 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                ) : null}

                {rightSlot}
            </div>
        </header>
    );
}
