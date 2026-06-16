import {
  Activity,
  Award,
  BookOpen,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  GraduationCap,
  Layers3,
  MonitorCog,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wrench
} from "lucide-react";

export const profile = {
  name: "Zubair Manzoor",
  role: "Associate Software Developer",
  shortRole: "Associate",
  resumeUrl: "/resume/Zubair-Manzoor.pdf",
  profileImage: "/images/zubair-manzoor-profile.webp",
  portraitImage: "/images/zubair-manzoor-portrait.webp",
  email: "zubairmanzoor5578@gmail.com",
  phone: "+91 9149533730",
  location: "Bengaluru, India",
  hometown: "Kashmir, India",
  summary:
    "I build modern web applications, scalable digital experiences, monitoring systems, and impactful products that solve real-world problems.",
  availability: "Open to work",
  languages: ["English", "Hindi", "Urdu", "Kashmiri"],
  socials: {
    github: "https://github.com/L-zubair",
    linkedin: "https://www.linkedin.com/in/zubair-manzoor-0a8391247/",
    instagram: "",
    twitter: ""
  }
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact", to: "/contact" }
];

export const stats = [
  { value: "1+", label: "Years of experience", icon: BriefcaseBusiness, tone: "blue" },
  { value: "6+", label: "Projects completed", icon: Boxes, tone: "green" },
  { value: "6+", label: "Certifications", icon: Award, tone: "purple" },
  { value: "Associate", label: "Software Developer", icon: Code2, tone: "orange" }
];

export const skills = [
  {
    title: "Full-Stack Development",
    description: "Building scalable web applications using modern stacks.",
    icon: Layers3,
    items: ["React", "Node.js", "JavaScript", "TypeScript"]
  },
  {
    title: "Monitoring & Support",
    description: "Designing and enhancing monitoring systems and dashboards.",
    icon: MonitorCog,
    items: ["Dynatrace", "Grafana", "OpenSearch", "Production Support"]
  },
  {
    title: "APIs & Integrations",
    description: "Building robust REST APIs and third-party integrations.",
    icon: ServerCog,
    items: ["REST APIs", "MongoDB", "Akamai", "Data Processing"]
  },
  {
    title: "Problem Solving",
    description: "Analytical thinking and practical solutions for real products.",
    icon: BrainCircuit,
    items: ["Python", "Algorithms", "Debugging", "Troubleshooting"]
  }
];

export const toolbelt = [
  { label: "React", icon: Code2 },
  { label: "Node.js", icon: ServerCog },
  { label: "JavaScript", icon: Code2 },
  { label: "TypeScript", icon: Code2 },
  { label: "Python", icon: BrainCircuit },
  { label: "MongoDB", icon: Database },
  { label: "Tailwind CSS", icon: Layers3 },
  { label: "REST APIs", icon: Activity },
  { label: "Dynatrace", icon: Gauge },
  { label: "Grafana", icon: MonitorCog },
  { label: "OpenSearch", icon: Network },
  { label: "Git & GitHub", icon: GitBranch }
];

export const experience = [
  {
    period: "2025 - Present",
    title: "Associate Software Developer",
    company: "Valtech",
    description:
      "Working on monitoring platforms, APIs, dashboards, and full-stack features that drive reliable and scalable digital products.",
    highlights: ["React", "Node.js", "TypeScript", "REST APIs", "Dynatrace"]
  },
  {
    period: "2024 - 2025",
    title: "IT Support",
    company: "Asian Computer Tech",
    description:
      "Provided system and network support, resolved technical issues, and ensured smooth IT operations across the organization.",
    highlights: ["Windows", "Networking", "Troubleshooting", "Active Directory"]
  },
  {
    period: "2024",
    title: "Reinforcement Learning Algorithms",
    company: "IIT Guwahati - Internship",
    description:
      "Implemented and experimented with reinforcement-learning algorithms for decision-making and optimization problems.",
    highlights: ["Python", "RL Models", "Machine Learning", "Data Analysis"]
  },
  {
    period: "2023",
    title: "Data Processing and API Integration",
    company: "NIT Srinagar - Internship",
    description:
      "Processed and transformed datasets, integrated APIs, and built pipelines for real-time data workflows.",
    highlights: ["Python", "Pandas", "REST APIs", "Data Processing"]
  }
];

export const education = [
  {
    period: "2020 - 2024",
    title: "B.E. in Computer Science and Engineering",
    company: "Matrusri Engineering College, Hyderabad",
    description:
      "Focused on software development, data structures, database systems, networking, and modern web technologies.",
    highlights: ["Computer Science", "Software Engineering"]
  }
];

