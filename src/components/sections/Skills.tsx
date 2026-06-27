"use client";

import { motion } from "framer-motion";
import {
  SiKotlin, SiSwift, SiDart, SiFlutter,
  SiReact, SiTypescript, SiVuedotjs,
  SiGo, SiPostgresql, SiFirebase,
  SiDocker, SiXcode,
} from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";
import { skills } from "@/data";
import type { IconType } from "react-icons";

const skillIcon: Record<string, IconType> = {
  "Kotlin":     SiKotlin,
  "Java":       FaJava,
  "Swift":      SiSwift,
  "Dart":       SiDart,
  "Flutter":    SiFlutter,
  "Obj-C":      SiXcode,
  "React":      SiReact,
  "TypeScript": SiTypescript,
  "Vue.js":     SiVuedotjs,
  "Go":         SiGo,
  "PostgreSQL": SiPostgresql,
  "Firebase":   SiFirebase,
  "Docker":     SiDocker,
  "Claude AI":  FaBrain,
  "Gemini AI":  FaBrain,
};

const categoryColor: Record<string, { badge: string; icon: string }> = {
  mobile:   { badge: "from-blue-500/15 to-blue-600/5 border-blue-500/20 text-blue-300 hover:border-blue-400/50 hover:shadow-[0_0_16px_rgba(59,130,246,0.15)]",   icon: "text-blue-400" },
  frontend: { badge: "from-violet-500/15 to-violet-600/5 border-violet-500/20 text-violet-300 hover:border-violet-400/50 hover:shadow-[0_0_16px_rgba(139,92,246,0.15)]", icon: "text-violet-400" },
  backend:  { badge: "from-emerald-500/15 to-emerald-600/5 border-emerald-500/20 text-emerald-300 hover:border-emerald-400/50 hover:shadow-[0_0_16px_rgba(16,185,129,0.15)]", icon: "text-emerald-400" },
  devops:   { badge: "from-orange-500/15 to-orange-600/5 border-orange-500/20 text-orange-300 hover:border-orange-400/50 hover:shadow-[0_0_16px_rgba(249,115,22,0.15)]",   icon: "text-orange-400" },
  ai:       { badge: "from-pink-500/15 to-pink-600/5 border-pink-500/20 text-pink-300 hover:border-pink-400/50 hover:shadow-[0_0_16px_rgba(236,72,153,0.15)]",       icon: "text-pink-400" },
};

const levels = [
  {
    key: "core" as const,
    label: "Core Skills",
    desc: "Expert · 7+ years daily use",
    dot: "bg-blue-400",
  },
  {
    key: "proficient" as const,
    label: "Proficient",
    desc: "Delivered production projects",
    dot: "bg-emerald-400",
  },
  {
    key: "familiar" as const,
    label: "Familiar",
    desc: "Used in practice, still growing",
    dot: "bg-slate-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
        </motion.div>

        <div className="space-y-10">
          {levels.map((level, li) => {
            const group = skills.filter((s) => s.level === level.key);
            if (!group.length) return null;
            return (
              <motion.div
                key={level.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: li * 0.1 }}
              >
                {/* Section divider */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${level.dot}`} />
                  <span className="text-sm font-semibold text-white">{level.label}</span>
                  <div className="flex-1 h-px bg-white/8" />
                  <span className="text-xs text-slate-600 whitespace-nowrap">{level.desc}</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  {group.map((skill, si) => {
                    const Icon = skillIcon[skill.name];
                    const colors = categoryColor[skill.category];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: li * 0.05 + si * 0.04 }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-gradient-to-br text-sm font-medium transition-all duration-200 cursor-default ${colors.badge}`}
                      >
                        {Icon && <Icon size={15} className={`flex-shrink-0 ${colors.icon}`} />}
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
