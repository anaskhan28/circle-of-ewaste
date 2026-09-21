import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Corporate Waste Programs | CIRKAL OF E-WASTE",
  description:
    "Multi-site, multi-branch asset recovery and e-waste programs for enterprises, banks, IT companies and large organizations.",
  alternates: { canonical: "/solutions/corporate-programs" },
};

const INDUSTRIES_SERVED = [
  "Banks & Financial Institutions", "IT & ITES Companies", "Corporate Offices",
  "Manufacturing Companies", "Retail Organizations", "Educational Institutions",
  "Hospitals & Healthcare", "Hotels & Hospitality", "Government Organizations",
  "SMEs", "Multi-Location Enterprises", "Data Centres",
];

const PROGRAM_FEATURES = [
  { title: "Asset Surveys", desc: "Pre-program surveys to identify all equipment categories, quantities and locations." },
  { title: "Branch / Site Collection", desc: "Coordinated pickup across multiple offices, branches or manufacturing sites." },
  { title: "IT Asset Disposal", desc: "Structured ITAD for technology equipment — with data security and value recovery." },
  { title: "Office Electronics Disposal", desc: "Printers, UPS, telecom equipment, consumer electronics and mixed office e-waste." },
  { title: "Asset Recovery", desc: "Working and refurbishable equipment separated, assessed and routed for recovery." },
  { title: "Reverse Logistics", desc: "Centralized collection logistics across geographies — managed as a single program." },
  { title: "Centralized Reporting", desc: "Consolidated closure report across all locations — one report, all sites." },
  { title: "Multi-Location Coordination", desc: "Program coordination across regions with consistent process and documentation." },
];

const BANKING_FEATURES = [
  "Branch-wise asset inventory",
  "Scheduled branch pickups",
  "Serial-number level tracking",
  "Regional consolidation",
  "Data destruction for all data-bearing equipment",
  "Asset valuation and recovery",
  "Disposal and recycling coordination",
  "Branch-wise and consolidated closure report",
];

export default function CorporateProgramsPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">Corporate Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Asset Recovery Programs for Large Organizations.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Enterprise and multi-branch organizations have unique asset management challenges — multiple sites, complex logistics, audit requirements and large equipment volumes. Our programs are designed for this scale.
            </p>
            <Link href="/contact#assessment" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Plan a Corporate Program <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading tag="Who It's For" heading="Built for Organizations at Scale." />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {INDUSTRIES_SERVED.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-full border border-gray-200 bg-light-bg text-sm font-medium text-dark">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Program features */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading tag="Program Features" heading="What a Corporate Program Includes." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROGRAM_FEATURES.map((f) => (
              <div key={f.title} className="card-base p-6">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green mb-4" />
                <h3 className="font-bold text-dark text-base mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking focus */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                tag="Banking & Financial Services"
                heading="Multi-Branch Asset Recovery Programs."
                subheading="Banks and financial institutions have specific requirements — sensitive data, multiple locations, asset registers, audit trails and regulatory considerations."
                align="left"
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BANKING_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-very-light-blue rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-dark">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-72 w-full">
                <Image
                  src="/images/corporate-logistics-india.jpg"
                  alt="Secure enterprise IT asset collection and barcode scanning at Gurugram Cyber City tech park"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-brand-leaf-green">Multi-City Enterprise Transit</div>
                  <div className="text-sm font-bold mt-0.5">Sealed Flight Cases & Tamper-Evident Chain of Custody</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-deep-blue to-brand-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Sample Program — Multi-Branch Bank</h3>
              <div className="space-y-4">
                {[
                  { label: "Requirement", value: "IT asset disposal — 200+ branches" },
                  { label: "Equipment", value: "Laptops, desktops, printers, networking gear" },
                  { label: "Data Requirement", value: "Data destruction for all data-bearing equipment" },
                  { label: "Recovery", value: "Working equipment assessed for buyback / recovery" },
                  { label: "Documentation", value: "Branch-wise + consolidated closure report" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-xs text-white/50 uppercase tracking-wider block">{item.label}</span>
                    <span className="text-sm text-white font-medium mt-0.5">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/40">Illustrative program description. Actual program scope defined based on client requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's Plan Your Program."
        subheading="Share your organization type, number of locations, asset categories and approximate volume. We'll outline a program structure."
        primaryCta={{ label: "Plan a Corporate Program", href: "/contact#assessment" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
