"use client";

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string[];
  skills: { name: string; iconUrl: string }[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Cloud Application Development Intern",
    organization: "FCAJ",
    period: "Mar 2026 — May 2026",
    description: [
      "Developed and deployed an event-driven serverless prototype application using Python and AWS Lambda to optimize core backend logic processing.",
      "Authored comprehensive technical documentation, architectural blueprints, and setup guides for serverless services to streamline team development workflows.",
      "Researched and integrated core AWS services into the project lifecycle, managing version control using Git.",
    ],
    skills: [
      { name: "AWS Lambda", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    ],
  },
  {
    role: "Engineer in Information Technology (Student)",
    organization: "Saigon University (SGU)",
    period: "Mar 2021 — Jun 2026",
    description: [
      "Major in Information Systems with a cumulative GPA of 7.58 / 10.0.",
      "Completed core coursework in OOP, Data Structures & Algorithms, DBMS, Computer Networks, Operating Systems, and Software Engineering.",
      "Achieved TOEIC 625/990 English proficiency.",
    ],
    skills: [
      { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MSSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
    ],
  },
];

export function ExperiencesSection() {
  return (
    <section className="space-y-6 pt-6 pb-2 border-t border-[var(--border)]">
      <div className="flex items-center gap-2">
        <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[var(--foreground)]">
          Experiences & Education
        </h2>
      </div>

      {/* Main Container Card */}
      <div className="divide-y divide-[var(--border)] border border-[var(--card-border)] bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-xs">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-start gap-4 p-6 hover:bg-[var(--background)]/50 transition-colors">
            {/* Left Column: Organization & Timeframe */}
            <div className="w-full md:w-48 shrink-0 space-y-1">
              <h4 className="text-base font-bold font-serif text-[var(--foreground)]">
                {exp.organization}
              </h4>
              <div className="text-xs font-mono text-[var(--muted)]">
                {exp.period}
              </div>
            </div>

            {/* Right Column: Role Details & Skills */}
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                {exp.role}
              </h3>

              <div className="space-y-2 text-sm text-[var(--muted)] leading-relaxed">
                {exp.description.map((desc, dIdx) => (
                  <p key={dIdx} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] font-bold shrink-0">▹</span>
                    <span>{desc}</span>
                  </p>
                ))}
              </div>

              {/* Related Tech Icons Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border)] bg-[var(--background)] text-xs font-mono text-[var(--muted)]"
                  >
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="w-4 h-4 shrink-0"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
