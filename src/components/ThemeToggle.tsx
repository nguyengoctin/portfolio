"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Đảm bảo chỉ render sau khi đã mount ở Client để tránh Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Slot trống bằng kích thước nút bấm
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:opacity-80 transition-opacity"
      aria-label="Chuyển đổi giao diện Sáng/Tối"
    >
      {theme === "dark" ? (
        /* Icon Mặt trời (Light Mode) */
        <svg
          className="w-4 h-4 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
        </svg>
      ) : (
        /* Icon Mặt trăng (Dark Mode) */
        <svg
          className="w-4 h-4 fill-current text-slate-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12.3 2c.43 0 .77.35.77.78 0 .24-.11.47-.29.62-1.74 1.48-2.78 3.66-2.78 6.01 0 4.14 3.36 7.5 7.5 7.5 2.35 0 4.53-1.04 6.01-2.78.15-.18.38-.29.62-.29.43 0 .78.34.78.77 0 .19-.07.37-.19.51-2.02 2.65-5.18 4.29-8.72 4.29-5.97 0-10.8-4.83-10.8-10.8 0-3.54 1.64-6.7 4.29-8.72.14-.12.32-.19.51-.19z" />
        </svg>
      )}
    </button>
  );
}
