import HeroSection from "./components/HeroSection";
import "./App.css";
import NavBar from "./components/NavBar";
import FeatureSection from "./components/FeatureSection";

function App() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <HeroSection />
      </div>
      <FeatureSection />
    </>
  );
}
export default App;
