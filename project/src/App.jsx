import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import WebDesign from "./Pages/Services/WebDesign";
import MobileApps from "./Pages/Services/MobileApps";
import GraphicDesign from "./Pages/Services/GraphicDesign";
import UiUXDesign from "./Pages/Services/UiUXDesign";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";   
import SEOService from "./Pages/Services/SEOService";
import SEM from "./Pages/Services/SEM.JSX";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import GoogleBusiness from "./Pages/Services/GoogleBusiness";
import WesbiteSeo from "./Pages/Services/WesbiteSeo";
import GoogleAds from "./Pages/Services/GoogleAds";
import SocialMediaAds from "./Pages/Services/SocialMediaAds";
import RefundPolicy from "./Pages/Polices/RefundPolicy";
import PrivacyPolicy from "./Pages/Polices/PrivacyPolicy";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/ui-ux" element={<UiUXDesign />} />
        <Route path="/services/seo" element={<SEOService />} />
        <Route path="/services/sem" element={<SEM/>} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing/>} />
        <Route path="/services/google-business" element={<GoogleBusiness/>} />
        <Route path="/services/website-seo" element={<WesbiteSeo/>} />
        <Route path="/services/google-ads" element={<GoogleAds/>} />
        <Route path="/services/social-ads" element={<SocialMediaAds/>} />



        <Route path="/refund-policy" element={<RefundPolicy/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
