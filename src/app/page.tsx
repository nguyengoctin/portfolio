"use client";

import Link from "next/link";
import { posts, projects, notes } from "#site/content";
import { EditorialList } from "@/components/EditorialList";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { ExperiencesSection } from "@/components/ExperiencesSection";



export default function HomePage() {
  // Featured projects
  const featuredProjects = projects.slice(0, 2);
  // Recent blog posts
  const recentPosts = posts.slice(0, 4);
  // Recent notes
  const recentNotes = notes.slice(0, 4);

  return (
    <div className="space-y-16 py-4">
      {/* 1. Hero Bio Section (Simple, Humble & Natural Notebook Style) */}
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
            Hi, I'm Tin<span className="text-[var(--accent-coral)]">.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            <p>
              I’m <strong className="text-[var(--foreground)] font-semibold">Nguyen Ngoc Tin</strong>, a recent software engineering graduate on a continuous journey to learn something new every day.
            </p>
            <p>
              I work with web development and code, knowing just a little bit about many things. The more I learn, the more I realize how much more there is to explore.
            </p>
            <p>
              I love reading books, exploring new technologies, and sharing interesting things I stumble upon. I see myself as a lifelong beginner who simply enjoys the process of learning.
            </p>
            <p>
              Think of this site as my online notebook — a quiet place where I document my daily learning journey, store coding notes, and share my small experiments.
            </p>
            <p>
              Feel free to read my <Link href="/blog" className="text-[var(--accent)] underline hover:text-[var(--accent-coral)] transition-colors">posts</Link> or browse through my <Link href="/notes" className="text-[var(--accent)] underline hover:text-[var(--accent-coral)] transition-colors">notes</Link>!
            </p>
          </div>
        </div>
      </section>

      {/* 2. Continuous Scrolling Tech Stack Section */}
      <TechStackMarquee />

      {/* 3. Experiences & Education Section */}
      <ExperiencesSection />

      {/* 4. Featured Projects Grid Section */}
      {featuredProjects.length > 0 && (
        <section className="space-y-5 pt-4 border-t border-[var(--border)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">Featured Projects</h2>
            <Link href="/projects" className="text-xs sm:text-sm text-[var(--accent)] font-medium hover:underline">
              All Projects →
            </Link>
          </div>
          <div className="focus-dim-group divide-y divide-[var(--border)]">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="focus-dim-item group py-3.5 transition-all duration-200">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {project.title}
                  </span>
                  <div className="flex gap-3 shrink-0 text-xs">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline font-medium">Live ↗</a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:underline">GitHub ↗</a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed line-clamp-1">
                  {project.description}
                </p>
              </div>
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



