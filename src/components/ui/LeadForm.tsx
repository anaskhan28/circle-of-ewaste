"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

const REQUIREMENT_OPTIONS = [
  "IT Asset Disposition (ITAD)",
  "Asset Buyback / Recovery",
  "Refurbishment",
  "E-Waste Recycling",
  "Data Destruction",
  "Corporate Waste Program",
  "Awareness Campaign",
  "Multi-Branch / Multi-Site Program",
  "Other",
];

const ASSET_TYPE_OPTIONS = [
  "Laptops / Desktops",
  "Servers",
  "Networking Equipment",
  "Monitors / Displays",
  "Printers",
  "Storage Devices / HDDs / SSDs",
  "Telecom Equipment",
  "Data Centre Equipment",
  "Mixed IT Equipment",
  "Consumer Electronics",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  designation: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  city: z.string().min(2, "City is required"),
  assetType: z.string().min(1, "Please select asset type"),
  quantity: z.string().optional(),
  condition: z.string().optional(),
  requirement: z.string().min(1, "Please select requirement type"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  id?: string;
  className?: string;
  compact?: boolean;
}

export function LeadForm({ id = "lead-form", className, compact = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber] = useState(
    () => `CIRKAL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Future: POST to API route /api/assessment
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Assessment request:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center text-center gap-5 py-12", className)}>
        <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-brand-green" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-dark">Request Received</h3>
          <p className="text-muted mt-2 text-sm">
            Thank you. Your asset assessment request has been received.
          </p>
        </div>
        <div className="bg-very-light-blue rounded-xl px-6 py-4 border border-brand-blue/10">
          <p className="text-xs text-muted uppercase tracking-wider font-semibold">Reference Number</p>
          <p className="text-lg font-bold text-brand-blue mt-1">{refNumber}</p>
        </div>
        <p className="text-xs text-muted max-w-sm">
          We will review your request and get back to you. Please quote the reference number in any follow-up communication.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
      aria-label="Asset assessment request form"
      noValidate
    >
      {/* Name + Company */}
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <Field label="Full Name" error={errors.name?.message} required>
          <input
            {...register("name")}
            id="form-name"
            type="text"
            placeholder="Your name"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Company" error={errors.company?.message} required>
          <input
            {...register("company")}
            id="form-company"
            type="text"
            placeholder="Company name"
            className={inputClass(!!errors.company)}
          />
        </Field>
      </div>

      {/* Designation */}
      {!compact && (
        <Field label="Designation">
          <input
            {...register("designation")}
            id="form-designation"
            type="text"
            placeholder="Your role or designation"
            className={inputClass(false)}
          />
        </Field>
      )}

      {/* Email + Phone */}
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <Field label="Email" error={errors.email?.message} required>
          <input
            {...register("email")}
            id="form-email"
            type="email"
            placeholder="Work email"
            className={inputClass(!!errors.email)}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message} required>
          <input
            {...register("phone")}
            id="form-phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={inputClass(!!errors.phone)}
          />
        </Field>
      </div>

      {/* City */}
      <Field label="City" error={errors.city?.message} required>
        <input
          {...register("city")}
          id="form-city"
          type="text"
          placeholder="City where assets are located"
          className={inputClass(!!errors.city)}
        />
      </Field>

      {/* Asset type + Requirement */}
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <Field label="Asset Type" error={errors.assetType?.message} required>
          <select
            {...register("assetType")}
            id="form-asset-type"
            className={inputClass(!!errors.assetType)}
          >
            <option value="">Select asset type</option>
            {ASSET_TYPE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </Field>
        <Field label="Requirement" error={errors.requirement?.message} required>
          <select
            {...register("requirement")}
            id="form-requirement"
            className={inputClass(!!errors.requirement)}
          >
            <option value="">Select requirement</option>
            {REQUIREMENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Quantity + Condition */}
      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Approximate Quantity">
            <input
              {...register("quantity")}
              id="form-quantity"
              type="text"
              placeholder="e.g., 50 units, 200 laptops"
              className={inputClass(false)}
            />
          </Field>
          <Field label="Condition">
            <select {...register("condition")} id="form-condition" className={inputClass(false)}>
              <option value="">Select condition</option>
              <option>Working / Functional</option>
              <option>Partially working</option>
              <option>Not working / Damaged</option>
              <option>Mixed / Unknown</option>
            </select>
          </Field>
        </div>
      )}

      {/* Message */}
      {!compact && (
        <Field label="Additional Information">
          <textarea
            {...register("message")}
            id="form-message"
            rows={4}
            placeholder="Any additional details about your assets or requirements..."
            className={cn(inputClass(false), "resize-none")}
          />
        </Field>
      )}

      {/* File upload hint */}
      {!compact && (
        <div className="flex items-start gap-3 p-4 bg-very-light-blue rounded-xl border border-brand-blue/10">
          <Upload className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted">
            <span className="font-semibold text-dark">Have an asset list?</span>{" "}
            After submitting this form, our team will reach out to collect your asset inventory (Excel, CSV, PDF or photos accepted).
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        id="form-submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white text-base font-semibold rounded-xl hover:bg-brand-deep-blue transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-blue"
      >
        {isSubmitting ? "Submitting..." : "Request an Asset Assessment"}
        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
      </button>

      <p className="text-center text-xs text-muted">
        By submitting, you agree to our{" "}
        <a href="/legal/privacy" className="underline hover:text-brand-blue">Privacy Policy</a>.
        We will not share your information with third parties without consent.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-dark">
        {label}
        {required && <span className="text-brand-blue ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-dark placeholder:text-gray-400 bg-white transition-all duration-200 focus:outline-none focus:ring-2",
    hasError
      ? "border-red-300 focus:ring-red-200"
      : "border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20"
  );
}
