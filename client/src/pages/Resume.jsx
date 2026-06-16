import { Award, CheckCircle2, GraduationCap, Send, Star, UserRound } from "lucide-react";
import Container from "../components/common/Container";
import PageTransition from "../components/common/PageTransition";
import CTASection from "../components/page/CTASection";
import InfoCard from "../components/page/InfoCard";
import ReferenceHero from "../components/page/ReferenceHero";
import StatsGrid from "../components/page/StatsGrid";
import Timeline from "../components/page/Timeline";
import {
  achievements,
  education,
  experience,
  responsibilities,
  toolbelt
} from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Resume() {
  useDocumentTitle("Resume", "Professional experience, education, skills, and certifications of Zubair Manzoor.");

  return (
    <PageTransition>
      <ReferenceHero
        prefix="My"
        accent="Resume"
        description="Explore my professional experience, education, technical strengths, and career highlights that drive my passion for building impactful digital solutions."
        primary={{ label: "Contact me", to: "/contact", icon: <Send size={16} /> }}
        secondary={{ label: "View projects", to: "/projects" }}
      />

      <section className="pb-7">
        <Container>
          <StatsGrid />
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-4 lg:grid-cols-[1.15fr_.8fr_1fr]">
          <InfoCard title="Professional Experience" icon={Award}>
            <Timeline items={experience} compact />
          </InfoCard>

          <div className="space-y-4">
            <InfoCard title="Education" icon={GraduationCap}>
              <Timeline items={education} compact />
            </InfoCard>

            <InfoCard title="Key Skills" icon={Star}>
              <div className="flex flex-wrap gap-2">
                {toolbelt.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-slate-600"
                  >
                    <Icon size={12} className="text-blue" /> {label}
                  </span>
                ))}
              </div>
            </InfoCard>
          </div>

          <div className="space-y-4">
            <InfoCard title="Profile Summary" icon={UserRound}>
              <p className="text-sm leading-6 text-slate-600">
                I&apos;m Zubair Manzoor, a software developer from Kashmir, currently working in Bengaluru. I specialize in full-stack applications, monitoring systems, robust APIs, and scalable digital products that solve real-world problems.
              </p>
            </InfoCard>

            <InfoCard title="Core Responsibilities / Highlights" icon={Star}>
              <ul className="space-y-2.5">
                {responsibilities.map((item) => (
                  <li key={item} className="flex gap-2 text-xs leading-5 text-slate-600">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-8">
        <Container>
          <InfoCard title="Certifications & Achievements" icon={Award}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.slice(0, 4).map(({ title, issuer, year, icon: Icon }) => (
                <article key={title} className="rounded-xl border border-slate-200 bg-white p-4">
                  <Icon size={20} className="text-blue" />
                  <h3 className="mt-3 text-xs font-black text-ink">{title}</h3>
                  <p className="mt-1 text-[10px] text-slate-500">{issuer}</p>
                  <p className="mt-2 text-[10px] font-black text-blue">{year}</p>
                </article>
              ))}
            </div>
          </InfoCard>
        </Container>
      </section>

      <CTASection title="Interested in my experience? Let's connect." />
    </PageTransition>
  );
}
