import { cn } from "@/lib/utils";

interface DashboardPreviewProps {
  className?: string;
}

const ILLUSTRATIVE_METRICS = [
  { value: "1,248", label: "Total Assets Logged", color: "text-brand-blue" },
  { value: "₹ XX,XX,XXX", label: "Est. Recoverable Value", color: "text-brand-green", masked: true },
  { value: "384", label: "Refurbishment Pipeline", color: "text-brand-blue" },
  { value: "612", label: "Recycling Processed", color: "text-brand-green" },
  { value: "252", label: "Data Secured", color: "text-dark" },
  { value: "98%", label: "Documentation Complete", color: "text-dark", masked: true },
];

const ASSET_STATUS_BARS = [
  { label: "Assessed", pct: 88, color: "bg-brand-blue" },
  { label: "Data Secured", pct: 76, color: "bg-brand-deep-blue" },
  { label: "Refurbished", pct: 31, color: "bg-brand-green" },
  { label: "Recycled", pct: 49, color: "bg-brand-leaf-green" },
];

export function DashboardPreview({ className }: DashboardPreviewProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-white",
        className
      )}
      aria-label="Illustrative platform dashboard preview"
    >
      {/* Header bar */}
      <div className="bg-gradient-to-r from-brand-deep-blue to-brand-blue px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex gap-1 sm:gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/60" />
          </div>
          <span className="text-white/80 text-[11px] sm:text-xs font-medium truncate">
            CIRKAL OF E-WASTE Platform — Asset Overview
          </span>
        </div>
        <span className="text-[10px] sm:text-xs font-bold text-yellow-300 bg-yellow-300/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-yellow-300/20 whitespace-nowrap flex-shrink-0">
          ILLUSTRATIVE PREVIEW
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Metric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
          {ILLUSTRATIVE_METRICS.map((m, i) => (
            <div
              key={i}
              className="bg-light-bg rounded-xl p-3 sm:p-4 flex flex-col gap-1"
            >
              <span className={cn("text-lg sm:text-2xl font-bold tracking-tight truncate", m.color)}>
                {m.masked ? <span className="blur-[4px] select-none">{m.value}</span> : m.value}
              </span>
              <span className="text-[11px] sm:text-xs text-muted font-medium line-clamp-2">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Asset status bars */}
        <div className="bg-light-bg rounded-xl p-4 sm:p-5 space-y-3">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider">
            Asset Disposition Status
          </p>
          {ASSET_STATUS_BARS.map((bar, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-dark font-medium">{bar.label}</span>
                <span className="text-muted">{bar.pct}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={cn("h-full rounded-full", bar.color)}
                  style={{ width: `${bar.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[10px] text-muted/60 font-medium">
          Illustrative dashboard. Actual data from your account. Metrics marked with ✱ are blurred in preview.
        </p>
      </div>
    </div>
  );
}
