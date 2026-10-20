// ============================================================
//  EDIT THIS FILE to change text, projects and contact details.
// ============================================================

export const COMPANY = {
  name: "ARspire Tech",
  tagline: "Innovate • Build • Grow",
  headline: "We build software that helps your business grow.",
  intro:
    "ARspire Tech is a Lahore-based software company crafting fast, beautiful web and mobile products, from business ledgers to college management systems.",
  founded: "2026",
};

// TODO: replace these placeholders with your real details.
export const CONTACT = {
  email: "hello@arspiretech.com",
  phone: "+92 3284771442",
  city: "Lahore",
  country: "Pakistan",
  address: "Lahore, Punjab, Pakistan",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM (PKT)",
  mapQuery: "Lahore, Pakistan",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: 8, suffix: "+", label: "Projects built" },
  { value: 15, suffix: "+", label: "Technologies used" },
  { value: 3, suffix: "", label: "Platforms: Web, Mobile, API" },
  { value: 1, suffix: "", label: "npm package published" },
];

export const SERVICES = [
  {
    icon: "Globe",
    title: "Web Development",
    text: "Fast, responsive and SEO-friendly websites and web apps built with modern React.",
  },
  {
    icon: "Smartphone",
    title: "Mobile Apps",
    text: "Cross-platform Android and iOS apps with React Native, plus fixes for failing builds, store rejections and outdated apps.",
  },
  {
    icon: "Server",
    title: "Backend & APIs",
    text: "Secure, scalable Node.js and MongoDB backends with clean, documented APIs.",
  },
  {
    icon: "Briefcase",
    title: "ERP, CRM & Ledgers",
    text: "Custom business software for accounts, inventory, students, bookings and more.",
  },
  {
    icon: "Palette",
    title: "UI / UX Design",
    text: "Clear, modern interfaces designed around how your customers actually work.",
  },
  {
    icon: "LifeBuoy",
    title: "Support & Maintenance",
    text: "Updates, monitoring and improvements so your product keeps growing with you.",
  },
];

// group: "client" | "mobile" | "tools" (used by the filter tabs on the Projects section)
// metrics: up to 3 short facts shown as a strip on the card
export const PROJECT_FILTERS = [
  { id: "all", label: "All work" },
  { id: "client", label: "Client work" },
  { id: "mobile", label: "Mobile apps" },
  { id: "tools", label: "Developer tools" },
];

