"use client";

import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";
import { education, achievements } from "@/data";

const achievementIcon: Record<string, string> = {
  competition: "trophy",
  seminar: "mic",
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education & Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">
              Education
            </h3>
            <div className="bg-[#16161e] border border-white/5 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">{education.degree}</h4>
                  <p className="text-slate-400 text-sm mb-3">{education.university}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500">{education.period}</span>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <Star size={11} />
                      <span>GPA {education.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">
              Training & Achievements
            </h3>
            <div className="flex flex-col gap-4">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="bg-[#16161e] border border-white/5 rounded-2xl p-6 flex items-start gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg ${
                      a.type === "competition"
                        ? "bg-yellow-500/10"
                        : "bg-purple-500/10"
                    }`}
                  >
                    {a.type === "competition" ? "🏆" : "🎤"}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{a.title}</h4>
                    <p className="text-slate-400 text-xs mb-2">{a.subtitle}</p>
                    <span className="text-xs text-slate-600">{a.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
