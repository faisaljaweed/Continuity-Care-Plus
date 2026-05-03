import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function SupportCoordination() {
  return (
    <ServicePageLayout
      badge="🔗 Support Coordination"
      heroTitle="What is Support Coordination?"
      heroDesc="Support Coordination is a capacity-building service under the NDIS designed to help participants understand, implement, and maximise their NDIS plans. In Brisbane alone, thousands of participants rely on Support Coordinators to simplify the complexities of the system."
      heroCTA1="Book a Free Consultation"
      heroStatNum="NDIS"
      heroStatLabel="Capacity Building Support"
      heroStatSub="Connecting Brisbane participants with trusted service providers."

      section1Label="How Can Support Coordination Help?"
      section1Title="Get the Most Out of Your NDIS Plan"
      section1Lead="Support Coordinators help you get the most out of your NDIS plan — connecting with providers, building capacity, and advocating fiercely for your goals."
      cards={[
        { icon: "🗺️", title: "Plan Implementation", desc: "Translating your NDIS plan into real, booked services — handling the search, vetting, and set-up." },
        { icon: "🤝", title: "Provider Connections", desc: "Tapping into our wide network of quality, vetted providers in Brisbane to find the best fit for your needs." },
        { icon: "📣", title: "Advocacy",             desc: "Speaking up for you in plan reviews, provider meetings, and when things aren't working as they should." },
        { icon: "📆", title: "Crisis Support",       desc: "When unexpected events disrupt your supports, we step in quickly to stabilise and find solutions." },
        { icon: "🎓", title: "Capacity Building",    desc: "Helping you understand the NDIS system so you can increasingly manage your own supports over time." },
        { icon: "🔄", title: "Plan Reviews",         desc: "Preparing evidence and supporting you through NDIS plan reviews to ensure your funding reflects your needs." },
      ]}

      section2Label="What to Expect"
      section2Title="What to Expect from Support Coordination"
      section2Body="At Continuity Care, we believe in putting participants first. Our approach is holistic, compassionate, and grounded in empowering you to take control of your plan with clarity and purpose."
      steps={[
        { title: "Initial Meeting",      desc: "We get to know you, your goals, and what's in your NDIS plan." },
        { title: "Provider Search",      desc: "We research and connect you with the best providers for your needs." },
        { title: "Service Agreements",   desc: "We help you understand and sign service agreements with providers." },
        { title: "Ongoing Support",      desc: "Regular check-ins, crisis response, and plan review preparation." },
      ]}
      darkTitle="Why Choose Continuity Care in Brisbane?"
      darkBody="With years of experience serving participants across Brisbane, Continuity Care has become a trusted name in Support Coordination."
      darkChecklist={[
        "Years of Brisbane experience",
        "Participant-first approach",
        "Specialist coordination available",
        "Complex needs expertise",
        "Crisis response capability",
        "Plan review advocacy",
      ]}

      faqs={[
        { q: "Is support coordination in my NDIS plan?", a: "It depends on your plan. Support Coordination is a funded line item in Capacity Building. We can help you check and advocate for its inclusion at your next review." },
        { q: "What's the difference between support coordination and plan management?", a: "Plan management handles the financial side of your plan. Support coordination helps you connect with and implement your services. Many people benefit from both." },
        { q: "Can I change my support coordinator?", a: "Yes, at any time. If your current coordinator isn't meeting your needs, you're free to change — we make the transition smooth." },
      ]}

      ctaTitle="Ready to Maximise Your NDIS Plan?"
      ctaSub="Continuity Care's Support Coordination team in Brisbane is ready to help you get started."
      ctaCTA1="Book a Free Consultation"
      ctaCTA2="Get In Touch"
    />
  );
}
