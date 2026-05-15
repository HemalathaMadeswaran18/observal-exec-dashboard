export const departmentBreakdown = [
  { name: 'Engineering', headcount: 42, budget: 480, agentsDeployed: 24, efficiency: 92, aiAdoption: 94 },
  { name: 'Product', headcount: 18, budget: 180, agentsDeployed: 14, efficiency: 87, aiAdoption: 88 },
  { name: 'Content & Editorial', headcount: 22, budget: 140, agentsDeployed: 12, efficiency: 84, aiAdoption: 78 },
  { name: 'Customer Success', headcount: 28, budget: 120, agentsDeployed: 9, efficiency: 86, aiAdoption: 72 },
  { name: 'Data & Analytics', headcount: 12, budget: 100, agentsDeployed: 11, efficiency: 90, aiAdoption: 96 },
  { name: 'DevOps & Infra', headcount: 8, budget: 90, agentsDeployed: 8, efficiency: 94, aiAdoption: 97 },
  { name: 'Marketing', headcount: 15, budget: 70, agentsDeployed: 5, efficiency: 72, aiAdoption: 45 },
  { name: 'HR & People Ops', headcount: 10, budget: 40, agentsDeployed: 7, efficiency: 68, aiAdoption: 38 },
]

export const aiAdoptionCoverage = [
  { month: 'Jul', coverage: 28 },
  { month: 'Aug', coverage: 36 },
  { month: 'Sep', coverage: 44 },
  { month: 'Oct', coverage: 52 },
  { month: 'Nov', coverage: 59 },
  { month: 'Dec', coverage: 65 },
  { month: 'Jan', coverage: 71 },
  { month: 'Feb', coverage: 76 },
  { month: 'Mar', coverage: 81 },
  { month: 'Apr', coverage: 85 },
  { month: 'May', coverage: 89 },
]

export const agentUsageByCategory = [
  { category: 'Engineering', count: 1240, growth: 23 },
  { category: 'Product', count: 680, growth: 31 },
  { category: 'Content & Editorial', count: 520, growth: 42 },
  { category: 'Customer Success', count: 410, growth: 38 },
  { category: 'Data & Analytics', count: 370, growth: 27 },
  { category: 'DevOps & Infra', count: 290, growth: 19 },
  { category: 'Marketing', count: 180, growth: 44 },
  { category: 'HR & People Ops', count: 60, growth: 15 },
]

export const developmentVelocity = [
  { week: 'W1', withAI: 8, withoutAI: 3 },
  { week: 'W2', withAI: 9, withoutAI: 4 },
  { week: 'W3', withAI: 10, withoutAI: 3 },
  { week: 'W4', withAI: 11, withoutAI: 4 },
  { week: 'W5', withAI: 13, withoutAI: 3 },
  { week: 'W6', withAI: 12, withoutAI: 4 },
  { week: 'W7', withAI: 14, withoutAI: 3 },
  { week: 'W8', withAI: 15, withoutAI: 4 },
  { week: 'W9', withAI: 14, withoutAI: 3 },
  { week: 'W10', withAI: 16, withoutAI: 3 },
  { week: 'W11', withAI: 17, withoutAI: 4 },
  { week: 'W12', withAI: 18, withoutAI: 3 },
]

export const bestAgents = [
  { name: 'PR Reviewer Pro', category: 'Engineering', score: 97, sessions: 3200, savings: '$8.2K/mo', trend: [85, 88, 91, 93, 95, 97] },
  { name: 'Incident Analyst', category: 'DevOps & Infra', score: 95, sessions: 2100, savings: '$6.4K/mo', trend: [78, 82, 87, 90, 93, 95] },
  { name: 'Content Drafter', category: 'Content & Editorial', score: 94, sessions: 2800, savings: '$5.1K/mo', trend: [80, 83, 86, 89, 92, 94] },
  { name: 'Ticket Resolver', category: 'Customer Success', score: 92, sessions: 1900, savings: '$3.8K/mo', trend: [75, 79, 83, 87, 90, 92] },
  { name: 'Campaign Analyst', category: 'Marketing', score: 91, sessions: 1600, savings: '$7.1K/mo', trend: [72, 77, 82, 86, 89, 91] },
]

export const tokenEfficiency = [
  { department: 'Engineering', tokensUsed: 1200, costPerTask: 0.12, efficiency: 92, trend: 'improving' },
  { department: 'Product', tokensUsed: 480, costPerTask: 0.09, efficiency: 87, trend: 'improving' },
  { department: 'Content & Editorial', tokensUsed: 520, costPerTask: 0.14, efficiency: 84, trend: 'stable' },
  { department: 'Customer Success', tokensUsed: 410, costPerTask: 0.11, efficiency: 86, trend: 'improving' },
  { department: 'Data & Analytics', tokensUsed: 370, costPerTask: 0.08, efficiency: 94, trend: 'improving' },
  { department: 'DevOps & Infra', tokensUsed: 290, costPerTask: 0.07, efficiency: 95, trend: 'improving' },
  { department: 'Marketing', tokensUsed: 180, costPerTask: 0.18, efficiency: 72, trend: 'stable' },
  { department: 'HR & People Ops', tokensUsed: 60, costPerTask: 0.22, efficiency: 68, trend: 'stable' },
]

export const platformCoverage = [
  { platform: 'Claude Code', teams: 9, sessions: 12400, satisfaction: 96 },
  { platform: 'Cursor', teams: 7, sessions: 8200, satisfaction: 93 },
  { platform: 'VS Code', teams: 6, sessions: 5600, satisfaction: 91 },
  { platform: 'Kiro IDE', teams: 4, sessions: 3800, satisfaction: 94 },
  { platform: 'Gemini CLI', teams: 3, sessions: 2100, satisfaction: 89 },
  { platform: 'GitHub Copilot', teams: 5, sessions: 4700, satisfaction: 90 },
]

export const costSavings = {
  totalMonthlySavings: 42000,
  avgCostPerFeature: 12.40,
  costReduction: 38,
  projectedAnnualSavings: 504000,
}

export const agentCounts = {
  total: 90,
  active: 72,
  published: 23,
  inDevelopment: 18,
  categories: [
    { name: 'Engineering', count: 24 },
    { name: 'Product', count: 14 },
    { name: 'Content & Editorial', count: 12 },
    { name: 'Customer Success', count: 9 },
    { name: 'Data & Analytics', count: 11 },
    { name: 'DevOps & Infra', count: 8 },
    { name: 'Marketing', count: 5 },
    { name: 'HR & People Ops', count: 7 },
  ]
}
