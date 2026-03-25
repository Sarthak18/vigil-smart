import { motion } from "framer-motion";
import { hazardBreakdown } from "@/data/safetyData";

export function HazardBreakdown() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">Top Hazard Types</h3>
      <div className="space-y-3">
        {hazardBreakdown.map((hazard, i) => (
          <div key={hazard.type} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-foreground font-medium">{hazard.type}</span>
              <span className="font-mono text-muted-foreground">{hazard.count} <span className="text-[10px]">({hazard.percentage}%)</span></span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${hazard.percentage}%` }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-warning"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
