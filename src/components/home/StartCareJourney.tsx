import { useState } from "react";

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

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  careTypes: string[];
  frequency: string;
  message: string;
  agreeTerms: boolean;
};

export default function StartCareJourney() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    careTypes: [],
    frequency: "",
    message: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const toggleCare = (type: string) => {
    setForm((prev) => ({
      ...prev,
      careTypes: prev.careTypes.includes(type)
        ? prev.careTypes.filter((t) => t !== type)
        : [...prev.careTypes, type],
    }));

    setErrors((prev) => ({ ...prev, careTypes: "" }));
  };

  const validateStep = () => {
    const e: Record<string, string> = {};

    if (step === 1) {
      if (!form.fullName.trim()) e.fullName = "Full name is required";

      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
        e.email = "Valid email is required";
      }

      if (!form.phone.trim()) e.phone = "Phone number is required";
    }

    if (step === 2) {
      if (form.careTypes.length === 0) {
        e.careTypes = "Select at least one service";
      }

      if (!form.frequency) {
        e.frequency = "Please select a frequency";
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (!form.agreeTerms) {
      setErrors({ agreeTerms: "Please agree to continue" });
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setErrors({});
    setForm({
      fullName: "",
      email: "",
      phone: "",
      careTypes: [],
      frequency: "",
      message: "",
      agreeTerms: false,
    });
  };

  return (
    <section className="scj-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        .scj-section {
          width: 100%;
          min-height: 565px;
          padding: 34px 20px 34px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: "Nunito Sans", "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 88% 50%, rgba(0, 222, 119, 0.96) 0%, rgba(0, 188, 97, 0.76) 26%, rgba(0, 92, 50, 0.38) 48%, transparent 68%),
            linear-gradient(115deg, #001c12 0%, #062817 34%, #09341c 55%, #006c3a 78%, #02d477 100%);
        }

        .scj-section::before {
          content: "";
          position: absolute;
          left: -230px;
          bottom: -360px;
          width: 720px;
          height: 720px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.34);
          box-shadow:
            18px 18px 0 -17px rgba(255,255,255,0.28),
            36px 36px 0 -35px rgba(255,255,255,0.24),
            54px 54px 0 -53px rgba(255,255,255,0.2),
            72px 72px 0 -71px rgba(255,255,255,0.18),
            90px 90px 0 -89px rgba(255,255,255,0.16),
            108px 108px 0 -107px rgba(255,255,255,0.14),
            126px 126px 0 -125px rgba(255,255,255,0.12);
          pointer-events: none;
        }

        .scj-section::after {
          content: "";
          position: absolute;
          right: -115px;
          top: -355px;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow:
            16px 16px 0 -15px rgba(255,255,255,0.38),
            32px 32px 0 -31px rgba(255,255,255,0.32),
            48px 48px 0 -47px rgba(255,255,255,0.28),
            64px 64px 0 -63px rgba(255,255,255,0.24),
            80px 80px 0 -79px rgba(255,255,255,0.2),
            96px 96px 0 -95px rgba(255,255,255,0.16);
          pointer-events: none;
        }

        .scj-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 16px;
        }

        .scj-title {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 21px;
          line-height: 1.2;
          font-weight: 900;
        }

        .scj-subtitle {
          margin: 0 auto;
          max-width: 660px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 11px;
          line-height: 1.5;
          font-weight: 500;
        }

        .scj-stepper {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }

        .scj-step-item {
          display: flex;
          align-items: center;
        }

        .scj-step-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          transition: 0.3s ease;
        }

        .scj-step-circle.active {
          background: #ffffff;
          color: #1e3d2f;
        }

        .scj-step-circle.done {
          background: #a9ca99;
          color: #ffffff;
        }

        .scj-step-circle.inactive {
          background: #a9ca99;
          color: #ffffff;
          opacity: 0.95;
        }

        .scj-step-label {
          color: rgba(255, 255, 255, 0.78);
          font-size: 10px;
          margin-left: 9px;
          white-space: nowrap;
        }

        .scj-step-line {
          width: 56px;
          height: 1px;
          background: rgba(255, 255, 255, 0.78);
          margin: 0 13px;
        }

        .scj-card {
          width: 100%;
          max-width: 700px;
          min-height: 244px;
          background: #ffffff;
          border-radius: 16px;
          padding: 28px 64px 30px;
          position: relative;
          z-index: 2;
        }

        .scj-card-head {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
        }

        .scj-badge {
          background: #355d45;
          color: #ffffff;
          font-size: 9px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 999px;
        }

        .scj-card-title {
          color: #244338;
          font-size: 13px;
          font-weight: 900;
        }

        .scj-label {
          display: block;
          font-size: 11px;
          font-weight: 800;
          color: #223f35;
          margin-bottom: 9px;
        }

        .scj-input,
        .scj-textarea {
          width: 100%;
          background: #cee1c3;
          border: 1.5px solid #86b37e;
          border-radius: 5px;
          padding: 12px 13px;
          font-size: 11px;
          color: #173529;
          outline: none;
          font-family: inherit;
        }

        .scj-input::placeholder,
        .scj-textarea::placeholder {
          color: #405c4d;
          opacity: 0.86;
        }

        .scj-input:focus,
        .scj-textarea:focus {
          border-color: #315f43;
          box-shadow: 0 0 0 3px rgba(49, 95, 67, 0.12);
        }

        .scj-input.error {
          border-color: #d14444;
          background: #fff2f2;
        }

        .scj-error-msg {
          margin: 5px 0 0;
          color: #c03030;
          font-size: 10px;
          font-weight: 700;
        }

        .scj-field-group {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .scj-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .scj-divider {
          height: 1px;
          background: #d9e6dc;
          margin: 20px 0 24px;
        }

        .scj-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .scj-actions.space {
          justify-content: space-between;
        }

        .scj-continue-btn {
          border: 0;
          outline: 0;
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          padding: 9px 20px;
          border-radius: 999px;
          font-family: inherit;
          background: linear-gradient(90deg, #1f4638 0%, #8bb36c 100%);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .scj-continue-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(32, 70, 56, 0.24);
        }

        .scj-back-btn {
          border: 0;
          outline: 0;
          background: transparent;
          cursor: pointer;
          color: #476858;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 800;
          font-family: inherit;
        }

        .scj-care-list,
        .scj-frequency-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .scj-care-chip,
        .scj-freq-opt {
          border: 1.5px solid #9dbf92;
          background: #e9f3e3;
          color: #25483a;
          border-radius: 999px;
          padding: 8px 13px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          user-select: none;
          transition: 0.2s ease;
        }

        .scj-care-chip.selected,
        .scj-freq-opt.selected {
          background: #244d39;
          border-color: #244d39;
          color: #ffffff;
        }

        .scj-textarea {
          min-height: 76px;
          resize: none;
        }

        .scj-summary {
          background: #edf6e9;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .scj-summary-row {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          border-bottom: 1px solid rgba(49, 95, 67, 0.12);
          padding-bottom: 8px;
        }

        .scj-summary-label {
          color: #607b6d;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .scj-summary-value {
          color: #1f3f33;
          font-size: 11px;
          font-weight: 700;
          text-align: right;
        }

        .scj-check-row {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .scj-check {
          width: 17px;
          height: 17px;
          border-radius: 4px;
          border: 2px solid #8aaa8a;
          background: #edf7ed;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .scj-check.checked {
          background: #244d39;
          border-color: #244d39;
        }

        .scj-check-text {
          color: #4a6a5a;
          font-size: 11px;
          line-height: 1.5;
          cursor: pointer;
        }

        .scj-success {
          text-align: center;
          padding: 20px 0;
        }

        .scj-success-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #edf7ed;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }

        .scj-success-title {
          margin: 0 0 10px;
          color: #102e21;
          font-size: 22px;
          font-weight: 900;
        }

        .scj-success-text {
          margin: 0 auto 24px;
          max-width: 400px;
          color: #4a6a5a;
          font-size: 13px;
          line-height: 1.6;
        }

        .scj-trust-row {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 42px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .scj-trust {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 11px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .scj-section {
            padding: 42px 16px;
            min-height: auto;
          }

          .scj-title {
            font-size: 22px;
          }

          .scj-stepper {
            transform: scale(0.88);
          }

          .scj-card {
            max-width: 100%;
            padding: 28px 20px;
          }

          .scj-two-col {
            grid-template-columns: 1fr;
          }

          .scj-step-line {
            width: 34px;
            margin: 0 8px;
          }

          .scj-step-label {
            display: none;
          }

          .scj-trust-row {
            gap: 14px;
            flex-direction: column;
          }
        }
      `}</style>

      <div className="scj-header">
        <h1 className="scj-title">Start Your Care Journey</h1>
        <p className="scj-subtitle">
          Tell us a little about your needs and we'll match you with the right
          support. No obligation—just the right care faster.
        </p>
      </div>

      <div className="scj-stepper">
        {STEPS.map((s, index) => {
          const done = step > s.id;
          const active = step === s.id;

          return (
            <div className="scj-step-item" key={s.id}>
              <div
                className={`scj-step-circle ${
                  done ? "done" : active ? "active" : "inactive"
                }`}
              >
                {done ? (
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
                ) : (
                  s.id
                )}
              </div>

              <span className="scj-step-label">{s.label}</span>

              {index < STEPS.length - 1 && <div className="scj-step-line" />}
            </div>
          );
        })}
      </div>

      <div className="scj-card">
        {!submitted ? (
          <>
            <div className="scj-card-head">
              <span className="scj-badge">Step {step} of 3</span>
              <span className="scj-card-title">
                {step === 1 && "Let's start with your basic details"}
                {step === 2 && "Tell us about your care needs"}
                {step === 3 && "Review & confirm your details"}
              </span>
            </div>

            {step === 1 && (
              <div className="scj-field-group">
                <div>
                  <label className="scj-label">Full Name*</label>
                  <input
                    className={`scj-input ${errors.fullName ? "error" : ""}`}
                    placeholder="e.g.Sarah Thompson"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="scj-error-msg">{errors.fullName}</p>
                  )}
                </div>

                <div className="scj-two-col">
                  <div>
                    <label className="scj-label">Email Address*</label>
                    <input
                      className={`scj-input ${errors.email ? "error" : ""}`}
                      placeholder="you@email.com"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                    {errors.email && (
                      <p className="scj-error-msg">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="scj-label">Phone Number*</label>
                    <input
                      className={`scj-input ${errors.phone ? "error" : ""}`}
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

            {step === 2 && (
              <div className="scj-field-group">
                <div>
                  <label className="scj-label">
                    What type of care do you need?*
                  </label>

                  <div className="scj-care-list">
                    {CARE_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`scj-care-chip ${
                          form.careTypes.includes(type) ? "selected" : ""
                        }`}
                        onClick={() => toggleCare(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  {errors.careTypes && (
                    <p className="scj-error-msg">{errors.careTypes}</p>
                  )}
                </div>

                <div>
                  <label className="scj-label">
                    How often do you need support?*
                  </label>

                  <div className="scj-frequency-list">
                    {FREQUENCY_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`scj-freq-opt ${
                          form.frequency === opt ? "selected" : ""
                        }`}
                        onClick={() => update("frequency", opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {errors.frequency && (
                    <p className="scj-error-msg">{errors.frequency}</p>
                  )}
                </div>

                <div>
                  <label className="scj-label">
                    Anything else you'd like us to know?{" "}
                    <span style={{ color: "#7b9a83", fontWeight: 700 }}>
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

            {step === 3 && (
              <div className="scj-field-group">
                <div className="scj-summary">
                  {[
                    { label: "Full Name", value: form.fullName },
                    { label: "Email", value: form.email },
                    { label: "Phone", value: form.phone },
                    {
                      label: "Services",
                      value: form.careTypes.join(", ") || "—",
                    },
                    { label: "Frequency", value: form.frequency || "—" },
                  ].map((item) => (
                    <div className="scj-summary-row" key={item.label}>
                      <span className="scj-summary-label">{item.label}</span>
                      <span className="scj-summary-value">{item.value}</span>
                    </div>
                  ))}

                  {form.message && (
                    <div className="scj-summary-row">
                      <span className="scj-summary-label">Notes</span>
                      <span className="scj-summary-value">{form.message}</span>
                    </div>
                  )}
                </div>

                <div className="scj-check-row">
                  <button
                    type="button"
                    className={`scj-check ${form.agreeTerms ? "checked" : ""}`}
                    onClick={() => update("agreeTerms", !form.agreeTerms)}
                  >
                    {form.agreeTerms && (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>

                  <span
                    className="scj-check-text"
                    onClick={() => update("agreeTerms", !form.agreeTerms)}
                  >
                    I agree to Continuity Care's{" "}
                    <strong style={{ color: "#244d39" }}>Privacy Policy</strong>{" "}
                    and consent to be contacted about my care options.
                  </span>
                </div>

                {errors.agreeTerms && (
                  <p className="scj-error-msg">{errors.agreeTerms}</p>
                )}
              </div>
            )}

            <div className="scj-divider" />

            <div className={`scj-actions ${step > 1 ? "space" : ""}`}>
              {step > 1 && (
                <button
                  type="button"
                  className="scj-back-btn"
                  onClick={handleBack}
                >
                  <svg
                    width="14"
                    height="14"
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
                <button
                  type="button"
                  className="scj-continue-btn"
                  onClick={handleNext}
                >
                  Continue
                  <svg
                    width="14"
                    height="14"
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
                  type="button"
                  className="scj-continue-btn"
                  onClick={handleSubmit}
                >
                  Submit & Start Care
                  <svg
                    width="14"
                    height="14"
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
          </>
        ) : (
          <div className="scj-success">
            <div className="scj-success-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#244d39"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h3 className="scj-success-title">
              You're all set
              {form.fullName ? `, ${form.fullName.split(" ")[0]}` : ""}!
            </h3>

            <p className="scj-success-text">
              Thank you for reaching out. A member of our care team will contact
              you within 24 hours to discuss your options.
            </p>

            <button
              type="button"
              className="scj-continue-btn"
              onClick={resetForm}
            >
              Start Another Enquiry
            </button>
          </div>
        )}
      </div>

      <div className="scj-trust-row">
        {[
          "No obligation, cancel anytime",
          "Secure & encrypted",
          "Response within 24 hours",
        ].map((text) => (
          <div className="scj-trust" key={text}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
