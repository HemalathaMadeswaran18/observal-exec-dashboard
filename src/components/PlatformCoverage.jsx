import { useState } from 'react'
import { platformCoverage } from '../data/metrics'

export default function PlatformCoverage() {
  const [selected, setSelected] = useState(0)
  const platform = platformCoverage[selected]

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Platform Coverage</div>
          <div className="card-subtitle">Click a platform to view details</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {platformCoverage.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: 8,
              cursor: 'pointer',
              background: i === selected ? 'var(--accent-light)' : 'transparent',
              border: i === selected ? '1px solid var(--accent)' : '1px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontWeight: i === selected ? 600 : 400, fontSize: 14 }}>{p.platform}</span>
            <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{p.teams} teams</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 16,
        padding: '16px',
        background: 'var(--bg-elevated)',
        borderRadius: 10,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12,
        textAlign: 'center',
      }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--accent)' }}>{platform.teams}</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Teams</div>
        </div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>{(platform.sessions / 1000).toFixed(1)}K</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Sessions</div>
        </div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--success)' }}>{platform.satisfaction}%</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Satisfaction</div>
        </div>
      </div>
    </div>
  )
}
