import { business } from "./business";

const getSiteUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return `https://${business.primaryDomain}`;
};

const resolvedSiteUrl = getSiteUrl();

export const seo = {
  siteName: "CIRKAL OF E-WASTE",
  defaultTitle: "CIRKAL OF E-WASTE | IT Asset Disposition & E-Waste Management India",
  titleTemplate: "%s | CIRKAL OF E-WASTE",
  defaultDescription:
    "CIRKAL OF E-WASTE helps businesses manage retired IT assets and recover maximum value through ITAD, data security, refurbishment, reuse and responsible recycling. India's B2B circular economy platform.",
  siteUrl: resolvedSiteUrl,
  ogImage: `${resolvedSiteUrl}/og-default.jpg`,
  twitterHandle: business.social.twitter || undefined,
  locale: "en_IN",
  keywords: [
    "IT Asset Disposition India",
    "ITAD India",
    "IT Asset Disposal",
    "Corporate IT Asset Disposal",
    "IT Asset Recovery",
    "Data Destruction India",
    "E-Waste Management India",
    "Corporate E-Waste Recycling",
    "E-Waste Collection",
    "IT Equipment Recycling",
    "Laptop Buyback for Businesses",
    "Server Disposal",
    "Data Centre Decommissioning",
    "Asset Recovery",
    "Refurbishment",
    "Responsible Recycling",
    "Circular Economy",
    "Corporate Sustainability",
    "E-Waste Awareness Campaign",
    "Verified E-Waste Recycler",
  ],
};
