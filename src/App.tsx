import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Navbar  from "./components/layout/Navbar";
import Footer  from "./components/layout/Footer";

import HomePage from "./pages/HomePage";

import InHomeCare                 from "./pages/services/InHomeCare";
import CommunityParticipation     from "./pages/services/CommunityParticipation";
import SupportedIndependentLiving from "./pages/services/SupportedIndependentLiving";
import CareCoordination           from "./pages/services/CareCoordination";
import CommunityNursing           from "./pages/services/CommunityNursing";
import AlliedHealth               from "./pages/services/AlliedHealth";
import PlanManagement             from "./pages/services/PlanManagement";
import SupportCoordination        from "./pages/services/SupportCoordination";
import RespiteCare                from "./pages/services/RespiteCare";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
}

function Placeholder({ title }: { title: string }) {
  return (
    <div style={{
      minHeight: "60vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      fontFamily: "'Nunito Sans', Arial, sans-serif",
      background: "#f5f5f5", padding: "80px 24px", textAlign: "center",
    }}>
      <h1 style={{ fontSize: 36, color: "#00442d", marginBottom: 12, fontWeight: 900 }}>{title}</h1>
      <p style={{ color: "#555", fontSize: 16 }}>This page is coming soon.</p>
    </div>
  );
}

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"       element={<HomePage />} />

          <Route path="/services/in-home-care"           element={<InHomeCare />} />
          <Route path="/services/community-participation" element={<CommunityParticipation />} />
          <Route path="/services/sil"                    element={<SupportedIndependentLiving />} />
          <Route path="/services/care-coordination"      element={<CareCoordination />} />
          <Route path="/services/community-nursing"      element={<CommunityNursing />} />
          <Route path="/services/allied-health"          element={<AlliedHealth />} />
          <Route path="/services/plan-management"        element={<PlanManagement />} />
          <Route path="/services/support-coordination"   element={<SupportCoordination />} />
          <Route path="/services/respite-care"           element={<RespiteCare />} />

          <Route path="/about"   element={<Placeholder title="About Us" />} />
          <Route path="/ndis"    element={<Placeholder title="NDIS" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="*"        element={<Placeholder title="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
