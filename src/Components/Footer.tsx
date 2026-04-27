const serviceLinks = [
  "In-Home Care",
  "Community Nursing",
  "Support Coordination",
  "Allied Health",
  "Care Navigation",
  "Supported Independent Living",
];

const companyLinks = [
  "About Us",
  "How It Works",
  "Who We Help",
  "Testimonials",
  "Careers",
  "Contact Us",
];

const bottomLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Accessibility",
  "Complaints Policy",
];

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a3a2a",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
        borderRadius: "20px 20px 0 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .ft-main {
          display: grid;
          grid-template-columns: 260px 1fr 1fr 240px;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 52px 40px 44px;
          align-items: start;
        }

        .ft-link {
          display: block;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          margin-bottom: 11px;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          font-family: 'Nunito Sans', sans-serif;
          line-height: 1;
        }
        .ft-link:hover { color: #fff; }
        .ft-link:last-child { margin-bottom: 0; }

        .ft-col-title {
          font-size: 11px;
          font-weight: 800;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .ft-social-btn {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .ft-social-btn:hover {
          background: rgba(255,255,255,0.18);
          color: #fff;
          border-color: rgba(255,255,255,0.3);
        }

        .ft-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
        }
        .ft-contact-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: rgba(45,140,80,0.35);
          border: 1px solid rgba(100,200,120,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7acf9a;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ft-contact-label {
          font-size: 10px;
          font-weight: 800;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }
        .ft-contact-value {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.82);
          line-height: 1.4;
        }
        .ft-contact-value a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-contact-value a:hover { color: #fff; }

        .ft-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: transparent;
          border: 1.8px solid rgba(255,255,255,0.45);
          color: #fff;
          border-radius: 50px;
          padding: 12px 22px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.18s;
          font-family: 'Nunito Sans', sans-serif;
          width: 100%;
          justify-content: center;
          margin-top: 6px;
          white-space: nowrap;
        }
        .ft-cta-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.75);
          transform: translateY(-1px);
        }
        .ft-cta-btn svg { transition: transform 0.2s; }
        .ft-cta-btn:hover svg { transform: translateX(3px); }

        .ft-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          max-width: 1200px;
          margin: 0 auto;
        }

        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 40px;
        }

        .ft-copy {
          font-size: 12px;
          color: rgba(255,255,255,0.38);
          font-weight: 500;
        }

        .ft-bottom-links {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }
        .ft-bottom-link {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
          cursor: pointer;
        }
        .ft-bottom-link:hover { color: rgba(255,255,255,0.8); }

        .ft-ndis {
          font-size: 12px;
          color: rgba(255,255,255,0.38);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .ft-main { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 640px) {
          .ft-main { grid-template-columns: 1fr; padding: 36px 24px 32px; gap: 28px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; padding: 16px 24px; gap: 10px; }
          .ft-bottom-links { gap: 14px; }
        }
      `}</style>

      {/* Main Grid */}
      <div className="ft-main">
        {/* ── Col 1: Brand ── */}
        <div>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: 6,
              }}
            >
              <svg viewBox="0 0 44 44" fill="none" width="40" height="40">
                <circle cx="22" cy="22" r="22" fill="#e8f5e0" />
                <g transform="translate(10,6)">
                  <circle cx="12" cy="5" r="3" fill="#3a7a3a" />
                  <line
                    x1="12"
                    y1="8"
                    x2="12"
                    y2="20"
                    stroke="#3a7a3a"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="6"
                    y1="13"
                    x2="18"
                    y2="13"
                    stroke="#3a7a3a"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="20"
                    x2="8"
                    y2="26"
                    stroke="#3a7a3a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="20"
                    x2="16"
                    y2="26"
                    stroke="#3a7a3a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="6"
                    y1="13"
                    x2="3"
                    y2="18"
                    stroke="#5aaa5a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="18"
                    y1="13"
                    x2="21"
                    y2="18"
                    stroke="#5aaa5a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                CONTINUITY
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.14em",
                }}
              >
                CARE
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.72,
              marginBottom: 24,
              fontWeight: 500,
            }}
          >
            Compassionate, person-centred care services across Australia.
            Supporting individuals, families, and communities to live their best
            lives.
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {[<FacebookIcon />, <LinkedInIcon />, <InstagramIcon />].map(
              (icon, i) => (
                <button
                  key={i}
                  className="ft-social-btn"
                  aria-label={["Facebook", "LinkedIn", "Instagram"][i]}
                >
                  {icon}
                </button>
              ),
            )}
          </div>
        </div>

        {/* ── Col 2: Services ── */}
        <div>
          <p className="ft-col-title">Services</p>
          {serviceLinks.map((link) => (
            <a key={link} href="#" className="ft-link">
              {link}
            </a>
          ))}
        </div>

        {/* ── Col 3: Company ── */}
        <div>
          <p className="ft-col-title">Company</p>
          {companyLinks.map((link) => (
            <a key={link} href="#" className="ft-link">
              {link}
            </a>
          ))}
        </div>

        {/* ── Col 4: Get In Touch ── */}
        <div>
          <p className="ft-col-title">Get In Touch</p>

          <div className="ft-contact-row">
            <div className="ft-contact-icon">
              <PhoneIcon />
            </div>
            <div>
              <div className="ft-contact-label">Phone</div>
              <div className="ft-contact-value">
                <a href="tel:1300000000">1300 000,000</a>
              </div>
            </div>
          </div>

          <div className="ft-contact-row">
            <div className="ft-contact-icon">
              <MailIcon />
            </div>
            <div>
              <div className="ft-contact-label">Email</div>
              <div className="ft-contact-value">
                <a href="mailto:hello@continuitycare.com.au">
                  hello@continuitycare.com.au
                </a>
              </div>
            </div>
          </div>

          <div className="ft-contact-row">
            <div className="ft-contact-icon">
              <LocationIcon />
            </div>
            <div>
              <div className="ft-contact-label">Location</div>
              <div className="ft-contact-value">Serving all of Australia</div>
            </div>
          </div>

          <button className="ft-cta-btn">
            Start Your Care Journey
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.08)",
          margin: "0 40px",
        }}
      />

      {/* Bottom bar */}
      <div className="ft-bottom">
        <p className="ft-copy">
          2026 Continuity Care Pty Ltd. All rights reserved. ABN 00 000 000 000
        </p>

        <div className="ft-bottom-links">
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="ft-bottom-link">
              {link}
            </a>
          ))}
        </div>

        <div className="ft-ndis">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
          NDIS Registered Provider #0000000000
        </div>
      </div>
    </footer>
  );
}
