import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Awareness Programs | CIRKAL OF E-WASTE",
  description:
    "E-waste awareness programs for businesses, employees, campuses and communities. Build a culture of responsible technology — collection drives, workshops, campaigns.",
  alternates: { canonical: "/awareness" },
};

const PROGRAMS = [
  { title: "E-Waste Awareness Sessions", desc: "Structured sessions for employees covering what e-waste is, why it matters, and what responsible disposal looks like.", tag: "Employee" },
  { title: "IT Asset Lifecycle Workshops", desc: "Workshops on the full journey of a device — from procurement through refurbishment to disposal.", tag: "Corporate" },
  { title: "Data Security Before Disposal", desc: "Educating employees on the data risks associated with improperly disposed hardware.", tag: "Employee" },
  { title: "Circular Economy Awareness", desc: "Building understanding of circular economy principles and how business decisions contribute to or against them.", tag: "Corporate" },
  { title: "Responsible Recycling Drives", desc: "Organized collection events where employees bring old personal electronics for responsible channelization.", tag: "Collection" },
  { title: "Employee Collection Campaigns", desc: "Internal campaigns encouraging employees to identify and submit old devices — from home or office.", tag: "Collection" },
  { title: "Sustainability Workshops", desc: "Broader sustainability programs that include responsible technology as a component.", tag: "Corporate" },
  { title: "Campus Awareness Programs", desc: "E-waste awareness designed for educational institutions — students, faculty and staff.", tag: "Campus" },
  { title: "Corporate Sustainability Events", desc: "Awareness events aligned with CSR calendars and corporate sustainability initiatives.", tag: "Corporate" },
  { title: "International E-Waste Day Campaigns", desc: "Campaigns aligned with International E-Waste Day (October) — drives, sessions, content and impact reporting.", tag: "Event" },
];

const CAMPAIGN_EXAMPLES = [
  { title: "Bring Back Your Old Tech", desc: "A collection drive campaign encouraging employees to bring back unused personal devices for responsible disposal." },
  { title: "Know Before You Throw", desc: "An awareness campaign on the importance of knowing where your electronics go — and how to verify." },
  { title: "From Device to Resource", desc: "A storytelling campaign following the journey of a retired device through refurbishment and recovery." },
  { title: "Responsible Technology Week", desc: "A week-long corporate event combining sessions, drives, workshops and impact reporting." },
  { title: "Your Old Laptop Still Has Value", desc: "An awareness campaign specifically targeting device refresh cycles in IT companies." },
];

const TAG_COLORS: Record<string, string> = {
  Employee: "bg-brand-blue/10 text-brand-blue",
  Corporate: "bg-brand-deep-blue/10 text-brand-deep-blue",
  Collection: "bg-brand-green/10 text-brand-green",
  Campus: "bg-brand-leaf-green/10 text-brand-leaf-green",
  Event: "bg-yellow-100 text-yellow-700",
};

export default function AwarenessPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-green via-brand-leaf-green to-brand-blue text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build a Culture of Responsible Technology.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Awareness programs designed for businesses, employees, campuses and communities. Responsible disposal starts with informed people.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact#assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Plan an Awareness Campaign <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions/awareness" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Corporate Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Programs"
            heading="What Our Awareness Programs Cover."
            subheading="Tailored programs for different audiences and objectives — from one-off sessions to ongoing campaigns."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((prog) => (
              <div key={prog.title} className="card-base p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-dark text-base leading-snug">{prog.title}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${TAG_COLORS[prog.tag]}`}>
                    {prog.tag}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign builder teaser */}
      <section className="section-padding bg-very-light-green">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                tag="Campaign Builder"
                heading="Plan Your Awareness Campaign."
                subheading="Tell us about your organization, your audience and your objectives. We'll design a program that fits."
                align="left"
              />
              <div className="mt-8 space-y-3">
                {[
                  { step: "01", label: "Organization details & audience" },
                  { step: "02", label: "Topic — e-waste, data security, circular economy, etc." },
                  { step: "03", label: "Format — sessions, workshops, drives, online" },
                  { step: "04", label: "Number of participants and locations" },
                  { step: "05", label: "Date, duration and collection component" },
                  { step: "06", label: "Impact reporting requirements" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-green/10">
                    <span className="w-10 h-10 rounded-xl bg-brand-green text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <span className="text-sm font-medium text-dark">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact#assessment" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-green text-white font-semibold rounded-xl hover:bg-[#126b2e] transition-colors">
                  Plan a Campaign <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Campaign photo & examples */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-green/20 h-64 sm:h-72 w-full">
                <Image
                  src="/images/corporate-drive-india.jpg"
                  alt="Indian corporate tech park e-waste collection and handoff drive"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-brand-leaf-green">Bengaluru & Gurugram Tech Parks</div>
                  <div className="text-sm font-bold mt-0.5">Turnkey Enterprise Collection Kiosks & Drives</div>
                </div>
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Campaign Examples</h3>
              {CAMPAIGN_EXAMPLES.map((ex, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-brand-green/10 shadow-card">
                  <h4 className="font-bold text-brand-green text-base">&ldquo;{ex.title}&rdquo;</h4>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">{ex.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact dashboard preview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Impact Reporting"
            heading="Know What Your Campaign Achieved."
            subheading="Campaign participants and collected devices are tracked to generate an impact report — from participation to asset outcomes."
          />
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-brand-green to-brand-leaf-green px-6 py-4 flex items-center justify-between">
                <span className="text-white font-bold text-sm">Campaign Impact Report — Illustrative Preview</span>
                <span className="text-xs font-bold text-white/70 bg-white/10 px-3 py-1 rounded-full">DEMO</span>
              </div>
              <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Participants", value: "XXX", blur: true },
                  { label: "Assets Collected", value: "XXX", blur: true },
                  { label: "Devices Recovered", value: "XXX", blur: true },
                  { label: "Devices Refurbished", value: "XXX", blur: true },
                  { label: "Devices Recycled", value: "XXX", blur: true },
                  { label: "Est. Value Recovered", value: "₹ XX,XXX", blur: true },
                ].map((m, i) => (
                  <div key={i} className="bg-light-bg rounded-xl p-4">
                    <div className="text-2xl font-bold text-brand-green blur-sm select-none">{m.value}</div>
                    <div className="text-xs text-muted font-medium mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
              <p className="px-6 pb-5 text-center text-xs text-muted">
                Illustrative campaign dashboard. Actual metrics are generated from real campaign data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Run an Awareness Campaign?"
        subheading="From a single session to a full-year program — we'll design something that fits your organization."
        primaryCta={{ label: "Plan a Campaign", href: "/contact#assessment" }}
        secondaryCta={{ label: "Corporate Programs", href: "/solutions/corporate-programs" }}
        variant="blue"
      />
    </>
  );
}
