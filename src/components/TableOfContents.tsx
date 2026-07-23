"use client";

import React, { useEffect, useState } from "react";

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Tìm tất cả các thẻ heading (h2, h3) trong bài viết
    const elements = Array.from(document.querySelectorAll("article h2, article h3"));
    const items: HeadingItem[] = elements.map((elem) => ({
      id: elem.id || elem.textContent?.toLowerCase().replace(/\s+/g, "-") || "",
      text: elem.textContent || "",
      level: Number(elem.tagName.substring(1)),
    }));
    setHeadings(items);

    // IntersectionObserver tự động đánh dấu phần đang đọc
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    elements.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] space-y-3 my-6 shadow-xs">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-coral)] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-coral)]" />
        Table of Contents
      </h2>
      <div className="space-y-1.5 text-xs sm:text-sm">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`block transition-colors leading-relaxed ${
              h.level === 3 ? "ml-4" : ""
            } ${
              activeId === h.id
                ? "text-[var(--accent-coral)] font-semibold"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {h.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
