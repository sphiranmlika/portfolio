import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-10 lg:mb-14",
        alignment === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#DCC3AA]/60 text-burgundy border border-[#CEB49A]/50",
            alignment === "center" && "mx-auto"
          )}
        >
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-maroon">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-maroon-muted leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
