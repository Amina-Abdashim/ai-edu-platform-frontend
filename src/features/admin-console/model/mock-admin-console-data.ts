import type { DataTableColumn } from "@/shared/ui/data-table";
import type { TabItem } from "@/shared/ui/tabs";

export const MOCK_ADMIN_CONSOLE_COPY = {
  heading: "Dashboard Overview",
  subtitle:
    "Welcome to your admin workspace. Metrics will appear here once data is populated.",
  primaryActionLabel: "Add Data",
} as const;

export const MOCK_ADMIN_TABS: TabItem[] = [
  { id: "enrollment", label: "Enrollment Data" },
  { id: "financial", label: "Financial Reports" },
  { id: "logs", label: "System Logs" },
];

export const MOCK_ADMIN_DEFAULT_TAB_ID = "enrollment";

export const MOCK_ADMIN_TABLE_COLUMNS: DataTableColumn[] = [
  { key: "name", label: "Student Name" },
  { key: "date", label: "Enrollment Date" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions", align: "right" },
];
