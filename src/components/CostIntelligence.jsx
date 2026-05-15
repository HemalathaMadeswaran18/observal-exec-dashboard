import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts'

const monthlySavings = [
  { month: 'Jul', savings: 14, spend: 32 },
  { month: 'Aug', savings: 18, spend: 30 },
  { month: 'Sep', savings: 22, spend: 28 },
  { month: 'Oct', savings: 26, spend: 26 },
  { month: 'Nov', savings: 29, spend: 24 },
  { month: 'Dec', savings: 32, spend: 23 },
  { month: 'Jan', savings: 35, spend: 21 },
  { month: 'Feb', savings: 37, spend: 20 },
  { month: 'Mar', savings: 39, spend: 19 },
  { month: 'Apr', savings: 41, spend: 18 },
  { month: 'May', savings: 42, spend: 17 },
]

const costByCategory = [
  { category: 'Report Generation', before: 6.20, after: 0.84, saved: 86 },
  { category: 'Content Drafting', before: 4.80, after: 0.52, saved: 89 },
  { category: 'Data Analysis', before: 8.90, after: 1.60, saved: 82 },
  { category: 'Customer Queries', before: 3.40, after: 0.38, saved: 89 },
  { category: 'Process Automation', before: 12.60, after: 2.80, saved: 78 },
  { category: 'Onboarding Tasks', before: 5.10, after: 0.94, saved: 82 },
]

const roiBreakdown = [
  { label: 'Employee hours reclaimed', value: '380 hrs/mo', dollarValue: '$19K/mo', icon: '⏱' },
  { label: 'Reduced error remediation', value: '64% fewer', dollarValue: '$8.4K/mo', icon: '✓' },
  { label: 'Faster time-to-market', value: '3.8x velocity', dollarValue: '$11K/mo', icon: '↗' },
  { label: 'Infrastructure optimization', value: '31% reduction', dollarValue: '$3.6K/mo', icon: '⚡' },
]

const projections = [
  { quarter: 'Q3 2026', savings: 138, cumulative: 493 },
  { quarter: 'Q4 2026', savings: 156, cumulative: 649 },
  { quarter: 'Q1 2027', savings: 178, cumulative: 827 },
  { quarter: 'Q2 2027', savings: 198, cumulative: 1025 },
]

