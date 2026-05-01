import React from "react";

type AdvantageCard = {
  title: string;
  description: string;
  image: string;
  icon: "care" | "support" | "connected" | "guidance";
};

const cards: AdvantageCard[] = [
  {
    title: "Care Coordination",
    description: "Seamless management of all your care needs.",
    image: "/Background_(3).png",
    icon: "care",
  },
  {
    title: "Personalised Support",
    description: "Our services are tailored to your individual needs.",
    image: "/Background_(4).png",
    icon: "support",
  },
  {
    title: "Connected Services",
    description: "All care solutions are integrated into one system.",
    image: "/Background_(5).png",
    icon: "connected",
  },
  {
    title: "Ongoing Guidance",
    description: "We provide continuous support and expert guidance.",
    image: "/Background_(6).png",
    icon: "guidance",
  },
];

const CardIcon = ({ type }: { type: AdvantageCard["icon"] }) => {
  if (type === "care") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="2" fill="white" />
        <circle cx="5" cy="12" r="2" fill="white" />
        <circle cx="19" cy="12" r="2" fill="white" />
        <circle cx="8" cy="19" r="2" fill="white" />
        <circle cx="16" cy="19" r="2" fill="white" />
        <path
          d="M12 7.5V10.5M7 12H10M14 12H17M9.2 17.2L11 14.5M14.8 17.2L13 14.5"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7H15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="7" r="2" fill="white" />
        <path
          d="M20 12H9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="7" cy="12" r="2" fill="white" />
        <path
          d="M4 17H15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="17" r="2" fill="white" />
      </svg>
    );
  }

  if (type === "connected") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="white" />
        <circle cx="5" cy="5" r="2" fill="white" />
        <circle cx="19" cy="5" r="2" fill="white" />
        <circle cx="5" cy="19" r="2" fill="white" />
        <circle cx="19" cy="19" r="2" fill="white" />
        <path
          d="M7 6.5L10 10M17 6.5L14 10M7 17.5L10 14M17 17.5L14 14"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12.5L9 17.5L20 6.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7.5H11L13 10.5H19"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function ReadyToStart() {
  return (
    <section className="ready-section">
      <style>{`
        .ready-section {
          width: 100%;
          background: #ffffff;
          padding: 68px 24px 86px;
          font-family: "Nunito Sans", Arial, sans-serif;
          box-sizing: border-box;
        }

        .ready-container {
          max-width: 1340px;
          margin: 0 auto;
        }

        .ready-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 44px;
        }

        .ready-label {
          margin: 0 0 6px;
          color: #31944b;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 800;
        }

        .ready-title {
          margin: 0 0 10px;
          color: #264a41;
          font-size: 44px;
          line-height: 1.06;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .ready-subtitle {
          margin: 0 auto;
          color: #111111;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 400;
          max-width: 600px;
        }

        .ready-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          max-width: 1340px;
          margin: 0 auto;
        }

        .ready-card {
          position: relative;
          height: 340px;
          border-radius: 14px;
          overflow: hidden;
          background: #d9d9d9;
          box-shadow: none;
        }

        .ready-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .ready-card:hover .ready-card-image {
          transform: scale(1.05);
        }

        .ready-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.02) 0%,
            rgba(0, 0, 0, 0.05) 35%,
            rgba(0, 0, 0, 0.55) 78%,
            rgba(0, 68, 43, 0.96) 100%
          );
          z-index: 1;
        }

        .ready-content {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 22px;
          z-index: 2;
          color: #ffffff;
          text-align: left;
        }

        .ready-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .ready-card-title {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.2;
          font-weight: 800;
        }

        .ready-description {
          margin: 0;
          color: rgba(255, 255, 255, 0.94);
          font-size: 13px;
          line-height: 1.42;
          font-weight: 400;
          max-width: 230px;
        }

        @media (max-width: 1100px) {
          .ready-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 820px;
          }

          .ready-card {
            height: 330px;
          }
        }

        @media (max-width: 640px) {
          .ready-section {
            padding: 52px 18px 64px;
          }

          .ready-title {
            font-size: 34px;
          }

          .ready-subtitle {
            font-size: 14px;
          }

          .ready-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            max-width: 100%;
          }

          .ready-card {
            height: 310px;
          }
        }
      `}</style>

      <div className="ready-container">
        <div className="ready-header">
          <p className="ready-label">Our Advantages</p>

          <h2 className="ready-title">Your One-Stop Care Solution</h2>

          <p className="ready-subtitle">
            Access a full range of care services in one place, with a holistic
            approach that keeps everything connected and easy to manage.
          </p>
        </div>

        <div className="ready-grid">
          {cards.map((card) => (
            <div className="ready-card" key={card.title}>
              <img
                src={card.image}
                alt={card.title}
                className="ready-card-image"
              />

              <div className="ready-content">
                <div className="ready-icon">
                  <CardIcon type={card.icon} />
                </div>

                <h3 className="ready-card-title">{card.title}</h3>

                <p className="ready-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
