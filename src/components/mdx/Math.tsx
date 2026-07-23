import React from "react";
export function Math({ formula, inline = false }: { formula: string; inline?: boolean }) {
  if (inline) return <code className="font-mono text-[var(--accent-coral)] px-1.5 py-0.5 rounded bg-[var(--accent-coral)]/10 text-xs sm:text-sm">{formula}</code>;
  return (
    <div className="my-5 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] text-center font-mono text-sm sm:text-base text-[var(--accent)] overflow-x-auto shadow-xs">
      {formula}
    </div>
  );
}
