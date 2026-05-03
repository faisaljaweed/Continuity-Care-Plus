import { useEffect, useRef, useState } from "react";

interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

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
  const ref = useRef<HTMLElement | null>(null);

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
    <section ref={ref} className="wcc-section">
      <style>{`
        .wcc-section {
          width: 100%;
          background: #ffffff;
          padding: 70px 24px 80px;
          font-family: Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .wcc-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .wcc-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wcc-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          max-width: 1340px;
          margin: 0 auto 54px;
        }

        .wcc-small-title {
          font-size: 15px;
          font-weight: 800;
          color: #168545;
          margin: 0 0 12px;
        }

        .wcc-heading {
          font-size: 48px;
          font-weight: 800;
          color: #24443b;
          line-height: 1.05;
          margin: 0;
        }

        .wcc-heading-green {
          color: #9DC184;
        }

        .wcc-intro {
          font-size: 15px;
          color: #111111;
          line-height: 1.65;
          max-width: 560px;
          margin: 22px 0 34px;
        }

        .wcc-stats {
          display: flex;
          align-items: flex-start;
          gap: 48px;
          flex-wrap: wrap;
        }

        .wcc-stat-value {
          font-size: 30px;
          font-weight: 800;
          color: #24443b;
          line-height: 1;
        }

        .wcc-stat-label {
          font-size: 13px;
          color: #111111;
          font-weight: 600;
          margin-top: 7px;
        }

        .wcc-testimonial-wrap {
          position: relative;
          padding-bottom: 22px;
        }

        .wcc-testimonial {
          background: #d7ebcc;
          border-radius: 14px;
          padding: 34px 40px 42px;
          min-height: 220px;
          border: 1px solid #b9d3aa;
        }

        .wcc-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 20px;
        }

        .wcc-quote {
          font-size: 16px;
          font-style: italic;
          color: #111111;
          line-height: 1.65;
          font-weight: 700;
          max-width: 540px;
          margin: 0 0 24px;
        }

        .wcc-avatar-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .wcc-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ffffff;
          color: #234336;
          font-size: 13px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wcc-author-name {
          font-size: 14px;
          font-weight: 800;
          color: #111111;
        }

        .wcc-author-role {
          font-size: 12px;
          color: #111111;
          font-weight: 500;
        }

        .wcc-ndis-badge {
          position: absolute;
          left: -20px;
          bottom: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(90deg, #234638 0%, #8dbb78 100%);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          padding: 11px 20px;
          border-radius: 5px;
          box-shadow: 0 8px 18px rgba(33, 70, 56, 0.16);
          white-space: nowrap;
        }

        .wcc-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          max-width: 1340px;
          margin: 0 auto;
        }

        .wcc-feat-card {
          min-height: 295px;
          border: 1.6px solid #e7bfa8;
          border-radius: 14px;
          padding: 30px 30px 26px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .wcc-feat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 35px rgba(38, 77, 59, 0.12);
          border-color: #94bd7c;
        }

        .wcc-feat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: #d7ebcc;
          color: #2d6a4f;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .wcc-feat-title {
          min-height: 48px;
          font-size: 17px;
          font-weight: 800;
          color: #24443b;
          line-height: 1.3;
          margin: 0 0 14px;
        }

        .wcc-feat-desc {
          font-size: 14px;
          color: #111111;
          line-height: 1.6;
          margin: 0 0 24px;
        }

        .wcc-stat-badge {
          margin-top: auto;
          min-height: 38px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(90deg, #234638 0%, #8dbb78 100%);
          border-radius: 5px;
          padding: 9px 14px;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .wcc-stat-val {
          font-size: 14px;
          font-weight: 900;
          color: #ffffff;
          flex-shrink: 0;
        }

        .wcc-stat-lbl {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.82);
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 1024px) {
          .wcc-top {
            grid-template-columns: 1fr;
            gap: 35px;
            max-width: 820px;
          }

          .wcc-ndis-badge {
            left: 20px;
          }

          .wcc-features-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 820px;
          }
        }

        @media (max-width: 600px) {
          .wcc-section {
            padding: 55px 16px 65px;
          }

          .wcc-top {
            max-width: 100%;
          }

          .wcc-heading {
            font-size: 34px;
          }

          .wcc-intro {
            font-size: 14px;
            max-width: 100%;
          }

          .wcc-stats {
            gap: 24px;
          }

          .wcc-stat-value {
            font-size: 26px;
          }

          .wcc-stat-label {
            font-size: 12px;
          }

          .wcc-testimonial {
            padding: 24px 22px 42px;
          }

          .wcc-quote {
            font-size: 14px;
          }

          .wcc-features-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
          }

          .wcc-feat-card {
            padding: 24px 24px 22px;
            min-height: 260px;
          }

          .wcc-feat-title {
            min-height: auto;
            font-size: 16px;
          }

          .wcc-feat-desc {
            font-size: 13px;
          }

          .wcc-ndis-badge {
            left: 14px;
            font-size: 10px;
          }
        }
      `}</style>

      <div className={`wcc-fade wcc-top${visible ? " visible" : ""}`}>
        <div>
          <p className="wcc-small-title">Our Difference</p>

          <h2 className="wcc-heading">Why Choose</h2>
          <h2 className="wcc-heading wcc-heading-green">Continuity Care</h2>

          <p className="wcc-intro">
            We&apos;re not just a care provider—we&apos;re your partner in
            building a life that feels full, independent, and meaningful.
            Here&apos;s what sets us apart.
          </p>

          <div className="wcc-stats">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="wcc-stat-value">{item.value}</div>
                <div className="wcc-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="wcc-testimonial-wrap">
          <div className="wcc-testimonial">
            <div className="wcc-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  width="16"
                  height="16"
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
              “Continuity Care changed everything for our family. Mum finally
              has the support she needs, and we finally have peace of mind.”
            </p>

            <div className="wcc-avatar-row">
              <div className="wcc-avatar">JT</div>
              <div>
                <div className="wcc-author-name">James T.</div>
                <div className="wcc-author-role">Family carer, Sydney</div>
              </div>
            </div>
          </div>

          <div className="wcc-ndis-badge">
            <svg
              width="13"
              height="13"
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

      <div className="wcc-features-grid">
        {features.map((feat, index) => (
          <div
            key={feat.id}
            className={`wcc-fade wcc-feat-card${visible ? " visible" : ""}`}
            style={{
              transitionDelay: `${index * 0.1 + 0.15}s`,
            }}
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
