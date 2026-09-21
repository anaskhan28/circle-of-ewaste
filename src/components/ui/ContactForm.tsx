"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  city: z.string().min(2, "City is required"),
  requirement: z.string().optional(),
  message: z.string().min(10, "Please provide some details about your enquiry"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  id?: string;
  className?: string;
}

export function ContactForm({ id = "contact-form", className }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center text-center gap-4 py-10", className)}>
        <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-brand-green" />
        </div>
        <h3 className="text-lg font-bold text-dark">Message Sent</h3>
        <p className="text-muted text-sm max-w-sm">
          Thank you for reaching out. We will get back to you at the earliest.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
      aria-label="Contact form"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" error={errors.name?.message} required>
          <input {...register("name")} id="contact-name" type="text" placeholder="Your name" className={inputClass(!!errors.name)} />
        </Field>
        <Field label="Company" error={errors.company?.message} required>
          <input {...register("company")} id="contact-company" type="text" placeholder="Company name" className={inputClass(!!errors.company)} />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email" error={errors.email?.message} required>
          <input {...register("email")} id="contact-email" type="email" placeholder="Work email" className={inputClass(!!errors.email)} />
        </Field>
        <Field label="Phone" error={errors.phone?.message} required>
          <input {...register("phone")} id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass(!!errors.phone)} />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="City" error={errors.city?.message} required>
          <input {...register("city")} id="contact-city" type="text" placeholder="City" className={inputClass(!!errors.city)} />
        </Field>
        <Field label="Requirement">
          <select {...register("requirement")} id="contact-requirement" className={inputClass(false)}>
            <option value="">Select topic</option>
            <option>General Enquiry</option>
            <option>Asset Assessment</option>
            <option>Partnership / Network</option>
            <option>Awareness Campaign</option>
            <option>Press / Media</option>
            <option>Other</option>
          </select>
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message} required>
        <textarea {...register("message")} id="contact-message" rows={5} placeholder="Tell us what you have in mind..." className={cn(inputClass(!!errors.message), "resize-none")} />
      </Field>
      <button
        type="submit"
        id="contact-submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white text-base font-semibold rounded-xl hover:bg-brand-deep-blue transition-all duration-200 disabled:opacity-70 shadow-blue"
      >
        {isSubmitting ? "Sending..." : "Start a Conversation"}
        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
      </button>
    </form>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-dark">
        {label}
        {required && <span className="text-brand-blue ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-dark placeholder:text-gray-400 bg-white transition-all duration-200 focus:outline-none focus:ring-2",
    hasError ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20"
  );
}
