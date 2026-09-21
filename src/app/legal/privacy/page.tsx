import type { Metadata } from "next";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy | CIRKAL OF E-WASTE",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear();
  return (
    <div className="container-tight py-24 md:py-32">
      <div className="prose prose-lg max-w-none
        prose-headings:font-bold prose-headings:text-dark
        prose-p:text-muted prose-p:leading-relaxed
        prose-li:text-muted
      ">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-muted">Last updated: {year}</p>

        <p>This Privacy Policy describes how CIRKAL OF E-WASTE ({business.brandName}) collects, uses and protects information provided through this website.</p>

        <h2>Information We Collect</h2>
        <p>We collect information that you voluntarily provide through our contact and assessment forms, including:</p>
        <ul>
          <li>Name, company name and designation</li>
          <li>Email address and phone number</li>
          <li>City and location details</li>
          <li>Asset type, quantity and requirement details</li>
          <li>Any additional information you choose to provide</li>
        </ul>
        <p>We also collect standard website analytics data (pages visited, browser type, device type) through analytics tools.</p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your enquiries and assessment requests</li>
          <li>To communicate about services relevant to your stated requirements</li>
          <li>To improve our website and services</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>We do not sell, rent or share your personal information with third parties without your consent, except where required by law or where necessary to fulfil your service request (for example, sharing relevant details with a processing partner to arrange a quotation — with your knowledge).</p>

        <h2>Data Security</h2>
        <p>We take reasonable measures to protect information submitted through this website. No method of electronic transmission is completely secure — we cannot guarantee absolute security.</p>

        <h2>Cookies</h2>
        <p>This website may use cookies for analytics and functionality. See our <a href="/legal/cookie-policy">Cookie Policy</a> for details.</p>

        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of personal information we hold about you by contacting us at <a href={`mailto:${business.email}`}>{business.email}</a>.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy from time to time. Material changes will be reflected in the &ldquo;Last updated&rdquo; date above.</p>

        <h2>Contact</h2>
        <p>For privacy-related queries: <a href={`mailto:${business.email}`}>{business.email}</a></p>

        <hr />
        <p className="text-sm text-muted">
          Information provided on this website is for general awareness and does not constitute legal advice. © {year} CIRKAL OF E-WASTE.
        </p>
      </div>
    </div>
  );
}
