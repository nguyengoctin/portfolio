export default function ReadingPage() {
  const books = [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      status: "reading",
      note: "Cuốn sách tuyệt vời về kiến trúc hệ thống dữ liệu phân tán.",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "done",
      note: "Bài học về cách viết mã nguồn sạch và dễ bảo trì.",
    },
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Reading</h1>
        <p className="text-sm text-[var(--muted)]">
          Danh sách các cuốn sách kỹ thuật và tư duy tôi đã và đang nghiên cứu.
        </p>
      </header>

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
