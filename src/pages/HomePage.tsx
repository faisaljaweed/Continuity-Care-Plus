import HeroSlider              from "../components/home/HeroSlider";
import PathToBetterCare        from "../components/home/PathToBetterCare";
import OurServices             from "../components/home/OurServices";
import FindRightCare           from "../components/home/FindRightCare";
import ReadyToStart            from "../components/home/ReadyToStart";
import CareNetworkSection      from "../components/home/CareNetworkSection";
import StartCareJourney        from "../components/home/StartCareJourney";
import InsightsResources       from "../components/home/InsightsResources";
import WhyChooseContinuityCare from "../components/home/WhyChooseContinuityCare";
import FAQSection              from "../components/home/FAQSection";
import CTAFooterSection        from "../components/home/CTAFooterSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <PathToBetterCare />
      <OurServices />
      <FindRightCare />
      <ReadyToStart />
      <CareNetworkSection />
      <StartCareJourney />
      <InsightsResources />
      <WhyChooseContinuityCare />
      <FAQSection />
      <CTAFooterSection />
    </>
  );
}
