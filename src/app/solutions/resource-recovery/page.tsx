import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Resource Recovery | CIRKAL OF E-WASTE",
  description: "Beyond e-waste — CIRKAL's platform can evolve to support additional recyclable and recoverable material categories subject to applicable regulations and partner capabilities.",
  alternates: { canonical: "/solutions/resource-recovery" },
};

const MATERIAL_CATEGORIES = [
  { label: "E-Waste", desc: "Electronic and electrical equipment", status: "active" },
  { label: "Metals", desc: "Ferrous and non-ferrous metal scrap", status: "planned" },
  { label: "Electrical Equipment", desc: "Cables, switchgear, transformers", status: "planned" },
  { label: "IT Equipment", desc: "Computers, servers, networking", status: "active" },
  { label: "Plastic", desc: "Industrial and commercial plastic waste", status: "planned" },
  { label: "Paper & Packaging", desc: "Paper, cardboard and packaging", status: "planned" },
  { label: "Batteries", desc: "Lead-acid, lithium and other battery types", status: "planned" },
  { label: "Other Approved Streams", desc: "Subject to partner capability and applicable regulations", status: "planned" },
];

export default function ResourceRecoveryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-deep-blue to-brand-green text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">Resource Recovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Resource Recovery Beyond E-Waste.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Our platform is designed to evolve beyond IT equipment — supporting additional recoverable material categories where applicable regulations and partner capabilities are in place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border-b border-amber-200 py-5">
        <div className="container-wide">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Important:</span> We do not handle every material category automatically. Each category requires verification of applicable regulations and partner authorizations before processing. Categories marked &ldquo;Planned&rdquo; are not yet available.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Material Categories"
            heading="Recovery Streams — Current and Planned."
            subheading="Material categories we currently support or are developing capabilities for."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATERIAL_CATEGORIES.map((cat) => (
              <div key={cat.label} className={`card-base p-6 ${cat.status === "planned" ? "opacity-60" : ""}`}>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-dark text-base">{cat.label}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                    cat.status === "active"
                      ? "bg-brand-green/10 text-brand-green"
                      : "bg-gray-100 text-muted"
                  }`}>
                    {cat.status === "active" ? "Active" : "Planned"}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{cat.desc}</p>
                <p className="mt-3 text-xs text-muted font-medium border-t border-gray-100 pt-3">
                  Applicable regulations and partner authorizations verified before processing.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg">
        <div className="container-wide max-w-3xl">
          <SectionHeading tag="Our Approach" heading="Responsible Expansion of Recovery Capabilities." />
          <div className="mt-10 space-y-5">
            {[
              { title: "Regulations First", desc: "Before adding any material category, we verify applicable regulatory requirements — what permits, authorizations or registrations are needed by processors in that category." },
              { title: "Partner Verification", desc: "Processing partners for each category are verified against relevant documentation, facility and capability criteria before being connected with businesses." },
              { title: "Transparent Status", desc: "We clearly communicate which categories are active and which are planned. We don't list capability we don't have." },
              { title: "Documentation", desc: "Every category, once active, operates with the same documentation and traceability standards as our core IT equipment programs." },
            ].map((item, i) => (
              <div key={i} className="card-base p-6 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center text-base font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have Materials Outside IT Equipment?"
        subheading="Contact us to discuss your requirements — we'll let you know current capability and timelines."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "E-Waste Management", href: "/solutions/e-waste" }}
        variant="blue"
      />
    </>
  );
}
