import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ContinuityCare from "./Components/Home_Slider";
import PathToBetterCare from "./Components/Home_Section2";
import OurServices from "./Components/HomeSection3";
import FindRightCare from "./Components/Home_Section4";
import ReadyToStart from "./Components/Home_Section5";
import StartCareJourney from "./Components/Home_Sectoin6";
import InsightRresources from "./Components/Home_Section7";
import WhyChooseContinuityCare from "./Components/Home_Section8";
import FAQSection from "./Components/Home_Section9";
import CTAFooterSection from "./Components/Home_Section10";
import Footer from "./Components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ContinuityCare />
      <PathToBetterCare />
      <OurServices />
      <FindRightCare />
      <ReadyToStart />
      <StartCareJourney />
      <InsightRresources />
      <WhyChooseContinuityCare />
      <FAQSection />
      <CTAFooterSection />
      <Footer />
    </>
  );
}

export default App;
