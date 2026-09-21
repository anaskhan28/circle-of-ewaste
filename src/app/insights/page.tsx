import type { Metadata } from "next";
import { getAllArticles, CATEGORIES } from "@/lib/mdx";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Insights | CIRKAL OF E-WASTE",
  description:
    "Articles on IT Asset Disposition, E-Waste Management, Data Security, Refurbishment, Circular Economy and Corporate Sustainability.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const articles = getAllArticles();
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <section className="bg-gradient-hero text-white py-28 md:py-36">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Insights on Asset Recovery and Responsible Technology.
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Articles on ITAD, e-waste management, data security, refurbishment, circular economy and corporate sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-brand-blue text-white text-sm font-semibold">
              All
            </span>
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-dark hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted text-lg">Articles are being prepared. Check back soon.</p>
            </div>
          ) : (
            <>
              {featured.length > 0 && (
                <div className="mb-14">
                  <SectionHeading tag="Featured" heading="Featured Articles." align="left" headingSize="md" />
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((article) => (
                      <ArticleCard
                        key={article.slug}
                        {...article}
                        featured
                      />
                    ))}
                  </div>
                </div>
              )}

              {rest.length > 0 && (
                <div>
                  <SectionHeading tag="Latest" heading="All Articles." align="left" headingSize="md" />
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((article) => (
                      <ArticleCard key={article.slug} {...article} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTASection
        heading="Have an Asset Management Question?"
        subheading="Beyond articles — talk to us about your specific requirements."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
