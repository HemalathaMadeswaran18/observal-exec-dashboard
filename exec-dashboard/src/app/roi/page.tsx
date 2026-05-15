"use client";

import { Clock, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { KPICard } from "@/components/kpi-card";
import { ChartCard } from "@/components/chart-card";
import { PageHeader } from "@/components/page-header";
import { roiKPIs, roiBeforeAfter, roiTrend } from "@/lib/mock-data";

export default function ROIPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader title="Impact" subtitle="Before vs after — measurable business outcomes" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard icon={Clock} label="Time Saved" value={roiKPIs.timeSaved} trend={{ value: "engineering hours", direction: "up" }} accent="blue" />
        <KPICard icon={DollarSign} label="Money Saved" value={roiKPIs.moneySaved} trend={{ value: "cost avoided", direction: "up" }} accent="emerald" />
        <KPICard icon={TrendingUp} label="Productivity Gain" value={roiKPIs.productivityGain} trend={{ value: "vs pre-AI baseline", direction: "up" }} accent="purple" />
      </div>

      <ChartCard title="Before & After Observal" subtitle="Measurable improvements across key business metrics">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roiBeforeAfter.map((item) => (
            <div key={item.metric} className="p-4 rounded-xl bg-muted/40 border border-border hover:border-border-hover transition-colors">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-3">{item.metric}</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-destructive/80">{item.before}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-lg font-semibold text-success">{item.after}</span>
              </div>
            </div>
          ))}
        </div>
      </ChartCard>

      <ChartCard title="ROI Trend" subtitle="Return multiplier over 6 months">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={roiTrend} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="roiLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}x`} width={35} domain={[0, 4]} />
            <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [`${v}x`, "ROI"]} />
            <Line type="monotone" dataKey="value" stroke="url(#roiLine)" strokeWidth={2.5} dot={{ r: 4, fill: "#34d399", stroke: "#1a1a2e", strokeWidth: 2 }} activeDot={{ r: 6, fill: "#34d399", stroke: "#1a1a2e", strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
