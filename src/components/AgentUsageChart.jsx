import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { agentUsageByCategory } from '../data/metrics'

export default function AgentUsageChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Agent Usage by Department</div>
          <div className="card-subtitle">Monthly active sessions per department</div>
        </div>
        <div className="badge badge-accent">3,750 total sessions</div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={agentUsageByCategory} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="category" style={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
          <YAxis style={{ fontSize: 12 }} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(1)}K` : v} />
          <Tooltip
            formatter={(value) => [value.toLocaleString(), 'Sessions']}
            contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
          />
          <Bar dataKey="count" name="Sessions" fill="var(--accent)" radius={[6, 6, 0, 0]} barSize={36} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
        {agentUsageByCategory.slice(0, 4).map((cat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--ink-muted)' }}>
            <span style={{ color: 'var(--success)', fontWeight: 700 }}>+{cat.growth}%</span>
            {cat.category}
          </div>
        ))}
      </div>
    </div>
  )
}
