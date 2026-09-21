import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | CIRKAL OF E-WASTE",
  alternates: { canonical: "/legal/disclaimer" },
};

export default function DisclaimerPage() {
  const year = new Date().getFullYear();
  return (
    <div className="container-tight py-24 md:py-32">
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-dark prose-p:text-muted prose-p:leading-relaxed prose-li:text-muted">
        <h1>Disclaimer</h1>
        <p className="text-sm text-muted">Last updated: {year}</p>

        <h2>General Information Only</h2>
        <p>Information provided on this website is for general awareness and informational purposes only. It does not constitute legal, regulatory, financial or professional advice.</p>

        <h2>No Regulatory Claims</h2>
        <p>CIRKAL OF E-WASTE does not claim CPCB authorization for recycling, ISO certification, government approval, or any other specific regulatory status unless explicitly stated with supporting documentation. Where we work with registered or authorized processing partners, this is stated explicitly.</p>

        <h2>Regulatory Information</h2>
        <p>Any regulatory information on this website — including information about E-Waste Management Rules, extended producer responsibility or other applicable laws — is provided for general awareness only and may not reflect the most current rules or amendments. Readers should verify regulatory requirements independently from authoritative sources.</p>

        <h2>Illustrative Content</h2>
        <p>Any dashboard previews, sample reports, illustrative partner listings or example metrics on this website are clearly marked as illustrative or demo content. They do not represent actual CIRKAL OF E-WASTE statistics, clients, partners, certifications or operational capacity.</p>

        <h2>No Guarantee of Outcomes</h2>
        <p>Asset recovery potential, refurbishment outcomes and recycling results depend on equipment type, condition, age and market conditions. No guarantee of specific outcomes is implied by content on this website.</p>

        <h2>Accuracy</h2>
        <p>We endeavour to keep information on this website accurate and current. However, we make no warranty as to the accuracy, completeness or currency of the information provided.</p>

        <hr />
        <p className="text-sm text-muted">© {year} CIRKAL OF E-WASTE. All rights reserved.</p>
      </div>
    </div>
  );
}
