import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { aiAdoptionCoverage } from '../data/metrics'

export default function AIAdoption() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">AI Adoption Coverage</div>
          <div className="card-subtitle">Organization-wide AI integration progress</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--success)' }}>89%</div>
          <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Current Coverage</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={aiAdoptionCoverage} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
          <defs>
            <linearGradient id="adoptionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="month" style={{ fontSize: 12 }} />
          <YAxis domain={[30, 100]} tickFormatter={(v) => `${v}%`} style={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value) => [`${value}%`, 'Coverage']}
            contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
          />
          <Area
            type="monotone"
            dataKey="coverage"
            stroke="var(--accent)"
            strokeWidth={2.5}
            fill="url(#adoptionGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>61%</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Growth in 11 months</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>6</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Departments Covered</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--success)' }}>100%</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Target by Q3</div>
        </div>
      </div>
    </div>
  )
}
