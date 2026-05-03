import { useEffect, useRef, useState } from "react";

const trustBadges = [
  { color: "#f5a623", label: "No obligation" },
  { color: "#f5a623", label: "Response within 24 hrs" },
  { color: "#f5a623", label: "NDIS registered" },
  { color: "#f5a623", label: "Serving all of Australia" },
];

export default function CTAFooterSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="cta-section">
      <style>{`
        .cta-section {
          width: 100%;
          background: #ffffff;
          padding: 34px 20px 90px;
          font-family: Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .cta-fade {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .cta-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .question-card {
          width: 100%;
          max-width: 720px;
          min-height: 170px;
          margin: 0 auto 92px;
          border-radius: 14px;
          background: linear-gradient(110deg, #00442d 0%, #00663f 45%, #00c875 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 34px 32px;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        .question-card::before {
          content: "";
          position: absolute;
          left: -80px;
          top: -80px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%);
          pointer-events: none;
        }

        .question-title {
          margin: 0 0 12px;
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          position: relative;
          z-index: 1;
        }

        .question-desc {
          margin: 0 0 24px;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          position: relative;
          z-index: 1;
          max-width: 540px;
        }

        .question-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .question-btn {
          height: 44px;
          min-width: 190px;
          border: 0;
          outline: 0;
          cursor: pointer;
          border-radius: 999px;
          background: #ffffff;
          color: #234638;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 14px;
          font-weight: 700;
          font-family: Arial, Helvetica, sans-serif;
          transition: transform 0.25s ease, opacity 0.25s ease;
          padding: 0 22px;
        }

        .question-btn:hover {
          transform: translateY(-2px);
          opacity: 0.94;
        }

        .question-btn svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .cta-main {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-small-title {
          margin: 0 0 10px;
          color: #168545;
          font-size: 15px;
          font-weight: 800;
          line-height: 1;
        }

        .cta-title {
          margin: 0 0 14px;
          color: #284a40;
          font-size: 44px;
          font-weight: 800;
          line-height: 1.12;
        }

        .cta-desc {
          max-width: 600px;
          margin: 0 auto 30px;
          color: #111111;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .cta-btn {
          border: 0;
          outline: 0;
          cursor: pointer;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          font-family: Arial, Helvetica, sans-serif;
          transition: transform 0.25s ease, opacity 0.25s ease;
          white-space: nowrap;
          background: linear-gradient(90deg, #234638 0%, #8dbb78 100%);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .cta-btn-primary {
          padding: 0 28px;
        }

        .cta-btn-secondary {
          padding: 0 26px;
        }

        .cta-btn svg {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
        }

        .cta-trust-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 26px;
          flex-wrap: wrap;
        }

        .cta-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #111111;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
        }

        .cta-trust-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .cta-section {
            padding: 30px 16px 70px;
          }

          .question-card {
            margin-bottom: 70px;
            min-height: 170px;
            padding: 28px 20px;
          }

          .question-title {
            font-size: 22px;
          }

          .question-desc {
            font-size: 14px;
          }

          .question-btn {
            height: 42px;
            font-size: 13px;
            min-width: 180px;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-desc {
            font-size: 14px;
          }

          .cta-btn {
            height: 44px;
            font-size: 13px;
          }

          .cta-trust-row {
            gap: 14px;
          }

          .cta-trust-item {
            font-size: 12px;
          }
        }

        @media (max-width: 420px) {
          .question-buttons,
          .cta-buttons {
            flex-direction: column;
          }

          .question-btn,
          .cta-btn {
            width: 100%;
            max-width: 260px;
          }

          .cta-trust-row {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      <div
        className={`cta-fade question-card ${visible ? "visible" : ""}`}
        style={{ transitionDelay: "0.05s" }}
      >
        <h3 className="question-title">Still have questions?</h3>

        <p className="question-desc">
          Our friendly team is here to help. Reach out anytime–no question is
          too small.
        </p>

        <div className="question-buttons">
          <button type="button" className="question-btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" />
            </svg>
            Call 1300 000000
          </button>

          <button type="button" className="question-btn">
            <svg
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

      <div
        className={`cta-fade cta-main ${visible ? "visible" : ""}`}
        style={{ transitionDelay: "0.16s" }}
      >
        <p className="cta-small-title">Your Care Starts Here</p>

        <h2 className="cta-title">Ready to Find the Right Support?</h2>

        <p className="cta-desc">
          Start your journey today and let us guide you to the care you need.
          Compassionate, personalised, and always on your side.
        </p>

        <div className="cta-buttons">
          <button type="button" className="cta-btn cta-btn-primary">
            Start Your Care Journey
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>

          <button type="button" className="cta-btn cta-btn-secondary">
            Call 1300000000
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
        </div>

        <div className="cta-trust-row">
          {trustBadges.map((item) => (
            <div key={item.label} className="cta-trust-item">
              <span
                className="cta-trust-dot"
                style={{ background: item.color }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
