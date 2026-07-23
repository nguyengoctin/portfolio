import { posts, notes } from "#site/content";

export default function TopicsPage() {
  const allTags = Array.from(
    new Set([
      ...posts.flatMap((p) => p.tags),
      ...notes.flatMap((n) => n.tags),
    ])
  ).sort();

  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Topics</h1>
        <p className="text-sm text-[var(--muted)]">
          Tất cả các chủ đề kiến thức được phân loại trong Second Brain.
        </p>
      </header>

      <div className="focus-dim-group divide-y divide-[var(--border)]">
        {allTags.map((tag) => {
          const postCount = posts.filter((p) => p.tags.includes(tag)).length;
          const noteCount = notes.filter((n) => n.tags.includes(tag)).length;
          const total = postCount + noteCount;

          return (
            <div key={tag}
              className="focus-dim-item group flex items-baseline justify-between gap-4 py-3.5 transition-all duration-200">
              <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                #{tag}
              </span>
              <span className="text-xs font-mono text-[var(--muted)]">
                {total} {total === 1 ? "item" : "items"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
