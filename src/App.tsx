import About from "./components/layout/About";
import BlogListing from "./components/layout/Blog";
import Clients from "./components/layout/Clients";
import DigitalReality from "./components/layout/DigitalReality";
import { Faq } from "./components/layout/Faq";
import { Footer } from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import OurApp from "./components/layout/OurApp";
import Partners from "./components/layout/Partners";
import Services from "./components/layout/Services";
import Steps from "./components/layout/Steps";
import Testimonials from "./components/layout/Testimonials";
import Video from "./components/layout/Video";
import WhyChoose from "./components/layout/WhyChoose";
import { section12Logos, section2Logos } from "./data";

function App() {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <Partners
        logos={section2Logos}
        title="Trusted By Over 100+ Startups and Freelance Businesses"
      />
      <Services />
      <About />
      <WhyChoose />
      <Video />
      <Clients />
      <Steps />
      <BlogListing />
      <Testimonials />
      <Faq />
      <OurApp />
      <Partners logos={section12Logos} />
      <DigitalReality />
      <Partners logos={section12Logos} />
      <Footer />
    </div>
  );
}

export default App;
