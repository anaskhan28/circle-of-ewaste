import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "blue" | "dark" | "light";
  id?: string;
}

export function CTASection({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  variant = "blue",
  id,
}: CTASectionProps) {
  const variants = {
    blue: "bg-gradient-hero text-white",
    dark: "bg-dark text-white",
    light: "bg-very-light-blue text-dark",
  };

  const primaryBtn = {
    blue: "bg-white text-brand-blue hover:bg-gray-100",
    dark: "bg-brand-blue text-white hover:bg-brand-deep-blue",
    light: "bg-brand-blue text-white hover:bg-brand-deep-blue",
  };

  const secondaryBtn = {
    blue: "border-2 border-white/30 text-white hover:bg-white/10",
    dark: "border-2 border-white/20 text-white hover:bg-white/10",
    light: "border-2 border-brand-blue text-brand-blue hover:bg-very-light-blue",
  };

  return (
    <section id={id} className={cn("py-16 sm:py-20", variants[variant])}>
      <div className="container-wide text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
          {heading}
        </h2>
        {subheading && (
          <p
            className={cn(
              "mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto",
              variant === "light" ? "text-muted" : "text-white/70"
            )}
          >
            {subheading}
          </p>
        )}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Link
            href={primaryCta.href}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-base font-semibold rounded-xl transition-all duration-200 text-center",
              primaryBtn[variant]
            )}
          >
            {primaryCta.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-base font-semibold rounded-xl transition-all duration-200 text-center",
                secondaryBtn[variant]
              )}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
