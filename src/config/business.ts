/**
 * CONFIGURABLE BUSINESS DETAILS
 *
 * Replace placeholder values with real business information before publishing.
 * These values are used across Contact, Footer, About, and Legal pages.
 */

export const business = {
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
} as const;
