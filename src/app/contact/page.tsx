import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { business } from "@/config/business";
import { ContactForm } from "@/components/ui/ContactForm";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Contact | CIRKAL OF E-WASTE",
  description:
    "Get in touch with CIRKAL OF E-WASTE. Request an asset assessment, plan an awareness campaign, or start a conversation about your organization's requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let&apos;s Find the Next Life for Your Assets.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Tell us what you have. Whether it&apos;s retiring IT equipment, a corporate e-waste program, or an awareness campaign — we&apos;ll help identify the right approach.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment form */}
      <section id="assessment" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-3">Request an Asset Assessment</h2>
              <p className="text-muted mb-8 leading-relaxed">
                Share details about your assets and requirements. We&apos;ll review and get back to you with a structured approach.
              </p>
              <LeadForm id="asset-assessment-form" />
            </div>

            {/* Business details + General contact */}
            <div className="space-y-8">
              {/* Contact info */}
              <div className="card-base p-8">
                <h3 className="font-bold text-dark text-xl mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-very-light-blue flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-1">Email</p>
                      <a href={`mailto:${business.email}`} className="text-dark font-medium hover:text-brand-blue transition-colors">
                        {business.email}
                      </a>
                    </div>
                  </div>

                  {Boolean(business.phone && !business.phone.includes("CONFIGURABLE")) && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-very-light-blue flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-1">Phone</p>
                        <a href={`tel:${business.phone}`} className="text-dark font-medium hover:text-brand-blue transition-colors">
                          {business.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-very-light-blue flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-1">Business Hours</p>
                      <p className="text-dark font-medium">{business.businessHours}</p>
                    </div>
                  </div>

                  {Boolean(business.address.line1 && !business.address.line1.includes("CONFIGURABLE")) && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-very-light-blue flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-1">Address</p>
                        <div className="text-dark font-medium text-sm">
                          <p>{business.address.line1}</p>
                          {business.address.line2 && <p>{business.address.line2}</p>}
                          <p>{business.address.city}, {business.address.state} — {business.address.pin}</p>
                          <p>{business.address.country}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* General contact form */}
              <div className="card-base p-8">
                <h3 className="font-bold text-dark text-xl mb-2">General Enquiry</h3>
                <p className="text-sm text-muted mb-6">Have a question that doesn&apos;t fit the assessment form? Send us a message.</p>
                <ContactForm id="general-contact-form" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
