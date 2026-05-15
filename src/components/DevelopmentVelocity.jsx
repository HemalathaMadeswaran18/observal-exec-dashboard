import { useState } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { developmentVelocity } from '../data/metrics'

const ranges = ['4 weeks', '8 weeks', '12 weeks']

export default function DevelopmentVelocity() {
  const [range, setRange] = useState('12 weeks')
  const [chartType, setChartType] = useState('line')

  const weeksToShow = parseInt(range)
  const data = developmentVelocity.slice(-weeksToShow)
  const latestWithAI = data[data.length - 1].withAI
  const latestWithout = data[data.length - 1].withoutAI
  const multiplier = (latestWithAI / latestWithout).toFixed(1)

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Development Velocity</div>
          <div className="card-subtitle">Features shipped per week, AI-assisted vs traditional</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <motion.div
            key={multiplier}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ textAlign: 'right', marginRight: 12 }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--accent)' }}>{multiplier}x</div>
            <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Faster with AI</div>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', gap: 3, background: 'var(--bg-elevated)', borderRadius: 6, padding: 2 }}>
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  style={{
                    padding: '4px 8px', borderRadius: 4, border: 'none', fontSize: 11, fontWeight: 600, cursor: 'pointer',
                    background: range === r ? 'var(--accent)' : 'transparent',
                    color: range === r ? 'white' : 'var(--ink-muted)', transition: 'all 0.2s'
                  }}
                >{r}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 3, background: 'var(--bg-elevated)', borderRadius: 6, padding: 2 }}>
              {['line', 'area'].map((t) => (
                <button
                  key={t}
                  onClick={() => setChartType(t)}
                  style={{
                    padding: '4px 8px', borderRadius: 4, border: 'none', fontSize: 11, fontWeight: 600, cursor: 'pointer',
                    textTransform: 'capitalize',
                    background: chartType === t ? 'var(--ink)' : 'transparent',
                    color: chartType === t ? 'white' : 'var(--ink-muted)', transition: 'all 0.2s'
                  }}
                >{t}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        {chartType === 'line' ? (
          <LineChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="week" style={{ fontSize: 12 }} />
            <YAxis style={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
              formatter={(value, name) => [value + ' features', name === 'withAI' ? 'With AI Agents' : 'Without AI']}
            />
            <Legend formatter={(value) => value === 'withAI' ? 'With AI Agents' : 'Without AI'} />
            <Line type="monotone" dataKey="withAI" stroke="var(--accent)" strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="withoutAI" stroke="var(--border-strong)" strokeWidth={2} strokeDasharray="4 4" dot={false} />
          </LineChart>
        ) : (
          <AreaChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
            <defs>
              <linearGradient id="velGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="week" style={{ fontSize: 12 }} />
            <YAxis style={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
              formatter={(value, name) => [value + ' features', name === 'withAI' ? 'With AI Agents' : 'Without AI']}
            />
            <Legend formatter={(value) => value === 'withAI' ? 'With AI Agents' : 'Without AI'} />
            <Area type="monotone" dataKey="withAI" stroke="var(--accent)" strokeWidth={2.5} fill="url(#velGrad)" />
            <Area type="monotone" dataKey="withoutAI" stroke="var(--border-strong)" strokeWidth={1.5} fill="transparent" strokeDasharray="4 4" />
          </AreaChart>
        )}
      </ResponsiveContainer>

      <div style={{
        marginTop: 16,
        padding: '12px 16px',
        background: 'var(--accent-light)',
        borderRadius: 8,
        fontSize: 13,
        color: 'var(--accent-dark)',
        fontWeight: 500
      }}>
        Teams using Observal agents ship {multiplier}x more features with 42% lower cost per feature
      </div>
    </div>
  )
}
