import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    headline: ["Compassionate care", "that helps you"],
    highlight: "live independently",
    description:
      "We support individuals and families with disability care, in-home services, nursing, and care coordination - making it easier to access the right support with confidence, clarity, and continuity.",
    tags: [
      "NDIS Registered",
      "Personalised Support",
      "In-Home Services",
      "Qualified Care Team",
    ],
    stats: [
      { value: "2,400+", label: "Client Support" },
      { value: "4.9/5", label: "Average satisfaction" },
      { value: "24 hrs", label: "Typical callback time" },
    ],
    bg: "linear-gradient(135deg, #e8f5e0 0%, #d4ede4 40%, #c3e5f0 100%)",
  },
  {
    id: 2,
    headline: ["Professional nursing", "care at home"],
    highlight: "when you need it most",
    description:
      "Our registered nurses deliver expert medical care in the comfort of your own home. From wound care to chronic disease management, we bring the clinic to you.",
    tags: [
      "Registered Nurses",
      "24/7 Support",
      "Medication Management",
      "NDIS Approved",
    ],
    stats: [
      { value: "500+", label: "Nursing Staff" },
      { value: "98%", label: "Patient Satisfaction" },
      { value: "1 hr", label: "Avg response time" },
    ],
    bg: "linear-gradient(135deg, #e0f0f8 0%, #d0e8f5 40%, #c8e0ee 100%)",
  },
  {
    id: 3,
    headline: ["Empowering lives", "through NDIS"],
    highlight: "support & coordination",
    description:
      "Navigating the NDIS can be complex. Our experienced coordinators guide you through every step, ensuring you receive the support funding and services you deserve.",
    tags: [
      "NDIS Registered",
      "Plan Management",
      "Support Coordination",
      "Goal Planning",
    ],
    stats: [
      { value: "1,200+", label: "NDIS Participants" },
      { value: "100%", label: "Plan Utilisation" },
      { value: "48 hrs", label: "Plan review time" },
    ],
    bg: "linear-gradient(135deg, #eef0e8 0%, #e0edd4 40%, #d4e8d0 100%)",
  },
];

const NAV_LINKS = ["Services", "About", "NDIS", "Locations", "Contact"];