export default function CostIntelligence() {
  const [timeView, setTimeView] = useState('monthly')
  const [expandedROI, setExpandedROI] = useState(false)

  const totalSaved = monthlySavings.reduce((s, m) => s + m.savings, 0)

  return (
    <div>
      {/* Top KPI row */}
      <div className="kpi-grid" style={{ marginBottom: 32 }}>
        <div className="kpi-card">
          <div className="kpi-label">Monthly Savings</div>
          <div className="kpi-value">$42K</div>
          <span className="kpi-change up">↑ +200%</span>
          <span className="kpi-period">vs 11 months ago</span>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Cost Reduction</div>
          <div className="kpi-value">38%</div>
          <span className="kpi-change up">↑ +6%</span>
          <span className="kpi-period">this quarter</span>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Projected Annual Savings</div>
          <div className="kpi-value">$504K</div>
          <span className="kpi-change up">↑ on track</span>
          <span className="kpi-period">FY 2026-27</span>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Cost per Feature</div>
          <div className="kpi-value">$12.40</div>
          <span className="kpi-change up">↓ -58%</span>
          <span className="kpi-period">vs pre-AI baseline</span>
        </div>
      </div>

      {/* Savings trend chart */}
      <div className="grid-2" style={{ marginBottom: 32 }}>
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Savings vs Spend Trend</div>
              <div className="card-subtitle">Monthly savings growing while per-unit costs decline</div>
            </div>
            <div style={{ display: 'flex', gap: 4, background: 'var(--bg-elevated)', borderRadius: 8, padding: 3 }}>
              <button
                onClick={() => setTimeView('monthly')}
                style={{
                  padding: '6px 12px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  background: timeView === 'monthly' ? 'var(--accent)' : 'transparent',
                  color: timeView === 'monthly' ? 'white' : 'var(--ink-muted)', transition: 'all 0.2s'
                }}
              >Monthly</button>
              <button
                onClick={() => setTimeView('cumulative')}
                style={{
                  padding: '6px 12px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  background: timeView === 'cumulative' ? 'var(--accent)' : 'transparent',
                  color: timeView === 'cumulative' ? 'white' : 'var(--ink-muted)', transition: 'all 0.2s'
                }}
              >Cumulative</button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {timeView === 'monthly' ? (
              <motion.div key="monthly" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={monthlySavings} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
                    <defs>
                      <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="month" style={{ fontSize: 12 }} />
                    <YAxis style={{ fontSize: 12 }} tickFormatter={(v) => `$${v}K`} />
                    <Tooltip
                      formatter={(value, name) => [`$${value}K`, name === 'savings' ? 'Savings' : 'AI Spend']}
                      contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
                    />
                    <Area type="monotone" dataKey="savings" stroke="#16a34a" strokeWidth={2.5} fill="url(#savingsGrad)" />
                    <Line type="monotone" dataKey="spend" stroke="#e11d48" strokeWidth={2} strokeDasharray="4 4" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            ) : (
              <motion.div key="cumulative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={monthlySavings.map((m, i) => ({
                    month: m.month,
                    cumSavings: monthlySavings.slice(0, i + 1).reduce((s, x) => s + x.savings, 0),
                    cumSpend: monthlySavings.slice(0, i + 1).reduce((s, x) => s + x.spend, 0),
                  }))} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
                    <defs>
                      <linearGradient id="cumGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="month" style={{ fontSize: 12 }} />
                    <YAxis style={{ fontSize: 12 }} tickFormatter={(v) => `$${(v/1000).toFixed(1)}M`} />
                    <Tooltip
                      formatter={(value, name) => [`$${(value/1000).toFixed(1)}M`, name === 'cumSavings' ? 'Total Saved' : 'Total Spent']}
                      contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
                    />
                    <Area type="monotone" dataKey="cumSavings" stroke="#16a34a" strokeWidth={2.5} fill="url(#cumGrad)" />
                    <Line type="monotone" dataKey="cumSpend" stroke="#e11d48" strokeWidth={2} strokeDasharray="4 4" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ display: 'flex', gap: 16, marginTop: 12, fontSize: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 12, height: 3, background: '#16a34a', borderRadius: 2 }} />
              <span style={{ color: 'var(--ink-muted)' }}>Savings generated</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 12, height: 3, background: '#e11d48', borderRadius: 2, borderStyle: 'dashed' }} />
              <span style={{ color: 'var(--ink-muted)' }}>AI platform spend</span>
            </div>
          </div>
        </div>

        {/* Cost per category */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Cost per Task by Category</div>
              <div className="card-subtitle">Before vs after AI agent deployment</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {costByCategory.map((cat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 120, fontSize: 13, fontWeight: 500 }}>{cat.category}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                    <div style={{ height: 6, background: 'var(--border-strong)', borderRadius: 3, width: `${(cat.before / 14) * 100}%` }} />
                    <span style={{ fontSize: 11, color: 'var(--ink-faint)', minWidth: 40 }}>${cat.before}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ height: 6, background: 'var(--success)', borderRadius: 3, width: `${(cat.after / 14) * 100}%` }} />
                    <span style={{ fontSize: 11, color: 'var(--success)', fontWeight: 600, minWidth: 40 }}>${cat.after}</span>
                  </div>
                </div>
                <div className="badge badge-success" style={{ minWidth: 44 }}>{cat.saved}%</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 16, paddingTop: 12, borderTop: '1px solid var(--border)', fontSize: 11 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 10, height: 6, background: 'var(--border-strong)', borderRadius: 2 }} />
              <span style={{ color: 'var(--ink-muted)' }}>Before (manual)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 10, height: 6, background: 'var(--success)', borderRadius: 2 }} />
              <span style={{ color: 'var(--ink-muted)' }}>After (AI agents)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Breakdown */}
      <div className="card" style={{ marginBottom: 32 }}>
        <div className="card-header">
          <div>
            <div className="card-title">ROI Breakdown</div>
            <div className="card-subtitle">Click to see projected quarterly growth</div>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--success)' }}>
            ${(totalSaved)}K total saved
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {roiBreakdown.map((item, i) => (
            <div key={i} style={{
              padding: 20,
              background: 'var(--bg-elevated)',
              borderRadius: 12,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--accent)', marginBottom: 4 }}>{item.value}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 8 }}>{item.label}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--success)' }}>{item.dollarValue}</div>
            </div>
          ))}
        </div>

        <div
          onClick={() => setExpandedROI(!expandedROI)}
          style={{
            marginTop: 16,
            padding: '12px 16px',
            background: 'var(--accent-light)',
            borderRadius: 8,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-dark)' }}>
            View quarterly projections
          </span>
          <span style={{ color: 'var(--accent)', fontSize: 12 }}>{expandedROI ? '▲' : '▼'}</span>
        </div>

        <AnimatePresence>
          {expandedROI && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 16 }}>
                {projections.map((p, i) => (
                  <div key={i} style={{
                    padding: 16,
                    background: 'var(--bg-elevated)',
                    borderRadius: 10,
                    textAlign: 'center',
                    border: i === 3 ? '1px solid var(--success)' : '1px solid transparent',
                  }}>
                    <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 6 }}>{p.quarter}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--success)' }}>${p.savings}K</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 4 }}>Cumulative: ${(p.cumulative / 1000).toFixed(1)}M</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom summary */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
      }}>
        <div className="card" style={{ textAlign: 'center', padding: 24 }}>
          <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginBottom: 8 }}>Infrastructure</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--accent)' }}>31%</div>
          <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>cost reduction</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 24 }}>
          <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginBottom: 8 }}>Employee Time</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--success)' }}>44%</div>
          <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>hours reclaimed per month</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 24 }}>
          <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginBottom: 8 }}>Tooling Costs</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--plum)' }}>22%</div>
          <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>reduction achieved</div>
        </div>
      </div>
    </div>
  )
}
