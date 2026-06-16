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
  role: "Associate Software Developer - Frontend Developer - Technical Support",
  shortRole: "Associate Developer",
  resumeUrl: "/resume/Zubair-Manzoor.pdf",
  profileImage: "/images/zubair-manzoor-profile.webp",
  portraitImage: "/images/zubair-manzoor-portrait.webp",
  email: "zubairmanzoor5578@gmail.com",
  phone: "+91 9149533730",
  location: "Bengaluru, India",
  hometown: "Kashmir, India",
  summary:
    "Associate Software Developer with experience in frontend development, enterprise technical support, application monitoring, and SaaS product development. Skilled in building responsive React interfaces, integrating REST APIs, and supporting production systems through monitoring and incident analysis.",
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
  { value: "5+", label: "Projects completed", icon: Boxes, tone: "green" },
  { value: "L2", label: "Digital support", icon: Award, tone: "purple" },
  { value: "React", label: "Frontend focus", icon: Code2, tone: "orange" }
];

export const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive interfaces with React.js, JavaScript, Tailwind CSS, Bootstrap, and Material UI.",
    icon: Layers3,
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend & APIs",
    description: "Developing REST APIs and secure backend services with Node.js, Express.js, MongoDB, and JWT.",
    icon: ServerCog,
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT"]
  },
  {
    title: "Monitoring & Support",
    description: "Supporting production systems through Akamai, Dynatrace, Grafana, OpenSearch, MuleSoft APIs, and incident analysis.",
    icon: MonitorCog,
    items: ["Akamai", "Dynatrace", "Grafana", "OpenSearch", "MuleSoft APIs"]
  },
  {
    title: "AI & Data",
    description: "Applying Python, Pandas, data analysis, Q-Learning, and Deep Q-Network concepts to AI projects.",
    icon: BrainCircuit,
    items: ["Python", "Pandas", "Data Analysis", "Q-Learning", "DQN"]
  }
];

export const toolbelt = [
  { label: "React.js", icon: Code2 },
  { label: "JavaScript", icon: Code2 },
  { label: "HTML5", icon: Code2 },
  { label: "CSS3", icon: Code2 },
  { label: "Tailwind CSS", icon: Layers3 },
  { label: "Bootstrap", icon: Layers3 },
  { label: "Material UI", icon: Layers3 },
  { label: "Node.js", icon: ServerCog },
  { label: "Express.js", icon: ServerCog },
  { label: "REST APIs", icon: Activity },
  { label: "JWT Auth", icon: ShieldCheck },
  { label: "MongoDB", icon: Database },
  { label: "SQL", icon: Database },
  { label: "Akamai", icon: Network },
  { label: "Dynatrace", icon: Gauge },
  { label: "Grafana", icon: MonitorCog },
  { label: "OpenSearch", icon: Network },
  { label: "MuleSoft APIs", icon: Activity },
  { label: "WordPress", icon: Code2 },
  { label: "Python", icon: BrainCircuit },
  { label: "Git & GitHub", icon: GitBranch },
  { label: "Vercel", icon: Cloud },
  { label: "Render", icon: Cloud }
];

