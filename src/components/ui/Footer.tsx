import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { personal } from "@/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} {personal.name} · Built with Next.js & Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 hover:text-blue-400 text-xs transition-colors duration-200"
          >
            <FaLinkedin size={13} />
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 hover:text-white text-xs transition-colors duration-200"
          >
            <SiGithub size={13} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
