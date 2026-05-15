import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell } from 'recharts'

const platforms = [
  {
    name: 'Claude Code',
    score: 94,
    sessions: 12400,
    costPerTask: 0.08,
    successRate: 97.2,
    avgLatency: '1.4s',
    strengths: 'Excels at complex multi-step workflows, deep reasoning, and long-running autonomous tasks across departments',
    bestFor: 'Engineering, Product, Data & Analytics',
    recommendation: 'Primary investment. Highest ROI across complex workflows org-wide.',
    color: '#2563eb',
    radar: [
      { metric: 'Output Quality', value: 96 },
      { metric: 'Speed', value: 72 },
      { metric: 'Cost Efficiency', value: 78 },
      { metric: 'Accuracy', value: 97 },
      { metric: 'Complex Workflows', value: 95 },
      { metric: 'Reliability', value: 93 },
    ]
  },
  {
    name: 'Cursor',
    score: 86,
    sessions: 8200,
    costPerTask: 0.14,
    successRate: 91.4,
    avgLatency: '0.7s',
    strengths: 'Fastest response time for quick edits and iterative changes. Great for rapid content drafting and small tasks',
    bestFor: 'Product, Marketing, Content & Editorial',
    recommendation: 'Best for fast-turnaround work. Speed advantage for small iterative tasks.',
    color: '#7c3aed',
    radar: [
      { metric: 'Output Quality', value: 79 },
      { metric: 'Speed', value: 96 },
      { metric: 'Cost Efficiency', value: 62 },
      { metric: 'Accuracy', value: 82 },
      { metric: 'Complex Workflows', value: 58 },
      { metric: 'Reliability', value: 88 },
    ]
  },
  {
    name: 'Gemini CLI',
    score: 78,
    sessions: 2100,
    costPerTask: 0.05,
    successRate: 84.8,
    avgLatency: '2.1s',
    strengths: 'Most cost-efficient option with massive context window. Ideal for bulk document processing and analysis',
    bestFor: 'Content & Editorial, Customer Success, HR',
    recommendation: 'Best cost-to-performance for high-volume, routine tasks.',
    color: '#0d9488',
    radar: [
      { metric: 'Output Quality', value: 72 },
      { metric: 'Speed', value: 58 },
      { metric: 'Cost Efficiency', value: 97 },
      { metric: 'Accuracy', value: 76 },
      { metric: 'Complex Workflows', value: 64 },
      { metric: 'Reliability', value: 74 },
    ]
  },
  {
    name: 'GitHub Copilot',
    score: 72,
    sessions: 4700,
    costPerTask: 0.18,
    successRate: 82.6,
    avgLatency: '0.4s',
    strengths: 'Best-in-class autocomplete with near-instant suggestions. Good for quick drafts and repetitive tasks',
    bestFor: 'All departments (quick completions)',
    recommendation: 'Complementary layer only. Not suited for autonomous workflows.',
    color: '#f59e0b',
    radar: [
      { metric: 'Output Quality', value: 68 },
      { metric: 'Speed', value: 98 },
      { metric: 'Cost Efficiency', value: 52 },
      { metric: 'Accuracy', value: 71 },
      { metric: 'Complex Workflows', value: 34 },
      { metric: 'Reliability', value: 91 },
    ]
  },
  {
    name: 'Kiro IDE',
    score: 82,
    sessions: 3800,
    costPerTask: 0.09,
    successRate: 89.3,
    avgLatency: '1.6s',
    strengths: 'Spec-driven workflow. Generates structured plans from requirements before execution, reducing rework',
    bestFor: 'Product, Customer Success, Data & Analytics',
    recommendation: 'Growing fast. Best for teams that need structured, plan-first approaches.',
    color: '#e11d48',
    radar: [
      { metric: 'Output Quality', value: 84 },
      { metric: 'Speed', value: 68 },
      { metric: 'Cost Efficiency', value: 88 },
      { metric: 'Accuracy', value: 83 },
      { metric: 'Complex Workflows', value: 76 },
      { metric: 'Reliability', value: 79 },
    ]
  },
]

const comparisonData = platforms.map(p => ({
  name: p.name,
  score: p.score,
  color: p.color,
}))

