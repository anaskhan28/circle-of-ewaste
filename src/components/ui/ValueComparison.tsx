"use client";

import { useState } from "react";
import { 
  AlertOctagon, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  ShieldCheck, 
  TrendingDown, 
  TrendingUp, 
  RefreshCw, 
  Cpu, 
  Recycle, 
  FileCheck2,
  Lock,
  Layers,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const ROUTING_STREAMS = [
  {
    id: "reuse",
    title: "1. Direct Reuse & Buyback",
    badge: "Highest Return",
    badgeColor: "bg-brand-blue text-white",
    icon: TrendingUp,
    highlight: "Up to 3x scrap value",
    description: "Functional enterprise laptops, desktops and servers are graded (A/B), wiped to NIST 800-88, and liquidated through authorized corporate buyback channels.",
  },
  {
    id: "refurb",
    title: "2. Precision Refurbishment",
    badge: "Life Extension",
    badgeColor: "bg-brand-bright-blue text-white",
    icon: RefreshCw,
    highlight: "Extends life by 2-3 years",
    description: "Devices with minor battery or cosmetic wear are restored with OEM components, re-certified, and channeled to educational or secondary enterprise markets.",
  },
  {
    id: "harvest",
    title: "3. Component Harvesting",
    badge: "Parts Recovery",
    badgeColor: "bg-brand-green text-white",
    icon: Cpu,
    highlight: "Recovers valuable silicon & RAM",
    description: "Damaged motherboards or casings are decommissioned, while working DDR4/DDR5 RAM, NVMe SSDs, displays, and power supplies are harvested.",
  },
  {
    id: "recycle",
    title: "4. Closed-Loop Recycling",
    badge: "Zero Landfill",
    badgeColor: "bg-brand-leaf-green text-white",
    icon: Recycle,
    highlight: "100% CPCB Channelization",
    description: "End-of-life residual material is transferred strictly to verified R2/SPCB authorized recyclers for optical sorting and precious metal refining.",
  },
];

export function ValueComparison() {
  const [activeTab, setActiveTab] = useState<"side-by-side" | "linear" | "circular">("side-by-side");
  const [selectedStream, setSelectedStream] = useState<number>(0);

  return (
    <div className="space-y-10">
      {/* Mobile / Desktop view switcher pill */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-gray-100/90 border border-gray-200/80 shadow-inner">
          <button
            onClick={() => setActiveTab("side-by-side")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
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
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
              activeTab === "circular"
                ? "bg-brand-blue text-white shadow-sm"
                : "text-muted hover:text-dark"
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Our Circular Engine
          </button>
          <button
            onClick={() => setActiveTab("linear")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
              activeTab === "linear"
                ? "bg-red-600 text-white shadow-sm"
                : "text-muted hover:text-dark"
            )}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            The Linear Trap
          </button>
        </div>
      </div>

      {/* Main comparative deck */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* LEFT: THE TRADITIONAL LINEAR TRAP */}
        {(activeTab === "side-by-side" || activeTab === "linear") && (
          <div className="relative rounded-3xl border border-red-200/80 bg-gradient-to-b from-red-50/50 via-white to-gray-50/80 p-6 sm:p-8 shadow-card flex flex-col justify-between transition-all duration-300">
            <div>
              {/* Header badge */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                  <AlertOctagon className="w-4 h-4 text-red-600" />
                  Traditional Linear Model
                </div>
                <span className="text-xs font-semibold text-red-500 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
                  Value Lost
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-dark tracking-tight">
                The Single-Path Disposal Trap
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                When retired devices are treated simply as waste, your enterprise hemorrhages recoverable capital, risks data leaks, and creates audit vulnerabilities.
              </p>

              {/* Steps timeline with friction points */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    step: "01",
                    title: "Arbitrary Scrap Write-Off",
                    desc: "Laptops, servers and monitors are grouped as bulk scrap without component diagnostics or testing.",
                    icon: TrendingDown,
                    warning: "70% to 85% residual capital lost",
                  },
                  {
                    step: "02",
                    title: "Unsecured Chain of Custody",
                    desc: "Media leaves facilities without serial-level cryptographic wipes or tamper-evident seals.",
                    icon: ShieldAlert,
                    warning: "India DPDP Act & audit violation risks",
                  },
                  {
                    step: "03",
                    title: "Weight-Based Broker Liquidation",
                    desc: "Assets sold for raw kilograms (₹/Kg) to scrap intermediaries rather than hardware markets.",
                    icon: Layers,
                    warning: "Minimal recovery price",
                  },
                  {
                    step: "04",
                    title: "Compliance Blind Spot",
                    desc: "No formal CPCB recycling manifest, unverified downstream handoffs, and zero ESG impact records.",
                    icon: Lock,
                    warning: "No auditable closure report",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-red-100/90 shadow-sm flex items-start gap-3.5 hover:border-red-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-dark text-sm sm:text-base">
                          {item.step}. {item.title}
                        </h4>
                        <span className="text-[10px] sm:text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 whitespace-nowrap">
                          {item.warning}
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary pill */}
            <div className="mt-8 pt-6 border-t border-red-100">
              <div className="p-4 rounded-2xl bg-red-100/60 border border-red-200/60 flex items-center justify-between gap-3 text-red-900">
                <div className="text-xs sm:text-sm font-bold">
                  Linear Outcome: -85% Capital Lost • Data Exposure Risk
                </div>
                <span className="text-xl font-extrabold text-red-600">✕</span>
              </div>
            </div>
          </div>
        )}

        {/* RIGHT: THE CIRKAL CIRCULAR VALUE ENGINE */}
        {(activeTab === "side-by-side" || activeTab === "circular") && (
          <div className="relative rounded-3xl border-2 border-brand-blue/30 bg-gradient-to-b from-white via-very-light-blue/50 to-very-light-green/40 p-6 sm:p-8 shadow-xl flex flex-col justify-between transition-all duration-300">
            {/* Ambient glow accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-leaf-green/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header badge */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/15 text-brand-green text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  Our Circular Recovery Engine
                </div>
                <span className="text-xs font-bold text-brand-blue bg-white px-2.5 py-1 rounded-lg border border-brand-blue/20 shadow-xs">
                  Value Multiplier
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-dark tracking-tight">
                Structured Multi-Stream Value Recovery
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We evaluate each asset against a multi-tier recovery hierarchy — extracting functional value, component reuse, and certified recycling.
              </p>

              {/* Interactive 4-stream breakdown cards */}
              <div className="mt-8 space-y-3">
                {ROUTING_STREAMS.map((stream, idx) => {
                  const Icon = stream.icon;
                  const isSelected = selectedStream === idx;
                  return (
                    <div
                      key={stream.id}
                      onClick={() => setSelectedStream(idx)}
                      className={cn(
                        "p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative",
                        isSelected
                          ? "bg-white border-brand-blue shadow-md ring-1 ring-brand-blue/20"
                          : "bg-white/80 border-gray-100 hover:border-brand-blue/40 hover:bg-white shadow-xs"
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors",
                              isSelected
                                ? "bg-brand-blue text-white"
                                : "bg-very-light-blue text-brand-blue"
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-dark text-sm sm:text-base">
                            {stream.title}
                          </span>
                        </div>
                        <span
                          className={cn(
                            "text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full",
                            stream.badgeColor
                          )}
                        >
                          {stream.badge}
                        </span>
                      </div>

                      <p className="text-xs text-muted mt-2 pl-10 leading-relaxed">
                        {stream.description}
                      </p>

                      <div className="mt-2 pl-10 flex items-center gap-2 text-[11px] font-bold text-brand-green">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{stream.highlight}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom summary pill */}
            <div className="mt-8 pt-6 border-t border-brand-blue/10">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-green text-white flex items-center justify-between gap-3 shadow-md">
                <div>
                  <div className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    The Result for Your Enterprise
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                    Up to 3x More Capital Recovered • 100% Data & ESG Compliance
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Verification & Compliance banner */}
      <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-dark">
          <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-brand-green" />
          </div>
          <div>
            <div className="text-sm font-bold text-dark">
              Verifiable Chain of Custody &amp; Data Security at Every Step
            </div>
            <div className="text-xs text-muted mt-0.5">
              Every asset is audited, wiped with tamper-proof certificates, and documented for your ESG &amp; SEBI BRSR reports.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-very-light-blue text-brand-blue border border-brand-blue/20">
            NIST 800-88 Wiped
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-very-light-green text-brand-green border border-brand-green/20">
            CPCB Channelized
          </span>
        </div>
      </div>
    </div>
  );
}
