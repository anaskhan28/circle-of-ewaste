import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use | CIRKAL OF E-WASTE", alternates: { canonical: "/legal/terms" } };

export default function TermsPage() {
  const year = new Date().getFullYear();
  return (
    <div className="container-tight py-24 md:py-32">
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-dark prose-p:text-muted prose-p:leading-relaxed prose-li:text-muted">
        <h1>Terms of Use</h1>
        <p className="text-sm text-muted">Last updated: {year}</p>
        <h2>Acceptance</h2>
        <p>By accessing this website, you agree to these Terms of Use. If you do not agree, please do not use this website.</p>
        <h2>Use of This Website</h2>
        <p>This website is provided for informational purposes and to facilitate business enquiries. You may not use it for unlawful purposes or in any manner that could harm CIRKAL OF E-WASTE or other users.</p>
        <h2>Intellectual Property</h2>
        <p>All content on this website — including text, graphics, logos and design — is the property of CIRKAL OF E-WASTE or its licensors and may not be reproduced without permission.</p>
        <h2>Links</h2>
        <p>This website may contain links to third-party websites. We are not responsible for the content or practices of linked sites.</p>
        <h2>Limitation of Liability</h2>
        <p>To the extent permitted by law, CIRKAL OF E-WASTE is not liable for any direct, indirect or consequential damages arising from use of this website or reliance on information contained herein.</p>
        <h2>Changes</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of updated terms.</p>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of India.</p>
        <hr />
        <p className="text-sm text-muted">© {year} CIRKAL OF E-WASTE. All rights reserved.</p>
      </div>
    </div>
  );
}
