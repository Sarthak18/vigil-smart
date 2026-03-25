import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock, Eye } from "lucide-react";
import { incidents } from "@/data/safetyData";

const severityStyles = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning/15 text-warning",
  high: "bg-primary/15 text-primary",
  critical: "bg-critical/15 text-critical",
};

export function IncidentFeed() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-critical" />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Live AI Detections</h3>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{incidents.filter(i => !i.resolved).length} active</span>
      </div>
      <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
        {incidents.map((incident, i) => (
          <motion.div
            key={incident.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`group flex items-start gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-secondary/50 ${!incident.resolved ? "animate-pulse-glow" : ""}`}
          >
            <div className="mt-0.5">
              {incident.resolved ? (
                <CheckCircle2 size={16} className="text-safe" />
              ) : (
                <AlertTriangle size={16} className="text-warning" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{incident.id}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${severityStyles[incident.severity]}`}>
                  {incident.severity}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-foreground">{incident.type}</p>
              <p className="mt-0.5 text-xs text-muted-foreground truncate">{incident.description}</p>
              <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={10} />{incident.timestamp}</span>
                <span>{incident.zone}</span>
                <span className="flex items-center gap-1"><Eye size={10} />{incident.aiConfidence}% conf.</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
