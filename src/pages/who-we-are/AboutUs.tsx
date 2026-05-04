import { useNavigate } from "react-router-dom";

const btnGrad  = "linear-gradient(90deg, #284e37 0%, #8aad70 100%)";
const heroGrad = `radial-gradient(circle at 88% 50%, rgba(0,222,119,0.92) 0%, rgba(0,188,97,0.7) 26%, rgba(0,92,50,0.35) 48%, transparent 68%), linear-gradient(115deg, #001c12 0%, #062817 34%, #09341c 55%, #006c3a 78%, #02d477 100%)`;

const stats = [
  { num: "2020", label: "Est. in Brisbane" },
  { num: "2,400+", label: "Clients Supported" },
  { num: "30+", label: "Years Combined Experience" },
  { num: "NDIS", label: "Registered Provider" },
];

const values = [
  {
    icon: "🌏",
    title: "Our Purpose",
    desc: "To create an inclusive world where human rights are realised — a world where people of all abilities come together to share in life's adventure.",
  },
  {
    icon: "🔭",
    title: "Our Vision",
    desc: "To be a leader in service delivery providing Continuity Care to those who need support to live as independent a life as they can.",
  },
  {
    icon: "💚",
    title: "Our Mission",
    desc: "To contribute to the well-being and health of our community whilst encouraging hope amongst those who have support needs.",
  },
  {
    icon: "⭐",
    title: "Our Values",
    desc: "To improve the lives of people with disability by prioritising their choices, promoting their rights and exploring possibilities together.",
  },
];

const whyUs = [
  { icon: "🔒", title: "No Hidden Costs", desc: "Transparent pricing with no joining or exit fees. More of your funding goes directly to the care you need." },
  { icon: "⏰", title: "Available Every Day", desc: "Our friendly team is available every day and night, including weekends and public holidays, to help you achieve your goals." },
  { icon: "🧡", title: "Person-Centred Care", desc: "Every client receives care that is personalised, tailored, and accounts for their life, surroundings, and preferences." },
  { icon: "🛡️", title: "Screened & Trained Staff", desc: "All staff are thoroughly screened and trained during our specialised onboarding process for best person-centred care." },
  { icon: "🤝", title: "Value-Based Support", desc: "We are confident you will receive Value Based, Person-Centred Care keeping you at the centre of everything we do." },
  { icon: "🌐", title: "Culturally Appropriate", desc: "We recognise the need for culturally appropriate support and provide this effectively for all backgrounds." },
];

