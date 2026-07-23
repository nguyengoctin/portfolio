"use client";

interface TechItem {
  name: string;
  iconUrl: string;
}

const row1Techs: TechItem[] = [
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

const row2Techs: TechItem[] = [
  { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MSSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "SQLite", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

const row3Techs: TechItem[] = [
  { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Redux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "GraphQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Prisma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Vercel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Bash", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
];

export function TechStackMarquee() {
  return (
    <section className="space-y-6 pt-6 pb-2 border-t border-[var(--border)]">
      <div className="flex items-center gap-2">
        <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[var(--foreground)]">
          Tech Stack I've Been Learning
        </h2>
      </div>

      {/* Marquee Container (No Card Borders, Bigger Icons & Pills, 3 Rows) */}
      <div className="relative overflow-hidden space-y-4 py-2">
        {/* Row 1: Right-to-Left */}
        <div className="overflow-hidden">
          <div className="animate-scroll-rtl flex gap-4">
            {[...row1Techs, ...row1Techs, ...row1Techs].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="shrink-0">
                <div className="bg-[var(--card-bg)] flex items-center justify-center rounded-full px-5 py-2.5 text-base font-sans text-[var(--foreground)] hover:opacity-80 transition-opacity shadow-xs">
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="w-6 h-6 shrink-0 mr-2.5"
                    loading="lazy"
                  />
                  <span className="whitespace-nowrap font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left-to-Right */}
        <div className="overflow-hidden">
          <div className="animate-scroll-ltr flex gap-4">
            {[...row2Techs, ...row2Techs, ...row2Techs].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="shrink-0">
                <div className="bg-[var(--card-bg)] flex items-center justify-center rounded-full px-5 py-2.5 text-base font-sans text-[var(--foreground)] hover:opacity-80 transition-opacity shadow-xs">
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="w-6 h-6 shrink-0 mr-2.5"
                    loading="lazy"
                  />
                  <span className="whitespace-nowrap font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Right-to-Left */}
        <div className="overflow-hidden">
          <div className="animate-scroll-rtl flex gap-4">
            {[...row3Techs, ...row3Techs, ...row3Techs].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="shrink-0">
                <div className="bg-[var(--card-bg)] flex items-center justify-center rounded-full px-5 py-2.5 text-base font-sans text-[var(--foreground)] hover:opacity-80 transition-opacity shadow-xs">
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="w-6 h-6 shrink-0 mr-2.5"
                    loading="lazy"
                  />
                  <span className="whitespace-nowrap font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
