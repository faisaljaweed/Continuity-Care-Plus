import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function CommunityParticipation() {
  return (
    <ServicePageLayout
      badge="🤝 Community Participation"
      heroTitle="Community Participation"
      heroDesc="Build confidence, learn life skills, and feel meaningfully connected — your way, your pace. Active involvement in your community through volunteering, attending events, joining clubs, and building everyday connections."
      heroCTA1="Enquire Today"
      heroCTA2="Request a Call Back"
      heroStatNum="NDIS"
      heroStatLabel="Funded Community Access"
      heroStatSub="Self-funded and fee-for-service options also available."

      section1Label="What is Community Participation?"
      section1Title={`More Than Just "Something to Do"`}
      section1Lead="Community participation refers to the active involvement of individuals within their communities and broader society. It builds inclusive, resilient communities while making a powerful difference in everyday life."
      cards={[
        { icon: "🏘️", title: "Belonging",   desc: "Feeling accepted, included, and part of something bigger than yourself." },
        { icon: "💬", title: "Connection",  desc: "Building friendships, peer interaction, and genuine community support networks." },
        { icon: "🌐", title: "Inclusivity", desc: "Increasing access and participation for everyone in meaningful ways." },
        { icon: "😊", title: "Well-Being",  desc: "Brighter days, better mood, and meaningful routines that support mental health." },
        { icon: "🎓", title: "New Skills",  desc: "Develop routines and abilities that make everyday life easier and more independent." },
        { icon: "🤲", title: "Stronger Support", desc: "Social and community participation strengthens support networks around you." },
      ]}

      section2Label="How Our Support Works"
      section2Title="Simple, Personalised, and Built Around You"
      steps={[
        { title: "We Learn What Matters to You",              desc: "Your interests, preferences, goals, and the type of community participation you want." },
        { title: "We Match the Right Support",               desc: "We consider your needs, communication style, comfort levels, and activities you enjoy." },
        { title: "We Build a Tailored Activity Program",      desc: "Structure where it helps, flexibility where you need it — designed to support progress." },
        { title: "We Support, Encourage, and Grow Confidence", desc: "You can build independence at your pace, with consistent support." },
      ]}
      darkTitle="Empowerment through Capacity Building"
      darkBody="We strengthen everyday life skills in real community settings and help you build confidence to try new experiences at your own pace."
      darkChecklist={[
        "Independence and daily confidence",
        "Decision-making and planning",
        "Communication and social skills",
        "Routines that support wellbeing",
        "Community access and inclusion",
        "Connect with people & places that feel right",
      ]}
      fundingLeft={{ title: "Self-Funded Options", items: ["One-off request (event, appointment)", "Funding doesn't cover what you need", "Waiting for funding approval", "Quick access to supports"] }}
      fundingRight={{ title: "Fee-for-Service Options", items: ["Capacity building and life skills", "Confidence and independence", "Social participation", "Tailored weekly supports"] }}

      faqs={[
        { q: "Is community participation funded by NDIS?", a: "Community Participation may be funded through your NDIS plan when it aligns with your goals and support needs. Funding depends on your plan budgets and plan management type." },
        { q: "What activities can I do?", a: "Anything from volunteering, sport, arts and crafts, shopping trips, educational classes, social groups, community events, and special occasions like concerts or theme parks." },
        { q: "Can I choose what I want to do?", a: "Absolutely. We customise activity programs to suit you, with the right level of support to participate in experiences you actually enjoy." },
      ]}

      ctaTitle="Ready to Begin Your Journey?"
      ctaSub="Let's build a plan that helps you connect, grow, and thrive. Friendly, local team — no obligation."
      ctaCTA1="Enquire Today"
      ctaCTA2="Request a Call Back"
    />
  );
}
