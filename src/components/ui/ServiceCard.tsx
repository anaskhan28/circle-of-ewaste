import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  variant?: "default" | "featured";
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  variant = "default",
  className,
}: ServiceCardProps) {
  const card = (
    <div
      className={cn(
        "card-base p-7 flex flex-col gap-4 group",
        variant === "featured" &&
          "bg-gradient-to-br from-very-light-blue to-very-light-green border-brand-blue/10",
        href && "cursor-pointer hover:-translate-y-0.5",
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
          variant === "featured"
            ? "bg-brand-blue text-white group-hover:bg-brand-deep-blue"
            : "bg-very-light-blue text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
        )}
      >
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-dark text-lg group-hover:text-brand-blue transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>

      {/* Link */}
      {href && (
        <div className="mt-auto pt-2 flex items-center gap-1.5 text-brand-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{card}</Link>;
  }

  return card;
}
