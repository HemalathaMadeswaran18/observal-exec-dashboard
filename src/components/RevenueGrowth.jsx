import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { revenueGrowth } from '../data/metrics'

export default function RevenueGrowth() {
  const [metric, setMetric] = useState('mrr')

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Revenue Growth</div>
          <div className="card-subtitle">Monthly recurring revenue trajectory</div>
        </div>
        <div style={{ display: 'flex', gap: 4, background: 'var(--bg-elevated)', borderRadius: 8, padding: 3 }}>
          <button
            onClick={() => setMetric('mrr')}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: 'none',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              background: metric === 'mrr' ? 'var(--accent)' : 'transparent',
              color: metric === 'mrr' ? 'white' : 'var(--ink-muted)',
              transition: 'all 0.2s'
            }}
          >
            Revenue
          </button>
          <button
            onClick={() => setMetric('clients')}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: 'none',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              background: metric === 'clients' ? 'var(--accent)' : 'transparent',
              color: metric === 'clients' ? 'white' : 'var(--ink-muted)',
              transition: 'all 0.2s'
            }}
          >
            Clients
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenueGrowth} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={metric === 'mrr' ? '#2563eb' : '#7c3aed'} stopOpacity={0.15} />
              <stop offset="95%" stopColor={metric === 'mrr' ? '#2563eb' : '#7c3aed'} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="month" style={{ fontSize: 12 }} />
          <YAxis
            style={{ fontSize: 12 }}
            tickFormatter={(v) => metric === 'mrr' ? `$${v}K` : v}
          />
          <Tooltip
            formatter={(value) => [metric === 'mrr' ? `$${value}K` : `${value} clients`, metric === 'mrr' ? 'MRR' : 'Clients']}
            contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
          />
          <Area
            type="monotone"
            dataKey={metric}
            stroke={metric === 'mrr' ? '#2563eb' : '#7c3aed'}
            strokeWidth={2.5}
            fill="url(#revenueGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{
        marginTop: 12,
        padding: '10px 14px',
        background: 'var(--bg-elevated)',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
      }}>
        <span style={{ color: 'var(--ink-muted)' }}>12-month growth</span>
        <span style={{ fontWeight: 700, color: 'var(--success)' }}>+90% MRR | +161% clients</span>
      </div>
    </div>
  )
}
