"use client";

import { useState } from "react";
import {
  AlertOctagon,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  RefreshCw,
  Cpu,
  Recycle,
  ShieldAlert,
  ShieldCheck,
  Scale,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const LINEAR_POINTS = [
  {
    icon: TrendingDown,
    title: "Arbitrary Scrap Valuation",
    detail: "Sold as bulk scrap without testing — losing 70–85% residual value.",
  },
  {
    icon: ShieldAlert,
    title: "Data & Security Exposure",
    detail: "Untracked chain-of-custody without certified NIST 800-88 data wipe.",
  },
  {
    icon: Scale,
    title: "Weight-Based Brokerage",
    detail: "Liquidated per kilogram (₹/kg) rather than true functional hardware value.",
  },
  {
    icon: AlertOctagon,
    title: "Compliance Blind Spots",
    detail: "Zero audit manifests, missing CPCB records, and regulatory penalty risks.",
  },
];

const CIRCULAR_STREAMS = [
  {
    icon: TrendingUp,
    badge: "Max ROI",
    badgeColor: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    title: "Direct Reuse & Buyback",
    detail: "Functional laptops and servers graded and bought back at up to 3x scrap value.",
  },
  {
    icon: RefreshCw,
    badge: "Life Extension",
    badgeColor: "bg-brand-bright-blue/10 text-brand-bright-blue border-brand-bright-blue/20",
    title: "Precision Refurbishment",
    detail: "Minor-wear hardware restored with OEM parts, extending useful life by 2–3 years.",
  },
  {
    icon: Cpu,
    badge: "Part Harvest",
    badgeColor: "bg-brand-green/10 text-brand-green border-brand-green/20",
    title: "Parts & Silicon Recovery",
    detail: "High-value RAM, NVMe SSDs, displays, and PSUs harvested for reuse.",
  },
  {
    icon: Recycle,
    badge: "Zero Landfill",
    badgeColor: "bg-brand-leaf-green/10 text-brand-leaf-green border-brand-leaf-green/20",
    title: "CPCB Closed-Loop Recycling",
    detail: "Only true end-of-life residual is sent to authorized recyclers for metal extraction.",
  },
];

export function ValueComparison() {
  const [activeTab, setActiveTab] = useState<"side-by-side" | "linear" | "circular">("side-by-side");

  return (
    <div className="space-y-8">
      {/* Mobile view switcher pill */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-gray-100 border border-gray-200">
          <button
            onClick={() => setActiveTab("side-by-side")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
              activeTab === "side-by-side"
                ? "bg-white text-dark shadow-sm"
                : "text-muted hover:text-dark"
            )}
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            Comparison View
          </button>
          <button
            onClick={() => setActiveTab("circular")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
              activeTab === "circular"
                ? "bg-brand-blue text-white shadow-sm"
                : "text-muted hover:text-dark"
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Our Circular Model
          </button>
          <button
            onClick={() => setActiveTab("linear")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
              activeTab === "linear"
                ? "bg-red-600 text-white shadow-sm"
                : "text-muted hover:text-dark"
            )}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            Traditional Model
          </button>
        </div>
      </div>

      {/* Main comparative cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* LEFT: TRADITIONAL LINEAR MODEL */}
        {(activeTab === "side-by-side" || activeTab === "linear") && (
          <div className="rounded-3xl border border-red-200/90 bg-gradient-to-b from-red-50/40 via-white to-gray-50/50 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                  <AlertOctagon className="w-3.5 h-3.5 text-red-600" />
                  Traditional Linear Disposal
                </span>
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">
                  Value Lost
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-dark">
                The Single-Path Scrap Trap
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Treating IT assets purely as waste destroys capital and introduces serious audit vulnerabilities.
              </p>

              <div className="mt-6 space-y-3">
                {LINEAR_POINTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white border border-red-100/90 shadow-xs flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-dark">{item.title}</h4>
                        <p className="text-xs text-muted mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-100">
              <div className="py-2.5 px-4 rounded-xl bg-red-100/70 text-red-900 flex items-center justify-between text-xs font-bold">
                <span>Result: Up to ~85% Capital Lost • Data Exposure</span>
                <span className="text-base text-red-600">✕</span>
              </div>
            </div>
          </div>
        )}

        {/* RIGHT: OUR CIRCULAR ENGINE */}
        {(activeTab === "side-by-side" || activeTab === "circular") && (
          <div className="rounded-3xl border-2 border-brand-blue/30 bg-gradient-to-b from-white via-very-light-blue/40 to-very-light-green/30 p-6 sm:p-7 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                  Our Recovery Engine
                </span>
                <span className="text-xs font-bold text-brand-blue bg-white px-2.5 py-0.5 rounded-md border border-brand-blue/20">
                  Value Multiplier
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-dark">
                Multi-Tier Value Recovery
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                We test and grade every asset across four value streams before considering recycling.
              </p>

              <div className="mt-6 space-y-3">
                {CIRCULAR_STREAMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white border border-brand-blue/15 shadow-xs flex items-start gap-3 hover:border-brand-blue/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-very-light-blue text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-dark">{item.title}</h4>
                          <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", item.badgeColor)}>
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-muted mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-blue/10">
              <div className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-white flex items-center justify-between text-xs font-bold shadow-xs">
                <span>Result: Up to 3x Return • 100% Data & ESG Compliance</span>
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom quick assurance bar */}
      <div className="rounded-2xl p-4 bg-white border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-dark font-medium">
          <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />
          <span>Verifiable NIST 800-88 data sanitization, serialized custody logs &amp; CPCB compliance certificates.</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 text-[11px] font-semibold">
          <span className="px-2.5 py-1 rounded-md bg-very-light-blue text-brand-blue border border-brand-blue/20">
            NIST 800-88
          </span>
          <span className="px-2.5 py-1 rounded-md bg-very-light-green text-brand-green border border-brand-green/20">
            CPCB Compliant
          </span>
        </div>
      </div>
    </div>
  );
}
