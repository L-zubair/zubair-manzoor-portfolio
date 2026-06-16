import { Award, BarChart3, BookOpen, GraduationCap, Send, Trophy } from "lucide-react";
import Container from "../components/common/Container";
import PageTransition from "../components/common/PageTransition";
import CTASection from "../components/page/CTASection";
import InfoCard from "../components/page/InfoCard";
import ReferenceHero from "../components/page/ReferenceHero";
import SectionLabel from "../components/page/SectionLabel";
import StatsGrid from "../components/page/StatsGrid";
import { achievements, strengths, toolbelt } from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

const achievementStats = [
  { value: "2+", label: "Professional awards", icon: Award, tone: "blue" },
  { value: "Valtech", label: "Recognition", icon: Trophy, tone: "green" },
  { value: "5+", label: "Major projects", icon: BarChart3, tone: "purple" },
  { value: "Continuous", label: "Learning", icon: GraduationCap, tone: "orange" }
];

export default function Achievements() {
  useDocumentTitle("Achievements", "Awards, certifications, internships, and learning milestones of Zubair Manzoor.");

  const featured = achievements.find((item) => item.featured);

  return (
    <PageTransition>
      <ReferenceHero
        prefix="My"
        accent="Achievements"
        description="Recognitions, certifications, and milestones that reflect my learning journey, technical growth, and professional impact."
        primary={{ label: "View certificates", to: "/achievements", icon: <Trophy size={16} /> }}
        secondary={{ label: "Contact me", to: "/contact", icon: <Send size={16} /> }}
      />

      <section className="pb-7">
        <Container>
          <StatsGrid items={achievementStats} />
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel>Featured Achievement</SectionLabel>
            <article className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-blue-dark to-blue p-7 text-white shadow-xl">
              <div className="flex items-start justify-between gap-5">
                <span className="grid size-24 place-items-center rounded-full bg-amber-400/20 text-amber-300">
                  <Trophy size={52} />
                </span>
                <span className="rounded-lg bg-blue px-3 py-1 text-[10px] font-black uppercase">
                  Featured
                </span>
              </div>
              <h2 className="mt-8 text-2xl font-black">{featured.title}</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">{featured.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="rounded-lg bg-white/10 px-3 py-2 font-bold">{featured.year}</span>
                <span className="font-black">{featured.issuer}</span>
              </div>
            </article>
          </div>

          <div>
            <SectionLabel>Certifications</SectionLabel>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {achievements.filter((item) => !item.featured).map(({ title, issuer, description, year, icon: Icon }) => (
                <InfoCard key={title}>
                  <div className="flex gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sky text-blue">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-xs font-black text-ink">{title}</h3>
                      <p className="mt-1 text-[10px] font-bold text-blue">{issuer}</p>
                      <p className="mt-2 text-[10px] leading-4 text-slate-500">{description}</p>
                      <p className="mt-2 text-[10px] font-black text-slate-400">{year}</p>
                    </div>
                  </div>
                </InfoCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-8">
        <Container className="grid gap-5 lg:grid-cols-[1fr_1fr_.9fr]">
          <InfoCard title="Professional Highlights" icon={Award}>
            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-2 rounded-xl border border-slate-100 p-3">
                  <Icon size={17} className="shrink-0 text-blue" />
                  <div>
                    <p className="text-xs font-black text-ink">{title}</p>
                    <p className="mt-1 text-[10px] leading-4 text-slate-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Achievement Timeline" icon={BarChart3}>
            <div className="relative space-y-3 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-px before:bg-blue/25">
              {achievements.slice().reverse().map((item) => (
                <div key={item.title} className="relative pl-7">
                  <span className="absolute left-0 top-1 size-4 rounded-full border-4 border-white bg-blue" />
                  <p className="text-[10px] font-black text-blue">{item.year}</p>
                  <p className="text-xs font-bold text-ink">{item.title}</p>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Learning & Growth" icon={BookOpen}>
            <p className="text-sm leading-6 text-slate-600">
              I continuously upskill to stay current with industry trends and engineering best practices.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {toolbelt.slice(0, 10).map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-2.5 py-1.5 text-[10px] font-bold text-slate-600"
                >
                  <Icon size={12} className="text-blue" /> {label}
                </span>
              ))}
            </div>
          </InfoCard>
        </Container>
      </section>

      <CTASection />
    </PageTransition>
  );
}
