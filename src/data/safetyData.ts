export interface Incident {
  id: string;
  type: string;
  zone: string;
  severity: "low" | "medium" | "high" | "critical";
  timestamp: string;
  description: string;
  aiConfidence: number;
  resolved: boolean;
}

export interface ZoneData {
  id: string;
  name: string;
  riskLevel: number; // 0-100
  activeAlerts: number;
  lastIncident: string;
}

export interface TrendPoint {
  date: string;
  incidents: number;
  aiDetections: number;
  nearMisses: number;
}

export const incidents: Incident[] = [
  { id: "INC-0847", type: "No PPE Detected", zone: "Loading Dock B", severity: "high", timestamp: "2 min ago", description: "Worker without hard hat detected near forklift zone", aiConfidence: 94, resolved: false },
  { id: "INC-0846", type: "Blocked Exit", zone: "Aisle 14", severity: "critical", timestamp: "8 min ago", description: "Emergency exit path obstructed by pallets", aiConfidence: 98, resolved: false },
  { id: "INC-0845", type: "Spill Detected", zone: "Zone C-3", severity: "medium", timestamp: "15 min ago", description: "Liquid spill identified on warehouse floor", aiConfidence: 87, resolved: false },
  { id: "INC-0844", type: "Forklift Proximity", zone: "Receiving Area", severity: "high", timestamp: "22 min ago", description: "Pedestrian within 3ft of moving forklift", aiConfidence: 96, resolved: true },
  { id: "INC-0843", type: "Ergonomic Risk", zone: "Packing Station 7", severity: "low", timestamp: "34 min ago", description: "Improper lifting technique detected", aiConfidence: 79, resolved: true },
  { id: "INC-0842", type: "No PPE Detected", zone: "Cold Storage", severity: "medium", timestamp: "41 min ago", description: "Missing safety goggles in chemical area", aiConfidence: 91, resolved: true },
  { id: "INC-0841", type: "Unauthorized Access", zone: "Restricted Zone A", severity: "critical", timestamp: "1 hr ago", description: "Unidentified personnel in restricted machinery area", aiConfidence: 99, resolved: true },
];

export const zones: ZoneData[] = [
  { id: "z1", name: "Loading Dock A", riskLevel: 32, activeAlerts: 0, lastIncident: "3 hrs ago" },
  { id: "z2", name: "Loading Dock B", riskLevel: 78, activeAlerts: 2, lastIncident: "2 min ago" },
  { id: "z3", name: "Aisle 1-8", riskLevel: 15, activeAlerts: 0, lastIncident: "2 days ago" },
  { id: "z4", name: "Aisle 9-16", riskLevel: 85, activeAlerts: 1, lastIncident: "8 min ago" },
  { id: "z5", name: "Receiving", riskLevel: 62, activeAlerts: 1, lastIncident: "22 min ago" },
  { id: "z6", name: "Cold Storage", riskLevel: 45, activeAlerts: 0, lastIncident: "41 min ago" },
  { id: "z7", name: "Packing", riskLevel: 28, activeAlerts: 0, lastIncident: "34 min ago" },
  { id: "z8", name: "Shipping", riskLevel: 52, activeAlerts: 0, lastIncident: "5 hrs ago" },
  { id: "z9", name: "Restricted A", riskLevel: 90, activeAlerts: 0, lastIncident: "1 hr ago" },
];

export const trendData: TrendPoint[] = [
  { date: "Mar 1", incidents: 12, aiDetections: 34, nearMisses: 8 },
  { date: "Mar 5", incidents: 9, aiDetections: 41, nearMisses: 15 },
  { date: "Mar 9", incidents: 15, aiDetections: 52, nearMisses: 11 },
  { date: "Mar 13", incidents: 7, aiDetections: 48, nearMisses: 6 },
  { date: "Mar 17", incidents: 11, aiDetections: 55, nearMisses: 9 },
  { date: "Mar 21", incidents: 5, aiDetections: 63, nearMisses: 4 },
  { date: "Mar 25", incidents: 3, aiDetections: 71, nearMisses: 2 },
];

export const hazardBreakdown = [
  { type: "No PPE", count: 34, percentage: 28 },
  { type: "Forklift Proximity", count: 26, percentage: 21 },
  { type: "Blocked Exits", count: 19, percentage: 16 },
  { type: "Spills", count: 17, percentage: 14 },
  { type: "Ergonomic", count: 14, percentage: 11 },
  { type: "Unauthorized", count: 12, percentage: 10 },
];
