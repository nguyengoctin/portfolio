import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "#site/content";
import { MDXContent } from "@/components/MDXContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Hàm sinh static params cho SSG build
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
    <div className="space-y-8 w-full">
      <Link
        href="/blog"
        className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-block"
      >
        ← Quay lại danh sách Blog
      </Link>

      <header className="space-y-3 border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
          {post.title}
        </h1>

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
      </header>

      {/* Hiển thị nội dung bài viết MDX */}
      <MDXContent code={post.body} />
    </div>
  );
}
