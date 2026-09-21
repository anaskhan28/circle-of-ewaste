import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy | CIRKAL OF E-WASTE", alternates: { canonical: "/legal/cookie-policy" } };

export default function CookiePolicyPage() {
  const year = new Date().getFullYear();
  return (
    <div className="container-tight py-24 md:py-32">
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-dark prose-p:text-muted prose-p:leading-relaxed prose-li:text-muted">
        <h1>Cookie Policy</h1>
        <p className="text-sm text-muted">Last updated: {year}</p>
        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files placed on your device by websites you visit. They are used to make websites work more efficiently and to provide information to website owners.</p>
        <h2>How We Use Cookies</h2>
        <p>This website may use the following types of cookies:</p>
        <ul>
          <li><strong>Essential cookies</strong> — required for the website to function correctly.</li>
          <li><strong>Analytics cookies</strong> — help us understand how visitors use our website (e.g., pages visited, time on site). These are used in aggregate and do not identify individual users.</li>
        </ul>
        <h2>Managing Cookies</h2>
        <p>You can control and delete cookies through your browser settings. Disabling certain cookies may affect the functionality of this website.</p>
        <h2>Third-Party Cookies</h2>
        <p>Analytics services we use may set their own cookies. These are governed by the respective provider&apos;s privacy policies.</p>
        <hr />
        <p className="text-sm text-muted">© {year} CIRKAL OF E-WASTE. All rights reserved.</p>
      </div>
    </div>
  );
}
