"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

function FAQItem({ question, answer, id }: FAQItem & { id: string }) {
  const [open, setOpen] = useState(false);
  const contentId = `faq-content-${id}`;
  const triggerId = `faq-trigger-${id}`;

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <button
        id={triggerId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-semibold text-dark text-base leading-snug pr-2">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="px-6 pb-6 text-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ({ items, className }: FAQProps) {
  const baseId = useId();

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <FAQItem key={i} {...item} id={`${baseId}-${i}`} />
      ))}
    </div>
  );
}
