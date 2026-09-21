import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Impact Reporting | CIRKAL OF E-WASTE",
  description: "Know what happened to your assets. We generate closure reports covering collection, disposition, data security, recycling and value recovery for every program.",
  alternates: { canonical: "/impact" },
};

const REPORT_SECTIONS = [
  { label: "Collection Details", desc: "Date, location, mode of collection and chain-of-custody initiation." },
  { label: "Asset Inventory", desc: "Complete list of registered assets — make, model, serial number, condition at collection." },
  { label: "Data Security Status", desc: "For each data-bearing asset — sanitization method applied or destruction confirmed." },
  { label: "Disposition", desc: "Where each asset went — refurbished, redeployed, sold, recycled or otherwise disposed." },
  { label: "Refurbishment Status", desc: "For assets graded for refurbishment — outcomes and final channel." },
  { label: "Recycling Status", desc: "Partner name, applicable registration details, material categories processed." },
  { label: "Value Recovered", desc: "Estimated or actual value recovered through buyback, refurbishment or resale channels." },
  { label: "Partner Details", desc: "Processing partner information — entity, location, applicable authorization." },
  { label: "Certificates", desc: "Certificate of data destruction (where applicable), processing acknowledgements." },
  { label: "Closure Confirmation", desc: "Final closure confirmation for the program — all registered assets accounted for." },
];

export default function ImpactPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Know What Happened to Your Assets.
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            Every program we run ends with a documented closure — covering every asset from collection to final disposition.
          </p>
          <Link href="/contact#assessment" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
            Plan a Program <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Closure Report"
            heading="What Our Closure Report Contains."
            subheading="The scope of documentation depends on the program — but every report covers the key disposition outcomes for each registered asset."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {REPORT_SECTIONS.map((section, i) => (
              <div key={i} className="card-base p-6 flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base mb-1">{section.label}</h3>
                  <p className="text-sm text-muted leading-relaxed">{section.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrative report preview */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading
            tag="Report Preview"
            heading="Auditable ESG & IT Asset Closure Reports."
            subheading="Every completed ITAD program generates auditable documentation for your sustainability, compliance, and governance teams."
          />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-80 sm:h-96 w-full">
                <Image
                  src="/images/esg-audit-india.jpg"
                  alt="Indian ESG compliance auditor presenting certified e-waste closure and carbon offset reports to corporate executives"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold text-brand-leaf-green uppercase tracking-wider">Audit & Boardroom Ready</div>
                  <div className="text-base font-bold mt-1">BRSR & Carbon Offset Metrics for Indian Corporates</div>
                  <p className="text-xs text-white/80 mt-1">Verified documentation adhering to SEBI BRSR and corporate ESG frameworks.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-xl bg-white">
            <div className="bg-gradient-to-r from-brand-deep-blue to-brand-blue px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">CIRKAL OF E-WASTE</p>
                  <p className="text-white font-bold text-lg mt-1">Asset Disposition Closure Report</p>
                </div>
                <span className="text-xs font-bold text-yellow-300 bg-yellow-300/10 px-3 py-1.5 rounded-full border border-yellow-300/20">
                  ILLUSTRATIVE
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Program Reference", value: "CIRKAL-XXXXXX", blur: false },
                { label: "Organization", value: "[Organization Name]", blur: false },
                { label: "Collection Date", value: "XX / XX / 20XX", blur: false },
                { label: "Total Assets Registered", value: "XXX", blur: true },
                { label: "Data Secured", value: "XXX assets", blur: true },
                { label: "Refurbished", value: "XXX assets", blur: true },
                { label: "Recycled", value: "XXX assets", blur: true },
                { label: "Estimated Value Recovered", value: "₹ XX,XXX", blur: true },
                { label: "Recycling Partner(s)", value: "[Partner Name] — [Registration]", blur: false },
                { label: "Report Status", value: "CLOSED", blur: false },
              ].map((row, i) => (
                <div key={i} className="flex items-start justify-between gap-4 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="text-sm text-muted font-medium">{row.label}</span>
                  <span className={`text-sm font-bold text-dark text-right ${row.blur ? "blur-sm select-none" : ""}`}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-light-bg border-t border-gray-100">
              <p className="text-xs text-muted text-center">
                Illustrative closure report format. Actual reports are generated from real program data.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Start a Program. Get a Closure Report."
        subheading="Every CIRKAL program ends with documentation you can use for compliance, CSR reporting and audit."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "How It Works", href: "/how-it-works" }}
        variant="blue"
      />
    </>
  );
}
