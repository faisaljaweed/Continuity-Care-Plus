import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function InHomeCare() {
  return (
    <ServicePageLayout
      badge="🏠 In-Home Care"
      heroTitle="In-Home Supports"
      heroDesc="At Continuity Care, we support Queenslanders to live safely and confidently at home. Our in-home support is designed to uphold your rights, protect your dignity, and improve your quality of life — not just complete a checklist of tasks."
      heroCTA1="Request a Call Back"
      heroCTA2="Talk to Our Queensland Team"
      heroStatNum="NDIS"
      heroStatLabel="My Aged Care & Privately Funded"
      heroStatSub="Post-Acute Care support across Queensland — metro, regional & rural."

      section1Label="Who We Support in Queensland"
      section1Title="We Provide In-Home Support Across Queensland For:"
      section1Lead="Whether you live in metropolitan, regional or rural Queensland, our focus is the same: your rights, dignity and quality of life at home."
      cards={[
        { icon: "♿", title: "NDIS Participants",       desc: "Comprehensive support for daily living, personal care, and skill development tailored to your NDIS plan." },
        { icon: "👴", title: "My Aged Care Clients",    desc: "Home support programs designed to help older Queenslanders maintain independence and quality of life." },
        { icon: "🏥", title: "Post-Acute Care Clients", desc: "Short-term intensive support for those returning home after hospital, surgery, or a health event." },
      ]}

      section2Label="The Continuity Care Difference in Queensland"
      section2Title="Rights. Quality of Life. Dignity. Coordination."
      section2Body="What sets us apart is how we connect the pieces of your support. We partner with trusted associate providers (such as clinicians and allied health) when needed, so your in-home support links smoothly with your broader care."
      steps={[
        { title: "Care Coordination", desc: "Aligning your services, schedule and providers for seamless support." },
        { title: "Case Management",   desc: "Keeping an eye on risks, changes and progress throughout your journey." },
        { title: "Care Navigation",   desc: "Helping you and your family understand options and next steps across NDIS." },
      ]}
      darkTitle="Our Commitment to You"
      darkBody="Every person we support deserves more than a task checklist — we focus on what gives your days meaning."
      darkChecklist={[
        "Your Rights First — you are a rights-holder",
        "Dignity Always — we protect your privacy",
        "Quality of Life — family, culture and community",
        "Quality & Safeguarding frameworks",
        "Consistency — familiar faces",
        "Flexibility — adjusts as your needs change",
      ]}

      faqs={[
        { q: "Can I choose my own support worker?", a: "Yes. We work with you to match a support worker who fits your preferences, language, culture, and care needs." },
        { q: "Is in-home care covered by NDIS or Aged Care?", a: "Yes. In-home support can be funded through your NDIS plan, My Aged Care Home Care Package, or privately." },
        { q: "How quickly can support start?", a: "We aim to begin services within days of your first consultation. Our team handles all the coordination." },
      ]}

      ctaTitle="Ready to Organise In-Home Support in Queensland?"
      ctaSub="Whether you're an NDIS participant, an older person with My Aged Care funding, or a post-acute client, Continuity Care can design the right in-home support for you."
      ctaCTA1="Book a Free In-Home Support Chat"
      ctaCTA2="Request a Call Back"
    />
  );
}
