import { useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts'
import { agentCounts } from '../data/metrics'

const COLORS = ['#2563eb', '#7c3aed', '#0d9488', '#f59e0b', '#e11d48', '#16a34a', '#6b6860']

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props
  return (
    <g>
      <Sector
        cx={cx} cy={cy}
        innerRadius={innerRadius - 4}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <text x={cx} y={cy - 8} textAnchor="middle" style={{ fontSize: 24, fontWeight: 700, fontFamily: 'Instrument Serif' }}>
        {value}
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" style={{ fontSize: 11, fill: '#6b6860' }}>
        {payload.name}
      </text>
    </g>
  )
}

export default function AgentCount() {
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Agent Portfolio</div>
          <div className="card-subtitle">Hover on chart segments for details</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ position: 'relative', width: 200, height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={agentCounts.categories}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                activeIndex={activeIndex >= 0 ? activeIndex : undefined}
                activeShape={activeIndex >= 0 ? renderActiveShape : undefined}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(-1)}
              >
                {agentCounts.categories.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} style={{ cursor: 'pointer', transition: 'all 0.2s' }} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {activeIndex < 0 && (
            <div className="donut-center">
              <div className="donut-center-value">{agentCounts.total}</div>
              <div className="donut-center-label">Total</div>
            </div>
          )}
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {agentCounts.categories.map((cat, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(-1)}
              animate={{ scale: activeIndex === i ? 1.05 : 1, x: activeIndex === i ? 4 : 0 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontSize: 13, padding: '4px 8px', borderRadius: 6, cursor: 'pointer',
                background: activeIndex === i ? 'var(--bg-elevated)' : 'transparent',
                transition: 'background 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: COLORS[i] }} />
                <span>{cat.name}</span>
              </div>
              <span style={{ fontWeight: 600 }}>{cat.count}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 20,
        paddingTop: 16,
        borderTop: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--success)' }}>{agentCounts.active}</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Active</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--accent)' }}>{agentCounts.published}</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Published</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--plum)' }}>{agentCounts.inDevelopment}</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>In Development</div>
        </div>
      </div>
    </div>
  )
}
