import { useEffect, useRef, useState } from "react";

type Slide = {
  id: number;
  headline: string[];
  highlight: string;
  description: string;
  image: string;
  tags: string[];
  stats: { value: string; label: string }[];
};

const slides: Slide[] = [
  {
    id: 1,
    headline: ["Compassionate care", "that helps you"],
    highlight: "live independently",
    description:
      "We support individuals and families with disability care, in-home services, nursing, and care coordination - making it easier to access the right support with confidence, clarity, and continuity.",
    image: "/Rectangle_21.png",
    tags: ["NDIS Registered", "Personalised Support", "In-Home Services", "Qualified Care Team"],
    stats: [
      { value: "2,400+", label: "Client Support" },
      { value: "4.9/5",  label: "Average satisfaction" },
      { value: "24 hrs", label: "Typical callback time" },
    ],
  },
  {
    id: 2,
    headline: ["Professional nursing", "care at home"],
    highlight: "when you need it most",
    description:
      "Our registered nurses deliver expert medical care in the comfort of your own home. From wound care to chronic disease management, we bring the clinic to you.",
    image: "/Rectangle_23.png",
    tags: ["Registered Nurses", "24/7 Support", "Medication Management", "NDIS Approved"],
    stats: [
      { value: "500+", label: "Nursing Staff" },
      { value: "98%",  label: "Patient Satisfaction" },
      { value: "1 hr", label: "Avg response time" },
    ],
  },
  {
    id: 3,
    headline: ["Empowering lives", "through NDIS"],
    highlight: "support & coordination",
    description:
      "Navigating the NDIS can be complex. Our experienced coordinators guide you through every step, ensuring you receive the support funding and services you deserve.",
    image: "/Rectangle_24.png",
    tags: ["NDIS Registered", "Plan Management", "Support Coordination", "Goal Planning"],
    stats: [
      { value: "1,200+", label: "NDIS Participants" },
      { value: "100%",   label: "Plan Utilisation" },
      { value: "48 hrs", label: "Plan review time" },
    ],
  },
];

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default function HeroSlider() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const slide = slides[current];

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    window.setTimeout(() => { setCurrent(index); setAnimating(false); }, 350);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setAnimating(true);
      window.setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 350);
    }, 5000);
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, []);

  return (
    <>
      <style>{`
        .cc-hero {
          position: relative; min-height: calc(100vh - 86px); overflow: hidden;
          display: flex; align-items: center;
          background-image:
            linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.78) 27%, rgba(255,255,255,0.20) 54%, rgba(255,255,255,0.02) 100%),
            linear-gradient(0deg, rgba(94,177,84,0.48) 0%, rgba(94,177,84,0.22) 18%, rgba(94,177,84,0.00) 46%),
            url("${slide.image}");
          background-size: cover; background-position: center right; background-repeat: no-repeat;
          transition: background-image 0.45s ease;
          font-family: Arial, Helvetica, sans-serif;
        }
        .cc-hero-wrap { width:100%; max-width:1320px; margin:0 auto; padding:70px 36px 80px; position:relative; z-index:2; }
        .cc-hero-content { max-width:640px; transition: opacity 0.35s ease, transform 0.35s ease; }
        .cc-hero-content.fade-out { opacity:0; transform:translateY(10px); }
        .cc-hero-content.fade-in  { opacity:1; transform:translateY(0); }
        .cc-title { margin:0; color:#00442d; font-size:54px; font-weight:900; line-height:1.07; letter-spacing:-1px; }
        .cc-title span { display:block; }
        .cc-highlight { color:#168545; }
        .cc-desc { max-width:610px; margin:28px 0 34px; color:#111111; font-size:16px; line-height:1.65; font-weight:400; }
        .cc-btn-row { display:flex; align-items:center; gap:14px; flex-wrap:wrap; margin-bottom:18px; }
        .cc-primary-btn, .cc-secondary-btn {
          height:42px; border:0; outline:0; border-radius:999px; background:#00442d; color:#ffffff;
          cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:10px;
          font-size:12px; font-weight:800; font-family:Arial,Helvetica,sans-serif;
          transition:transform 0.22s ease, opacity 0.22s ease; white-space:nowrap;
        }
        .cc-primary-btn { padding:0 31px; } .cc-secondary-btn { padding:0 28px; }
        .cc-primary-btn:hover,.cc-secondary-btn:hover { transform:translateY(-2px); opacity:0.95; }
        .cc-primary-btn svg,.cc-secondary-btn svg { width:15px; height:15px; flex-shrink:0; }
        .cc-tags { display:flex; align-items:center; gap:12px; flex-wrap:wrap; max-width:560px; margin-bottom:36px; }
        .cc-tag {
          min-height:29px; display:inline-flex; align-items:center; gap:7px; border-radius:999px;
          background:rgba(255,255,255,0.88); color:#00442d; padding:0 14px; font-size:10px; font-weight:800;
          box-shadow:0 4px 14px rgba(0,68,45,0.08);
        }
        .cc-tag-icon { width:17px;height:17px;border-radius:50%;background:#e8f3e2;color:#00442d;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0; }
        .cc-tag-icon svg { width:11px;height:11px; }
        .cc-stats { display:flex;align-items:flex-start;gap:56px;flex-wrap:wrap; }
        .cc-stat-value { display:block;color:#168545;font-size:29px;font-weight:900;line-height:1;margin-bottom:4px; }
        .cc-stat-label { display:block;color:#111111;font-size:11px;font-weight:500; }
        .cc-dots { position:absolute;left:50%;bottom:28px;transform:translateX(-50%);display:flex;align-items:center;gap:7px;z-index:4; }
        .cc-dot { width:8px;height:8px;border-radius:50%;border:0;background:rgba(0,68,45,0.3);cursor:pointer;padding:0; }
        .cc-dot.active { width:11px;height:11px;background:#00442d; }
        @media(max-width:820px){
          .cc-hero { min-height:calc(100vh - 86px); }
          .cc-hero-wrap { padding:52px 22px 86px; }
          .cc-title{font-size:38px;} .cc-desc{font-size:14px;} .cc-stats{gap:28px;}
        }
        @media(max-width:520px){
          .cc-title{font-size:31px;} .cc-desc{font-size:13px;margin:22px 0 26px;}
          .cc-btn-row{flex-direction:column;max-width:250px;}
          .cc-primary-btn,.cc-secondary-btn{width:100%;}
        }
      `}</style>

      <section className="cc-hero">
        <div className="cc-hero-wrap">
          <div className={`cc-hero-content ${animating ? "fade-out" : "fade-in"}`}>
            <h1 className="cc-title">
              {slide.headline.map((line) => <span key={line}>{line}</span>)}
              <span className="cc-highlight">{slide.highlight}</span>
            </h1>
            <p className="cc-desc">{slide.description}</p>
            <div className="cc-btn-row">
              <button type="button" className="cc-primary-btn">Start Your Care Journey <IconArrow /></button>
              <button type="button" className="cc-secondary-btn"><IconPhone /> Contact Us</button>
            </div>
            <div className="cc-tags">
              {slide.tags.map((tag) => (
                <span key={tag} className="cc-tag">
                  <span className="cc-tag-icon"><IconCheck /></span>{tag}
                </span>
              ))}
            </div>
            <div className="cc-stats">
              {slide.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="cc-stat-value">{stat.value}</span>
                  <span className="cc-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cc-dots">
          {slides.map((item, index) => (
            <button key={item.id} type="button" className={`cc-dot ${index === current ? "active" : ""}`}
              onClick={() => goTo(index)} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </section>
    </>
  );
}
