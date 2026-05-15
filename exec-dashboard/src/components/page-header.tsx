interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className="hidden sm:flex items-center gap-1 text-xs bg-card border border-border rounded-lg p-1">
        <button className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors">7d</button>
        <button className="px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium">30d</button>
        <button className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors">90d</button>
      </div>
    </div>
  );
}
