import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { candidates } from "../lib/mock-data";

export default function HR() {
  const input = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">HR Recruitment</h1>
      <div className="card flex flex-col items-center py-10 text-center">
        <Upload className="mb-3 text-brand-soft" />
        <p className="font-medium text-white">Drop resumes to auto-score with AI</p>
        <p className="text-xs text-slate-400">Supports PDF, DOCX, TXT</p>
        <input ref={input} type="file" multiple hidden onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))} />
        <button className="btn mt-4" onClick={() => input.current?.click()}>Browse files</button>
        {files.length > 0 && <p className="mt-3 text-xs text-emerald-400">{files.length} file(s) queued: {files.join(", ")}</p>}
      </div>
      <div className="card overflow-x-auto">
        <h2 className="mb-3 font-medium text-white">Candidate Pool</h2>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-slate-400"><tr><th className="py-2">Candidate</th><th>Role</th><th>Score</th><th>Match</th><th>Exp</th><th>Status</th></tr></thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.name} className="border-t border-white/10">
                <td className="py-2 text-white">{c.name}</td><td>{c.role}</td><td>{c.score}</td>
                <td><div className="h-1.5 w-24 rounded bg-white/10"><div className="h-1.5 rounded bg-brand" style={{ width: `${c.match}%` }} /></div></td>
                <td>{c.exp}</td><td>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
