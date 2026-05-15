"use client";

import { Building2, Bot, Zap, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from "recharts";
import { KPICard } from "@/components/kpi-card";
import { ChartCard } from "@/components/chart-card";
import { PageHeader } from "@/components/page-header";
import { adoptionKPIs, departmentAdoption, agentUsageByCategory, adoptionTimeline, departmentFlags, agentsDeployedByDept, topAgentsByTokenUsage } from "@/lib/mock-data";

const COLORS = ["#7c5cfc", "#22d3ee", "#34d399", "#fbbf24", "#5b8af5"];
const DEPT_COLORS: Record<string, string> = { Engineering: "#5b8af5", QA: "#7c5cfc", DevOps: "#34d399", Product: "#fbbf24", Design: "#22d3ee" };

function formatTokens(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return String(n);
}

export default function AdoptionPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader title="AI Adoption" subtitle="Coverage across the organization" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard icon={Building2} label="Adoption Coverage" value={adoptionKPIs.coverage} trend={{ value: adoptionKPIs.coverageDetail, direction: "up" }} accent="blue" />
        <KPICard icon={Bot} label="Total Agents" value={String(adoptionKPIs.agentCount)} trend={{ value: "deployed", direction: "neutral" }} accent="purple" />
        <KPICard icon={Zap} label="Sessions/Dev/Day" value={String(adoptionKPIs.sessionsPerDev)} trend={{ value: "+1.4 vs last month", direction: "up" }} accent="emerald" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Department Adoption */}
        <ChartCard title="Department Adoption" subtitle="% of team using AI agents">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentAdoption} layout="vertical" margin={{ left: 80, right: 8 }}>
              <defs>
                <linearGradient id="adoptBar" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c5cfc" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" horizontal={false} />
              <XAxis type="number" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
              <YAxis type="category" dataKey="name" tick={{ fill: "#b8b7d1", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [`${v}%`, "Adoption"]} />
              <Bar dataKey="value" fill="url(#adoptBar)" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Agents Deployed by Department */}
        <ChartCard title="Agents Deployed by Department" subtitle="Number of active agents per team">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={agentsDeployedByDept} layout="vertical" margin={{ left: 80, right: 8 }}>
              <defs>
                <linearGradient id="agentBar" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c5cfc" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" horizontal={false} />
              <XAxis type="number" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="department" tick={{ fill: "#b8b7d1", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [v, "Agents"]} />
              <Bar dataKey="agents" fill="url(#agentBar)" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Flagged Departments */}
      <ChartCard title="Low Adoption Alerts" subtitle="Departments flagged for low agent usage">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {departmentFlags.map((dept) => (
            <div key={dept.department} className={`flex items-center gap-3 p-3 rounded-lg border ${dept.status === "critical" ? "border-red-500/20 bg-red-500/5" : "border-amber-500/20 bg-amber-500/5"}`}>
              <AlertTriangle className={`w-4 h-4 shrink-0 ${dept.status === "critical" ? "text-red-400" : "text-amber-400"}`} />
              <div>
                <p className="text-sm font-medium text-zinc-200">{dept.department}</p>
                <p className="text-xs text-zinc-500">{dept.agents} agents · {dept.adoption}% adoption</p>
              </div>
            </div>
          ))}
        </div>
      </ChartCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Agent Usage by Category */}
        <ChartCard title="Agent Usage by Category" subtitle="Share of total sessions">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={agentUsageByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} strokeWidth={0}>
                {agentUsageByCategory.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [`${v}%`, "Share"]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
            {agentUsageByCategory.map((item, i) => (
              <div key={item.name} className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                <span className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} />
                {item.name} <span className="text-zinc-600">({item.value}%)</span>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Adoption Timeline */}
        <ChartCard title="Adoption Timeline" subtitle="Monthly adoption % over 6 months">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={adoptionTimeline} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="adoptLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c5cfc" />
                  <stop offset="100%" stopColor="#5b8af5" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,138,163,0.06)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#8b8aa3", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} width={40} domain={[0, 100]} />
              <Tooltip contentStyle={{ background: "#22223a", border: "1px solid rgba(139,138,163,0.15)", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} formatter={(v: number) => [`${v}%`, "Adoption"]} />
              <Line type="monotone" dataKey="value" stroke="url(#adoptLine)" strokeWidth={2} dot={{ r: 3, fill: "#7c5cfc", stroke: "#1a1a2e", strokeWidth: 2 }} activeDot={{ r: 5, fill: "#7c5cfc", stroke: "#1a1a2e", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Top 10 Agents by Token Usage (by Department) */}
      <ChartCard title="Top 10 Agents by Token Usage" subtitle="Partitioned by department">
        <div className="space-y-2.5">
          {topAgentsByTokenUsage.map((agent, i) => {
            const maxTokens = topAgentsByTokenUsage[0].tokens;
            return (
              <div key={agent.name} className="flex items-center gap-3">
                <span className="text-xs text-zinc-600 w-5 text-right">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-zinc-200 truncate">{agent.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded" style={{ background: `${DEPT_COLORS[agent.department] || "#64748b"}20`, color: DEPT_COLORS[agent.department] || "#64748b" }}>
                        {agent.department}
                      </span>
                      <span className="text-xs text-zinc-500">{formatTokens(agent.tokens)}</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${(agent.tokens / maxTokens) * 100}%`, background: DEPT_COLORS[agent.department] || "#64748b" }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ChartCard>
    </div>
  );
}
