import { cn } from "@/lib/utils";

interface GradeCardProps {
  grade: "A" | "B" | "C" | "PARTS";
  title: string;
  description: string;
  characteristics: string[];
  outcome: string;
  className?: string;
}

const gradeConfig = {
  A: {
    bg: "bg-gradient-to-br from-very-light-blue to-blue-50",
    border: "border-brand-blue/20",
    badge: "bg-brand-blue text-white",
    accent: "text-brand-blue",
  },
  B: {
    bg: "bg-gradient-to-br from-very-light-green to-green-50",
    border: "border-brand-green/20",
    badge: "bg-brand-green text-white",
    accent: "text-brand-green",
  },
  C: {
    bg: "bg-gradient-to-br from-yellow-50 to-orange-50",
    border: "border-yellow-200",
    badge: "bg-yellow-500 text-white",
    accent: "text-yellow-700",
  },
  PARTS: {
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    border: "border-gray-200",
    badge: "bg-gray-500 text-white",
    accent: "text-gray-700",
  },
};

export function GradeCard({
  grade,
  title,
  description,
  characteristics,
  outcome,
  className,
}: GradeCardProps) {
  const config = gradeConfig[grade];

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 flex flex-col gap-4 shadow-card",
        config.bg,
        config.border,
        className
      )}
    >
      {/* Grade badge */}
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "text-xl font-bold w-12 h-12 rounded-xl flex items-center justify-center",
            config.badge
          )}
        >
          {grade}
        </span>
        <div>
          <h3 className="font-bold text-dark text-lg">{title}</h3>
          <p className="text-xs text-muted">{description}</p>
        </div>
      </div>

      {/* Characteristics */}
      <ul className="space-y-1.5">
        {characteristics.map((c, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-dark/80">
            <span className={cn("mt-1 text-xs", config.accent)}>●</span>
            {c}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className={cn("pt-3 border-t border-current/10 text-sm font-semibold", config.accent)}>
        → {outcome}
      </div>
    </div>
  );
}
