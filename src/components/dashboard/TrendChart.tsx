import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { trendData } from "@/data/safetyData";

export function TrendChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Incident Trend — March 2026</h3>
        <div className="flex gap-4 text-[10px]">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-critical" /> Incidents</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary" /> AI Detections</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-warning/60" /> Near Misses</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={trendData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="gradIncidents" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradDetections" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
          <XAxis dataKey="date" tick={{ fontSize: 10, fill: "hsl(215, 12%, 50%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "hsl(215, 12%, 50%)" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: "8px", fontSize: 12 }}
            labelStyle={{ color: "hsl(210, 20%, 90%)" }}
          />
          <Area type="monotone" dataKey="aiDetections" stroke="hsl(38, 92%, 50%)" fill="url(#gradDetections)" strokeWidth={2} />
          <Area type="monotone" dataKey="incidents" stroke="hsl(0, 72%, 51%)" fill="url(#gradIncidents)" strokeWidth={2} />
          <Area type="monotone" dataKey="nearMisses" stroke="hsl(38, 92%, 50%)" strokeOpacity={0.4} fill="none" strokeWidth={1.5} strokeDasharray="4 4" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
