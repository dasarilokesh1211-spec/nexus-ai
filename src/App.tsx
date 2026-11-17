import { Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import HR from "./pages/HR";
import CRM from "./pages/CRM";
import Support from "./pages/Support";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Shell />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/support" element={<Support />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}
