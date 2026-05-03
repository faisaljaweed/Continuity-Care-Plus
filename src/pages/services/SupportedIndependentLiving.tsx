import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function SupportedIndependentLiving() {
  return (
    <ServicePageLayout
      badge="🏡 Supported Independent Living"
      heroTitle="Independently Living at Your Happiest."
      heroDesc="Our mission is to create meaningful impact by delivering innovative, reliable, and sustainable solutions that empower individuals and communities — committed to integrity, collaboration, and excellence in everything we do."
      heroCTA1="Check NDIS Eligibility"
      heroCTA2="Find Out More"
      heroStatNum="SIL"
      heroStatLabel="NDIS-Funded Daily Support"
      heroStatSub="Helping you build independence and live in a home of your own."

      section1Label="What SIL Support Looks Like Day-to-Day"
      section1Title="Hands-On Daily Assistance Built Around You"
      section1Lead="SIL support provides assistance with daily living tasks, helping you develop skills and live as independently as possible — from morning routines to community access."
      cards={[
        { icon: "🍳", title: "Daily Living Skills",      desc: "Cooking, cleaning, laundry and personal hygiene — we build routines that work for you." },
        { icon: "💊", title: "Health & Medications",     desc: "Prompting and assistance with medications, appointments, and health management." },
        { icon: "🤝", title: "Social Connections",       desc: "Supporting you to maintain relationships, attend events, and engage with your community." },
        { icon: "💼", title: "Work & Study Support",     desc: "Helping you prepare for, attend, and succeed in employment or education goals." },
        { icon: "🏠", title: "Home Maintenance",         desc: "Assistance with household tasks to keep your home safe, clean, and comfortable." },
        { icon: "📋", title: "Goal Planning",            desc: "Regular reviews to track your progress and adjust support as your needs evolve." },
      ]}

      section2Label="Applying for SIL Funding"
      section2Title="Choose Your Preferred SIL Home"
      section2Body="SIL funding is included in your NDIS plan under Core Supports. Our team helps you prepare your SIL application, gather evidence, and work with the NDIS to ensure your funding reflects your daily support needs."
      steps={[
        { title: "Assessment",    desc: "We conduct a thorough needs assessment to understand your daily support requirements." },
        { title: "SIL Quote",     desc: "We develop a detailed SIL roster of care and submit a quote to the NDIS." },
        { title: "Plan Approval", desc: "Once approved, we work with you to find your ideal home and compatible housemates." },
        { title: "Move In",       desc: "Our team supports your transition and is with you every step of the way." },
      ]}
      darkTitle="Is SIL Right for You?"
      darkBody="SIL is designed for NDIS participants who need regular support to live independently. Ideal if you are transitioning from family care, specialist disability accommodation, or hospital."
      darkChecklist={[
        "You have an NDIS plan",
        "You need daily living support",
        "You want to build independence",
        "You're transitioning settings",
        "You want choice of housemates",
        "You may need overnight support",
      ]}

      faqs={[
        { q: "How is SIL different from other NDIS supports?", a: "SIL specifically funds the support workers who assist you in your home — it does not cover the cost of rent or food. It works alongside your other NDIS supports." },
        { q: "Can I choose my own housemates?", a: "Yes. We work with you and your family to find compatible housemates who share similar support needs and lifestyle preferences." },
        { q: "What happens if my support needs change?", a: "Your SIL funding can be reviewed and adjusted when your needs change. We help you prepare for NDIS plan reviews to ensure your roster of care reflects your current situation." },
      ]}

      ctaTitle="Ready to Explore SIL with Continuity Care?"
      ctaSub="Our team will guide you through every step — from eligibility to moving in."
      ctaCTA1="Book a Free Consultation"
      ctaCTA2="Talk to Our SIL Team"
    />
  );
}
