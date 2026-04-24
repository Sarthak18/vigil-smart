import { useState, useEffect, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Shield,
  AlertTriangle,
  Eye,
  Camera,
  Bell,
  FileBarChart,
  Cpu,
  Zap,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// ============================================================
// Slide chrome
// ============================================================
function SlideChrome({
  index,
  total,
  eyebrow,
  children,
}: {
  index: number;
  total: number;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col px-12 py-16 lg:px-24 lg:py-20"
    >
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Shield size={16} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Warehouse Safety Intelligence
            </p>
          </div>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </motion.div>
  );
}

// ============================================================
// Slide 1 — Why we built this
// ============================================================
function SlideWhy() {
  return (
    <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-5">
      <div className="lg:col-span-3 flex flex-col justify-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          The Problem
        </p>
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground">
          Workers get hurt
          <br />
          <span className="text-primary">because no one is watching</span>
          <br />
          every camera, every second.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Warehouse injury rates are nearly{" "}
          <span className="text-foreground font-semibold">2× the national average</span>.
          Most incidents are seen on CCTV — but only after someone is already injured.
          Safety managers are drowning in footage, blind to risk, and reactive by design.
        </p>
      </div>

      <div className="lg:col-span-2 flex flex-col justify-center gap-4">
        {[
          { stat: "4.8", label: "Injuries per 100 FTEs", sub: "vs 2.7 national avg" },
          { stat: "$1.2M", label: "Avg cost per serious incident", sub: "OSHA + insurance + downtime" },
          { stat: "73%", label: "Of incidents are preventable", sub: "with earlier detection" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <div className="font-mono text-4xl font-bold text-primary">{item.stat}</div>
            <div className="mt-1 text-sm font-semibold text-foreground">{item.label}</div>
            <div className="text-xs text-muted-foreground">{item.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Slide 2 — What we built
// ============================================================
function SlideWhat() {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
        The Product
      </p>
      <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-foreground max-w-4xl">
        An AI control room that watches{" "}
        <span className="text-primary">every camera</span> and surfaces only what matters.
      </h2>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        We connect to existing warehouse CCTV, run computer vision on every frame, and
        give safety managers a live feed of detected hazards — categorized, scored,
        and ready to act on.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            icon: Camera,
            title: "Connect any camera",
            desc: "Plug into existing IP cameras. No new hardware.",
          },
          {
            icon: Cpu,
            title: "AI detects in real time",
            desc: "Vision models trained on warehouse hazards.",
          },
          {
            icon: Bell,
            title: "Managers act fast",
            desc: "Live feed, severity scoring, and audit-ready reports.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="relative rounded-xl border border-border bg-card p-6"
          >
            <div className="absolute -top-3 left-6 font-mono text-xs font-bold text-primary bg-background px-2">
              0{i + 1}
            </div>
            <step.icon size={28} className="text-primary" />
            <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Slide 3 — Features
// ============================================================
function SlideFeatures() {
  const features = [
    { icon: Eye, title: "Live AI Detection Feed", desc: "Real-time stream of hazards across all cameras with confidence scores." },
    { icon: AlertTriangle, title: "6 Hazard Categories", desc: "PPE, forklift proximity, blocked exits, spills, ergonomic risk, unauthorized access." },
    { icon: Camera, title: "Multi-Camera Correlation", desc: "Group incidents by camera, surface hot zones, identify recurring blind spots." },
    { icon: TrendingUp, title: "Trend & Zone Analytics", desc: "Heatmaps, safety scores, and historical trends to drive shift-level decisions." },
    { icon: FileBarChart, title: "PDF Audit Reports", desc: "One-click incident reports with camera IDs, severity, and AI confidence — OSHA-ready." },
    { icon: Zap, title: "Demo Console", desc: "Inject scenarios on demand to demo the system or run safety drills." },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
          Capabilities
        </p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
          Everything a safety manager needs,{" "}
          <span className="text-primary">on one screen.</span>
        </h2>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 content-start">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <f.icon size={18} />
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Slide 4 — Impact & market
// ============================================================
function SlideImpact() {
  return (
    <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Impact & Market
        </p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
          A <span className="text-safe">$4.2B market</span> with{" "}
          <span className="text-primary">proven ROI</span> in under a year.
        </h2>

        <div className="mt-8 space-y-4">
          {[
            { label: "Global warehouse safety tech market", value: "$4.2B", growth: "14.3% CAGR" },
            { label: "Typical injury reduction", value: "40–77%", growth: "across deployments" },
            { label: "Payback period", value: "6–12 mo", growth: "via insurance + WC savings" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center justify-between border-b border-border pb-3"
            >
              <div>
                <p className="text-sm text-muted-foreground">{m.label}</p>
                <p className="text-xs text-safe font-mono mt-0.5">{m.growth}</p>
              </div>
              <p className="font-mono text-3xl font-bold text-foreground">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-5">
        <div className="rounded-2xl border border-safe/30 bg-gradient-to-br from-safe/10 via-card to-card p-7">
          <div className="flex items-center gap-2 text-safe">
            <DollarSign size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Per-Site Annual Impact</span>
          </div>
          <p className="mt-4 font-mono text-6xl font-black text-foreground">$840K</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Avg. savings per facility from prevented injuries, lower premiums, and reduced
            workers' compensation claims.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Users, value: "12K+", label: "US warehouses" },
            { icon: Target, value: "Mid-mkt", label: "Underserved tier" },
            { icon: TrendingUp, value: "3.4x", label: "ROI Year 1" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4 text-center">
              <s.icon size={16} className="mx-auto text-primary" />
              <p className="mt-2 font-mono text-xl font-bold text-foreground">{s.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Slide 5 — Competitors
// ============================================================
function SlideCompetitors() {
  const competitors = [
    { name: "Voxel AI", focus: "Enterprise, large 3PLs", weakness: "Long sales cycles, high ACV" },
    { name: "Intenseye", focus: "SIF prevention, manufacturing", weakness: "Less warehouse-tuned" },
    { name: "Cognistic AI", focus: "Forklift safety only", weakness: "Narrow scope" },
    { name: "Surveily", focus: "EU market, retail", weakness: "Limited US presence" },
  ];

  const ourEdge = [
    "Mid-market focus — faster sales, lower ACV",
    "Self-host & on-prem option for compliance buyers",
    "Workflow-first UX (not raw alert spam)",
    "Audit-ready reporting out of the box",
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
          Competitive Landscape
        </p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
          The space is real.{" "}
          <span className="text-primary">The mid-market is wide open.</span>
        </h2>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Who's in the market
          </p>
          <div className="space-y-2">
            {competitors.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="grid grid-cols-12 items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="col-span-3 font-bold text-foreground">{c.name}</div>
                <div className="col-span-5 text-sm text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-safe shrink-0" />
                  {c.focus}
                </div>
                <div className="col-span-4 text-sm text-muted-foreground flex items-center gap-2">
                  <XCircle size={12} className="text-critical shrink-0" />
                  {c.weakness}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Our wedge
          </p>
          <h3 className="mt-2 text-2xl font-black text-foreground leading-tight">
            Built for the 80% of warehouses Voxel ignores.
          </h3>
          <ul className="mt-5 space-y-3">
            {ourEdge.map((e, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Pitch page
// ============================================================
const slides = [
  { eyebrow: "01 · Why", component: SlideWhy },
  { eyebrow: "02 · What", component: SlideWhat },
  { eyebrow: "03 · Features", component: SlideFeatures },
  { eyebrow: "04 · Impact", component: SlideImpact },
  { eyebrow: "05 · Competition", component: SlideCompetitors },
];

const Pitch = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, slides.length - 1)), []);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, navigate]);

  const Current = slides[index].component;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Slide stage */}
      <div className="relative mx-auto h-screen max-w-[1440px]">
        <AnimatePresence mode="wait">
          <SlideChrome
            key={index}
            index={index}
            total={slides.length}
            eyebrow={slides[index].eyebrow}
          >
            <Current />
          </SlideChrome>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-t from-background via-background/80 to-transparent">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
        >
          <Home size={12} /> Dashboard
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={index === slides.length - 1}
            className="flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-xs font-bold text-primary-foreground hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Hint */}
      <div className="fixed top-4 right-4 z-50 hidden md:block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        ← → to navigate · Esc to exit
      </div>
    </div>
  );
};

export default Pitch;
