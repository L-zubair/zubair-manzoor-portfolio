import { motion } from "framer-motion";
import { Activity, CheckCircle2, Code2 } from "lucide-react";
import { profile } from "../../data/portfolio";
import Button from "../common/Button";
import Container from "../common/Container";

export default function ReferenceHero({
  prefix,
  accent,
  subtitle,
  description,
  primary,
  secondary,
  metricLabel = "System uptime",
  metricValue = "99.9%"
}) {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2 text-sm font-black text-blue">
            <span aria-hidden="true">👋</span> Hi, I&apos;m
          </span>
          <h1 className="mt-4 text-balance text-5xl font-black leading-[.98] tracking-[-0.055em] text-ink sm:text-6xl">
            {prefix} <span className="text-blue">{accent}</span>
          </h1>
          {subtitle && <p className="mt-3 text-xl font-black text-blue">{subtitle}</p>}
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {primary && (
              <Button
                to={primary.to}
                href={primary.href}
                target={primary.href ? "_blank" : undefined}
                rel={primary.href ? "noreferrer" : undefined}
                className="min-h-11 rounded-lg px-5"
              >
                {primary.icon}
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button
                to={secondary.to}
                href={secondary.href}
                target={secondary.href ? "_blank" : undefined}
                rel={secondary.href ? "noreferrer" : undefined}
                variant="secondary"
                className="min-h-11 rounded-lg px-5"
              >
                {secondary.icon}
                {secondary.label}
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative mx-auto min-h-[310px] w-full max-w-2xl"
        >
          <div className="absolute left-4 top-12 w-[55%] rounded-2xl bg-ink p-5 text-white shadow-2xl">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
            </div>
            <pre className="mt-5 overflow-hidden text-[10px] leading-5 text-slate-400 sm:text-xs">
              <code>
                <span className="text-violet-300">const</span> developer = {"{"}
                {"\n"}  name: <span className="text-emerald-300">&quot;Zubair Manzoor&quot;</span>,
                {"\n"}  role: <span className="text-emerald-300">&quot;Associate Developer&quot;</span>,
                {"\n"}  skills: [<span className="text-amber-300">&quot;React&quot;</span>, <span className="text-amber-300">&quot;Node.js&quot;</span>],
                {"\n"}  focus: <span className="text-emerald-300">&quot;Real-world solutions&quot;</span>
                {"\n"}{"}"};
              </code>
            </pre>
            <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-slate-500">
              <Code2 size={13} className="text-amber-400" /> JavaScript
            </div>
          </div>

          <div className="absolute bottom-0 right-[12%] size-64 overflow-hidden rounded-[42%_42%_24%_24%] bg-gradient-to-br from-blue-100 to-blue-300 shadow-xl sm:size-72">
            <img
              src={profile.portraitImage}
              alt={`Portrait of ${profile.name}`}
              width="800"
              height="1000"
              fetchPriority="high"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="absolute right-0 top-10 w-40 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-black uppercase text-slate-500">{metricLabel}</p>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Live
              </span>
            </div>
            <p className="mt-2 text-xl font-black text-ink">{metricValue}</p>
            <Activity className="mt-2 w-full text-blue" size={32} />
          </div>

          <div className="absolute bottom-6 right-0 grid size-16 place-items-center rounded-xl bg-white text-blue shadow-xl">
            <CheckCircle2 size={30} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
