import { stats } from "../../data/portfolio";

const tones = {
  blue: "bg-blue-50 text-blue",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-violet-50 text-violet-600",
  orange: "bg-orange-50 text-orange-500"
};

export default function StatsGrid({ items = stats }) {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_45px_rgba(7,21,47,.07)] sm:grid-cols-2 lg:grid-cols-4">
      {items.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`flex items-center gap-4 p-5 ${
              index ? "border-t border-slate-200 sm:border-l sm:border-t-0" : ""
            } ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
          >
            <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${tones[stat.tone]}`}>
              <Icon size={22} />
            </span>
            <div>
              <p className={`text-xl font-black ${tones[stat.tone].split(" ")[1]}`}>{stat.value}</p>
              <p className="mt-0.5 text-xs font-semibold text-slate-500">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