export const responsibilities = [
  "Develop and maintain full-stack web applications",
  "Build and enhance monitoring systems and dashboards",
  "Design, develop, and integrate RESTful APIs",
  "Monitor system health and manage incidents",
  "Troubleshoot issues and ensure system reliability",
  "Collaborate with teams to deliver quality solutions"
];

export const projects = [
  {
    id: "jkstream",
    title: "JKStream",
    eyebrow: "Student & job platform",
    description:
      "A student and job platform for Jammu and Kashmir connecting students with opportunities, resources, and career growth.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/jkstream.webp",
    featured: true,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "lonetree",
    title: "LoneTree",
    eyebrow: "Link-in-bio SaaS",
    description:
      "A link-in-bio SaaS platform to create profile pages, track clicks, and grow an online presence.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
    image: "/images/projects/lonetree.webp",
    featured: true,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "valley-cement",
    title: "ValleyCement Website",
    eyebrow: "Corporate website",
    description:
      "Responsive corporate website for a cement company showcasing products, services, and company information.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/valley-cement.webp",
    featured: false,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "text-utility",
    title: "Text Utility Web App",
    eyebrow: "Web utility",
    description:
      "Case converter, word counter, slug generator, and more useful text tools in one focused interface.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/text-utility.webp",
    featured: false,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    eyebrow: "Portfolio platform",
    description:
      "A developer portfolio built with React and Tailwind CSS, including smooth interactions and responsive design.",
    tags: ["React", "Tailwind CSS", "Vercel"],
    image: "/images/projects/portfolio.webp",
    featured: false,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "snake-ai",
    title: "Snake AI",
    eyebrow: "Reinforcement learning",
    description:
      "An AI agent trained with reinforcement learning to play Snake using a Deep Q-Network.",
    tags: ["Python", "TensorFlow", "NumPy"],
    image: "/images/projects/snake-ai.webp",
    featured: false,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "streamflix",
    title: "StreamFlix",
    eyebrow: "Streaming experience",
    description:
      "Modern movie streaming web application with authentication, categories, watchlists, and a responsive UI.",
    tags: ["React", "TMDB API", "Tailwind CSS"],
    image: "/images/projects/streamflix.webp",
    featured: false,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    eyebrow: "Analytics dashboard",
    description:
      "Analytics dashboard with charts, user management, and real-time business metrics.",
    tags: ["React", "Chart.js", "REST APIs"],
    image: "/images/projects/admin-dashboard.webp",
    featured: false,
    liveUrl: "",
    sourceUrl: ""
  }
];

export const achievements = [
  {
    year: "Mar 2025",
    title: "Spark Award at Valtech",
    issuer: "Valtech",
    description:
      "Recognized for quick learning, ownership, adaptability, and a strong contribution to professional work.",
    icon: Trophy,
    featured: true
  },
  {
    year: "2024",
    title: "AWS / Cloud Learning",
    issuer: "Amazon Web Services - Various Courses",
    description: "Cloud fundamentals, services, deployment concepts, and modern architectures.",
    icon: Cloud
  },
  {
    year: "2024",
    title: "IIT Guwahati Internship Certificate",
    issuer: "IIT Guwahati",
    description: "Reinforcement Learning Algorithms internship and applied research experience.",
    icon: GraduationCap
  },
  {
    year: "2023",
    title: "NIT Srinagar Internship Certificate",
    issuer: "NIT Srinagar",
    description: "Data Processing and API Integration internship certification.",
    icon: GraduationCap
  },
  {
    year: "2024",
    title: "Frontend / Web Development Learning",
    issuer: "freeCodeCamp",
    description: "Modern UI/UX development with React and Tailwind CSS.",
    icon: Code2
  },
  {
    year: "2024",
    title: "Monitoring Tools & Observability Learning",
    issuer: "Grafana Labs",
    description: "Monitoring, dashboards, alerting, and observability fundamentals.",
    icon: Activity
  },
  {
    year: "2024",
    title: "Problem Solving / Technical Learning",
    issuer: "LeetCode",
    description: "Data structures, algorithms, and practical problem solving.",
    icon: BookOpen
  }
];

export const strengths = [
  { title: "Clean Code", description: "Maintainable, scalable, efficient code.", icon: Code2 },
  { title: "Continuous Learning", description: "Staying current with tools and practices.", icon: BookOpen },
  { title: "Ownership", description: "Taking responsibility and delivering quality.", icon: ShieldCheck },
  { title: "Collaboration", description: "Working clearly and effectively with teams.", icon: Users },
  { title: "Quick Learner", description: "Adapting rapidly to new technologies.", icon: Sparkles },
  { title: "Problem Solving", description: "Creating solutions for real-world problems.", icon: Wrench }
];
