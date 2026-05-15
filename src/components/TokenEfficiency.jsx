import { useState } from 'react'
import { tokenEfficiency } from '../data/metrics'

export default function TokenEfficiency() {
  const [sortBy, setSortBy] = useState('efficiency')
  const avgEfficiency = Math.round(tokenEfficiency.reduce((s, t) => s + t.efficiency, 0) / tokenEfficiency.length)

  const sorted = [...tokenEfficiency].sort((a, b) => {
    if (sortBy === 'efficiency') return b.efficiency - a.efficiency
    if (sortBy === 'cost') return a.costPerTask - b.costPerTask
    if (sortBy === 'usage') return b.tokensUsed - a.tokensUsed
    return 0
  })

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Cost Efficiency by Department</div>
          <div className="card-subtitle">Click column headers to sort</div>
        </div>
        <div className="badge badge-success">{avgEfficiency}% avg</div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th
                onClick={() => setSortBy('usage')}
                style={{ cursor: 'pointer', color: sortBy === 'usage' ? 'var(--accent)' : undefined }}
              >
                Usage (K) {sortBy === 'usage' && '↓'}
              </th>
              <th
                onClick={() => setSortBy('cost')}
                style={{ cursor: 'pointer', color: sortBy === 'cost' ? 'var(--accent)' : undefined }}
              >
                Cost/Task {sortBy === 'cost' && '↑'}
              </th>
              <th
                onClick={() => setSortBy('efficiency')}
                style={{ cursor: 'pointer', color: sortBy === 'efficiency' ? 'var(--accent)' : undefined }}
              >
                Efficiency {sortBy === 'efficiency' && '↓'}
              </th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((dept, i) => (
              <tr
                key={dept.department}
              >
                <td style={{ fontWeight: 600 }}>{dept.department}</td>
                <td>{dept.tokensUsed.toLocaleString()}K</td>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>${dept.costPerTask.toFixed(2)}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="progress-bar" style={{ width: 60 }}>
                      <div
                        className="progress-fill"
                        style={{
                          width: `${dept.efficiency}%`,
                          background: dept.efficiency > 92 ? 'var(--success)' : dept.efficiency > 88 ? 'var(--accent)' : 'var(--warning)'
                        }}
                      />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{dept.efficiency}%</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className={`efficiency-dot ${dept.trend}`} />
                    <span style={{ fontSize: 12, color: 'var(--ink-muted)', textTransform: 'capitalize' }}>{dept.trend}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{
        marginTop: 16,
        padding: '12px 16px',
        background: 'var(--bg-elevated)',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
      }}>
        <span style={{ color: 'var(--ink-muted)' }}>Avg cost per automated task</span>
        <span style={{ fontWeight: 700, color: 'var(--accent)' }}>
          ${(tokenEfficiency.reduce((s, t) => s + t.costPerTask, 0) / tokenEfficiency.length).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
