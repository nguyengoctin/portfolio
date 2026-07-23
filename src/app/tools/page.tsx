import { projects } from "#site/content";

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Tools</h1>
        <p className="text-sm text-[var(--muted)]">
          Các ứng dụng, tiện ích và phần mềm do tôi phát triển.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Chưa có công cụ nào.</p>
      ) : (
        <div className="focus-dim-group divide-y divide-[var(--border)]">
          {projects.map((project) => (
            <div key={project.slug}
              className="focus-dim-item group py-4 transition-all duration-200">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-[var(--foreground)] leading-snug">
                  {project.title}
                </span>
                <div className="flex gap-3 shrink-0 text-xs">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:underline font-medium">
                      Demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:underline">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
