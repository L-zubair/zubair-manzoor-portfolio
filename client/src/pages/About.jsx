import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Send,
  UserRound
} from "lucide-react";
import Container from "../components/common/Container";
import PageTransition from "../components/common/PageTransition";
import CTASection from "../components/page/CTASection";
import InfoCard from "../components/page/InfoCard";
import ReferenceHero from "../components/page/ReferenceHero";
import StatsGrid from "../components/page/StatsGrid";
import Timeline from "../components/page/Timeline";
import {
  education,
  experience,
  profile,
  skills,
  strengths
} from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("About", "Learn about Zubair Manzoor's background, work, education, and strengths.");

  const facts = [
    ["Years of experience", "1+"],
    ["Projects completed", "6+"],
    ["Certifications", "6+"],
    ["Current role", profile.role],
    ["Location", profile.location],
    ["Languages", profile.languages.join(", ")]
  ];

  return (
    <PageTransition>
      <ReferenceHero
        prefix="About"
        accent="Me"
        description={profile.summary}
        primary={{ label: "Contact me", to: "/contact", icon: <Send size={16} /> }}
        secondary={{ label: "View my work", to: "/projects" }}
      />

      <section className="pb-7">
        <Container>
          <StatsGrid />
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-4 lg:grid-cols-[.95fr_1.2fr_.85fr]">
          <InfoCard title="Personal Introduction" icon={UserRound}>
            <div className="space-y-3 text-sm leading-6 text-slate-600">
              <p>
                I&apos;m passionate about turning ideas into reliable, user-friendly solutions. I enjoy crafting clean React frontends, integrating APIs, and supporting production systems with strong monitoring and incident-analysis practices.
              </p>
              <p>
                I believe in clean code, continuous learning, and building digital products that create real impact for users and teams.
              </p>
            </div>
          </InfoCard>

          <InfoCard title="My Journey" icon={BriefcaseBusiness}>
            <Timeline items={experience.slice(0, 4)} compact />
          </InfoCard>

          <InfoCard title="Education" icon={GraduationCap}>
            <Timeline items={education} compact />
          </InfoCard>
        </Container>
      </section>

      <section className="bg-mist py-8">
        <Container className="grid gap-4 lg:grid-cols-3">
          <InfoCard title="What I Do" icon={BriefcaseBusiness}>
            <div className="space-y-3">
              {skills.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="mt-0.5 shrink-0 text-blue" size={16} />
                  <div>
                    <p className="text-xs font-black text-ink">{title}</p>
                    <p className="mt-0.5 text-[10px] leading-4 text-slate-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Core Strengths" icon={BookOpen}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {strengths.slice(0, 6).map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-2">
                  <Icon className="mt-0.5 shrink-0 text-blue" size={15} />
                  <div>
                    <p className="text-xs font-black text-ink">{title}</p>
                    <p className="text-[10px] leading-4 text-slate-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Quick Facts" icon={BarChart3}>
            <dl className="space-y-3">
              {facts.map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-4 text-xs">
                  <dt className="flex items-center gap-2 font-semibold text-slate-500">
                    <CheckCircle2 size={13} className="text-blue" /> {label}
                  </dt>
                  <dd className="text-right font-black text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </InfoCard>
        </Container>
      </section>

      <CTASection />
    </PageTransition>
  );
}
