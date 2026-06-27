import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionProvider from "@/components/ui/MotionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mochamad-arifin.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mochamad Arifin – Senior Mobile & Full-Stack Developer",
  description:
    "Portfolio of Mochamad Arifin, a Senior Mobile & Full-Stack Developer with 10+ years building fintech and banking applications for Android and iOS.",
  keywords: ["Mobile Developer", "Android", "iOS", "Fintech", "Kotlin", "Swift", "React"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mochamad Arifin – Senior Mobile & Full-Stack Developer",
    description:
      "10+ years building fintech & banking apps for Android and iOS. 15+ production apps delivered across BCA Syariah, Bank Ganesha, Bank INA, and more.",
    images: [
      {
        url: "/profile.png",
        width: 400,
        height: 400,
        alt: "Mochamad Arifin",
      },
    ],
    siteName: "Mochamad Arifin Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Mochamad Arifin – Senior Mobile & Full-Stack Developer",
    description:
      "10+ years building fintech & banking apps for Android and iOS. 15+ production apps delivered.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0f] text-slate-200 antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
