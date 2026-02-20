import { cn } from "@/shared/lib/cn";

export interface IconProps {
    name: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
}

const SIZE_MAP: Record<NonNullable<IconProps["size"]>, string> = {
    sm: "text-[18px]",
    md: "text-[20px]",
    lg: "text-[24px]",
    xl: "text-[36px]",
    "2xl": "text-[48px]",
};

export function Icon({ name, size = "lg", className }: IconProps) {
    return (
        <span
            className={cn("material-symbols-outlined leading-none", SIZE_MAP[size], className)}
        >
            {name}
        </span>
    );
}
