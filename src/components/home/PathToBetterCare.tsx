import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Share Your Needs",
    description:
      "Tell us about your situation, preferences, and the kind of support you're looking for so we can understand what matters most to you.",
    illustration: "/Section2_1.png",
  },
  {
    number: "02",
    title: "Get Matched",
    description:
      "Our team connects you with the most suitable carers and services based on your needs, ensuring the right fit from the start.",
    illustration: "/Section2_2.png",
  },
  {
    number: "03",
    title: "Plan Your Care",
    description:
      "We work closely with you to create a personalised care plan that aligns with your goals, lifestyle, and NDIS requirements.",
    illustration: "/Section2_3.png",
  },
  {
    number: "04",
    title: "Start Your Journey",
    description:
      "Begin receiving quality support with ongoing guidance from our team, ensuring comfort, consistency, and peace of mind.",
    illustration: "/Section2_4.png",
  },
  {
    number: "05",
    title: "Achieve Your Quality of Life",
    description:
      "Enjoy a better quality of life with the right support. Stay independent, comfortable, and confident.",
    illustration: "/Section2_5.png",
  },
];

export default function PathToBetterCare() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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
    <section ref={sectionRef} className="ptbc-section">
      <style>{`
        .ptbc-section {
          background: #ffffff;
          padding: 80px 24px 90px;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .ptbc-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 52px;
        }

        .ptbc-small-title {
          font-size: 13px;
          font-weight: 800;
          color: #2B8E3B;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin: 0 0 10px;
        }

        .ptbc-heading {
          font-size: 40px;
          font-weight: 800;
          color: #25433A;
          line-height: 1.2;
          margin: 0 0 12px;
        }

        .ptbc-subtitle {
          font-size: 16px;
          color: #000000;
          line-height: 1.65;
          margin: 0;
        }

        .ptbc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.28fr 1fr 1fr;
          gap: 18px;
          max-width: 1340px;
          margin: 0 auto;
          align-items: center;
        }

        .ptbc-card {
          background: #CEE0C2;
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          cursor: default;
          border: 2px solid transparent;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
          position: relative;
          width: 100%;
          min-height: 275px;
          height: 275px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ptbc-card.center-card {
          min-height: 330px;
          height: 330px;
          z-index: 5;
          background: #CEE0C2;
          padding-left: 24px;
          padding-right: 24px;
        }

        .ptbc-card:hover {
          background: #dff0df;
          border-color: #8abc8a;
          box-shadow: 0 10px 32px rgba(58, 122, 90, 0.14);
          transform: translateY(-8px);
        }

        .ptbc-card.center-card:hover {
          transform: translateY(0);
        }

        .ptbc-number {
          font-size: 40px;
          font-weight: 800;
          color: #25433A;
          opacity: 0.95;
          line-height: 1;
          margin-bottom: 8px;
        }

        .ptbc-card.center-card .ptbc-number {
          font-size: 46px;
          margin-bottom: 10px;
        }

        .ptbc-title {
          font-size: 14px;
          font-weight: 800;
          color: #1a3a2a;
          line-height: 1.3;
          min-height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .ptbc-card.center-card .ptbc-title {
          font-size: 15px;
        }

        .ptbc-image-wrap {
          width: 82px;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          flex-shrink: 0;
        }

        .ptbc-card.center-card .ptbc-image-wrap {
          width: 108px;
          height: 108px;
          margin-bottom: 16px;
        }

        .ptbc-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        .ptbc-description {
          font-size: 12px;
          color: #244438;
          line-height: 1.45;
          margin: 0;
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .ptbc-card.center-card .ptbc-description {
          max-width: 260px;
          font-size: 12px;
        }

        .ptbc-connector {
          position: absolute;
          top: 52%;
          right: -28px;
          width: 40px;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            #8abc8a 0,
            #8abc8a 5px,
            transparent 5px,
            transparent 10px
          );
          z-index: 2;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1100px) {
          .ptbc-grid {
            grid-template-columns: repeat(3, 1fr);
            align-items: stretch;
          }

          .ptbc-card,
          .ptbc-card.center-card {
            height: 275px;
            min-height: 275px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .ptbc-card.center-card .ptbc-image-wrap {
            width: 82px;
            height: 75px;
          }

          .ptbc-card.center-card .ptbc-number {
            font-size: 40px;
          }

          .ptbc-card.center-card .ptbc-title {
            font-size: 14px;
          }

          .ptbc-card.center-card .ptbc-description {
            max-width: 100%;
          }

          .ptbc-connector {
            display: none;
          }
        }

        @media (max-width: 680px) {
          .ptbc-section {
            padding: 60px 18px 70px;
          }

          .ptbc-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .ptbc-card,
          .ptbc-card.center-card {
            min-height: 250px;
            height: 250px;
            padding: 22px 14px 18px;
          }

          .ptbc-heading {
            font-size: 30px;
          }

          .ptbc-subtitle {
            font-size: 13px;
          }
        }

        @media (max-width: 430px) {
          .ptbc-grid {
            grid-template-columns: 1fr;
          }

          .ptbc-card,
          .ptbc-card.center-card {
            min-height: auto;
            height: auto;
          }
        }
      `}</style>

      <div className={"ptbc-header fade-up" + (visible ? " visible" : "")}>
        <p className="ptbc-small-title">Why Choose Us?</p>

        <h2 className="ptbc-heading">Your Path to Better Care</h2>

        <p className="ptbc-subtitle">
          Start Aged care journey with us Self Managed and Continuity Care
          Managed
        </p>
      </div>

      <div className="ptbc-grid">
        {steps.map((step, index) => {
          const isCenter = index === 2;

          return (
            <div
              key={step.number}
              className={
                "fade-up ptbc-card" +
                (isCenter ? " center-card" : "") +
                (visible ? " visible" : "")
              }
              style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
            >
              {index < steps.length - 1 && <div className="ptbc-connector" />}

              <div className="ptbc-number">{step.number}</div>

              <div className="ptbc-title">{step.title}</div>

              <div className="ptbc-image-wrap">
                <img
                  src={step.illustration}
                  alt={step.title}
                  className="ptbc-image"
                />
              </div>

              <p className="ptbc-description">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
