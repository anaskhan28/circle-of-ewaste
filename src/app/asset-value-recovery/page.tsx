import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DecisionTree } from "@/components/ui/DecisionTree";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Asset Value Recovery | CIRKAL OF E-WASTE",
  description:
    "Your retired assets may still have value. We identify the recovery hierarchy — reuse, refurbishment, resale, parts recovery, material recovery, recycling.",
  alternates: { canonical: "/asset-value-recovery" },
};

const HIERARCHY = [
  {
    rank: 1,
    label: "Reuse",
    color: "bg-brand-blue text-white",
    desc: "Highest value. Working equipment redeployed internally or transferred — no processing required.",
  },
  {
    rank: 2,
    label: "Redeployment",
    color: "bg-brand-deep-blue text-white",
    desc: "Working equipment assigned to another user, team or location within the organization.",
  },
  {
    rank: 3,
    label: "Refurbishment",
    color: "bg-brand-bright-blue text-white",
    desc: "Devices repaired, cleaned and upgraded — then redeployed or sold as refurbished.",
  },
  {
    rank: 4,
    label: "Resale",
    color: "bg-brand-green text-white",
    desc: "Working or refurbished devices sold through appropriate channels.",
  },
  {
    rank: 5,
    label: "Parts Recovery",
    color: "bg-brand-leaf-green text-white",
    desc: "Non-refurbishable units assessed for component-level recovery.",
  },
  {
    rank: 6,
    label: "Material Recovery",
    color: "bg-yellow-500 text-white",
    desc: "Material value recovered through appropriate processing — metals, plastics and other recoverable materials.",
  },
  {
    rank: 7,
    label: "Responsible Recycling",
    color: "bg-gray-400 text-white",
    desc: "Final resort for end-of-life equipment with no remaining functional or component value.",
  },
];

export default function AssetValueRecoveryPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Retired Assets May Still Have Value.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Before treating every retired asset as waste, we evaluate each one for its best-possible next step — working through a structured recovery hierarchy.
            </p>
            <Link href="/contact#assessment" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Assess My Assets <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recovery hierarchy */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Recovery Hierarchy"
            heading="One Asset. Multiple Possible Futures."
            subheading="Recovery value decreases as you move down the hierarchy. The goal is to keep each asset at the highest possible level."
          />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="flex flex-col gap-3">
              {HIERARCHY.map((item, i) => (
                <div key={i} className="flex items-stretch gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${item.color}`}>
                      {item.rank}
                    </div>
                    {i < HIERARCHY.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-blue/30 to-transparent mt-1 min-h-[1.5rem]" />
                    )}
                  </div>
                  <div className="pb-3">
                    <h3 className="font-bold text-dark text-base">{item.label}</h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-light-bg rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">Recovery Value</h3>
                </div>
                <div className="space-y-2">
                  {HIERARCHY.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-28 text-xs font-semibold text-dark flex-shrink-0">{item.label}</span>
                      <div className="flex-1 h-7 rounded-lg bg-gray-100 overflow-hidden">
                        <div
                          className={item.color.split(" ")[0] + " h-full rounded-lg transition-all"}
                          style={{ width: `${Math.max(15, 100 - i * 13)}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted w-8 text-right">{Math.max(15, 100 - i * 13)}%</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted">Indicative value recovery potential — relative, not absolute. Actual recovery depends on asset type, age and market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision tree */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading
            tag="Decision Framework"
            heading="How We Route Each Asset."
            subheading="A simple decision tree drives the routing of every asset through the recovery process."
          />
          <div className="mt-14">
            <DecisionTree />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            This framework is applied asset by asset — not batch by batch. Outcome depends on actual condition assessment.
          </p>
        </div>
      </section>

      <CTASection
        heading="Find Out What Your Assets Are Worth."
        subheading="Submit an asset list and we'll identify the recovery potential for each category."
        primaryCta={{ label: "Request an Asset Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "ITAD Services", href: "/solutions/itad" }}
        variant="blue"
      />
    </>
  );
}
