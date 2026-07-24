"use client";

import React from "react";
import katex from "katex";

export function Math({ formula, inline = false }: { formula: string; inline?: boolean }) {
  const html = katex.renderToString(formula, {
    displayMode: !inline,
    throwOnError: false,
  });

  if (inline) {
    return (
      <span
        className="font-serif text-[var(--accent-coral)] px-1.5 py-0.5 rounded bg-[var(--accent-coral)]/10 text-sm sm:text-base inline-block my-0.5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] text-center text-base sm:text-lg text-[var(--foreground)] overflow-x-auto shadow-xs leading-relaxed">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
