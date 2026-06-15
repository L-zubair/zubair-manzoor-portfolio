export default function Loader({ label = "Loading" }) {
  return (
    <div className="flex items-center justify-center gap-3 py-12 text-sm font-semibold text-slate-500">
      <span className="size-5 animate-spin rounded-full border-2 border-blue/20 border-t-blue" />
      {label}
    </div>
  );
}
