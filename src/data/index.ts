export const personal = {
  name: "Mochamad Arifin",
  title: "Senior Mobile & Full-Stack Developer",
  tagline: "9+ Years Building Fintech Solutions for Android & iOS",
  email: "flashcorparifin@gmail.com",
  phone: "083856601802",
  location: "Surabaya, Indonesia",
  bio: "Experienced software developer specializing in mobile application development for Android and iOS platforms. With over 9 years at PT. Dwidasa Samsara Indonesia, I have delivered 14+ production applications across fintech, banking, healthcare, and security sectors — serving major Indonesian banks and enterprise clients.",
};

export const stats = [
  { label: "Years Experience", value: "9+" },
  { label: "Projects Delivered", value: "15+" },
  { label: "Banking Clients", value: "10+" },
  { label: "Platforms", value: "Android & iOS" },
];

export const skills = [
  { name: "Kotlin", category: "mobile" },
  { name: "Java", category: "mobile" },
  { name: "Swift", category: "mobile" },
  { name: "Obj-C", category: "mobile" },
  { name: "Dart", category: "mobile" },
  { name: "Android", category: "mobile" },
  { name: "iOS", category: "mobile" },
  { name: "Flutter", category: "mobile" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Go", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "Claude AI", category: "ai" },
  { name: "Gemini AI", category: "ai" },
];

export type ProjectCategory = "all" | "banking" | "fintech" | "health" | "security" | "personal";

export interface Project {
  id: number;
  name: string;
  period: string;
  role: string;
  category: ProjectCategory;
  description: string[];
  tech: string[];
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "PT Bank BCA Syariah",
    period: "Nov 2017 – Present",
    role: "Full-Stack & Mobile Developer",
    category: "banking",
    description: [
      "Developed Mobile Banking (Android/iOS), Internet Banking, and admin tools",
      "Implemented merchant payments, QRIS, and Online Onboarding (OOB)",
      "Designed and built new APIs tailored to the bank's evolving needs",
    ],
    tech: ["Android", "iOS", "Kotlin", "Swift", "Go", "PostgreSQL"],
  },
  {
    id: 2,
    name: "PT Bank Ganesha – Bangga App",
    period: "Nov 2018 – Present",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed Mobile Banking 'Bangga' for Android and iOS",
      "New features: Online Onboarding, OVO, GoPay, QRIS, Virtual Accounts, Cardless ATM",
      "Published and maintained apps on Play Store and App Store",
    ],
    tech: ["Android", "iOS", "Kotlin", "Swift"],
  },
  {
    id: 3,
    name: "PT Bank Multarta Sentosa (MAS)",
    period: "Feb 2016 – Jan 2021",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed mobile banking for Android and iOS",
      "New products: Online Onboarding, OVO, GoPay, QRIS, Deposits & Virtual Accounts",
      "Full lifecycle: development, Play Store / App Store upload, maintenance",
    ],
    tech: ["Android", "iOS", "Java", "Swift"],
  },
  {
    id: 4,
    name: "PT BPD Kalimantan Selatan",
    period: "Dec 2020 – Jul 2021",
    role: "Front End Developer",
    category: "banking",
    description: [
      "Developed Business Internet Banking and Web Teller applications",
      "Ensured feature delivery matched mock-up design and specifications",
      "Coordinated with the BPD Kalsel team and internal team",
    ],
    tech: ["Vue.js", "React"],
  },
  {
    id: 5,
    name: "PT Bank INA",
    period: "Feb 2017 – Dec 2020",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed Mobile Banking for Android and iOS",
      "New products: Redesign, Self Registration, Biller Payments, QRIS, Deposits & Virtual Accounts",
      "Application maintenance and bug fixing via ticketing",
    ],
    tech: ["Android", "iOS", "Kotlin", "Swift"],
  },
  {
    id: 6,
    name: "PT Bank Index Selindo",
    period: "Nov 2016 – Aug 2019",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed Home Banking (Android) and Mobile Banking (Android & iOS)",
      "Features: Self-registration, OVO & GoPay biller top-up, QRIS",
      "Published apps to Play Store and App Store",
    ],
    tech: ["Android", "iOS", "Java", "Swift"],
  },
  {
    id: 7,
    name: "PT Bank Maspion",
    period: "Aug 2018 – Aug 2019",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed Home Banking (Android) and Mobile Banking (Android & iOS)",
      "Features: Self-registration, OVO & GoPay biller, QRIS",
    ],
    tech: ["Android", "iOS", "Java", "Obj-C"],
  },
  {
    id: 8,
    name: "PT Bank Artha Graha",
    period: "Apr 2018 – Oct 2019",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed Mobile Banking for Android and iOS",
      "Published to Play Store and App Store",
      "Application maintenance and bug fixing",
    ],
    tech: ["Android", "iOS", "Java", "Swift"],
  },
  {
    id: 9,
    name: "PT Bank Victoria",
    period: "Dec 2017 – Jul 2018",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed Mobile Banking for Android and iOS",
      "Published to Play Store and App Store",
      "Application maintenance and bug fixing",
    ],
    tech: ["Android", "iOS", "Java", "Obj-C"],
  },
  {
    id: 10,
    name: "PT BPR Sejahtera Batam",
    period: "Mar 2018 – Aug 2018",
    role: "Mobile Application Developer",
    category: "banking",
    description: [
      "Developed Mobile Banking for Android and iOS",
      "Published to Play Store and App Store",
    ],
    tech: ["Android", "iOS", "Java"],
  },
  {
    id: 11,
    name: "Kiosque",
    period: "Jul 2020 – Feb 2021",
    role: "Mobile Application Developer",
    category: "fintech",
    description: [
      "Developed customer and merchant applications for Android and iOS",
      "Ensured delivered features and UI matched mock-ups and specifications",
      "Coordinated with Kiosque and DSI teams",
    ],
    tech: ["Android", "iOS", "Kotlin", "Swift"],
  },
  {
    id: 12,
    name: "ARToz Digital Wallet",
    period: "May 2018 – Aug 2018",
    role: "Mobile Application Developer",
    category: "fintech",
    description: [
      "Developed ARToz digital wallet application for Android",
      "Ensured delivered features matched mock-up and specifications",
    ],
    tech: ["Android", "Java"],
  },
  {
    id: 13,
    name: "Klinisia – PT Kawan Sehat Indonesia",
    period: "Jan 2021 – May 2021",
    role: "Front End Developer",
    category: "health",
    description: [
      "Developed health consultation application with doctors",
      "Ensured feature delivery matched mock-up design",
      "Coordinated with Klinisia and internal teams",
    ],
    tech: ["React", "Vue.js"],
  },
  {
    id: 15,
    name: "Kampungku",
    period: "March 2026 – Present",
    role: "Full-Stack & Mobile Developer",
    category: "personal",
    description: [
      "A local social platform for neighborhood communities (RT/RW) — digitalizing administrative needs and local communication",
      "SOS emergency feature allowing residents to quickly request help from nearby neighbors",
      "Digitalization of Surat Pengantar (introduction letters): residents can submit and get documents approved online without visiting the RT/RW office",
      "Financial transparency dashboard enabling residents to monitor neighborhood funds (kas RT/RW) in real-time",
    ],
    tech: ["Flutter", "Dart", "Go", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://gitlab.com/flashcorparifin/kampungku",
  },
  {
    id: 14,
    name: "SAF Security Monitoring",
    period: "Nov 2016 – Jun 2017",
    role: "Mobile Application Developer",
    category: "security",
    description: [
      "Developed SAF security monitoring application for Android",
      "Ensured features matched mock-up design and specifications",
    ],
    tech: ["Android", "Java"],
  },
];

