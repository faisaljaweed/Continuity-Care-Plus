import { useEffect, useRef, useState } from "react";

const trustBadges = [
  { icon: "★", color: "#f5a623", label: "No obligation" },
  { icon: "✓", color: "#3a8a5a", label: "Response within 24 hrs" },
  { icon: "●", color: "#f5a623", label: "NDIS registered" },
  { icon: "★", color: "#f5a623", label: "Serving all of Australia" },
];

export default function CTAFooterSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#fff",
        padding: "0 24px 80px",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .cta-fade {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .cta-fade.in { opacity: 1; transform: translateY(0); }

        /* ── Green help card ── */
        .cta-help-card {
          max-width: 560px;
          margin: 0 auto 72px;
          border-radius: 20px;
          background: linear-gradient(130deg, #0d3d1a 0%, #165c28 35%, #1e8040 65%, #2dcc68 100%);
          padding: 38px 40px 34px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-help-glow {
          position: absolute;
          top: -50px; right: -50px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(100,220,140,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-help-title {
          font-size: 20px;
          font-weight: 900;
          color: #fff;
          margin-bottom: 9px;
          position: relative;
        }
        .cta-help-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.78);
          line-height: 1.65;
          margin-bottom: 24px;
          position: relative;
        }
        .cta-help-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }
        .cta-help-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          border: 1.8px solid rgba(255,255,255,0.5);
          color: #fff;
          border-radius: 50px;
          padding: 11px 22px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.18s;
          font-family: 'Nunito Sans', sans-serif;
          white-space: nowrap;
        }
        .cta-help-btn:hover {
          background: rgba(255,255,255,0.24);
          border-color: rgba(255,255,255,0.8);
          transform: translateY(-2px);
        }

        /* ── Main CTA ── */
        .cta-main {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-eye {
          font-size: 13px;
          font-weight: 800;
          color: #3a8a5a;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .cta-h2 {
          font-size: 46px;
          font-weight: 900;
          color: #0f2a1c;
          line-height: 1.12;
          margin-bottom: 16px;
        }
        .cta-sub {
          font-size: 16px;
          color: #5a7a6a;
          line-height: 1.68;
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-main-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #1a3a2a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 15px 30px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s, transform 0.18s;
          font-family: 'Nunito Sans', sans-serif;
          white-space: nowrap;
        }
        .cta-btn-primary:hover { background: #0d2a1a; transform: translateY(-2px); }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #2d6a4f;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 15px 28px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s, transform 0.18s;
          font-family: 'Nunito Sans', sans-serif;
          white-space: nowrap;
        }
        .cta-btn-secondary:hover { background: #1e5a3a; transform: translateY(-2px); }

        .cta-trust-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #5a7a6a;
        }
        .cta-trust-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 560px) {
          .cta-h2 { font-size: 34px; }
          .cta-help-card { padding: 28px 24px 26px; }
          .cta-trust-row { gap: 16px; }
        }
      `}</style>

      {/* ── Green Help Card ── */}
      <div
        className={`cta-fade cta-help-card${visible ? " in" : ""}`}
        style={{ transitionDelay: "0.05s" }}
      >
        <div className="cta-help-glow" />

        {/* Dot pattern */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            opacity: 0.6,
          }}
          viewBox="0 0 560 160"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="cdots"
              x="0"
              y="0"
              width="32"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="1.3" fill="rgba(255,255,255,0.08)" />
            </pattern>
          </defs>
          <rect width="560" height="160" fill="url(#cdots)" />
        </svg>

        <h3 className="cta-help-title">Still have questions?</h3>
        <p className="cta-help-desc">
          Our friendly team is here to help. Reach out anytime — no question is
          too small.
        </p>
        <div className="cta-help-btns">
          <button className="cta-help-btn">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call 1300 000000
          </button>
          <button className="cta-help-btn">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Send us a message
          </button>
        </div>
      </div>

      {/* ── Main CTA Block ── */}
      <div
        className={`cta-fade cta-main${visible ? " in" : ""}`}
        style={{ transitionDelay: "0.18s" }}
      >
        <span className="cta-eye">Your Care Starts Here</span>
        <h2 className="cta-h2">Ready to Find the Right Support?</h2>
        <p className="cta-sub">
          Start your journey today and let us guide you to the care you need.
          Compassionate, personalised, and always on your side.
        </p>

        <div className="cta-main-btns">
          <button className="cta-btn-primary">
            Start Your Care Journey
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button className="cta-btn-secondary">
            Call 1300000000
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
        </div>

        {/* Trust badges */}
        <div className="cta-trust-row">
          {[
            { color: "#f5a623", label: "No obligation" },
            { color: "#3a8a5a", label: "Response within 24 hrs" },
            { color: "#f5a623", label: "NDIS registered" },
            { color: "#f5a623", label: "Serving all of Australia" },
          ].map(({ color, label }) => (
            <div key={label} className="cta-trust-item">
              <div className="cta-trust-dot" style={{ background: color }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
