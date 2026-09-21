"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/config/navigation";
import { business } from "@/config/business";
import { CirkalLogo } from "@/components/brand/CirkalLogo";

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <footer className="bg-dark text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <CirkalLogo variant="light" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              We help businesses manage the complete journey of retired technology — from assessment and data security to value recovery, refurbishment and responsible recycling.
            </p>
            <p className="mt-4 text-gray-500 text-xs font-medium uppercase tracking-wider">
              Technology • Asset Recovery • Circularity
            </p>
            <div className="mt-6 flex flex-col gap-1">
              {business.domains.map((domain) => (
                <a
                  key={domain}
                  href={`https://${domain}`}
                  className="text-xs text-gray-500 hover:text-brand-leaf-green transition-colors duration-200"
                >
                  {domain}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {navigation.footer.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {navigation.footer.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {navigation.footer.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact mini */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Contact
              </h3>
              <a
                href={`mailto:${business.email}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
              >
                {business.email}
              </a>
              {business.phone !== "[PHONE — CONFIGURABLE]" && (
                <a
                  href={`tel:${business.phone}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block mt-1"
                >
                  {business.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {year} CIRKAL OF E-WASTE. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 text-center">
            Information provided on this website is for general awareness and does not constitute regulatory or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
