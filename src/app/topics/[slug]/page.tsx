import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, notes } from "#site/content";
import { formatDate } from "@/lib/formatters";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allTags = new Set([
    ...posts.flatMap((p) => p.tags || []),
    ...notes.flatMap((n) => n.tags || []),
  ]);

  return Array.from(allTags).map((tag) => ({
    slug: tag.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
  }));
}

export default async function TopicDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const allTags = Array.from(
    new Set([
      ...posts.flatMap((p) => p.tags || []),
      ...notes.flatMap((n) => n.tags || []),
    ])
  );

  const matchedTag = allTags.find(
    (t) => t.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") === slug
  );

  if (!matchedTag) {
    notFound();
  }

  const topicPosts = posts.filter((p) => (p.tags || []).includes(matchedTag));
  const topicNotes = notes.filter((n) => (n.tags || []).includes(matchedTag));
  const total = topicPosts.length + topicNotes.length;

  return (
    <div className="space-y-8 max-w-4xl w-full">
      <Link
        href="/topics"
        className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-block"
      >
        ← Back to Topics
      </Link>

      <header className="space-y-3 border-b border-[var(--border)] pb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--foreground)] tracking-tight capitalize">
            Topic: #{matchedTag}
          </h1>
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] bg-[var(--accent)]/10">
            {total} {total === 1 ? "item" : "items"}
          </span>
        </div>
        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          All articles and notes tagged with <strong className="text-[var(--foreground)]">#{matchedTag}</strong>.
        </p>
      </header>

      {/* Danh sách các bài trong Chủ đề */}
      <div className="space-y-10">
        {topicPosts.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
              Blog Posts ({topicPosts.length})
            </h2>
            <div className="divide-y divide-[var(--border)]">
              {topicPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-3.5 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0 text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--accent-coral)] bg-[var(--accent-coral)]/10 font-medium">
                      blog
                    </span>
                    <span className="font-medium text-base text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {post.title}
                    </span>
                  </div>
                  <time className="shrink-0 text-xs font-mono text-[var(--muted)]">
                    {formatDate(post.date)}
                  </time>
                </Link>
              ))}
            </div>
          </section>
        )}

        {topicNotes.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[var(--muted)] uppercase tracking-wider">
              Notes ({topicNotes.length})
            </h2>
            <div className="divide-y divide-[var(--border)]">
              {topicNotes.map((note) => (
                <Link
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-3.5 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0 text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                      note
                    </span>
                    <span className="font-medium text-base text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {note.title}
                    </span>
                  </div>
                  <time className="shrink-0 text-xs font-mono text-[var(--muted)]">
                    {formatDate(note.date)}
                  </time>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
