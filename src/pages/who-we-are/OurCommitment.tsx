import { useNavigate } from "react-router-dom";

const btnGrad  = "linear-gradient(90deg, #284e37 0%, #8aad70 100%)";
const heroGrad = `radial-gradient(circle at 88% 50%, rgba(0,222,119,0.92) 0%, rgba(0,188,97,0.7) 26%, rgba(0,92,50,0.35) 48%, transparent 68%), linear-gradient(115deg, #001c12 0%, #062817 34%, #09341c 55%, #006c3a 78%, #02d477 100%)`;

const pillars = [
  { icon:"❤️", title:"Caring is at the Heart", desc:"Whether you need support in your home, respite care, disability services or community activities, we are here to assist you every step of the way." },
  { icon:"🗣️", title:"Openness in Communication", desc:"Residents, clients, families, staff and volunteers are encouraged to discuss issues and concerns freely. Our staff are supported to assist, guide, and engender trust." },
  { icon:"🤝", title:"Person-Centred Model", desc:"We provide person-centred care, respecting individual needs, preferences, and diversity. Clients are active partners in their care, from assessment to decision-making." },
  { icon:"🏥", title:"Strong Clinical Focus", desc:"Our care model has a strong clinical focus, with registered and enrolled nurses supporting aged care homes, in-home care, quality and risk, and clinical innovation." },
];

const standards = [
  { title:"NDIS Quality & Safeguards", items:["Full NDIS registration maintained","Regular compliance audits","Participant safety frameworks","Incident reporting systems","Worker screening verified","Practice standards upheld"] },
  { title:"My Aged Care Standards", items:["Charter of Aged Care Rights aligned","Rights and dignity in all care","Government-funded service approval","Regular quality reviews","Transparent complaints process","Consumer-directed care"] },
];

const rights = [
  "Safe and high-quality care and services",
  "Be treated with dignity and respect",
  "Have your identity, culture and diversity valued",
  "Live without abuse and neglect",
  "Be informed about your care",
  "Access all services you are eligible for",
  "Be listened to and understood",
  "Have control over and make choices about your care",
  "Have independence in your daily life",
  "Be included in your community",
];

