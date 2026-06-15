export default function Timeline({ items, compact = false }) {
  return (
    <div className="relative space-y-5 before:absolute before:bottom-3 before:left-2 before:top-3 before:w-px before:bg-blue/25">
      {items.map((item) => (
        <article key={`${item.period}-${item.title}`} className="relative pl-7">
          <span className="absolute left-0 top-1.5 z-10 size-4 rounded-full border-4 border-white bg-blue shadow-[0_0_0_2px_rgba(11,92,255,.15)]" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className={`${compact ? "text-sm" : "text-base"} font-black text-ink`}>
                {item.company}
              </h3>
              <p className="text-xs font-bold text-blue">{item.title}</p>
            </div>
            <span className="shrink-0 text-[10px] font-black uppercase tracking-wide text-slate-500">
              {item.period}
            </span>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600">{item.description}</p>
          {item.highlights && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-mist px-2 py-1 text-[9px] font-bold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
