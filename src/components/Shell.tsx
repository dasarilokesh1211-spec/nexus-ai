import { NavLink, Outlet } from "react-router-dom";
import { BarChart3, Bot, FileBarChart, LayoutDashboard, LifeBuoy, Search, Users, Briefcase, Sparkles } from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/hr", label: "HR Recruitment", icon: Users },
  { to: "/crm", label: "Sales CRM", icon: Briefcase },
  { to: "/support", label: "Support", icon: LifeBuoy },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/reports", label: "AI Reports", icon: FileBarChart },
];

export default function Shell() {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-white/10 bg-[#0e0e22] p-4 md:flex">
        <NavLink to="/" className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
          <Sparkles className="text-brand-soft" size={20} /> Nexus AI
        </NavLink>
        <nav className="space-y-1">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive ? "bg-brand/20 text-white" : "text-slate-400 hover:bg-white/5"}`}>
              <Icon size={16} /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto card text-xs">
          <p className="text-slate-400">AI Credits</p>
          <p className="text-white">8,420 / 10,000 used</p>
          <div className="mt-2 h-1.5 rounded bg-white/10"><div className="h-1.5 w-[84%] rounded bg-brand" /></div>
        </div>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-3">
          <div className="flex w-80 items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-400">
            <Search size={14} /> Search anything…
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Bot size={16} className="text-brand-soft" /> Sarah Chen
            <span className="rounded bg-brand/30 px-1.5 text-[10px] text-white">ADMIN</span>
          </div>
        </header>
        <main className="p-6"><Outlet /></main>
      </div>
    </div>
  );
}
