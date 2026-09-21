import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "How It Works | CIRKAL OF E-WASTE",
  description:
    "Five steps from retired asset to documented closure — Assess, Secure, Recover, Circulate, Report. See how we manage business asset disposition.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    number: "01",
    label: "Assess",
    headline: "Understand What You Have.",
    color: "from-brand-deep-blue to-brand-blue",
    image: "/images/corporate-logistics-india.jpg",
    imageAlt: "Secure enterprise asset collection & transit in Indian tech park",
    description:
      "Before any asset moves, we need to understand what it is. Asset type, make, model, serial number, approximate age, condition and whether it holds data. This is the foundation of responsible disposition.",
    activities: [
      "Asset inventory and registration",
      "Serial number capture",
      "Condition classification",
      "Data-bearing status identification",
      "Recovery potential evaluation",
    ],
    outputs: ["Asset register", "Condition report", "Recovery potential summary"],
  },
  {
    number: "02",
    label: "Secure",
    headline: "Protect Sensitive Information.",
    color: "from-brand-blue to-brand-bright-blue",
    image: "/images/data-center-india.jpg",
    imageAlt: "Data sanitization & server rack decommissioning in Indian data center",
    description:
      "Retired hardware can retain sensitive business data. Before any asset is released from controlled custody, data-bearing media is identified and processed through the appropriate sanitization or destruction method.",
    activities: [
      "Identify all data-bearing media",
      "Maintain controlled chain of custody",
      "Apply appropriate sanitization method",
      "Physical destruction where required",
      "Document the process applied",
    ],
    outputs: ["Data security records", "Certificate of process (where applicable)", "Updated asset register"],
  },
  {
    number: "03",
    label: "Recover",
    headline: "Identify Reusable and Recoverable Value.",
    color: "from-brand-bright-blue to-brand-green",
    image: "/images/itad-refurb-lab.jpg",
    imageAlt: "Component-level testing & A–D grading in Indian hardware diagnostics lab",
    description:
      "With data secured, each asset is evaluated for its recovery potential — working devices for reuse, refurbishable devices for refurbishment, and all others for component or material recovery.",
    activities: [
      "Functional testing",
      "Grading (A / B / C / Parts)",
      "Market value assessment where applicable",
      "Refurbishment viability review",
      "Parts and material recovery assessment",
    ],
    outputs: ["Graded asset list", "Recovery recommendation per asset"],
  },
  {
    number: "04",
    label: "Circulate",
    headline: "Refurbish, Reuse or Route to Appropriate Partners.",
    color: "from-brand-green to-brand-leaf-green",
    image: "/images/ewaste-recycling-facility-india.jpg",
    imageAlt: "Authorized electronic waste recycling & PCB sorting facility in India",
    description:
      "Assets are routed to their optimal next step — redeployed, refurbished, sold, parts-recovered, or channelized to verified processing and recycling partners appropriate for the material category.",
    activities: [
      "Route working assets to reuse or resale",
      "Refurbish qualifying devices",
      "Match end-of-life material to verified partners",
      "Coordinate collection and transfer",
      "Track movement with documentation",
    ],
    outputs: ["Disposition routing plan", "Transfer documentation", "Partner receipts"],
  },
  {
    number: "05",
    label: "Report",
    headline: "Close the Loop With Documentation.",
    color: "from-brand-leaf-green to-brand-green",
    image: "/images/esg-audit-india.jpg",
    imageAlt: "ESG compliance auditor presenting carbon offset & e-waste closure reports",
    description:
      "Every program ends with a closure report — detailing what happened to each asset, from collection to final disposition. This supports business compliance, audit trails and internal sustainability reporting.",
    activities: [
      "Compile asset-level disposition records",
      "Include data security status per asset",
      "Document recycling and recovery outcomes",
      "Consolidate partner documentation",
      "Deliver closure report",
    ],
    outputs: ["Closure report", "Asset disposition summary", "Documentation package"],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            How We Work.
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            Five clear steps that take a retired asset from collection to documented closure — with traceability at every stage.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Steps overview */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-5 gap-0">
            {STEPS.map((step, i, arr) => (
              <div key={i} className="relative flex flex-col items-center text-center px-2">
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
                )}
                <div className={`relative z-10 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-xs font-bold`}>
                  {step.number}
                </div>
                <span className="mt-2 text-xs font-bold text-dark uppercase tracking-wider">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed steps */}
      <div className="bg-white">
        {STEPS.map((step, i) => (
          <section
            key={i}
            id={`step-${step.number}`}
            className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-light-bg"}`}
          >
            <div className="container-wide">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "direction-rtl" : ""}`}>
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-3 mb-6`}>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-lg font-bold`}>
                      {step.number}
                    </div>
                    <span className="text-xs font-bold text-muted uppercase tracking-widest">{step.label}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">{step.headline}</h2>
                  <p className="mt-5 text-muted text-lg leading-relaxed">{step.description}</p>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-72 w-full mt-8">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-semibold text-brand-leaf-green">Step {step.number} • Operational Standard</div>
                      <div className="text-sm font-bold mt-0.5">{step.imageAlt}</div>
                    </div>
                  </div>
                </div>

                {/* Activities + outputs */}
                <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="card-base p-6">
                    <h3 className="font-bold text-dark text-sm uppercase tracking-wider mb-4">Activities</h3>
                    <ul className="space-y-2.5">
                      {step.activities.map((a, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-[9px] font-bold">{j + 1}</span>
                          </div>
                          <span className="text-sm text-dark">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-base p-6 bg-very-light-blue border-brand-blue/10">
                    <h3 className="font-bold text-brand-blue text-sm uppercase tracking-wider mb-3">Outputs</h3>
                    <ul className="space-y-2">
                      {step.outputs.map((o, j) => (
                        <li key={j} className="text-sm text-dark flex items-center gap-2">
                          <span className="text-brand-blue font-bold">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        heading="Ready to Start?"
        subheading="Tell us what you have and we'll outline a program from assessment to closure."
        primaryCta={{ label: "Request an Asset Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "View Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