export const PROJECTS = [
  {
    group: "client",
    icon: "Landmark",
    category: "Corporate Website",
    title: "HVB Outsourcing",
    text: "A professional website for a finance consulting firm offering fractional CFO, accounting advisory, audit preparation and tax support to growing businesses.",
    tags: ["React", "Responsive UI", "Business Website"],
    link: "https://www.hvboutsourcing.com/",
    gradient: "linear-gradient(135deg,#0f4a2c 0%,#1f7a4a 100%)",
  },
  {
    group: "client",
    icon: "Plane",
    category: "Ledger System",
    title: "Friendly Travel & Tours Ledger",
    text: "A ledger and accounts system for a travel and tours business to record bookings, payments and balances, and keep every customer account organised.",
    tags: ["Ledger", "Accounts", "Reports"],
    link: null,
    gradient: "linear-gradient(135deg,#8a6a1f 0%,#c89b3c 100%)",
  },
  {
    group: "client",
    icon: "GraduationCap",
    category: "Management System",
    title: "City College Management System",
    text: "A complete college management system built for City College to manage students, staff, classes and records from a single dashboard.",
    tags: ["Dashboard", "Students", "Admin Panel"],
    link: null,
    gradient: "linear-gradient(135deg,#0b3a22 0%,#c89b3c 140%)",
  },
  {
    group: "mobile",
    icon: "Car",
    category: "Ride-hailing App · iOS & Android",
    title: "Raah-e-Haq",
    text: "A ride-hailing app for Pakistan with separate passenger and driver experiences in one codebase: Google Maps booking with stops, fare estimates in PKR, phone OTP login and driver document uploads.",
    metrics: [
      { label: "Roles", value: "Passenger + Driver" },
      { label: "Stops per ride", value: "Up to 5" },
      { label: "Status", value: "In development" },
    ],
    tags: ["React Native", "TypeScript", "Google Maps", "REST API"],
    link: null,
    github: "https://github.com/AttayR/Raah-e-Haq",
    gradient: "linear-gradient(135deg,#0b3a22 0%,#1f7a4a 100%)",
  },
  {
    group: "mobile",
    icon: "ShieldCheck",
    category: "Encrypted Vault · iOS & Android",
    title: "AR Vault",
    text: "A private vault for photos, videos and documents. Every file is encrypted on the device, the key is locked by a PIN, and Face ID or fingerprint can unlock it.",
    metrics: [
      { label: "Encryption", value: "AES-256-GCM" },
      { label: "PIN key", value: "Argon2id" },
      { label: "Unlock", value: "PIN · Biometrics" },
    ],
    tags: ["Expo", "Expo Router", "TypeScript", "Secure Store"],
    link: null,
    github: "https://github.com/AttayR/SecureApp",
    gradient: "linear-gradient(135deg,#12231a 0%,#8a6a1f 120%)",
  },
  {
    group: "mobile",
    icon: "Bird",
    category: "On-device AI App",
    title: "Trail Notebook",
    text: "Identifies a bird from its song and writes a journal note, fully offline. BirdNET and the Gemma 3 1B language model both run on the phone. Built for DEV Hacktoberfest 2026.",
    metrics: [
      { label: "Tap to species", value: "282 ms" },
      { label: "On-device LLM", value: "39 tok/s" },
      { label: "Unit tests", value: "82" },
    ],
    tags: ["Expo SDK 57", "New Architecture", "llama.rn", "TFLite"],
    link: null,
    github: "https://github.com/AttayR/trail-notebook",
    gradient: "linear-gradient(135deg,#166039 0%,#e0b862 140%)",
  },
  {
    group: "tools",
    icon: "Terminal",
    category: "Developer Tool · npm",
    title: "expo-preflight",
    text: "A command-line checker that finds the problems behind failed Expo builds and App Store or Play Store rejections, and shows the exact fix, before you run eas build.",
    metrics: [
      { label: "Install", value: "npx expo-preflight" },
      { label: "Checks", value: "iOS · Android · EAS" },
      { label: "Runs in", value: "CI or locally" },
    ],
    tags: ["TypeScript", "Node.js CLI", "Expo", "EAS"],
    link: "https://www.npmjs.com/package/expo-preflight",
    github: "https://github.com/AttayR/expo-preflight",
    gradient: "linear-gradient(135deg,#072a18 0%,#0f4a2c 100%)",
  },
  {
    group: "tools",
    icon: "Layers",
    category: "Production Starter",
    title: "Expo Router Redux Starter",
    text: "The base we start client apps from: login with automatic token refresh, protected routes, dark mode, translations, tests and CI already set up.",
    metrics: [
      { label: "Auth", value: "Token refresh" },
      { label: "Languages", value: "EN · ES" },
      { label: "Quality", value: "Strict TS · CI" },
    ],
    tags: ["Expo Router", "Redux Toolkit", "RTK Query", "GitHub Actions"],
    link: null,
    github: "https://github.com/AttayR/expo-router-redux-starter",
    gradient: "linear-gradient(135deg,#8a6a1f 0%,#0f4a2c 120%)",
  },
];

// Pull requests to libraries other React Native teams depend on.
export const OPEN_SOURCE = [
  {
    status: "Merged",
    repo: "margelo/react-native-quick-crypto",
    text: "Added a Jest mock backed by node:crypto, so apps using the library can run unit tests without native code.",
    link: "https://github.com/margelo/react-native-quick-crypto/pull/1076",
  },
  {
    status: "In review",
    repo: "software-mansion/react-native-screens",
    text: "An iOS 26 fix that keeps custom header items sized correctly while a screen is popped from the stack.",
    link: "https://github.com/software-mansion/react-native-screens/pull/4784",
  },
  {
    status: "Published",
    repo: "expo-preflight on npm",
    text: "Our own open-source CLI that catches Expo build and store-review problems before they cost a release.",
    link: "https://www.npmjs.com/package/expo-preflight",
  },
];

export const PROCESS = [
  { icon: "MessagesSquare", title: "Discover", text: "We listen, understand your business and define clear goals." },
  { icon: "PenTool", title: "Design", text: "Wireframes and polished UI so you see the product before it is built." },
  { icon: "Code2", title: "Build", text: "Clean, tested code delivered in short iterations with regular demos." },
  { icon: "Rocket", title: "Launch & Grow", text: "Smooth deployment, training and ongoing support as you scale." },
];

export const TECH = [
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Laravel",
  "Redux",
  "Zustand",
  "React Query",
  "Google Maps",
  "Git",
  "REST APIs",
];

export const VALUES = [
  { icon: "Lightbulb", title: "Innovate", text: "Fresh ideas and modern tools to solve real problems." },
  { icon: "Hammer", title: "Build", text: "Reliable, maintainable products made with care." },
  { icon: "TrendingUp", title: "Grow", text: "Software that scales with your business and customers." },
];
