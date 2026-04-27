import { useState, useEffect, useRef } from "react";

const STEPS = [
  { id: 1, label: "Your Details" },
  { id: 2, label: "Your Needs" },
  { id: 3, label: "Confirmation" },
];

const CARE_TYPES = [
  "In-Home Care",
  "Community Nursing",
  "Support Coordination",
  "Allied Health Services",
  "Care Navigation",
  "Supported Independent Living",
];

const FREQUENCY_OPTIONS = [
  "Daily",
  "Weekly",
  "Fortnightly",
  "Monthly",
  "Flexible",
];

export default function StartCareJourney() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("forward");
  const [animating, setAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    careTypes: [] as string[],
    frequency: "",
    message: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: any) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleCare = (type: string) =>
    setForm((prev) => ({
      ...prev,
      careTypes: prev.careTypes.includes(type)
        ? prev.careTypes.filter((t) => t !== type)
        : [...prev.careTypes, type],
    }));

  const validateStep = () => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.fullName.trim()) e.fullName = "Full name is required";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
        e.email = "Valid email is required";
      if (!form.phone.trim()) e.phone = "Phone number is required";
    }
    if (step === 2) {
      if (form.careTypes.length === 0)
        e.careTypes = "Select at least one service";
      if (!form.frequency) e.frequency = "Please select a frequency";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goTo = (target: number) => {
    if (animating) return;
    setDirection(target > step ? "forward" : "back");
    setAnimating(true);
    setTimeout(() => {
      setStep(target);
      setAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < 3) goTo(step + 1);
  };

  const handleBack = () => {
    if (step > 1) goTo(step - 1);
  };

  const handleSubmit = () => {
    if (!form.agreeTerms) {
      setErrors({ agreeTerms: "Please agree to continue" });
      return;
    }
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(125deg, #0a2a14 0%, #0d3318 20%, #114020 40%, #1a6030 60%, #22a050 80%, #2dcc68 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        /* Arc line decoration */
        .scj-arc-svg { position:absolute; pointer-events:none; opacity:1; }

        .scj-step-slide {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .scj-step-slide.exit-forward { opacity:0; transform:translateX(-24px); }
        .scj-step-slide.exit-back    { opacity:0; transform:translateX(24px); }
        .scj-step-slide.enter        { opacity:1; transform:translateX(0); }

        .scj-input {
          width:100%;
          background:#e8f5e4;
          border:1.5px solid #c0ddb8;
          border-radius:10px;
          padding:13px 16px;
          font-size:14.5px;
          color:#1a3a2a;
          outline:none;
          transition:border-color 0.2s, box-shadow 0.2s;
          font-family:'Nunito Sans',sans-serif;
        }
        .scj-input::placeholder { color:#8aaa8a; }
        .scj-input:focus { border-color:#3a8a5a; box-shadow:0 0 0 3px rgba(58,138,90,0.14); }
        .scj-input.error { border-color:#d05050; background:#fff0f0; }

        .scj-label {
          display:block;
          font-size:13px;
          font-weight:700;
          color:#2a4a3a;
          margin-bottom:7px;
          letter-spacing:0.01em;
        }
        .scj-error-msg {
          font-size:12px;
          color:#c03030;
          margin-top:5px;
          font-weight:600;
        }

        .scj-care-chip {
          display:inline-flex;
          align-items:center;
          gap:7px;
          padding:9px 16px;
          border-radius:50px;
          border:1.8px solid #c0ddb8;
          background:#edf7ed;
          color:#2a4a3a;
          font-size:13px;
          font-weight:600;
          cursor:pointer;
          transition:all 0.2s;
          user-select:none;
        }
        .scj-care-chip:hover { border-color:#5aaa6a; background:#dff0df; }
        .scj-care-chip.selected {
          background:#1a5c30;
          border-color:#1a5c30;
          color:#fff;
        }

        .scj-freq-opt {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:9px 18px;
          border-radius:50px;
          border:1.8px solid #c0ddb8;
          background:#edf7ed;
          color:#2a4a3a;
          font-size:13px;
          font-weight:600;
          cursor:pointer;
          transition:all 0.2s;
          user-select:none;
        }
        .scj-freq-opt:hover { border-color:#5aaa6a; background:#dff0df; }
        .scj-freq-opt.selected { background:#1a5c30; border-color:#1a5c30; color:#fff; }

        .scj-continue-btn {
          display:inline-flex;
          align-items:center;
          gap:9px;
          background:#1a3a2a;
          color:#fff;
          border:none;
          border-radius:50px;
          padding:13px 28px;
          font-size:14.5px;
          font-weight:800;
          cursor:pointer;
          transition:background 0.2s, transform 0.15s;
          font-family:'Nunito Sans',sans-serif;
        }
        .scj-continue-btn:hover { background:#0d2a1a; transform:translateY(-1px); }

        .scj-back-btn {
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:transparent;
          color:#5a7a6a;
          border:none;
          font-size:14px;
          font-weight:700;
          cursor:pointer;
          padding:0;
          transition:color 0.2s;
          font-family:'Nunito Sans',sans-serif;
        }
        .scj-back-btn:hover { color:#1a3a2a; }

        .scj-check {
          width:18px; height:18px;
          border:2px solid #8aaa8a;
          border-radius:5px;
          background:#edf7ed;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          transition:all 0.2s;
        }
        .scj-check.checked {
          background:#1a5c30;
          border-color:#1a5c30;
        }

        .scj-trust {
          display:flex;
          align-items:center;
          gap:6px;
          font-size:13px;
          color:rgba(255,255,255,0.75);
          font-weight:600;
        }

        .scj-textarea {
          width:100%;
          background:#e8f5e4;
          border:1.5px solid #c0ddb8;
          border-radius:10px;
          padding:13px 16px;
          font-size:14px;
          color:#1a3a2a;
          outline:none;
          resize:none;
          transition:border-color 0.2s, box-shadow 0.2s;
          font-family:'Nunito Sans',sans-serif;
          min-height:90px;
        }
        .scj-textarea::placeholder { color:#8aaa8a; }
        .scj-textarea:focus { border-color:#3a8a5a; box-shadow:0 0 0 3px rgba(58,138,90,0.14); }

        @media (max-width: 600px) {
          .scj-two-col { flex-direction:column !important; }
          .scj-trust-row { flex-direction:column !important; gap:12px !important; }
        }
      `}</style>

      {/* === DECORATIVE ARC LINES === */}
      {/* Left arcs */}
      <svg
        className="scj-arc-svg"
        style={{ left: -80, top: -40, width: 520, height: "100vh" }}
        viewBox="0 0 520 800"
        preserveAspectRatio="none"
      >
        {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500].map(
          (r, i) => (
            <path
              key={i}
              d={`M${r} 0 Q${r - 60} 400 ${r} 800`}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1.5"
            />
          ),
        )}
      </svg>

      {/* Right bright arcs */}
      <svg
        className="scj-arc-svg"
        style={{ right: -80, top: -40, width: 520, height: "100vh" }}
        viewBox="0 0 520 800"
        preserveAspectRatio="none"
      >
        {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500].map(
          (r, i) => (
            <path
              key={i}
              d={`M${520 - r} 0 Q${520 - r + 60} 400 ${520 - r} 800`}
              fill="none"
              stroke="rgba(255,255,255,0.09)"
              strokeWidth="1.5"
            />
          ),
        )}
      </svg>

      {/* === HEADER === */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 28,
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: 26,
            fontWeight: 900,
            color: "#fff",
            marginBottom: 10,
            textShadow: "0 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          Start Your Care Journey
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Tell us a little about your needs and we'll match you with the right
          support. No obligation — just the right care faster.
        </p>
      </div>

      {/* === STEP INDICATOR === */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          marginBottom: 28,
          position: "relative",
          zIndex: 2,
        }}
      >
        {STEPS.map((s, i) => {
          const done = step > s.id;
          const active = step === s.id;
          return (
            <div
              key={s.id}
              style={{ display: "flex", alignItems: "center", gap: 0 }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: done
                      ? "#2dcc68"
                      : active
                        ? "#fff"
                        : "rgba(255,255,255,0.18)",
                    border: active
                      ? "3px solid #2dcc68"
                      : done
                        ? "none"
                        : "2px solid rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    boxShadow: active
                      ? "0 0 0 4px rgba(45,204,104,0.25)"
                      : "none",
                  }}
                >
                  {done ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0a3d1f"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: active ? "#1a3a2a" : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {s.id}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    color:
                      active || done
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    width: 70,
                    height: 2,
                    background:
                      step > s.id ? "#2dcc68" : "rgba(255,255,255,0.2)",
                    marginBottom: 18,
                    transition: "background 0.4s",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* === CARD === */}
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          width: "100%",
          maxWidth: 520,
          padding: "32px 36px 28px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
          position: "relative",
          zIndex: 2,
          minHeight: 280,
        }}
      >
        {!submitted ? (
          <div className={`scj-step-slide enter`}>
            {/* Step badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  background: "#1a5c30",
                  color: "#fff",
                  fontSize: 11.5,
                  fontWeight: 800,
                  padding: "4px 12px",
                  borderRadius: 50,
                  letterSpacing: "0.03em",
                }}
              >
                Step {step} of 3
              </span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#2a4a3a" }}>
                {step === 1 && "Let's start with your basic details"}
                {step === 2 && "Tell us about your care needs"}
                {step === 3 && "Review & confirm your details"}
              </span>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div>
                  <label className="scj-label">Full Name *</label>
                  <input
                    className={`scj-input${errors.fullName ? " error" : ""}`}
                    placeholder="e.g. Sarah Thompson"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="scj-error-msg">{errors.fullName}</p>
                  )}
                </div>
                <div
                  className="scj-two-col"
                  style={{ display: "flex", gap: 14 }}
                >
                  <div style={{ flex: 1 }}>
                    <label className="scj-label">Email Address *</label>
                    <input
                      className={`scj-input${errors.email ? " error" : ""}`}
                      placeholder="you@email.com"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                    {errors.email && (
                      <p className="scj-error-msg">{errors.email}</p>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="scj-label">Phone Number *</label>
                    <input
                      className={`scj-input${errors.phone ? " error" : ""}`}
                      placeholder="04xxxxxxxx"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                    {errors.phone && (
                      <p className="scj-error-msg">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  <label className="scj-label" style={{ marginBottom: 10 }}>
                    What type of care do you need? *
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                    {CARE_TYPES.map((type) => (
                      <div
                        key={type}
                        className={`scj-care-chip${form.careTypes.includes(type) ? " selected" : ""}`}
                        onClick={() => toggleCare(type)}
                      >
                        {form.careTypes.includes(type) && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                        {type}
                      </div>
                    ))}
                  </div>
                  {errors.careTypes && (
                    <p className="scj-error-msg" style={{ marginTop: 8 }}>
                      {errors.careTypes}
                    </p>
                  )}
                </div>
                <div>
                  <label className="scj-label" style={{ marginBottom: 10 }}>
                    How often do you need support? *
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                    {FREQUENCY_OPTIONS.map((opt) => (
                      <div
                        key={opt}
                        className={`scj-freq-opt${form.frequency === opt ? " selected" : ""}`}
                        onClick={() => update("frequency", opt)}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                  {errors.frequency && (
                    <p className="scj-error-msg" style={{ marginTop: 8 }}>
                      {errors.frequency}
                    </p>
                  )}
                </div>
                <div>
                  <label className="scj-label">
                    Anything else you'd like us to know?{" "}
                    <span style={{ color: "#8aaa8a", fontWeight: 600 }}>
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    className="scj-textarea"
                    placeholder="Tell us more about your situation, goals, or preferences..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                {/* Summary */}
                <div
                  style={{
                    background: "#edf7ed",
                    borderRadius: 12,
                    padding: "18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {[
                    { label: "Full Name", value: form.fullName },
                    { label: "Email", value: form.email },
                    { label: "Phone", value: form.phone },
                    {
                      label: "Services",
                      value: form.careTypes.join(", ") || "—",
                    },
                    { label: "Frequency", value: form.frequency || "—" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        borderBottom: "1px solid rgba(58,122,90,0.1)",
                        paddingBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#4a6a5a",
                          flexShrink: 0,
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#1a3a2a",
                          textAlign: "right",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                  {form.message && (
                    <div
                      style={{
                        borderBottom: "1px solid rgba(58,122,90,0.1)",
                        paddingBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#4a6a5a",
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        Notes
                      </span>
                      <span style={{ fontSize: 13, color: "#1a3a2a" }}>
                        {form.message}
                      </span>
                    </div>
                  )}
                </div>
                {/* Agree checkbox */}
                <div
                  style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                >
                  <div
                    className={`scj-check${form.agreeTerms ? " checked" : ""}`}
                    onClick={() => update("agreeTerms", !form.agreeTerms)}
                  >
                    {form.agreeTerms && (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      color: "#4a6a5a",
                      lineHeight: 1.55,
                      cursor: "pointer",
                    }}
                    onClick={() => update("agreeTerms", !form.agreeTerms)}
                  >
                    I agree to Continuity Care's{" "}
                    <span
                      style={{
                        color: "#1a5c30",
                        fontWeight: 700,
                        textDecoration: "underline",
                      }}
                    >
                      Privacy Policy
                    </span>{" "}
                    and consent to be contacted about my care options.
                  </span>
                </div>
                {errors.agreeTerms && (
                  <p className="scj-error-msg">{errors.agreeTerms}</p>
                )}
              </div>
            )}

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "#e0ece4",
                margin: "24px 0 18px",
              }}
            />

            {/* Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: step > 1 ? "space-between" : "flex-end",
              }}
            >
              {step > 1 && (
                <button className="scj-back-btn" onClick={handleBack}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back
                </button>
              )}
              {step < 3 ? (
                <button className="scj-continue-btn" onClick={handleNext}>
                  Continue
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              ) : (
                <button
                  className="scj-continue-btn"
                  onClick={handleSubmit}
                  style={{ background: "#1a6030" }}
                >
                  Submit & Start Care
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#edf7ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a6030"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: "#0f2a1c",
                marginBottom: 10,
              }}
            >
              You're all set, {form.fullName.split(" ")[0]}!
            </h3>
            <p
              style={{
                fontSize: 14.5,
                color: "#4a6a5a",
                lineHeight: 1.65,
                marginBottom: 24,
                maxWidth: 360,
                margin: "0 auto 24px",
              }}
            >
              Thank you for reaching out. A member of our care team will contact
              you within 24 hours to discuss your options.
            </p>
            <button
              className="scj-continue-btn"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setForm({
                  fullName: "",
                  email: "",
                  phone: "",
                  careTypes: [],
                  frequency: "",
                  message: "",
                  agreeTerms: false,
                });
              }}
            >
              Start Another Enquiry
            </button>
          </div>
        )}
      </div>

      {/* === TRUST BADGES === */}
      <div
        className="scj-trust-row"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          marginTop: 28,
          position: "relative",
          zIndex: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          "No obligation, cancel anytime",
          "Secure & encrypted",
          "Response within 24 hours",
        ].map((text) => (
          <div key={text} className="scj-trust">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
