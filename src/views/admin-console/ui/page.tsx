import { EnrollmentTableEmptyState } from "@/entities/enrollment";
import { KpiCard, MOCK_KPI_ITEMS } from "@/entities/stats";
import {
    MOCK_ADMIN_CONSOLE_COPY,
    MOCK_ADMIN_DEFAULT_TAB_ID,
    MOCK_ADMIN_TABLE_COLUMNS,
    MOCK_ADMIN_TABS,
} from "@/features/admin-console";
import { Button } from "@/shared/ui/button";
import { DataTable } from "@/shared/ui/data-table";
import { Icon } from "@/shared/ui/icon";
import { Sidebar } from "@/shared/ui/sidebar";
import { Tabs } from "@/shared/ui/tabs";

export function AdminConsolePage() {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-100">
            <Sidebar />

            <main className="flex flex-1 flex-col overflow-y-auto">
                {/* Page header */}
                <header className="flex shrink-0 items-center justify-between px-8 py-5">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">
                            {MOCK_ADMIN_CONSOLE_COPY.heading}
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            {MOCK_ADMIN_CONSOLE_COPY.subtitle}
                        </p>
                    </div>
                    <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                        <Icon name="add" size="sm" />
                        {MOCK_ADMIN_CONSOLE_COPY.primaryActionLabel}
                    </Button>
                </header>

                {/* Content */}
                <div className="flex-1 space-y-6 px-8 pb-8">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {MOCK_KPI_ITEMS.map((kpi) => (
                            <KpiCard key={kpi.label} {...kpi} />
                        ))}
                    </div>

                    {/* Data Section */}
                    <div className="flex flex-col gap-4">
                        <Tabs items={MOCK_ADMIN_TABS} defaultActiveId={MOCK_ADMIN_DEFAULT_TAB_ID} />
                        <DataTable
                            columns={MOCK_ADMIN_TABLE_COLUMNS}
                            emptyState={<EnrollmentTableEmptyState />}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
