import HeroSection from "./components/HeroSection";
import "./App.css";
import NavBar from "./components/NavBar";
import FeatureSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";
import HeaderSection from "./components/HeaderSection";
import NewsletterSections from "./components/NewsletterSections";
import States from "./components/States";
import Testimonials from "./components/Testimonials";
import TeamSection from "./components/Teamsection";
import LogoClouds from "./components/LogoClouds";
import BlogSection from "./components/BlogSection";
import Footers from "./components/Footers";
import PricingSection from "./components/PricingSection";

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
      <States />
      <Testimonials />
      <TeamSection />
      <LogoClouds />
      <BlogSection />
      <Footers />
      <PricingSection />
    </>
  );
}
export default App;
