import { useState, useEffect, useRef } from "react";

interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    number: "01",
    question: "What services do you provide?",
    answer:
      "We provide a comprehensive range of care services including In-Home Care, Community Nursing, Support Coordination, Allied Health Services, Care Navigation, and Supported Independent Living (SIL). All services are tailored to your individual goals, NDIS plan, and lifestyle needs.",
  },
  {
    id: 2,
    number: "02",
    question: "How do I get started?",
    answer:
      "Getting started is simple. You can fill out our online care enquiry form, call us directly, or send us a message. A member of our care team will contact you within 24 hours to discuss your needs and guide you through the next steps — no forms or jargon required.",
  },
  {
    id: 3,
    number: "03",
    question: "Do you support families as well?",
    answer:
      "Absolutely. We understand that care decisions often involve the whole family. We welcome family members and carers to be part of the planning process. We offer guidance, regular updates, and open communication so everyone stays informed and supported.",
  },
  {
    id: 4,
    number: "04",
    question: "What happens after I submit the form?",
    answer:
      "Once you submit your enquiry, a dedicated care advisor will review your details and reach out within 24 hours. We'll arrange a free, no-obligation consultation to understand your situation and start building a personalised care plan that works for you.",
  },
  {
    id: 5,
    number: "05",
    question: "Is my information secure?",
    answer:
      "Yes, absolutely. We take your privacy very seriously. All personal information submitted through our platform is encrypted, stored securely, and handled in accordance with the Australian Privacy Act. We never share your data with third parties without your consent.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const answerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  const getHeight = (id: number): string => {
    const el = answerRefs.current[id];
    if (!el || openId !== id) return "0px";
    return `${el.scrollHeight}px`;
  };

  return (
    <section
      ref={ref}
      style={{
        background: "#fff",
        padding: "80px 24px 90px",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .faq-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .faq-fade.in { opacity: 1; transform: translateY(0); }

        .faq-item {
          background: #deeede;
          border-radius: 14px;
          overflow: hidden;
          transition: box-shadow 0.25s ease;
          border: 1.5px solid transparent;
        }
        .faq-item:hover {
          box-shadow: 0 4px 20px rgba(26,90,50,0.09);
          border-color: #b8d8b8;
        }
        .faq-item.open {
          border-color: #a8cca8;
          box-shadow: 0 6px 28px rgba(26,90,50,0.11);
        }

        .faq-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          user-select: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: 'Nunito Sans', sans-serif;
        }

        .faq-num {
          font-size: 13px;
          font-weight: 800;
          color: #5a8a6a;
          min-width: 22px;
          flex-shrink: 0;
        }

        .faq-question {
          flex: 1;
          font-size: 15.5px;
          font-weight: 700;
          color: #0f2a1c;
          line-height: 1.3;
        }

        .faq-chevron-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.7);
          border: 1.5px solid rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.35s ease;
          color: #3a6a4a;
        }
        .faq-item.open .faq-chevron-wrap {
          background: #fff;
          transform: rotate(180deg);
        }

        .faq-body {
          overflow: hidden;
          transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1);
          max-height: 0;
        }
        .faq-body.open {
          /* max-height set inline */
        }

        .faq-answer {
          padding: 0 24px 22px 52px;
          font-size: 14px;
          color: #3a5a4a;
          line-height: 1.75;
          font-weight: 500;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 720px;
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          .faq-question { font-size: 14px; }
          .faq-answer { padding-left: 38px; }
        }
      `}</style>

      {/* Header */}
      <div
        className={`faq-fade${visible ? " in" : ""}`}
        style={{
          textAlign: "center",
          marginBottom: 44,
          maxWidth: 640,
          margin: "0 auto 44px",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 800,
            color: "#3a8a5a",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          FAQ
        </p>
        <h2
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "#0f2a1c",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Frequently Asked Questions
        </h2>
        <p style={{ fontSize: 15.5, color: "#5a7a6a", lineHeight: 1.65 }}>
          Everything you need to know before getting started. Can't find your
          answer?{" "}
          <a
            href="#contact"
            style={{
              color: "#1a6030",
              fontWeight: 700,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Contact our team.
          </a>
        </p>
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {faqs.map((faq, i) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`faq-fade faq-item${isOpen ? " open" : ""}${visible ? " in" : ""}`}
              style={{ transitionDelay: `${i * 0.08 + 0.05}s` }}
            >
              <button
                className="faq-header"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
              >
                <span className="faq-num">{faq.number}</span>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-chevron-wrap">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div
                className={`faq-body${isOpen ? " open" : ""}`}
                style={{
                  maxHeight: isOpen
                    ? `${answerRefs.current[faq.id]?.scrollHeight ?? 200}px`
                    : "0px",
                }}
              >
                <div
                  ref={(el) => {
                    answerRefs.current[faq.id] = el;
                  }}
                  className="faq-answer"
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
