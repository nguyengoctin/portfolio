import Link from "next/link";
import { notes } from "#site/content";

export default function NotesListPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Second Brain (Digital Garden)</h1>
        <p className="text-sm text-[var(--muted)]">
          Bộ sưu tập các ghi chú ngắn, kiến thức nhanh, suy ngẫm và snippet lập trình cá nhân.
        </p>
      </header>

      {notes.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Chưa có ghi chú nào được công khai.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] transition-colors space-y-2 block"
            >
              <h2 className="text-lg font-serif font-bold flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">Note</span>
                {note.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                <time>{new Date(note.date).toLocaleDateString("vi-VN")}</time>
                <div className="flex gap-1">
                  {note.tags.map((tag) => (
                    <span key={tag} className="before:content-['#']">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