export const experience = {
  company: "PT. Dwidasa Samsara Indonesia / PT. Primavisi Globalindo",
  role: "Software Developer",
  period: "September 2016 – Present",
  summary:
    "Designed and built functional, user-friendly mobile applications for both Android and iOS to solve business challenges and meet specific client needs.",
  responsibilities: [
    "Developing Android and iOS mobile applications according to customer needs",
    "Maintaining, developing, and monitoring systems/software used in business operations",
    "Developing APIs to support mobile application functions",
    "Staying up to date with the latest technology, concepts, and best practices",
    "Coding, testing, debugging, and monitoring document changes",
    "Fixing mobile application bugs via ticketing system",
    "Collaborating with teams to continuously innovate application functions and design",
  ],
};

export const education = {
  degree: "Bachelor of Informatics Engineering",
  university: "University of 17 Agustus 1945 (UNTAG)",
  period: "2012 – 2016",
  gpa: "3.39",
};

export const achievements = [
  {
    title: "BCA FINHACKS 2019",
    subtitle: "Blockchain Technology Innovation Competition",
    date: "August 2019",
    type: "competition",
  },
  {
    title: "National Seminar on Cyber Crime",
    subtitle: "National-level cybersecurity seminar",
    date: "April 2013",
    type: "seminar",
  },
];
