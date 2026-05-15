import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { kpiCards } from '../data/metrics'

const details = [
  { breakdown: ['Q1: $1.8M', 'Q2 (proj): $2.4M', 'Q3 target: $3.1M'], insight: 'Growing 34% QoQ with 91% gross margin' },
  { breakdown: ['Enterprise: 32', 'Mid-Market: 15', 'Avg deal: $51K ARR'], insight: 'Pipeline has 18 more in late-stage negotiations' },
  { breakdown: ['Last incident: 23 days ago', 'MTTR: 4.2 min', 'Zero data loss'], insight: 'Infrastructure costs down 19% while scaling 3x' },
  { breakdown: ['Expansion: $840K', 'Churn: $62K', 'Net new: $1.1M'], insight: 'Best-in-class for infrastructure SaaS (>130% benchmark)' },
]

export default function KPICards() {
  const [allExpanded, setAllExpanded] = useState(false)

  return (
    <div className="kpi-grid">
      {kpiCards.map((kpi, i) => (
        <motion.div
          className="kpi-card"
          key={i}
          onClick={() => setAllExpanded(!allExpanded)}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="kpi-label">{kpi.label}</div>
          <div className="kpi-value">{kpi.value}</div>
          <span className={`kpi-change ${kpi.trend}`}>
            {kpi.trend === 'up' ? '↑' : '↓'} {kpi.change}
          </span>
          <span className="kpi-period">{kpi.period}</span>

          <AnimatePresence>
            {allExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  marginTop: 16,
                  paddingTop: 12,
                  borderTop: '1px solid var(--border)',
                }}>
                  {details[i].breakdown.map((item, j) => (
                    <div key={j} style={{ fontSize: 12, color: 'var(--ink-muted)', padding: '3px 0' }}>
                      {item}
                    </div>
                  ))}
                  <div style={{
                    marginTop: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--accent)',
                    background: 'var(--accent-light)',
                    padding: '6px 10px',
                    borderRadius: 6,
                  }}>
                    {details[i].insight}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
