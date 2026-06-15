import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, compact = false }) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_36px_rgba(7,21,47,.055)] ${
        compact ? "grid sm:grid-cols-[.8fr_1.2fr]" : ""
      }`}
    >
      <div className={`overflow-hidden bg-slate-100 ${compact ? "min-h-40" : "aspect-[16/9]"}`}>
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          width="720"
          height="400"
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue">
          {project.eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-black text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 bg-mist px-2.5 py-1 text-[10px] font-bold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-black">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue">
              <ExternalLink size={14} /> Live demo
            </a>
          ) : (
            <span className="flex items-center gap-1 text-slate-400">
              <ExternalLink size={14} /> Demo coming soon
            </span>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-ink">
              <Github size={14} /> GitHub
            </a>
          )}
          <span className="ml-auto flex items-center gap-1 text-blue">
            Details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}
