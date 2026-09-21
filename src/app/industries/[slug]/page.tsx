import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

const INDUSTRIES: Record<string, {
  name: string;
  headline: string;
  intro: string;
  challenges: Array<{ title: string; desc: string }>;
  services: string[];
}> = {
  "banking-financial-services": {
    name: "Banking & Financial Services",
    headline: "Asset Management for Banks and Financial Institutions.",
    intro: "Banks and financial institutions operate across multiple branches, handling sensitive customer and financial data on thousands of devices. Retiring equipment without a structured process creates data risks and audit gaps.",
    challenges: [
      { title: "Sensitive Data at Scale", desc: "Every retiring laptop, desktop or server at a bank branch may hold customer data, financial records or credentials. Data sanitization before disposition is a regulatory and governance requirement." },
      { title: "Multi-Branch Complexity", desc: "Coordinating asset collection, tracking and documentation across dozens or hundreds of branches requires a structured program — not ad hoc collection." },
      { title: "Audit Documentation", desc: "Financial institutions are subject to audit. Asset disposal records — serial numbers, data destruction certificates and disposition outcomes — need to be on file." },
      { title: "Value Recovery", desc: "Large asset refresh cycles mean significant quantities of working or refurbishable equipment. Structured assessment can recover substantial value before assets reach disposal." },
    ],
    services: ["Multi-branch collection coordination", "Serial-number level asset tracking", "Data sanitization or destruction for all data-bearing equipment", "Asset grading and value recovery", "Branch-wise and consolidated closure reports"],
  },
  "it-ites": {
    name: "IT & ITES",
    headline: "ITAD and Asset Recovery for Technology Companies.",
    intro: "IT and ITES organizations face continuous device refresh cycles, server decommissioning, data centre upgrades and the challenge of managing large quantities of retiring technology responsibly.",
    challenges: [
      { title: "Continuous Device Refresh", desc: "Laptops, desktops and developer workstations are refreshed on regular cycles. A structured ITAD program ensures each wave is handled with data security, value recovery and proper documentation." },
      { title: "Server and Data Centre Disposal", desc: "Retiring servers, storage arrays and networking infrastructure requires secure data handling, physical logistics and matched recycling capability." },
      { title: "Data Security", desc: "IT companies handle large volumes of proprietary, client and operational data. Secure sanitization before disposition is non-negotiable." },
      { title: "Asset Buyback", desc: "Recent-generation IT equipment often retains market value. Structured buyback or refurbishment programs can offset refresh costs." },
    ],
    services: ["Laptop and desktop ITAD", "Server and data centre decommissioning", "Networking equipment disposal", "Data sanitization and destruction", "Asset buyback and value recovery"],
  },
  "manufacturing": {
    name: "Manufacturing",
    headline: "IT and Equipment Recovery for Manufacturing Organizations.",
    intro: "Manufacturing organizations manage a mix of IT, operational technology, industrial electronics and electrical equipment — often across multiple facilities with significant disposal volumes.",
    challenges: [
      { title: "Mixed Equipment Categories", desc: "IT equipment, OT systems, industrial electronics and electrical equipment require different handling, channelization and regulatory pathways." },
      { title: "Large Volumes", desc: "Manufacturing organizations often generate large quantities of retiring equipment — structured programs with multi-site logistics are needed." },
      { title: "Multi-Site Coordination", desc: "Plants, warehouses and offices across locations require centralized program coordination with site-wise reporting." },
    ],
    services: ["Multi-site collection coordination", "IT and electrical equipment disposal", "Large-volume asset programs", "Regulatory channelization guidance", "Consolidated program reporting"],
  },
  "healthcare": {
    name: "Healthcare",
    headline: "IT Asset Management for Healthcare Organizations.",
    intro: "Hospitals and healthcare organizations retire medical IT equipment, administrative devices and clinical systems — each with potential patient data implications and specialized handling requirements.",
    challenges: [
      { title: "Patient Data on Retired Devices", desc: "Administrative and clinical IT equipment may hold patient records, imaging data and other sensitive health information. Data security is critical before any disposition." },
      { title: "Medical and IT Equipment", desc: "Healthcare organizations retire a mix of general IT and medical IT equipment — each requiring appropriate channelization." },
      { title: "Compliance Documentation", desc: "Healthcare operators require documentation of data security actions and disposition outcomes for audit and compliance purposes." },
    ],
    services: ["Healthcare IT asset disposition", "Data sanitization for clinical and administrative devices", "Medical IT equipment channelization", "Disposition documentation for compliance"],
  },
  "retail": {
    name: "Retail",
    headline: "Multi-Location Asset Programs for Retail Organizations.",
    intro: "Retail organizations retire POS systems, store IT equipment, back-office devices and consumer electronics — often across large store networks with periodic refresh cycles.",
    challenges: [
      { title: "Multi-Store Collection", desc: "Collecting from dozens or hundreds of retail locations requires coordinated logistics and centralized reporting." },
      { title: "POS and Payment Equipment", desc: "Retiring point-of-sale systems and payment terminals require data security and appropriate disposal channels." },
      { title: "Seasonal Programs", desc: "Retail refresh cycles often align with seasonal closures or store refits — requiring time-sensitive program coordination." },
    ],
    services: ["Multi-store collection programs", "POS and retail equipment disposal", "Data security for payment systems", "Consolidated reporting across locations"],
  },
  "education": {
    name: "Education",
    headline: "Responsible Technology Management for Educational Institutions.",
    intro: "Universities, schools and educational institutes retire large quantities of IT equipment, manage periodic device refresh programs and have a natural audience for awareness campaigns.",
    challenges: [
      { title: "Campus Device Refresh", desc: "Educational institutions periodically refresh large quantities of student and faculty devices — requiring structured collection and disposition." },
      { title: "Institutional IT Infrastructure", desc: "Servers, networking equipment, lab computers and other institutional IT require appropriate disposition." },
      { title: "Awareness Opportunity", desc: "Campuses are natural venues for e-waste awareness programs — students and faculty benefit from understanding responsible technology disposal." },
    ],
    services: ["Campus device collection and ITAD", "Lab and infrastructure equipment disposal", "E-waste awareness programs for students and faculty", "Impact reporting for CSR and institutional reporting"],
  },
  "hospitality": {
    name: "Hospitality",
    headline: "IT and Equipment Disposal for Hotels and Hospitality Organizations.",
    intro: "Hotels and hospitality groups retire in-room electronics, F&B equipment, front-desk systems and IT infrastructure — often with property renovation driving large disposal volumes.",
    challenges: [
      { title: "In-Room and Guest-Facing Equipment", desc: "Televisions, tablets, phones and entertainment systems retired during refurbishments require responsible channelization." },
      { title: "Multi-Property Programs", desc: "Hotel groups with multiple properties benefit from coordinated programs across their portfolio." },
      { title: "Operational and IT Equipment", desc: "Hotels retire a mix of general IT, operational and hospitality-specific equipment." },
    ],
    services: ["Hotel IT and in-room equipment disposal", "Multi-property program coordination", "F&B and operational equipment channelization", "Refurbishment programs for qualifying equipment"],
  },
  "government": {
    name: "Government",
    headline: "Structured Asset Disposal for Government Organizations.",
    intro: "Government departments and public sector organizations retire large quantities of IT equipment with significant data security implications, audit requirements and procurement compliance considerations.",
    challenges: [
      { title: "Sensitive Government Data", desc: "Government IT systems hold sensitive citizen, operational and classified information. Secure disposal is a governance obligation." },
      { title: "Compliance and Audit Requirements", desc: "Public sector disposal is subject to procurement rules, audit trails and accountability requirements." },
      { title: "Multi-Department Programs", desc: "Government programs often span multiple departments or agencies — requiring coordinated logistics and reporting." },
    ],
    services: ["Government IT asset disposition", "Data sanitization and destruction", "Multi-department coordination", "Audit-ready documentation and reporting"],
  },
  "corporate-offices": {
    name: "Corporate Offices",
    headline: "IT Asset Disposition for Corporate Organizations.",
    intro: "Corporate offices retire laptops, desktops, office electronics and infrastructure equipment on periodic cycles — aligned with device refresh programs, office moves or CSR initiatives.",
    challenges: [
      { title: "Periodic Device Refresh", desc: "Corporate IT teams replace employee devices on 3–5 year cycles — generating significant volumes of retiring equipment." },
      { title: "Employee Device Data", desc: "Employee laptops and desktops hold company data, emails and credentials. Data security before disposition is essential." },
      { title: "CSR Alignment", desc: "Corporate sustainability programs benefit from documented e-waste disposition outcomes — enabling ESG reporting." },
    ],
    services: ["Corporate ITAD and device refresh programs", "Data sanitization for employee devices", "Office electronics disposal", "Asset value recovery", "ESG impact documentation"],
  },
  "data-centres": {
    name: "Data Centres",
    headline: "Data Centre Decommissioning and ITAD.",
    intro: "Data centres decommissioning aging infrastructure — servers, storage arrays, networking gear and UPS systems — face complex logistics, security requirements and large-volume disposal challenges.",
    challenges: [
      { title: "Large-Scale Server Disposal", desc: "Retiring server racks, blade chassis and storage arrays requires secure handling, physical logistics and matched processing capability." },
      { title: "Storage Media Destruction", desc: "Data centre storage — HDDs, SSDs, tape — requires secure sanitization or physical destruction before leaving controlled custody." },
      { title: "Secure Decommissioning", desc: "The entire decommissioning process — from rack to final disposition — requires a chain-of-custody that can be audited." },
    ],
    services: ["Server rack decommissioning", "Storage media destruction", "Networking and UPS equipment disposal", "Data centre ITAD programs", "Chain-of-custody documentation"],
  },
  "telecommunications": {
    name: "Telecommunications",
    headline: "Network Equipment and Telecom Asset Disposition.",
    intro: "Telecom organizations retire large quantities of network equipment, CPE, tower infrastructure and OT systems — across geographically dispersed locations.",
    challenges: [
      { title: "Network and CPE Equipment", desc: "Routers, switches, modems and customer-premises equipment retired at scale require structured collection and processing programs." },
      { title: "Telecom Infrastructure", desc: "Tower equipment, transmission systems and other telecom infrastructure require specialized handling and channelization." },
      { title: "Geographic Dispersion", desc: "Telecom networks span cities and states — collection programs need to be coordinated across large service territories." },
    ],
    services: ["Network equipment disposition", "CPE and modem collection programs", "Telecom infrastructure decommissioning", "Multi-geography coordination"],
  },
  "smes": {
    name: "SMEs",
    headline: "Simple, Structured ITAD for Small and Medium Enterprises.",
    intro: "Small and medium businesses retire IT equipment on similar cycles to large enterprises — but need a simpler, cost-effective program that handles data security, value recovery and responsible recycling without complexity.",
    challenges: [
      { title: "Smaller Volumes, Same Requirements", desc: "SMEs may retire 10–100 devices at a time — still requiring data security and responsible disposition." },
      { title: "No Dedicated IT Asset Team", desc: "SMEs typically don't have dedicated IT asset management resources — CIRKAL provides a structured process without the internal overhead." },
      { title: "Cost-Effective Recovery", desc: "Value recovery from retired equipment can partially offset program costs — especially for recent-generation devices." },
    ],
    services: ["Laptop and desktop ITAD", "Data sanitization for SME devices", "Simple, documented disposal process", "Asset value recovery where applicable"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.name} | CIRKAL OF E-WASTE`,
    description: `CIRKAL asset management and ITAD programs for ${industry.name} — ${industry.intro.substring(0, 120)}...`,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) notFound();

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: industry.name, href: `/industries/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/industries" className="text-white/50 text-sm hover:text-white/80">Industries</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">{industry.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{industry.headline}</h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">{industry.intro}</p>
            <Link href="/contact#assessment" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Plan a Program for {industry.name.split(" ")[0]}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-10">Challenges in {industry.name}.</h2>
            <div className="space-y-6">
              {industry.challenges.map((c, i) => (
                <div key={i} className="card-base p-7 flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center text-base font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-2">{c.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark mb-8">What We Provide for {industry.name}.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industry.services.map((s, i) => (
                <div key={i} className="card-base px-5 py-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[9px] font-bold">✓</span>
                  </div>
                  <span className="text-sm font-medium text-dark">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to Build a Program for ${industry.name.split(" ")[0]}?`}
        subheading="Tell us your organization type, asset categories, volume and location — we'll outline a program."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "All Industries", href: "/industries" }}
        variant="blue"
      />
    </>
  );
}
