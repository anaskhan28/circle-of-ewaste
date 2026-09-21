import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  headingSize?: "md" | "lg" | "xl";
  light?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({
  tag,
  heading,
  subheading,
  align = "center",
  headingSize = "lg",
  light = false,
  className,
  id,
}: SectionHeadingProps) {
  const headingSizes = {
    md: "text-xl sm:text-2xl md:text-3xl",
    lg: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    xl: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {tag && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest",
            light
              ? "bg-white/15 text-white border border-white/20"
              : "bg-very-light-blue text-brand-blue border border-brand-blue/10"
          )}
        >
          {tag}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "font-bold leading-tight tracking-tight",
          headingSizes[headingSize],
          light ? "text-white" : "text-dark"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg leading-relaxed",
            light ? "text-white/70" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
