"use client";
import React, { useState } from "react";

// Icon SVGs
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>
);

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const TipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" /><path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);

const NoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

// Mỗi type dùng CSS class rõ ràng — opacity thấp để nền chỉ là gợi màu nhẹ
const calloutConfig = {
  info: {
    wrapper: "border-l-4 border-[var(--accent)] bg-[var(--accent)]/8",
    iconClass: "text-[var(--accent)]",
    Icon: InfoIcon,
  },
  warning: {
    wrapper: "border-l-4 border-amber-500 bg-amber-500/8 dark:bg-amber-500/10",
    iconClass: "text-amber-500",
    Icon: WarningIcon,
  },
  tip: {
    wrapper: "border-l-4 border-emerald-500 bg-emerald-500/8 dark:bg-emerald-500/10",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    Icon: TipIcon,
  },
  note: {
    wrapper: "border-l-4 border-purple-500 bg-purple-500/8 dark:bg-purple-500/10",
    iconClass: "text-purple-600 dark:text-purple-400",
    Icon: NoteIcon,
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof calloutConfig;
  title?: string;
  children: React.ReactNode;
}) {
  const { wrapper, iconClass, Icon } = calloutConfig[type];
  return (
    <aside className={`relative my-6 p-5 pl-14 rounded-lg overflow-hidden transition-colors duration-200 ${wrapper}`}>
      <div className={`absolute top-5 left-4 ${iconClass}`}>
        <Icon />
      </div>
      {title && (
        <strong className="block font-bold text-base mb-1.5 text-[var(--foreground)] font-serif tracking-tight">
          {title}
        </strong>
      )}
      <div className="text-sm sm:text-base leading-relaxed text-[var(--foreground)] space-y-2">
        {children}
      </div>
    </aside>
  );
}

// Quote: viền trái mờ + nền card + chữ italic muted — khác hẳn Callout
export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-5 pl-5 border-l-4 border-[var(--border)] bg-[var(--card-bg)] py-3 pr-4 rounded-r-lg text-[var(--muted)] leading-relaxed italic not-prose">
      {children}
    </blockquote>
  );
}
