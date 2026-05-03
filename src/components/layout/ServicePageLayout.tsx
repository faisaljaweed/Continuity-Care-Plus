import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Types ──────────────────────────────────────────────────── */
export interface ServiceCard  { icon: string; title: string; desc: string; }
export interface StepItem     { title: string; desc: string; }
export interface FAQItem      { q: string; a: string; }

export interface ServicePageProps {
  badge:        string;
  heroTitle:    string;
  heroDesc:     string;
  heroCTA1?:    string;
  heroCTA2?:    string;
  heroStatNum?: string;
  heroStatLabel?: string;
  heroStatSub?:   string;

  section1Label?: string;
  section1Title?: string;
  section1Lead?:  string;
  cards?:         ServiceCard[];

  section2Label?: string;
  section2Title?: string;
  section2Body?:  string;
  checklistLeft?: string[];
  steps?:         StepItem[];
  fundingLeft?:   { title: string; items: string[] };
  fundingRight?:  { title: string; items: string[] };

  darkTitle?:     string;
  darkBody?:      string;
  darkChecklist?: string[];

  faqs?:    FAQItem[];
  ctaTitle?:string;
  ctaSub?:  string;
  ctaCTA1?: string;
  ctaCTA2?: string;
}

/* ── FAQ Accordion ─────────────────────────────────────────── */
function Accordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          background: "#deeede",
          borderRadius: 14,
          overflow: "hidden",
          border: `1.5px solid ${open===i ? "#a8cca8" : "transparent"}`,
          transition: "border-color 0.2s",
          boxShadow: open===i ? "0 6px 28px rgba(26,90,50,0.11)" : "none",
        }}>
          <button type="button" onClick={() => setOpen(open===i ? null : i)}
            style={{
              width:"100%", display:"flex", alignItems:"center",
              justifyContent:"space-between", gap:14,
              padding:"18px 22px", background:"none", border:"none",
              cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif",
              fontSize:15.5, fontWeight:700, color:"#0f2a1c", textAlign:"left",
            }}
          >
            <span style={{ display:"flex", alignItems:"center", gap:12 }}>
              <span style={{
                width:34, height:34, borderRadius:"50%", background:"#ffffff",
                color:"#3a6a4a", display:"inline-flex", alignItems:"center",
                justifyContent:"center", fontSize:12, fontWeight:900,
                flexShrink:0, boxShadow:"0 4px 12px rgba(26,90,50,0.08)",
              }}>
                {String(i+1).padStart(2,"0")}
              </span>
              {it.q}
            </span>
            <span style={{
              width:34, height:34, borderRadius:"50%",
              background:"rgba(255,255,255,0.7)", border:"1.5px solid rgba(255,255,255,0.9)",
              display:"flex", alignItems:"center", justifyContent:"center",
              flexShrink:0, color:"#3a6a4a",
              transform: open===i ? "rotate(180deg)" : "none", transition:"transform 0.32s ease",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </button>
          <div style={{ maxHeight: open===i ? 400 : 0, overflow:"hidden", transition:"max-height 0.38s cubic-bezier(0.4,0,0.2,1)" }}>
            <div style={{ padding:"4px 22px 22px 70px", fontSize:14, color:"#3a5a4a", lineHeight:1.75, fontWeight:500 }}>
              {it.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main Layout ────────────────────────────────────────────── */
export default function ServicePageLayout(p: ServicePageProps) {
  const navigate = useNavigate();

  /* Exact gradients from home page */
  const heroGrad = `
    radial-gradient(circle at 88% 50%, rgba(0, 222, 119, 0.96) 0%, rgba(0, 188, 97, 0.76) 26%, rgba(0, 92, 50, 0.38) 48%, transparent 68%),
    linear-gradient(115deg, #001c12 0%, #062817 34%, #09341c 55%, #006c3a 78%, #02d477 100%)
  `;
  const btnGrad   = "linear-gradient(90deg, #284e37 0%, #8aad70 100%)";
  const badgeGrad = "linear-gradient(90deg, #234638 0%, #8dbb78 100%)";
  const ctaGrad   = "linear-gradient(110deg, #00442d 0%, #00663f 45%, #00c875 100%)";

  return (
    <div style={{ fontFamily:"'Nunito Sans',Arial,sans-serif", background:"#ffffff" }}>

      {/* ══ HERO — matches scj-section dark green gradient ═══════ */}
      <section style={{
        background: heroGrad,
        padding: "80px 36px 80px",
        position: "relative", overflow: "hidden",
        fontFamily: "'Nunito Sans',Arial,sans-serif",
      }}>
        {/* Decorative rings — matches scj-section::before/after */}
        <div style={{
          position:"absolute", left:-230, bottom:-360,
          width:720, height:720, borderRadius:"50%",
          border:"1px solid rgba(255,255,255,0.18)", pointerEvents:"none",
          boxShadow:"18px 18px 0 -17px rgba(255,255,255,0.14), 36px 36px 0 -35px rgba(255,255,255,0.1)",
        }}/>
        <div style={{
          position:"absolute", right:-115, top:-355,
          width:560, height:560, borderRadius:"50%",
          border:"1px solid rgba(255,255,255,0.28)", pointerEvents:"none",
          boxShadow:"16px 16px 0 -15px rgba(255,255,255,0.22), 32px 32px 0 -31px rgba(255,255,255,0.18)",
        }}/>

        <div style={{
          maxWidth:1320, margin:"0 auto", position:"relative", zIndex:2,
          display:"grid", gridTemplateColumns: p.heroStatNum ? "1fr 320px" : "1fr",
          gap:48, alignItems:"center",
        }}>
          {/* Left */}
          <div>
            {/* Badge — matches scj-badge style */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"#355d45", color:"#ffffff",
              fontSize:10, fontWeight:800, padding:"5px 16px",
              borderRadius:999, marginBottom:20, letterSpacing:"0.06em",
              textTransform:"uppercase",
            }}>
              {p.badge}
            </div>

            <h1 style={{
              margin:"0 0 18px", color:"#ffffff", fontWeight:900,
              fontSize:"clamp(1.9rem, 4vw, 3rem)", lineHeight:1.15,
              fontFamily:"'Nunito Sans',Arial,sans-serif",
            }}>
              {p.heroTitle}
            </h1>

            <p style={{
              fontSize:15, color:"rgba(255,255,255,0.82)", lineHeight:1.75,
              margin:"0 0 32px", maxWidth:580, fontWeight:400,
            }}>
              {p.heroDesc}
            </p>

            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              {/* Primary button — matches cc-primary-btn / scj-continue-btn */}
              <button type="button" onClick={() => navigate("/contact")} style={{
                height:44, border:0, borderRadius:999, cursor:"pointer",
                background: btnGrad,
                color:"#ffffff", display:"inline-flex", alignItems:"center", gap:9,
                fontSize:13, fontWeight:800, padding:"0 28px",
                fontFamily:"'Nunito Sans',Arial,sans-serif",
                boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)",
                transition:"transform 0.22s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform="translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform="none")}
              >
                {p.heroCTA1 || "Enquire Today"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </button>

              {p.heroCTA2 && (
                <button type="button" style={{
                  height:44, border:"1.5px solid rgba(255,255,255,0.32)", borderRadius:999,
                  background:"transparent", color:"rgba(255,255,255,0.9)",
                  fontSize:13, fontWeight:700, padding:"0 26px", cursor:"pointer",
                  fontFamily:"'Nunito Sans',Arial,sans-serif",
                  transition:"background 0.18s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background="rgba(255,255,255,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.background="transparent")}
                >
                  {p.heroCTA2}
                </button>
              )}
            </div>
          </div>

          {/* Right stat box */}
          {p.heroStatNum && (
            <div style={{
              background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)",
              borderRadius:18, padding:"36px 32px", position:"relative", zIndex:1,
            }}>
              <div style={{ fontSize:"3.2rem", fontWeight:900, color:"#ffffff", lineHeight:1, marginBottom:8 }}>
                {p.heroStatNum}
              </div>
              <div style={{ fontSize:14, fontWeight:800, color:"rgba(255,255,255,0.9)", marginBottom:14 }}>
                {p.heroStatLabel}
              </div>
              {p.heroStatSub && (
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.62)", lineHeight:1.65 }}>
                  {p.heroStatSub}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══ CARDS SECTION — matches services-wrapper / service-card style ════ */}
      {p.cards && p.cards.length > 0 && (
        <section style={{ width:"100%", padding:"12px", background:"#ffffff" }}>
          {/* Grey wrapper with rounded corners — matches services-wrapper */}
          <div style={{
            background:"#e9e9e9", borderRadius:32, padding:"52px 36px 48px",
            maxWidth:1320, margin:"0 auto",
          }}>
            <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto 40px" }}>
              {p.section1Label && (
                <p style={{ fontSize:17, fontWeight:700, color:"#168545", margin:"0 0 8px" }}>
                  {p.section1Label}
                </p>
              )}
              {p.section1Title && (
                <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, color:"#24443b", margin:"0 0 14px", lineHeight:1.12 }}>
                  {p.section1Title}
                </h2>
              )}
              {p.section1Lead && (
                <p style={{ fontSize:15, color:"#111111", lineHeight:1.65, margin:0 }}>
                  {p.section1Lead}
                </p>
              )}
            </div>

            {/* Cards — matches service-card dark style */}
            <div style={{
              display:"grid",
              gridTemplateColumns: `repeat(${Math.min(p.cards.length, 3)}, 1fr)`,
              gap:22, maxWidth:1300, margin:"0 auto",
            }}>
              {p.cards.map((c, idx) => (
                <div key={idx}
                  style={{
                    background:"#0b3c2b", borderRadius:16,
                    border:"2px solid #49a760",
                    padding:"30px 26px 28px",
                    transition:"transform 0.25s ease, box-shadow 0.25s ease",
                    cursor:"default",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 18px 38px rgba(0,70,40,0.22)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <div style={{ fontSize:"1.8rem", marginBottom:14 }}>{c.icon}</div>
                  <h3 style={{ fontSize:20, fontWeight:800, color:"#ffffff", margin:"0 0 10px", lineHeight:1.2 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize:14, color:"rgba(255,255,255,0.88)", lineHeight:1.65, margin:0 }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ TWO-COL SECTION ═══════════════════════════════════════ */}
      {(p.section2Title || p.checklistLeft || p.steps) && (
        <section style={{ background:"#f5f5f5", padding:"68px 36px" }}>
          <div style={{
            maxWidth:1320, margin:"0 auto",
            display:"grid", gridTemplateColumns: p.darkTitle ? "1fr 1fr" : "1fr",
            gap:52, alignItems:"start",
          }}>
            {/* Left column */}
            <div>
              {p.section2Label && (
                <p style={{ fontSize:13, fontWeight:800, color:"#2B8E3B", letterSpacing:"0.07em", textTransform:"uppercase", margin:"0 0 10px" }}>
                  {p.section2Label}
                </p>
              )}
              {p.section2Title && (
                <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)", fontWeight:800, color:"#25433A", margin:"0 0 14px", lineHeight:1.15 }}>
                  {p.section2Title}
                </h2>
              )}
              {p.section2Body && (
                <p style={{ fontSize:14.5, color:"#111111", lineHeight:1.75, margin:"0 0 28px" }}>
                  {p.section2Body}
                </p>
              )}

              {/* Steps — matches ptbc-card numbered style */}
              {p.steps && (
                <div>
                  {p.steps.map((s, i) => (
                    <div key={i} style={{
                      display:"flex", gap:18, padding:"20px 0",
                      borderBottom: i < p.steps!.length-1 ? "1px solid rgba(0,68,45,0.1)" : "none",
                    }}>
                      <div style={{
                        width:40, height:40, borderRadius:"50%",
                        background: btnGrad,
                        color:"#ffffff", display:"flex", alignItems:"center",
                        justifyContent:"center", fontWeight:900, fontSize:14,
                        flexShrink:0, boxShadow:"0 4px 12px rgba(0,68,45,0.2)",
                      }}>
                        {String(i+1).padStart(2,"0")}
                      </div>
                      <div>
                        <h4 style={{ fontSize:15, fontWeight:800, color:"#1a3a2a", margin:"0 0 5px" }}>{s.title}</h4>
                        <p style={{ fontSize:13.5, color:"#444", lineHeight:1.65, margin:0 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Checklist — matches wcc features */}
              {p.checklistLeft && (
                <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
                  {p.checklistLeft.map(it => (
                    <li key={it} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:14, color:"#333", lineHeight:1.6 }}>
                      <span style={{
                        width:22, height:22, borderRadius:"50%",
                        background:"#CEE0C2", flexShrink:0,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize:10, color:"#00442d", fontWeight:900, marginTop:1,
                      }}>✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}

              {/* Funding boxes */}
              {(p.fundingLeft || p.fundingRight) && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginTop:24 }}>
                  {[p.fundingLeft, p.fundingRight].filter(Boolean).map((box, bi) => box && (
                    <div key={bi} style={{
                      border:"1.5px solid #CEE0C2", borderRadius:14,
                      padding:"22px", background:"#ffffff",
                    }}>
                      <h4 style={{ fontSize:14.5, fontWeight:800, color:"#1a3a2a", margin:"0 0 12px" }}>{box.title}</h4>
                      {box.items.map(it => (
                        <div key={it} style={{ display:"flex", gap:8, fontSize:13, color:"#444", lineHeight:1.55, marginBottom:8 }}>
                          <span style={{ color:"#168545", fontWeight:800, flexShrink:0 }}>→</span>{it}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: dark panel — matches wcc testimonial / network cards style */}
            {p.darkTitle && (
              <div style={{
                background:"#d7ebcc",
                border:"1px solid #b9d3aa",
                borderRadius:14, padding:"38px 40px",
              }}>
                <h3 style={{ fontSize:"1.4rem", fontWeight:800, color:"#00442d", margin:"0 0 14px", lineHeight:1.2 }}>
                  {p.darkTitle}
                </h3>
                {p.darkBody && (
                  <p style={{ fontSize:14, color:"#111111", lineHeight:1.75, margin:"0 0 28px" }}>
                    {p.darkBody}
                  </p>
                )}
                {p.darkChecklist && (
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    {p.darkChecklist.map(it => (
                      <div key={it} style={{ display:"flex", alignItems:"flex-start", gap:9, fontSize:13.5, color:"#244438", lineHeight:1.5 }}>
                        {/* Stat badge style dot */}
                        <span style={{
                          width:22, height:22, borderRadius:"50%",
                          background: badgeGrad,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          fontSize:9, color:"#ffffff", fontWeight:800, flexShrink:0, marginTop:1,
                        }}>✓</span>
                        {it}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ══ FAQ SECTION — matches Home_Section9 exactly ══════════ */}
      {p.faqs && p.faqs.length > 0 && (
        <section style={{ background:"#ffffff", padding:"80px 24px 90px" }}>
          <div style={{ maxWidth:760, margin:"0 auto" }}>
            <p style={{ fontSize:13, fontWeight:800, color:"#3a8a5a", letterSpacing:"0.07em", textTransform:"uppercase", margin:"0 0 10px", textAlign:"center" }}>
              FAQ
            </p>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:900, color:"#0f2a1c", lineHeight:1.15, margin:"0 0 14px", textAlign:"center" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize:15, color:"#5a7a6a", lineHeight:1.65, textAlign:"center", margin:"0 0 40px" }}>
              Everything you need to know before getting started.
            </p>
            <Accordion items={p.faqs} />
          </div>
        </section>
      )}

      {/* ══ CTA BAR — matches Home_Section10 question-card + cta-section ═ */}
      <section style={{
        background:"#ffffff", padding:"0 20px 90px",
        fontFamily:"'Nunito Sans',Arial,sans-serif",
      }}>
        <div style={{
          maxWidth:720, margin:"0 auto",
          background: ctaGrad,
          borderRadius:14, padding:"40px 36px 38px",
          textAlign:"center", position:"relative", overflow:"hidden",
        }}>
          {/* Radial highlight */}
          <div style={{
            position:"absolute", left:-80, top:-80, width:220, height:220, borderRadius:"50%",
            background:"radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)", pointerEvents:"none",
          }}/>

          <h2 style={{ margin:"0 0 12px", fontSize:"clamp(1.5rem,2.5vw,2rem)", fontWeight:900, color:"#ffffff", position:"relative", zIndex:1 }}>
            {p.ctaTitle || "Ready to Get Started?"}
          </h2>
          <p style={{ margin:"0 0 26px", fontSize:15, color:"rgba(255,255,255,0.88)", lineHeight:1.65, position:"relative", zIndex:1 }}>
            {p.ctaSub || "Speak with our friendly Queensland team. No obligation."}
          </p>

          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", position:"relative", zIndex:1 }}>
            <button type="button" onClick={() => navigate("/contact")} style={{
              height:46, minWidth:190, border:0, borderRadius:999,
              background:"#ffffff", color:"#234638",
              display:"inline-flex", alignItems:"center", justifyContent:"center", gap:9,
              fontSize:14, fontWeight:700, cursor:"pointer",
              fontFamily:"'Nunito Sans',Arial,sans-serif",
              transition:"transform 0.25s ease",
            }}
              onMouseEnter={e => (e.currentTarget.style.transform="translateY(-2px)")}
              onMouseLeave={e => (e.currentTarget.style.transform="none")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z"/>
              </svg>
              {p.ctaCTA1 || "Call 1800 012 273"}
            </button>

            {p.ctaCTA2 && (
              <button type="button" style={{
                height:46, minWidth:170, border:0, borderRadius:999,
                background: btnGrad,
                color:"#ffffff",
                display:"inline-flex", alignItems:"center", justifyContent:"center",
                fontSize:14, fontWeight:800, cursor:"pointer",
                fontFamily:"'Nunito Sans',Arial,sans-serif",
                boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)",
                transition:"transform 0.25s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform="translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform="none")}
              >
                {p.ctaCTA2}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .sp-two-col-grid { grid-template-columns: 1fr !important; }
          .sp-cards-grid   { grid-template-columns: 1fr 1fr !important; }
          .sp-dark-check   { grid-template-columns: 1fr !important; }
          .sp-funding-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .sp-cards-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
