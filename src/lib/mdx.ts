import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  author: string;
  publishDate: string;
  updatedDate: string;
  category: string;
  readingTime: number;
  tags: string[];
  featured?: boolean;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/insights");

export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const filePath = path.join(CONTENT_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as ArticleFrontmatter),
      content,
    };
  });

  return articles.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  if (!fs.existsSync(CONTENT_DIR)) return undefined;

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const filePath = path.join(CONTENT_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return {
        ...(data as ArticleFrontmatter),
        content,
      };
    }
  }

  return undefined;
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.featured).slice(0, 3);
}

export const CATEGORIES = [
  "ITAD",
  "E-Waste",
  "Refurbishment",
  "Data Security",
  "Asset Recovery",
  "Circular Economy",
  "Corporate Sustainability",
  "Recycling",
  "Awareness",
  "Compliance",
];
