import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/formatters";
import { PageHeader } from "@/components/PageHeader";

export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

interface ContentListPageProps {
  title: string;
  description: string;
  emptyText: string;
  items: ContentItem[];
  itemTypeBadge: "note" | "post";
  basePath: "/notes" | "/blog";
}

export function ContentListPage({
  title,
  description,
  emptyText,
  items,
  itemTypeBadge,
  basePath,
}: ContentListPageProps) {
  // Sắp xếp bài mới nhất lên đầu
  const sortedItems = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-8 max-w-3xl">
      <PageHeader title={title} description={description} />

      {/* Nội dung danh sách bài viết / ghi chú tinh gọn */}
      {sortedItems.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">{emptyText}</p>
      ) : (
        <div className="divide-y divide-[var(--border)]">
          {sortedItems.map((item) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className="group flex items-baseline justify-between gap-4 py-4 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                  {itemTypeBadge}
                </span>
                <span className="font-medium text-base sm:text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                  {item.title}
                </span>
              </div>

              <time className="shrink-0 text-xs font-mono text-[var(--muted)]">
                {formatDate(item.date)}
              </time>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
