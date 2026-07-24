import Link from "next/link";
import { posts, notes } from "#site/content";
import { PageHeader } from "@/components/PageHeader";

export default function TopicsPage() {
  const topicMap = new Map<string, { postsCount: number; notesCount: number }>();

  posts.forEach((p) => {
    (p.tags || []).forEach((t) => {
      if (!topicMap.has(t)) topicMap.set(t, { postsCount: 0, notesCount: 0 });
      topicMap.get(t)!.postsCount++;
    });
  });

  notes.forEach((n) => {
    (n.tags || []).forEach((t) => {
      if (!topicMap.has(t)) topicMap.set(t, { postsCount: 0, notesCount: 0 });
      topicMap.get(t)!.notesCount++;
    });
  });

  const topics = Array.from(topicMap.entries())
    .map(([name, counts]) => ({
      name,
      slug: name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
      total: counts.postsCount + counts.notesCount,
      postsCount: counts.postsCount,
      notesCount: counts.notesCount,
    }))
    .sort((a, b) => b.total - a.total);

  return (
    <div className="space-y-8 w-full">
      <PageHeader
        title="Topics"
        description="A list of topics I write about. Click any topic card to view all associated articles and notes."
        badge={topics.length}
      />

      {/* Grid Thẻ Chủ đề 4 Cột chuẩn dinhanhthi.com */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {topics.map((t) => (
          <Link
            key={t.name}
            id={`topic-${t.slug}`}
            href={`/topics/${t.slug}`}
            className="group flex items-center justify-between p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-[var(--accent)] font-mono font-bold text-base shrink-0">#</span>
              <span className="font-medium text-sm sm:text-base text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate capitalize">
                {t.name}
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--muted)] shrink-0 ml-2 bg-[var(--background)] px-2 py-0.5 rounded-md border border-[var(--border)]">
              {t.total}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
