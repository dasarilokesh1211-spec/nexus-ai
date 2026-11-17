import { deals } from "../lib/mock-data";

export default function CRM() {
  const stages = ["Discovery", "Proposal", "Negotiation", "Won"];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Sales CRM</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {stages.map((s) => (
          <div key={s} className="card">
            <h2 className="mb-3 text-sm font-medium text-slate-300">{s}</h2>
            {deals.filter((d) => d.stage === s).map((d) => (
              <div key={d.company} className="mb-2 rounded-lg border border-white/10 p-3 text-sm">
                <p className="text-white">{d.company}</p>
                <p className="text-emerald-400">${d.value.toLocaleString()}</p>
                <p className="text-xs text-slate-400">{d.owner}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
