import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
}

interface StatsStripProps {
  stats: Stat[];
  className?: string;
}

export function StatsStrip({ stats, className }: StatsStripProps) {
  return (
    <div className={cn("border border-border/50 rounded-lg glass", className)}>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}