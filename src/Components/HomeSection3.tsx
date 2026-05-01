import { useEffect, useRef, useState } from "react";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "In-Home Care",
    description:
      "Personal support, domestic assistance, and companionship in the comfort of your own home.",
    image: "/Rectangle_26.png",
  },
  {
    id: 2,
    title: "Community Nursing",
    description:
      "Registered nurses delivering clinical care and wound management in your community.",
    image: "/Rectangle_26_(1).png",
  },
  {
    id: 3,
    title: "Support Coordination",
    description:
      "Expert coordinators helping you navigate and maximise your NDIS funding effectively.",
    image: "/Background_(1).png",
  },
  {
    id: 4,
    title: "Allied Health Services",
    description:
      "Physio, OT, speech therapy and more — delivered by credentialed allied health professionals.",
    image: "/Rectangle_26_(2).png",
  },
  {
    id: 5,
    title: "Care Navigation",
    description:
      "Helping you cut through complexity to find and connect with the right services.",
    image: "/Background_(2).png",
  },
  {
    id: 6,
    title: "Supported Independent Living",
    description:
      "Tailored SIL arrangements empowering you to live independently with the right daily support.",
    image: "/Rectangle_28.png",
  },
];

export default function OurServices() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  return (
    <section ref={sectionRef} className="services-section">
      <style>{`
        .services-section {
          width: 100%;
          padding: 12px;
          font-family: Arial, Helvetica, sans-serif;
          background: #ffffff;
        }

       .services-wrapper {
  background: #e9e9e9;
  border-radius: 32px;
  padding: 44px 32px 42px;
  max-width: 1620px;
  margin: 0 auto;
}

        .services-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 36px;
        }

        .services-small-title {
          font-size: 18px;
          font-weight: 700;
          color: #15964a;
          margin: 0 0 8px;
        }

        .services-title {
          font-size: 48px;
          font-weight: 800;
          color: #24443b;
          margin: 0 0 16px;
          line-height: 1.08;
        }

        .services-desc {
          font-size: 16px;
          color: #000000;
          line-height: 1.6;
          margin: 0;
        }

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  max-width: 1340px;
  margin: 0 auto;
}

        .service-card {
          position: relative;
          height: 330px;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid #49a760;
          background: #0b3c2b;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.55s ease,
            transform 0.55s ease,
            box-shadow 0.3s ease;
        }

        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 38px rgba(0, 70, 40, 0.22);
        }

        .service-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.02) 0%,
              rgba(0, 50, 32, 0.15) 42%,
              rgba(0, 54, 35, 0.82) 100%
            );
        }

        .service-content {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          color: #ffffff;
        }

        .service-title {
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 10px;
          line-height: 1.2;
          color: #ffffff;
        }

        .service-description {
          font-size: 15px;
          line-height: 1.5;
          max-width: 330px;
          margin: 0 0 20px;
          color: rgba(255, 255, 255, 0.94);
        }

        .learn-btn {
          border: 0;
          outline: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 42px;
          padding: 0 24px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          background: linear-gradient(90deg, #284e37 0%, #8aad70 100%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .learn-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .learn-btn svg {
          width: 16px;
          height: 16px;
        }

        .services-bottom {
          text-align: center;
          margin-top: 36px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
          transition-delay: 0.45s;
        }

        .services-bottom.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .services-bottom p {
          font-size: 16px;
          color: #000000;
          margin: 0 0 16px;
        }

        .talk-btn {
          border: 0;
          outline: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 48px;
          padding: 0 34px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 800;
          background: linear-gradient(90deg, #1f4932 0%, #8aae70 100%);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .talk-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .talk-btn svg {
          width: 17px;
          height: 17px;
        }

        @media (max-width: 1024px) {
          .services-wrapper {
            padding: 38px 24px 38px;
          }

          .services-title {
            font-size: 42px;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 820px;
          }

          .service-card {
            height: 310px;
          }
        }

        @media (max-width: 640px) {
          .services-section {
            padding: 8px;
          }

          .services-wrapper {
            border-radius: 22px;
            padding: 30px 14px 32px;
          }

          .services-header {
            max-width: 100%;
            margin-bottom: 28px;
          }

          .services-small-title {
            font-size: 16px;
          }

          .services-title {
            font-size: 34px;
          }

          .services-desc {
            font-size: 14px;
            line-height: 1.55;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .service-card {
            height: 285px;
          }

          .service-content {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }

          .service-title {
            font-size: 20px;
          }

          .service-description {
            font-size: 14px;
            max-width: 100%;
          }

          .learn-btn {
            height: 40px;
            font-size: 13px;
            padding: 0 22px;
          }
        }
      `}</style>

      <div className="services-wrapper">
        <div className="services-header">
          <p className="services-small-title">What We Offer?</p>

          <h2 className="services-title">Our Services</h2>

          <p className="services-desc">
            Discover a wide range of services across aged care, disability,
            nursing and recovery support.
            <br />
            At Continuity Care we make care simple, compassionate and tailored
            to each person&apos;s needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${visible ? "visible" : ""}`}
              style={{
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-overlay" />

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>

                <p className="service-description">{service.description}</p>

                <button type="button" className="learn-btn">
                  Learn More
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`services-bottom ${visible ? "visible" : ""}`}>
          <p>Not sure which service is right for you?</p>

          <button type="button" className="talk-btn">
            Talk to Our Care Team
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
