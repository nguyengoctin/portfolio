"use client";

import React, { useEffect, useState } from "react";

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function SidebarTOC() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let elements: Element[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -65% 0px" }
    );

    const timer = setTimeout(() => {
      elements = Array.from(document.querySelectorAll("article h2, article h3"));
      const items: HeadingItem[] = elements.map((elem) => {
        const text = elem.textContent || "";
        const id = elem.id || text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        if (!elem.id) elem.id = id;
        return {
          id,
          text,
          level: Number(elem.tagName.substring(1)),
        };
      });
      setHeadings(items);
      elements.forEach((elem) => observer.observe(elem));
    }, 0);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

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

  return (
    <nav className="space-y-4">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--foreground)]">
        TABLE OF CONTENTS
      </h2>
      <div className="space-y-2 text-sm leading-relaxed">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => handleClick(e, h.id)}
            className={`block transition-colors ${
              h.level === 3 ? "ml-3 text-xs" : "font-medium"
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
