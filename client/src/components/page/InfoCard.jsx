export default function InfoCard({ title, icon: Icon, children, className = "" }) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(7,21,47,.055)] ${className}`}
    >
      {title && (
        <h2 className="flex items-center gap-3 text-base font-black text-ink">
          {Icon && (
            <span className="grid size-9 place-items-center rounded-xl bg-sky text-blue">
              <Icon size={18} />
            </span>
          )}
          {title}
        </h2>
      )}
      <div className={title ? "mt-4" : ""}>{children}</div>
    </section>
  );
}
