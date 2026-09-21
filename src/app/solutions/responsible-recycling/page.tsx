import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Responsible Recycling | CIRKAL OF E-WASTE",
  description:
    "Know where your e-waste goes. We provide verified partner matching, traceable channelization and documentation — so businesses can be confident about their recycling outcomes.",
  alternates: { canonical: "/solutions/responsible-recycling" },
};

const VERIFICATION_FIELDS = [
  "Legal entity details",
  "GST registration",
  "PAN",
  "Facility address and type",
  "Applicable CPCB / SPCB registration",
  "Applicable authorization / consent to operate",
  "Waste categories handled",
  "Processing capability",
  "Facility capacity",
  "Authorization validity dates",
  "Documentation history",
  "Site verification",
];

const CIRKAL_FLOW = [
  { label: "Business", color: "bg-brand-blue" },
  { label: "Initial Assessment", color: "bg-brand-deep-blue" },
  { label: "Partner Matching", color: "bg-brand-bright-blue" },
  { label: "Collection", color: "bg-brand-green" },
  { label: "Tracking", color: "bg-brand-green" },
  { label: "Processing", color: "bg-brand-green" },
  { label: "Documentation", color: "bg-brand-leaf-green" },
  { label: "Closure Report", color: "bg-brand-leaf-green" },
];

export default function ResponsibleRecyclingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-green via-[#0d5e2a] to-brand-deep-blue text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">Responsible Recycling</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Recycle Responsibly. Know Where It Goes.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Businesses often don&apos;t know who receives their material, whether the recycler is legitimate, or where it finally goes. We address this through structured partner matching, traceability and documentation.
            </p>
            <Link href="/contact#assessment" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Find Verified Partners <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                tag="The Challenge"
                heading="Most Businesses Don't Know What Happens After Collection."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  "Who actually receives the material?",
                  "Is the recycler legally registered for this waste category?",
                  "Is there any documentation of what was processed?",
                  "Where does the material finally go?",
                  "What happens to the data on devices?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                    <span className="text-red-400 font-bold text-lg leading-none mt-0.5">?</span>
                    <span className="text-sm text-dark font-medium">{q}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-72 w-full">
                <Image
                  src="/images/ewaste-recycling-facility-india.jpg"
                  alt="Verified electronic waste recycling and material recovery facility in India"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-brand-leaf-green">Verified Processing Facility</div>
                  <div className="text-sm font-bold mt-0.5">Physical Site Audits & CPCB / SPCB Registration Check</div>
                </div>
              </div>
              <div className="bg-very-light-green rounded-3xl p-8">
                <h3 className="font-bold text-dark text-xl mb-6">How We Answer These Questions.</h3>
              {CIRKAL_FLOW.map((step, i, arr) => (
                <div key={i} className="flex flex-col items-start">
                  <div className={`${step.color} text-white text-sm font-semibold px-4 py-2.5 rounded-xl w-full`}>
                    {step.label}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="ml-5 w-0.5 h-4 bg-brand-green/30" />
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification framework */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading
            tag="Partner Verification"
            heading="What We Check Before Calling a Partner Verified."
            subheading="Partner verification is a real internal process — not a badge applied automatically. These are the criteria we evaluate."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VERIFICATION_FIELDS.map((field, i) => (
              <div key={i} className="card-base px-5 py-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-dark">{field}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p className="text-sm text-amber-900">
              <span className="font-bold">Important:</span> A &ldquo;Verified&rdquo; designation is only applied when we have actually completed verification against defined criteria for a specific partner. Partners without completed verification are not represented as verified. Verification does not constitute a guarantee of regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Badge levels */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Verification Levels"
            heading="A Tiered Partner Verification System."
            subheading="As we build our partner network, partner verification will operate across defined tiers. Badges are only activated when backend verification is complete."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                level: "Document Verified",
                desc: "Legal entity, GST, PAN and applicable registration documents reviewed and on file.",
                color: "border-brand-blue/20 bg-very-light-blue",
                badge: "bg-brand-blue text-white",
                note: "Initial tier — documentation reviewed",
              },
              {
                level: "Facility Verified",
                desc: "Document verification complete, facility address confirmed and site details reviewed.",
                color: "border-brand-green/20 bg-very-light-green",
                badge: "bg-brand-green text-white",
                note: "Extended verification — site reviewed",
              },
              {
                level: "Partner Verified",
                desc: "Full verification completed — documentation, facility, capability, active authorization and periodic re-verification.",
                color: "border-brand-leaf-green/30 bg-green-50",
                badge: "bg-brand-leaf-green text-white",
                note: "Complete verification — ongoing",
              },
            ].map((tier) => (
              <div key={tier.level} className={`rounded-2xl border-2 p-7 ${tier.color}`}>
                <span className={`inline-block px-3 py-1.5 rounded-lg text-sm font-bold mb-4 ${tier.badge}`}>
                  {tier.level}
                </span>
                <p className="text-sm text-dark leading-relaxed">{tier.desc}</p>
                <p className="mt-3 text-xs text-muted font-medium">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Know Where Your Material Goes."
        subheading="Request a recycling program and we'll match your material categories to appropriate, verified processing partners."
        primaryCta={{ label: "Request a Recycling Program", href: "/contact#assessment" }}
        secondaryCta={{ label: "Explore the Network", href: "/network" }}
        variant="blue"
      />
    </>
  );
}
