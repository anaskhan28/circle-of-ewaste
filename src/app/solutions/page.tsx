import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, RefreshCw, Recycle, BarChart3, Building2, Globe, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Solutions | CIRKAL OF E-WASTE",
  description: "IT Asset Disposition, Asset Recovery, Refurbishment, E-Waste Management, Responsible Recycling, Corporate Programs and Awareness Campaigns for businesses.",
  alternates: { canonical: "/solutions" },
};

const SOLUTIONS = [
  { icon: TrendingUp, title: "IT Asset Disposition (ITAD)", desc: "End-to-end ITAD — asset inventory, data security, value recovery, refurbishment assessment, responsible recycling and closure reporting.", href: "/solutions/itad", tag: "Core Service" },
  { icon: BarChart3, title: "Asset Recovery", desc: "Identify and recover value from retiring equipment — working devices for reuse, refurbishable assets for refurbishment, and structured recovery for the rest.", href: "/solutions/asset-recovery", tag: "Value Recovery" },
  { icon: RefreshCw, title: "Refurbishment", desc: "Extend the life of retiring technology. Assessment, grading, repair and refurbishment — with reuse or resale as the outcome.", href: "/solutions/refurbishment", tag: "Sustainability" },
  { icon: Globe, title: "E-Waste Management", desc: "Structured collection, assessment, channelization and documentation for business electronics — from computers to telecom equipment.", href: "/solutions/e-waste", tag: "Core Service" },
  { icon: Recycle, title: "Responsible Recycling", desc: "Partner matching and traceable recycling — so businesses know who received their material and what happened to it.", href: "/solutions/responsible-recycling", tag: "Environmental" },
  { icon: Globe, title: "Resource Recovery", desc: "Recovery capabilities beyond IT equipment — for additional material categories where regulations and partner capability are in place.", href: "/solutions/resource-recovery", tag: "Expanding" },
  { icon: Building2, title: "Corporate Programs", desc: "Multi-site programs for enterprises, banks and large organizations — covering collection, IT disposal, data security and consolidated reporting.", href: "/solutions/corporate-programs", tag: "Enterprise" },
  { icon: Users, title: "Awareness Programs", desc: "E-waste awareness sessions, collection drives, sustainability workshops and campaign management for employees and campuses.", href: "/solutions/awareness", tag: "Awareness" },
  { icon: Shield, title: "Data Security", desc: "Data sanitization and destruction for data-bearing IT equipment — before any asset is released from controlled custody.", href: "/solutions/itad#data-security", tag: "Security" },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A Complete Set of Solutions for Business Asset Recovery.
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            From IT asset disposition and data security to awareness campaigns and verified recycling — structured programs for every stage of the asset lifecycle.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol) => (
              <Link key={sol.href} href={sol.href} className="card-base p-7 flex flex-col gap-4 group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-very-light-blue flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                    <sol.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="px-2.5 py-1 bg-very-light-blue text-brand-blue text-xs font-semibold rounded-full">{sol.tag}</span>
                </div>
                <div>
                  <h2 className="font-bold text-dark text-xl group-hover:text-brand-blue transition-colors">{sol.title}</h2>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{sol.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1.5 text-brand-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not Sure Which Solution Fits?"
        subheading="Tell us what you have and we'll recommend the right approach."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "How It Works", href: "/how-it-works" }}
        variant="blue"
      />
    </>
  );
}
