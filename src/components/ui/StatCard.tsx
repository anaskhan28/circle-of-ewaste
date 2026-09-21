import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  variant?: "default" | "blue" | "green";
  illustrative?: boolean;
  className?: string;
}

export function StatCard({
  value,
  label,
  sublabel,
  variant = "default",
  illustrative = false,
  className,
}: StatCardProps) {
  const variants = {
    default: "bg-white border border-gray-100",
    blue: "bg-brand-blue text-white",
    green: "bg-brand-green text-white",
  };

  const valueColor = {
    default: "text-brand-blue",
    blue: "text-white",
    green: "text-white",
  };

  const labelColor = {
    default: "text-dark",
    blue: "text-white/90",
    green: "text-white/90",
  };

  const sublabelColor = {
    default: "text-muted",
    blue: "text-white/60",
    green: "text-white/60",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-4 sm:p-6 shadow-card relative overflow-hidden",
        variants[variant],
        className
      )}
    >
      {illustrative && (
        <span className="absolute top-3 right-3 text-[9px] font-semibold uppercase tracking-widest text-muted/50 bg-gray-50 px-2 py-0.5 rounded-full">
          Illustrative
        </span>
      )}
      <div className={cn("text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight", valueColor[variant])}>
        {value}
      </div>
      <div className={cn("font-semibold text-sm mt-1", labelColor[variant])}>
        {label}
      </div>
      {sublabel && (
        <div className={cn("text-xs mt-1 leading-relaxed", sublabelColor[variant])}>
          {sublabel}
        </div>
      )}
    </div>
  );
}
