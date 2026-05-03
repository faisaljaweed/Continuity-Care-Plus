import ServicePageLayout from "../../components/layout/ServicePageLayout";

export default function AlliedHealth() {
  return (
    <ServicePageLayout
      badge="🩺 Allied Health"
      heroTitle="Our Mission is to Improve the Quality of Life of our Participants"
      heroDesc="Continuity Care was founded in 2017 from the idea of creating an environment where people living with a disability or health condition, and the clinicians that support them, were put first."
      heroCTA1="Book a Free Consultation"
      heroStatNum="2017"
      heroStatLabel="Founded in Brisbane"
      heroStatSub="Empowering communities with quality Continuity Care support since 2020."

      section1Label="Community Allied Health Services in Brisbane"
      section1Title="Comfort and Convenience During Therapy is Our Main Concern"
      section1Lead="We offer sessions at-home, in-clinic, out-in-public, and over telehealth. Our care coordinators ensure easy access to high-quality allied health support."
      cards={[
        { icon: "🛋️", title: "Occupational Therapy", desc: "Home modifications, equipment prescriptions, daily living assessments, and capacity building to help you live independently." },
        { icon: "🏃", title: "Physiotherapy",         desc: "Exercise programs, pain management, mobility and balance training, and post-surgical rehabilitation in your home." },
        { icon: "🗣️", title: "Speech Pathology",      desc: "Communication support, language and swallowing therapy for adults and children with a range of conditions." },
        { icon: "🧠", title: "Psychology",            desc: "Mental health support, behaviour intervention, and psychosocial counselling for NDIS participants." },
        { icon: "🥗", title: "Dietetics",             desc: "Nutrition assessment and meal planning for chronic conditions, disability, and aged care needs." },
        { icon: "👟", title: "Podiatry",              desc: "Foot and lower limb health management, preventing complications and supporting mobility." },
      ]}

      section2Label="How We Deliver"
      section2Title="Begin Your Journey Today"
      section2Body="Get a head start on receiving support with our experienced Brisbane clinicians by submitting our referral form. Our booking process is simple, confidential and flexible to fit your schedule."
      steps={[
        { title: "At Home",    desc: "Therapy in your own comfortable environment — no travel required." },
        { title: "In Clinic",  desc: "Access our Brisbane clinic spaces for hands-on assessment and treatment." },
        { title: "In Public",  desc: "Community-based therapy sessions at the places that matter to you." },
        { title: "Telehealth", desc: "Remote video-call sessions for clients across Queensland." },
      ]}
      darkTitle="Empowering Communities with Quality Support"
      darkBody="Continuity Care has proudly provided Support at Home services to communities since 2020. Contact us today."
      darkChecklist={[
        "NDIS Funded",
        "Aged Care Funded",
        "Home Visits Available",
        "Telehealth Options",
        "Goal-Directed Therapy",
        "Team Approach",
      ]}

      faqs={[
        { q: "Do I need a GP referral for allied health?", a: "You don't always need a GP referral. If you're an NDIS participant, allied health can be included in your Capacity Building supports without a referral." },
        { q: "Can therapists come to my home?", a: "Yes. Our team provides home-based assessments and therapy across Brisbane, minimising the need for travel." },
        { q: "Is allied health covered by NDIS?", a: "Yes. Allied health services can be funded under Capacity Building — Improved Daily Living in your NDIS plan." },
      ]}

      ctaTitle="Begin Your Journey Today"
      ctaSub="Get a head start on receiving support with our experienced Brisbane clinicians."
      ctaCTA1="Book a Free Consultation"
      ctaCTA2="Submit a Referral"
    />
  );
}
