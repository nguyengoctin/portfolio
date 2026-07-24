import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] py-8 mt-auto bg-[var(--background)] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--muted)] gap-4">
        <div>
          © {new Date().getFullYear()} {SITE_CONFIG.title}. Minimalist Editorial Design.
        </div>
        <div className="flex gap-4">
          <a
            href={SITE_CONFIG.author.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE_CONFIG.author.email}`}
            className="hover:underline hover:text-[var(--foreground)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

