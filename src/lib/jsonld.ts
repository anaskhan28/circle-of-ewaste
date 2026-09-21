import { seo } from "@/config/seo";
import { business } from "@/config/business";

interface JsonLdOrganizationProps {
  name?: string;
  url?: string;
  description?: string;
}

export function generateOrganizationSchema(
  props: JsonLdOrganizationProps = {}
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: props.name || seo.siteName,
    url: props.url || seo.siteUrl,
    description: props.description || seo.defaultDescription,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      business.social.linkedin,
      business.social.twitter,
    ].filter(Boolean),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    url: seo.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${seo.siteUrl}/insights?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${seo.siteUrl}${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: seo.siteName,
      url: seo.siteUrl,
    },
    image: image || seo.ogImage,
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seo.siteUrl}${item.href}`,
    })),
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${seo.siteUrl}${url}`,
    provider: {
      "@type": "Organization",
      name: seo.siteName,
    },
    areaServed: "IN",
  };
}
