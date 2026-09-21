"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { CirkalLogo } from "@/components/brand/CirkalLogo";
import Image from "next/image";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300",
          scrolled && "shadow-md"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center" aria-label="CIRKAL OF E-WASTE — Home">
              <Image
                src="/logo.png"
                alt="CIRKAL OF E-WASTE"
                width={160}
                height={50}
                className="h-15 sm:h-18 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navigation.main.map((item) =>
                "children" in item && item.children ? (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setSolutionsOpen(false);
                      }}
                      aria-expanded={solutionsOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                        isActive(item.href)
                          ? "text-brand-blue font-semibold bg-very-light-blue"
                          : "text-gray-700 hover:text-brand-blue hover:bg-very-light-blue"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-gray-500 transition-transform duration-200",
                          solutionsOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {solutionsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white rounded-2xl shadow-xl border border-gray-100 p-5 grid grid-cols-2 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-very-light-blue transition-colors duration-200 group"
                          >
                            <span className="text-sm font-semibold text-dark group-hover:text-brand-blue transition-colors">
                              {child.label}
                            </span>
                            <span className="text-xs text-muted leading-relaxed">
                              {child.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      isActive(item.href)
                        ? "text-brand-blue font-semibold bg-very-light-blue"
                        : "text-gray-700 hover:text-brand-blue hover:bg-very-light-blue"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={navigation.cta.primary.href}
                id="nav-cta-assessment"
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-brand-deep-blue transition-colors duration-200 shadow-blue"
              >
                {navigation.cta.primary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="CIRKAL OF E-WASTE"
                  width={140}
                  height={45}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-1" aria-label="Mobile navigation">
              {navigation.main.map((item) => (
                <div key={item.label}>
                  {"children" in item && item.children ? (
                    <>
                      <p className="px-3 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider mt-3 mb-1">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200",
                            isActive(child.href)
                              ? "bg-very-light-blue text-brand-blue font-semibold"
                              : "text-gray-700 hover:bg-gray-50 hover:text-brand-blue"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200",
                        isActive(item.href)
                          ? "bg-very-light-blue text-brand-blue"
                          : "text-gray-700 hover:bg-gray-50 hover:text-brand-blue"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-4 sm:p-5 border-t border-gray-100">
              <Link
                href={navigation.cta.primary.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-brand-deep-blue transition-colors duration-200 shadow-md"
              >
                {navigation.cta.primary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
