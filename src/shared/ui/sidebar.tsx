"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/shared/lib/cn";
import { Icon } from "@/shared/ui/icon";

const NAV_ITEMS = [
  { icon: "dashboard", label: "Dashboard", href: "/" },
  { icon: "menu_book", label: "Courses", href: "/lesson" },
  { icon: "group", label: "Students", href: "/admin" },
  { icon: "bar_chart", label: "Reports", href: "/admin" },
];

export interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-screen w-56 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-6",
        className
      )}
    >
      {/* Brand */}
      <Link href="/" className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
          <Icon name="menu_book" size="sm" className="text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">EduPlatform</p>
          <p className="text-xs text-slate-500">Teacher Portal</p>
        </div>
      </Link>

      {/* Nav items */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map(({ icon, label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon name={icon} size="sm" className="shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User area */}
      <div className="flex items-center gap-3 border-t border-slate-200 px-2 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600">
          A
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-900">Prof. Alex</p>
          <p className="truncate text-xs text-slate-500">Settings</p>
        </div>
      </div>
    </aside>
  );
}
