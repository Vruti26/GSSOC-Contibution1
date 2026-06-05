import React from "react";
import {
  Terminal,
  Github,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Career Pilot",
      description: "AI-powered career guidance and portfolio platform.",
      tech: ["React", "Node.js", "MongoDB"],
      status: "DEPLOYED",
      github: "#",
      live: "#",
    },
    {
      name: "Nyay Setu",
      description: "Legal assistance platform for citizens.",
      tech: ["React", "Express", "Firebase"],
      status: "ACTIVE",
      github: "#",
      live: "#",
    },
    {
      name: "KampusKart",
      description: "Campus marketplace for students.",
      tech: ["React", "Tailwind", "Supabase"],
      status: "RUNNING",
      github: "#",
      live: "#",
    },
    {
      name: "DailyForge",
      description: "Productivity and habit tracking application.",
      tech: ["Next.js", "TypeScript", "MongoDB"],
      status: "BUILDING",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="w-full px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)]">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-green-500/20 bg-zinc-900 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>

          <div className="ml-4 flex items-center gap-2 text-sm text-green-400">
            <Terminal size={16} />
            <span>Projects Directory</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono">
          <div className="mb-8 text-green-400">
            <span>visitor@portfolio:~$ </span>
            <span>ls projects</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border border-green-500/20 bg-zinc-950 p-5 transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-400">
                    <FolderGit2 size={18} />
                    <h3 className="font-semibold">{project.name}</h3>
                  </div>

                  <span className="rounded border border-green-500/30 px-2 py-1 text-xs text-green-400">
                    {project.status}
                  </span>
                </div>

                <div className="mt-4 text-sm text-zinc-300">
                  {project.description}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-green-500/20 px-2 py-1 text-xs text-green-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-green-500/30 px-3 py-2 text-sm text-green-400 transition hover:bg-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <Github size={15} />
                    Source
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-green-500/30 px-3 py-2 text-sm text-green-400 transition hover:bg-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <ExternalLink size={15} />
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-green-400">
            <span>visitor@portfolio:~$ </span>
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>
    </section>
  );
}