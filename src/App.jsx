import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AIAdoption from './components/AIAdoption'
import AgentCount from './components/AgentCount'
import CostIntelligence from './components/CostIntelligence'
import DepartmentBreakdown from './components/DepartmentBreakdown'
import TokenEfficiency from './components/TokenEfficiency'
import InvestmentPerformance from './components/InvestmentPerformance'
import DevelopmentVelocity from './components/DevelopmentVelocity'
import BestAgents from './components/BestAgents'
import AgentUsageChart from './components/AgentUsageChart'
import PlatformCoverage from './components/PlatformCoverage'
import InsightsReport from './components/InsightsReport'

const sections = [
  { id: 'adoption', label: 'AI Adoption' },
  { id: 'cost', label: 'Cost Intelligence' },
  { id: 'investments', label: 'Investments' },
  { id: 'insights', label: 'Insights' },
  { id: 'departments', label: 'Departments' },
  { id: 'velocity', label: 'Velocity' },
]

const abbreviations = {
  adoption: 'AI = Artificial Intelligence | Q3 = Quarter 3 (Jul-Sep 2026)',
  cost: 'AI = Artificial Intelligence | ROI = Return on Investment',
  insights: 'IDE = Integrated Development Environment | HITL = Human-in-the-Loop',
  departments: 'AI = Artificial Intelligence | QA = Quality Assurance',
  investments: 'ROI = Return on Investment | IDE = Integrated Development Environment',
  velocity: 'AI = Artificial Intelligence',
}

const fadeUp = {
  initial: { opacity: 1, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 0 },
  transition: { duration: 0.2, ease: 'easeOut' }
}

export default function App() {
  const [activeSection, setActiveSection] = useState('adoption')

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/ObservalLogo-removebg-preview.png" alt="Observal" style={{ height: 40 }} />
          <div className="logo-text">
            Observal
            <span>Executive Dashboard</span>
          </div>
        </div>
        <div className="header-meta">
          <div className="header-date">Q2 2026 | May 15, 2026</div>
        </div>
      </header>

      <nav className="nav-tabs">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`nav-tab ${activeSection === s.id ? 'active' : ''}`}
            onClick={() => setActiveSection(s.id)}
          >
            {s.label}
            {activeSection === s.id && (
              <motion.div className="nav-tab-indicator" layoutId="tab-indicator" />
            )}
          </button>
        ))}
      </nav>

      <AnimatePresence mode="sync">
        {activeSection === 'adoption' && (
          <motion.div key="adoption" {...fadeUp}>
            <div className="grid-2">
              <AIAdoption />
              <AgentCount />
            </div>
            <div className="grid-2-1">
              <AgentUsageChart />
              <PlatformCoverage />
            </div>
          </motion.div>
        )}

        {activeSection === 'cost' && (
          <motion.div key="cost" {...fadeUp}>
            <CostIntelligence />
          </motion.div>
        )}

        {activeSection === 'insights' && (
          <motion.div key="insights" {...fadeUp}>
            <InsightsReport />
          </motion.div>
        )}

        {activeSection === 'departments' && (
          <motion.div key="departments" {...fadeUp}>
            <div className="grid-2">
              <DepartmentBreakdown />
              <TokenEfficiency />
            </div>
          </motion.div>
        )}

        {activeSection === 'investments' && (
          <motion.div key="investments" {...fadeUp}>
            <InvestmentPerformance />
          </motion.div>
        )}

        {activeSection === 'velocity' && (
          <motion.div key="velocity" {...fadeUp}>
            <DevelopmentVelocity />
            <BestAgents />
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{
        textAlign: 'center',
        padding: '40px 0 20px',
        color: 'var(--ink-faint)',
        fontSize: '13px',
        borderTop: '1px solid var(--border)',
        marginTop: '40px'
      }}>
        <div style={{ marginBottom: 10, fontSize: 11, letterSpacing: 0.3 }}>
          {abbreviations[activeSection]}
        </div>
        Observal by BlazeUp AI | Confidential. For Investor Review Only.
      </footer>
    </div>
  )
}
