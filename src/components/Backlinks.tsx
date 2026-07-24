import Link from "next/link";
import { BacklinkItem } from "@/lib/backlinks";

interface BacklinksProps {
  backlinks: BacklinkItem[];
}

export function Backlinks({ backlinks }: BacklinksProps) {
  if (backlinks.length === 0) return null;

  return (
    <section className="mt-12 pt-6 border-t border-[var(--border)] space-y-4">
      <h3 className="text-sm font-semibold font-serif text-[var(--muted)] tracking-wider uppercase">
        Linked References
      </h3>

      <div className="grid gap-3 sm:grid-cols-2">
        {backlinks.map((item) => (
          <Link
            key={item.slug}
            href={`/notes/${item.slug}`}
            className="p-3 rounded-lg border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] transition-colors block space-y-1"
          >
            <div className="font-medium text-sm text-[var(--foreground)]">
              {item.title}
            </div>
            <div className="text-xs text-[var(--muted)]">/notes/{item.slug}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
