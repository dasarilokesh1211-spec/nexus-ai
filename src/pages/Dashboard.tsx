import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import KpiCard from "../components/KpiCard";
import { revenue } from "../lib/mock-data";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Good morning, Sarah ✨</h1>
        <p className="text-sm text-slate-400">Here's what Nexus prepared for you today.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Revenue" value="$1.42M" delta="+12.4%" />
        <KpiCard label="Pipeline" value="$3.8M" delta="+8.1%" />
        <KpiCard label="Open tickets" value="28" delta="-3.4%" />
        <KpiCard label="CSAT" value="96%" delta="+18.0%" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h2 className="mb-3 font-medium text-white">Revenue Overview</h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenue}>
              <CartesianGrid stroke="#ffffff10" />
              <XAxis dataKey="m" stroke="#64748b" /><YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ background: "#12122b", border: "1px solid #ffffff20" }} />
              <Area dataKey="target" stroke="#64748b" fill="transparent" strokeDasharray="4 4" />
              <Area dataKey="revenue" stroke="#6d4aff" fill="#6d4aff40" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="card text-sm">
          <h2 className="mb-3 font-medium text-white">Nexus AI Assistant</h2>
          <p className="text-slate-300">Good morning, Sarah. You have 3 high-priority items and 12 AI-drafted actions waiting for review.</p>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li>• Sales pipeline up 18% week-over-week</li>
            <li>• 3 projects approaching deadline with &lt;50% completion</li>
            <li>• Shortlist 4 ML candidates with 90+ match</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