export const experience = [
  {
    period: "Apr 2025 - Present",
    title: "Associate Software Developer - Technical Support",
    company: "Valtech",
    description:
      "Provide L2 digital support for enterprise applications and production environments, monitor application performance, analyze incidents, investigate logs, and collaborate with engineering teams to maintain platform stability.",
    highlights: ["L2 Digital Support", "Akamai", "Dynatrace", "Grafana", "OpenSearch", "MuleSoft APIs"]
  },
  {
    period: "Nov 2024 - Apr 2025",
    title: "Frontend Web Developer - Apprenticeship",
    company: "INTERNKAAR",
    description:
      "Developed responsive web applications using React.js, integrated REST APIs with frontend applications, built reusable UI components, and improved user experience.",
    highlights: ["React.js", "REST APIs", "Reusable Components", "Responsive UI"]
  },
  {
    period: "Aug 2024 - Nov 2024",
    title: "Web Developer Intern",
    company: "MyProBuddy",
    description:
      "Worked on low-code web development platforms, configured web solutions according to business requirements, and collaborated with teams to deliver quality projects.",
    highlights: ["Low-Code Development", "Web Solutions", "Team Collaboration"]
  },
  {
    period: "Apr 2024 - Aug 2024",
    title: "Web Development Intern",
    company: "GAOTek Inc.",
    description:
      "Developed and maintained WordPress websites, updated website content, and enhanced responsiveness across pages.",
    highlights: ["WordPress", "Responsive Design", "Content Updates"]
  },
  {
    period: "Sep 2024 - Jul 2025",
    title: "WordPress Developer",
    company: "Tabernacle Software",
    description:
      "Designed and maintained responsive WordPress websites with a focus on performance, usability, and improved user experience.",
    highlights: ["WordPress", "Performance", "User Experience"]
  }
];

export const education = [
  {
    period: "2020 - 2024",
    title: "Bachelor of Engineering in Computer Science and Engineering",
    company: "Matrusri Engineering College, Osmania University",
    description: "Completed engineering studies with a focus on software development, computer science fundamentals, and modern web technologies. CGPA: 6.57/10.",
    highlights: ["Computer Science", "Software Engineering", "CGPA: 6.57/10"]
  },
  {
    period: "2020",
    title: "Class 12",
    company: "Govt. Boys Higher Secondary Pampore",
    description: "Completed Class 12 under the Jammu and Kashmir Board of School Education.",
    highlights: ["JKBOSE"]
  },
  {
    period: "2018",
    title: "Class 10",
    company: "Government High School Zainatrag",
    description: "Completed Class 10 under the Jammu and Kashmir Board of School Education.",
    highlights: ["JKBOSE"]
  }
];

export const responsibilities = [
  "Provide L2 digital support for enterprise applications and production environments",
  "Monitor application performance using Akamai, Dynatrace, Grafana, OpenSearch, and MuleSoft APIs",
  "Analyze incidents, investigate logs, and collaborate with engineering teams",
  "Build responsive frontend applications using React.js and modern UI practices",
  "Integrate REST APIs with frontend applications",
  "Design and maintain WordPress websites with a focus on performance and user experience"
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
    featured: false,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "lonetree",
    title: "LoneTree",
    eyebrow: "Link-in-bio SaaS",
    description:
      "A complete Link-in-Bio SaaS platform with authentication, analytics, QR codes, templates, and dashboard features.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/lonetree.webp",
    featured: true,
    liveUrl: "",
    sourceUrl: ""
  },
  {
    id: "valley-cement",
    title: "Valley Cement Website",
    eyebrow: "Corporate website",
    description:
      "Responsive corporate website with product, gallery, contact, and inquiry pages focused on performance, accessibility, and clean UI design.",
    tags: ["React.js", "Tailwind CSS"],
    image: "/images/projects/valley-cement.webp",
    featured: true,
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
      "Modern portfolio website showcasing projects, experience, technical skills, resume downloads, and contact form delivery.",
    tags: ["React.js", "Tailwind CSS", "Vercel"],
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
      "AI-powered Snake Game using Q-Learning and Deep Q-Network reinforcement learning algorithms.",
    tags: ["Python", "Reinforcement Learning", "Q-Learning", "DQN"],
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
      "Received the Spark Award at Valtech for outstanding adaptation and contribution.",
    icon: Trophy,
    featured: true
  },
  {
    year: "2025",
    title: "JEWELS OF VALTECH Recognition",
    issuer: "Valtech",
    description: "Recognized under JEWELS OF VALTECH for performance and dedication.",
    icon: Award
  },
  {
    year: "2024 - 2025",
    title: "Real-World Project Delivery",
    issuer: "Portfolio Projects",
    description: "Developed multiple SaaS, React.js, WordPress, and AI-based applications.",
    icon: Code2
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
