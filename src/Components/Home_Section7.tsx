import { useEffect, useRef, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  illustration: React.ReactNode;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Understanding NDIS: A Simple Guide to Getting Started",
    description:
      "Learn how the NDIS works, what support you can access, and how to begin your care journey with confidence.",
    date: "Jan 12, 2026",
    category: "NDIS Guide",
    illustration: (
      <svg
        viewBox="0 0 460 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <rect width="460" height="260" fill="url(#art1bg)" />
        <defs>
          <linearGradient
            id="art1bg"
            x1="0"
            y1="0"
            x2="460"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#e8f5e9" />
            <stop offset="100%" stopColor="#c8e6c9" />
          </linearGradient>
        </defs>
        {/* Sofa */}
        <rect x="60" y="170" width="340" height="18" rx="9" fill="#bcccb4" />
        <rect x="80" y="140" width="300" height="40" rx="12" fill="#d4e8d0" />
        <rect x="72" y="130" width="20" height="50" rx="6" fill="#bcccb4" />
        <rect x="368" y="130" width="20" height="50" rx="6" fill="#bcccb4" />
        {/* Person 1 - Doctor (dark hair, white coat) */}
        <circle cx="175" cy="95" r="26" fill="#f5deb3" />
        <ellipse cx="175" cy="72" rx="23" ry="14" fill="#3a1a00" />
        <path
          d="M152 82 Q148 105 155 118"
          stroke="#3a1a00"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M198 82 Q202 105 195 118"
          stroke="#3a1a00"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="167" cy="97" r="3" fill="#5d3a1a" />
        <circle cx="183" cy="97" r="3" fill="#5d3a1a" />
        <path
          d="M167 108 Q175 114 183 108"
          stroke="#5d3a1a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* White coat body */}
        <rect x="148" y="120" width="54" height="60" rx="12" fill="#f0f0f0" />
        <rect x="158" y="120" width="34" height="20" rx="0" fill="#e0e0e0" />
        {/* Stethoscope */}
        <path
          d="M163 135 Q157 125 155 130 Q150 136 158 143"
          stroke="#888"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="158"
          cy="144"
          r="4"
          fill="none"
          stroke="#888"
          strokeWidth="1.8"
        />
        {/* Arm holding paper */}
        <path
          d="M148 155 Q125 165 118 170"
          stroke="#f0f0f0"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />
        {/* Paper/document */}
        <rect
          x="88"
          y="150"
          width="50"
          height="64"
          rx="4"
          fill="#fff"
          stroke="#c0d4bc"
          strokeWidth="1.5"
        />
        <line
          x1="95"
          y1="163"
          x2="131"
          y2="163"
          stroke="#b0c8b0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="95"
          y1="172"
          x2="131"
          y2="172"
          stroke="#b0c8b0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="95"
          y1="181"
          x2="118"
          y2="181"
          stroke="#b0c8b0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="95"
          y1="190"
          x2="131"
          y2="190"
          stroke="#b0c8b0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="95"
          y1="199"
          x2="124"
          y2="199"
          stroke="#b0c8b0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* NDIS logo hint */}
        <rect
          x="96"
          y="153"
          width="44"
          height="8"
          rx="2"
          fill="#2d6a4f"
          opacity="0.5"
        />
        <text
          x="118"
          y="160"
          textAnchor="middle"
          fontSize="5"
          fontWeight="700"
          fill="#fff"
          fontFamily="sans-serif"
        >
          NDIS
        </text>
        {/* Person 2 - Elderly patient */}
        <circle cx="285" cy="100" r="24" fill="#f5deb3" />
        <ellipse cx="285" cy="82" rx="21" ry="12" fill="#d0d0d0" />
        <path
          d="M264 90 Q260 110 266 122"
          stroke="#c0c0c0"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M306 90 Q310 110 304 122"
          stroke="#c0c0c0"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="277" cy="102" r="2.8" fill="#8b6347" />
        <circle cx="293" cy="102" r="2.8" fill="#8b6347" />
        <path
          d="M277 113 Q285 119 293 113"
          stroke="#8b6347"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Patient body */}
        <rect x="260" y="123" width="50" height="57" rx="12" fill="#c5dde0" />
        <rect x="268" y="123" width="34" height="18" rx="0" fill="#b0cdd0" />
        {/* Arm on armrest */}
        <path
          d="M310 145 Q328 148 340 145"
          stroke="#c5dde0"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />
        {/* Plant decor */}
        <rect x="390" y="140" width="14" height="40" rx="3" fill="#c8a870" />
        <ellipse
          cx="397"
          cy="118"
          rx="22"
          ry="28"
          fill="#4a9a5a"
          opacity="0.7"
        />
        <ellipse
          cx="380"
          cy="128"
          rx="16"
          ry="20"
          fill="#3a8a4a"
          opacity="0.6"
        />
        <ellipse
          cx="414"
          cy="124"
          rx="14"
          ry="18"
          fill="#5aaa6a"
          opacity="0.6"
        />
        {/* Window */}
        <rect
          x="30"
          y="30"
          width="70"
          height="90"
          rx="4"
          fill="rgba(255,255,255,0.5)"
          stroke="#c0d8c0"
          strokeWidth="1.5"
        />
        <line
          x1="65"
          y1="30"
          x2="65"
          y2="120"
          stroke="#c0d8c0"
          strokeWidth="1"
        />
        <line
          x1="30"
          y1="75"
          x2="100"
          y2="75"
          stroke="#c0d8c0"
          strokeWidth="1"
        />
        <rect
          x="32"
          y="32"
          width="31"
          height="41"
          fill="rgba(180,220,255,0.3)"
        />
        <rect
          x="66"
          y="32"
          width="32"
          height="41"
          fill="rgba(180,220,255,0.3)"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Choosing the Right Care Provider for Your Needs",
    description:
      "Discover key factors to consider when selecting a care provider and how to find the right fit for you or your loved one.",
    date: "Feb 05, 2026",
    category: "Care Tips",
    illustration: (
      <svg
        viewBox="0 0 460 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <rect width="460" height="260" fill="url(#art2bg)" />
        <defs>
          <linearGradient
            id="art2bg"
            x1="0"
            y1="0"
            x2="460"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#e0f2f1" />
            <stop offset="100%" stopColor="#b2dfdb" />
          </linearGradient>
        </defs>
        {/* Warm interior background wall */}
        <rect
          x="0"
          y="0"
          width="460"
          height="180"
          fill="rgba(255,245,235,0.4)"
        />
        <rect
          x="0"
          y="180"
          width="460"
          height="80"
          fill="rgba(200,230,200,0.3)"
        />
        {/* Nurse - scrubs, smiling, arm around elder */}
        {/* Elder person */}
        <circle cx="220" cy="100" r="30" fill="#f5c8a0" />
        <ellipse cx="220" cy="76" rx="26" ry="15" fill="#c8c8c8" />
        <path
          d="M194 86 Q190 112 196 128"
          stroke="#c0c0c0"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M246 86 Q250 112 244 128"
          stroke="#c0c0c0"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="210" cy="103" r="3.5" fill="#8b6347" />
        <circle cx="230" cy="103" r="3.5" fill="#8b6347" />
        <path
          d="M210 116 Q220 124 230 116"
          stroke="#8b6347"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M206 99 Q209 96 212 99"
          stroke="#c8a882"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M228 99 Q231 96 234 99"
          stroke="#c8a882"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Elder body */}
        <rect x="190" y="128" width="60" height="80" rx="14" fill="#87CEEB" />
        <rect x="198" y="128" width="44" height="22" fill="#6ab4d8" />
        {/* Cheek blush elder */}
        <circle cx="205" cy="108" r="8" fill="#ffb0a0" opacity="0.3" />
        <circle cx="235" cy="108" r="8" fill="#ffb0a0" opacity="0.3" />
        {/* Nurse */}
        <circle cx="315" cy="88" r="28" fill="#f5d0b0" />
        <ellipse cx="315" cy="66" rx="24" ry="16" fill="#8B4513" />
        <path
          d="M291 76 Q287 100 293 116"
          stroke="#7a3c10"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M339 76 Q343 100 337 116"
          stroke="#7a3c10"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="305" cy="91" r="3.5" fill="#5d3a1a" />
        <circle cx="325" cy="91" r="3.5" fill="#5d3a1a" />
        <path
          d="M305 104 Q315 112 325 104"
          stroke="#5d3a1a"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="298" cy="98" r="7" fill="#ffb6b6" opacity="0.28" />
        <circle cx="332" cy="98" r="7" fill="#ffb6b6" opacity="0.28" />
        {/* Nurse body - teal scrubs */}
        <rect x="286" y="115" width="58" height="88" rx="14" fill="#26a69a" />
        <rect x="294" y="115" width="42" height="22" fill="#1e8a80" />
        {/* Nurse arm around elder */}
        <path
          d="M286 140 Q255 145 248 138"
          stroke="#26a69a"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        {/* Nurse other arm */}
        <path
          d="M344 140 Q360 150 355 170"
          stroke="#26a69a"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        {/* Hearts floating */}
        <path
          d="M168 60 C168 56 162 52 158 56 C154 52 148 56 148 60 C148 66 158 74 158 74 C158 74 168 66 168 60Z"
          fill="#ff8a80"
          opacity="0.6"
        />
        <path
          d="M386 44 C386 41 381 38 378 41 C375 38 370 41 370 44 C370 49 378 55 378 55 C378 55 386 49 386 44Z"
          fill="#ff8a80"
          opacity="0.5"
        />
        <path
          d="M420 80 C420 78 417 75 415 78 C413 75 410 78 410 80 C410 83 415 87 415 87 C415 87 420 83 420 80Z"
          fill="#ff8a80"
          opacity="0.4"
        />
        {/* Window light */}
        <rect
          x="60"
          y="20"
          width="90"
          height="110"
          rx="5"
          fill="rgba(255,255,255,0.45)"
          stroke="#c0dcd8"
          strokeWidth="1.5"
        />
        <line
          x1="105"
          y1="20"
          x2="105"
          y2="130"
          stroke="#c0dcd8"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="70"
          x2="150"
          y2="70"
          stroke="#c0dcd8"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "In-Home Care vs Supported Living: What's Right for You?",
    description:
      "Compare different care options to understand which support model best suits your lifestyle and needs.",
    date: "Mar 18, 2026",
    category: "Living Options",
    illustration: (
      <svg
        viewBox="0 0 460 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <rect width="460" height="260" fill="url(#art3bg)" />
        <defs>
          <linearGradient
            id="art3bg"
            x1="0"
            y1="0"
            x2="460"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#fafafa" />
            <stop offset="100%" stopColor="#f0f4e8" />
          </linearGradient>
        </defs>
        {/* Room background */}
        <rect
          x="0"
          y="0"
          width="460"
          height="190"
          fill="rgba(240,248,240,0.5)"
        />
        <rect
          x="0"
          y="190"
          width="460"
          height="70"
          fill="rgba(210,230,210,0.4)"
        />
        {/* Table */}
        <rect x="60" y="175" width="340" height="10" rx="4" fill="#c8a870" />
        <rect x="80" y="185" width="14" height="40" rx="3" fill="#b89060" />
        <rect x="366" y="185" width="14" height="40" rx="3" fill="#b89060" />
        {/* Elder woman (protagonist) - sitting, holding book, smiling */}
        <circle cx="230" cy="105" r="32" fill="#f0c8a0" />
        <ellipse cx="230" cy="79" rx="28" ry="16" fill="#e0e0e0" />
        <path
          d="M202 89 Q197 116 204 132"
          stroke="#d0d0d0"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M258 89 Q263 116 256 132"
          stroke="#d0d0d0"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="218" cy="108" r="3.8" fill="#8b6347" />
        <circle cx="242" cy="108" r="3.8" fill="#8b6347" />
        <path
          d="M218 122 Q230 130 242 122"
          stroke="#8b6347"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Smile lines */}
        <path
          d="M212 105 Q215 102 218 105"
          stroke="#c0a080"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M242 105 Q245 102 248 105"
          stroke="#c0a080"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Blush */}
        <circle cx="212" cy="114" r="9" fill="#ffb0a0" opacity="0.22" />
        <circle cx="248" cy="114" r="9" fill="#ffb0a0" opacity="0.22" />
        {/* Body - light blue top */}
        <rect x="196" y="136" width="68" height="72" rx="14" fill="#9ec8e8" />
        <rect x="206" y="136" width="48" height="22" fill="#7eb0d4" />
        {/* Book in hands */}
        <rect x="188" y="158" width="54" height="38" rx="5" fill="#4a7a5a" />
        <rect x="214" y="158" width="2" height="38" fill="#3a6a4a" />
        <line
          x1="194"
          y1="168"
          x2="212"
          y2="168"
          stroke="#6aaa7a"
          strokeWidth="1.5"
        />
        <line
          x1="194"
          y1="175"
          x2="212"
          y2="175"
          stroke="#6aaa7a"
          strokeWidth="1.5"
        />
        <line
          x1="194"
          y1="182"
          x2="212"
          y2="182"
          stroke="#6aaa7a"
          strokeWidth="1.5"
        />
        <line
          x1="218"
          y1="168"
          x2="236"
          y2="168"
          stroke="#6aaa7a"
          strokeWidth="1.5"
        />
        <line
          x1="218"
          y1="175"
          x2="236"
          y2="175"
          stroke="#6aaa7a"
          strokeWidth="1.5"
        />
        {/* Background figures - people in background */}
        <circle cx="120" cy="130" r="18" fill="#d4a878" opacity="0.7" />
        <ellipse
          cx="120"
          cy="116"
          rx="15"
          ry="10"
          fill="#8b4513"
          opacity="0.5"
        />
        <rect
          x="102"
          y="147"
          width="36"
          height="50"
          rx="8"
          fill="#b0c8d0"
          opacity="0.6"
        />
        <circle cx="345" cy="128" r="16" fill="#e8c090" opacity="0.6" />
        <ellipse
          cx="345"
          cy="115"
          rx="14"
          ry="9"
          fill="#c8c8c8"
          opacity="0.5"
        />
        <rect
          x="328"
          y="143"
          width="34"
          height="46"
          rx="8"
          fill="#c0b0d8"
          opacity="0.5"
        />
        {/* Plant pot left */}
        <rect x="30" y="155" width="22" height="30" rx="3" fill="#c8a870" />
        <ellipse
          cx="41"
          cy="138"
          rx="22"
          ry="26"
          fill="#4a9a5a"
          opacity="0.65"
        />
        <ellipse
          cx="28"
          cy="148"
          rx="15"
          ry="18"
          fill="#3a8a4a"
          opacity="0.55"
        />
        {/* Window right */}
        <rect
          x="390"
          y="30"
          width="60"
          height="100"
          rx="4"
          fill="rgba(255,255,255,0.45)"
          stroke="#d0dcc8"
          strokeWidth="1.5"
        />
        <line
          x1="420"
          y1="30"
          x2="420"
          y2="130"
          stroke="#d0dcc8"
          strokeWidth="1"
        />
        <line
          x1="390"
          y1="80"
          x2="450"
          y2="80"
          stroke="#d0dcc8"
          strokeWidth="1"
        />
      </svg>
    ),
  },
];

