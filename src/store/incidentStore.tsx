import { createContext, useContext, useState, useCallback, ReactNode, useMemo } from "react";
import { incidents as seedIncidents, Incident } from "@/data/safetyData";

export type ScenarioKey = "ppe" | "spill" | "forklift" | "exit" | "unauthorized";

const scenarioTemplates: Record<ScenarioKey, Omit<Incident, "id" | "timestamp" | "resolved" | "camera"> & { cameras: string[] }> = {
  ppe: {
    type: "No PPE Detected",
    zone: "Loading Dock A",
    severity: "high",
    description: "Worker without hard hat detected entering active forklift zone",
    aiConfidence: 95,
    cameras: ["CAM-01", "CAM-04", "CAM-08"],
  },
  spill: {
    type: "Spill Detected",
    zone: "Aisle 9",
    severity: "medium",
    description: "Liquid spill identified — slip hazard in pedestrian path",
    aiConfidence: 89,
    cameras: ["CAM-05", "CAM-07"],
  },
  forklift: {
    type: "Forklift Proximity",
    zone: "Receiving Area",
    severity: "critical",
    description: "Pedestrian within 2ft of moving forklift — collision risk",
    aiConfidence: 97,
    cameras: ["CAM-02", "CAM-03"],
  },
  exit: {
    type: "Blocked Exit",
    zone: "Aisle 14",
    severity: "critical",
    description: "Emergency exit obstructed by stacked pallets",
    aiConfidence: 98,
    cameras: ["CAM-09", "CAM-10"],
  },
  unauthorized: {
    type: "Unauthorized Access",
    zone: "Restricted Zone A",
    severity: "high",
    description: "Unidentified personnel detected in restricted machinery area",
    aiConfidence: 96,
    cameras: ["CAM-12"],
  },
};

interface IncidentContextValue {
  incidents: Incident[];
  triggerScenario: (key: ScenarioKey) => void;
  resolveIncident: (id: string) => void;
  resetDemo: () => void;
  injectedCount: number;
}

const IncidentContext = createContext<IncidentContextValue | null>(null);

export function IncidentProvider({ children }: { children: ReactNode }) {
  const [incidents, setIncidents] = useState<Incident[]>(seedIncidents);
  const [injectedCount, setInjectedCount] = useState(0);

  const triggerScenario = useCallback((key: ScenarioKey) => {
    const { cameras, ...template } = scenarioTemplates[key];
    const camera = cameras[Math.floor(Math.random() * cameras.length)];
    const newIncident: Incident = {
      ...template,
      camera,
      id: `INC-${String(900 + Math.floor(Math.random() * 99)).padStart(4, "0")}`,
      timestamp: "just now",
      resolved: false,
    };
    setIncidents((prev) => [newIncident, ...prev]);
    setInjectedCount((c) => c + 1);
  }, []);

  const resolveIncident = useCallback((id: string) => {
    setIncidents((prev) => prev.map((i) => (i.id === id ? { ...i, resolved: true } : i)));
  }, []);

  const resetDemo = useCallback(() => {
    setIncidents(seedIncidents);
    setInjectedCount(0);
  }, []);

  const value = useMemo(
    () => ({ incidents, triggerScenario, resolveIncident, resetDemo, injectedCount }),
    [incidents, triggerScenario, resolveIncident, resetDemo, injectedCount]
  );

  return <IncidentContext.Provider value={value}>{children}</IncidentContext.Provider>;
}

export function useIncidents() {
  const ctx = useContext(IncidentContext);
  if (!ctx) throw new Error("useIncidents must be used within IncidentProvider");
  return ctx;
}
