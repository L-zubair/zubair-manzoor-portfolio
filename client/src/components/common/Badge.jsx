export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-blue/15 bg-sky px-3 py-1 text-xs font-bold text-blue ${className}`}
    >
      {children}
    </span>
  );
}
