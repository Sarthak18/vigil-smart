import { motion } from "framer-motion";

export function SafetyScore() {
  const score = 87;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col items-center">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground self-start">Safety Score</h3>
      <div className="relative">
        <svg width="130" height="130" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(220, 14%, 18%)" strokeWidth="6" />
          <motion.circle
            cx="50" cy="50" r="45" fill="none"
            stroke="hsl(142, 70%, 45%)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-3xl font-bold text-safe">{score}</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">/ 100</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 text-[11px]">
        <span className="text-muted-foreground">PPE Compliance</span><span className="font-mono text-safe text-right">94%</span>
        <span className="text-muted-foreground">Zone Coverage</span><span className="font-mono text-warning text-right">78%</span>
        <span className="text-muted-foreground">Response Time</span><span className="font-mono text-safe text-right">2.1m</span>
        <span className="text-muted-foreground">Resolution Rate</span><span className="font-mono text-safe text-right">96%</span>
      </div>
    </div>
  );
}
