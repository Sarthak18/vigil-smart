import { motion } from "framer-motion";
import { Activity, AlertTriangle, Eye, Shield, TrendingDown, Radio } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { IncidentFeed } from "@/components/dashboard/IncidentFeed";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { ZoneHeatmap } from "@/components/dashboard/ZoneHeatmap";
import { HazardBreakdown } from "@/components/dashboard/HazardBreakdown";
import { SafetyScore } from "@/components/dashboard/SafetyScore";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shrink-0">
              <Shield size={18} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">Warehouse Safety Intelligence</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">AI-Powered Vision Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 rounded-full border border-safe/30 bg-safe/10 px-3 py-1">
              <Radio size={10} className="text-safe animate-pulse" />
              <span className="text-[11px] font-medium text-safe">12 Cameras Online</span>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-foreground">Shift B — Day</p>
              <p className="font-mono text-[10px] text-muted-foreground">Mar 25, 2026 · 14:32</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1440px] px-6 py-6 space-y-6">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <StatCard label="Injury Rate" value="0.8" change="↓ 42% vs last month" changeType="positive" icon={TrendingDown} accentColor="safe" />
          <StatCard label="Active Incidents" value="3" change="2 critical, 1 high" changeType="negative" icon={AlertTriangle} accentColor="critical" />
          <StatCard label="AI Detections Today" value="71" change="↑ 18% detection rate" changeType="positive" icon={Eye} accentColor="primary" />
          <StatCard label="Near Misses Prevented" value="14" change="This week" changeType="neutral" icon={Activity} accentColor="warning" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Incident Feed */}
          <div className="lg:col-span-1">
            <IncidentFeed />
          </div>

          {/* Center + Right */}
          <div className="lg:col-span-2 space-y-6">
            <TrendChart />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <SafetyScore />
              </div>
              <div className="md:col-span-1">
                <ZoneHeatmap />
              </div>
              <div className="md:col-span-1">
                <HazardBreakdown />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
