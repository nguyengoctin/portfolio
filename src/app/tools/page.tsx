import Link from "next/link";
import { projects } from "#site/content";

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-4">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Công cụ & Sản phẩm (Tools)</h1>
        <p className="text-sm text-[var(--muted)]">
          Các ứng dụng, tiện ích mở rộng và phần mềm do tôi phát triển.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Chưa có công cụ nào.</p>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--background)] space-y-2"
            >
              <h2 className="text-xl font-serif font-bold">{project.title}</h2>
              <p className="text-sm text-[var(--muted)]">{project.description}</p>
              <div className="flex gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-[var(--border)] text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
