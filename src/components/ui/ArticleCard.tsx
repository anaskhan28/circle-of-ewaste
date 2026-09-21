import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ArticleCardProps {
  title: string;
  description: string;
  slug: string;
  category: string;
  author: string;
  publishDate: string;
  readingTime: number;
  featured?: boolean;
  className?: string;
}

export function ArticleCard({
  title,
  description,
  slug,
  category,
  publishDate,
  readingTime,
  featured = false,
  className,
}: ArticleCardProps) {
  const formattedDate = format(new Date(publishDate), "d MMM yyyy");

  return (
    <Link
      href={`/insights/${slug}`}
      className={cn(
        "card-base p-7 flex flex-col gap-4 group hover:-translate-y-0.5 transition-all duration-300",
        featured && "border-brand-blue/20 bg-very-light-blue",
        className
      )}
    >
      {/* Category */}
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue uppercase tracking-wider">
        <Tag className="w-3 h-3" />
        {category}
      </span>

      {/* Title */}
      <h3 className="font-bold text-dark text-xl leading-snug group-hover:text-brand-blue transition-colors duration-200 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed line-clamp-3">{description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 mt-auto pt-2 text-xs text-muted">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {readingTime} min read
        </span>
      </div>
    </Link>
  );
}
