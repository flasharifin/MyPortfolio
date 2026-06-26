"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-10 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />

          <div className="pl-16">
            {/* Dot */}
            <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

            <div className="bg-[#16161e] border border-white/5 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Building2 size={14} />
                    <span>{experience.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 whitespace-nowrap self-start">
                  <Calendar size={13} />
                  <span>{experience.period}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-6 leading-relaxed italic border-l-2 border-blue-500/30 pl-4">
                {experience.summary}
              </p>

              <div className="space-y-3">
                {experience.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-400 text-sm">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
