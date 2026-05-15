import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bestAgents } from '../data/metrics'

const agentDetails = {
  'PR Reviewer Pro': { description: 'Automated code review with quality scoring', users: 340, avgTime: '2.1 min', accuracy: '98.4%' },
  'Incident Analyst': { description: 'Real-time incident detection and root cause analysis', users: 180, avgTime: '0.8 min', accuracy: '96.1%' },
  'Test Generator': { description: 'Automated test suite creation from code changes', users: 290, avgTime: '3.4 min', accuracy: '94.7%' },
  'Docs Writer': { description: 'Technical documentation generation and updates', users: 210, avgTime: '1.6 min', accuracy: '92.3%' },
  'Deploy Guardian': { description: 'Pre-deployment safety checks and rollback automation', users: 150, avgTime: '1.2 min', accuracy: '99.1%' },
}

export default function BestAgents() {
  const [selectedAgent, setSelectedAgent] = useState(null)

  return (
    <div className="card" style={{ marginTop: 24 }}>
      <div className="card-header">
        <div>
          <div className="card-title">Top Performing Agents</div>
          <div className="card-subtitle">Click any agent to see performance details</div>
        </div>
        <div className="badge badge-success">$30.6K/mo total savings</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {bestAgents.map((agent, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedAgent(selectedAgent === i ? null : i)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              cursor: 'pointer',
              borderRadius: 10,
              overflow: 'hidden',
              border: selectedAgent === i ? '1px solid var(--accent)' : i === 0 ? '1px solid var(--accent)' : '1px solid transparent',
              background: selectedAgent === i ? 'var(--accent-light)' : i === 0 ? 'var(--accent-light)' : 'var(--bg-elevated)',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '14px 16px',
            }}>
              <div className="score-circle" style={{
                background: i === 0 ? 'var(--accent)' : 'var(--accent-light)',
                color: i === 0 ? 'white' : 'var(--accent)',
                fontSize: 13,
              }}>
                {agent.score}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{agent.name}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>
                  {agent.category} · {agent.sessions.toLocaleString()} sessions
                </div>
              </div>

              <div className="mini-trend">
                {agent.trend.map((val, j) => (
                  <div
                    key={j}
                    className="mini-trend-bar"
                    style={{ height: `${(val / 100) * 24}px` }}
                  />
                ))}
              </div>

              <div style={{ textAlign: 'right', minWidth: 72 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--success)' }}>{agent.savings}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>saved</div>
              </div>
            </div>

            <AnimatePresence>
              {selectedAgent === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    padding: '0 16px 14px',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: 12,
                    fontSize: 12,
                  }}>
                    <div>
                      <div style={{ color: 'var(--ink-muted)', marginBottom: 2 }}>Description</div>
                      <div style={{ fontWeight: 500 }}>{agentDetails[agent.name]?.description}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--ink-muted)', marginBottom: 2 }}>Active Users</div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{agentDetails[agent.name]?.users}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--ink-muted)', marginBottom: 2 }}>Avg Response</div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{agentDetails[agent.name]?.avgTime}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--ink-muted)', marginBottom: 2 }}>Accuracy</div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--success)' }}>{agentDetails[agent.name]?.accuracy}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
