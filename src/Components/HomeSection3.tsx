import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    title: "In-Home Care",
    description:
      "Personal support, domestic assistance, and companionship in the comfort of your own home.",
    bg: "linear-gradient(160deg, #2d6a4f 0%, #40916c 35%, #74c69d 80%, #b7e4c7 100%)",
    accent: "#52b788",
    pattern: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="320" cy="60" r="120" fill="#fff" />
        <circle cx="60" cy="220" r="80" fill="#fff" />
        <rect x="180" y="140" width="200" height="200" rx="100" fill="#fff" />
        {/* House silhouette */}
        <path
          d="M140 180 L200 120 L260 180 L260 240 L140 240 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          opacity="0.4"
        />
        <rect
          x="170"
          y="200"
          width="25"
          height="40"
          rx="2"
          fill="#fff"
          opacity="0.3"
        />
        <rect
          x="215"
          y="195"
          width="30"
          height="25"
          rx="2"
          fill="#fff"
          opacity="0.3"
        />
        {/* Person shapes */}
        <circle cx="195" cy="155" r="10" fill="#fff" opacity="0.25" />
        <path
          d="M185 170 Q195 165 205 170 L208 200 L182 200 Z"
          fill="#fff"
          opacity="0.2"
        />
      </svg>
    ),
    illustrationEl: (
      <svg
        viewBox="0 0 80 80"
        width="70"
        height="70"
        fill="none"
        style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.22 }}
      >
        <path
          d="M40 8 L72 32 L72 72 L8 72 L8 32 Z"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
        />
        <rect x="28" y="48" width="14" height="24" rx="2" fill="#fff" />
        <rect
          x="48"
          y="42"
          width="18"
          height="16"
          rx="2"
          fill="#fff"
          opacity="0.7"
        />
        <circle cx="56" cy="34" r="6" fill="#fff" opacity="0.6" />
        <path
          d="M50 40 Q56 37 62 40 L64 58 L48 58 Z"
          fill="#fff"
          opacity="0.5"
        />
        <circle cx="32" cy="36" r="5" fill="#fff" opacity="0.6" />
        <path
          d="M27 42 Q32 39 37 42 L39 56 L25 56 Z"
          fill="#fff"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Community Nursing",
    description:
      "Registered nurses delivering clinical care and wound management in your community.",
    bg: "linear-gradient(160deg, #1b4332 0%, #2d6a4f 40%, #52b788 85%, #95d5b2 100%)",
    accent: "#74c69d",
    pattern: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="350" cy="40" r="140" fill="#fff" />
        <circle cx="30" cy="260" r="90" fill="#fff" />
        {/* Medical cross */}
        <rect
          x="160"
          y="110"
          width="80"
          height="80"
          rx="10"
          fill="#fff"
          opacity="0.15"
        />
        <rect
          x="188"
          y="120"
          width="24"
          height="60"
          rx="4"
          fill="#fff"
          opacity="0.4"
        />
        <rect
          x="168"
          y="140"
          width="64"
          height="24"
          rx="4"
          fill="#fff"
          opacity="0.4"
        />
        {/* Stethoscope arc */}
        <path
          d="M80 60 Q100 30 130 50 Q160 70 150 100"
          stroke="#fff"
          strokeWidth="4"
          fill="none"
          opacity="0.3"
        />
        <circle
          cx="150"
          cy="105"
          r="8"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          opacity="0.3"
        />
      </svg>
    ),
    illustrationEl: (
      <svg
        viewBox="0 0 80 80"
        width="70"
        height="70"
        fill="none"
        style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.22 }}
      >
        <rect
          x="22"
          y="22"
          width="36"
          height="36"
          rx="8"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
        />
        <rect x="36" y="28" width="8" height="24" rx="2" fill="#fff" />
        <rect
          x="28"
          y="36"
          width="24"
          height="8"
          rx="2"
          fill="#fff"
          opacity="0.8"
        />
        <circle
          cx="15"
          cy="50"
          r="5"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <path
          d="M8 36 Q10 25 20 28 Q28 30 28 40"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Support Coordination",
    description:
      "Expert coordinators helping you navigate and maximise your NDIS funding effectively.",
    bg: "linear-gradient(160deg, #1a472a 0%, #2d6a4f 45%, #52b788 90%, #d8f3dc 100%)",
    accent: "#40916c",
    pattern: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="300" cy="30" r="130" fill="#fff" />
        <circle cx="50" cy="250" r="85" fill="#fff" />
        {/* Network nodes */}
        <circle cx="200" cy="150" r="20" fill="#fff" opacity="0.2" />
        <circle cx="120" cy="100" r="12" fill="#fff" opacity="0.15" />
        <circle cx="280" cy="100" r="12" fill="#fff" opacity="0.15" />
        <circle cx="140" cy="200" r="10" fill="#fff" opacity="0.15" />
        <circle cx="260" cy="200" r="10" fill="#fff" opacity="0.15" />
        <line
          x1="200"
          y1="150"
          x2="120"
          y2="100"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="150"
          x2="280"
          y2="100"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="150"
          x2="140"
          y2="200"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="150"
          x2="260"
          y2="200"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.2"
        />
      </svg>
    ),
    illustrationEl: (
      <svg
        viewBox="0 0 80 80"
        width="70"
        height="70"
        fill="none"
        style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.22 }}
      >
        <circle cx="40" cy="40" r="14" stroke="#fff" strokeWidth="2.5" />
        <circle cx="16" cy="22" r="8" stroke="#fff" strokeWidth="2" />
        <circle cx="64" cy="22" r="8" stroke="#fff" strokeWidth="2" />
        <circle cx="16" cy="58" r="8" stroke="#fff" strokeWidth="2" />
        <circle cx="64" cy="58" r="8" stroke="#fff" strokeWidth="2" />
        <line x1="40" y1="40" x2="16" y2="22" stroke="#fff" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="64" y2="22" stroke="#fff" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="16" y2="58" stroke="#fff" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="64" y2="58" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Allied Health Services",
    description:
      "Physio, OT, speech therapy and more — delivered by credentialed allied health professionals.",
    bg: "linear-gradient(155deg, #2d6a4f 0%, #40916c 50%, #74c69d 100%)",
    accent: "#52b788",
    pattern: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="340" cy="280" r="150" fill="#fff" />
        <circle cx="40" cy="40" r="100" fill="#fff" />
        {/* Human figure stretching */}
        <circle cx="200" cy="80" r="18" fill="#fff" opacity="0.2" />
        <path
          d="M200 98 L200 170"
          stroke="#fff"
          strokeWidth="4"
          opacity="0.2"
        />
        <path
          d="M160 120 L240 120"
          stroke="#fff"
          strokeWidth="4"
          opacity="0.2"
          strokeLinecap="round"
        />
        <path
          d="M200 170 L175 220"
          stroke="#fff"
          strokeWidth="4"
          opacity="0.2"
          strokeLinecap="round"
        />
        <path
          d="M200 170 L225 220"
          stroke="#fff"
          strokeWidth="4"
          opacity="0.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    illustrationEl: (
      <svg
        viewBox="0 0 80 80"
        width="70"
        height="70"
        fill="none"
        style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.22 }}
      >
        <circle cx="40" cy="18" r="9" stroke="#fff" strokeWidth="2.5" />
        <line
          x1="40"
          y1="27"
          x2="40"
          y2="50"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="36"
          x2="58"
          y2="36"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="50"
          x2="28"
          y2="66"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="50"
          x2="52"
          y2="66"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14 52 Q18 44 26 46"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="14" cy="54" r="4" fill="#fff" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Care Navigation",
    description:
      "Helping you cut through complexity to find and connect with the right services.",
    bg: "linear-gradient(155deg, #1b4332 0%, #2d6a4f 55%, #52b788 100%)",
    accent: "#74c69d",
    pattern: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="360" cy="280" r="130" fill="#fff" />
        <circle cx="20" cy="30" r="90" fill="#fff" />
        {/* Map/compass */}
        <circle
          cx="200"
          cy="150"
          r="60"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          opacity="0.2"
        />
        <circle cx="200" cy="150" r="5" fill="#fff" opacity="0.3" />
        <path
          d="M200 100 L210 148 L200 145 L190 148 Z"
          fill="#fff"
          opacity="0.25"
        />
        <path
          d="M200 200 L190 152 L200 155 L210 152 Z"
          fill="#fff"
          opacity="0.15"
        />
        <path
          d="M150 150 L198 140 L195 150 L198 160 Z"
          fill="#fff"
          opacity="0.15"
        />
        <path
          d="M250 150 L202 140 L205 150 L202 160 Z"
          fill="#fff"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="90"
          x2="200"
          y2="110"
          stroke="#fff"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <line
          x1="200"
          y1="190"
          x2="200"
          y2="210"
          stroke="#fff"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <line
          x1="140"
          y1="150"
          x2="160"
          y2="150"
          stroke="#fff"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <line
          x1="240"
          y1="150"
          x2="260"
          y2="150"
          stroke="#fff"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    ),
    illustrationEl: (
      <svg
        viewBox="0 0 80 80"
        width="70"
        height="70"
        fill="none"
        style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.22 }}
      >
        <circle cx="40" cy="40" r="28" stroke="#fff" strokeWidth="2.5" />
        <circle cx="40" cy="40" r="4" fill="#fff" />
        <path d="M40 12 L44 38 L40 36 L36 38 Z" fill="#fff" />
        <line x1="40" y1="12" x2="40" y2="20" stroke="#fff" strokeWidth="1.5" />
        <line x1="40" y1="60" x2="40" y2="68" stroke="#fff" strokeWidth="1.5" />
        <line x1="12" y1="40" x2="20" y2="40" stroke="#fff" strokeWidth="1.5" />
        <line x1="60" y1="40" x2="68" y2="40" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Supported Independent Living",
    description:
      "Tailored SIL arrangements empowering you to live independently with the right daily support.",
    bg: "linear-gradient(155deg, #2d6a4f 0%, #40916c 40%, #74c69d 80%, #b7e4c7 100%)",
    accent: "#52b788",
    pattern: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="320" cy="260" r="140" fill="#fff" />
        <circle cx="60" cy="50" r="95" fill="#fff" />
        {/* Star/celebration */}
        <path
          d="M200 60 L210 90 L240 90 L218 108 L226 138 L200 120 L174 138 L182 108 L160 90 L190 90 Z"
          fill="#fff"
          opacity="0.18"
        />
        <circle cx="280" cy="170" r="14" fill="#fff" opacity="0.12" />
        <circle cx="130" cy="200" r="10" fill="#fff" opacity="0.12" />
        <path
          d="M280 50 L285 65 L300 65 L288 74 L292 90 L280 81 L268 90 L272 74 L260 65 L275 65 Z"
          fill="#fff"
          opacity="0.12"
        />
      </svg>
    ),
    illustrationEl: (
      <svg
        viewBox="0 0 80 80"
        width="70"
        height="70"
        fill="none"
        style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.22 }}
      >
        <path
          d="M40 10 L44 22 L58 22 L47 30 L51 43 L40 35 L29 43 L33 30 L22 22 L36 22 Z"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="40" cy="58" r="12" stroke="#fff" strokeWidth="2.5" />
        <path
          d="M35 58 Q40 63 45 58"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="35" cy="55" r="2" fill="#fff" />
        <circle cx="45" cy="55" r="2" fill="#fff" />
      </svg>
    ),
  },
];

