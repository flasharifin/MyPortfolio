"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Mail, Download, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { personal, stats } from "@/data";

function Typewriter({ text, delay = 600 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <>
      {displayed}
      {!done && <span className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 align-middle animate-pulse" />}
    </>
  );
}

function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(num)) { setDisplay(value); return; }
    const suffix = value.replace(/[0-9]/g, "");
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/12 rounded-full blur-3xl" />
        <div className="blob-1 absolute top-3/4 left-2/3 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-6 tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-24 h-24 md:w-28 md:h-28">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0f]">
                <Image
                  src="/profile.png"
                  alt={personal.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0a0a0f]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 min-h-[2rem]"
        >
          <Typewriter text={personal.title} delay={700} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-medium text-sm transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.25)] hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]"
          >
            <Mail size={16} />
            Get In Touch
          </a>
          <a
            href="/CV_Mochamad_Arifin.pdf"
            download
            className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 hover:border-white/30 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/30 text-slate-400 hover:text-blue-400 text-sm transition-all duration-200"
          >
            <FaLinkedin size={14} />
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-slate-400 hover:text-white text-sm transition-all duration-200"
          >
            <SiGithub size={14} />
            GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-hover bg-white/5 border border-white/5 hover:border-blue-500/20 rounded-xl p-4 text-center group"
            >
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-200">
                <CountUp value={s.value} />
              </div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
