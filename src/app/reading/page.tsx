export default function ReadingPage() {
  const books = [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      status: "Đang đọc",
      note: "Cuốn sách tuyệt vời về kiến trúc hệ thống dữ liệu phân tán.",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "Đã đọc",
      note: "Bài học về cách viết mã nguồn sạch và dễ bảo trì.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-4">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Tủ sách cá nhân (Reading)</h1>
        <p className="text-sm text-[var(--muted)]">
          Danh sách các cuốn sách kỹ thuật và tư duy tôi đã và đang nghiên cứu.
        </p>
      </header>

      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="p-5 rounded-xl border border-[var(--border)] bg-[var(--background)] space-y-2"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-serif font-bold">{book.title}</h2>
              <span className="text-xs px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                {book.status}
              </span>
            </div>
            <p className="text-xs text-[var(--muted)]">Tác giả: {book.author}</p>
            <p className="text-sm text-[var(--foreground)]">{book.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
