"use client";

import { motion } from "framer-motion";
import {
  SiKotlin, SiSwift, SiDart, SiFlutter, SiAndroid,
  SiReact, SiTypescript, SiVuedotjs,
  SiGo, SiPostgresql, SiFirebase,
  SiDocker,
} from "react-icons/si";
import { FaJava, FaApple, FaBrain } from "react-icons/fa";
import { skills } from "@/data";
import type { IconType } from "react-icons";

const skillIcon: Record<string, IconType> = {
  "Kotlin": SiKotlin,
  "Java": FaJava,
  "Swift": SiSwift,
  "Dart": SiDart,
  "Flutter": SiFlutter,
  "Android": SiAndroid,
  "iOS": FaApple,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Vue.js": SiVuedotjs,
  "Go": SiGo,
  "PostgreSQL": SiPostgresql,
  "Firebase": SiFirebase,
  "Docker": SiDocker,
  "Claude AI": FaBrain,
  "Gemini AI": FaBrain,
};

const categoryLabel: Record<string, string> = {
  mobile: "Mobile",
  frontend: "Frontend",
  backend: "Backend / Database",
  devops: "DevOps",
  ai: "AI",
};

const categoryColor: Record<string, { badge: string; icon: string }> = {
  mobile:   { badge: "from-blue-500/15 to-blue-600/5 border-blue-500/20 text-blue-300 hover:border-blue-400/50 hover:shadow-[0_0_16px_rgba(59,130,246,0.15)]",   icon: "text-blue-400" },
  frontend: { badge: "from-violet-500/15 to-violet-600/5 border-violet-500/20 text-violet-300 hover:border-violet-400/50 hover:shadow-[0_0_16px_rgba(139,92,246,0.15)]", icon: "text-violet-400" },
  backend:  { badge: "from-emerald-500/15 to-emerald-600/5 border-emerald-500/20 text-emerald-300 hover:border-emerald-400/50 hover:shadow-[0_0_16px_rgba(16,185,129,0.15)]", icon: "text-emerald-400" },
  devops:   { badge: "from-orange-500/15 to-orange-600/5 border-orange-500/20 text-orange-300 hover:border-orange-400/50 hover:shadow-[0_0_16px_rgba(249,115,22,0.15)]",   icon: "text-orange-400" },
  ai:       { badge: "from-pink-500/15 to-pink-600/5 border-pink-500/20 text-pink-300 hover:border-pink-400/50 hover:shadow-[0_0_16px_rgba(236,72,153,0.15)]",       icon: "text-pink-400" },
};

const categories = ["mobile", "frontend", "backend", "devops", "ai"];

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

        <div className="space-y-8">
          {categories.map((cat, ci) => {
            const group = skills.filter((s) => s.category === cat);
            if (!group.length) return null;
            const colors = categoryColor[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.08 }}
              >
                <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">
                  {categoryLabel[cat]}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.map((skill, si) => {
                    const Icon = skillIcon[skill.name];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: ci * 0.05 + si * 0.04 }}
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
