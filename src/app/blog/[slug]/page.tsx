import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "#site/content";
import { MDXContent } from "@/components/MDXContent";
import { formatDate } from "@/lib/formatters";
import { SidebarTOC } from "@/components/SidebarTOC";
import { ReadingProgressBar, BackToTopButton } from "@/components/ReaderUtils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  // LƯU Ý NEXT.JS 15: Phải await params trước khi lấy slug
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8 w-full relative">
      <ReadingProgressBar />
      <BackToTopButton />

      <Link
        href="/blog"
        className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-block"
      >
        ← Back to Blog
      </Link>

      <header className="space-y-3 border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--muted)] pt-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18M8 2v4M16 2v4" />
              </svg>
              <time>{formatDate(post.date)}</time>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="before:content-['#'] font-mono text-[var(--accent-coral)] bg-[var(--accent-coral)]/10 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Bố cục 2 cột (Cột trái: Bài viết MDX, Cột phải: TOC Sidebar) */}
      <div className="flex flex-col lg:flex-row items-start gap-12 relative">
        <div className="flex-1 min-w-0 w-full space-y-8">
          <MDXContent code={post.body} />
        </div>

        <aside className="hidden lg:block w-64 shrink-0 sticky top-24 pt-2">
          <SidebarTOC />
        </aside>
      </div>
    </div>
  );
}
