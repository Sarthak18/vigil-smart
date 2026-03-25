import { motion } from "framer-motion";
import { zones } from "@/data/safetyData";

function getRiskColor(level: number) {
  if (level >= 75) return "bg-critical/30 border-critical/50 text-critical";
  if (level >= 50) return "bg-warning/20 border-warning/40 text-warning";
  if (level >= 25) return "bg-primary/10 border-primary/30 text-primary";
  return "bg-safe/10 border-safe/30 text-safe";
}

export function ZoneHeatmap() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Zone Risk Map</h3>
        <div className="flex gap-2 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-safe/50" />Low</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-warning/50" />Med</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-critical/50" />High</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {zones.map((zone, i) => (
          <motion.div
            key={zone.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className={`relative rounded-lg border p-3 transition-all hover:scale-[1.02] cursor-pointer ${getRiskColor(zone.riskLevel)}`}
          >
            {zone.activeAlerts > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-critical text-[9px] font-bold text-critical-foreground">
                {zone.activeAlerts}
              </span>
            )}
            <p className="text-[11px] font-semibold truncate">{zone.name}</p>
            <p className="font-mono text-lg font-bold">{zone.riskLevel}%</p>
            <p className="text-[9px] opacity-70">{zone.lastIncident}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
