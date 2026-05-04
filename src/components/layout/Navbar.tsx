import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WHO_WE_ARE = [
  { label: "About Us",       path: "/who-we-are/about-us" },
  { label: "Our Story",      path: "/who-we-are/our-story" },
  { label: "Our Commitment", path: "/who-we-are/our-commitment" },
  { label: "Our Leadership", path: "/who-we-are/our-leadership" },
  { label: "Contact Us",     path: "/who-we-are/contact" },
];

const SERVICES = [
  { label: "In-Home Care",                   path: "/services/in-home-care" },
  { label: "Community Participation",        path: "/services/community-participation" },
  { label: "Supported Independent Living",   path: "/services/sil" },
  { label: "Care Coordination / Navigation", path: "/services/care-coordination" },
  { label: "Community Nursing",              path: "/services/community-nursing" },
  { label: "Allied Health",                  path: "/services/allied-health" },
  { label: "Plan Management",               path: "/services/plan-management" },
  { label: "Support Coordination",           path: "/services/support-coordination" },
  { label: "Respite Care",                   path: "/services/respite-care" },
];

const Chevron = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function Navbar() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDrop(null);
    setMobileOpen(null);
  }, [location.pathname]);

  const go = (path: string) => { navigate(path); setOpenDrop(null); setMenuOpen(false); };
  const toggle = (key: string) => setOpenDrop(p => p === key ? null : key);

  const isServicesActive = location.pathname.startsWith("/services");
  const isWhoActive      = location.pathname.startsWith("/who-we-are");

  return (
    <>
      <style>{`
        .nav-root { position:sticky;top:0;z-index:9999;width:100%;background:#fff;border-bottom:1px solid rgba(0,0,0,0.08);font-family:'Nunito Sans',Arial,sans-serif; }
        .nav-inner { max-width:1320px;margin:0 auto;padding:0 36px;height:86px;display:flex;align-items:center;justify-content:space-between;gap:20px; }
        .nav-logo { cursor:pointer;flex-shrink:0;display:flex;align-items:center; }
        .nav-logo img { width:125px;height:auto;display:block; }
        .nav-links { display:flex;align-items:center;gap:26px; }
        .nav-btn { background:none;border:none;cursor:pointer;padding:0;font-family:'Nunito Sans',Arial,sans-serif;font-size:14.5px;font-weight:800;color:#003f2b;transition:color 0.18s;white-space:nowrap; }
        .nav-btn:hover,.nav-btn.act { color:#168545; }

        /* Dropdown triggers */
        .drop-wrap { position:relative; }
        .drop-trigger { display:flex;align-items:center;gap:5px;background:none;border:none;cursor:pointer;padding:0;font-family:'Nunito Sans',Arial,sans-serif;font-size:14.5px;font-weight:800;color:#003f2b;transition:color 0.18s;white-space:nowrap; }
        .drop-trigger:hover,.drop-trigger.act { color:#168545; }
        .chevron { display:inline-block;transition:transform 0.22s; }
        .chevron.up { transform:rotate(180deg); }

        /* Dropdown panel */
        .drop-panel { position:absolute;top:calc(100% + 14px);left:0;min-width:260px;background:#fff;border:1px solid rgba(0,68,45,0.13);border-radius:14px;padding:8px;box-shadow:0 16px 48px rgba(0,68,45,0.16);z-index:10000;opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity 0.2s,transform 0.2s,visibility 0.2s; }
        .drop-panel.open { opacity:1;visibility:visible;transform:translateY(0); }
        .drop-item { display:flex;align-items:center;gap:10px;width:100%;padding:9px 14px;border-radius:8px;font-size:13.5px;font-weight:600;color:#1a3a2a;background:none;border:none;cursor:pointer;text-align:left;font-family:'Nunito Sans',Arial,sans-serif;transition:background 0.15s,color 0.15s; }
        .drop-item::before { content:'';width:6px;height:6px;border-radius:50%;background:#168545;flex-shrink:0; }
        .drop-item:hover { background:#e8f5ee;color:#00442d; }

        /* Right actions */
        .nav-actions { display:flex;align-items:center;gap:12px;flex-shrink:0; }
        .nav-grid-btn { width:38px;height:38px;border:0;background:transparent;color:#00442d;cursor:pointer;display:flex;align-items:center;justify-content:center; }
        .nav-cta { height:42px;border:0;border-radius:999px;background:#00442d;color:#fff;padding:0 28px;font-size:13px;font-weight:800;cursor:pointer;font-family:'Nunito Sans',Arial,sans-serif;transition:background 0.18s,transform 0.15s; }
        .nav-cta:hover { background:#005a3a;transform:translateY(-1px); }
        .hamburger { display:none;width:34px;height:34px;border:0;background:transparent;cursor:pointer;padding:0;flex-direction:column;align-items:center;justify-content:center;gap:5px; }
        .hamburger span { width:22px;height:2px;background:#00442d;display:block;border-radius:10px;transition:0.25s; }

        /* Mobile menu */
        .mobile-menu { display:none;position:fixed;top:86px;left:0;right:0;background:#fff;padding:14px 24px 28px;box-shadow:0 18px 30px rgba(0,0,0,0.1);z-index:9998;max-height:calc(100vh - 86px);overflow-y:auto; }
        .mobile-menu.open { display:block; }
        .mob-btn { display:block;width:100%;padding:13px 0;color:#00442d;font-size:15px;font-weight:800;border:none;background:none;cursor:pointer;border-bottom:1px solid rgba(0,68,45,0.08);font-family:'Nunito Sans',Arial,sans-serif;text-align:left; }
        .mob-toggle { display:flex;align-items:center;justify-content:space-between;width:100%;padding:13px 0;color:#00442d;font-size:15px;font-weight:800;border:none;background:none;cursor:pointer;border-bottom:1px solid rgba(0,68,45,0.08);font-family:'Nunito Sans',Arial,sans-serif; }
        .mob-sub { padding:6px 0 4px 14px; }
        .mob-sub-btn { display:block;width:100%;padding:9px 0;color:#1a4a2e;font-size:13.5px;font-weight:600;border:none;background:none;cursor:pointer;font-family:'Nunito Sans',Arial,sans-serif;text-align:left;border-bottom:1px solid rgba(0,68,45,0.05); }

        @media (max-width:1000px) { .nav-links,.nav-grid-btn,.nav-cta { display:none; } .hamburger { display:flex; } }
        @media (max-width:520px) { .nav-inner { padding:0 18px;height:76px; } .mobile-menu { top:76px; } .nav-logo img { width:100px; } }
      `}</style>

      <nav className="nav-root" ref={navRef}>
        <div className="nav-inner">

          {/* Logo */}
          <div className="nav-logo" onClick={() => go("/")}>
            <img src="/Continuity-Care-Logo-PDF_2.png" alt="Continuity Care"/>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            <button className={`nav-btn${location.pathname==="/"?" act":""}`} onClick={() => go("/")}>Home</button>

            {/* Who We Are */}
            <div className="drop-wrap">
              <button className={`drop-trigger${isWhoActive?" act":""}`} onClick={() => toggle("who")}>
                Who We Are
                <span className={`chevron${openDrop==="who"?" up":""}`}><Chevron/></span>
              </button>
              <div className={`drop-panel${openDrop==="who"?" open":""}`}>
                {WHO_WE_ARE.map(s => (
                  <button key={s.path} className="drop-item" onClick={() => go(s.path)}>{s.label}</button>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div className="drop-wrap">
              <button className={`drop-trigger${isServicesActive?" act":""}`} onClick={() => toggle("svc")}>
                Our Services
                <span className={`chevron${openDrop==="svc"?" up":""}`}><Chevron/></span>
              </button>
              <div className={`drop-panel${openDrop==="svc"?" open":""}`}>
                {SERVICES.map(s => (
                  <button key={s.path} className="drop-item" onClick={() => go(s.path)}>{s.label}</button>
                ))}
              </div>
            </div>

            {[{ label:"NDIS", path:"/ndis" }].map(l => (
              <button key={l.path} className={`nav-btn${location.pathname===l.path?" act":""}`} onClick={() => go(l.path)}>{l.label}</button>
            ))}
          </div>

          {/* Right side */}
          <div className="nav-actions">
            <button className="nav-grid-btn" aria-label="apps">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <rect x="4" y="4" width="6" height="6" rx="1.5"/>
                <rect x="14" y="4" width="6" height="6" rx="1.5"/>
                <rect x="4" y="14" width="6" height="6" rx="1.5"/>
                <rect x="14" y="14" width="6" height="6" rx="1.5"/>
              </svg>
            </button>
            <button className="nav-cta" onClick={() => go("/who-we-are/contact")}>Get Started</button>
            <button className="hamburger" onClick={() => setMenuOpen(p => !p)} aria-label="menu">
              <span style={{ transform:menuOpen?"rotate(45deg) translate(0,7px)":"none" }}/>
              <span style={{ opacity:menuOpen?0:1 }}/>
              <span style={{ transform:menuOpen?"rotate(-45deg) translate(0,-7px)":"none" }}/>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen?" open":""}`}>
          <button className="mob-btn" onClick={() => go("/")}>Home</button>

          {/* Who We Are mobile */}
          <button className="mob-toggle" onClick={() => setMobileOpen(p => p==="who" ? null : "who")}>
            Who We Are
            <span style={{ display:"inline-block", transform:mobileOpen==="who"?"rotate(180deg)":"none", transition:"0.2s" }}><Chevron/></span>
          </button>
          {mobileOpen==="who" && (
            <div className="mob-sub">
              {WHO_WE_ARE.map(s => <button key={s.path} className="mob-sub-btn" onClick={() => go(s.path)}>{s.label}</button>)}
            </div>
          )}

          {/* Services mobile */}
          <button className="mob-toggle" onClick={() => setMobileOpen(p => p==="svc" ? null : "svc")}>
            Our Services
            <span style={{ display:"inline-block", transform:mobileOpen==="svc"?"rotate(180deg)":"none", transition:"0.2s" }}><Chevron/></span>
          </button>
          {mobileOpen==="svc" && (
            <div className="mob-sub">
              {SERVICES.map(s => <button key={s.path} className="mob-sub-btn" onClick={() => go(s.path)}>{s.label}</button>)}
            </div>
          )}

          <button className="mob-btn" onClick={() => go("/ndis")}>NDIS</button>
        </div>
      </nav>
    </>
  );
}
