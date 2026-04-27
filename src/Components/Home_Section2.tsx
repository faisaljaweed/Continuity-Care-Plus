import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Share Your Needs",
    description:
      "Tell us about your situation, preferences, and the kind of support you're looking for so we can understand what matters most to you.",
    illustration: (
      <svg viewBox="0 0 100 84" fill="none" width="96" height="80">
        <rect
          x="18"
          y="36"
          width="38"
          height="30"
          rx="4"
          fill="#d4ead4"
          stroke="#8abc8a"
          strokeWidth="1.5"
        />
        <line
          x1="25"
          y1="46"
          x2="50"
          y2="46"
          stroke="#8abc8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="52"
          x2="44"
          y2="52"
          stroke="#8abc8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="58"
          x2="40"
          y2="58"
          stroke="#8abc8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="16" y="64" width="44" height="5" rx="2" fill="#b8d8b8" />
        <circle
          cx="76"
          cy="28"
          r="9"
          fill="#c8dfc8"
          stroke="#6a9e6a"
          strokeWidth="1.5"
        />
        <line
          x1="76"
          y1="37"
          x2="76"
          y2="56"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="76"
          y1="46"
          x2="66"
          y2="54"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="76"
          y1="46"
          x2="86"
          y2="54"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="76"
          y1="56"
          x2="70"
          y2="70"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="76"
          y1="56"
          x2="82"
          y2="70"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Matched",
    description:
      "Our team connects you with the most suitable carers and services based on your needs, ensuring the right fit from the start.",
    illustration: (
      <svg viewBox="0 0 100 84" fill="none" width="96" height="80">
        <circle
          cx="50"
          cy="40"
          r="9"
          fill="#c8dfc8"
          stroke="#6a9e6a"
          strokeWidth="1.5"
        />
        <circle cx="50" cy="40" r="4" fill="#8abc8a" />
        {[
          [24, 20],
          [76, 20],
          [16, 54],
          [84, 54],
          [34, 68],
          [66, 68],
        ].map(([x, y], i) => (
          <g key={i}>
            <line
              x1="50"
              y1="40"
              x2={x}
              y2={y}
              stroke="#a8cca8"
              strokeWidth="1.2"
              strokeDasharray="3,2"
            />
            <circle
              cx={x}
              cy={y}
              r="6"
              fill="#d4ead4"
              stroke="#8abc8a"
              strokeWidth="1.2"
            />
            <circle cx={x} cy={y} r="3" fill="#aacaaa" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    number: "03",
    title: "Plan Your Care",
    description:
      "We work closely with you to create a personalised care plan that aligns with your goals, lifestyle, and NDIS requirements.",
    illustration: (
      <svg viewBox="0 0 100 84" fill="none" width="96" height="80">
        <rect
          x="38"
          y="18"
          width="28"
          height="40"
          rx="3"
          fill="#d4ead4"
          stroke="#8abc8a"
          strokeWidth="1.5"
        />
        <line
          x1="43"
          y1="26"
          x2="61"
          y2="26"
          stroke="#8abc8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="43"
          y1="32"
          x2="61"
          y2="32"
          stroke="#8abc8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="43"
          y1="38"
          x2="54"
          y2="38"
          stroke="#8abc8a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polyline
          points="43,46 46,43 49,47 53,41 57,45"
          stroke="#3a7a3a"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="22"
          cy="24"
          r="8"
          fill="#c8dfc8"
          stroke="#6a9e6a"
          strokeWidth="1.5"
        />
        <line
          x1="22"
          y1="32"
          x2="22"
          y2="52"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="40"
          x2="14"
          y2="48"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="40"
          x2="32"
          y2="46"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="52"
          x2="17"
          y2="66"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="52"
          x2="27"
          y2="66"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="80"
          cy="28"
          r="7"
          fill="#c8dfc8"
          stroke="#6a9e6a"
          strokeWidth="1.5"
        />
        <line
          x1="80"
          y1="35"
          x2="80"
          y2="52"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="42"
          x2="72"
          y2="50"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="42"
          x2="88"
          y2="50"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="52"
          x2="75"
          y2="66"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="52"
          x2="85"
          y2="66"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Start Your Journey",
    description:
      "Begin receiving quality support with ongoing guidance from our team, ensuring comfort, consistency, and peace of mind.",
    illustration: (
      <svg viewBox="0 0 100 84" fill="none" width="96" height="80">
        <circle
          cx="30"
          cy="26"
          r="8"
          fill="#c8dfc8"
          stroke="#6a9e6a"
          strokeWidth="1.5"
        />
        <path
          d="M30 34 Q30 42 34 48"
          stroke="#6a9e6a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="40"
          x2="22"
          y2="48"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="40"
          x2="40"
          y2="46"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="48"
          cy="60"
          r="9"
          fill="none"
          stroke="#8abc8a"
          strokeWidth="2"
        />
        <circle
          cx="70"
          cy="60"
          r="9"
          fill="none"
          stroke="#8abc8a"
          strokeWidth="2"
        />
        <path
          d="M39 48 L56 43 L65 54"
          stroke="#6a9e6a"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="56"
          cy="39"
          r="5"
          fill="#aacaaa"
          stroke="#8abc8a"
          strokeWidth="1"
        />
        <line
          x1="54"
          y1="44"
          x2="48"
          y2="52"
          stroke="#6a9e6a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="76"
          cy="48"
          r="8"
          fill="#d4ead4"
          stroke="#8abc8a"
          strokeWidth="1.5"
        />
        <path
          d="M68 56 Q76 54 84 58"
          stroke="#8abc8a"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Achieve Your Quality of Life",
    description:
      "Enjoy a better quality of life with the right support. Stay independent, comfortable, and confident.",
    illustration: (
      <svg viewBox="0 0 100 84" fill="none" width="96" height="80">
        <circle
          cx="44"
          cy="28"
          r="9"
          fill="#c8dfc8"
          stroke="#6a9e6a"
          strokeWidth="1.5"
        />
        <path
          d="M40 31 Q44 35 48 31"
          stroke="#3a7a3a"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="37"
          x2="44"
          y2="56"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="45"
          x2="34"
          y2="53"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="45"
          x2="56"
          y2="51"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="56"
          x2="38"
          y2="72"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="56"
          x2="50"
          y2="72"
          stroke="#6a9e6a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M72 18 L74 12 L76 18 L82 20 L76 22 L74 28 L72 22 L66 20 Z"
          fill="#8abc8a"
        />
        <path
          d="M84 40 L85.5 36 L87 40 L91 41.5 L87 43 L85.5 47 L84 43 L80 41.5 Z"
          fill="#aacaaa"
        />
        <path
          d="M62 10 L63 7 L64 10 L67 11 L64 12 L63 15 L62 12 L59 11 Z"
          fill="#c8dfc8"
        />
        <circle
          cx="78"
          cy="30"
          r="3"
          fill="#d4ead4"
          stroke="#8abc8a"
          strokeWidth="1"
        />
      </svg>
    ),
  },
];

export default function PathToBetterCare() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(2);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');
        .ptbc-card {
          background: #edf7ed;
          border-radius: 16px;
          padding: 26px 18px 22px;
          text-align: center;
          cursor: pointer;
          border: 2px solid transparent;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
          position: relative;
        }
        .ptbc-card:hover, .ptbc-card.active {
          background: #dff0df;
          border-color: #8abc8a;
          box-shadow: 0 10px 32px rgba(58,122,90,0.14);
          transform: translateY(-8px);
        }
        .ptbc-connector {
          position: absolute;
          top: 44px;
          right: -18px;
          width: 36px;
          height: 2px;
          background: repeating-linear-gradient(90deg,#8abc8a 0,#8abc8a 5px,transparent 5px,transparent 10px);
          z-index: 2;
        }
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .ptbc-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1100px) {
          .ptbc-grid { grid-template-columns: repeat(3, 1fr); }
          .ptbc-connector { display: none; }
        }
        @media (max-width: 680px) {
          .ptbc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 400px) {
          .ptbc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div
        className={"fade-up" + (visible ? " visible" : "")}
        style={{
          textAlign: "center",
          marginBottom: 52,
          maxWidth: 680,
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
          Why Choose Us?
        </p>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#0f2a1c",
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          Your Path to Better Care
        </h2>
        <p style={{ fontSize: 16, color: "#5a7a6a", lineHeight: 1.65 }}>
          Start Aged care journey with us Self Managed and Continuity Care
          Managed
        </p>
      </div>

      <div className="ptbc-grid">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={
              "fade-up ptbc-card" +
              (activeStep === i ? " active" : "") +
              (visible ? " visible" : "")
            }
            style={{ transitionDelay: `${i * 0.1 + 0.1}s` }}
            onClick={() => setActiveStep(i)}
          >
            {i < steps.length - 1 && <div className="ptbc-connector" />}
            <div
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: "#1a3a2a",
                opacity: 0.8,
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {step.number}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: "#1a3a2a",
                margin: "8px 0 14px",
                lineHeight: 1.3,
              }}
            >
              {step.title}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              {step.illustration}
            </div>
            <p style={{ fontSize: 12.5, color: "#4a6a5a", lineHeight: 1.65 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
