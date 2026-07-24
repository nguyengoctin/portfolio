import { PageHeader } from "@/components/PageHeader";

export default function ReadingPage() {
  const books = [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      status: "reading",
      note: "A comprehensive guide on distributed system architecture.",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "done",
      note: "Lessons on writing clean, maintainable software.",
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Reading"
        description="Technical books and literature I am currently reading or have completed."
      />

      <div className="focus-dim-group divide-y divide-[var(--border)]">
        {books.map((book) => (
          <div key={book.title}
            className="focus-dim-item group py-3.5 transition-all duration-200">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium text-[var(--foreground)] leading-snug">
                {book.title}
              </span>
              <span className={`shrink-0 text-[11px] font-mono px-1.5 py-0.5 rounded border ${
                book.status === "reading"
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--muted)]"
              }`}>
                {book.status === "reading" ? "reading" : "done"}
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] mt-0.5">{book.author}</p>
            <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{book.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
