import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function CommunityNursing() {
  return (
    <ServicePageLayout
      badge="💉 Community Nursing"
      heroTitle="Enabling the Transformation of Community Nursing"
      heroDesc="Continuity Care supports the delivery of high-quality care within the comfort of home, connecting caregivers, patients, and families for better health outcomes."
      heroCTA1="Book a Free Consultation"
      heroStatNum="New"
      heroStatLabel="Aged Care Act Aligned"
      heroStatSub="Rights-based community nursing — safer care, better outcomes, at home."

      section1Label="Comprehensive Care at Home"
      section1Title="Our Cloud-Based Platform Connects Every Stakeholder"
      section1Lead="We improve overall health, well-being, and quality of life by connecting caregivers, patients, and families through integrated care management — maintaining optimal care and minimising hospital presentations."
      cards={[
        { icon: "🩹", title: "Wound Care",             desc: "Assessment, dressing changes, and ongoing wound management by registered nurses." },
        { icon: "💊", title: "Medication Management",  desc: "Administration, monitoring, and education around complex medication regimes." },
        { icon: "🩸", title: "Chronic Disease Management", desc: "Support for diabetes, heart conditions, respiratory illness, and more." },
        { icon: "🏥", title: "Post-Hospital Support",  desc: "Clinical oversight when you transition home after surgery, illness, or a health event." },
        { icon: "📊", title: "Health Monitoring",      desc: "Regular vital sign checks, health assessments, and liaison with your GP and specialists." },
        { icon: "🧪", title: "Catheter & Stoma Care",  desc: "Specialist nursing care for continence and stoma management in your home." },
      ]}

      section2Label="Rights-Based Community Nursing"
      section2Title="Australia's New Aged Care Act"
      section2Body="Australia's new Aged Care Act places the rights of older people at the centre of the aged care system. Our nursing services are fully aligned with these rights-based principles."
      checklistLeft={[
        "Safer care at home through early detection",
        "Choice, control and participation",
        "Reduced risk of harm",
        "Better transparency for families",
        "Evidence-informed decision-making",
      ]}
      darkTitle="Why This Matters in Australia"
      darkBody="Our cloud-based platform connects every stakeholder to improve overall health, well-being, and quality of life."
      darkChecklist={[
        "Personalised Care Plans",
        "Comfort of Familiar Surroundings",
        "Continuous Health Monitoring",
        "Improved Safety & Fall Prevention",
        "Better Quality of Life",
        "NDIS & Aged Care Funded",
      ]}

      faqs={[
        { q: "What clinical services does community nursing cover?", a: "Our registered nurses provide wound care, medication management, chronic disease monitoring, post-acute support, catheter and stoma care, and health assessments — all in your home." },
        { q: "Is community nursing funded by NDIS or Aged Care?", a: "Yes. Community nursing can be funded through your NDIS plan, My Aged Care Home Care Package, or DVA. Our team will help you understand your entitlements." },
        { q: "Can I get after-hours nursing support?", a: "Yes. We offer extended hours and after-hours nursing support for clients with complex clinical needs. Contact our team to discuss availability." },
      ]}

      ctaTitle="Book a Free Consultation Today"
      ctaSub="Continuity Care's clinical nursing team is ready to support you at home."
      ctaCTA1="Book a Free Consultation"
      ctaCTA2="Call 1800 012 273"
    />
  );
}
