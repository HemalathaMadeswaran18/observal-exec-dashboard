import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { departmentBreakdown } from '../data/metrics'

const deptInsights = {
  'Engineering': { topAgent: 'PR Reviewer Pro', monthlySaved: '$34K', highlight: 'Highest agent density per engineer (5.9 agents/person)' },
  'Product': { topAgent: 'Docs Writer', monthlySaved: '$12K', highlight: 'Fastest adoption growth, up 24% this quarter' },
  'Data Science': { topAgent: 'Pipeline Monitor', monthlySaved: '$18K', highlight: 'Highest model variety, uses 4 different AI providers' },
  'DevOps': { topAgent: 'Deploy Guardian', monthlySaved: '$31K', highlight: 'Best efficiency score across all departments (96%)' },
  'QA & Testing': { topAgent: 'Test Generator', monthlySaved: '$22K', highlight: 'Reduced test creation time by 78%' },
  'Security': { topAgent: 'Vuln Scanner', monthlySaved: '$9K', highlight: 'Caught 14 critical vulnerabilities before production' },
}

export default function DepartmentBreakdown() {
  const [expandedDept, setExpandedDept] = useState(null)
  const totalAgents = departmentBreakdown.reduce((sum, d) => sum + d.agentsDeployed, 0)

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Department Breakdown</div>
          <div className="card-subtitle">{totalAgents} agents across {departmentBreakdown.length} departments. Click to expand</div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Team</th>
              <th>Agents</th>
              <th>AI Adoption</th>
              <th>Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {departmentBreakdown.map((dept, i) => (
              <React.Fragment key={i}>
                <tr
                  onClick={() => setExpandedDept(expandedDept === dept.name ? null : dept.name)}
                  style={{ cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  <td style={{ fontWeight: 600 }}>
                    <span style={{ marginRight: 6, fontSize: 10, color: 'var(--ink-faint)' }}>
                      {expandedDept === dept.name ? '▼' : '▶'}
                    </span>
                    {dept.name}
                  </td>
                  <td>{dept.headcount}</td>
                  <td>
                    <span style={{ fontWeight: 600, color: 'var(--accent)' }}>{dept.agentsDeployed}</span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="progress-bar" style={{ width: 60 }}>
                        <div
                          className="progress-fill"
                          style={{
                            width: `${dept.aiAdoption}%`,
                            background: dept.aiAdoption > 95 ? 'var(--success)' : dept.aiAdoption > 85 ? 'var(--accent)' : 'var(--warning)'
                          }}
                        />
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 600 }}>{dept.aiAdoption}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${dept.efficiency > 92 ? 'badge-success' : dept.efficiency > 88 ? 'badge-accent' : 'badge-warning'}`}>
                      {dept.efficiency}%
                    </span>
                  </td>
                </tr>
                <AnimatePresence>
                  {expandedDept === dept.name && (
                    <tr key={`${i}-detail`}>
                      <td colSpan={5} style={{ padding: 0, border: 'none' }}>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{
                            padding: '12px 16px',
                            background: 'var(--bg-elevated)',
                            borderRadius: 8,
                            margin: '4px 0 8px',
                            display: 'flex',
                            gap: 24,
                            fontSize: 12,
                          }}>
                            <div>
                              <span style={{ color: 'var(--ink-muted)' }}>Top Agent: </span>
                              <strong>{deptInsights[dept.name]?.topAgent}</strong>
                            </div>
                            <div>
                              <span style={{ color: 'var(--ink-muted)' }}>Monthly Savings: </span>
                              <strong style={{ color: 'var(--success)' }}>{deptInsights[dept.name]?.monthlySaved}</strong>
                            </div>
                            <div style={{ color: 'var(--accent)', fontWeight: 500 }}>
                              {deptInsights[dept.name]?.highlight}
                            </div>
                          </div>
                        </motion.div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
