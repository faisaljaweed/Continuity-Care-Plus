import { useNavigate } from "react-router-dom";

const btnGrad  = "linear-gradient(90deg, #284e37 0%, #8aad70 100%)";
const heroGrad = `radial-gradient(circle at 88% 50%, rgba(0,222,119,0.92) 0%, rgba(0,188,97,0.7) 26%, rgba(0,92,50,0.35) 48%, transparent 68%), linear-gradient(115deg, #001c12 0%, #062817 34%, #09341c 55%, #006c3a 78%, #02d477 100%)`;

const milestones = [
  { year: "2017", title: "The Idea is Born", desc: "Founded from the idea of creating an environment where people living with a disability or health condition, and the clinicians that support them, were put first." },
  { year: "2018", title: "Building the Team", desc: "We assembled a passionate team of healthcare professionals, coordinators, and support workers committed to person-centred care." },
  { year: "2019", title: "NDIS Registration", desc: "Officially became a registered NDIS provider, opening our doors to support participants across Queensland with disability services." },
  { year: "2020", title: "Expanding Services", desc: "Launched Community Support at Home services across Brisbane communities, growing our team and our reach into regional areas." },
  { year: "2022", title: "Allied Health Launch", desc: "Introduced our allied health division — Occupational Therapy, Physiotherapy, Speech Pathology, and more — delivered at home and in community settings." },
  { year: "2024", title: "2,400+ Clients Served", desc: "Reached a major milestone of over 2,400 clients supported across Queensland, with a 4.9/5 average satisfaction rating from the people we serve." },
];

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily:"'Nunito Sans',Arial,sans-serif", background:"#ffffff" }}>

      {/* ── HERO ── */}
      <section style={{ background:heroGrad, padding:"80px 5% 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", right:-80, top:-100, width:400, height:400, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.18)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2, display:"grid", gridTemplateColumns:"1fr 280px", gap:48, alignItems:"center" }}>
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#355d45", color:"#fff", fontSize:10, fontWeight:800, padding:"5px 16px", borderRadius:999, marginBottom:20, letterSpacing:"0.08em", textTransform:"uppercase" }}>
              📖 Our Story
            </div>
            <h1 style={{ margin:"0 0 18px", color:"#fff", fontWeight:900, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.15 }}>
              Est. 2020 · Brisbane
            </h1>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.75, margin:"0 0 32px", maxWidth:580 }}>
              Continuity Care is an owner-operated business created for the purpose of providing a fresh, new perspective on Community Care — where we maintain continuation of care by staff with more than 30 years of combined experience.
            </p>
            <button type="button" onClick={()=>navigate("/who-we-are/about-us")} style={{ height:44, border:0, borderRadius:999, cursor:"pointer", background:btnGrad, color:"#fff", fontSize:13, fontWeight:800, padding:"0 28px", fontFamily:"'Nunito Sans',Arial,sans-serif", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              About Us →
            </button>
          </div>
          <div style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:18, padding:"32px 28px", zIndex:1, position:"relative" }}>
            <div style={{ fontSize:"3rem", fontWeight:900, color:"#fff", lineHeight:1, marginBottom:8 }}>2017</div>
            <div style={{ fontSize:14, fontWeight:800, color:"rgba(255,255,255,0.9)", marginBottom:14 }}>Founding Year</div>
            <div style={{ fontSize:13, color:"rgba(255,255,255,0.62)", lineHeight:1.65 }}>Started in Brisbane with a mission to put people first — participants and clinicians alike.</div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING STORY ── */}
      <section style={{ background:"#f5f5f5", padding:"68px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"center" }}>
          <div>
            <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>WHY WE STARTED</p>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, color:"#25433A", margin:"0 0 16px", lineHeight:1.15 }}>A Fresh Perspective on Community Care</h2>
            <p style={{ fontSize:14.5, color:"#111", lineHeight:1.8, margin:"0 0 16px" }}>
              At Continuity Care, we provide caregivers who are experienced, compassionate, caring, and provide Value Based Person-Centred Care involving family members where possible. We provide continuation of care keeping you at the centre of everything we do.
            </p>
            <p style={{ fontSize:14.5, color:"#111", lineHeight:1.8, margin:"0 0 24px" }}>
              Our team of friendly and passionate staff will provide the support needed to empower you to continue doing the things you like to do in your own home or in our SIL houses.
            </p>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
              {["Owner-operated — no layers of corporate bureaucracy","30+ years of combined staff experience","Person-centred from day one","NDIS, My Aged Care, DVA & privately funded"].map(it=>(
                <li key={it} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:14, color:"#333", lineHeight:1.6 }}>
                  <span style={{ width:22, height:22, borderRadius:"50%", background:"#CEE0C2", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:"#00442d", fontWeight:900, marginTop:1 }}>✓</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background:"#d7ebcc", border:"1px solid #b9d3aa", borderRadius:14, padding:"38px 36px" }}>
            <h3 style={{ fontSize:"1.4rem", fontWeight:800, color:"#00442d", margin:"0 0 14px" }}>We Are Committed to</h3>
            <p style={{ fontSize:14, color:"#111", lineHeight:1.75, margin:"0 0 24px" }}>
              Providing those who need support a service that is tailored to their needs, bringing positive change and improvements to people's health and well-being. We love to serve our community and the members who live and participate in it.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {["Positive outcomes","Health & well-being","Community participation","Cultural sensitivity","Independence first","Family involvement"].map(it=>(
                <div key={it} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:13.5, color:"#244438", lineHeight:1.5 }}>
                  <span style={{ width:20, height:20, borderRadius:"50%", background:"linear-gradient(90deg,#234638 0%,#8dbb78 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#fff", fontWeight:800, flexShrink:0, marginTop:1 }}>✓</span>
                  {it}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES TIMELINE ── */}
      <section style={{ background:"#e9e9e9", padding:"68px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto 48px" }}>
            <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>OUR JOURNEY</p>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)", fontWeight:900, color:"#24443b", margin:"0 0 12px" }}>Founding Journey & Milestones</h2>
            <p style={{ fontSize:15, color:"#444", lineHeight:1.65 }}>From a single idea in 2017 to thousands of lives improved across Queensland.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
            {milestones.map((m,i) => (
              <div key={m.year}
                style={{ background:"#0b3c2b", borderRadius:16, border:"2px solid #49a760", padding:"28px 24px", transition:"transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 18px 38px rgba(0,70,40,0.22)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
                  <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(90deg,#284e37 0%,#8aad70 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:11, color:"#fff", flexShrink:0 }}>
                    {String(i+1).padStart(2,"0")}
                  </div>
                  <div style={{ fontSize:22, fontWeight:900, color:"#8aad70" }}>{m.year}</div>
                </div>
                <h3 style={{ fontSize:17, fontWeight:800, color:"#fff", margin:"0 0 8px" }}>{m.title}</h3>
                <p style={{ fontSize:13.5, color:"rgba(255,255,255,0.82)", lineHeight:1.65, margin:0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:"#ffffff", padding:"68px 5%" }}>
        <div style={{ maxWidth:700, margin:"0 auto", background:"linear-gradient(110deg,#00442d 0%,#00663f 45%,#00c875 100%)", borderRadius:14, padding:"44px 40px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", left:-60, top:-60, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.1),transparent 65%)", pointerEvents:"none" }}/>
          <h2 style={{ margin:"0 0 12px", fontSize:"clamp(1.5rem,2.5vw,2rem)", fontWeight:900, color:"#fff", position:"relative", zIndex:1 }}>Be Part of Our Story</h2>
          <p style={{ margin:"0 0 26px", fontSize:15, color:"rgba(255,255,255,0.85)", lineHeight:1.65, position:"relative", zIndex:1 }}>Whether you are a participant, a family member, or a clinician — we would love to connect with you.</p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", position:"relative", zIndex:1 }}>
            <button type="button" onClick={()=>navigate("/who-we-are/contact")} style={{ height:44, border:0, borderRadius:999, background:"#fff", color:"#234638", fontSize:14, fontWeight:700, padding:"0 28px", cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif" }}>
              Contact Us
            </button>
            <button type="button" onClick={()=>navigate("/who-we-are/our-leadership")} style={{ height:44, border:0, borderRadius:999, background:btnGrad, color:"#fff", fontSize:14, fontWeight:800, padding:"0 28px", cursor:"pointer", fontFamily:"'Nunito Sans',Arial,sans-serif", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Meet Our Team →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
