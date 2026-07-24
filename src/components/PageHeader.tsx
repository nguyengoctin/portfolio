import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string | number;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <header className="space-y-3 border-b border-[var(--border)] pb-6 mb-8">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--foreground)] tracking-tight">
          {title}
        </h1>
        {badge !== undefined && (
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] bg-[var(--accent)]/10">
            {badge}
          </span>
        )}
      </div>
      {description && (
        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}
