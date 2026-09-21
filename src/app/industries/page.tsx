import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Industries | CIRKAL OF E-WASTE",
  description:
    "We serve businesses across industries — banking, IT, manufacturing, healthcare, retail, education, hospitality, government, and more.",
  alternates: { canonical: "/industries" },
};

const INDUSTRIES = [
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    description: "Multiple branches, sensitive data, audit requirements and regulatory documentation.",
    challenges: ["Multi-branch asset registers", "Secure data destruction", "Audit trail requirements", "BFSI compliance documentation"],
  },
  {
    slug: "it-ites",
    name: "IT & ITES",
    description: "High device refresh cycles, server and networking equipment, data centre decommissioning.",
    challenges: ["Device refresh programs", "Server and data centre disposal", "Data security for developer equipment", "Asset recovery and buyback"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Mixed IT and electrical equipment, OT equipment, industrial electronics and large volumes.",
    challenges: ["Mixed IT and industrial equipment", "Large volume collections", "Multi-site coordination", "Electrical equipment disposal"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Medical IT equipment, sensitive patient data, biomedical device considerations.",
    challenges: ["Patient data on retired devices", "Biomedical equipment disposal", "Compliance documentation", "Medical IT refresh"],
  },
  {
    slug: "retail",
    name: "Retail",
    description: "POS systems, IT equipment, store electronics and multi-location programs.",
    challenges: ["Multi-store collections", "POS and retail equipment", "Data on payment systems", "Seasonal refresh cycles"],
  },
  {
    slug: "education",
    name: "Education",
    description: "Campus IT refresh, student and faculty device programs, institutional e-waste.",
    challenges: ["Campus device refresh", "Student collection drives", "Infrastructure equipment", "Awareness programs"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    description: "Hotel IT infrastructure, in-room electronics, F&B and operational equipment.",
    challenges: ["Guest-facing device disposal", "In-room electronics", "Multi-property programs", "Operational equipment"],
  },
  {
    slug: "government",
    name: "Government",
    description: "Public sector IT, sensitive government data, policy compliance and audit requirements.",
    challenges: ["Sensitive government data", "Procurement and disposal compliance", "Multi-department programs", "Audit documentation"],
  },
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    description: "General corporate IT refresh, office electronics and employee device programs.",
    challenges: ["Corporate device refresh", "Employee laptops and mobiles", "Office electronics disposal", "CSR alignment"],
  },
  {
    slug: "data-centres",
    name: "Data Centres",
    description: "Server decommissioning, storage media destruction, network equipment and large-scale ITAD.",
    challenges: ["Large-scale server disposal", "Storage media destruction", "Secure decommissioning", "Data centre ITAD"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    description: "Telecom infrastructure, network equipment, CPE disposal and tower equipment.",
    challenges: ["Network and CPE equipment", "Telecom infrastructure disposal", "Large-volume programs", "Geographic dispersion"],
  },
  {
    slug: "smes",
    name: "SMEs",
    description: "Small and medium enterprises with periodic IT refresh needs and simpler program requirements.",
    challenges: ["Smaller volume programs", "Simple, structured process", "Cost-effective recovery", "Data security on a budget"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            For Organizations That Take Asset Management Seriously.
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            CIRKAL works across industries — each with its own asset profile, data requirements and program structure.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="card-base p-7 flex flex-col gap-4 group hover:-translate-y-0.5 transition-all duration-300"
              >
                <h2 className="font-bold text-dark text-xl group-hover:text-brand-blue transition-colors duration-200">
                  {industry.name}
                </h2>
                <p className="text-sm text-muted leading-relaxed">{industry.description}</p>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {industry.challenges.slice(0, 2).map((c) => (
                      <span key={c} className="px-2.5 py-1 bg-very-light-blue text-brand-blue text-xs font-medium rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-brand-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not Sure What Program Fits Your Industry?"
        subheading="Tell us your organization type and we'll outline a program that fits your specific requirements."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "View Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
