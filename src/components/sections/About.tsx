"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2 } from "lucide-react";
import { personal } from "@/data";

const highlights = [
  { icon: Briefcase, label: "Role", value: "Software Developer" },
  { icon: MapPin, label: "Location", value: "Surabaya, Indonesia" },
  { icon: Code2, label: "Focus", value: "Mobile & Full-Stack" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-300 text-base leading-relaxed mb-6">{personal.bio}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              My primary focus has been on the fintech and banking sector, working with institutions
              such as BCA Syariah, Bank Ganesha, Bank INA, Bank Maspion, and many others — building
              features like QRIS payments, Online Onboarding, and Virtual Accounts that are used by
              thousands of daily active users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
              <p className="text-sm text-slate-300">
                Currently working at{" "}
                <span className="text-white font-semibold">PT. Dwidasa Samsara Indonesia</span>{" "}
                since September 2016.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
