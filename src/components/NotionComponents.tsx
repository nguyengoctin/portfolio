"use client";

import React, { useState } from "react";

// 1. HeadingContainer: Tiêu đề H2/H3 bọc gradient accent + anchor link
export function HeadingContainer({
  level = 2,
  id,
  children,
}: {
  level?: 2 | 3;
  id: string;
  children: React.ReactNode;
}) {
  if (level === 2) {
    return (
      <div className="heading-container relative mb-4 mt-10 rounded-l-sm border-l-[3px] border-[var(--accent)] bg-gradient-to-r from-[var(--accent)]/10 to-transparent py-1.5 pl-3">
        <h2 id={id} className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] tracking-tight flex items-center gap-2 group scroll-mt-20">
          <span>{children}</span>
          <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-[var(--accent)] text-sm transition-opacity">
            #
          </a>
        </h2>
      </div>
    );
  }

  return (
    <div className="heading-container relative mb-3 mt-6">
      <h3 id={id} className="text-lg font-serif font-semibold text-[var(--foreground)] tracking-tight flex items-center gap-2 group scroll-mt-20">
        <span>{children}</span>
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-[var(--accent)] text-xs transition-opacity">
          #
        </a>
      </h3>
    </div>
  );
}

// 2. NotionCallout: Hộp chú thích tích hợp Emoji + Rich Text
export function NotionCallout({
  emoji = "☝",
  children,
}: {
  emoji?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 p-4 rounded-xl bg-[var(--accent)]/5 border border-[var(--border)] flex items-start gap-3 text-sm leading-relaxed text-[var(--foreground)]">
      <span className="text-xl select-none">{emoji}</span>
      <div className="flex-1">{children}</div>
    </div>
  );
}

// 3. ToggleBlock: Khối thu gọn/mở rộng thông tin
export function ToggleBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--card-bg)] shadow-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between font-medium text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/5 transition-colors text-left cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}>
            ▶
          </span>
          {title}
        </span>
        <span className="text-xs text-[var(--muted)]">{isOpen ? "Thu gọn" : "Mở rộng"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3.5 border-t border-[var(--border)] text-sm leading-relaxed bg-[var(--background)]">
          {children}
        </div>
      )}
    </div>
  );
}

// 4. BookmarkCard: Khối hiển thị link preview thẻ thông minh
export function BookmarkCard({
  url,
  title,
  description,
  domain,
}: {
  url: string;
  title: string;
  description: string;
  domain: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 flex flex-col sm:flex-row justify-between rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4 hover:border-[var(--accent)] transition-all group shadow-xs"
    >
      <div className="space-y-1.5 pr-4">
        <h4 className="font-semibold text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h4>
        <p className="text-xs text-[var(--muted)] line-clamp-2">{description}</p>
        <span className="inline-block text-[11px] font-mono text-[var(--accent-coral)]">{domain}</span>
      </div>
    </a>
  );
}

// 5. MultiColumns: Chia layout 2 cột linh hoạt cho MDX bài viết
export function MultiColumns({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">{children}</div>;
}
