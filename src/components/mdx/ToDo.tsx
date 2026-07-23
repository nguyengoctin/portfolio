"use client";
import React, { useState } from "react";
export function ToDo({ checked = false, children }: { checked?: boolean; children: React.ReactNode }) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <div className="flex items-start gap-2.5 my-2 group cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
      <div className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center rounded border border-[var(--border)] bg-[var(--card-bg)] group-hover:border-[var(--accent)] transition-colors">
        {isChecked && (
          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className={`text-sm leading-relaxed text-[var(--foreground)] ${isChecked ? "line-through opacity-50" : ""}`}>{children}</div>
    </div>
  );
}
