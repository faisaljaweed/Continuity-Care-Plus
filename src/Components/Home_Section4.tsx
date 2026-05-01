import React, { ReactNode } from "react";

const cardData = [
  {
    title: "Aged Care",
    description:
      "Flexible in-home support designed to help you stay safe, comfortable, and independent in your daily life.",
    icon: "aged",
  },
  {
    title: "Disability Support",
    description:
      "Personalised care and assistance tailored to your unique needs, helping you achieve your goals with confidence.",
    icon: "disability",
  },
  {
    title: "Nursing Care",
    description:
      "Qualified nursing services delivered at home, ensuring professional medical support with a caring approach.",
    icon: "nursing",
  },
  {
    title: "Recovery Support",
    description:
      "Dedicated support to help you recover faster, rebuild strength, and return to your everyday routine.",
    icon: "recovery",
  },
];

type IconWrapperProps = {
  children: ReactNode;
};

const IconWrapper = ({ children }: IconWrapperProps) => {
  return (
    <div
      style={{
        width: "54px",
        height: "54px",
        borderRadius: "50%",
        background: "#c9d9b8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 20px",
      }}
    >
      {children}
    </div>
  );
};

const AgedCareIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5.5C13.1 5.5 14 4.6 14 3.5C14 2.4 13.1 1.5 12 1.5C10.9 1.5 10 2.4 10 3.5C10 4.6 10.9 5.5 12 5.5Z"
      fill="#3d3d3d"
    />
    <path
      d="M6 10.5V8.8C6 7.8 6.8 7 7.8 7H9.4L12 9.1L14.6 7H16.2C17.2 7 18 7.8 18 8.8V10.5"
      stroke="#3d3d3d"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10.5V16.5M16 10.5V16.5M12 10V21"
      stroke="#3d3d3d"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M4 13.5L8 15.5M20 13.5L16 15.5"
      stroke="#3d3d3d"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const DisabilityIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="4" r="2.2" fill="#3d3d3d" />
    <path
      d="M11.5 7.5L9 12.2L6.8 14.5"
      stroke="#3d3d3d"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8 7.5L14.7 10.3H18"
      stroke="#3d3d3d"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.2 13.2L13.2 12.3L14.8 17.5"
      stroke="#3d3d3d"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 17.5C6.5 15 8.5 13 11 13H12.5C15 13 17 15 17 17.5"
      stroke="#3d3d3d"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const NursingIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3" fill="#3d3d3d" />
    <path
      d="M6.5 19C6.5 15.9 9 13.5 12 13.5C15 13.5 17.5 15.9 17.5 19"
      fill="#3d3d3d"
    />
    <path
      d="M18.5 6.5V10.5M16.5 8.5H20.5"
      stroke="#3d3d3d"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const RecoveryIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 11.5L9.2 8.3L12.5 11.6L15.2 8.9L18 11.7"
      stroke="#3d3d3d"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 15.5C8.6 17.1 10.1 18.2 12 18.2C14.4 18.2 16.4 16.2 16.4 13.8"
      stroke="#3d3d3d"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M14.5 5.8H18.5V9.8"
      stroke="#3d3d3d"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const renderIcon = (type: string) => {
  switch (type) {
    case "aged":
      return <AgedCareIcon />;
    case "disability":
      return <DisabilityIcon />;
    case "nursing":
      return <NursingIcon />;
    case "recovery":
      return <RecoveryIcon />;
    default:
      return <AgedCareIcon />;
  }
};

export default function FindRightCare() {
  return (
    <section
      style={{
        background: "#f5f5f5",
        padding: "22px 20px 48px",
        fontFamily: "'Nunito Sans', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1340px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#4f9d55",
            fontSize: "14px",
            fontWeight: 700,
            margin: "0 0 8px",
          }}
        >
          Find Your Care
        </p>

        <h2
          style={{
            margin: "0 0 10px",
            color: "#284b42",
            fontSize: "48px",
            lineHeight: 1.15,
            fontWeight: 800,
          }}
        >
          Find the Right Care for You
        </h2>

        <p
          style={{
            margin: "0 0 34px",
            color: "#333",
            fontSize: "15px",
          }}
        >
          Start Aged care journey with us Self Managed and Continuity Care
          Managed.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "22px",
          }}
          className="find-right-care-grid"
        >
          {cardData.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#f9f9f9",
                border: "1.5px solid #e7c9b4",
                borderRadius: "18px",
                padding: "28px 24px 26px",
                minHeight: "255px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                boxSizing: "border-box",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <IconWrapper>{renderIcon(item.icon)}</IconWrapper>

              <h3
                style={{
                  fontSize: "22px",
                  lineHeight: 1.2,
                  color: "#284b42",
                  margin: "0 0 12px",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#3f3f3f",
                  margin: "0 0 22px",
                  maxWidth: "240px",
                  flexGrow: 1,
                }}
              >
                {item.description}
              </p>

              <button
                style={{
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "10px 22px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #1f5447 0%, #7ca45f 100%)",
                  boxShadow: "0 6px 14px rgba(73, 120, 82, 0.22)",
                  minWidth: "94px",
                }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @media (max-width: 1100px) {
            .find-right-care-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 768px) {
            .find-right-care-grid {
              grid-template-columns: 1fr !important;
            }

            h2 {
              font-size: 34px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
