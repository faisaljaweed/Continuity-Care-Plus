import { useState, useEffect, useRef } from "react";

export default function ReadyToStart() {
  const [visible, setVisible] = useState(false);
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
        background: "#f0f4f1",
        padding: "60px 24px 72px",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .rts-fade {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .rts-fade.visible { opacity: 1; transform: translateY(0); }

        .rts-banner {
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 26px;
          background: linear-gradient(110deg, #0a3d1f 0%, #125c30 35%, #1a7a42 60%, #22a05a 85%, #2dcc70 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          min-height: 300px;
          padding: 52px 60px 52px 56px;
        }

        .rts-glow-top {
          position: absolute;
          top: -60px;
          right: 30%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(100,220,140,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .rts-glow-bot {
          position: absolute;
          bottom: -80px;
          left: 20%;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(60,180,100,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .rts-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .rts-content {
          position: relative;
          z-index: 2;
          max-width: 480px;
          padding-bottom: 8px;
        }

        .rts-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 50px;
          padding: 5px 14px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.05em;
          margin-bottom: 18px;
        }

        .rts-heading {
          font-size: 36px;
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 14px;
          text-shadow: 0 2px 12px rgba(0,0,0,0.18);
        }

        .rts-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.82);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 380px;
        }

        .rts-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .rts-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #fff;
          color: #0a3d1f;
          border: none;
          border-radius: 50px;
          padding: 13px 24px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
          font-family: 'Nunito Sans', sans-serif;
          white-space: nowrap;
          box-shadow: 0 4px 18px rgba(0,0,0,0.15);
        }
        .rts-btn-primary:hover {
          background: #f0fff4;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.2);
        }
        .rts-btn-primary svg { transition: transform 0.2s; }
        .rts-btn-primary:hover svg { transform: translateX(3px); }

        .rts-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          color: #fff;
          border: 1.8px solid rgba(255,255,255,0.45);
          border-radius: 50px;
          padding: 12px 22px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.18s;
          font-family: 'Nunito Sans', sans-serif;
          white-space: nowrap;
        }
        .rts-btn-outline:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
        }
        .rts-btn-outline svg { transition: transform 0.2s; }
        .rts-btn-outline:hover svg { transform: translateX(2px); }

        .rts-illustration {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          width: 380px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          align-self: stretch;
        }

        .rts-illustration svg {
          display: block;
          height: 310px;
          width: auto;
        }

        @media (max-width: 900px) {
          .rts-banner { padding: 44px 36px 44px 40px; min-height: auto; flex-direction: column; align-items: flex-start; }
          .rts-illustration { width: 100%; justify-content: center; margin-top: 28px; }
          .rts-illustration svg { height: 220px; }
          .rts-heading { font-size: 30px; }
        }
        @media (max-width: 560px) {
          .rts-banner { padding: 36px 24px 36px 28px; border-radius: 18px; }
          .rts-heading { font-size: 26px; }
          .rts-desc { font-size: 14px; }
          .rts-btns { gap: 10px; }
          .rts-btn-primary, .rts-btn-outline { font-size: 13px; padding: 11px 18px; }
        }
      `}</style>

      <div className={"rts-fade rts-banner" + (visible ? " visible" : "")}>
        {/* Decorative glow blobs */}
        <div className="rts-glow-top" />
        <div className="rts-glow-bot" />

        {/* Subtle dot pattern */}
        <div className="rts-dots">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 900 300"
            preserveAspectRatio="xMidYMid slice"
          >
            {Array.from({ length: 12 }).map((_, row) =>
              Array.from({ length: 20 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 50 + 20}
                  cy={row * 30 + 10}
                  r="1.5"
                  fill="rgba(255,255,255,0.09)"
                />
              )),
            )}
          </svg>
        </div>

        {/* Left Content */}
        <div className="rts-content">
          <div className="rts-tag">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" fill="rgba(255,255,255,0.7)" />
              <circle cx="5" cy="5" r="2" fill="#fff" />
            </svg>
            Now Accepting New Clients
          </div>

          <h2 className="rts-heading">Ready to get started?</h2>

          <p className="rts-desc">
            Join thousands of Australians who've found the right care through
            Continuity Care. Your journey starts with one simple step.
          </p>

          <div className="rts-btns">
            <button className="rts-btn-primary">
              Start My Care Journey
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

            <button className="rts-btn-outline">
              Explore My Options
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button className="rts-btn-outline">
              Talk to Our Team
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
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="rts-illustration">
          <svg
            viewBox="0 0 340 310"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* === WHEELCHAIR === */}
            {/* Rear large wheel */}
            <circle
              cx="88"
              cy="242"
              r="52"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="6"
            />
            <circle
              cx="88"
              cy="242"
              r="42"
              fill="none"
              stroke="#333"
              strokeWidth="2"
            />
            <circle cx="88" cy="242" r="8" fill="#555" />
            {[0, 30, 60, 90, 120, 150].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={88}
                  y1={242}
                  x2={88 + 42 * Math.cos(rad)}
                  y2={242 + 42 * Math.sin(rad)}
                  stroke="#555"
                  strokeWidth="1.8"
                />
              );
            })}
            {/* Front small wheel */}
            <circle
              cx="198"
              cy="268"
              r="20"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="5"
            />
            <circle cx="198" cy="268" r="5" fill="#555" />
            {/* Seat frame */}
            <path
              d="M100 220 L195 210"
              stroke="#555"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Back frame */}
            <path
              d="M100 220 L118 138"
              stroke="#555"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Armrest */}
            <path
              d="M118 138 L200 138"
              stroke="#555"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Footrest arm */}
            <path
              d="M195 210 L210 248"
              stroke="#555"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M200 248 L220 248"
              stroke="#555"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Push handle */}
            <path
              d="M114 138 L108 100"
              stroke="#777"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M108 100 L135 100"
              stroke="#777"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* === ELDERLY PERSON === */}
            {/* Body - seated */}
            <rect
              x="118"
              y="175"
              width="66"
              height="50"
              rx="10"
              fill="#87ceeb"
            />
            {/* Torso sweater detail */}
            <path
              d="M118 185 Q151 178 184 185"
              stroke="#6ab4d8"
              strokeWidth="2"
              fill="none"
            />
            {/* Lap/legs */}
            <rect
              x="122"
              y="218"
              width="58"
              height="30"
              rx="6"
              fill="#d3d3d3"
            />
            {/* Feet */}
            <ellipse cx="138" cy="252" rx="14" ry="8" fill="#8b7355" />
            <ellipse cx="162" cy="252" rx="14" ry="8" fill="#8b7355" />
            {/* Head */}
            <circle cx="151" cy="148" r="28" fill="#f5deb3" />
            {/* Hair - white/silver */}
            <ellipse cx="151" cy="126" rx="26" ry="14" fill="#e8e8e8" />
            <path
              d="M125 135 Q122 158 128 170"
              stroke="#e0e0e0"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M177 135 Q180 158 174 170"
              stroke="#e0e0e0"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Face */}
            <circle cx="143" cy="151" r="3" fill="#8b6347" />
            <circle cx="159" cy="151" r="3" fill="#8b6347" />
            <path
              d="M143 162 Q151 168 159 162"
              stroke="#8b6347"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Wrinkles */}
            <path
              d="M137 147 Q140 144 143 147"
              stroke="#c8a882"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M159 147 Q162 144 165 147"
              stroke="#c8a882"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Hands clasped */}
            <ellipse cx="148" cy="200" rx="16" ry="10" fill="#f0c090" />
            <ellipse cx="164" cy="197" rx="14" ry="9" fill="#edbf8a" />

            {/* === NURSE === */}
            {/* Nurse body - scrubs */}
            <rect
              x="190"
              y="168"
              width="72"
              height="110"
              rx="16"
              fill="#7ec8e3"
            />
            <rect
              x="200"
              y="168"
              width="52"
              height="26"
              rx="0"
              fill="#5bb3cf"
            />
            {/* Scrub V-neck */}
            <path
              d="M220 168 L226 188 L232 168"
              stroke="#5bb3cf"
              strokeWidth="2"
              fill="none"
            />
            {/* Nurse legs */}
            <rect
              x="198"
              y="272"
              width="24"
              height="32"
              rx="6"
              fill="#6ab8d4"
            />
            <rect
              x="230"
              y="272"
              width="24"
              height="32"
              rx="6"
              fill="#6ab8d4"
            />
            {/* Nurse shoes */}
            <ellipse cx="210" cy="306" rx="16" ry="8" fill="#ffffff" />
            <ellipse cx="242" cy="306" rx="16" ry="8" fill="#ffffff" />
            {/* Nurse arm reaching to patient */}
            <path
              d="M190 205 Q160 220 155 205"
              stroke="#7ec8e3"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
            />
            {/* Nurse arm other side */}
            <path
              d="M262 205 Q280 215 270 240"
              stroke="#7ec8e3"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hand on patient shoulder */}
            <ellipse cx="155" cy="198" rx="14" ry="9" fill="#f5d0b0" />
            {/* Nurse head */}
            <circle cx="226" cy="108" r="34" fill="#f5d0b0" />
            {/* Nurse hair - blonde ponytail */}
            <ellipse cx="226" cy="84" rx="30" ry="18" fill="#d4a843" />
            <path
              d="M196 92 Q190 118 196 136"
              stroke="#d4a843"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M256 92 Q262 118 256 136"
              stroke="#c89a38"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Ponytail */}
            <path
              d="M256 90 Q278 80 272 110 Q266 130 258 136"
              stroke="#d4a843"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            {/* Nurse face */}
            <circle cx="216" cy="110" r="3.5" fill="#5d3a1a" />
            <circle cx="236" cy="110" r="3.5" fill="#5d3a1a" />
            <path
              d="M216 124 Q226 132 236 124"
              stroke="#5d3a1a"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Cheeks */}
            <circle cx="210" cy="118" r="7" fill="#ffb6b6" opacity="0.35" />
            <circle cx="242" cy="118" r="7" fill="#ffb6b6" opacity="0.35" />
            {/* Stethoscope */}
            <path
              d="M216 168 Q210 158 206 162 Q200 168 210 176"
              stroke="#555"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle
              cx="210"
              cy="177"
              r="5"
              fill="none"
              stroke="#555"
              strokeWidth="2"
            />

            {/* Soft shadow on ground */}
            <ellipse
              cx="160"
              cy="308"
              rx="120"
              ry="8"
              fill="rgba(0,0,0,0.12)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
