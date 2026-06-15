import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Code2, Database, Server } from "lucide-react";
import { profile } from "../../data/portfolio";
import Badge from "../common/Badge";
import Button from "../common/Button";
import Container from "../common/Container";

const orbitItems = [
  { icon: Code2, label: "Frontend", position: "-left-5 top-12" },
  { icon: Server, label: "Backend", position: "-right-7 top-24" },
  { icon: Database, label: "Data", position: "bottom-5 left-4" }
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="grid-pattern pointer-events-none absolute inset-0" />
      <div className="absolute right-[-10rem] top-[-10rem] size-[32rem] rounded-full bg-blue/10 blur-3xl" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Badge className="gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            {profile.availability}
          </Badge>
          <h1 className="mt-7 max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-ink sm:text-7xl">
            I build digital products that feel
            <span className="text-blue"> simple.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/projects" arrow>
              View my work
            </Button>
            <Button to="/contact" variant="secondary">
              Start a conversation
            </Button>
          </div>
          <a
            href="#selected-work"
            className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-blue"
          >
            <ArrowDown size={17} />
            Scroll to explore
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-10 rounded-full bg-blue/20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2.25rem] p-5 sm:p-7">
            <div className="rounded-[1.7rem] bg-ink p-6 text-white sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  portfolio.tsx
                </span>
              </div>
              <div className="py-14 text-center">
                <div className="mx-auto size-32 overflow-hidden rounded-[2rem] border-4 border-blue/70 bg-blue shadow-2xl shadow-blue/40">
                  <img
                    src={profile.profileImage}
                    alt={`Portrait of ${profile.name}`}
                    width="800"
                    height="800"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-7 text-2xl font-black">{profile.name}</p>
                <p className="mt-2 text-sm font-semibold text-blue-300">{profile.role}</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="text-emerald-400" size={20} />
                <div>
                  <p className="text-sm font-bold">Production-minded</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Performance, accessibility, quality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {orbitItems.map(({ icon: Icon, label, position }) => (
            <motion.div
              key={label}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`glass absolute hidden items-center gap-2 rounded-2xl px-4 py-3 text-xs font-black text-ink sm:flex ${position}`}
            >
              <Icon size={17} className="text-blue" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