const CalendarIcon: React.FC = () => (
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
    <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function InsightsResources() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
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
        padding: "80px 24px 90px",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .ir-fade {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .ir-fade.visible { opacity: 1; transform: translateY(0); }

        .ir-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ir-card {
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e8f0e8;
          transition: transform 0.28s cubic-bezier(.22,1,.36,1), box-shadow 0.28s ease;
          cursor: pointer;
        }
        .ir-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(26,90,50,0.12);
        }

        .ir-img-wrap {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          position: relative;
        }
        .ir-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(0,40,20,0.06) 100%);
          pointer-events: none;
        }
        .ir-img-wrap svg {
          transition: transform 0.5s ease;
        }
        .ir-card:hover .ir-img-wrap svg {
          transform: scale(1.04);
        }

        .ir-body { padding: 22px 22px 20px; }

        .ir-category {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          color: #3a8a5a;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 10px;
          background: #edf7ed;
          padding: 3px 10px;
          border-radius: 50px;
        }

        .ir-title {
          font-size: 17px;
          font-weight: 800;
          color: #0f2a1c;
          line-height: 1.35;
          margin-bottom: 12px;
        }

        .ir-desc {
          font-size: 13.5px;
          color: #5a7a6a;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .ir-divider { height: 1px; background: #e8f0e8; margin-bottom: 14px; }

        .ir-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ir-date {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          font-weight: 700;
          color: #4a6a5a;
        }

        .ir-read-more {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12.5px;
          font-weight: 800;
          color: #1a5c30;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: 'Nunito Sans', sans-serif;
          transition: gap 0.2s;
        }
        .ir-card:hover .ir-read-more { gap: 9px; }

        @media (max-width: 900px) { .ir-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .ir-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Header */}
      <div
        className={`ir-fade${visible ? " visible" : ""}`}
        style={{
          textAlign: "center",
          marginBottom: 52,
          maxWidth: 600,
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
          News &amp; Articles
        </p>
        <h2
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: "#0f2a1c",
            lineHeight: 1.15,
            marginBottom: 14,
          }}
        >
          Insights &amp; Resources
        </h2>
        <p style={{ fontSize: 15.5, color: "#5a7a6a", lineHeight: 1.65 }}>
          Explore helpful articles, tips, and guidance to support your care
          journey.
        </p>
      </div>

      {/* Cards */}
      <div className="ir-grid">
        {articles.map((article, i) => (
          <div
            key={article.id}
            className={`ir-fade ir-card${visible ? " visible" : ""}`}
            style={{ transitionDelay: `${i * 0.1 + 0.05}s` }}
            onMouseEnter={() => setHovered(article.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div className="ir-img-wrap">{article.illustration}</div>

            {/* Body */}
            <div className="ir-body">
              <span className="ir-category">{article.category}</span>
              <h3 className="ir-title">{article.title}</h3>
              <p className="ir-desc">{article.description}</p>
              <div className="ir-divider" />
              <div className="ir-meta">
                <div className="ir-date">
                  <span style={{ color: "#3a8a5a" }}>
                    <CalendarIcon />
                  </span>
                  {article.date}
                </div>
                <button className="ir-read-more">
                  Read more
                  <svg
                    width="13"
                    height="13"
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
          </div>
        ))}
      </div>

      {/* View all button */}
      <div
        className={`ir-fade${visible ? " visible" : ""}`}
        style={{ textAlign: "center", marginTop: 44, transitionDelay: "0.4s" }}
      >
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "transparent",
            border: "2px solid #1a3a2a",
            color: "#1a3a2a",
            borderRadius: 50,
            padding: "13px 30px",
            fontSize: 14.5,
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "'Nunito Sans', sans-serif",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#1a3a2a";
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "#1a3a2a";
          }}
        >
          View All Articles
          <svg
            width="15"
            height="15"
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
    </section>
  );
}
