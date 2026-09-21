import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Awareness Programs | CIRKAL OF E-WASTE", description: "E-waste awareness programs, collection drives and sustainability workshops for businesses and campuses.", alternates: { canonical: "/solutions/awareness" } };

export default function SolutionsAwarenessPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-green to-brand-blue text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-white/50 text-sm">Solutions</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80 text-sm">Awareness Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Awareness Programs That Create Real Change.</h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">E-waste awareness sessions, collection drives, sustainability workshops and campus programs — designed to build lasting responsible technology culture.</p>
            <Link href="/awareness" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Explore Full Program Offering <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading tag="Programs" heading="What We Offer." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "E-Waste Awareness Sessions", desc: "Structured sessions for employees — what e-waste is, why it matters, what responsible disposal looks like." },
              { title: "Data Security Before Disposal", desc: "Educating employees on the data risks of improperly retired hardware." },
              { title: "Corporate Collection Drives", desc: "Organized in-office events where employees contribute old devices for responsible disposal." },
              { title: "Campus Programs", desc: "E-waste awareness for educational institutions — students, faculty and staff." },
              { title: "Sustainability Workshops", desc: "Broader sustainability programs incorporating responsible technology as a component." },
              { title: "Campaign Impact Reporting", desc: "Participation tracking, asset outcomes and documented impact for each campaign." },
            ].map((p) => (
              <div key={p.title} className="card-base p-6">
                <div className="w-6 h-1 bg-brand-green rounded-full mb-4" />
                <h3 className="font-bold text-dark text-base mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        heading="Ready to Build Your Awareness Program?"
        subheading="Tell us your organization, audience and objective — we'll design a program that fits."
        primaryCta={{ label: "Plan a Campaign", href: "/contact#assessment" }}
        secondaryCta={{ label: "Explore All Programs", href: "/awareness" }}
        variant="blue"
      />
    </>
  );
}
