import { useState } from "react";
import { useNavigate } from "react-router-dom";

const btnGrad = "linear-gradient(90deg, #284e37 0%, #8aad70 100%)";
const heroGrad = `radial-gradient(circle at 88% 50%, rgba(0,222,119,0.92) 0%, rgba(0,188,97,0.7) 26%, rgba(0,92,50,0.35) 48%, transparent 68%), linear-gradient(115deg, #001c12 0%, #062817 34%, #09341c 55%, #006c3a 78%, #02d477 100%)`;

type TabKey = "advisory" | "executive" | "management" | "clinical";

const tabs: { key: TabKey; label: string }[] = [
  { key: "advisory", label: "Advisory Board" },
  { key: "executive", label: "Executive Board" },
  { key: "management", label: "Management Team" },
  { key: "clinical", label: "Clinical Leads" },
];

const teamData: Record<
  TabKey,
  { initials: string; name: string; role: string; desc: string }[]
> = {
  advisory: [
    {
      initials: "JR",
      name: "James Richardson",
      role: "Advisory Board Chair",
      desc: "With over 25 years in health policy and disability services, James brings deep expertise in NDIS governance, regulatory compliance, and strategic leadership across the care sector.",
    },
    {
      initials: "SP",
      name: "Sarah Patterson",
      role: "Advisory Board Member",
      desc: "Sarah is a former CEO of a major aged care organisation with extensive experience in community services, quality assurance, and My Aged Care compliance frameworks.",
    },
    {
      initials: "MC",
      name: "Michael Chen",
      role: "Advisory Board Member",
      desc: "Michael is a healthcare entrepreneur who has successfully scaled health-tech organisations across Australia and the Asia-Pacific region, with a focus on integrated care platforms.",
    },
    {
      initials: "AT",
      name: "Amara Thompson",
      role: "Advisory Board Member",
      desc: "A registered psychologist and disability advocate with 20 years of experience in psychosocial support, behaviour intervention, and NDIS participant advocacy in Queensland.",
    },
  ],
  executive: [
    {
      initials: "DP",
      name: "David Park",
      role: "Chief Executive Officer",
      desc: "David leads Continuity Care with a vision for integrated, person-centred care. His background spans disability services, health management, and social enterprise leadership.",
    },
    {
      initials: "LM",
      name: "Laura Martinez",
      role: "Chief Operating Officer",
      desc: "Laura oversees day-to-day operations across all service lines, ensuring quality, compliance, and outstanding participant outcomes at every touchpoint.",
    },
    {
      initials: "RK",
      name: "Raj Kumar",
      role: "Chief Financial Officer",
      desc: "Raj manages the financial health and NDIS plan management operations of Continuity Care, bringing two decades of experience in healthcare financial governance.",
    },
    {
      initials: "EB",
      name: "Emma Bright",
      role: "Chief Clinical Officer",
      desc: "Emma is a registered nurse with 18 years of clinical experience. She leads our nursing and allied health teams, setting clinical standards and driving quality improvement.",
    },
  ],
  management: [
    {
      initials: "TW",
      name: "Tom Wilson",
      role: "Operations Manager",
      desc: "Tom coordinates service delivery across Queensland, managing our field teams, support workers, and logistics for in-home care and SIL services.",
    },
    {
      initials: "NC",
      name: "Natalie Cunningham",
      role: "NDIS Plan Management Lead",
      desc: "Natalie heads our plan management division, helping participants maximise their NDIS plans with transparent, real-time financial tracking.",
    },
    {
      initials: "BJ",
      name: "Ben Johnson",
      role: "Support Coordination Manager",
      desc: "Ben leads our team of Support Coordinators in Brisbane, ensuring participants are connected to the best providers and get the most from their NDIS plans.",
    },
    {
      initials: "PL",
      name: "Priya Lal",
      role: "HR & People Manager",
      desc: "Priya manages staff recruitment, onboarding, training, and wellbeing — ensuring every Continuity Care team member is skilled, screened, and supported.",
    },
    {
      initials: "CM",
      name: "Chris Moore",
      role: "Marketing & Growth Manager",
      desc: "Chris leads communications, brand growth and community engagement, connecting Continuity Care with participants, families and referral partners.",
    },
    {
      initials: "AO",
      name: "Aisha Okafor",
      role: "Quality & Safeguards Manager",
      desc: "Aisha ensures we maintain full NDIS registration, uphold the Quality and Safeguards framework, and continuously improve our service standards.",
    },
  ],
  clinical: [
    {
      initials: "DR",
      name: "Dr. Rebecca Nguyen",
      role: "Clinical Lead — Nursing",
      desc: "Rebecca is a Registered Nurse with 15 years of community nursing experience. She oversees all clinical protocols, wound care, medication management, and post-acute care services.",
    },
    {
      initials: "JH",
      name: "Jake Harrison",
      role: "Clinical Lead — Allied Health",
      desc: "Jake is a senior Occupational Therapist who leads our allied health division, managing OT, physiotherapy, speech pathology, dietetics, and podiatry services.",
    },
    {
      initials: "SM",
      name: "Sophie Mackenzie",
      role: "Clinical Lead — Mental Health",
      desc: "Sophie is a registered psychologist who leads psychosocial support, behaviour support, and mental health services for NDIS participants with complex needs.",
    },
    {
      initials: "VT",
      name: "Victor Torres",
      role: "Clinical Lead — Community Nursing",
      desc: "Victor specialises in chronic disease management and complex care, leading our community nursing team across metropolitan and regional Queensland.",
    },
  ],
};

