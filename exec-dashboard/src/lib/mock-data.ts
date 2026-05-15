export const overviewKPIs = {
  totalInvestment: 47250,
  activeAgents: 12,
  departmentsUsing: "6/8",
  devVelocity: "+34%",
};

export const beforeAfter = {
  before: {
    reviewTime: "4.2 hrs",
    deployFrequency: "2/week",
    bugEscapeRate: "18%",
    devSatisfaction: "62%",
  },
  after: {
    reviewTime: "0.8 hrs",
    deployFrequency: "8/week",
    bugEscapeRate: "6%",
    devSatisfaction: "91%",
  },
};

export const topInvestments = [
  { name: "CodeReview Agent", saved: 42000, category: "Code Review" },
  { name: "Test Writer", saved: 28000, category: "Testing" },
  { name: "Bug Fixer", saved: 19000, category: "Bug Fixing" },
];

export const adoptionKPIs = {
  coverage: "75%",
  coverageDetail: "6 of 8 departments",
  agentCount: 12,
  sessionsPerDev: 6.2,
};

export const departmentAdoption = [
  { name: "Engineering", value: 94 },
  { name: "QA", value: 87 },
  { name: "DevOps", value: 72 },
  { name: "Product", value: 61 },
  { name: "Design", value: 45 },
  { name: "Data", value: 38 },
  { name: "Marketing", value: 12 },
  { name: "HR", value: 0 },
];

export const agentUsageByCategory = [
  { name: "Code Review", value: 32 },
  { name: "Testing", value: 24 },
  { name: "Documentation", value: 18 },
  { name: "Bug Fixing", value: 14 },
  { name: "Refactoring", value: 12 },
];

export const adoptionTimeline = [
  { month: "Dec", value: 28 },
  { month: "Jan", value: 38 },
  { month: "Feb", value: 49 },
  { month: "Mar", value: 58 },
  { month: "Apr", value: 67 },
  { month: "May", value: 75 },
];

export const costKPIs = {
  monthlyInvestment: 47250,
  monthlySavings: 142800,
  netROI: "3.02x",
  costPerDev: 333,
};

export const departmentEfficiency = [
  { name: "Engineering", spend: 28000, saved: 89000 },
  { name: "QA", spend: 8000, saved: 31000 },
  { name: "DevOps", spend: 6000, saved: 15000 },
  { name: "Product", spend: 3000, saved: 5000 },
  { name: "Design", spend: 2000, saved: 2800 },
];

export const monthlySpendTrend = [
  { month: "Dec", value: 32000 },
  { month: "Jan", value: 36500 },
  { month: "Feb", value: 39800 },
  { month: "Mar", value: 42100 },
  { month: "Apr", value: 44600 },
  { month: "May", value: 47250 },
];

export const savingsBreakdown = [
  { name: "Reduced review time", value: 52000 },
  { name: "Fewer production bugs", value: 38000 },
  { name: "Faster onboarding", value: 28000 },
  { name: "Automated testing", value: 24000 },
];

export const performanceKPIs = {
  bestAgent: "CodeReview Agent",
  avgSuccessRate: "89%",
  tasksCompleted: 4280,
};

export const topAgents = [
  { name: "CodeReview Agent", category: "Code Review", tasks: 1420, successRate: 94, timeSaved: "620 hrs" },
  { name: "Test Writer", category: "Testing", tasks: 1080, successRate: 91, timeSaved: "480 hrs" },
  { name: "Doc Generator", category: "Documentation", tasks: 820, successRate: 88, timeSaved: "340 hrs" },
  { name: "Bug Fixer", category: "Bug Fixing", tasks: 580, successRate: 85, timeSaved: "260 hrs" },
  { name: "Refactor Agent", category: "Refactoring", tasks: 380, successRate: 82, timeSaved: "140 hrs" },
];

export const tasksByCategory = [
  { name: "Code Review", value: 1420 },
  { name: "Testing", value: 1080 },
  { name: "Documentation", value: 820 },
  { name: "Bug Fixing", value: 580 },
  { name: "Refactoring", value: 380 },
];

export const velocityTrend = [
  { month: "Dec", value: 2 },
  { month: "Jan", value: 3 },
  { month: "Feb", value: 4.5 },
  { month: "Mar", value: 5.5 },
  { month: "Apr", value: 7 },
  { month: "May", value: 8 },
];

export const roiKPIs = {
  timeSaved: "1,840 hrs/mo",
  moneySaved: "$142,800/mo",
  productivityGain: "3.4x",
};

export const roiBeforeAfter = [
  { metric: "Avg PR review time", before: "4.2 hrs", after: "0.8 hrs" },
  { metric: "Deployments per week", before: "2", after: "8" },
  { metric: "Bug escape rate", before: "18%", after: "6%" },
  { metric: "Developer satisfaction", before: "62%", after: "91%" },
  { metric: "Time to onboard new dev", before: "3 weeks", after: "1 week" },
  { metric: "Code coverage", before: "54%", after: "87%" },
];

export const roiTrend = [
  { month: "Dec", value: 1.2 },
  { month: "Jan", value: 1.6 },
  { month: "Feb", value: 2.0 },
  { month: "Mar", value: 2.4 },
  { month: "Apr", value: 2.7 },
  { month: "May", value: 3.02 },
];

// Departments flagged for low agent usage
export const departmentFlags = [
  { department: "Design", adoption: 45, agents: 1, status: "warning" as const },
  { department: "Data", adoption: 38, agents: 0, status: "critical" as const },
  { department: "Marketing", adoption: 12, agents: 0, status: "critical" as const },
  { department: "HR", adoption: 0, agents: 0, status: "critical" as const },
];

// Agents deployed per department
export const agentsDeployedByDept = [
  { department: "Engineering", agents: 5 },
  { department: "QA", agents: 3 },
  { department: "DevOps", agents: 2 },
  { department: "Product", agents: 1 },
  { department: "Design", agents: 1 },
  { department: "Data", agents: 0 },
  { department: "Marketing", agents: 0 },
  { department: "HR", agents: 0 },
];

// Top 10 agents by token usage, partitioned by department
export const topAgentsByTokenUsage = [
  { name: "CodeReview Agent", department: "Engineering", tokens: 4820000 },
  { name: "Test Writer", department: "QA", tokens: 3640000 },
  { name: "Doc Generator", department: "Engineering", tokens: 2910000 },
  { name: "Bug Fixer", department: "Engineering", tokens: 2450000 },
  { name: "CI/CD Assistant", department: "DevOps", tokens: 1980000 },
  { name: "Refactor Agent", department: "Engineering", tokens: 1720000 },
  { name: "QA Analyzer", department: "QA", tokens: 1540000 },
  { name: "Spec Writer", department: "Product", tokens: 1280000 },
  { name: "Infra Scout", department: "DevOps", tokens: 960000 },
  { name: "UI Prototyper", department: "Design", tokens: 740000 },
];
