import { ArrowRight, BriefcaseBusiness, FolderKanban, UserRound } from "lucide-react";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageTransition from "../components/common/PageTransition";
import CTASection from "../components/page/CTASection";
import InfoCard from "../components/page/InfoCard";
import ProjectCard from "../components/page/ProjectCard";
import ReferenceHero from "../components/page/ReferenceHero";
import SectionLabel from "../components/page/SectionLabel";
import StatsGrid from "../components/page/StatsGrid";
import { profile, projects, skills, toolbelt } from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle(
    "Associate Software Developer",
    "Zubair Manzoor builds frontend applications, REST API integrations, SaaS products, and monitoring-supported systems."
  );

  return (
    <PageTransition>
      <ReferenceHero
        prefix="Zubair"
        accent="Manzoor"
        subtitle={profile.role}
        description={profile.summary}
        primary={{ label: "View resume", href: profile.resumeUrl, download: "Zubair-Manzoor.pdf" }}
        secondary={{ label: "View projects", to: "/projects", icon: <FolderKanban size={16} /> }}
      />

      <section className="pb-7">
        <Container>
          <StatsGrid />
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-4 lg:grid-cols-3">
          <InfoCard title="About Me" icon={UserRound}>
            <p className="text-sm leading-6 text-slate-600">
              Frontend-focused developer and technical support professional building clean interfaces, reliable integrations, and production-ready digital systems.
            </p>
            <Button to="/about" variant="ghost" className="mt-3 min-h-8 rounded-lg px-0 text-blue">
              Read more <ArrowRight size={14} />
            </Button>
          </InfoCard>

          <InfoCard title="Skills & Tech Stack" icon={BriefcaseBusiness}>
            <div className="flex flex-wrap gap-2">
              {toolbelt.slice(0, 8).map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-mist px-2.5 py-1.5 text-[10px] font-bold text-slate-600"
                >
                  <Icon size={12} className="text-blue" /> {label}
                </span>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Current Work" icon={BriefcaseBusiness}>
            <p className="text-sm leading-6 text-slate-600">
              Working at <strong className="text-ink">Valtech</strong> as an Associate Software Developer, providing L2 digital support, incident analysis, monitoring, and production troubleshooting.
            </p>
            <Button to="/resume" variant="ghost" className="mt-3 min-h-8 rounded-lg px-0 text-blue">
              View experience <ArrowRight size={14} />
            </Button>
          </InfoCard>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="mt-4 grid gap-5 lg:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-8">
        <Container>
          <SectionLabel>What I Do</SectionLabel>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ title, description, icon: Icon }) => (
              <InfoCard key={title}>
                <Icon size={21} className="text-blue" />
                <h3 className="mt-3 text-sm font-black text-ink">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
              </InfoCard>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </PageTransition>
  );
}
