import Link from "next/link";
import { posts } from "#site/content";

export default function BlogListPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Bài viết</h1>
        <p className="text-sm text-[var(--muted)]">
          Góc chia sẻ kiến thức chuyên sâu, suy ngẫm về kỹ thuật và phát triển phần mềm.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Chưa có bài viết nào được xuất bản.</p>
      ) : (
        <div className="focus-dim-group divide-y divide-[var(--border)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="focus-dim-item group flex items-baseline justify-between gap-4 py-3.5 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="shrink-0 text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                  post
                </span>
                <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate leading-snug">
                  {post.title}
                </span>
              </div>
              <time className="shrink-0 text-xs font-mono text-[var(--muted)]">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
              </time>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
