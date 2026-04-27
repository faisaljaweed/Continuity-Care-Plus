import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: 1,
    title: "Tell Us What You Need",
    description:
      "Share a little about yourself — your situation, goals, and what kind of support you're looking for. No forms, no jargon.",
    cta: "Personalise Matching",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Choose Your Support",
    description:
      "Browse through our tailored service options and select the type of care that best matches your lifestyle and needs.",
    cta: "Explore Services",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Share Your Details",
    description:
      "Provide a few key details so we can create a care plan that's truly personalised — at your own pace, no pressure.",
    cta: "Get Started",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Get Matched & Start Care",
    description:
      "We connect you with the right support team and begin your care journey with confidence, clarity, and continuity.",
    cta: "Begin Your Journey",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function FindRightCare() {
  const [activeStep, setActiveStep] = useState(1);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  //   const toggle = (id) => setActiveStep((prev) => (prev === id ? null : id));

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#fff",
        padding: "80px 24px 90px",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .frc-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .frc-fade.visible { opacity: 1; transform: translateY(0); }

        .frc-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .frc-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4/3;
          position: relative;
          background: linear-gradient(135deg, #d4ead4 0%, #a8cca8 50%, #7aaa8a 100%);
          flex-shrink: 0;
        }

        .frc-img-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .frc-accordion-item {
          border-bottom: 1px solid #e0ece4;
          transition: background 0.25s;
        }
        .frc-accordion-item:first-child { border-top: 1px solid #e0ece4; }

        .frc-accordion-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px 18px 0;
          cursor: pointer;
          user-select: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: 'Nunito Sans', sans-serif;
          transition: padding 0.25s;
        }

        .frc-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s, color 0.25s;
          background: #edf7ed;
          color: #3a7a5a;
        }
        .frc-icon-wrap.active {
          background: #3a7a5a;
          color: #fff;
        }

        .frc-step-title {
          font-size: 15.5px;
          font-weight: 800;
          color: #0f2a1c;
          flex: 1;
          line-height: 1.3;
        }

        .frc-chevron {
          color: #8aaa9a;
          transition: transform 0.3s ease, color 0.2s;
          flex-shrink: 0;
        }
        .frc-chevron.open { transform: rotate(180deg); color: #3a7a5a; }

        .frc-accordion-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1), padding 0.3s;
          padding: 0 0 0 54px;
        }
        .frc-accordion-body.open {
          max-height: 220px;
          padding: 0 0 20px 54px;
        }

        .frc-active-card {
          background: #edf7ed;
          border-radius: 14px;
          padding: 18px 20px;
        }

        .frc-desc {
          font-size: 14px;
          color: #4a6a5a;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .frc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1.5px solid #c8dfc8;
          border-radius: 50px;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 700;
          color: #1a3a2a;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          font-family: 'Nunito Sans', sans-serif;
        }
        .frc-cta-btn:hover {
          background: #d4ead4;
          border-color: #8abc8a;
          transform: translateY(-1px);
        }

        .frc-main-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1a3a2a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 13px 30px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          font-family: 'Nunito Sans', sans-serif;
          margin-top: 28px;
        }
        .frc-main-btn:hover { background: #0d2a1a; transform: translateY(-2px); }

        @media (max-width: 860px) {
          .frc-layout { grid-template-columns: 1fr; gap: 36px; }
          .frc-img-wrap { aspect-ratio: 16/9; }
        }
        @media (max-width: 480px) {
          .frc-step-title { font-size: 14px; }
          .frc-accordion-body.open { padding-left: 20px; }
        }
      `}</style>

      {/* Section Header */}
      <div
        className={"frc-fade" + (visible ? " visible" : "")}
        style={{
          textAlign: "center",
          marginBottom: 52,
          maxWidth: 620,
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
          How it Work?
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
          Find the Right Care for You
        </h2>
        <p style={{ fontSize: 15.5, color: "#4a6a5a", lineHeight: 1.65 }}>
          Start Aged care journey with us Self Managed and Continuity Care
          Managed.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="frc-layout">
        {/* LEFT — image */}
        <div
          className={"frc-fade frc-img-wrap" + (visible ? " visible" : "")}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="frc-img-placeholder">
            <svg
              viewBox="0 0 460 345"
              fill="none"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background wash */}
              <rect width="460" height="345" fill="url(#imgGrad)" />
              <defs>
                <linearGradient
                  id="imgGrad"
                  x1="0"
                  y1="0"
                  x2="460"
                  y2="345"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#c8e6c9" />
                  <stop offset="50%" stopColor="#a5d6a7" />
                  <stop offset="100%" stopColor="#81c784" />
                </linearGradient>
              </defs>

              {/* Nurse — right, taller */}
              <circle
                cx="300"
                cy="95"
                r="36"
                fill="#e8f5e9"
                stroke="#4caf50"
                strokeWidth="2"
              />
              <ellipse cx="300" cy="105" rx="22" ry="26" fill="#e0f2f1" />
              {/* Nurse body */}
              <rect
                x="258"
                y="168"
                width="84"
                height="120"
                rx="20"
                fill="#29b6f6"
              />
              <rect
                x="270"
                y="168"
                width="60"
                height="30"
                rx="0"
                fill="#0288d1"
              />
              {/* Nurse arms */}
              <path
                d="M258 200 Q230 230 240 265"
                stroke="#29b6f6"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M342 200 Q360 230 350 260"
                stroke="#29b6f6"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
              {/* Nurse hair */}
              <ellipse cx="300" cy="72" rx="32" ry="20" fill="#4a2800" />
              <path
                d="M268 80 Q265 110 270 130"
                stroke="#4a2800"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M332 80 Q335 110 330 130"
                stroke="#4a2800"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Nurse face */}
              <circle cx="290" cy="97" r="4" fill="#4a2800" />
              <circle cx="310" cy="97" r="4" fill="#4a2800" />
              <path
                d="M290 112 Q300 120 310 112"
                stroke="#4a2800"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Elder — left, shorter */}
              <circle
                cx="175"
                cy="115"
                r="30"
                fill="#ffccbc"
                stroke="#ff8a65"
                strokeWidth="1.5"
              />
              {/* Elder body */}
              <rect
                x="140"
                y="178"
                width="70"
                height="110"
                rx="16"
                fill="#8d6e63"
              />
              <rect
                x="148"
                y="178"
                width="54"
                height="24"
                rx="0"
                fill="#795548"
              />
              {/* Elder arms */}
              <path
                d="M140 205 Q115 235 240 265"
                stroke="#8d6e63"
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M210 205 Q230 230 240 265"
                stroke="#8d6e63"
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
              />
              {/* Elder hair */}
              <ellipse cx="175" cy="96" rx="28" ry="16" fill="#e0e0e0" />
              {/* Elder face */}
              <circle cx="167" cy="117" r="3.5" fill="#795548" />
              <circle cx="183" cy="117" r="3.5" fill="#795548" />
              <path
                d="M167 130 Q175 137 183 130"
                stroke="#795548"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Wrinkles */}
              <path
                d="M160 113 Q162 110 165 113"
                stroke="#bf8060"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M185 113 Q187 110 190 113"
                stroke="#bf8060"
                strokeWidth="1.2"
                fill="none"
              />

              {/* Connecting hands gesture */}
              <ellipse
                cx="242"
                cy="264"
                rx="22"
                ry="12"
                fill="#ffccbc"
                opacity="0.9"
              />
              <ellipse
                cx="258"
                cy="260"
                rx="18"
                ry="10"
                fill="#e8f5e9"
                opacity="0.8"
              />

              {/* Background room elements */}
              <rect
                x="30"
                y="20"
                width="80"
                height="55"
                rx="4"
                fill="rgba(255,255,255,0.2)"
              />
              <rect
                x="350"
                y="30"
                width="90"
                height="65"
                rx="4"
                fill="rgba(255,255,255,0.15)"
              />
              <rect
                x="0"
                y="280"
                width="460"
                height="65"
                fill="rgba(255,255,255,0.12)"
              />

              {/* Warm light overlay top-right */}
              <ellipse
                cx="400"
                cy="50"
                rx="120"
                ry="90"
                fill="rgba(255,255,200,0.18)"
              />

              {/* Soft vignette */}
              <rect width="460" height="345" fill="url(#vig)" />
              <defs>
                <radialGradient
                  id="vig"
                  cx="50%"
                  cy="50%"
                  r="70%"
                  gradientUnits="userSpaceOnUse"
                  fx="230"
                  fy="172"
                >
                  <stop offset="50%" stopColor="transparent" />
                  <stop offset="100%" stopColor="rgba(0,60,20,0.22)" />
                </radialGradient>
              </defs>

              {/* Subtle caption label */}
              <rect
                x="16"
                y="300"
                width="180"
                height="30"
                rx="15"
                fill="rgba(255,255,255,0.25)"
              />
              <text
                x="106"
                y="320"
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="#1a3a2a"
                fontFamily="Nunito Sans, sans-serif"
              >
                Compassionate In-Home Care
              </text>
            </svg>
          </div>
        </div>

        {/* RIGHT — accordion */}
        <div
          className={"frc-fade" + (visible ? " visible" : "")}
          style={{ transitionDelay: "0.18s" }}
        >
          <div>
            {steps.map((step) => {
              const isOpen = activeStep === step.id;
              return (
                <div key={step.id} className="frc-accordion-item">
                  <button
                    className="frc-accordion-header"
                    // onClick={() => toggle(step.id)}
                    aria-expanded={isOpen}
                  >
                    <span className={`frc-icon-wrap${isOpen ? " active" : ""}`}>
                      {step.icon}
                    </span>
                    <span className="frc-step-title">{step.title}</span>
                    <svg
                      className={`frc-chevron${isOpen ? " open" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div className={`frc-accordion-body${isOpen ? " open" : ""}`}>
                    <div className="frc-active-card">
                      <p className="frc-desc">{step.description}</p>
                      <button className="frc-cta-btn">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        {step.cta}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="frc-main-btn">
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
        </div>
      </div>
    </section>
  );
}
