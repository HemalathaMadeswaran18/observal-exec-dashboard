"use client";

import { Award, CheckCircle, Zap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import { KPICard } from "@/components/kpi-card";
import { ChartCard } from "@/components/chart-card";
import { PageHeader } from "@/components/page-header";
import { performanceKPIs, topAgents, tasksByCategory, velocityTrend } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

export default function PerformancePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader title="Best Agents" subtitle="Top performing AI agents across the organization" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard icon={Award} label="Best Agent" value={performanceKPIs.bestAgent} accent="emerald" />
        <KPICard icon={CheckCircle} label="Avg Success Rate" value={performanceKPIs.avgSuccessRate} trend={{ value: "+4% vs last month", direction: "up" }} accent="blue" />
        <KPICard icon={Zap} label="Tasks This Month" value={formatNumber(performanceKPIs.tasksCompleted)} trend={{ value: "+18%", direction: "up" }} accent="purple" />
      </div>

      <ChartCard title="Top Agents" subtitle="Ranked by tasks completed and success rate">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wide text-muted-foreground border-b border-border">
                <th className="pb-2 font-medium">#</th>
                <th className="pb-2 font-medium">Agent</th>
                <th className="pb-2 font-medium">Category</th>
                <th className="pb-2 font-medium text-right">Tasks</th>
                <th className="pb-2 font-medium text-right">Success</th>
                <th className="pb-2 font-medium text-right">Time Saved</th>
              </tr>
            </thead>
            <tbody>
              {topAgents.map((agent, i) => (
                <tr key={agent.name} className="border-b border-border/50 hover:bg-primary/[0.02] transition-colors">
                  <td className="py-3 text-muted-foreground">{i + 1}</td>
                  <td className="py-3 font-medium text-foreground">{agent.name}</td>
                  <td className="py-3 text-muted-foreground">{agent.category}</td>
                  <td className="py-3 text-right text-foreground">{formatNumber(agent.tasks)}</td>
                  <td className="py-3 text-right text-success font-medium">{agent.successRate}%</td>
                  <td className="py-3 text-right text-foreground">{agent.timeSaved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Tasks by Category" subtitle="Completed this month">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={tasksByCategory} margin={{ left: 0, right: 8 }}>
              <defs>
                <linearGradient id="taskBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c5cfc" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#5b8af5" stopOpacity={0.7} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} width={40} />
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [formatNumber(v), "Tasks"]} />
              <Bar dataKey="value" fill="url(#taskBar)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Development Velocity" subtitle="Deployments per week over 6 months">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={velocityTrend} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="velLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} width={25} />
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [`${v}/week`, "Deploys"]} />
              <Line type="monotone" dataKey="value" stroke="url(#velLine)" strokeWidth={2} dot={{ r: 3, fill: "#34d399", stroke: "#1a1a2e", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
