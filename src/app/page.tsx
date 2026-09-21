import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  RefreshCw,
  TrendingUp,
  Recycle,
  Building2,
  Cpu,
  Server,
  Database,
  Monitor,
  Printer,
  Wifi,
  Package,
  CheckCircle2,
  BarChart3,
  Users,
} from "lucide-react";
import { seo } from "@/config/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { DashboardPreview } from "@/components/ui/DashboardPreview";
import { ValueComparison } from "@/components/ui/ValueComparison";
import Image from "next/image";

export const metadata: Metadata = {
  title: seo.defaultTitle,
  description: seo.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: "/",
  },
};

const ASSET_TYPES = [
  { icon: Cpu, label: "Laptops & Desktops" },
  { icon: Server, label: "Servers" },
  { icon: Wifi, label: "Networking Equipment" },
  { icon: Monitor, label: "Monitors" },
  { icon: Printer, label: "Printers" },
  { icon: Database, label: "Storage Devices" },
  { icon: Package, label: "UPS Equipment" },
  { icon: Building2, label: "Telecom Equipment" },
];

const SOLUTIONS = [
  {
    icon: TrendingUp,
    title: "IT Asset Disposition",
    description:
      "End-to-end ITAD for laptops, servers, networking gear and data centre equipment — with serial tracking, data security and structured disposition.",
    href: "/solutions/itad",
  },
  {
    icon: Shield,
    title: "Data Security & Destruction",
    description:
      "Sensitive data can persist on retired hardware. Controlled sanitization and destruction, with documentation, before any asset changes hands.",
    href: "/solutions/itad#data-security",
  },
  {
    icon: RefreshCw,
    title: "Refurbishment & Reuse",
    description:
      "Not every retired device is waste. We assess, grade, repair and facilitate redeployment or resale of devices that have remaining life.",
    href: "/solutions/refurbishment",
  },
  {
    icon: Recycle,
    title: "E-Waste Management",
    description:
      "Structured collection, channelization and documentation for business electronics — from laptops to infrastructure equipment.",
    href: "/solutions/e-waste",
  },
  {
    icon: BarChart3,
    title: "Asset Value Recovery",
    description:
      "Identify recovery potential before committing assets to disposal — through assessment, grading and matching to the right recovery pathway.",
    href: "/asset-value-recovery",
  },
  {
    icon: Users,
    title: "Awareness Programs",
    description:
      "Build a culture of responsible technology disposal. Customized employee and campus awareness campaigns, collection drives and impact reporting.",
    href: "/awareness",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Value First",
    description:
      "We assess recovery potential before treating assets as waste. Reuse, refurbishment and recovery are evaluated before recycling.",
  },
  {
    title: "Security First",
    description:
      "Data-bearing assets require controlled handling before disposition. Data security is not optional — it is a prerequisite.",
  },
  {
    title: "Traceability",
    description:
      "Track assets through the disposition process — from collection to final closure — with a documented chain of custody.",
  },
  {
    title: "Verified Network",
    description:
      "Connect businesses with processing partners that have been checked against defined verification criteria for legitimacy and capability.",
  },
  {
    title: "Responsible Channelization",
    description:
      "Match materials to appropriate processing pathways. Not all waste streams go to the same place — and they shouldn't.",
  },
  {
    title: "Documentation",
    description:
      "Maintain records needed for business compliance, audit workflows and closure reporting. Know what happened to every asset.",
  },
  {
    title: "Awareness",
    description:
      "Help employees and organizations understand responsible technology disposal — building circular thinking into workplace culture.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20"
        aria-labelledby="hero-heading"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-brand-bright-blue/10 rounded-full blur-2xl" />
        </div>

        <div className="container-wide relative z-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="flex flex-col gap-8">
              {/* <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full border border-white/20 w-fit">
                <span className="w-2 h-2 bg-brand-leaf-green rounded-full animate-pulse" />
                <span className="text-white/90 text-xs font-semibold tracking-wide">
                  Circular IT Asset Lifecycle &amp; Recovery
                </span>
              </div> */}

              <div>
                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                >
                  Recover More Value From What Your Business{" "}
                  <span className="text-brand-leaf-green">No Longer Uses.</span>
                </h1>
                <p className="mt-4 text-base text-white/60 font-medium">
                  Technology, assets and materials don&apos;t have to become waste.
                </p>
              </div>

              <p className="text-lg text-white/75 leading-relaxed max-w-xl">
                We help businesses manage retired IT assets and recover maximum value through ITAD, data security, refurbishment, reuse and responsible recycling.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact#assessment"
                  id="hero-cta-primary"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-blue text-base font-bold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg text-center w-full sm:w-auto"
                >
                  Request an Asset Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/solutions"
                  id="hero-cta-secondary"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/30 text-white text-base font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-center w-full sm:w-auto"
                >
                  Explore Our Solutions
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  "Structured ITAD Process",
                  "Data Security Focused",
                  "Responsible Recycling",
                  "Chain of Custody",
                ].map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1.5 text-xs text-white/60 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-leaf-green flex-shrink-0" />
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Realistic Indian ITAD Facility & Asset Telemetry Card */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              {/* Subtle ambient glow behind card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-bright-blue/30 via-brand-green/20 to-brand-blue/30 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-dark/80 backdrop-blur-md">
                {/* Main facility photo */}
                <div className="relative h-80 sm:h-96 lg:h-[420px] w-full">
                  <Image
                    src="/images/hero-itad-india.jpg"
                    alt="Indian IT Hardware Engineer assessing enterprise laptops in modern Bengaluru diagnostics facility"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent" />

                  {/* Bottom Overlay Enterprise Telemetry Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl text-dark">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                          Enterprise ITAD Batch
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-dark mt-0.5 truncate">
                          Lot #BLR-2026-489 • 240 Assets
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-[10px] sm:text-[11px] text-muted font-medium">Recovery Rate</div>
                        <div className="text-xs sm:text-sm font-bold text-brand-green">94.2% Reusable</div>
                      </div>
                    </div>

                    {/* Progress steps mini bar */}
                    <div className="grid grid-cols-4 gap-1 sm:gap-1.5 pt-2 border-t border-gray-100 text-[10px] sm:text-[11px] font-semibold text-center">
                      <div className="py-1 rounded bg-brand-blue/10 text-brand-blue font-bold truncate">1. Audit ✓</div>
                      <div className="py-1 rounded bg-brand-blue/10 text-brand-blue font-bold truncate">2. Wipe ✓</div>
                      <div className="py-1 rounded bg-brand-green/15 text-brand-green font-bold truncate">3. Grade A</div>
                      <div className="py-1 rounded bg-gray-100 text-gray-600 truncate">4. Recover</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="section-padding bg-white" aria-labelledby="problem-heading">
        <div className="container-wide">
          <SectionHeading
            tag="The Challenge"
            heading="Retired Doesn't Always Mean Worthless."
            subheading="Businesses often accumulate retired technology without a clear process for evaluating and routing each asset appropriately. The challenge is knowing what should happen to each one."
            id="problem-heading"
          />

          {/* Asset grid */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ASSET_TYPES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="card-base p-5 flex flex-col items-center gap-3 text-center group hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-very-light-blue flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-dark">{label}</span>
              </div>
            ))}
          </div>

          {/* What each asset may need */}
          <div className="mt-14 bg-very-light-blue rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Some have resale value.",
                  desc: "Working devices, high-spec equipment or recently refreshed inventory may still have a market — recovery starts with assessment.",
                  color: "text-brand-blue",
                  bg: "bg-brand-blue",
                },
                {
                  title: "Some contain sensitive data.",
                  desc: "Retired laptops, servers and storage media often carry residual data. Secure handling before disposition is a business responsibility.",
                  color: "text-brand-deep-blue",
                  bg: "bg-brand-deep-blue",
                },
                {
                  title: "Some require specialized recycling.",
                  desc: "Electronic waste has environmental and regulatory implications. Not every vendor is appropriately registered or capable.",
                  color: "text-brand-green",
                  bg: "bg-brand-green",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className={`w-8 h-1 rounded-full ${item.bg}`} />
                  <h3 className={`text-lg font-bold ${item.color}`}>{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ASSET VALUE RECOVERY ===== */}
      <section className="section-padding bg-light-bg" aria-labelledby="recovery-heading">
        <div className="container-wide">
          <SectionHeading
            tag="Asset Value Recovery"
            heading="Turn Retired Assets Into Recoverable Value."
            subheading="Instead of sending everything directly to disposal, we evaluate each asset for its best-possible next step."
            id="recovery-heading"
          />

          {/* Comparison */}
          <div className="mt-12">
            <ValueComparison />
          </div>

          {/* Real Facility Highlight */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-white grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-72 sm:h-80 lg:h-full min-h-[340px] w-full">
              <Image
                src="/images/itad-refurb-lab.jpg"
                alt="Indian IT hardware technician running automated diagnostics and grading on commercial laptops in certified facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden text-white font-semibold text-sm">
                Certified Testing & Component-Level Diagnostics • India
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-very-light-blue text-brand-blue text-xs font-semibold w-fit">
                <RefreshCw className="w-3.5 h-3.5" />
                Component-Level Grading
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-dark leading-tight">
                Multi-Point Testing Before Declaring Any Asset As Waste
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Before any laptop, desktop or workstation is routed to recycling, our technicians in India test functional health across motherboard, RAM, storage, battery, display, and keyboard — assigning Grades A through D to recover maximum residual value for your enterprise.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-light-bg border border-gray-100">
                  <div className="text-xl font-bold text-brand-blue">Up to 3x</div>
                  <div className="text-xs text-muted mt-0.5">Value vs Scrap Liquidation</div>
                </div>
                <div className="p-3.5 rounded-xl bg-light-bg border border-gray-100">
                  <div className="text-xl font-bold text-brand-green">100% Audit</div>
                  <div className="text-xs text-muted mt-0.5">Serial-Tracked Manifests</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/asset-value-recovery"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn more about asset value recovery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS PREVIEW ===== */}
      <section className="section-padding bg-white" aria-labelledby="how-heading">
        <div className="container-wide">
          <SectionHeading
            tag="How It Works"
            heading="A Structured Process for Every Asset."
            subheading="Five clear steps that take a retired asset from collection to documented closure."
            id="how-heading"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-5 gap-0 relative">
            {[
              { num: "01", label: "Assess", desc: "Understand what you have — asset type, condition, age and data-bearing status." },
              { num: "02", label: "Secure", desc: "Control sensitive information before any asset moves or changes hands." },
              { num: "03", label: "Recover", desc: "Identify what has reuse, refurbishment or market recovery potential." },
              { num: "04", label: "Circulate", desc: "Route assets to the right pathway — reuse, resale, refurbishment or recycling." },
              { num: "05", label: "Report", desc: "Close the loop with documentation of what happened to each asset." },
            ].map((step, i, arr) => (
              <div key={i} className="relative flex flex-col items-center text-center gap-4 px-4">
                {/* Connector */}
                {i < arr.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-blue/40 to-brand-green/20 z-0" />
                )}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base">{step.label}</h3>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-blue text-brand-blue text-sm font-semibold rounded-xl hover:bg-very-light-blue transition-colors duration-200"
            >
              Explore the full process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS ===== */}
      <section className="section-padding bg-light-bg" aria-labelledby="solutions-heading">
        <div className="container-wide">
          <SectionHeading
            tag="Solutions"
            heading="What We Do For Your Business."
            subheading="A range of structured services to manage retired assets — from initial assessment to final disposition."
            id="solutions-heading"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((sol) => (
              <ServiceCard key={sol.href} {...sol} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-brand-deep-blue transition-colors duration-200"
            >
              All Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DATA SECURITY & DECOMMISSIONING SPOTLIGHT ===== */}
      <section className="section-padding bg-dark text-white relative overflow-hidden" aria-labelledby="datasec-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-blue/40 via-transparent to-brand-green/20 pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-6">
                <Shield className="w-3.5 h-3.5 text-brand-bright-blue" />
                Data Sanitization & Decommissioning
              </div>
              <h2 id="datasec-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Complete Data Sanitization & On-Site Data Center Decommissioning.
              </h2>
              <p className="mt-5 text-gray-300 text-base leading-relaxed">
                Whether de-racking enterprise server blades in Mumbai, wiping SAN storage in Hyderabad, or decommissioning branch infrastructure across India — we deliver certified NIST 800-88 data destruction with tamper-proof certificates of destruction.
              </p>
              <div className="mt-8 space-y-3.5">
                {[
                  "On-site degaussing & physical punch destruction available across major Indian metros",
                  "Cryptographic erasure with verifiable serialization and NIST 800-88 compliance",
                  "Tamper-evident chain of custody from rack to authorized processing facility",
                  "Legally compliant certificates for ISO 27001, SOC 2 & India DPDP Act compliance",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-leaf-green flex-shrink-0" />
                    <span className="text-sm text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/solutions/itad#data-security"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-brand-deep-blue transition-colors duration-200"
                >
                  Learn About Data Security
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-80 sm:h-96 md:h-[420px] w-full">
                <Image
                  src="/images/data-center-india.jpg"
                  alt="Indian IT systems engineers performing secure server decommissioning and data sanitization in enterprise data center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark/85 backdrop-blur-md border border-white/10 text-white">
                  <div className="text-xs text-brand-leaf-green font-semibold">Tier-4 Facility Standards</div>
                  <div className="text-sm font-bold text-white mt-0.5">Enterprise Server & Storage Sanitization • India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM PREVIEW ===== */}
      <section className="section-padding bg-white" aria-labelledby="platform-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                tag="Platform Preview"
                heading="Built for Business-Scale Asset Management."
                subheading="Our platform is designed to grow with your organization — from a single collection request to enterprise-scale multi-branch programs."
                align="left"
                id="platform-heading"
              />
              <div className="mt-8 space-y-4">
                {[
                  "Track every asset from collection to closure",
                  "Manage multi-site collection programs",
                  "Download documentation and certificates",
                  "Monitor campaign impact and asset outcomes",
                  "Connect with verified processing partners",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-very-light-blue" aria-labelledby="why-heading">
        <div className="container-wide">
          <SectionHeading
            tag="Why Choose Us"
            heading="Designed Around How Assets Should Actually Be Managed."
            id="why-heading"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green mb-4" />
                <h3 className="font-bold text-dark text-base mb-2">{d.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-padding bg-white" aria-labelledby="industries-heading">
        <div className="container-wide">
          <SectionHeading
            tag="Industries"
            heading="For Organizations That Take Asset Management Seriously."
            id="industries-heading"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Banking & Financial Services",
              "IT & ITES",
              "Manufacturing",
              "Healthcare",
              "Retail",
              "Education",
              "Hospitality",
              "Government",
              "Corporate Offices",
              "Data Centres",
              "Telecommunications",
              "SMEs",
            ].map((industry) => (
              <Link
                key={industry}
                href={`/industries/${industry.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-dark hover:border-brand-blue hover:text-brand-blue hover:bg-very-light-blue transition-all duration-200"
              >
                {industry}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all duration-200 text-sm"
            >
              See all industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== AWARENESS TEASER ===== */}
      <section className="section-padding bg-very-light-green" aria-labelledby="awareness-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-green/10 text-brand-green mb-5">
                Awareness
              </span>
              <h2 id="awareness-heading" className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
                Build a Culture of Responsible Technology.
              </h2>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                Responsible disposal starts with informed people. We design awareness programs for businesses, employees, campuses and communities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/awareness"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white text-sm font-semibold rounded-xl hover:bg-[#126b2e] transition-colors duration-200"
                >
                  Explore Awareness Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/awareness"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-green text-brand-green text-sm font-semibold rounded-xl hover:bg-brand-green/5 transition-colors duration-200"
                >
                  Plan a Campaign
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-brand-green/20 shadow-xl h-80 sm:h-96 w-full">
              <Image
                src="/images/corporate-drive-india.jpg"
                alt="Corporate employee e-waste handoff drive in modern Indian IT office campus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg text-dark">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider">
                  Bengaluru Tech Park Drive
                </div>
                <div className="text-sm font-bold text-dark mt-0.5">
                  1,840+ Devices Collected • 100% Certificate of Responsible Handling
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTASection
        heading="Ready to recover more from your retired assets?"
        subheading="Tell us what you have. We'll help you identify the right path — recovery, refurbishment, reuse or responsible recycling."
        primaryCta={{ label: "Request an Asset Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "Plan an Awareness Campaign", href: "/awareness" }}
        variant="blue"
        id="final-cta"
      />
    </>
  );
}
