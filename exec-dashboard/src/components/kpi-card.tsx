import { TrendingUp, TrendingDown, Minus, type LucideIcon } from "lucide-react";

interface KPICardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: { value: string; direction: "up" | "down" | "neutral" };
  accent?: "blue" | "purple" | "emerald" | "amber" | "rose";
}

const accentColors = {
  blue: "text-accent-blue",
  purple: "text-primary",
  emerald: "text-success",
  amber: "text-warning",
  rose: "text-destructive",
};

export function KPICard({ icon: Icon, label, value, trend, accent = "blue" }: KPICardProps) {
  return (
    <div className="glass-card p-5 transition-transform hover:-translate-y-0.5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${accentColors[accent]}`} />
        <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
      </div>
      <p className="metric-value">{value}</p>
      {trend && (
        <div className={`flex items-center gap-1 mt-2 text-sm ${trend.direction === "up" ? "text-success" : trend.direction === "down" ? "text-destructive" : "text-muted-foreground"}`}>
          {trend.direction === "up" && <TrendingUp className="w-3.5 h-3.5" />}
          {trend.direction === "down" && <TrendingDown className="w-3.5 h-3.5" />}
          {trend.direction === "neutral" && <Minus className="w-3.5 h-3.5" />}
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
}
