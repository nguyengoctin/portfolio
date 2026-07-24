"use client";

import React, { useEffect, useRef } from "react";
import { useTableOfContents, HeadingItem } from "@/hooks/useTableOfContents";

interface TableOfContentsProps {
  headings?: HeadingItem[];
  variant?: "inline" | "sidebar";
}

export function TableOfContents({ headings: initialHeadings, variant = "inline" }: TableOfContentsProps) {
  const { headings, activeId } = useTableOfContents(initialHeadings);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeId || !containerRef.current) return;
    const activeLink = containerRef.current.querySelector<HTMLAnchorElement>(`a[href="#${activeId}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }
  };

  if (variant === "sidebar") {
    return (
      <nav className="space-y-4">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--foreground)]">
          TABLE OF CONTENTS
        </h2>
        <div ref={containerRef} className="space-y-2 text-sm leading-relaxed max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pr-2">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className={`block transition-all duration-200 ${
                h.level === 3 ? "ml-3 text-xs" : "font-medium"
              } ${
                activeId === h.id
                  ? "text-[var(--accent)] font-semibold translate-x-1"
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

  return (
    <nav className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] space-y-3 my-6 shadow-xs">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
        Table of Contents
      </h2>
      <div ref={containerRef} className="space-y-1.5 text-xs sm:text-sm">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => handleClick(e, h.id)}
            className={`block transition-all duration-200 leading-relaxed ${
              h.level === 3 ? "ml-4" : ""
            } ${
              activeId === h.id
                ? "text-[var(--accent)] font-semibold"
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
