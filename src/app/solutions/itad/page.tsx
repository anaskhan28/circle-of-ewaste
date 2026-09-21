import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardList,
  Shield,
  Truck,
  Search,
  HardDrive,
  RefreshCw,
  ShoppingCart,
  FileText,
  Server,
  Wifi,
  Cpu,
  Database,
  Monitor,
  Printer,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { CTASection } from "@/components/ui/CTASection";
import { FAQ } from "@/components/ui/FAQ";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "IT Asset Disposition (ITAD) | CIRKAL OF E-WASTE",
  description:
    "End-to-end IT Asset Disposition for businesses — asset inventory, data sanitization, refurbishment assessment, value recovery and responsible recycling, with chain of custody documentation.",
  alternates: { canonical: "/solutions/itad" },
  openGraph: {
    title: "IT Asset Disposition (ITAD) | CIRKAL OF E-WASTE",
    description:
      "End-to-end ITAD with asset tracking, data security, value recovery and responsible recycling.",
    url: "/solutions/itad",
  },
};

const ITAD_SERVICES = [
  { icon: ClipboardList, title: "Asset Inventory & Registration", desc: "Systematic recording of each asset — make, model, serial number, condition and data-bearing status." },
  { icon: Truck, title: "Secure Collection", desc: "Coordinated pickup from your office, branch or data centre — with chain-of-custody documentation from collection." },
  { icon: Search, title: "Condition Assessment", desc: "Each asset assessed for functionality, refurbishment potential and recovery value." },
  { icon: Shield, title: "Data Sanitization", desc: "Data-bearing media sanitized using a defined process appropriate to the media type and client requirement." },
  { icon: HardDrive, title: "Hard Drive / Media Destruction", desc: "Physical destruction for drives and storage media where data sanitization alone is not sufficient." },
  { icon: RefreshCw, title: "Refurbishment Assessment", desc: "Working and repairable devices assessed for refurbishment, upgrading or redeployment potential." },
  { icon: ShoppingCart, title: "Buyback / Value Recovery", desc: "Assets with remaining market value assessed and matched to appropriate recovery or resale channels." },
  { icon: Cpu, title: "Parts Recovery", desc: "Devices not suitable for whole-unit reuse assessed for component-level recovery." },
  { icon: FileText, title: "Documentation & Reporting", desc: "Asset-level records, disposition certificates, and a closure report for audit and compliance purposes." },
];

const ASSETS_HANDLED = [
  { icon: Cpu, label: "Laptops & Desktops" },
  { icon: Server, label: "Servers" },
  { icon: Wifi, label: "Networking Equipment" },
  { icon: Database, label: "Storage Devices" },
  { icon: Monitor, label: "Monitors & Displays" },
  { icon: Printer, label: "Printers" },
  { icon: Server, label: "Telecom Equipment" },
  { icon: Database, label: "Data Centre Equipment" },
  { icon: Cpu, label: "IT Peripherals" },
];

const WORKFLOW_STEPS = [
  { title: "Asset Register", desc: "Capture every asset — serial number, model, condition and data-bearing status — before any movement." },
  { title: "Collection", desc: "Coordinated and documented pickup, with chain of custody initiated from the moment assets leave your premises." },
  { title: "Verification", desc: "Received assets verified against the asset register. Discrepancies flagged and resolved before processing begins." },
  { title: "Data Security", desc: "All data-bearing media processed through the applicable sanitization or destruction process." },
  { title: "Condition Assessment", desc: "Each asset graded and evaluated for its best-possible disposition pathway." },
  { title: "Value Recovery", desc: "Reusable and recoverable assets matched to appropriate recovery, buyback or refurbishment channels." },
  { title: "Refurbishment / Reuse", desc: "Qualifying devices refurbished, upgraded or routed for redeployment or resale." },
  { title: "Recycling", desc: "End-of-life assets channelized to appropriately registered partners for responsible processing." },
  { title: "Reporting", desc: "Asset-level closure report — covering disposition of every registered asset — delivered to the client." },
];

