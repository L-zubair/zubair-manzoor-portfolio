import { Boxes, Code2, ExternalLink, Github, Layers3, Send } from "lucide-react";
import Container from "../components/common/Container";
import PageTransition from "../components/common/PageTransition";
import CTASection from "../components/page/CTASection";
import ProjectCard from "../components/page/ProjectCard";
import ReferenceHero from "../components/page/ReferenceHero";
import SectionLabel from "../components/page/SectionLabel";
import StatsGrid from "../components/page/StatsGrid";
import { profile, projects } from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

const projectStats = [
  { value: "4", label: "Projects showcased", icon: Boxes, tone: "green" },
  { value: "Live", label: "All projects linked", icon: ExternalLink, tone: "orange" },
  { value: "React", label: "Primary stack", icon: Layers3, tone: "blue" },
  { value: "SaaS / Web", label: "Project focus", icon: Code2, tone: "purple" }
];

const categories = ["All", "Portfolio", "SaaS", "Corporate", "Music UI", "React", "JavaScript"];

export default function Projects() {
  useDocumentTitle("Projects", "Full-stack, SaaS, AI, and frontend projects built by Zubair Manzoor.");

  return (
    <PageTransition>
      <ReferenceHero
        prefix="My"
        accent="Projects"
        description="I build practical, scalable, and user-focused digital products that solve real-world problems and create meaningful impact."
        primary={{
          label: "View GitHub",
          href: profile.socials.github,
          icon: <Github size={16} />
        }}
        secondary={{ label: "Contact me", to: "/contact", icon: <Send size={16} /> }}
      />

      <section className="pb-7">
        <Container>
          <StatsGrid items={projectStats} />
        </Container>
      </section>

      <section className="pb-6">
        <Container>
          <SectionLabel>Project Categories</SectionLabel>
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-1.5 text-xs font-bold ${
                  index === 0
                    ? "border-blue bg-blue text-white"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 1} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Have a project in mind? Let's build something impactful together." />
    </PageTransition>
  );
}
