import { motion } from "framer-motion";
import { HardHat, Droplets, Truck, DoorClosed, UserX, Play, RotateCcw, FileDown } from "lucide-react";
import { useIncidents, ScenarioKey } from "@/store/incidentStore";
import { generateSafetyReport } from "@/lib/generateReport";
import { toast } from "sonner";

const scenarios: { key: ScenarioKey; label: string; icon: typeof HardHat; accent: string }[] = [
  { key: "ppe", label: "PPE Violation", icon: HardHat, accent: "hover:border-primary/50 hover:bg-primary/5 hover:text-primary" },
  { key: "spill", label: "Spill", icon: Droplets, accent: "hover:border-warning/50 hover:bg-warning/5 hover:text-warning" },
  { key: "forklift", label: "Forklift Risk", icon: Truck, accent: "hover:border-critical/50 hover:bg-critical/5 hover:text-critical" },
  { key: "exit", label: "Blocked Exit", icon: DoorClosed, accent: "hover:border-critical/50 hover:bg-critical/5 hover:text-critical" },
  { key: "unauthorized", label: "Unauthorized", icon: UserX, accent: "hover:border-primary/50 hover:bg-primary/5 hover:text-primary" },
];

export function DemoConsole() {
  const { incidents, triggerScenario, resetDemo, injectedCount } = useIncidents();

  const handleTrigger = (key: ScenarioKey, label: string) => {
    triggerScenario(key);
    toast.success(`AI detected: ${label}`, {
      description: "New incident pushed to live feed",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/5 via-card to-card p-5"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Play size={14} />
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Demo Console</h3>
            <p className="text-[11px] text-muted-foreground">
              Simulate a hazard event — watch the AI feed and stats react in real time
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-[11px] text-muted-foreground mr-1">
            {injectedCount} simulated
          </span>
          <button
            onClick={() => {
              const filename = generateSafetyReport({ incidents, injectedCount });
              toast.success("Report generated", { description: filename });
            }}
            className="flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1.5 text-[11px] font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            <FileDown size={11} /> Generate PDF Report
          </button>
          <button
            onClick={resetDemo}
            className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <RotateCcw size={11} /> Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {scenarios.map(({ key, label, icon: Icon, accent }) => (
          <button
            key={key}
            onClick={() => handleTrigger(key, label)}
            className={`group flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-xs font-medium text-muted-foreground transition-all hover-scale ${accent}`}
          >
            <Icon size={14} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
