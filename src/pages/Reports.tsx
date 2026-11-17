import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { reportList } from "../lib/mock-data";

// Replace generateReport() with a real call to your backend / LLM API later.
function generateReport(prompt: string): Promise<string> {
  return new Promise((res) =>
    setTimeout(() => res(`Report for: "${prompt}"\n\n• Revenue grew 12.4% quarter-over-quarter.\n• Enterprise segment drives most of the pipeline growth.\n• Recommendation: reallocate 1.5 FTE to support to protect CSAT.`), 1400)
  );
}

export default function Reports() {
  const [prompt, setPrompt] = useState("Summarize last quarter and forecast next quarter");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  const run = async () => {
    setLoading(true); setOutput(null);
    setOutput(await generateReport(prompt));
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">AI Reports</h1>
      <div className="card space-y-3">
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3}
          className="w-full rounded-lg border border-white/10 bg-transparent p-3 text-sm outline-none focus:border-brand" />
        <button className="btn" onClick={run} disabled={loading}>
          {loading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} Generate
        </button>
        {output && <pre className="whitespace-pre-wrap rounded-lg bg-black/30 p-4 text-sm text-slate-300">{output}</pre>}
      </div>
      <h2 className="font-medium text-white">Recent reports</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {reportList.map((r) => (
          <div key={r.title} className="card">
            <p className="text-xs text-brand-soft">{r.tag}</p>
            <p className="font-medium text-white">{r.title}</p>
            <div className="mt-3 h-1.5 rounded bg-white/10"><div className="h-1.5 rounded bg-brand" style={{ width: `${r.confidence}%` }} /></div>
            <p className="mt-1 text-xs text-slate-400">Confidence {r.confidence}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
