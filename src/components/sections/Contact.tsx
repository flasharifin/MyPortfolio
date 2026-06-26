"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check } from "lucide-react";
import { personal } from "@/data";

type Status = "idle" | "loading" | "success" | "error";

function CopyableInfo({ icon: Icon, label, value, href }: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string | null;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex items-center gap-4 p-5 rounded-xl bg-[#16161e] border border-white/5 hover:border-blue-500/20 transition-colors duration-200">
      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-500 mb-0.5">{label}</p>
        {href ? (
          <a href={href} className="text-white text-sm hover:text-blue-400 transition-colors truncate block">
            {value}
          </a>
        ) : (
          <p className="text-white text-sm truncate">{value}</p>
        )}
      </div>
      {navigator && (
        <button
          onClick={handleCopy}
          title="Copy"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-500 hover:text-blue-400"
        >
          {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
        </button>
      )}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Open to new opportunities. Feel free to reach out for collaborations, projects, or just
            to say hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
              { icon: MapPin, label: "Location", value: personal.location, href: null },
            ].map((item) => (
              <CopyableInfo key={item.label} {...item} />
            ))}
          </motion.div>

          {/* Message form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === "success" ? (
              <div className="bg-[#16161e] border border-emerald-500/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-center h-full min-h-64">
                <CheckCircle2 size={40} className="text-emerald-400" />
                <div>
                  <p className="text-white font-semibold mb-1">Message Sent!</p>
                  <p className="text-slate-400 text-sm">I&apos;ll get back to you as soon as possible.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#16161e] border border-white/5 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 block mb-1.5">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Collaboration"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs">
                    <AlertCircle size={13} />
                    Failed to send. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors duration-200"
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
