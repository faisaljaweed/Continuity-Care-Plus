import { useEffect, useRef, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Understanding NDIS: A Simple Guide to Getting Started",
    description:
      "Learn how the NDIS works, what support you can access, and how to begin your care journey with confidence.",
    date: "Jan 12, 2026",
    image: "/Rectangle_34.png",
  },
  {
    id: 2,
    title: "Choosing the Right Care Provider for Your Needs",
    description:
      "Discover key factors to consider when selecting a care provider and how to find the right fit for you or your loved one.",
    date: "Feb 05, 2026",
    image: "/Rectangle_34_(1).png",
  },
  {
    id: 3,
    title: "In-Home Care vs Supported Living: What’s Right for You?",
    description:
      "Compare different care options to understand which support model best suits your lifestyle and needs.",
    date: "Mar 18, 2026",
    image: "/Rectangle_34_(2).png",
  },
];

const CalendarIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
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
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="insights-section">
      <style>{`
        .insights-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 20px 90px;
          font-family: Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .insights-container {
          max-width: 1340px;
          margin: 0 auto;
        }

        .insights-header {
          max-width: 650px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .insights-small-title {
          margin: 0 0 8px;
          color: #188f45;
          font-size: 15px;
          font-weight: 800;
        }

        .insights-title {
          margin: 0 0 16px;
          color: #294a40;
          font-size: 44px;
          font-weight: 800;
          line-height: 1.1;
        }

        .insights-subtitle {
          margin: 0;
          color: #111111;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
        }

        .insights-grid {
          max-width: 1340px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .insight-card {
          background: #ffffff;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.55s ease,
            transform 0.55s ease;
        }

        .insight-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .insight-card:hover .insight-image {
          transform: scale(1.05);
        }

        .insight-image-box {
          width: 100%;
          height: 245px;
          overflow: hidden;
          border-radius: 14px;
          background: #eeeeee;
          margin-bottom: 22px;
        }

        .insight-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .insight-title {
          margin: 0 0 12px;
          color: #073f2b;
          font-size: 22px;
          font-weight: 800;
          line-height: 1.2;
        }

        .insight-description {
          margin: 0 0 20px;
          color: #111111;
          font-size: 15px;
          line-height: 1.6;
          max-width: 390px;
        }

        .insight-date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #111111;
          font-size: 14px;
          font-weight: 500;
        }

        .insight-date-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #006b3f;
        }

        @media (max-width: 992px) {
          .insights-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 820px;
          }

          .insight-image-box {
            height: 230px;
          }

          .insights-title {
            font-size: 40px;
          }
        }

        @media (max-width: 640px) {
          .insights-section {
            padding: 55px 16px 65px;
          }

          .insights-header {
            margin-bottom: 34px;
          }

          .insights-small-title {
            font-size: 14px;
          }

          .insights-title {
            font-size: 32px;
          }

          .insights-subtitle {
            font-size: 14px;
          }

          .insights-grid {
            grid-template-columns: 1fr;
            gap: 34px;
            max-width: 100%;
          }

          .insight-image-box {
            height: 220px;
          }

          .insight-title {
            font-size: 20px;
          }

          .insight-description {
            font-size: 14px;
            max-width: 100%;
          }

          .insight-date {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="insights-container">
        <div className="insights-header">
          <p className="insights-small-title">News &amp; Articles</p>

          <h2 className="insights-title">Insights &amp; Resources</h2>

          <p className="insights-subtitle">
            Explore helpful articles, tips, and guidance to support your care
            journey.
          </p>
        </div>

        <div className="insights-grid">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`insight-card ${visible ? "visible" : ""}`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="insight-image-box">
                <img
                  src={article.image}
                  alt={article.title}
                  className="insight-image"
                />
              </div>

              <h3 className="insight-title">{article.title}</h3>

              <p className="insight-description">{article.description}</p>

              <div className="insight-date">
                <span className="insight-date-icon">
                  <CalendarIcon />
                </span>
                <span>{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
