"use client";

import React, { useState } from "react";

// 1. Callout Component — 4 biến thể màu (info / warning / tip / note)
const calloutConfig = {
  info: {
    border: "border-[var(--accent)]",
    bg: "bg-[var(--accent)]/8 dark:bg-[var(--accent)]/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    iconColor: "text-[var(--accent)]",
  },
  warning: {
    border: "border-amber-400 dark:border-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    iconColor: "text-amber-500",
  },
  tip: {
    border: "border-emerald-400 dark:border-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
    iconColor: "text-emerald-500",
  },
  note: {
    border: "border-purple-400 dark:border-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    iconColor: "text-purple-500",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "tip" | "note";
  title?: string;
  children: React.ReactNode;
}) {
  const cfg = calloutConfig[type];
  return (
    <aside className={`relative my-6 p-5 pl-14 rounded-lg ${cfg.bg} text-[var(--foreground)] border-l-4 ${cfg.border} overflow-hidden transition-colors duration-200`}>
      <div className={`absolute top-5 left-4 ${cfg.iconColor}`}>{cfg.icon}</div>
      {title && (
        <strong className="block font-bold text-base mb-1.5 text-[var(--foreground)] font-serif tracking-tight">
          {title}
        </strong>
      )}
      <div className="text-sm sm:text-base leading-relaxed text-[var(--foreground)] opacity-90 space-y-2">
        {children}
      </div>
    </aside>
  );
}

// 1b. Quote Component — Khác Callout: không có icon, chỉ có viền trái + nền nhạt + text thường
export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-5 pl-5 border-l-4 border-[var(--border)] bg-[var(--card-bg)] py-3 pr-4 rounded-r-lg text-[var(--muted)] leading-relaxed text-sm sm:text-base italic">
      {children}
    </blockquote>
  );
}

// 2. BlockHeadingToggle
export function Toggle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-3 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-2 py-1 text-left font-medium text-sm sm:text-base text-[var(--foreground)] hover:bg-[var(--accent)]/5 rounded-lg transition-colors cursor-pointer group"
      >
        <span className="mt-1 text-xs text-[var(--accent)] transition-transform duration-200" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
          ▶
        </span>
        <span className="flex-1">{title}</span>
      </button>
      {isOpen && (
        <div className="pl-6 pt-2 pb-1 border-l-2 border-[var(--accent)]/30 ml-2 space-y-2 text-sm leading-relaxed text-[var(--foreground)]">
          {children}
        </div>
      )}
    </div>
  );
}

// 3. MentionPreviewCard
export function Bookmark({
  url,
  title,
  description,
  domain,
  owner,
  updated,
}: {
  url: string;
  title: string;
  description: string;
  domain: string;
  owner?: string;
  updated?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 flex flex-col sm:flex-row justify-between rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4 hover:border-[var(--accent)] transition-all group shadow-xs hover:shadow-md"
    >
      <div className="space-y-1.5 pr-4 flex-1">
        <div className="flex items-center gap-2 text-xs text-[var(--accent-coral)] font-mono">
          <span>🔗 {domain}</span>
          {owner && <span>• Owner: {owner}</span>}
          {updated && <span>• Updated: {updated}</span>}
        </div>
        <h4 className="font-semibold text-base text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h4>
        <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </a>
  );
}

// 4. BlockColumns
export function Columns({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">{children}</div>;
}

// 5. BlockEquation (Tự động thích ứng màu sắc Dark/Light Mode)
export function Math({ formula, inline = false }: { formula: string; inline?: boolean }) {
  if (inline) {
    return <code className="font-mono text-[var(--accent-coral)] px-1.5 py-0.5 rounded bg-[var(--accent-coral)]/10 text-xs sm:text-sm">{formula}</code>;
  }
  return (
    <div className="my-5 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] text-center font-mono text-sm sm:text-base text-[var(--accent)] overflow-x-auto shadow-xs">
      {formula}
    </div>
  );
}

// 6. BlockGist (Nhúng GitHub Gist)
export function Gist({ id, file }: { id: string; file?: string }) {
  return (
    <div className="my-5 rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--card-bg)] p-4 shadow-xs">
      <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--foreground)]">
          <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub Gist: {id}
        </span>
        {file && <span>{file}</span>}
      </div>
      <a
        href={`https://gist.github.com/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-[var(--accent)] hover:underline inline-block font-medium"
      >
        View full gist on GitHub →
      </a>
    </div>
  );
}

// 7. BlockToDo (To Do Checkbox chuẩn Notion)
export function ToDo({ checked = false, children }: { checked?: boolean; children: React.ReactNode }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div className="flex items-start gap-2.5 my-2 group cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
      <div className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center rounded border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
        {isChecked ? (
          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : null}
      </div>
      <div className={`text-sm leading-relaxed text-[var(--foreground)] ${isChecked ? "line-through opacity-50" : ""}`}>
        {children}
      </div>
    </div>
  );
}

// 8. BlockDivider (Đường gạch ngang Divider)
export function Divider() {
  return <hr className="my-6 border-t border-[var(--border)] opacity-60" />;
}

// 9. BlockVideo (Youtube video embed)
export function Youtube({ id }: { id: string }) {
  return (
    <div className="my-5 rounded-xl overflow-hidden border border-[var(--border)] aspect-video w-full bg-black shadow-xs">
      <iframe
        className="w-full h-full border-0"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

// 10. SyncedBlock (Khối đồng bộ nội dung)
export function SyncedBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 rounded-xl border border-dashed border-[var(--accent)]/40 bg-[var(--accent)]/5 text-sm leading-relaxed text-[var(--foreground)]">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] mb-1">
        <span>🔄 Synced Block</span>
      </div>
      {children}
    </div>
  );
}

// 11. CopyButton Component
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md bg-[var(--background)]/80 hover:bg-[var(--accent)]/10 text-[var(--muted)] hover:text-[var(--accent)] transition-all cursor-pointer border border-[var(--border)]"
      aria-label="Copy code"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        </svg>
      )}
    </button>
  );
}
