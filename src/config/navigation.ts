export const navigation = {
  main: [
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        {
          label: "IT Asset Disposition",
          href: "/solutions/itad",
          description: "End-to-end ITAD with data security and value recovery",
        },
        {
          label: "Asset Recovery",
          href: "/solutions/asset-recovery",
          description: "Maximize recoverable value from retired assets",
        },
        {
          label: "Refurbishment",
          href: "/solutions/refurbishment",
          description: "Extend the life of reusable technology",
        },
        {
          label: "E-Waste Management",
          href: "/solutions/e-waste",
          description: "Structured collection, channelization and documentation",
        },
        {
          label: "Responsible Recycling",
          href: "/solutions/responsible-recycling",
          description: "Verified partner matching and traceable recycling",
        },
        {
          label: "Resource Recovery",
          href: "/solutions/resource-recovery",
          description: "Broader material categories and recovery streams",
        },
        {
          label: "Corporate Programs",
          href: "/solutions/corporate-programs",
          description: "Multi-site programs for enterprises and banks",
        },
        {
          label: "Awareness Programs",
          href: "/solutions/awareness",
          description: "Employee and campus e-waste awareness campaigns",
        },
      ],
    },
    {
      label: "Industries",
      href: "/industries",
    },
    {
      label: "How It Works",
      href: "/how-it-works",
    },
    {
      label: "Network",
      href: "/network",
    },
    {
      label: "Awareness",
      href: "/awareness",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  cta: {
    primary: {
      label: "Request Assessment",
      href: "/contact#assessment",
    },
    secondary: {
      label: "Explore Solutions",
      href: "/solutions",
    },
  },
  footer: {
    solutions: [
      { label: "IT Asset Disposition", href: "/solutions/itad" },
      { label: "Asset Recovery", href: "/solutions/asset-recovery" },
      { label: "Refurbishment", href: "/solutions/refurbishment" },
      { label: "E-Waste Management", href: "/solutions/e-waste" },
      { label: "Responsible Recycling", href: "/solutions/responsible-recycling" },
      { label: "Awareness Campaigns", href: "/solutions/awareness" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Network", href: "/network" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
    ],
  },
} as const;
