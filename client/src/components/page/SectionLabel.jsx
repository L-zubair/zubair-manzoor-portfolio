export default function SectionLabel({ children, className = "" }) {
  return (
    <h2 className={`flex items-center gap-3 text-lg font-black text-ink ${className}`}>
      <span className="size-2.5 rounded-full bg-blue" />
      {children}
    </h2>
  );
}