export default function InvestmentPerformance() {
  const [selectedPlatform, setSelectedPlatform] = useState(0)
  const [view, setView] = useState('overview')
  const platform = platforms[selectedPlatform]

  return (
    <div>
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-header">
          <div>
            <div className="card-title">Platform Investment Analysis</div>
            <div className="card-subtitle">Which AI platforms deliver the best results for your teams</div>
          </div>
          <div style={{ display: 'flex', gap: 4, background: 'var(--bg-elevated)', borderRadius: 8, padding: 3 }}>
            <button
              onClick={() => setView('overview')}
              style={{
                padding: '6px 12px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                background: view === 'overview' ? 'var(--accent)' : 'transparent',
                color: view === 'overview' ? 'white' : 'var(--ink-muted)', transition: 'all 0.2s'
              }}
            >Overview</button>
            <button
              onClick={() => setView('compare')}
              style={{
                padding: '6px 12px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                background: view === 'compare' ? 'var(--accent)' : 'transparent',
                color: view === 'compare' ? 'white' : 'var(--ink-muted)', transition: 'all 0.2s'
              }}
            >Compare</button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === 'overview' ? (
            <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={comparisonData} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" style={{ fontSize: 12 }} />
                  <YAxis style={{ fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip
                    formatter={(value) => [`${value}/100`, 'Performance Score']}
                    contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
                  />
                  <Bar
                    dataKey="score"
                    name="Score"
                    radius={[6, 6, 0, 0]}
                    barSize={48}
                    onClick={(data, index) => setSelectedPlatform(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {comparisonData.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={i === selectedPlatform ? entry.color : `${entry.color}66`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink-faint)', marginTop: 8 }}>
                Click a bar to view platform details below
              </div>
            </motion.div>
          ) : (
            <motion.div key="compare" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Score</th>
                      <th>Sessions/mo</th>
                      <th>Cost/Task</th>
                      <th>Success Rate</th>
                      <th>Latency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms.map((p, i) => (
                      <tr
                        key={i}
                        onClick={() => setSelectedPlatform(i)}
                        style={{ cursor: 'pointer', background: selectedPlatform === i ? 'var(--accent-light)' : undefined }}
                      >
                        <td style={{ fontWeight: 600 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 10, height: 10, borderRadius: 3, background: p.color }} />
                            {p.name}
                          </div>
                        </td>
                        <td><span className={`badge ${p.score > 90 ? 'badge-success' : p.score > 80 ? 'badge-accent' : 'badge-warning'}`}>{p.score}</span></td>
                        <td>{(p.sessions / 1000).toFixed(1)}K</td>
                        <td style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>${p.costPerTask}</td>
                        <td>{p.successRate}%</td>
                        <td>{p.avgLatency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected platform detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPlatform}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid-2"
        >
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 4, background: platform.color }} />
                  {platform.name}
                </div>
                <div className="card-subtitle">Platform detail</div>
              </div>
              <div className="score-circle" style={{
                width: 52, height: 52, fontSize: 16,
                background: platform.score > 90 ? 'var(--success-light)' : 'var(--accent-light)',
                color: platform.score > 90 ? 'var(--success)' : 'var(--accent)',
              }}>
                {platform.score}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 4 }}>Strengths</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{platform.strengths}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 4 }}>Best For</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{platform.bestFor}</div>
              </div>
              <div style={{
                padding: '12px 16px',
                background: 'var(--success-light)',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--success)',
              }}>
                {platform.recommendation}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{(platform.sessions / 1000).toFixed(1)}K</div>
                <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Sessions/mo</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--success)' }}>${platform.costPerTask}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Cost/Task</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--accent)' }}>{platform.successRate}%</div>
                <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Success Rate</div>
              </div>
            </div>
          </div>

          {/* Radar chart */}
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Performance Radar</div>
                <div className="card-subtitle">{platform.name} capability breakdown</div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={platform.radar} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis dataKey="metric" style={{ fontSize: 11 }} />
                <PolarRadiusAxis domain={[0, 100]} style={{ fontSize: 10 }} />
                <Radar
                  dataKey="value"
                  stroke={platform.color}
                  fill={platform.color}
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
