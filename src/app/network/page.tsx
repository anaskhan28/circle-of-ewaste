import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Recycling Network | CIRKAL OF E-WASTE",
  description:
    "A trusted network for responsible asset recovery. Connect your business with verified recyclers, refurbishers and recovery partners based on material, capability and location.",
  alternates: { canonical: "/network" },
};

export default function NetworkPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A Trusted Network for Responsible Asset Recovery.
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            Connect your business with verified recyclers, refurbishers and recovery partners — matched by material type, capability and location.
          </p>
          <Link href="/contact#assessment" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
            Post a Requirement <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* How matching works */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="How It Works"
            heading="From Requirement to Verified Partner."
            subheading="We match your material and requirements to processing partners that meet defined verification criteria."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: "01", label: "Post Requirement", desc: "Share material type, quantity, location, condition and requirements." },
              { step: "02", label: "Partner Matching", desc: "We identify partners with appropriate capability and verification status." },
              { step: "03", label: "Review & Compare", desc: "Review partner profiles, capabilities and service areas before proceeding." },
              { step: "04", label: "Coordinate & Close", desc: "Coordinate collection, processing and receive documentation at closure." },
            ].map((s, i, arr) => (
              <div key={i} className="relative flex flex-col items-center text-center px-4">
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
                )}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {s.step}
                </div>
                <h3 className="font-bold text-dark mt-4 text-base">{s.label}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample requirement form (illustrative) */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionHeading
                tag="Post a Requirement"
                heading="Tell Us What You Have."
                align="left"
              />
              <div className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-card p-8 space-y-5">
                {[
                  { label: "Material Category", value: "IT Equipment" },
                  { label: "Quantity", value: "~250 devices" },
                  { label: "Location", value: "Mumbai, Maharashtra" },
                  { label: "Condition", value: "Mixed — working and non-working" },
                  { label: "Requirement", value: "Buyback + Data destruction + Recycling" },
                ].map((f) => (
                  <div key={f.label} className="flex flex-col gap-1 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-xs text-muted uppercase tracking-wider font-semibold">{f.label}</span>
                    <span className="text-base font-semibold text-dark">{f.value}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="bg-very-light-blue rounded-xl px-5 py-3 text-sm font-semibold text-brand-blue border border-brand-blue/10">
                    This is an illustrative example. Submit a real requirement through the assessment form.
                  </div>
                </div>
              </div>
            </div>

            {/* Matched partners preview */}
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">Matched Partners — Illustrative Preview</h3>
              <div className="space-y-4">
                {[
                  { name: "Partner A", loc: "Navi Mumbai, MH", cap: "IT Equipment Recycling, Data Destruction", status: "Document Verified", service: "Mumbai, Pune, Thane" },
                  { name: "Partner B", loc: "Andheri, Mumbai", cap: "Refurbishment, Buyback, IT Equipment", status: "Document Verified", service: "Mumbai Metropolitan" },
                  { name: "Partner C", loc: "Bhiwandi, MH", cap: "E-Waste Recycling, Data Destruction", status: "Under Verification", service: "Mumbai, Nashik" },
                ].map((p, i) => (
                  <div key={i} className="card-base p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="font-bold text-dark">{p.name}</span>
                        <span className="text-xs text-muted ml-2">{p.loc}</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                        p.status === "Document Verified"
                          ? "bg-brand-green/10 text-brand-green"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="text-xs text-muted space-y-1">
                      <div><span className="font-semibold text-dark">Capabilities:</span> {p.cap}</div>
                      <div><span className="font-semibold text-dark">Service Area:</span> {p.service}</div>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted text-center">
                  Illustrative partner listing. Does not represent real CIRKAL OF E-WASTE partners. Verification status shown is for demo only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner criteria */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Partner Standards"
            heading="Who Gets Listed in Our Network."
            subheading="The network is not open. Partners are evaluated against defined criteria before being listed or matched."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Legal Entity", desc: "Registered business entity with verifiable documentation." },
              { title: "GST & PAN", desc: "Active GST registration and PAN on file." },
              { title: "Facility", desc: "Physical processing facility with verifiable address." },
              { title: "Regulatory Registration", desc: "Applicable CPCB / SPCB registration or consent to operate, where required." },
              { title: "Capability Match", desc: "Processing capability and capacity consistent with waste categories handled." },
              { title: "Documentation History", desc: "Ability to provide processing documentation as part of closure." },
            ].map((c) => (
              <div key={c.title} className="card-base p-6">
                <div className="w-6 h-1 rounded-full bg-brand-blue mb-3" />
                <h3 className="font-bold text-dark text-base mb-2">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted max-w-2xl mx-auto">
            Listing in the CIRKAL OF E-WASTE network does not constitute an endorsement of regulatory compliance. Verification is carried out to defined criteria and does not replace due diligence by all parties.
          </p>
        </div>
      </section>

      <CTASection
        heading="Join the Network or Post a Requirement."
        subheading="Whether you're a business with material to route or a recycler looking to connect with verified programs — start here."
        primaryCta={{ label: "Post a Requirement", href: "/contact#assessment" }}
        secondaryCta={{ label: "Partner Enquiry", href: "/contact" }}
        variant="blue"
      />
    </>
  );
}
