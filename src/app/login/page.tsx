import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { CirkalLogo } from "@/components/brand/CirkalLogo";

export const metadata: Metadata = {
  title: "Login | CIRKAL OF E-WASTE",
  description: "Sign in to your CIRKAL OF E-WASTE business account.",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <CirkalLogo scrolled={true} size="lg" />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-dark">Sign in to CIRKAL OF E-WASTE</h1>
            <p className="text-muted text-sm mt-2">Access your business dashboard</p>
          </div>

          {/* Coming soon notice */}
          <div className="bg-very-light-blue rounded-2xl p-6 border border-brand-blue/10 mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-dark text-sm">Platform Coming Soon</p>
                <p className="text-sm text-muted mt-1">
                  The CIRKAL OF E-WASTE business dashboard is currently in development. Contact us to be notified when access is available.
                </p>
              </div>
            </div>
          </div>

          {/* Form scaffold (disabled) */}
          <div className="space-y-4 opacity-50 pointer-events-none">
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">Work Email</label>
              <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm" disabled />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm" disabled />
            </div>
            <button disabled className="w-full py-3 bg-brand-blue text-white text-sm font-semibold rounded-xl opacity-50 cursor-not-allowed">
              Sign In
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:underline">
              Contact us for access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          <Link href="/" className="hover:text-brand-blue transition-colors">← Back to CIRKAL OF E-WASTE</Link>
        </p>
      </div>
    </div>
  );
}
