"use client";

import Link from "next/link";
import { posts, projects, notes } from "#site/content";
import { EditorialList } from "@/components/EditorialList";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  // Featured projects
  const featuredProjects = projects.slice(0, 2);
  // Recent blog posts
  const recentPosts = posts.slice(0, 4);
  // Recent notes
  const recentNotes = notes.slice(0, 4);

  return (
    <div className="space-y-16 py-4">
      {/* 1. Hero Bio Section (Simple, Authentic & Grounded) */}
      <section className="relative pt-2 pb-6 border-b border-[var(--border)]">
        <div className="block overflow-hidden leading-relaxed">
          {/* Floating Circle Avatar */}
          <div className="float-right ml-6 mb-4 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[var(--border)] shadow-md shape-outside-circle">
            <img
              src="/assets/avatar.jpg"
              alt={SITE_CONFIG.name}
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif leading-tight mb-4">
            Hi, I&apos;m Nguyen Ngoc Tin<span className="text-[var(--accent-coral)]">.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            <p>
              I recently graduated with an Information Technology degree majoring in Information Systems from Saigon University, focusing on full-stack web development and cloud technologies.
            </p>
            <p>
              I’m naturally curious and enjoy learning something new every day — whether it’s trying out a new tool, writing code, or exploring how things work under the hood.
            </p>
            <p>
              This website is my personal notebook and digital space where I share my technical <Link href="/notes" className="text-[var(--accent)] underline hover:no-underline transition-colors font-medium">notes</Link>, write <Link href="/blog" className="text-[var(--accent)] underline hover:no-underline transition-colors font-medium">articles</Link>, and showcase my <Link href="/projects" className="text-[var(--accent)] underline hover:no-underline transition-colors font-medium">projects</Link>.
            </p>
            <p>
              Feel free to explore my work or send me a message!
            </p>

            {/* Contact Information Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm font-mono text-[var(--muted)]">
              <a
                href={`mailto:${SITE_CONFIG.author.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {SITE_CONFIG.author.email}
              </a>

              <a
                href={`tel:${SITE_CONFIG.author.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (+84) 397 662 903
              </a>

              <a
                href={SITE_CONFIG.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>

              <a
                href={SITE_CONFIG.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </a>
            </div>
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
          title="Notes"
          viewAllLink="/notes"
          viewAllText="Explore Notes →"
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