const tagIcons = {
  "NDIS Registered": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Personalised Support": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "In-Home Services": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  "Qualified Care Team": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  "Registered Nurses": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "24/7 Support": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  "Medication Management": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  "NDIS Approved": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Plan Management": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "Support Coordination": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  "Goal Planning": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

export default function ContinuityCare() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (index: any) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = slides[current];

  return (
    <div
      style={{
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-link {
          text-decoration: none;
          color: #1a3a2a;
          font-size: 15px;
          font-weight: 600;
          padding: 6px 4px;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #1a5c3a;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #1a5c3a; }
        .nav-link:hover::after { width: 100%; }

        .btn-primary {
          background: #1a3a2a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 12px 26px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .btn-primary:hover { background: #0d2a1a; transform: translateY(-1px); }

        .btn-secondary {
          background: transparent;
          color: #1a3a2a;
          border: 2px solid #1a3a2a;
          border-radius: 50px;
          padding: 11px 24px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .btn-secondary:hover { background: #1a3a2a; color: #fff; }

        .tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(26,58,42,0.2);
          border-radius: 50px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #1a3a2a;
          backdrop-filter: blur(4px);
        }

        .dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 2px solid #1a3a2a;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .dot.active { background: #1a3a2a; transform: scale(1.2); }

        .slide-content {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .slide-content.fade-out {
          opacity: 0;
          transform: translateY(12px);
        }
        .slide-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #1a3a2a;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0; right: 0;
          background: #fff;
          border-bottom: 1px solid rgba(26,58,42,0.1);
          padding: 20px 24px;
          flex-direction: column;
          gap: 4px;
          z-index: 999;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .mobile-menu.open { display: flex; }
        .mobile-nav-link {
          display: block;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: #1a3a2a;
          text-decoration: none;
          border-bottom: 1px solid rgba(26,58,42,0.06);
          transition: color 0.2s;
        }
        .mobile-nav-link:hover { color: #3a8a5a; }

        .stat-item { display: flex; flex-direction: column; gap: 2px; }
        .stat-value { font-size: 28px; font-weight: 800; color: #3a7a5a; line-height: 1; }
        .stat-label { font-size: 12px; color: #5a7a6a; font-weight: 600; }

        .avatar-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: #4a7a8a;
          color: #fff;
          font-weight: 800;
          font-size: 15px;
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
        }

        .grid-icon {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #1a3a2a;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .grid-icon:hover { background: rgba(26,58,42,0.08); }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex; }
          .hero-title { font-size: 32px !important; }
          .hero-highlight { font-size: 30px !important; }
          .stats-row { gap: 24px !important; }
          .btn-row { flex-wrap: wrap; }
          .tags-row { flex-wrap: wrap; }
        }
        @media (max-width: 480px) {
          .hero-section { padding: 40px 20px 60px !important; }
          .hero-title { font-size: 26px !important; }
          .hero-highlight { font-size: 24px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          borderBottom: "1px solid rgba(26,58,42,0.08)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "0 24px",
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="22" fill="#e8f5e0" />
              <g transform="translate(10,6)">
                <circle cx="12" cy="5" r="3" fill="#3a7a3a" />
                <line
                  x1="12"
                  y1="8"
                  x2="12"
                  y2="20"
                  stroke="#3a7a3a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="13"
                  x2="18"
                  y2="13"
                  stroke="#3a7a3a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <line
                  x1="12"
                  y1="20"
                  x2="8"
                  y2="26"
                  stroke="#3a7a3a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="12"
                  y1="20"
                  x2="16"
                  y2="26"
                  stroke="#3a7a3a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="13"
                  x2="3"
                  y2="18"
                  stroke="#5aaa5a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="18"
                  y1="13"
                  x2="21"
                  y2="18"
                  stroke="#5aaa5a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#1a3a2a",
                  letterSpacing: "0.03em",
                  lineHeight: 1.1,
                }}
              >
                CONTINUITY
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#5a7a6a",
                  letterSpacing: "0.12em",
                }}
              >
                CARE
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 28 }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="nav-link">
                {link}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              className="desktop-nav"
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <button className="avatar-btn" title="User">
                S
              </button>
              <button className="grid-icon" title="Apps">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="3" y="3" width="5" height="5" rx="1" />
                  <rect x="10" y="3" width="5" height="5" rx="1" />
                  <rect x="17" y="3" width="5" height="5" rx="1" />
                  <rect x="3" y="10" width="5" height="5" rx="1" />
                  <rect x="10" y="10" width="5" height="5" rx="1" />
                  <rect x="17" y="10" width="5" height="5" rx="1" />
                  <rect x="3" y="17" width="5" height="5" rx="1" />
                  <rect x="10" y="17" width="5" height="5" rx="1" />
                  <rect x="17" y="17" width="5" height="5" rx="1" />
                </svg>
              </button>
            </div>
            <button
              className="btn-primary"
              style={{ padding: "10px 20px", fontSize: 14 }}
            >
              Get Started
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  transform: menuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span
                style={{
                  transform: menuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            className="btn-primary"
            style={{ marginTop: 12, justifyContent: "center" }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section
        style={{
          minHeight: "calc(100vh - 70px)",
          background: slide.bg,
          transition: "background 0.8s ease",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "30%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            width: "100%",
            padding: "0 24px",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <div
              className={`slide-content ${animating ? "fade-out" : "fade-in"}`}
            >
              {/* Headline */}
              <h1
                className="hero-title"
                style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#0f2a1c",
                  lineHeight: 1.15,
                  marginBottom: 0,
                }}
              >
                {slide.headline.map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </h1>
              <h1
                className="hero-highlight"
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  color: "#3a8a5a",
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                {slide.highlight}
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: 16,
                  color: "#3a5a4a",
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginBottom: 28,
                }}
              >
                {slide.description}
              </p>

              {/* Buttons */}
              <div
                className="btn-row"
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 24,
                  flexWrap: "wrap",
                }}
              >
                <button className="btn-primary">
                  Start Your Care Journey
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button className="btn-secondary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Contact Us
                </button>
              </div>

              {/* Tags */}
              <div
                className="tags-row"
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 36,
                }}
              >
                {slide.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    <span style={{ color: "#3a7a5a", display: "flex" }}>
                      {/* {tagIcons[tag] || null} */}
                    </span>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div
                className="stats-row"
                style={{
                  display: "flex",
                  gap: 40,
                  flexWrap: "wrap",
                  borderTop: "1px solid rgba(26,58,42,0.12)",
                  paddingTop: 24,
                }}
              >
                {slide.stats.map((s) => (
                  <div key={s.label} className="stat-item">
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Dots */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          style={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.8)",
            border: "1.5px solid rgba(26,58,42,0.15)",
            borderRadius: "50%",
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#1a3a2a",
            transition: "all 0.2s",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.8)",
            border: "1.5px solid rgba(26,58,42,0.15)",
            borderRadius: "50%",
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#1a3a2a",
            transition: "all 0.2s",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </section>
    </div>
  );
}
