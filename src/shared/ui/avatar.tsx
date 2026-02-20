import { cn } from "@/shared/lib/cn";

export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
    fallback?: string;
    className?: string;
}

const SIZE_MAP: Record<NonNullable<AvatarProps["size"]>, string> = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
};

export function Avatar({
    src,
    alt = "User avatar",
    size = "md",
    fallback,
    className,
}: AvatarProps) {
    if (src) {
        return (
            <div
                className={cn(
                    "shrink-0 rounded-full bg-slate-200 bg-cover bg-center",
                    SIZE_MAP[size],
                    className
                )}
                style={{ backgroundImage: `url('${src}')` }}
                role="img"
                aria-label={alt}
            />
        );
    }

    return (
        <div
            className={cn(
                "flex shrink-0 items-center justify-center rounded-full bg-slate-200 font-semibold text-slate-600",
                SIZE_MAP[size],
                className
            )}
            role="img"
            aria-label={alt}
        >
            {fallback ?? alt.charAt(0).toUpperCase()}
        </div>
    );
}
