import Link from "next/link";
import { posts, notes } from "#site/content";

export default function TopicsPage() {
  // Gom tất cả các tag từ bài viết blog và notes
  const allTags = Array.from(
    new Set([
      ...posts.flatMap((p) => p.tags),
      ...notes.flatMap((n) => n.tags),
    ])
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-4">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Chủ đề & Thẻ (Topics)</h1>
        <p className="text-sm text-[var(--muted)]">
          Khám phá tất cả các chủ đề kiến thức được phân loại trong Second Brain.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => {
          const postCount = posts.filter((p) => p.tags.includes(tag)).length;
          const noteCount = notes.filter((n) => n.tags.includes(tag)).length;
          const total = postCount + noteCount;

          return (
            <div
              key={tag}
              className="px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] transition-colors flex items-center gap-2"
            >
              <span className="font-medium text-sm">#{tag}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--border)] text-[var(--muted)] font-mono">
                {total}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
