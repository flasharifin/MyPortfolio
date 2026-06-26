"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";

const categoryLabel: Record<string, string> = {
  mobile: "Mobile",
  frontend: "Frontend",
  backend: "Backend / Database",
  devops: "DevOps",
  ai: "AI",
};

const categoryColor: Record<string, string> = {
  mobile: "from-blue-500/20 to-blue-600/10 border-blue-500/20 text-blue-300",
  frontend: "from-violet-500/20 to-violet-600/10 border-violet-500/20 text-violet-300",
  backend: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/20 text-emerald-300",
  devops: "from-orange-500/20 to-orange-600/10 border-orange-500/20 text-orange-300",
  ai: "from-pink-500/20 to-pink-600/10 border-pink-500/20 text-pink-300",
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
                  {group.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-4 py-2 rounded-lg border bg-gradient-to-br text-sm font-medium ${categoryColor[cat]}`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
