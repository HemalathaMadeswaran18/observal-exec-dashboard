import { useState } from 'react'
import { costSavings } from '../data/metrics'

export default function CostSavings() {
  const [showProjection, setShowProjection] = useState(false)

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Cost Intelligence</div>
          <div className="card-subtitle">AI-driven cost optimization impact</div>
        </div>
        <div style={{ display: 'flex', gap: 4, background: 'var(--bg-elevated)', borderRadius: 8, padding: 3 }}>
          <button
            onClick={() => setShowProjection(false)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: 'none',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              background: !showProjection ? 'var(--success)' : 'transparent',
              color: !showProjection ? 'white' : 'var(--ink-muted)',
              transition: 'all 0.2s'
            }}
          >
            Current
          </button>
          <button
            onClick={() => setShowProjection(true)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: 'none',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              background: showProjection ? 'var(--success)' : 'transparent',
              color: showProjection ? 'white' : 'var(--ink-muted)',
              transition: 'all 0.2s'
            }}
          >
            Projected
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div style={{
          background: showProjection ? 'var(--success-light)' : 'var(--bg-elevated)',
          borderRadius: 12,
          padding: 20,
          textAlign: 'center',
          transition: 'all 0.3s'
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: showProjection ? 36 : 32, color: 'var(--success)', transition: 'all 0.3s' }}>
            {showProjection ? `$${(costSavings.projectedAnnualSavings / 1000000).toFixed(2)}M` : `$${(costSavings.totalMonthlySavings / 1000).toFixed(0)}K`}
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 4 }}>
            {showProjection ? 'Projected Annual Savings' : 'Monthly Savings'}
          </div>
        </div>
        <div style={{
          background: 'var(--bg-elevated)',
          borderRadius: 12,
          padding: 20,
          textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--accent)' }}>
            {costSavings.costReduction}%
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 4 }}>
            Cost Reduction
          </div>
        </div>
      </div>

      <div style={{
        background: 'var(--bg-elevated)',
        borderRadius: 10,
        padding: '14px 18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>Average cost per feature delivery</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, color: 'var(--ink)' }}>
          ${costSavings.avgCostPerFeature}
        </span>
      </div>

      <div style={{
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 8,
      }}>
        {[
          { label: 'Infrastructure', saved: '38%', color: 'var(--accent)' },
          { label: 'Employee Time', saved: '52%', color: 'var(--success)' },
          { label: 'Tooling Costs', saved: '29%', color: 'var(--plum)' },
        ].map((item, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '10px 8px', background: 'var(--bg-elevated)', borderRadius: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: item.color }}>{item.saved}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
