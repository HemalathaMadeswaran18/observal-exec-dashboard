"use client";

import { DollarSign, Bot, Building2, TrendingUp } from "lucide-react";
import { KPICard } from "@/components/kpi-card";
import { ChartCard } from "@/components/chart-card";
import { PageHeader } from "@/components/page-header";
import { overviewKPIs, beforeAfter, topInvestments } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function OverviewPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader title="Executive Overview" subtitle="AI investment performance at a glance" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={DollarSign} label="Total AI Investment" value={`${formatCurrency(overviewKPIs.totalInvestment)}/mo`} trend={{ value: "monthly spend", direction: "neutral" }} accent="blue" />
        <KPICard icon={Bot} label="Active Agents" value={String(overviewKPIs.activeAgents)} trend={{ value: "+3 this quarter", direction: "up" }} accent="purple" />
        <KPICard icon={Building2} label="Departments Using AI" value={overviewKPIs.departmentsUsing} trend={{ value: "75% coverage", direction: "up" }} accent="amber" />
        <KPICard icon={TrendingUp} label="Development Velocity" value={overviewKPIs.devVelocity} trend={{ value: "vs pre-AI baseline", direction: "up" }} accent="emerald" />
      </div>

      <ChartCard title="Before & After Observal" subtitle="Key metrics comparison">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-destructive mb-3">Before</p>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">Manual code reviews</span><span className="text-sm font-semibold text-foreground">{beforeAfter.before.reviewTime} avg</span></div>
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">Deployment frequency</span><span className="text-sm font-semibold text-foreground">{beforeAfter.before.deployFrequency}</span></div>
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">Bug escape rate</span><span className="text-sm font-semibold text-foreground">{beforeAfter.before.bugEscapeRate}</span></div>
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">Developer satisfaction</span><span className="text-sm font-semibold text-foreground">{beforeAfter.before.devSatisfaction}</span></div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-success/5 border border-success/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-success mb-3">After</p>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">AI-assisted reviews</span><span className="text-sm font-semibold text-foreground">{beforeAfter.after.reviewTime} avg</span></div>
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">Deployment frequency</span><span className="text-sm font-semibold text-foreground">{beforeAfter.after.deployFrequency}</span></div>
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">Bug escape rate</span><span className="text-sm font-semibold text-foreground">{beforeAfter.after.bugEscapeRate}</span></div>
              <div className="flex justify-between"><span className="text-sm text-muted-foreground">Developer satisfaction</span><span className="text-sm font-semibold text-foreground">{beforeAfter.after.devSatisfaction}</span></div>
            </div>
          </div>
        </div>
      </ChartCard>

      <ChartCard title="Best Performing Investments" subtitle="Top agents by ROI">
        <div className="space-y-3">
          {topInvestments.map((agent, i) => (
            <div key={agent.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center text-[11px] font-bold text-success">{i + 1}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{agent.name}</p>
                  <p className="text-[11px] text-muted-foreground">{agent.category}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-success">Saved {formatCurrency(agent.saved)}</span>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}
