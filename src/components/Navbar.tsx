"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Blog", href: "/blog" },
  { name: "Notes", href: "/notes" },
  { name: "Projects", href: "/projects" },
  { name: "Topics", href: "/topics" },
  { name: "Tools", href: "/tools" },
  { name: "Reading", href: "/reading" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md transition-all duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Brand Logo */}
        <Link
          href="/"
          className="font-serif font-bold text-xl sm:text-2xl tracking-tight shrink-0 hover:opacity-80 transition-opacity flex items-center gap-1 group"
        >
          <span className="group-hover:text-[var(--accent)] transition-colors">Nguyen</span>
          <span className="relative text-[var(--accent)] italic font-sans font-light">
            Ngoc Tin
            <svg
              className="absolute -bottom-1 left-0 w-full h-1 text-[var(--accent)] opacity-70"
              viewBox="0 0 40 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3C10 1.5 25 1 39 2.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </Link>

        {/* Center: Main Navigation Menu */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-150 shrink-0 ${
                  isActive
                    ? "text-[var(--accent)] font-semibold bg-[var(--accent)]/10"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/40"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Quick Action Icons */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 text-[var(--muted)]">
          {/* Search Button Icon */}
          <button
            title="Search"
            className="p-2 rounded-lg hover:bg-[var(--border)]/50 hover:text-[var(--foreground)] transition-colors"
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Audio Toggle Icon */}
          <button
            title="Sound Effects"
            className="p-2 rounded-lg hover:bg-[var(--border)]/50 hover:text-[var(--foreground)] transition-colors hidden sm:block"
            aria-label="Sound Effects"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}



