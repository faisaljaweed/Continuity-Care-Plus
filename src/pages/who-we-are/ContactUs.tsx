import { useState } from "react";

const btnGrad  = "linear-gradient(90deg, #284e37 0%, #8aad70 100%)";
const heroGrad = `radial-gradient(circle at 88% 50%, rgba(0,222,119,0.92) 0%, rgba(0,188,97,0.7) 26%, rgba(0,92,50,0.35) 48%, transparent 68%), linear-gradient(115deg, #001c12 0%, #062817 34%, #09341c 55%, #006c3a 78%, #02d477 100%)`;

const contactInfo = [
  { icon:"📍", label:"Location", value:"307/1737 Anzac Ave, Mango Hill QLD 4509, Brisbane, Australia" },
  { icon:"📧", label:"Email", value:"info@continuitycare.com.au" },
  { icon:"📞", label:"Phone", value:"+61 1800 012 273" },
  { icon:"🕐", label:"Opening Hours", value:"Mon–Fri: 8AM–6PM · Sat–Sun: 10AM–9PM" },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const set = (k:string) => (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p=>({...p,[k]:e.target.value}));

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width:"100%", height:46, border:"1.5px solid #CEE0C2", borderRadius:10,
    padding:"0 16px", fontSize:14, color:"#111", background:"#fff",
    fontFamily:"'Nunito Sans',Arial,sans-serif", outline:"none",
    transition:"border-color 0.2s",
  };

  return (
    <div style={{ fontFamily:"'Nunito Sans',Arial,sans-serif", background:"#ffffff" }}>

      {/* ── HERO ── */}
      <section style={{ background:heroGrad, padding:"80px 5% 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", right:-80, top:-100, width:400, height:400, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.18)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", left:-140, bottom:-180, width:480, height:480, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.1)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#355d45", color:"#fff", fontSize:10, fontWeight:800, padding:"5px 16px", borderRadius:999, marginBottom:20, letterSpacing:"0.08em", textTransform:"uppercase" }}>
            📬 Contact Us
          </div>
          <h1 style={{ margin:"0 0 18px", color:"#fff", fontWeight:900, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.15, maxWidth:680 }}>
            Please Don't Hesitate to Contact Us for Your Healthy Life
          </h1>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.75, margin:0, maxWidth:600 }}>
            Whether provided at home, in assisted living facilities, or in nursing homes — compassionate and personalised care helps clients maintain their physical health, mental well-being, and social connections.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section style={{ background:"#e9e9e9", padding:"52px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:20 }}>
          {contactInfo.map(c => (
            <div key={c.label} style={{ background:"#0b3c2b", borderRadius:16, border:"2px solid #49a760", padding:"26px 22px", transition:"transform 0.22s, box-shadow 0.22s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(0,70,40,0.22)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
              <div style={{ fontSize:"1.8rem", marginBottom:12 }}>{c.icon}</div>
              <div style={{ fontSize:11, fontWeight:800, color:"#8aad70", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:6 }}>{c.label}</div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.88)", lineHeight:1.6, fontWeight:500 }}>{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section style={{ background:"#f5f5f5", padding:"68px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }}>

          {/* FORM */}
          <div>
            <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>SEND A MESSAGE</p>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, color:"#25433A", margin:"0 0 24px", lineHeight:1.15 }}>Take a Scheduled Appointment</h2>
            <p style={{ fontSize:14.5, color:"#444", lineHeight:1.75, margin:"0 0 28px" }}>
              Our booking process is simple, confidential and flexible to fit your schedule. Fill in the form below and we will get back to you within 24 hours.
            </p>

            {sent ? (
              <div style={{ background:"#d7ebcc", border:"1.5px solid #b9d3aa", borderRadius:14, padding:"36px 28px", textAlign:"center" }}>
                <div style={{ fontSize:"2.5rem", marginBottom:14 }}>✅</div>
                <h3 style={{ fontSize:"1.3rem", fontWeight:800, color:"#00442d", margin:"0 0 10px" }}>Message Sent!</h3>
                <p style={{ fontSize:14, color:"#244438", lineHeight:1.65 }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
                  <div>
                    <label style={{ fontSize:13, fontWeight:700, color:"#244438", display:"block", marginBottom:6 }}>Full Name *</label>
                    <input type="text" required placeholder="Your full name" value={form.name} onChange={set("name")} style={inputStyle}
                      onFocus={e=>(e.target.style.borderColor="#168545")} onBlur={e=>(e.target.style.borderColor="#CEE0C2")}/>
                  </div>
                  <div>
                    <label style={{ fontSize:13, fontWeight:700, color:"#244438", display:"block", marginBottom:6 }}>Email Address *</label>
                    <input type="email" required placeholder="your@email.com" value={form.email} onChange={set("email")} style={inputStyle}
                      onFocus={e=>(e.target.style.borderColor="#168545")} onBlur={e=>(e.target.style.borderColor="#CEE0C2")}/>
                  </div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
                  <div>
                    <label style={{ fontSize:13, fontWeight:700, color:"#244438", display:"block", marginBottom:6 }}>Phone Number</label>
                    <input type="tel" placeholder="+61 000 000 000" value={form.phone} onChange={set("phone")} style={inputStyle}
                      onFocus={e=>(e.target.style.borderColor="#168545")} onBlur={e=>(e.target.style.borderColor="#CEE0C2")}/>
                  </div>
                  <div>
                    <label style={{ fontSize:13, fontWeight:700, color:"#244438", display:"block", marginBottom:6 }}>Subject *</label>
                    <select required value={form.subject} onChange={set("subject")} style={{ ...inputStyle, cursor:"pointer" }}
                      onFocus={e=>(e.target.style.borderColor="#168545")} onBlur={e=>(e.target.style.borderColor="#CEE0C2")}>
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>In-Home Care</option>
                      <option>NDIS Support</option>
                      <option>Plan Management</option>
                      <option>Support Coordination</option>
                      <option>Community Nursing</option>
                      <option>Allied Health</option>
                      <option>Respite Care</option>
                      <option>SIL / Accommodation</option>
                      <option>Careers</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom:22 }}>
                  <label style={{ fontSize:13, fontWeight:700, color:"#244438", display:"block", marginBottom:6 }}>Message *</label>
                  <textarea required placeholder="Tell us how we can help you..." value={form.message} onChange={set("message")} rows={5}
                    style={{ ...inputStyle, height:"auto", padding:"12px 16px", resize:"vertical" }}
                    onFocus={e=>(e.target.style.borderColor="#168545")} onBlur={e=>(e.target.style.borderColor="#CEE0C2")}/>
                </div>
                <button type="submit" style={{ width:"100%", height:48, border:0, borderRadius:999, cursor:"pointer", background:btnGrad, color:"#fff", fontSize:15, fontWeight:800, fontFamily:"'Nunito Sans',Arial,sans-serif", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.18)", transition:"transform 0.22s" }}
                  onMouseEnter={e=>(e.currentTarget.style.transform="translateY(-2px)")} onMouseLeave={e=>(e.currentTarget.style.transform="none")}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* MAP + INFO */}
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
            <div>
              <p style={{ fontSize:13, fontWeight:800, color:"#168545", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 10px" }}>FIND US HERE</p>
              <h2 style={{ fontSize:"clamp(1.6rem,2.5vw,2.1rem)", fontWeight:900, color:"#25433A", margin:"0 0 16px" }}>Our Office Location</h2>
            </div>
            {/* Google Maps embed */}
            <div style={{ borderRadius:16, overflow:"hidden", border:"2px solid #CEE0C2", height:320, background:"#e9e9e9" }}>
              <iframe
                title="Continuity Care Office"
                src="https://www.google.com/maps?q=Continuity+Care,+307/1737+Anzac+Ave,+Mango+Hill+QLD+4509,+Australia&output=embed"
                width="100%" height="100%" style={{ border:0, display:"block" }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Opening hours box */}
            <div style={{ background:"#d7ebcc", border:"1px solid #b9d3aa", borderRadius:14, padding:"24px 22px" }}>
              <h3 style={{ fontSize:"1rem", fontWeight:800, color:"#00442d", margin:"0 0 14px" }}>Opening Hours</h3>
              {[["Monday – Friday","8:00 AM – 6:00 PM"],["Saturday – Sunday","10:00 AM – 9:00 PM"],["Public Holidays","By appointment"]].map(([day,hrs])=>(
                <div key={day} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:"1px solid rgba(0,68,45,0.08)", fontSize:14, color:"#244438" }}>
                  <span style={{ fontWeight:600 }}>{day}</span>
                  <span style={{ fontWeight:700, color:"#00442d" }}>{hrs}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display:"flex", gap:10 }}>
              {[["Facebook","https://www.facebook.com/"],["Instagram","https://www.instagram.com/continuity_care/"]].map(([label,href])=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ flex:1, height:44, border:"1.5px solid #CEE0C2", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13.5, fontWeight:700, color:"#00442d", textDecoration:"none", background:"#fff", transition:"background 0.18s, border-color 0.18s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="#d7ebcc";e.currentTarget.style.borderColor="#a8cca8";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.borderColor="#CEE0C2";}}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
