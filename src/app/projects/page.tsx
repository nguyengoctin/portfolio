import { projects } from "#site/content";

export default function ProjectsListPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Projects</h1>
        <p className="text-sm text-[var(--muted)]">
          Danh sách các ứng dụng, công cụ và sản phẩm phần mềm tôi đã thực hiện.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Chưa có dự án nào.</p>
      ) : (
        <div className="focus-dim-group divide-y divide-[var(--border)]">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="focus-dim-item group py-4 transition-all duration-200"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-semibold text-[var(--foreground)] leading-snug">
                  {project.title}
                </span>
                <div className="flex gap-4 shrink-0 text-xs font-medium">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:underline">
                      Live ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--foreground)] hover:underline">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.techStack.map((tech) => (
                  <span key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono rounded border border-[var(--border)] text-[var(--muted)]">
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
