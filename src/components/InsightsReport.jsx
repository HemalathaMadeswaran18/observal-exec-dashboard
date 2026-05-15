import { motion } from 'framer-motion'

const insights = {
  ideComparison: {
    title: 'Claude Code outperforms Cursor by 2.3x on task completion',
    detail: 'Across 4,280 sessions this month, Claude Code users complete tasks in 3.1 min avg vs Cursor at 7.2 min. Claude Code also has 94% success rate vs 78% for Cursor. Consider standardizing on Claude Code for complex workflows.',
    type: 'comparison',
    impact: 'high',
  },
  modelProvider: {
    title: 'Claude Sonnet 4 delivers 3.1x better cost-efficiency than GPT-4o',
    detail: 'Your org spends across 4 model providers. Claude Sonnet 4 gets the job done at $0.18/task with 94% success, making it your best value. GPT-4o costs 3x more per task and is only better for large refactors. Meanwhile, some teams are still using Opus ($1.20/task) for simple tasks that a $0.04 model handles just as well. That\'s $3,800/month in unnecessary spend.',
    type: 'comparison',
    impact: 'high',
    breakdown: [
      { model: 'Claude Sonnet 4', costPerTask: 0.18, successRate: 94, bestAt: 'Best all-rounder, use by default' },
      { model: 'GPT-4o', costPerTask: 0.56, successRate: 82, bestAt: 'Large refactors only' },
      { model: 'Claude Haiku', costPerTask: 0.04, successRate: 71, bestAt: 'Simple tasks, cheapest option' },
      { model: 'Gemini Pro', costPerTask: 0.31, successRate: 76, bestAt: 'Long document analysis' },
    ],
  },
  departmentGap: {
    title: 'Marketing has near-zero AI adoption, biggest untapped opportunity',
    detail: 'Marketing (12% adoption, 0 agents) handles 340+ content briefs/month manually. A documentation agent could automate 60% of first drafts, saving an estimated 120 hrs/month. QA and Engineering are already at 87-94%.',
    type: 'gap',
    impact: 'high',
  },
  selfLearning: {
    title: 'Turn off self-learning for Doc Generator to cut hallucination rate by 40%',
    detail: 'Doc Generator has self-learning enabled, which means it adapts based on past sessions. However, for documentation tasks where accuracy matters more than creativity, this causes it to drift and hallucinate outdated API signatures. Toggling self-learning off for this agent reduces hallucination from 12% to 7% with no impact on speed. Keep self-learning on for creative agents like the Refactor Agent where adaptation improves output quality over time.',
    type: 'configuration',
    impact: 'medium',
  },
  quickWins: [
    {
      title: 'Stop routing simple tasks to Claude Opus, overspending $3,800/month',
      detail: '412 sessions/week use Opus for formatting, linting, and single-line fixes. Tasks where Haiku achieves identical 96% success at 1/14th the cost. Switching these to Haiku saves $3,800/month instantly with no quality loss.',
      effort: 'low',
      savings: '$3,800/mo',
    },
    {
      title: 'Disable Kiro Legacy, save $2,400/month immediately',
      detail: 'Kiro Legacy agent has 3 active users but consumes 1.8M tokens/month. All 3 users also have access to the newer Kiro agent which is 4x more efficient. Decommissioning saves $2,400/month with zero workflow disruption.',
      effort: 'low',
      savings: '$2,400/mo',
    },
    {
      title: 'Enable response caching for Doc Generator',
      detail: 'Doc Generator repeats identical API reference lookups 340 times/week. Enabling cache would cut its token usage by 38%, saving $1,100/month with a one-line config change.',
      effort: 'low',
      savings: '$1,100/mo',
    },
    {
      title: 'Consolidate QA Analyzer into Test Writer',
      detail: 'QA Analyzer and Test Writer overlap 72% in functionality. Merging them reduces maintenance overhead and saves $800/month in duplicate token spend. 14 users wouldn\'t notice the change.',
      effort: 'medium',
      savings: '$800/mo',
    },
  ],
  ambitiousWorkflow: {
    title: '68% of your tickets don\'t need human-in-the-loop coding',
    detail: 'Analysis of 1,420 completed tickets shows 968 were routine: dependency bumps, config changes, boilerplate CRUD, test additions, and doc updates. These could run fully autonomous with approval gates only. That\'s 1,540 engineering hours/month that could shift to architecture and product work.',
    breakdown: [
      { category: 'Dependency updates', tickets: 210, pctAutomatable: 95 },
      { category: 'Config/env changes', tickets: 180, pctAutomatable: 90 },
      { category: 'Boilerplate CRUD', tickets: 245, pctAutomatable: 85 },
      { category: 'Test additions', tickets: 198, pctAutomatable: 80 },
      { category: 'Doc updates', tickets: 135, pctAutomatable: 75 },
    ],
  },
  usagePattern: {
    title: '142 developers active, but top 20% drive 74% of value',
    detail: 'Power users (28 devs) average 12 sessions/day and generate 3.4x ROI. The bottom 40% (57 devs) average 1.2 sessions/day, mostly simple completions. Targeted training for the middle 40% could unlock $38K/month in additional savings.',
  },
}

