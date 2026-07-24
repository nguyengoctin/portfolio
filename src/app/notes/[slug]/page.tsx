import { notFound } from "next/navigation";
import Link from "next/link";
import { notes } from "#site/content";
import { MDXContent } from "@/components/MDXContent";
import { getBacklinks } from "@/lib/backlinks";
import { Backlinks } from "@/components/Backlinks";
import { SidebarTOC } from "@/components/SidebarTOC";
import { ReadingProgressBar, BackToTopButton } from "@/components/ReaderUtils";
import { SITE_CONFIG } from "@/config/site";
import { formatDate, calculateReadTime } from "@/lib/formatters";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NoteDetailPage({ params }: PageProps) {
  // LƯU Ý NEXT.JS 15: Must await params
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  // Tính toán danh sách backlinks
  const backlinks = getBacklinks(slug);
  const readTimeMinutes = calculateReadTime(note.body);
  const githubEditUrl = `${SITE_CONFIG.githubRepo}/blob/main/content/notes/${slug}.mdx`;

  return (
    <div className="space-y-8 w-full relative">
      {/* Thanh tiến trình đọc (Reading Progress Bar) */}
      <ReadingProgressBar />

      {/* Nút quay lại đỉnh trang (Back to Top Button) */}
      <BackToTopButton />

      {/* Header bài viết chuẩn thanh lịch, tinh tế */}
      <header className="space-y-3 border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--foreground)] tracking-tight">
          {note.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--muted)] pt-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-1 font-medium text-[var(--foreground)]">
              <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              {SITE_CONFIG.author.name}
            </div>

            <span className="hidden sm:inline opacity-50">•</span>
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18M8 2v4M16 2v4" />
              </svg>
              <span>{formatDate(note.date)}</span>
            </div>

            <span className="hidden sm:inline opacity-50">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {readTimeMinutes} min read
            </span>

            <span className="hidden sm:inline opacity-50">•</span>
            <a
              href={githubEditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors underline underline-offset-2 flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Edit on GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <span key={tag} className="before:content-['#'] font-mono text-[var(--accent-coral)] bg-[var(--accent-coral)]/10 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Back to Notes Link */}
      <Link
        href="/notes"
        className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-block pt-2"
      >
        ← Back to Notes
      </Link>

      {/* Bố cục 2 cột (Cột trái: Bài viết MDX, Cột phải: TOC Sidebar) */}
      <div className="flex flex-col lg:flex-row items-start gap-12 relative">
        {/* Main Content Area */}
        <div className="flex-1 min-w-0 w-full space-y-8">
          <MDXContent code={note.body} />
          <Backlinks backlinks={backlinks} />
        </div>

        {/* Sidebar Table of Contents (Sticky on Desktop) */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-24 pt-2">
          <SidebarTOC />
        </aside>
      </div>
    </div>
  );
}
