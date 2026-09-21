import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = { title: "Asset Recovery | CIRKAL OF E-WASTE", description: "Structured IT asset recovery — identify value before disposal, route to buyback, refurbishment or recycling.", alternates: { canonical: "/solutions/asset-recovery" } };

export default function AssetRecoveryPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">Asset Recovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Recover More, Dispose Less.</h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">Structured asset recovery identifies what your retiring equipment is worth — before it reaches recycling.</p>
            <Link href="/contact#assessment" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Start an Asset Assessment <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading tag="Asset Recovery" heading="What We Assess." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Functional Status", desc: "Is the device working? Can it be powered on and tested? Does it function as intended?" },
              { title: "Condition", desc: "What is the physical condition? What cosmetic or component damage exists? Affects grade and recovery value." },
              { title: "Age and Spec", desc: "Model year, processing generation, RAM, storage — determines market value for working devices." },
              { title: "Data-Bearing Status", desc: "Does the device hold data? What type of storage media? Governs the sanitization requirement." },
              { title: "Market Value", desc: "For working or refurbishable devices — current secondhand market value in the applicable segment." },
              { title: "Recovery Pathway", desc: "Based on assessment: reuse, refurbishment, buyback, parts recovery or recycling." },
            ].map((c) => (
              <div key={c.title} className="card-base p-6">
                <div className="w-6 h-1 bg-brand-blue rounded-full mb-4" />
                <h3 className="font-bold text-dark text-base mb-2">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        heading="Find Out What Your Assets Are Worth."
        subheading="Submit an inventory and we'll identify recovery potential for each category."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "Asset Value Recovery", href: "/asset-value-recovery" }}
        variant="blue"
      />
    </>
  );
}