const effortBadge = { low: { bg: 'rgba(52,211,153,0.1)', color: '#34d399', label: 'Quick Win' }, medium: { bg: 'rgba(251,191,36,0.1)', color: '#fbbf24', label: 'Medium Effort' } }

export default function InsightsReport() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Header */}
      <div className="card" style={{ padding: '28px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#34d399' }} />
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>AI Insights</h2>
        </div>
        <p style={{ color: 'var(--ink-muted)', fontSize: 14, margin: 0 }}>
          Strategic recommendations based on usage patterns across your organization. Updated daily.
        </p>
      </div>

      {/* IDE Comparison */}
      <motion.div className="card" style={{ padding: '24px 28px' }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: '#7c5cfc' }}>IDE Performance</span>
          <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: 'rgba(52,211,153,0.1)', color: '#34d399', fontWeight: 600 }}>High Impact</span>
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>{insights.ideComparison.title}</h3>
        <p style={{ color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{insights.ideComparison.detail}</p>
      </motion.div>

      {/* Model Provider */}
      <motion.div className="card" style={{ padding: '24px 28px' }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: '#22d3ee' }}>Model Provider</span>
          <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: 'rgba(52,211,153,0.1)', color: '#34d399', fontWeight: 600 }}>High Impact</span>
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>{insights.modelProvider.title}</h3>
        <p style={{ color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6, margin: '0 0 16px' }}>{insights.modelProvider.detail}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {insights.modelProvider.breakdown.map((m) => (
            <div key={m.model} style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
              <p style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 600 }}>{m.model}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Cost/task: <strong style={{ color: '#34d399' }}>${m.costPerTask}</strong></span>
                <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Success: <strong>{m.successRate}%</strong></span>
                <span style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 2 }}>{m.bestAt}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Self-Learning Toggle */}
      <motion.div className="card" style={{ padding: '24px 28px' }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.09 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: '#fbbf24' }}>Configuration</span>
          <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: 'rgba(251,191,36,0.1)', color: '#fbbf24', fontWeight: 600 }}>Medium Impact</span>
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>{insights.selfLearning.title}</h3>
        <p style={{ color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{insights.selfLearning.detail}</p>
      </motion.div>

      {/* Department Gap */}
      <motion.div className="card" style={{ padding: '24px 28px' }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: '#fb7185' }}>Adoption Gap</span>
          <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: 'rgba(52,211,153,0.1)', color: '#34d399', fontWeight: 600 }}>High Impact</span>
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>{insights.departmentGap.title}</h3>
        <p style={{ color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{insights.departmentGap.detail}</p>
      </motion.div>

      {/* Quick Wins */}
      <motion.div className="card" style={{ padding: '24px 28px' }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: '#34d399' }}>Quick Wins</span>
          <h3 style={{ margin: '8px 0 4px', fontSize: 16, fontWeight: 600 }}>Immediate savings with minimal effort</h3>
          <p style={{ color: 'var(--ink-muted)', fontSize: 13, margin: 0 }}>Combined potential: $8,100/month saved</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {insights.quickWins.map((win, i) => (
            <div key={i} style={{ padding: '16px 20px', borderRadius: 10, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>{win.title}</h4>
                <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: effortBadge[win.effort].bg, color: effortBadge[win.effort].color, fontWeight: 600 }}>
                  {effortBadge[win.effort].label} · {win.savings}
                </span>
              </div>
              <p style={{ color: 'var(--ink-muted)', fontSize: 13, lineHeight: 1.5, margin: 0 }}>{win.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Ambitious Workflow */}
      <motion.div className="card" style={{ padding: '24px 28px' }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: '#fbbf24' }}>Ambitious Workflow</span>
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>{insights.ambitiousWorkflow.title}</h3>
        <p style={{ color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6, margin: '0 0 16px' }}>{insights.ambitiousWorkflow.detail}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {insights.ambitiousWorkflow.breakdown.map((item) => (
            <div key={item.category} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, color: 'var(--ink-muted)', width: 160, flexShrink: 0 }}>{item.category}</span>
              <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(139,138,163,0.1)', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 3, width: `${item.pctAutomatable}%`, background: 'linear-gradient(90deg, #7c5cfc, #22d3ee)' }} />
              </div>
              <span style={{ fontSize: 12, color: 'var(--ink-faint)', width: 80, textAlign: 'right' }}>{item.tickets} tickets · {item.pctAutomatable}%</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Usage Pattern */}
      <motion.div className="card" style={{ padding: '24px 28px' }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: '#5b8af5' }}>Usage Pattern</span>
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>{insights.usagePattern.title}</h3>
        <p style={{ color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{insights.usagePattern.detail}</p>
      </motion.div>
    </div>
  )
}
