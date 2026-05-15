"use client";

import { DollarSign, TrendingUp, PiggyBank, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from "recharts";
import { KPICard } from "@/components/kpi-card";
import { ChartCard } from "@/components/chart-card";
import { PageHeader } from "@/components/page-header";
import { costKPIs, departmentEfficiency, monthlySpendTrend, savingsBreakdown } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function CostPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader title="Investment & Returns" subtitle="Where the money goes and what it delivers" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={DollarSign} label="Monthly Investment" value={formatCurrency(costKPIs.monthlyInvestment)} trend={{ value: "total AI spend", direction: "neutral" }} accent="blue" />
        <KPICard icon={PiggyBank} label="Monthly Savings" value={formatCurrency(costKPIs.monthlySavings)} trend={{ value: "cost avoided", direction: "up" }} accent="emerald" />
        <KPICard icon={TrendingUp} label="Net ROI" value={costKPIs.netROI} trend={{ value: "return on every $1", direction: "up" }} accent="purple" />
        <KPICard icon={Users} label="Cost per Developer" value={`${formatCurrency(costKPIs.costPerDev)}/mo`} trend={{ value: "142 developers", direction: "neutral" }} accent="amber" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Department Efficiency" subtitle="Investment vs savings by department">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={departmentEfficiency} layout="vertical" margin={{ left: 80, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" horizontal={false} />
              <XAxis type="number" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <YAxis type="category" dataKey="name" tick={{ fill: "#b8b7d1", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [formatCurrency(v)]} />
              <Legend wrapperStyle={{ fontSize: 11, color: "#8b8aa3" }} />
              <Bar dataKey="spend" name="Spend" fill="#fb7185" radius={[0, 4, 4, 0]} opacity={0.8} />
              <Bar dataKey="saved" name="Saved" fill="#34d399" radius={[0, 4, 4, 0]} opacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Monthly Spend Trend" subtitle="Last 6 months">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={monthlySpendTrend} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="spendLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c5cfc" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} width={45} />
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [formatCurrency(v), "Spend"]} />
              <Line type="monotone" dataKey="value" stroke="url(#spendLine)" strokeWidth={2} dot={{ r: 3, fill: "#7c5cfc", stroke: "#1a1a2e", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <ChartCard title="Savings Breakdown" subtitle="Where the money is being saved">
        <div className="space-y-3">
          {savingsBreakdown.map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-44">{item.name}</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-success to-accent-cyan" style={{ width: `${(item.value / 52000) * 100}%` }} />
              </div>
              <span className="text-sm font-semibold text-foreground w-16 text-right">{formatCurrency(item.value)}</span>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}
