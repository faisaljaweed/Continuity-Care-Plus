import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function RespiteCare() {
  return (
    <ServicePageLayout
      badge="🌿 Respite Care"
      heroTitle="Respite Care — Carer Relief"
      heroDesc="Quality respite care gives family and unpaid carers a well-deserved break, while the person they care for receives safe, compassionate, consistent support. Caring for you both."
      heroCTA1="Arrange Respite"
      heroCTA2="Talk to Our Team"
      heroStatNum="28"
      heroStatLabel="Days STA per year (typical NDIS)"
      heroStatSub="Flexible respite options for NDIS, My Aged Care, and private clients."

      section1Label="Flexible Carer Relief"
      section1Title="Respite Options That Work for Your Family"
      section1Lead="Caring is one of the most important things a person can do — and one of the most demanding. Respite isn't a luxury; it's essential for sustainable, quality care."
      cards={[
        { icon: "🏠", title: "In-Home Respite",          desc: "A trained support worker comes to your home so your carer can take a break — hours, a day, or overnight." },
        { icon: "🌅", title: "Centre-Based Respite",      desc: "Day programs and centre-based activities that give the person cared for something meaningful to do." },
        { icon: "🏕️", title: "Short-Term Accommodation",  desc: "Overnight or holiday stays in quality accommodation with 24/7 support — a genuine break for everyone." },
        { icon: "🆘", title: "Emergency Respite",         desc: "When a carer is suddenly unavailable, we respond quickly to ensure continuity of care and safety." },
        { icon: "🌙", title: "Overnight Support",         desc: "Active or sleepover night support so carers can sleep knowing their loved one is safe." },
        { icon: "📆", title: "Planned Respite",           desc: "Regular scheduled respite built into your routine — giving carers predictable, restorative breaks." },
      ]}

      section2Label="For Carers"
      section2Title="For Carers: You Matter Too"
      section2Body="Carer burnout is real. Taking regular breaks doesn't mean you love someone less — it means you're committed to caring for them long-term. We're here to support you in that mission."
      checklistLeft={[
        "NDIS & Aged Care funded options",
        "Flexible booking durations",
        "Consistent familiar workers",
        "No minimum booking required",
        "Culturally appropriate care",
        "24/7 availability",
      ]}
      darkTitle="Is Respite Right for Your Family?"
      darkBody="Respite care is available for families caring for people with disability, older Australians, and those recovering from illness. It supports both the person receiving care and the person providing it."
      darkChecklist={[
        "NDIS Short Term Accommodation",
        "My Aged Care Respite",
        "Emergency Respite",
        "Overnight support available",
        "Holiday and travel support",
        "Centre and community-based",
      ]}

      faqs={[
        { q: "Can I get respite funded through NDIS?", a: "Yes. Respite (Short Term Accommodation and Assistance) is a funded category in most NDIS plans for participants who have unpaid carers." },
        { q: "How much respite can I access per year?", a: "Funding varies by plan. Most participants can access 28 days of Short Term Accommodation per year. We help you make the most of your allocation." },
        { q: "Can we use the same respite worker each time?", a: "Wherever possible, we match consistent workers to build familiarity and trust — for both the participant and the carer." },
        { q: "What if I need emergency respite at short notice?", a: "We have capacity for emergency respite and aim to respond within 24 hours. Call our team directly on 1800 012 273." },
      ]}

      ctaTitle="Arrange Respite Care Today"
      ctaSub="Give yourself and your loved one the break you both deserve. Our team is here to help."
      ctaCTA1="Arrange Respite"
      ctaCTA2="Call 1800 012 273"
    />
  );
}
