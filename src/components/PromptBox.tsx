"use client";

import React, { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
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
      className="p-2 rounded-lg bg-[var(--background)]/80 hover:bg-[var(--accent)]/10 text-[var(--muted)] hover:text-[var(--accent)] transition-all cursor-pointer border border-[var(--border)]"
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

interface CalloutProps {
  type?: "note" | "tip" | "warning" | "important";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "note", title = "Intended audience", children }: CalloutProps) {
  return (
    <aside className="relative my-8 p-6 pl-14 sm:pl-16 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] text-[var(--foreground)] border-l-4 border-[var(--accent)] shadow-xs overflow-hidden border border-[#E2E8F0] dark:border-[#1F2937]">
      {/* Icon Lucide Info 28px chuẩn Josh Comeau */}
      <div className="absolute top-6 left-4 text-[var(--accent)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      </div>

      <strong className="block font-bold text-base mb-1.5 text-[var(--foreground)] font-serif">
        {title}
      </strong>
      <div className="text-sm leading-relaxed text-[var(--foreground)] opacity-90">
        {children}
      </div>
    </aside>
  );
}



interface PromptBoxProps {
  title?: string;
  children: React.ReactNode;
}

export function PromptBox({ title = "PROMPT TEMPLATE", children }: PromptBoxProps) {
  const getTextFromChildren = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getTextFromChildren).join("");
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      return getTextFromChildren(element.props.children);
    }
    return "";
  };

  const rawText = getTextFromChildren(children).trim();

  return (
    <div className="my-6 rounded-2xl border border-[var(--accent-coral)]/40 bg-[var(--card-bg)] shadow-md overflow-hidden transition-all duration-200">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--background)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-coral)] inline-block animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--accent-coral)]">
            {title}
          </span>
        </div>
        <CopyButton text={rawText} />
      </div>

      {/* Content Box */}
      <div className="p-4 sm:p-5 font-mono text-sm leading-relaxed text-[var(--foreground)] bg-[var(--card-bg)] whitespace-pre-wrap selection:bg-[var(--accent-coral)]/20">
        {children}
      </div>
    </div>
  );
}
