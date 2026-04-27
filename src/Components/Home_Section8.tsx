import { useEffect, useRef, useState } from "react";

interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const CheckIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const features: FeatureCard[] = [
  {
    id: 1,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Personalised Support Plans",
    description:
      "Every care plan is designed around you — your goals, your pace, and your life circumstances.",
    stat: "100%",
    statLabel: "Tailored plans",
  },
  {
    id: 2,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Clear & Guided Care Process",
    description:
      "No confusing paperwork or jargon. We guide you step-by-step from first contact to ongoing care.",
    stat: "4 steps",
    statLabel: "Simple journey",
  },
  {
    id: 3,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Experienced & Compassionate Team",
    description:
      "Our support workers and nurses are fully qualified, background-checked, and genuinely care about your outcomes.",
    stat: "15+ Yrs",
    statLabel: "Combined Experience",
  },
  {
    id: 4,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Focus on Independence & Quality of Life",
    description:
      "We believe everyone deserves to live on their own terms. Your independence and dignity are always our priority.",
    stat: "4.9+",
    statLabel: "Client satisfaction",
  },
];

const stats = [
  { value: "2,400", label: "Clients helped" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "48hr", label: "Response time" },
];

export default function WhyChooseContinuityCare() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#fff",
        padding: "80px 24px 90px",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .wcc-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .wcc-fade.visible { opacity: 1; transform: translateY(0); }

        .wcc-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto 64px;
        }

        .wcc-testimonial {
          background: #d4ead4;
          border-radius: 20px;
          padding: 32px 32px 28px;
          position: relative;
          border: 1px solid #c0d8bc;
        }

        .wcc-stars { display: flex; gap: 4px; margin-bottom: 16px; }

        .wcc-quote {
          font-size: 16px;
          font-style: italic;
          color: #1a3a2a;
          line-height: 1.7;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .wcc-avatar-row { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .wcc-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #2d6a4f;
          color: #fff;
          font-size: 15px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wcc-author-name { font-size: 14px; font-weight: 800; color: #0f2a1c; }
        .wcc-author-role { font-size: 12.5px; color: #4a7a5a; font-weight: 600; }

        .wcc-ndis-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2d6a4f;
          color: #fff;
          font-size: 12.5px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 50px;
        }

        .wcc-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .wcc-feat-card {
          border: 1.5px solid #e4f0e4;
          border-radius: 16px;
          padding: 28px 22px 24px;
          background: #fff;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
          cursor: default;
        }
        .wcc-feat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(26,90,50,0.1);
          border-color: #a8d4a8;
        }

        .wcc-feat-icon {
          width: 50px; height: 50px;
          border-radius: 12px;
          background: #edf7ed;
          color: #2d6a4f;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.2s;
        }
        .wcc-feat-card:hover .wcc-feat-icon {
          background: #d4ead4;
        }

        .wcc-feat-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #0f2a1c;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .wcc-feat-desc {
          font-size: 13px;
          color: #5a7a6a;
          line-height: 1.68;
          margin-bottom: 20px;
        }

        .wcc-stat-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #2d5a3a;
          border-radius: 8px;
          padding: 10px 14px;
        }
        .wcc-stat-val {
          font-size: 15px;
          font-weight: 900;
          color: #fff;
        }
        .wcc-stat-lbl {
          font-size: 11.5px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
        }

        @media (max-width: 980px) {
          .wcc-top { grid-template-columns: 1fr; gap: 36px; }
          .wcc-features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .wcc-features-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Top section */}
      <div className={`wcc-fade wcc-top${visible ? " visible" : ""}`}>
        {/* LEFT */}
        <div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#3a8a5a",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Our Difference
          </p>
          <h2
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: "#0f2a1c",
              lineHeight: 1.15,
              marginBottom: 6,
            }}
          >
            Why Choose
          </h2>
          <h2
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: "#2d8a50",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Continuity Care
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#5a7a6a",
              lineHeight: 1.72,
              maxWidth: 400,
              marginBottom: 32,
            }}
          >
            We're not just a care provider — we're your partner in building a
            life that feels full, independent, and meaningful. Here's what sets
            us apart.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#0f2a1c",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "#6a8a7a",
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Testimonial */}
        <div className="wcc-testimonial">
          {/* Stars */}
          <div className="wcc-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#f5a623"
                stroke="#f5a623"
                strokeWidth="1.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          <p className="wcc-quote">
            "Continuity Care changed everything for our family. Mum finally has
            the support she needs, and we finally have peace of mind."
          </p>

          <div className="wcc-avatar-row">
            <div className="wcc-avatar">JT</div>
            <div>
              <div className="wcc-author-name">James T.</div>
              <div className="wcc-author-role">Family carer, Sydney</div>
            </div>
          </div>

          <div className="wcc-ndis-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            NDIS Registered Provider
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="wcc-features-grid">
        {features.map((feat, i) => (
          <div
            key={feat.id}
            className={`wcc-fade wcc-feat-card${visible ? " visible" : ""}`}
            style={{ transitionDelay: `${i * 0.1 + 0.15}s` }}
          >
            <div className="wcc-feat-icon">{feat.icon}</div>
            <h3 className="wcc-feat-title">{feat.title}</h3>
            <p className="wcc-feat-desc">{feat.description}</p>
            <div className="wcc-stat-badge">
              <span className="wcc-stat-val">{feat.stat}</span>
              <span className="wcc-stat-lbl">{feat.statLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
