import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  accentColor?: "primary" | "safe" | "warning" | "critical";
}

const accentStyles = {
  primary: "border-primary/30 bg-primary/5",
  safe: "border-safe/30 bg-safe/5",
  warning: "border-warning/30 bg-warning/5",
  critical: "border-critical/30 bg-critical/5",
};

const iconStyles = {
  primary: "text-primary",
  safe: "text-safe",
  warning: "text-warning",
  critical: "text-critical",
};

export function StatCard({ label, value, change, changeType = "neutral", icon: Icon, accentColor = "primary" }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-xl border p-5 ${accentStyles[accentColor]}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</p>
          <p className="mt-2 font-mono text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <p className={`mt-1 text-xs font-medium ${changeType === "positive" ? "text-safe" : changeType === "negative" ? "text-critical" : "text-muted-foreground"}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`rounded-lg bg-secondary p-2.5 ${iconStyles[accentColor]}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </motion.div>
  );
}
