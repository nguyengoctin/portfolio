import { projects } from "#site/content";

export default function ProjectsListPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-[var(--border)] pb-4">
        <h1 className="text-3xl font-serif font-bold">Dự án Cá nhân</h1>
        <p className="text-sm text-[var(--muted)]">
          Danh sách các ứng dụng, công cụ và sản phẩm phần mềm tôi đã thực hiện.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Chưa có dự án nào.</p>
      ) : (
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)] space-y-4"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-serif font-bold">{project.title}</h2>
                <p className="text-sm text-[var(--muted)]">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-[var(--border)] text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-xs font-medium pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    Xem Live Demo ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[var(--muted)]"
                  >
                    Mã nguồn GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
