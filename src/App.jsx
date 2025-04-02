import HeroSection from "./components/HeroSection";
import "./App.css";
import NavBar from "./components/NavBar";
import FeatureSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";

function App() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <HeroSection />
      </div>
      <FeatureSection />
      <CTASection />
    </>
  );
}
export default App;
