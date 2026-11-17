import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { velocity } from "../lib/mock-data";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Analytics</h1>
      <div className="card">
        <h2 className="mb-3 font-medium text-white">Project Velocity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={velocity}>
            <CartesianGrid stroke="#ffffff10" />
            <XAxis dataKey="sprint" stroke="#64748b" /><YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ background: "#12122b", border: "1px solid #ffffff20" }} /><Legend />
            <Bar dataKey="planned" fill="#475569" radius={[4, 4, 0, 0]} />
            <Bar dataKey="completed" fill="#6d4aff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
