export default function KpiCard({ label, value, delta }: { label: string; value: string; delta?: string }) {
  const negative = delta?.startsWith("-");
  return (
    <div className="card">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      {delta && <p className={`mt-1 text-xs ${negative ? "text-rose-400" : "text-emerald-400"}`}>{delta} vs last month</p>}
    </div>
  );
}
