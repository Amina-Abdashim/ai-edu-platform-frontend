"use client";

import { useState } from "react";

import { cn } from "@/shared/lib/cn";

export interface TabItem {
    label: string;
    id: string;
}

export interface TabsProps {
    items: TabItem[];
    defaultActiveId?: string;
    onTabChange?: (id: string) => void;
    className?: string;
}

export function Tabs({ items, defaultActiveId, onTabChange, className }: TabsProps) {
    const [activeId, setActiveId] = useState<string>(defaultActiveId ?? items[0]?.id ?? "");

    const handleTabClick = (id: string) => {
        setActiveId(id);
        onTabChange?.(id);
    };

    return (
        <div className={cn("border-b border-slate-200 dark:border-slate-700", className)}>
            <nav aria-label="Tabs" className="-mb-px flex gap-8">
                {items.map((item) => {
                    const isActive = item.id === activeId;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleTabClick(item.id)}
                            className={cn(
                                "border-b-2 px-1 py-4 text-sm font-medium transition-colors",
                                isActive
                                    ? "border-primary font-bold text-primary"
                                    : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300"
                            )}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
