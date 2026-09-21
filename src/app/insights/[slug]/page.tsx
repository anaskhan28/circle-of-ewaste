import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/jsonld";
import { CTASection } from "@/components/ui/CTASection";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { seo } from "@/config/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
      url: `/insights/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.description,
    url: `/insights/${slug}`,
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    author: article.author,
  });

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: article.title, href: `/insights/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Header */}
      <section className="bg-gradient-hero text-white py-20 md:py-28">
        <div className="container-tight">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-3.5 h-3.5 text-brand-leaf-green" />
            <span className="text-brand-leaf-green text-xs font-semibold uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {article.title}
          </h1>

          <p className="mt-5 text-xl text-white/70 leading-relaxed max-w-3xl">
            {article.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {format(new Date(article.publishDate), "d MMMM yyyy")}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readingTime} min read
            </span>
            <span>{article.author}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3 prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-dark prose-headings:tracking-tight
              prose-p:text-muted prose-p:leading-relaxed
              prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
              prose-strong:text-dark
              prose-li:text-muted
              prose-blockquote:border-l-4 prose-blockquote:border-brand-blue prose-blockquote:pl-5 prose-blockquote:text-muted prose-blockquote:italic
              prose-hr:border-gray-100
            ">
              <MDXRemote source={article.content} />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Tags */}
                {article.tags.length > 0 && (
                  <div className="card-base p-5">
                    <h3 className="font-bold text-dark text-sm uppercase tracking-wider mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-very-light-blue text-brand-blue text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Updated date */}
                {article.updatedDate !== article.publishDate && (
                  <div className="card-base p-5">
                    <p className="text-xs text-muted">
                      <span className="font-semibold text-dark">Last updated:</span>{" "}
                      {format(new Date(article.updatedDate), "d MMMM yyyy")}
                    </p>
                  </div>
                )}

                {/* Assessment CTA */}
                <div className="bg-gradient-hero rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-base mb-2">Have Assets to Retire?</h3>
                  <p className="text-sm text-white/70 mb-4">Request an asset assessment and we&apos;ll help identify the right approach.</p>
                  <Link
                    href="/contact#assessment"
                    className="inline-block w-full text-center px-5 py-3 bg-white text-brand-blue text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Request Assessment
                  </Link>
                </div>

                {/* Disclaimer */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-xs text-muted leading-relaxed">
                    This article is for general informational purposes. Information should be verified against current applicable regulations. CIRKAL does not provide regulatory or legal advice.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-padding bg-light-bg">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-dark mb-8">More in {article.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <ArticleCard key={rel.slug} {...rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Ready to Take Action on Your Assets?"
        subheading="From a single question to a full program — get in touch."
        primaryCta={{ label: "Request an Assessment", href: "/contact#assessment" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
