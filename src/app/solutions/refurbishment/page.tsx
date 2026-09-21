import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradeCard } from "@/components/ui/GradeCard";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "IT Equipment Refurbishment | CIRKAL OF E-WASTE",
  description:
    "Not every retired device is waste. We assess, grade, repair and facilitate redeployment or resale of devices that still have remaining life.",
  alternates: { canonical: "/solutions/refurbishment" },
};

const GRADES = [
  {
    grade: "A" as const,
    title: "Grade A — Excellent",
    description: "Fully functional, minimal cosmetic wear",
    characteristics: [
      "Powers on and operates without issues",
      "All components functional",
      "Minor or no cosmetic defects",
      "Original specifications intact",
    ],
    outcome: "Redeployment or resale as refurbished unit",
  },
  {
    grade: "B" as const,
    title: "Grade B — Good",
    description: "Functional with visible cosmetic wear",
    characteristics: [
      "Functional but may have cosmetic damage",
      "Minor component issues addressed during refurbishment",
      "Suitable for refurbishment and resale",
      "May require cleaning, battery or minor repair",
    ],
    outcome: "Refurbish → clean, repair, test → resale",
  },
  {
    grade: "C" as const,
    title: "Grade C — Fair",
    description: "Partially functional or significant wear",
    characteristics: [
      "Not fully functional in current state",
      "Significant cosmetic damage or missing parts",
      "May require component replacement",
      "Refurbishment viability assessed case by case",
    ],
    outcome: "Assess for repair feasibility → refurbish or recovery",
  },
  {
    grade: "PARTS" as const,
    title: "Parts / Recovery",
    description: "End-of-life — component recovery",
    characteristics: [
      "Non-functional and not economically refurbishable",
      "Usable components or materials may remain",
      "Assessed for component-level recovery",
      "Balance routed to responsible recycling",
    ],
    outcome: "Component recovery → responsible recycling of remainder",
  },
];

const WORKFLOW = [
  { title: "Collection", desc: "Devices collected from client premises with chain-of-custody documentation." },
  { title: "Testing", desc: "Each device powered on and tested — display, battery, ports, storage, peripherals." },
  { title: "Grading", desc: "Devices graded A/B/C/Parts based on functionality and condition assessment." },
  { title: "Data Sanitization", desc: "All data-bearing storage sanitized before any refurbishment work begins." },
  { title: "Repair / Upgrade", desc: "Grade A and B devices cleaned, repaired, batteries or components replaced where needed." },
  { title: "Quality Check", desc: "Post-refurbishment check to confirm the device meets the applicable standard." },
  { title: "Reuse / Resale", desc: "Refurbished devices routed to reuse or resale channel. Grade C reviewed further. Parts recovery for uneconomical units." },
];

export default function RefurbishmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-deep-blue via-brand-blue to-brand-green text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm hover:text-white/80">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">Refurbishment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Extend the Life of Technology.</h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Not every retired device is waste. A device can potentially be redeployed, refurbished, upgraded, repaired, resold or used for parts. Before routing to recycling, we find out.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact#assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Assess My Devices <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why refurb */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                tag="The Principle"
                heading="Retirement Should Be the Beginning of an Asset's Next Journey."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  { label: "Redeployment", desc: "Working devices that can be internally reassigned — to another team, location or employee." },
                  { label: "Refurbishment", desc: "Devices with remaining hardware life that benefit from cleaning, repair or component replacement." },
                  { label: "Upgrade", desc: "RAM, storage or battery upgrades that extend the functional lifespan of a device." },
                  { label: "Resale", desc: "Refurbished devices sold through appropriate channels — recovering value for the client." },
                  { label: "Parts Recovery", desc: "Non-refurbishable units yielding components — drives, screens, RAM — for use in refurbishment of other devices." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-dark">{item.label}: </span>
                      <span className="text-muted text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-72 w-full">
                <Image
                  src="/images/itad-refurb-lab.jpg"
                  alt="Indian IT hardware technician testing and grading enterprise laptops"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-brand-leaf-green">Quality Assurance Lab</div>
                  <div className="text-sm font-bold mt-0.5">Component-Level Diagnostics & Grading (A–D)</div>
                </div>
              </div>
              <div className="bg-very-light-blue rounded-3xl p-8">
                <h3 className="font-bold text-dark text-xl mb-6">The Value Hierarchy</h3>
              {[
                { label: "1. Reuse / Redeploy", color: "bg-brand-blue" },
                { label: "2. Refurbish & Resell", color: "bg-brand-bright-blue" },
                { label: "3. Upgrade & Redeploy", color: "bg-brand-green" },
                { label: "4. Parts Recovery", color: "bg-brand-leaf-green" },
                { label: "5. Responsible Recycling", color: "bg-gray-400" },
              ].map((item, i, arr) => (
                <div key={i} className="flex flex-col items-start">
                  <div className={`${item.color} text-white text-sm font-semibold px-4 py-2.5 rounded-xl w-full`}>
                    {item.label}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="ml-6 w-0.5 h-5 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Grading */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading
            tag="Grading System"
            heading="Device Grading — How We Assess Refurbishment Potential."
            subheading="Every device assessed receives a grade based on functionality and physical condition, which determines its refurbishment pathway."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {GRADES.map((g) => (
              <GradeCard key={g.grade} {...g} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Grading is carried out based on functional testing and visual inspection. Outcomes are communicated in the asset report.
          </p>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <SectionHeading
            tag="Process"
            heading="From Collection to Reuse."
            subheading="A structured seven-step refurbishment process — covering testing, grading, data security, repair and quality checking."
          />
          <div className="mt-12">
            {WORKFLOW.map((step, i) => (
              <ProcessStep
                key={i}
                number={i + 1}
                title={step.title}
                description={step.desc}
                isLast={i === WORKFLOW.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Find Out What Your Retired Devices Are Worth."
        subheading="Share your device inventory with us — make, model, approximate quantity and condition — and we'll identify the right pathway for each."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
