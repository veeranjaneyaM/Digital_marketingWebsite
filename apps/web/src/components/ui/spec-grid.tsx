import { GlassCard } from "@/components/ui/glass-card";

type SpecGridProps = {
  title?: string;
  items: Array<{
    label: string;
    value: string;
  }>;
  columns?: "two" | "three" | "four";
};

const columnMap = {
  two: "md:grid-cols-2",
  three: "md:grid-cols-3",
  four: "md:grid-cols-2 xl:grid-cols-4"
};

export function SpecGrid({ title, items, columns = "three" }: SpecGridProps) {
  return (
    <div className="space-y-5">
      {title ? <h3 className="font-display text-3xl text-slate-950">{title}</h3> : null}
      <div className={`grid items-stretch gap-5 ${columnMap[columns]}`}>
        {items.map((item) => (
          <GlassCard key={`${item.label}-${item.value}`} className="dashboard-card rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-[#2563eb]">{item.label}</p>
            <p className="mt-4 text-base leading-7 text-slate-600">{item.value}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
