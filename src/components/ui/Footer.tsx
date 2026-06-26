import { personal } from "@/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-slate-600 text-xs">
        © {new Date().getFullYear()} {personal.name} · Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
