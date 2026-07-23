import { notFound } from "next/navigation";
import Link from "next/link";
import { notes } from "#site/content";
import { MDXContent } from "@/components/MDXContent";
import { getBacklinks } from "@/lib/backlinks";
import { Backlinks } from "@/components/Backlinks";

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

  return (
    <div className="space-y-8 w-full">
      <Link
        href="/notes"
        className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-block"
      >
        ← Quay lại Second Brain
      </Link>

      <header className="space-y-3 border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl font-serif font-bold">{note.title}</h1>
        <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
          <time>Cập nhật: {new Date(note.date).toLocaleDateString("vi-VN")}</time>
          <div className="flex gap-2">
            {note.tags.map((tag) => (
              <span key={tag} className="before:content-['#']">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hiển thị nội dung ghi chú MDX */}
      <MDXContent code={note.body} />

      {/* Hiển thị danh sách Backlinks */}
      <Backlinks backlinks={backlinks} />
    </div>
  );
}
