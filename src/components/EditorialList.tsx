import Link from "next/link";

interface EditorialItem {
  title: string;
  slug: string;
  date: string;
  tag?: string;
}

interface EditorialListProps {
  title: string;
  viewAllLink: string;
  viewAllText: string;
  items: EditorialItem[];
  emptyText: string;
  linkPrefix: string;
}

export function EditorialList({
  title,
  viewAllLink,
  viewAllText,
  items,
  emptyText,
  linkPrefix,
}: EditorialListProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <h2 className="text-xl font-serif font-bold">{title}</h2>
        <Link
          href={viewAllLink}
          className="text-xs text-[var(--accent)] font-medium hover:underline"
        >
          {viewAllText}
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">{emptyText}</p>
      ) : (
        <div className="focus-dim-group space-y-5">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${linkPrefix}/${item.slug}`}
              className="focus-dim-item block space-y-1 group cursor-pointer transition-all duration-200"
            >
              <h3 className="font-medium text-base text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2 leading-snug">
                {item.tag && (
                  <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--accent)] bg-[var(--accent)]/10 shrink-0">
                    {item.tag}
                  </span>
                )}
                <span className="truncate">{item.title}</span>
              </h3>
              <p className="text-xs text-[var(--muted)] font-mono">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
