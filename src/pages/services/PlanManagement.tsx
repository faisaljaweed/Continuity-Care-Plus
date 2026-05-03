import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function PlanManagement() {
  return (
    <ServicePageLayout
      badge="📊 Plan Management"
      heroTitle="NDIS Plan Management"
      heroDesc="With the right plan manager by your side, your NDIS journey gets a whole lot easier. At Continuity Care we seek to put you in control and give you the flexibility you need to get the most out of your plan. You make the decisions — we'll handle the rest."
      heroCTA1="Get Started"
      heroCTA2="Learn More"
      heroStatNum="Nationwide"
      heroStatLabel="Accepting Plan Management Referrals"
      heroStatSub="You make the decisions. We handle the rest."

      section1Label="Why Choose NDIS Plan Management?"
      section1Title="A Passionate Team of NDIS Experts in Your Corner"
      section1Lead="At Continuity Care, we're dedicated to providing you with the tools and support needed to effectively manage your services and budget — so you can focus on what matters most: reaching your goals."
      cards={[
        { icon: "🎓", title: "NDIS Experts",           desc: "Our team is ready to help you understand and make the most of your plan — plain English, no jargon." },
        { icon: "🕐", title: "Extended Support",        desc: "With long-term support and extended opening hours, our team is here for you when you need us." },
        { icon: "💻", title: "Innovative Nappa Portal", desc: "Gain real-time access to your budget with Nappa, our user-friendly online portal that simplifies management of your NDIS plan." },
        { icon: "⚡", title: "Reliable & Prompt",       desc: "We ensure that your invoices are processed quickly to maintain consistent service delivery from your providers." },
      ]}

      section2Label="What is NDIS Plan Management?"
      section2Title="We Do More Than Just Pay Invoices"
      section2Body="Some people think plan managers just pay invoices. Not us. We work to maximise the benefits of your NDIS plan so you can live your best life."
      checklistLeft={[
        "Pay your provider invoices promptly on your behalf",
        "Track your NDIS budget in real time",
        "Give you access to registered and unregistered providers",
        "Handle all NDIS financial reporting and compliance",
        "Check invoices against the NDIS Price Guide",
        "Provide a named plan manager — not a call centre",
      ]}
      darkTitle="Continuity Connect for Clinical Nurses"
      darkBody="Continuity Connect empowers clinical nurses with real-time patient information, seamless communication tools, and integrated care management systems — enabling efficient, coordinated, and high-quality care."
      darkChecklist={[
        "No cost to your other supports",
        "Use unregistered providers",
        "Financial transparency",
        "NDIS compliance handled",
        "Expert guidance included",
        "Faster payments to providers",
      ]}

      faqs={[
        { q: "Is plan management free to me?", a: "Yes. Plan management is funded by a separate line item in your NDIS plan — it costs nothing from your other supports." },
        { q: "Can I change my plan manager?", a: "Yes, at any time. The transition process is straightforward and our team handles all the paperwork." },
        { q: "Can I use unregistered providers with plan management?", a: "Yes — that is one of the biggest advantages. Plan management gives you access to both NDIS registered and unregistered providers." },
      ]}

      ctaTitle="Ready to Take Control of Your NDIS Plan?"
      ctaSub="We are accepting Plan Management referrals nationwide. Get in touch today."
      ctaCTA1="Get Started"
      ctaCTA2="Call 1800 012 273"
    />
  );
}
