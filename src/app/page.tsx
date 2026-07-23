"use client";

import Link from "next/link";
import { posts, projects, notes } from "#site/content";
import { EditorialList } from "@/components/EditorialList";


export default function HomePage() {
  // Featured projects
  const featuredProjects = projects.slice(0, 2);
  // Recent blog posts
  const recentPosts = posts.slice(0, 4);
  // Recent notes
  const recentNotes = notes.slice(0, 4);

  return (
    <div className="space-y-16 py-4">
      {/* 1. Hero Bio Section (Chip Huyen Style text wrapping around floating circle avatar) */}
      <section className="relative pt-2 pb-6 border-b border-[var(--border)]">
        <div className="block overflow-hidden leading-relaxed">
          {/* Floating Circle Avatar */}
          <div className="float-right ml-6 mb-4 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[var(--border)] shadow-md shape-outside-circle">
            <img
              src="/assets/avatar.jpg"
              alt="Nguyen Ngoc Tin"
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif leading-tight mb-4">
            Hi, I'm Tin<span className="text-[var(--accent)]">.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            <p>
              I’m <strong className="text-[var(--foreground)] font-semibold">Nguyen Ngoc Tin</strong>, a software engineer passionate about building high-performance web applications and software systems.
            </p>
            <p>
              I focus on crafting modern user experiences, optimizing full-stack applications, and building reliable systems.
            </p>
            <p>
              This is my personal space — both a <strong className="text-[var(--foreground)] font-semibold">Portfolio</strong> showcasing my recent work and a <strong className="text-[var(--foreground)] font-semibold">Second Brain (Digital Garden)</strong> where I store notes, technical write-ups, and daily reflections.
            </p>
            <p>
              I enjoy tackling fun technical challenges and collaborating with great teams. Feel free to explore my <Link href="/blog" className="text-[var(--accent)] underline hover:opacity-80">articles</Link> or delve into my <Link href="/notes" className="text-[var(--accent)] underline hover:opacity-80">Digital Garden</Link>!
            </p>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Grid Section */}
      {featuredProjects.length > 0 && (
        <section className="space-y-6 pt-4 border-t border-[var(--border)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-xs sm:text-sm text-[var(--accent)] font-medium hover:underline flex items-center gap-1"
            >
              All Projects <span>→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects`}
                className="group p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)] transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-serif group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[var(--muted)] group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                  <p className="text-sm text-[var(--muted)] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 3. Recent Writing & Notes (Editorial Focus Dimming List) */}
      <div className="grid gap-12 sm:grid-cols-2 pt-4 border-t border-[var(--border)]">
        <EditorialList
          title="Recent Writing"
          viewAllLink="/blog"
          viewAllText="All Posts →"
          emptyText="No posts published yet."
          linkPrefix="/blog"
          items={recentPosts.map((p) => ({
            title: p.title,
            slug: p.slug,
            date: p.date,
          }))}
        />

        <EditorialList
          title="Second Brain Notes"
          viewAllLink="/notes"
          viewAllText="Explore Garden →"
          emptyText="No notes available yet."
          linkPrefix="/notes"
          items={recentNotes.map((n) => ({
            title: n.title,
            slug: n.slug,
            date: n.date,
            tag: "Note",
          }))}
        />
      </div>
    </div>
  );
}

