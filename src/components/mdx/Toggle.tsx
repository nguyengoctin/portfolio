"use client";
import React, { useState } from "react";

export function Toggle({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-3 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-2 py-1 text-left font-medium text-sm sm:text-base text-[var(--foreground)] hover:bg-[var(--accent)]/5 rounded-lg transition-colors cursor-pointer"
      >
        <span className="mt-1 text-xs text-[var(--accent)] transition-transform duration-200" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>▶</span>
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
