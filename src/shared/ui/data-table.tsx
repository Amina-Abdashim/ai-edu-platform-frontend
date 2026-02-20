import { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

export interface DataTableColumn {
    key: string;
    label: string;
    align?: "left" | "right" | "center";
}

export interface DataTableProps {
    columns: DataTableColumn[];
    emptyState?: ReactNode;
    className?: string;
}

export function DataTable({ columns, emptyState, className }: DataTableProps) {
    return (
        <div
            className={cn(
                "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#182635]",
                className
            )}
        >
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                scope="col"
                                className={cn(
                                    "px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400",
                                    col.align === "right" ? "text-right" : "text-left"
                                )}
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-[#182635]">
                    {emptyState ? (
                        <tr>
                            <td className="px-6 py-24 text-center" colSpan={columns.length}>
                                {emptyState}
                            </td>
                        </tr>
                    ) : null}
                </tbody>
            </table>
        </div>
    );
}
