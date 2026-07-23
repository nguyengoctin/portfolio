export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] py-8 mt-auto bg-[var(--background)] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--muted)] gap-4">
        <div>
          © {new Date().getFullYear()} Personal Portfolio & Second Brain. Minimalist Editorial Design.
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/ngoctinn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ngoctin.work@gmail.com"
            className="hover:underline hover:text-[var(--foreground)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
