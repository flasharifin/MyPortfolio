"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ChevronDown, ChevronUp, ExternalLink, GitBranch } from "lucide-react";
import { projects, type ProjectCategory } from "@/data";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Personal", value: "personal" },
  { label: "Banking", value: "banking" },
  { label: "Fintech", value: "fintech" },
  { label: "Health", value: "health" },
  { label: "Security", value: "security" },
];

const categoryBadge: Record<string, string> = {
  banking: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  fintech: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  health: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  security: "bg-red-500/10 text-red-400 border-red-500/20",
  personal: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isPersonal = project.category === "personal";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className={`card-hover relative bg-[#16161e] border rounded-2xl p-6 flex flex-col ${
        isPersonal
          ? "border-amber-500/20 hover:border-amber-500/50 hover:shadow-[0_16px_40px_rgba(245,158,11,0.12)]"
          : "border-white/5 hover:border-blue-500/25 hover:shadow-[0_16px_40px_rgba(59,130,246,0.1)]"
      }`}
    >
      {/* Active badge for personal projects */}
      {isPersonal && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-medium">Active</span>
        </div>
      )}

      <div className="flex items-start justify-between gap-3 mb-3 pr-16">
        <h3 className="text-white font-semibold text-base leading-snug">{project.name}</h3>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className={`text-xs px-2.5 py-1 rounded-full border font-medium capitalize ${categoryBadge[project.category]}`}
        >
          {project.category}
        </span>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <Calendar size={12} />
          <span>{project.period}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <Tag size={12} />
          <span>{project.role}</span>
        </div>
      </div>

      {/* Description toggle */}
      <div className="mb-4">
        <ul
          className={`space-y-1.5 overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-96" : "max-h-12"
          }`}
        >
          {project.description.map((d, i) => (
            <li key={i} className="text-slate-400 text-xs leading-relaxed flex items-start gap-2">
              <span className={`mt-1 shrink-0 ${isPersonal ? "text-amber-500" : "text-blue-500"}`}>
                •
              </span>
              {d}
            </li>
          ))}
        </ul>
        {project.description.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-2 flex items-center gap-1 text-xs transition-colors ${
              isPersonal
                ? "text-amber-400 hover:text-amber-300"
                : "text-blue-400 hover:text-blue-300"
            }`}
          >
            {expanded ? (
              <>Less <ChevronUp size={12} /></>
            ) : (
              <>More <ChevronDown size={12} /></>
            )}
          </button>
        )}
      </div>

      {/* Tech badges */}
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Repo link */}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 transition-colors"
        >
          <GitBranch size={12} />
          View Repository
          <ExternalLink size={11} />
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Experience</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {projects.length}+ production applications delivered across fintech, banking,
            healthcare, and security sectors.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f.value
                  ? f.value === "personal"
                    ? "bg-amber-500 text-white shadow-[0_0_16px_rgba(245,158,11,0.3)]"
                    : "bg-blue-500 text-white shadow-[0_0_16px_rgba(59,130,246,0.3)]"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {f.label}
              {f.value !== "all" && (
                <span className="ml-2 text-xs opacity-60">
                  {projects.filter((p) => p.category === f.value).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
