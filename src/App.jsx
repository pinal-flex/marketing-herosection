import HeroSection from "./components/HeroSection";
import "./App.css";
import NavBar from "./components/NavBar";
import FeatureSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";
import HeaderSection from "./components/HeaderSection";
import NewsletterSections from "./components/NewsletterSections";

function App() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <HeroSection />
      </div>
      <FeatureSection />
      <CTASection />
      <HeaderSection />
      <NewsletterSections />
    </>
  );
}
export default App;
