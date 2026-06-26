import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mochamad Arifin – Senior Mobile & Full-Stack Developer",
  description:
    "Portfolio of Mochamad Arifin, a Senior Mobile & Full-Stack Developer with 9+ years building fintech and banking applications for Android and iOS.",
  keywords: ["Mobile Developer", "Android", "iOS", "Fintech", "Kotlin", "Swift", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0f] text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
