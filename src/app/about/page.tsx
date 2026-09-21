import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About | CIRKAL OF E-WASTE",
  description:
    "CIRKAL OF E-WASTE is being built around one principle: retirement should be the beginning of an asset's next journey, not the end.",
  alternates: { canonical: "/about" },
};

const BUSINESS_MODEL = [
  { title: "IT Asset Disposition (ITAD)", desc: "End-to-end management of retired IT equipment — asset tracking, data security, value recovery and recycling." },
  { title: "Asset Recovery", desc: "Identify and recover value from working and near-working equipment through reuse, refurbishment and resale channels." },
  { title: "Refurbishment", desc: "Extend the functional life of technology through assessment, grading, repair and redeployment." },
  { title: "Responsible Recycling", desc: "Match end-of-life material to appropriately registered processing and recycling partners." },
  { title: "Corporate Waste Programs", desc: "Structured multi-site programs for enterprises, banks and large organizations." },
  { title: "Awareness Campaigns", desc: "E-waste awareness, collection drives and sustainability programs for employees and campuses." },
  { title: "Partner Network", desc: "A curated network of verified recyclers, refurbishers and recovery partners for structured channelization." },
  { title: "Enterprise Platform", desc: "A digital platform to manage asset programs, track outcomes and generate impact reports — scalable to SaaS." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building a More Circular Way to Retire Business Assets.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              CIRKAL OF E-WASTE is built around one principle: retirement should be the beginning of an asset&apos;s next journey, not the end.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-very-light-blue text-brand-blue mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                The Problem We Set Out to Solve.
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Businesses routinely generate retired technology — laptops replaced after a refresh cycle, servers decommissioned after an upgrade, networking equipment swapped out as needs evolve. Most of this equipment is treated as waste from the moment it stops being used.
                </p>
                <p>
                  But retired doesn&apos;t always mean worthless. A working laptop from last year&apos;s refresh may still have significant market value. A non-working device may yield recoverable components. A server drive may hold data that needs to be destroyed before the device leaves the building.
                </p>
                <p>
                  The challenge is that most businesses don&apos;t have a structured process for evaluating and routing retired assets. They don&apos;t know what they have, what it&apos;s worth, whether the recycler they call is legitimate, or what happened to each asset after collection.
                </p>
                <p>
                  We are building CIRKAL OF E-WASTE to change that — providing the process, platform and partner network to help businesses make better decisions about what happens to their retired assets.
                </p>
              </div>
            </div>

            {/* Principle & Leadership */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-72 w-full">
                <Image
                  src="/images/indian-leadership-team.jpg"
                  alt="CIRKAL OF E-WASTE leadership and enterprise sustainability executives"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-brand-leaf-green">B2B Circular Leadership • India</div>
                  <div className="text-sm font-bold mt-0.5">Empowering Indian Enterprises Towards Zero-Landfill ITAD</div>
                </div>
              </div>

              <div className="bg-gradient-hero rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">The Core Principle</h3>
                <blockquote className="text-xl font-light leading-relaxed text-white/90 border-l-4 border-brand-leaf-green pl-5">
                  &ldquo;Retirement should be the beginning of an asset&apos;s next journey, not the end.&rdquo;
                </blockquote>
              </div>

              <div className="card-base p-7">
                <h3 className="font-bold text-dark text-lg mb-5">What This Means in Practice</h3>
                <div className="space-y-3">
                  {[
                    "Assess recovery potential before treating assets as waste",
                    "Secure data before any asset leaves controlled custody",
                    "Route each asset to its best-possible next step",
                    "Work only with processing partners that can be verified",
                    "Document what happened to every asset",
                    "Help businesses close the loop with a complete record",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-bold">
                        {i + 1}
                      </div>
                      <span className="text-sm text-dark">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Configurable credentials box */}
              <div className="card-base p-7 bg-very-light-blue border-brand-blue/10">
                <h3 className="font-bold text-dark text-sm uppercase tracking-wider mb-4">Business Details</h3>
                <div className="space-y-2 text-sm text-muted">
                  <p>Legal entity, registration, certifications and operational details will be published here once finalized.</p>
                  <p>Contact us for current business details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business model */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <SectionHeading
            tag="Business Model"
            heading="How We Create Value."
            subheading="We are building a multi-modal circular economy platform — combining services, network and technology."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUSINESS_MODEL.map((m, i) => (
              <div key={i} className="card-base p-6 flex flex-col gap-3">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green" />
                <h3 className="font-bold text-dark text-base">{m.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Where We Are Headed.</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Our long-term vision is to build India&apos;s premier circular-economy platform for business assets — connecting organizations with structured disposition programs, verified partners and technology that closes the loop between retirement and recovery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Platform", desc: "A digital asset management platform — from collection requests to closure reports — accessible to businesses of all sizes." },
                { title: "Network", desc: "A verified partner network connecting businesses with recyclers, refurbishers and recovery processors matched to their material categories." },
                { title: "Awareness", desc: "A campaign platform helping organizations build and track employee and community e-waste awareness programs." },
              ].map((v) => (
                <div key={v.title} className="card-base p-6">
                  <div className="w-6 h-1 rounded-full bg-brand-blue mb-4" />
                  <h3 className="font-bold text-dark text-base mb-2">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Work With Us."
        subheading="Whether you have assets to retire or are interested in working with us as a partner — get in touch."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
