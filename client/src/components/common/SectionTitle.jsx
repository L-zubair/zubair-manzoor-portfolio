import Badge from "./Badge";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = ""
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
