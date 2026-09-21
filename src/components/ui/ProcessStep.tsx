import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string | number;
  title: string;
  description: string;
  variant?: "vertical" | "horizontal";
  isLast?: boolean;
  className?: string;
}

export function ProcessStep({
  number,
  title,
  description,
  variant = "vertical",
  isLast = false,
  className,
}: ProcessStepProps) {
  if (variant === "horizontal") {
    return (
      <div className={cn("flex flex-col items-center text-center gap-3", className)}>
        <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
          {String(number).padStart(2, "0")}
        </div>
        <div>
          <h3 className="font-bold text-dark text-lg">{title}</h3>
          <p className="text-muted text-sm mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex gap-5", className)}>
      {/* Step indicator + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center text-base font-bold">
          {String(number).padStart(2, "0")}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-blue/40 to-transparent mt-2 min-h-[2rem]" />
        )}
      </div>
      {/* Content */}
      <div className="pb-8">
        <h3 className="font-bold text-dark text-lg mt-2.5">{title}</h3>
        <p className="text-muted text-sm mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
