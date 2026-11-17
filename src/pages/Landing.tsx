import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-6">
      <nav className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-semibold text-white"><Sparkles size={18} className="text-brand-soft" /> Nexus AI</span>
        <Link to="/dashboard" className="btn">Launch app <ArrowRight size={14} /></Link>
      </nav>
      <section className="py-24 text-center">
        <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs text-brand-soft">Now with autonomous AI agents</span>
        <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
          Run your entire business with <span className="bg-gradient-to-r from-brand to-pink-400 bg-clip-text text-transparent">one intelligent assistant.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Nexus unifies HR, Sales, Projects and Support into a single AI-powered workspace so your team ships faster, closes more, and delights every customer.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/dashboard" className="btn">Start free trial</Link>
          <Link to="/reports" className="rounded-lg border border-white/15 px-4 py-2 text-sm">Book a demo</Link>
        </div>
      </section>
    </div>
  );
}
