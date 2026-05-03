import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SERVICES = [
  { label: "In-Home Care",                  path: "/services/in-home-care" },
  { label: "Community Participation",       path: "/services/community-participation" },
  { label: "Supported Independent Living",  path: "/services/sil" },
  { label: "Care Coordination / Navigation",path: "/services/care-coordination" },
  { label: "Community Nursing",             path: "/services/community-nursing" },
  { label: "Allied Health",                 path: "/services/allied-health" },
  { label: "Plan Management",               path: "/services/plan-management" },
  { label: "Support Coordination",          path: "/services/support-coordination" },
  { label: "Respite Care",                  path: "/services/respite-care" },
];

export default function Navbar() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [dropOpen,    setDropOpen]    = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node))
        setDropOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* Close everything on route change */
  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
    setMobileDropOpen(false);
  }, [location.pathname]);

  const go = (path: string) => navigate(path);
  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <style>{`
        .nav-root {
          position: sticky; top: 0; z-index: 9999;
          width: 100%; background: #ffffff;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          font-family: 'Nunito Sans', Arial, sans-serif;
        }
        .nav-inner {
          max-width: 1320px; margin: 0 auto; padding: 0 36px;
          height: 86px; display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .nav-logo { cursor: pointer; flex-shrink: 0; display: flex; align-items: center; }
        .nav-logo img { width: 125px; height: auto; display: block; }

        .nav-links { display: flex; align-items: center; gap: 32px; }

        .nav-btn {
          background: none; border: none; cursor: pointer; padding: 0;
          font-family: 'Nunito Sans', Arial, sans-serif;
          font-size: 15px; font-weight: 800; color: #003f2b;
          transition: color 0.18s; white-space: nowrap;
        }
        .nav-btn:hover, .nav-btn.act { color: #168545; }

        /* Services trigger */
        .svc-trigger-wrap { position: relative; }
        .svc-trigger {
          display: flex; align-items: center; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 0;
          font-family: 'Nunito Sans', Arial, sans-serif;
          font-size: 15px; font-weight: 800; color: #003f2b;
          transition: color 0.18s;
        }
        .svc-trigger:hover, .svc-trigger.act { color: #168545; }
        .svc-chevron { display: inline-block; transition: transform 0.22s; }
        .svc-chevron.rotated { transform: rotate(180deg); }

        /* Dropdown */
        .svc-dropdown {
          position: absolute;
          top: calc(100% + 16px);
          left: 0;
          min-width: 270px;
          background: #ffffff;
          border: 1px solid rgba(0,68,45,0.14);
          border-radius: 14px;
          padding: 8px;
          box-shadow: 0 16px 48px rgba(0,68,45,0.16);
          z-index: 10000;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
        }
        .svc-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .drop-btn {
          display: flex; align-items: center; gap: 10px;
          width: 100%; padding: 9px 14px; border-radius: 8px;
          font-size: 13.5px; font-weight: 600; color: #1a3a2a;
          background: none; border: none; cursor: pointer; text-align: left;
          font-family: 'Nunito Sans', Arial, sans-serif;
          transition: background 0.15s, color 0.15s;
        }
        .drop-btn::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #168545; flex-shrink: 0; }
        .drop-btn:hover { background: #e8f5ee; color: #00442d; }

        /* Right actions */
        .nav-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .nav-grid-btn {
          width: 38px; height: 38px; border: 0; background: transparent;
          color: #00442d; cursor: pointer; display: flex; align-items: center; justify-content: center;
        }
        .nav-cta {
          height: 42px; border: 0; border-radius: 999px; background: #00442d; color: #ffffff;
          padding: 0 28px; font-size: 13px; font-weight: 800; cursor: pointer;
          font-family: 'Nunito Sans', Arial, sans-serif; transition: background 0.18s, transform 0.15s;
        }
        .nav-cta:hover { background: #005a3a; transform: translateY(-1px); }

        /* Hamburger */
        .hamburger {
          display: none; width: 34px; height: 34px; border: 0; background: transparent;
          cursor: pointer; padding: 0; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
        }
        .hamburger span { width: 22px; height: 2px; background: #00442d; display: block; border-radius: 10px; transition: 0.25s; }

        /* Mobile menu */
        .mobile-menu {
          display: none; position: fixed; top: 86px; left: 0; right: 0;
          background: #ffffff; padding: 12px 24px 28px;
          box-shadow: 0 18px 30px rgba(0,0,0,0.1); z-index: 9998;
          max-height: calc(100vh - 86px); overflow-y: auto;
        }
        .mobile-menu.open { display: block; }
        .mobile-btn {
          display: block; width: 100%; padding: 13px 0;
          color: #00442d; font-size: 15px; font-weight: 800;
          border: none; background: none; cursor: pointer;
          border-bottom: 1px solid rgba(0,68,45,0.08);
          font-family: 'Nunito Sans', Arial, sans-serif; text-align: left;
        }
        .mobile-svc-toggle {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 13px 0;
          color: #00442d; font-size: 15px; font-weight: 800;
          border: none; background: none; cursor: pointer;
          border-bottom: 1px solid rgba(0,68,45,0.08);
          font-family: 'Nunito Sans', Arial, sans-serif;
        }
        .mobile-svc-list { padding: 6px 0 4px 14px; }
        .mobile-svc-btn {
          display: block; width: 100%; padding: 9px 0; color: #1a4a2e;
          font-size: 13.5px; font-weight: 600; border: none; background: none;
          cursor: pointer; font-family: 'Nunito Sans', Arial, sans-serif; text-align: left;
          border-bottom: 1px solid rgba(0,68,45,0.05);
        }

        @media (max-width: 900px) {
          .nav-links, .nav-grid-btn, .nav-cta { display: none; }
          .hamburger { display: flex; }
        }
        @media (max-width: 520px) {
          .nav-root { top: 0; }
          .mobile-menu { top: 86px; }
          .nav-logo img { width: 100px; }
          .nav-inner { padding: 0 18px; height: 76px; }
          .mobile-menu { top: 76px; }
        }
      `}</style>

      <nav className="nav-root">
        <div className="nav-inner">

          {/* Logo */}
          <div className="nav-logo" onClick={() => go("/")}>
            <img src="/Continuity-Care-Logo-PDF_2.png" alt="Continuity Care" />
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            <button className={`nav-btn${isActive("/") ? " act" : ""}`} onClick={() => go("/")}>Home</button>

            {/* Services dropdown */}
            <div className="svc-trigger-wrap" ref={dropRef}>
              <button
                className={`svc-trigger${isServicesActive ? " act" : ""}`}
                onClick={() => setDropOpen(p => !p)}
              >
                Our Services
                <span className={`svc-chevron${dropOpen ? " rotated" : ""}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>

              <div className={`svc-dropdown${dropOpen ? " open" : ""}`}>
                {SERVICES.map(s => (
                  <button key={s.path} className="drop-btn" onClick={() => go(s.path)}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {[{ label: "About", path: "/about" }, { label: "NDIS", path: "/ndis" }, { label: "Contact", path: "/contact" }].map(l => (
              <button key={l.path} className={`nav-btn${isActive(l.path) ? " act" : ""}`} onClick={() => go(l.path)}>
                {l.label}
              </button>
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
            <button className="nav-cta" onClick={() => go("/contact")}>Get Started</button>
            <button className="hamburger" onClick={() => setMenuOpen(p => !p)} aria-label="menu">
              <span style={{ transform: menuOpen ? "rotate(45deg) translate(0,7px)" : "none" }}/>
              <span style={{ opacity: menuOpen ? 0 : 1 }}/>
              <span style={{ transform: menuOpen ? "rotate(-45deg) translate(0,-7px)" : "none" }}/>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          <button className="mobile-btn" onClick={() => go("/")}>Home</button>

          <button className="mobile-svc-toggle" onClick={() => setMobileDropOpen(p => !p)}>
            Our Services
            <span style={{ display:"inline-block", transform: mobileDropOpen ? "rotate(180deg)" : "none", transition:"0.2s" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </button>

          {mobileDropOpen && (
            <div className="mobile-svc-list">
              {SERVICES.map(s => (
                <button key={s.path} className="mobile-svc-btn" onClick={() => go(s.path)}>
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {[{ label: "About", path: "/about" }, { label: "NDIS", path: "/ndis" }, { label: "Contact", path: "/contact" }].map(l => (
            <button key={l.path} className="mobile-btn" onClick={() => go(l.path)}>{l.label}</button>
          ))}
        </div>
      </nav>
    </>
  );
}
