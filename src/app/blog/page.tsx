import Link from "next/link";
import { posts } from "#site/content";

export default function BlogListPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Bài viết Blog</h1>
        <p className="text-sm text-[var(--muted)]">
          Góc chia sẻ kiến thức chuyên sâu, suy ngẫm về kỹ thuật và phát triển phần mềm.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Chưa có bài viết nào được xuất bản.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group space-y-2">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-serif font-bold group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
              </Link>

              <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                <time>{new Date(post.date).toLocaleDateString("vi-VN")}</time>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="before:content-['#']">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