export default function OurLeadership() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>("advisory");
  const members = teamData[activeTab];

  return (
    <div
      style={{
        fontFamily: "'Nunito Sans',Arial,sans-serif",
        background: "#ffffff",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background: heroGrad,
          padding: "80px 5%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -140,
            bottom: -180,
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#355d45",
              color: "#fff",
              fontSize: 10,
              fontWeight: 800,
              padding: "5px 16px",
              borderRadius: 999,
              marginBottom: 20,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            👥 Our Leadership
          </div>

          <h1
            style={{
              margin: "0 0 18px",
              color: "#fff",
              fontWeight: 900,
              fontSize: "clamp(2rem,4vw,3.2rem)",
              lineHeight: 1.15,
              maxWidth: 680,
            }}
          >
            Human. Bold. Visionary. Resolute.
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
              margin: "0 0 12px",
              maxWidth: 640,
            }}
          >
            The Continuity Care Leadership Team brings together a diverse group
            of professionals, including healthcare industry experts,
            practitioners, health and social care specialists who understand the
            complexities of human services, along with modern cloud technology
            experts and entrepreneurial innovators.
          </p>
        </div>
      </section>

      {/* TABS + TEAM GRID */}
      <section style={{ background: "#e9e9e9", padding: "52px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 40,
              flexWrap: "wrap",
            }}
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                style={{
                  height: 42,
                  padding: "0 24px",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontFamily: "'Nunito Sans',Arial,sans-serif",
                  fontSize: 13.5,
                  fontWeight: 800,
                  background: activeTab === t.key ? btnGrad : "#ffffff",
                  color: activeTab === t.key ? "#fff" : "#00442d",
                  boxShadow:
                    activeTab === t.key
                      ? "0 6px 18px rgba(0,68,45,0.2)"
                      : "none",
                  border:
                    activeTab === t.key ? "none" : "1.5px solid #CEE0C2",
                  transition: "all 0.22s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {members.map((m) => (
              <div
                key={m.name}
                style={{
                  background: "#0b3c2b",
                  borderRadius: 16,
                  border: "2px solid #49a760",
                  padding: "28px 24px",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 38px rgba(0,70,40,0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: btnGrad,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#fff",
                    flexShrink: 0,
                    boxShadow: "0 6px 18px rgba(0,68,45,0.3)",
                  }}
                >
                  {m.initials}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 900,
                      color: "#fff",
                      margin: "0 0 4px",
                    }}
                  >
                    {m.name}
                  </h3>

                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#8aad70",
                      margin: "0 0 12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {m.role}
                  </p>

                  <p
                    style={{
                      fontSize: 13.5,
                      color: "rgba(255,255,255,0.82)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN US STRIP */}
      <section style={{ background: "#f5f5f5", padding: "52px 5%" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 28,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#168545",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}
            >
              JOIN OUR TEAM
            </p>

            <h2
              style={{
                fontSize: "clamp(1.6rem,2.5vw,2.1rem)",
                fontWeight: 900,
                color: "#25433A",
                margin: "0 0 10px",
              }}
            >
              Passionate About Care? Come Work With Us.
            </h2>

            <p
              style={{
                fontSize: 15,
                color: "#444",
                lineHeight: 1.65,
                maxWidth: 540,
              }}
            >
              We are always looking for dedicated healthcare professionals,
              support workers, coordinators, and clinicians to join our growing
              team.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => navigate("/who-we-are/contact")}
              style={{
                height: 44,
                border: 0,
                borderRadius: 999,
                background: btnGrad,
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 800,
                padding: "0 28px",
                cursor: "pointer",
                fontFamily: "'Nunito Sans',Arial,sans-serif",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              View Careers →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#ffffff", padding: "52px 5% 80px" }}>
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            background:
              "linear-gradient(110deg,#00442d 0%,#00663f 45%,#00c875 100%)",
            borderRadius: 14,
            padding: "44px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -60,
              top: -60,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(255,255,255,0.1),transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(1.5rem,2.5vw,2rem)",
              fontWeight: 900,
              color: "#fff",
              position: "relative",
              zIndex: 1,
            }}
          >
            Connect with Our Leadership Team
          </h2>

          <p
            style={{
              margin: "0 0 26px",
              fontSize: 15,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.65,
              position: "relative",
              zIndex: 1,
            }}
          >
            Have questions about our organisation, governance, or services? Our
            leadership team welcomes the conversation.
          </p>

          <button
            type="button"
            onClick={() => navigate("/who-we-are/contact")}
            style={{
              height: 44,
              border: 0,
              borderRadius: 999,
              background: "#fff",
              color: "#234638",
              fontSize: 14,
              fontWeight: 700,
              padding: "0 32px",
              cursor: "pointer",
              fontFamily: "'Nunito Sans',Arial,sans-serif",
            }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}