const accreditations = [
  { name: "NDIS", label: "Registered Provider" },
  { name: "ACNC", label: "Registered Charity" },
  { name: "My Aged Care", label: "Approved Provider" },
  { name: "DVA", label: "Approved Provider" },
];

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Nunito Sans', Arial, sans-serif", background: "#ffffff" }}>

      {/* ── HERO ── */}
      <section style={{ background: heroGrad, padding: "80px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position:"absolute", right:-80, top:-100, width:400, height:400, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.18)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", left:-140, bottom:-180, width:480, height:480, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.1)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#355d45", color:"#fff", fontSize:10, fontWeight:800, padding:"5px 16px", borderRadius:999, marginBottom:20, letterSpacing:"0.08em", textTransform:"uppercase" }}>
            🏢 About Continuity Care
          </div>
          <h1 style={{ margin:"0 0 18px", color:"#fff", fontWeight:900, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.15, maxWidth:680 }}>
            Empowering Independence Through Compassionate Care and Seamless Navigation
          </h1>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.75, margin:"0 0 36px", maxWidth:600 }}>
            Continuity Care is a dedicated provider of disability and independent living services, offering comprehensive care coordination and navigation. Everything we do is focused on bridging the gap between clinical requirements and daily life, ensuring people with disabilities can live with dignity and independence.
          </p>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <button type="button" onClick={() => navigate("/who-we-are/contact")} style={{ height:44, border:0, borderRadius:999, cursor:"pointer", background:btnGrad, color:"#fff", fontSize:13, fontWeight:800, padding:"0 28px", fontFamily:"'Nunito Sans',Arial,sans-serif", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)", transition:"transform 0.22s" }}
              onMouseEnter={e=>(e.currentTarget.style.transform="translateY(-2px)")} onMouseLeave={e=>(e.currentTarget.style.transform="none")}>
              Get in Touch →
            </button>
            <button type="button" onClick={() => navigate("/who-we-are/our-story")} style={{ height:44, border:"1.5px solid rgba(255,255,255,0.32)", borderRadius:999, background:"transparent", color:"rgba(255,255,255,0.9)", fontSize:13, fontWeight:700, padding:"0 26px", cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif" }}>
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background:"#e9e9e9", padding:"0 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"rgba(0,0,0,0.06)", borderRadius:0 }}>
          {stats.map(s => (
            <div key={s.num} style={{ background:"#e9e9e9", padding:"32px 24px", textAlign:"center" }}>
              <div style={{ fontSize:"2.2rem", fontWeight:900, color:"#00442d", lineHeight:1, marginBottom:5 }}>{s.num}</div>
              <div style={{ fontSize:13, color:"#444", fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PURPOSE / VISION / MISSION / VALUES ── */}
      <section style={{ background:"#e9e9e9", padding:"8px 5% 52px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", maxWidth:680, margin:"0 auto 36px" }}>
            <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>VISION TO VICTORY</p>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:900, color:"#24443b", margin:"0 0 14px", lineHeight:1.12 }}>Dedicated to Quality Care with Compassion and Respect</h2>
            <p style={{ fontSize:15, color:"#444", lineHeight:1.65, margin:0 }}>
              Continuity Care is a not-for-profit organisation and a registered charity with the Australian Charities and Not-for-profit Commission. Our client-centred approach is at the core of everything we do.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 }}>
            {values.map(v => (
              <div key={v.title}
                style={{ background:"#0b3c2b", borderRadius:16, border:"2px solid #49a760", padding:"30px 26px", transition:"transform 0.25s ease, box-shadow 0.25s ease", cursor:"default" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 18px 38px rgba(0,70,40,0.22)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                <div style={{ fontSize:"1.8rem", marginBottom:14 }}>{v.icon}</div>
                <h3 style={{ fontSize:19, fontWeight:800, color:"#fff", margin:"0 0 10px" }}>{v.title}</h3>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.85)", lineHeight:1.65, margin:0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background:"#f5f5f5", padding:"68px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto 44px" }}>
            <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>WHY CHOOSE US</p>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)", fontWeight:900, color:"#24443b", margin:"0 0 14px" }}>Why Choose Continuity Care?</h2>
            <p style={{ fontSize:15, color:"#444", lineHeight:1.65 }}>Enjoy more value, choice and freedom to live life on your terms. With some of the lowest fees in the industry, more of your funding goes directly to the care and support you need.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ background:"#d7ebcc", border:"1px solid #b9d3aa", borderRadius:14, padding:"26px 24px", transition:"transform 0.22s, box-shadow 0.22s" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(0,68,45,0.12)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                <div style={{ fontSize:"1.6rem", marginBottom:12 }}>{w.icon}</div>
                <h3 style={{ fontSize:16, fontWeight:800, color:"#00442d", margin:"0 0 8px" }}>{w.title}</h3>
                <p style={{ fontSize:14, color:"#244438", lineHeight:1.65, margin:0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ── */}
      <section style={{ background:"#ffffff", padding:"60px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px", textAlign:"center" }}>ACCREDITATIONS</p>
          <h2 style={{ fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:900, color:"#24443b", textAlign:"center", margin:"0 0 36px" }}>Registered, Accredited & Trusted</h2>
          <div style={{ display:"flex", gap:20, flexWrap:"wrap", justifyContent:"center" }}>
            {accreditations.map(a => (
              <div key={a.name} style={{ background:"#e9e9e9", border:"2px solid #CEE0C2", borderRadius:14, padding:"24px 36px", textAlign:"center", minWidth:160 }}>
                <div style={{ fontSize:22, fontWeight:900, color:"#00442d", marginBottom:6 }}>{a.name}</div>
                <div style={{ fontSize:12, color:"#555", fontWeight:600 }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:"#ffffff", padding:"0 5% 80px" }}>
        <div style={{ maxWidth:700, margin:"0 auto", background:"linear-gradient(110deg,#00442d 0%,#00663f 45%,#00c875 100%)", borderRadius:14, padding:"44px 40px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", left:-60, top:-60, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.1),transparent 65%)", pointerEvents:"none" }}/>
          <h2 style={{ margin:"0 0 12px", fontSize:"clamp(1.5rem,2.5vw,2rem)", fontWeight:900, color:"#fff", position:"relative", zIndex:1 }}>Want to Learn More?</h2>
          <p style={{ margin:"0 0 26px", fontSize:15, color:"rgba(255,255,255,0.85)", lineHeight:1.65, position:"relative", zIndex:1 }}>If you would like more information about our services or who we are, our friendly team is here to help.</p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", position:"relative", zIndex:1 }}>
            <button type="button" onClick={()=>navigate("/who-we-are/contact")} style={{ height:44, border:0, borderRadius:999, background:"#fff", color:"#234638", fontSize:14, fontWeight:700, padding:"0 28px", cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif", transition:"transform 0.22s" }}
              onMouseEnter={e=>(e.currentTarget.style.transform="translateY(-2px)")} onMouseLeave={e=>(e.currentTarget.style.transform="none")}>
              Contact Us
            </button>
            <button type="button" onClick={()=>navigate("/who-we-are/our-commitment")} style={{ height:44, border:"1.5px solid rgba(255,255,255,0.35)", borderRadius:999, background:"transparent", color:"rgba(255,255,255,0.9)", fontSize:14, fontWeight:700, padding:"0 26px", cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif" }}>
              Our Commitment →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
