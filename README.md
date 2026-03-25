# Warehouse Safety Intelligence Dashboard - https://vigil-smart.lovable.app 

An AI-powered safety monitoring dashboard built for warehouse Safety Managers to reduce injury rates through real-time vision analytics.

![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-ff69b4)
![React](https://img.shields.io/badge/React-18-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8)

## Overview

This dashboard provides a centralized view of warehouse safety operations, combining AI-detected hazards, incident tracking, and zone-level risk analysis into a single, actionable interface.

## Features

- **Real-Time Incident Feed** — Live stream of AI-detected safety violations with severity classification, confidence scores, and resolution status
- **KPI Stat Cards** — At-a-glance metrics for injury rate, active incidents, AI detections, and near misses prevented
- **Incident Trend Chart** — Time-series visualization of incidents, AI detections, and near misses over the current month
- **Zone Risk Heatmap** — Color-coded grid of warehouse zones showing risk levels and active alerts
- **Safety Score Gauge** — Composite score tracking PPE compliance, zone coverage, response time, and resolution rate
- **Hazard Breakdown** — Ranked breakdown of top hazard types (No PPE, Forklift Proximity, Blocked Exits, etc.)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| Charts | Recharts |
| Animations | Framer Motion |
| UI Components | shadcn/ui (Radix primitives) |
| Build Tool | Vite |
| Routing | React Router |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── StatCard.tsx        # KPI metric cards
│   │   ├── IncidentFeed.tsx    # Live AI detection feed
│   │   ├── TrendChart.tsx      # Incident trend area chart
│   │   ├── ZoneHeatmap.tsx     # Zone risk grid
│   │   ├── SafetyScore.tsx     # Circular score gauge
│   │   └── HazardBreakdown.tsx # Hazard type bar chart
│   └── ui/                     # shadcn/ui primitives
├── data/
│   └── safetyData.ts           # Mock data & interfaces
├── pages/
│   └── Index.tsx               # Main dashboard layout
└── index.css                   # Design system tokens
```

## Design System

The dashboard uses a dark industrial theme with semantic color tokens:

| Token | Purpose | Color |
|-------|---------|-------|
| `--primary` | Accent / interactive | Amber |
| `--safe` | Positive metrics | Green |
| `--warning` | Caution indicators | Orange |
| `--critical` | Alerts / danger | Red |

All colors are defined as HSL values in `src/index.css` and mapped through `tailwind.config.ts`.

## License

MIT
