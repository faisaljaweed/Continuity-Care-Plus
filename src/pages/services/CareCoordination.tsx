import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function CareCoordination() {
  return (
    <ServicePageLayout
      badge="🧭 Care Coordination / Navigation"
      heroTitle="Rehabilitation Services"
      heroDesc="Our mission is to create meaningful impact by delivering innovative, reliable, and sustainable solutions that empower individuals and communities — committed to integrity, collaboration, and excellence."
      heroCTA1="Get In Touch"
      heroCTA2="Send a Message"
      heroStatNum="Mon–Sat"
      heroStatLabel="Extended Support Hours"
      heroStatSub="Mon–Thu: 9AM–8PM · Fri–Sat: 10AM–5PM"

      section1Label="Comprehensive Care at Home"
      section1Title="Seamless Care, Step-by-Step"
      section1Lead="We believe in fostering an environment that promotes independence and respect — through support, monitoring, guidance, and ongoing commitment."
      cards={[
        { icon: "🤲", title: "Support",     desc: "We provide continuous support to ensure patients receive consistent care, guidance, and attention throughout their treatment journey." },
        { icon: "📈", title: "Monitoring",  desc: "Our team closely monitors patient progress to maintain consistent care, identify improvements, and adjust treatment when necessary." },
        { icon: "💡", title: "Guidance",    desc: "We offer continuous guidance at every stage of care, ensuring you understand your treatment plan and feel supported throughout." },
        { icon: "🎯", title: "Commitment",  desc: "We are committed to providing ongoing care and attention, ensuring every patient receives reliable support and a smooth healing journey." },
        { icon: "🔄", title: "Navigation",  desc: "Helping you and your family understand options and next steps across NDIS, aged care and community health." },
        { icon: "📞", title: "Referrals",   desc: "Trusted referrals to specialist clinicians and allied health when your care needs more expertise." },
      ]}

      section2Label="What We Do"
      section2Title="Care That is a Heartfelt Commitment"
      section2Body="Old care is a heartfelt commitment to supporting and honouring our elderly with the dignity and compassion they deserve. It involves creating a safe, comfortable, and nurturing environment where seniors feel valued, heard, and respected. Through personalised care, emotional support, and meaningful interaction, we aim to enhance their quality of life and promote independence while ensuring they are never alone."
      checklistLeft={[
        "NDIS participants",
        "My Aged Care clients",
        "Hospital discharge cases",
        "Complex needs coordination",
        "Rural and remote clients",
        "Multicultural communities",
      ]}
      darkTitle="Why Choose Continuity Care for Navigation?"
      darkBody="We bridge the gap between clinical requirements and daily life — ensuring every piece of your care connects seamlessly so you can focus on living."
      darkChecklist={[
        "Expert Navigation",
        "Medical Coordination",
        "Trusted Referrals",
        "Home-Based Support",
        "Integrated Planning",
        "Ongoing Advocacy",
      ]}

      faqs={[
        { q: "What does a care coordinator do day-to-day?", a: "Your coordinator liaises with service providers, manages your schedule, monitors your progress, and advocates for your needs — so you don't have to navigate the system alone." },
        { q: "Is care coordination funded by NDIS?", a: "Yes. Care coordination can be funded under Capacity Building supports in your NDIS plan." },
        { q: "Can I change my care coordinator?", a: "Absolutely. If the relationship isn't working, we will find a better fit — your comfort and trust come first." },
      ]}

      ctaTitle="Ready to Start Care Coordination?"
      ctaSub="Our Queensland team is ready to connect the pieces of your care."
      ctaCTA1="Send Message"
      ctaCTA2="Book Free Consultation"
    />
  );
}