export default function OurCommitment() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily:"'Nunito Sans',Arial,sans-serif", background:"#ffffff" }}>

      {/* ── HERO ── */}
      <section style={{ background:heroGrad, padding:"80px 5%", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", right:-80, top:-100, width:400, height:400, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.18)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", left:-140, bottom:-180, width:480, height:480, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.1)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2, display:"grid", gridTemplateColumns:"1fr 300px", gap:48, alignItems:"center" }}>
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#355d45", color:"#fff", fontSize:10, fontWeight:800, padding:"5px 16px", borderRadius:999, marginBottom:20, letterSpacing:"0.08em", textTransform:"uppercase" }}>
              🛡️ Our Commitment
            </div>
            <h1 style={{ margin:"0 0 18px", color:"#fff", fontWeight:900, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.15 }}>
              Caring is at the Heart of Everything We Do
            </h1>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.75, margin:"0 0 32px", maxWidth:580 }}>
              Whether you need support in your home or an aged care home, respite care, disability services or activities that connect you with your local community — we are here to assist you every step of the way.
            </p>
            <button type="button" onClick={()=>navigate("/who-we-are/contact")} style={{ height:44, border:0, borderRadius:999, cursor:"pointer", background:btnGrad, color:"#fff", fontSize:13, fontWeight:800, padding:"0 28px", fontFamily:"'Nunito Sans',Arial,sans-serif", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Talk to Our Team →
            </button>
          </div>
          <div style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:18, padding:"32px 28px", position:"relative", zIndex:1 }}>
            <div style={{ fontSize:"2.8rem", fontWeight:900, color:"#fff", lineHeight:1, marginBottom:8 }}>Quality</div>
            <div style={{ fontSize:14, fontWeight:800, color:"rgba(255,255,255,0.9)", marginBottom:14 }}>Our Promise</div>
            <div style={{ fontSize:13, color:"rgba(255,255,255,0.65)", lineHeight:1.65 }}>NDIS compliant · Aged Care standards · Continuous improvement · Transparent pricing</div>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ── */}
      <section style={{ background:"#e9e9e9", padding:"12px 5% 52px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", maxWidth:680, margin:"0 auto 36px" }}>
            <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>OUR MODEL OF CARE</p>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:900, color:"#24443b", margin:"0 0 14px" }}>Our Model of Care</h2>
            <p style={{ fontSize:15, color:"#444", lineHeight:1.65 }}>We provide person-centred care, respecting individual needs, preferences, and diversity. Clients are active partners in their care, from assessment to decision-making.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 }}>
            {pillars.map(p => (
              <div key={p.title}
                style={{ background:"#0b3c2b", borderRadius:16, border:"2px solid #49a760", padding:"30px 26px", transition:"transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 18px 38px rgba(0,70,40,0.22)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                <div style={{ fontSize:"1.8rem", marginBottom:14 }}>{p.icon}</div>
                <h3 style={{ fontSize:19, fontWeight:800, color:"#fff", margin:"0 0 10px" }}>{p.title}</h3>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.85)", lineHeight:1.65, margin:0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARDS ── */}
      <section style={{ background:"#f5f5f5", padding:"68px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>NDIS &amp; AGED CARE COMPLIANCE</p>
          <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, color:"#25433A", margin:"0 0 40px", lineHeight:1.15 }}>Standards We Uphold</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, alignItems:"start" }}>
            {standards.map(s => (
              <div key={s.title} style={{ background:"#d7ebcc", border:"1px solid #b9d3aa", borderRadius:14, padding:"36px 32px" }}>
                <h3 style={{ fontSize:"1.2rem", fontWeight:800, color:"#00442d", margin:"0 0 20px" }}>{s.title}</h3>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  {s.items.map(it=>(
                    <div key={it} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:13.5, color:"#244438", lineHeight:1.5 }}>
                      <span style={{ width:20, height:20, borderRadius:"50%", background:"linear-gradient(90deg,#234638 0%,#8dbb78 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#fff", fontWeight:800, flexShrink:0, marginTop:1 }}>✓</span>
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHARTER OF RIGHTS ── */}
      <section style={{ background:"#ffffff", padding:"68px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"center" }}>
            <div>
              <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>CHARTER OF AGED CARE RIGHTS</p>
              <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, color:"#25433A", margin:"0 0 14px", lineHeight:1.15 }}>Your Rights Are Central to Our Care</h2>
              <p style={{ fontSize:14.5, color:"#111", lineHeight:1.8, margin:"0 0 24px" }}>
                The Charter of Aged Care Rights safeguards the rights of individuals receiving aged care services funded by the Australian Government. It is a legal framework that ensures respect and dignity in care. Continuity Care upholds every one of these rights.
              </p>
              <button type="button" onClick={()=>navigate("/who-we-are/contact")} style={{ height:44, border:0, borderRadius:999, cursor:"pointer", background:btnGrad, color:"#fff", fontSize:13, fontWeight:800, padding:"0 28px", fontFamily:"'Nunito Sans',Arial,sans-serif", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)" }}>
                Learn More →
              </button>
            </div>
            <div>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
                {rights.map(r=>(
                  <li key={r} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:14, color:"#333", lineHeight:1.6, padding:"10px 14px", background:"#f5f5f5", borderRadius:10, border:"1px solid rgba(0,68,45,0.07)" }}>
                    <span style={{ width:22, height:22, borderRadius:"50%", background:"#CEE0C2", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:"#00442d", fontWeight:900, marginTop:1 }}>✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:"#ffffff", padding:"0 5% 80px" }}>
        <div style={{ maxWidth:700, margin:"0 auto", background:"linear-gradient(110deg,#00442d 0%,#00663f 45%,#00c875 100%)", borderRadius:14, padding:"44px 40px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", left:-60, top:-60, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.1),transparent 65%)", pointerEvents:"none" }}/>
          <h2 style={{ margin:"0 0 12px", fontSize:"clamp(1.5rem,2.5vw,2rem)", fontWeight:900, color:"#fff", position:"relative", zIndex:1 }}>Ready to Experience the Difference?</h2>
          <p style={{ margin:"0 0 26px", fontSize:15, color:"rgba(255,255,255,0.85)", lineHeight:1.65, position:"relative", zIndex:1 }}>Our commitment to quality, compliance and compassion sets us apart. Talk to our team today.</p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", position:"relative", zIndex:1 }}>
            <button type="button" onClick={()=>navigate("/who-we-are/contact")} style={{ height:44, border:0, borderRadius:999, background:"#fff", color:"#234638", fontSize:14, fontWeight:700, padding:"0 28px", cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif" }}>Contact Us</button>
            <button type="button" onClick={()=>navigate("/who-we-are/our-leadership")} style={{ height:44, border:0, borderRadius:999, background:btnGrad, color:"#fff", fontSize:14, fontWeight:800, padding:"0 28px", cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)" }}>Meet Our Leaders →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
