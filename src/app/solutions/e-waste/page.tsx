import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "E-Waste Management for Businesses | CIRKAL OF E-WASTE",
  description:
    "Responsible e-waste management — structured collection, assessment, channelization and documentation for business electronics. Processed through appropriately registered partners.",
  alternates: { canonical: "/solutions/e-waste" },
};

const E_WASTE_CATEGORIES = [
  "Computers & Laptops", "Servers & Workstations", "Networking Equipment",
  "Monitors & Displays", "Printers & Scanners", "Telecom Equipment",
  "Consumer Electronics", "Electrical Equipment", "Storage Media",
  "UPS & Power Equipment", "Data Centre Equipment", "Other Electronic Equipment",
];

const DISPOSITION_PATHWAYS = [
  {
    label: "Reuse",
    color: "border-brand-blue bg-very-light-blue",
    textColor: "text-brand-blue",
    desc: "Functional equipment routed for direct reuse — internal redeployment or transfer to appropriate recipients.",
  },
  {
    label: "Refurbishment",
    color: "border-brand-bright-blue bg-blue-50",
    textColor: "text-brand-bright-blue",
    desc: "Equipment with remaining hardware life repaired, cleaned and made fit for reuse.",
  },
  {
    label: "Recovery",
    color: "border-brand-green bg-very-light-green",
    textColor: "text-brand-green",
    desc: "Equipment assessed for component or material recovery before final disposal.",
  },
  {
    label: "Recycling",
    color: "border-brand-leaf-green bg-green-50",
    textColor: "text-brand-leaf-green",
    desc: "End-of-life equipment channelized to appropriately registered recycling partners.",
  },
  {
    label: "Final Disposal",
    color: "border-gray-200 bg-gray-50",
    textColor: "text-gray-600",
    desc: "Residual material and hazardous waste routed through licensed disposal channels.",
  },
];

const PROCESS = [
  { title: "Assessment", desc: "Identify equipment type, condition, data-bearing status and applicable waste category." },
  { title: "Segregation", desc: "Separate equipment by category, condition and applicable regulatory classification." },
  { title: "Data Security", desc: "All data-bearing equipment processed for data sanitization or destruction before further handling." },
  { title: "Channelization", desc: "Route equipment to the appropriate pathway — reuse, refurbishment, recovery or recycling." },
  { title: "Partner Matching", desc: "Match equipment categories to appropriately registered processing partners." },
  { title: "Collection & Transfer", desc: "Coordinated collection and transfer with chain-of-custody documentation." },
  { title: "Documentation", desc: "Processing records from partners, closure documentation, and summary report." },
];

export default function EWastePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-deep-blue to-brand-green text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">E-Waste Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Responsible E-Waste Management for Businesses.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              From pickup to final disposition, every movement should be traceable. We help businesses manage obsolete electronics through structured collection, assessment, channelization and documentation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact#assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Start Your E-Waste Program <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory note */}
      <section className="bg-amber-50 border-b border-amber-200 py-5">
        <div className="container-wide">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Regulatory note:</span> E-Waste Management is subject to applicable laws in India (E-Waste Management Rules, 2022 and amendments). We process equipment through appropriately registered / authorized partners, where required. CIRKAL OF E-WASTE does not claim CPCB authorization for recycling unless such authorization is held. Regulatory information on this page is for general awareness and should be verified against current applicable rules.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Equipment Categories"
            heading="What Business E-Waste Includes."
            subheading="Business electronics span a wide range of equipment — each requiring appropriate assessment and channelization."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {E_WASTE_CATEGORIES.map((cat) => (
              <div key={cat} className="card-base px-4 py-3 text-sm font-medium text-dark text-center">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading
            tag="Disposition Pathways"
            heading="Not All E-Waste Should Go the Same Place."
            subheading="The appropriate destination for each piece of equipment depends on its condition, category and applicable regulatory requirements."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DISPOSITION_PATHWAYS.map((p) => (
              <div key={p.label} className={`rounded-2xl border-2 p-6 ${p.color}`}>
                <h3 className={`font-bold text-xl mb-3 ${p.textColor}`}>{p.label}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-100 text-sm text-muted text-center shadow-card">
            Processed through appropriately registered / authorized partners, where required.
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Process"
            heading="How We Manage Business E-Waste."
            subheading="From inventory classification to authorized processing facility handoff and documentation closure."
          />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              {PROCESS.map((step, i) => (
                <ProcessStep key={i} number={i + 1} title={step.title} description={step.desc} isLast={i === PROCESS.length - 1} />
              ))}
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-80 sm:h-96 lg:h-[460px] w-full">
              <Image
                src="/images/ewaste-recycling-facility-india.jpg"
                alt="Authorized electronic waste recycling and circuit board material recovery facility in India"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold text-brand-leaf-green uppercase tracking-wider">Authorized Recycler Network</div>
                <div className="text-base font-bold mt-1">Optical Sorting & Mechanical PCB Material Recovery • India</div>
                <p className="text-xs text-white/80 mt-1">Full chain-of-custody compliance under Indian E-Waste Rules 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Plan Your Business E-Waste Program."
        subheading="Tell us what equipment you have, your location and your requirement. We'll help structure a collection and disposition program."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "Responsible Recycling", href: "/solutions/responsible-recycling" }}
        variant="blue"
      />
    </>
  );
}
