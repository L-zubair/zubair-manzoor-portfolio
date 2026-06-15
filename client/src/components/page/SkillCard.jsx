import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(7,21,47,.06)]"
    >
      <div className="grid size-13 place-items-center rounded-2xl bg-sky text-blue">
        <Icon size={24} />
      </div>
      <h3 className="mt-6 text-xl font-black text-ink">{skill.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{skill.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
