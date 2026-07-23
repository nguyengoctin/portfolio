import React from "react";
export function SyncedBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 rounded-xl border border-dashed border-[var(--accent)]/40 bg-[var(--accent)]/5 text-sm leading-relaxed text-[var(--foreground)]">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] mb-1"><span>🔄 Synced Block</span></div>
      {children}
    </div>
  );
}