const FAQS = [
  {
    question: "What is IT Asset Disposition (ITAD)?",
    answer:
      "IT Asset Disposition (ITAD) is the structured process of managing retired IT equipment — covering assessment, data security, value recovery, refurbishment and responsible recycling. It ensures that every retired asset is accounted for, data-bearing devices are handled securely, and residual value is recovered where possible.",
  },
  {
    question: "Do you handle data destruction?",
    answer:
      "Yes. Data sanitization and physical media destruction are part of our ITAD process. The specific method depends on the media type, asset condition and client requirements. Documentation is provided based on the process applied. We do not make blanket claims about specific standards unless they are confirmed and implemented.",
  },
  {
    question: "How does asset tracking work?",
    answer:
      "Each asset is recorded by serial number and unique identifier from collection through to final disposition. The closure report maps each registered asset to its final outcome — refurbished, resold, recycled, or otherwise disposed.",
  },
  {
    question: "Can you handle multi-location collections?",
    answer:
      "Yes. We coordinate collection programs across multiple offices, branches or sites, with consolidated reporting and site-wise asset tracking.",
  },
  {
    question: "Do I get a report at the end?",
    answer:
      "Yes. Clients receive a closure report covering the asset inventory, disposition status of each asset, data security actions taken, and recycling/recovery details. The specific contents of the report depend on the scope of the program.",
  },
];

export default function ITADPage() {
  const serviceSchema = generateServiceSchema({
    name: "IT Asset Disposition (ITAD)",
    description:
      "End-to-end ITAD services for businesses — including asset inventory, data sanitization, value recovery and responsible recycling.",
    url: "/solutions/itad",
  });

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "IT Asset Disposition", href: "/solutions/itad" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm hover:text-white/80 transition-colors">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">IT Asset Disposition</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              IT Asset Disposition, Built Around Value and Security.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Retired IT equipment requires more than collection and disposal. We provide a structured ITAD process — covering asset tracking, data security, value recovery and responsible disposition.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact#assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Request an Asset Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#workflow" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                See the Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="bg-very-light-blue border-b border-brand-blue/10 py-5">
        <div className="container-wide">
          <p className="text-sm text-muted text-center">
            <span className="font-semibold text-dark">Note:</span> We do not make unsupported compliance claims. Data sanitization methods are defined by media type and client requirement. Regulatory requirements for E-Waste are subject to applicable laws.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            tag="Services"
            heading="What Our ITAD Service Includes."
            subheading="A comprehensive set of services designed to handle every aspect of retiring IT equipment responsibly."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ITAD_SERVICES.map((s) => (
              <div key={s.title} className="card-base p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-very-light-blue flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-brand-blue" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base">{s.title}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assets */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading tag="Assets Handled" heading="Equipment We Work With." />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {ASSETS_HANDLED.map(({ icon: Icon, label }) => (
              <div key={label} className="card-base p-4 flex flex-col items-center gap-2 text-center">
                <Icon className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-dark">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionHeading
                tag="Process"
                heading="Our ITAD Workflow."
                subheading="A nine-step process that takes every asset from collection to documented closure."
                align="left"
              />
              <div className="mt-10 flex flex-col">
                {WORKFLOW_STEPS.map((step, i) => (
                  <ProcessStep
                    key={i}
                    number={i + 1}
                    title={step.title}
                    description={step.desc}
                    isLast={i === WORKFLOW_STEPS.length - 1}
                  />
                ))}
              </div>
            </div>
            {/* Data security callout */}
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-64 sm:h-72 w-full">
                <Image
                  src="/images/data-center-india.jpg"
                  alt="Indian enterprise IT systems engineers performing server rack decommissioning and data sanitization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-brand-leaf-green">Bengaluru & Mumbai Data Centers</div>
                  <div className="text-sm font-bold mt-0.5">On-Site Server De-Racking & Sanitization</div>
                </div>
              </div>
              <div id="data-security" className="bg-gradient-to-br from-brand-deep-blue to-brand-blue rounded-3xl p-8 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Your Old Hardware Can Still Hold Your Data.</h2>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  Retired laptops, desktops, servers, HDDs, SSDs and storage media often retain residual data — even after deletion or formatting. Secure handling before disposition is a business and data governance responsibility.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Identify data-bearing assets at collection",
                    "Controlled chain of custody",
                    "Appropriate sanitization or destruction method",
                    "Documentation of the process applied",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-white font-bold">{i + 1}</span>
                      </div>
                      <span className="text-sm text-white/85">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/50 border-t border-white/10 pt-4">
                  Data destruction methods depend on media type, condition and applicable security requirements. We do not make unsupported compliance claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading tag="FAQ" heading="Common ITAD Questions." />
          <div className="mt-12 max-w-3xl mx-auto">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to plan your asset disposition?"
        subheading="Tell us what you have — asset type, quantity and location — and we'll outline a disposition plan."
        primaryCta={{ label: "Request an Asset Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "Explore All Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
