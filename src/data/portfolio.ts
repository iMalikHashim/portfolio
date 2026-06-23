// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit this file to update the site — components read from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Malik Hashim",
  firstName: "Malik",
  lastName: "Hashim",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack · Mobile · Cloud · AI",
  location: "Lahore, Pakistan",
  email: "malikhashim2320@gmail.com",
  phone: "+92 312 4300907",
  phoneHref: "+923124300907",
  github: "https://github.com/iMalikHashim",
  githubHandle: "iMalikHashim",
  resumeUrl: "./Malik-Hashim-Resume.pdf",
  // Rotating words for the animated hero headline
  roles: [
    "Full-Stack Products",
    "Cross-Platform Apps",
    "LLM-Powered Features",
    "Cloud & CI/CD Pipelines",
    "Real-Time Systems",
  ],
  summary:
    "Senior software engineer with 5+ years building and shipping full-stack products end-to-end — backends, web frontends, cross-platform mobile, and the cloud / CI-CD pipelines that deliver them. I add LLM-powered features — chat, retrieval over user data, voice, and agentic workflows — from model integration to production.",
  tagline:
    "I build and ship full-stack products end-to-end — and bring AI to life inside them.",
};

export const stats = [
  { value: "5+", label: "Years Shipping" },
  { value: "10+", label: "Products Launched" },
  { value: "8", label: "Products Owned at Verasana" },
  { value: "6+", label: "Industries Served" },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / LLM Engineering",
    icon: "✦",
    skills: [
      "OpenAI & Anthropic APIs",
      "Streaming / token-by-token UX",
      "Function calling & tool use",
      "Agentic workflows",
      "RAG & vector search (pgvector, Pinecone)",
      "Prompt engineering",
      "Voice & speech-to-text (Whisper)",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "⛁",
    skills: [
      "NestJS",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Prisma ORM",
      "pgvector",
      "REST APIs",
      "WebSockets",
      "Redis",
    ],
  },
  {
    title: "Web & Frontend",
    icon: "◈",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "MERN Stack",
      "Microfrontends",
    ],
  },
  {
    title: "Mobile",
    icon: "▤",
    skills: [
      "React Native",
      "Flutter",
      "Dart",
      "iOS (Xcode)",
      "Android",
      "Fastlane",
      "App Store / Play Store",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁",
    skills: [
      "AWS (EC2, S3, CloudFront)",
      "CodeBuild / CodePipeline",
      "Google Cloud",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Integrations & Tools",
    icon: "⚙",
    skills: [
      "Google Maps API",
      "Mux",
      "Sentry",
      "Twilio",
      "Stream",
      "BotPress",
      "MSAL Auth",
      "Jira · Agile / Scrum",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Lead Software Engineer · Technical Lead",
    company: "Verasana Inc.",
    location: "United States · Remote",
    period: "2024 — Present",
    highlights: [
      "Lead a team of 3 with full ownership of 8 products end-to-end for US fitness & wellness businesses.",
      "Build cross-platform clients in React Native & Flutter, backed by Mux, Stream, Google Cloud Storage & Sentry.",
      "Ship per-client features — performance dashboards, video courses, in-app chat & FastTrack programs.",
      "Own the full release pipeline — automated iOS/Android deploys via Fastlane, App Store submissions & CI/CD.",
    ],
    stack: ["React Native", "Flutter", "TypeScript", "Dart", "Mux", "Stream", "Fastlane"],
  },
  {
    role: "Senior Full-Stack Engineer",
    company: "CRV Surveillance",
    location: "United States · Remote",
    period: "2022 — 2023",
    highlights: [
      "Built the complete product from scratch — NestJS/PostgreSQL/Prisma backend, Next.js admin portal & Flutter app.",
      "Integrated live CCTV feed streaming into mobile & web via WaveSync with low-latency optimization.",
      "Developed real-time interactive maps (Google Maps API) tracking technicians & contractors in the field.",
      "Built a full invoicing & billing system and MSAL auth with role-based access control.",
    ],
    stack: ["NestJS", "Next.js", "Flutter", "PostgreSQL", "Prisma", "Google Maps API", "MSAL"],
  },
  {
    role: "Full-Stack Engineer",
    company: "Atualizado",
    location: "Remote",
    period: "2022",
    highlights: [
      "Built a ride-sharing platform end-to-end — MERN/Node + Prisma/PostgreSQL backend & cross-platform Flutter client.",
      "Implemented Dijkstra's shortest-path algorithm for bus routing — 30% faster travel times.",
      "Used WebSockets (60% faster updates), Redis & AWS CloudFront for scalable, real-time delivery.",
      "Integrated Google Maps for fare estimation & geocoding; Firebase for push notifications.",
    ],
    stack: ["Node.js", "MERN", "Prisma", "PostgreSQL", "Redis", "Flutter", "WebSockets"],
  },
  {
    role: "Web & Mobile Engineer",
    company: "HHRC Digital — Dubai EDSD",
    location: "Court Cases Management · Remote",
    period: "2021",
    highlights: [
      "Built a Flutter companion app and contributed to the Liferay + React court case management platform.",
      "Created microfrontend packages for modularity and easy cross-team integration.",
      "Implemented Dynamic Form Builders with custom logic for case creation, editing & review workflows.",
    ],
    stack: ["React", "Liferay", "Flutter", "Microfrontends", "Jira"],
  },
  {
    role: "Software Engineer — Conversational AI",
    company: "AutoVoice AI",
    location: "Remote",
    period: "2021",
    highlights: [
      "Built AI-driven conversational chatbot workflows (BotPress) powering automated in-app engagement.",
      "Integrated Twilio A2P messaging for seamless in-app communication.",
    ],
    stack: ["BotPress", "Twilio A2P", "Flutter", "Firebase"],
  },
  {
    role: "Full-Stack Developer",
    company: "Nook",
    location: "NUST Islamabad",
    period: "2020",
    highlights: [
      "Built the frontend in React Native and migrated the backend from Python (Django/Flask) to NestJS.",
      "Designed the database schema and overall system architecture.",
      "Implemented CI/CD with AWS CodeBuild, CodePipeline & Elastic Beanstalk for staging and production.",
    ],
    stack: ["NestJS", "React Native", "PostgreSQL", "AWS CodeBuild", "Elastic Beanstalk"],
  },
  {
    role: "Software Engineer",
    company: "NephroFit",
    location: "Chronic Kidney Disease App · NUST",
    period: "2019",
    highlights: [
      "Led a team of 3 to ship a Flutter + Firebase CKD management app with ChatGPT/LLM integration.",
      "Built ML-based health prediction & monitoring (Inception V3, Bayesian networks).",
      "Turned model outputs into real-time, user-facing health insights — improving patient engagement.",
    ],
    stack: ["Python", "Flutter", "Firebase", "ChatGPT API", "Machine Learning"],
  },
];

export type Project = {
  name: string;
  category: string;
  year: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  accent: string; // gradient key
  featured?: boolean;
  image?: string; // card thumbnail (relative path under public/)
  deck?: string; // base path of the sliced case-study deck (tiles at `${deck}/${i}.jpg`)
  deckTiles?: number; // number of lazy-loaded deck tiles
};

export const projects: Project[] = [
  {
    name: "Stashie",
    category: "E-Commerce · Web & UI/UX",
    year: "2024",
    blurb:
      "A bold, modern e-commerce experience for a multi-brand cannabis & hashables retailer — vibrant product discovery, brand storytelling and a conversion-focused storefront across desktop and mobile.",
    highlights: [
      "Modernized, easy-to-navigate storefront experience",
      "Brand-forward product discovery & merchandising",
      "Fully responsive — desktop & mobile",
    ],
    stack: ["React", "Next.js", "TypeScript", "UI/UX", "E-Commerce"],
    accent: "magenta",
    featured: true,
    image: "./projects/stashie.jpg",
    deck: "./decks/stashie",
    deckTiles: 11,
  },
  {
    name: "MatrixLink",
    category: "Corporate Training · Mobile",
    year: "2024",
    blurb:
      "A mobile-first corporate training platform for Matrix Trade Institute — short-form video microlearning, FastTrack programs and live performance dashboards built for distributed frontline teams.",
    highlights: [
      "Short-form video microlearning workflows",
      "Real-time team performance dashboards",
      "Mux video pipeline + mobile-first UX",
    ],
    stack: ["Flutter", "Mux", "PostgreSQL", "Dashboards", "Microlearning"],
    accent: "cyan",
    featured: true,
    image: "./projects/matrixlink.jpg",
    deck: "./decks/matrixlink",
    deckTiles: 5,
  },
  {
    name: "CRV Surveillance Platform",
    category: "Real-Time Surveillance · Full-Stack",
    year: "2022 — 2023",
    blurb:
      "An end-to-end CCTV surveillance & field-ops platform — live low-latency video streaming, real-time technician tracking, job management and full billing.",
    highlights: [
      "Built complete: NestJS backend, Next.js portal & Flutter app",
      "Live CCTV streaming via WaveSync with low-latency tuning",
      "Real-time field maps + invoicing & role-based MSAL auth",
    ],
    stack: ["NestJS", "Next.js", "Flutter", "PostgreSQL", "Prisma", "Google Maps"],
    accent: "violet",
    featured: true,
    image: "./projects/crv.jpg",
    deck: "./decks/crv",
    deckTiles: 4,
  },
  {
    name: "OptoX",
    category: "SaaS · Collaboration & PM",
    year: "2024",
    blurb:
      "A unified workspace for team communication, project tracking and shared documents — real-time dashboards, SLA monitoring and call/interaction analytics in a single hub.",
    highlights: [
      "Project tracking & team collaboration in one workspace",
      "Real-time SLA & interaction analytics dashboards",
      "Vue + .NET + PostgreSQL, hosted on Azure",
    ],
    stack: ["Vue.js", ".NET", "PostgreSQL", "Azure", "Real-Time"],
    accent: "cyan",
    featured: true,
    image: "./projects/optox.jpg",
    deck: "./decks/optox",
    deckTiles: 4,
  },
  {
    name: "Verasana White-Label Suite",
    category: "Health & Wellness · Mobile",
    year: "2024 — Present",
    blurb:
      "A fleet of 8 white-label fitness & wellness apps for US businesses — video courses, live chat, performance dashboards and FastTrack coaching programs.",
    highlights: [
      "8 products owned end-to-end, leading a team of 3",
      "Mux video + Stream chat + GCS media at production scale",
      "Automated iOS/Android release pipeline via Fastlane",
    ],
    stack: ["React Native", "Flutter", "TypeScript", "Mux", "Stream", "Fastlane"],
    accent: "violet",
    deck: "./decks/verasana",
    deckTiles: 14,
  },
  {
    name: "Atualizado Ride-Sharing",
    category: "Mobility · Real-Time",
    year: "2022",
    blurb:
      "A ride-sharing & smart bus-routing platform with live tracking and dynamic route merging — engineered for speed at scale.",
    highlights: [
      "Dijkstra-based bus routing → 30% faster travel times",
      "WebSockets for 60% faster live updates + Redis caching",
      "Driver & passenger modules with live geolocation",
    ],
    stack: ["Node.js", "MERN", "Flutter", "Redis", "WebSockets", "AWS CloudFront"],
    accent: "magenta",
    featured: true,
  },
  {
    name: "HHRC Court Case Management",
    category: "GovTech · Enterprise Web",
    year: "2021",
    blurb:
      "A court case management system for Dubai's HHRC — a Liferay + React web platform with a Flutter companion app and dynamic form workflows.",
    highlights: [
      "Microfrontend packages for cross-team modularity",
      "Dynamic Form Builders for case create / edit / review",
      "Flutter companion app for field access",
    ],
    stack: ["React", "Liferay", "Flutter", "Microfrontends"],
    accent: "cyan",
  },
  {
    name: "NephroFit — CKD Care",
    category: "HealthTech · AI / ML",
    year: "2019",
    blurb:
      "A chronic kidney disease management app pairing LLM-powered patient guidance with ML-based health prediction and monitoring.",
    highlights: [
      "ChatGPT/LLM integration for patient guidance",
      "ML prediction with Inception V3 & Bayesian networks",
      "Real-time, user-facing health insights",
    ],
    stack: ["Flutter", "Firebase", "Python", "ChatGPT API", "Machine Learning"],
    accent: "violet",
  },
  {
    name: "AutoVoice AI",
    category: "Conversational AI",
    year: "2021",
    blurb:
      "Conversational chatbot workflows powering automated, in-app user engagement with integrated A2P messaging.",
    highlights: [
      "BotPress conversational workflows",
      "Twilio A2P messaging integration",
      "Automated in-app engagement flows",
    ],
    stack: ["BotPress", "Twilio A2P", "Flutter", "Firebase"],
    accent: "magenta",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  tags: string[];
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hashim took our application architecture and code base from alright to exceptional.",
    name: "Shirley Yu",
    role: "CEO, Choosii",
    avatar: "./testimonials/shirley.png",
    tags: ["Mobile App Development", "Product Design", "UI/UX"],
  },
  {
    quote: "Hashim transformed our product and website experience.",
    name: "Dustin Peugeot",
    role: "CEO, Matrix Trade Institute",
    avatar: "./testimonials/dustin.png",
    tags: ["UI/UX", "Website", "Product Design"],
  },
  {
    quote: "Hashim made it modernized, easy to navigate, and incredibly fresh.",
    name: "Taylor Crossman",
    role: "Product Manager, Stashie",
    avatar: "./testimonials/taylor.png",
    tags: ["UI/UX", "Website", "Product Design"],
  },
  {
    quote: "Hashim built our complete digital presence.",
    name: "Nihel Chabrak",
    role: "CEO, Vision Nest",
    avatar: "./testimonials/nihel.png",
    tags: ["Branding", "Website", "Social Presence"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
