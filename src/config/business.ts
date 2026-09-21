/**
 * CONFIGURABLE BUSINESS DETAILS
 *
 * Replace placeholder values with real business information before publishing.
 * These values are used across Contact, Footer, About, and Legal pages.
 */

export interface BusinessConfig {
  legalName: string;
  brandName: string;
  email: string;
  phone: string;
  businessHours: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pin: string;
    country: string;
  };
  gstin: string;
  pan: string;
  cin: string;
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
  domains: readonly string[];
  primaryDomain: string;
  founded: string | null;
}

export const business: BusinessConfig = {
  // Legal / registered entity name
  legalName: "[LEGAL ENTITY NAME — CONFIGURABLE]",

  // Display / brand name
  brandName: "CIRKAL OF E-WASTE",

  // Contact details — replace with real values
  email: "hello@cirkalofewaste.com",
  phone: "+91 8928963329",
  businessHours: "Monday to Saturday, 9:00 AM – 6:00 PM IST",

  // Physical address
  address: {
    line1: "[ADDRESS LINE 1 — CONFIGURABLE]",
    line2: "[ADDRESS LINE 2 — CONFIGURABLE]",
    city: "[CITY — CONFIGURABLE]",
    state: "[STATE — CONFIGURABLE]",
    pin: "[PIN — CONFIGURABLE]",
    country: "India",
  },

  // Registration / statutory details
  gstin: "[GSTIN — CONFIGURABLE]",
  pan: "[PAN — CONFIGURABLE]",
  cin: "[CIN / PROPRIETORSHIP REGISTRATION — CONFIGURABLE]",

  // Social media — leave as empty string if account does not exist
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: "",
  },

  // Domains
  domains: ["cirkalofewaste.com", "cirkalofewaste.in"],
  primaryDomain: "cirkalofewaste.com",

  // Founding year — set when ready to publish
  founded: null as string | null,
};
