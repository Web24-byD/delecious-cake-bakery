import { BUSINESS_BY, BUSINESS_SUB } from "@/config/business";
import { cn } from "@/lib/utils";

/**
 * Typographic lockup of the shop's existing identity:
 * DELICIOUS / Cake & Bakery / BY TANVI
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-lg leading-none tracking-[0.22em] sm:text-xl",
          tone === "light" ? "text-ivory" : "text-charcoal",
        )}
      >
        DELICIOUS
      </span>
      <span className="mt-1 flex items-center gap-1.5">
        <span className="h-px w-3 bg-champagne" aria-hidden="true" />
        <span
          className={cn(
            "text-[9px] font-medium tracking-[0.24em] uppercase sm:text-[10px]",
            tone === "light" ? "text-ivory/70" : "text-muted-foreground",
          )}
        >
          {BUSINESS_SUB} · {BUSINESS_BY}
        </span>
      </span>
    </span>
  );
}