export default function OurServices() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#f0f4f1",
        padding: "80px 24px 90px",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

        .svc-card {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          min-height: 280px;
          cursor: pointer;
          transition: transform 0.32s cubic-bezier(.22,1,.36,1), box-shadow 0.32s ease;
          border: 1.5px solid rgba(255,255,255,0.18);
        }
        .svc-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 24px 60px rgba(26,67,42,0.28);
        }
        .svc-card-inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px 26px 24px;
          background: linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, transparent 100%);
        }
        .svc-title {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 8px;
          line-height: 1.25;
          text-shadow: 0 1px 8px rgba(0,0,0,0.3);
        }
        .svc-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          margin-bottom: 18px;
          max-width: 280px;
          text-shadow: 0 1px 4px rgba(0,0,0,0.25);
        }
        .svc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255,255,255,0.35);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 9px 18px;
          border-radius: 50px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'Nunito Sans', sans-serif;
          width: fit-content;
        }
        .svc-btn:hover {
          background: rgba(255,255,255,0.30);
          border-color: rgba(255,255,255,0.6);
        }
        .svc-btn svg { transition: transform 0.2s; }
        .svc-btn:hover svg { transform: translateX(3px); }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1140px;
          margin: 0 auto 48px;
        }
        @media (max-width: 960px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .svc-grid { grid-template-columns: 1fr; gap: 14px; }
          .svc-card { min-height: 240px; }
        }

        .talk-btn {
          background: #1a3a2a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 15px 36px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background 0.2s, transform 0.15s;
          font-family: 'Nunito Sans', sans-serif;
        }
        .talk-btn:hover { background: #0d2a1a; transform: translateY(-2px); }
      `}</style>

      {/* Header */}
      <div
        className={"fade-up" + (visible ? " visible" : "")}
        style={{
          textAlign: "center",
          marginBottom: 52,
          maxWidth: 640,
          margin: "0 auto 52px",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#3a8a5a",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          What We Offer?
        </p>
        <h2
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: "#0f2a1c",
            lineHeight: 1.15,
            marginBottom: 16,
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            fontSize: 15.5,
            color: "#4a6a5a",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Discover a wide range of services across aged care, disability,
          nursing and recovery support. At Continuity Care we make care simple,
          compassionate and tailored to each person's needs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="svc-grid">
        {services.map((svc, i) => (
          <div
            key={svc.id}
            className={"fade-up svc-card" + (visible ? " visible" : "")}
            style={{
              background: svc.bg,
              transitionDelay: `${i * 0.08 + 0.05}s`,
            }}
            // onMouseEnter={() => setHovered(svc.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background pattern SVG */}
            {svc.pattern}

            {/* Illustration watermark */}
            {svc.illustrationEl}

            {/* Texture overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* Hover shine */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  hovered === svc.id
                    ? "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)"
                    : "transparent",
                transition: "background 0.3s",
                pointerEvents: "none",
              }}
            />

            {/* Content */}
            <div className="svc-card-inner">
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.description}</p>
              <button className="svc-btn">
                Learn More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className={"fade-up" + (visible ? " visible" : "")}
        style={{
          textAlign: "center",
          marginTop: 12,
          transitionDelay: "0.55s",
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: "#4a6a5a",
            marginBottom: 18,
            fontWeight: 500,
          }}
        >
          Not sure which service is right for you?
        </p>
        <button className="talk-btn">
          Talk to Our Care Team
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
