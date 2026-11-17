import { useState } from "react";
import { tickets } from "../lib/mock-data";

export default function Support() {
  const [selected, setSelected] = useState(tickets[0]);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Customer Support</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h2 className="mb-3 font-medium text-white">Ticket Dashboard</h2>
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-slate-400"><tr><th className="py-2">Ticket</th><th>Customer</th><th>Priority</th><th>Status</th><th>Age</th></tr></thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} onClick={() => setSelected(t)} className="cursor-pointer border-t border-white/10 hover:bg-white/5">
                  <td className="py-2"><span className="text-slate-500">{t.id}</span> <span className="text-white">{t.subject}</span></td>
                  <td>{t.customer}</td><td>{t.priority}</td><td>{t.status}</td><td>{t.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card text-sm">
          <h2 className="mb-2 font-medium text-white">AI Reply Suggestion</h2>
          <p className="text-xs text-slate-400">Re: {selected.subject}</p>
          <p className="mt-3 text-slate-300">
            Hi {selected.customer} team — thanks for flagging this. We've identified the root cause and are rolling out a fix. We'll confirm once it's resolved.
          </p>
          <button className="btn mt-4">Send reply</button>
        </div>
      </div>
    </div>
  );
}
