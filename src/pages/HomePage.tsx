import About from "@/components/layout/About";
import BlogListing from "@/components/layout/Blog";
import DigitalReality from "@/components/layout/DigitalReality";
import { Faq } from "@/components/layout/Faq";
import Hero from "@/components/layout/Hero";
import ImportantNumbers from "@/components/layout/ImportantNumbers";
import OurApp from "@/components/layout/OurApp";
import Partners from "@/components/layout/Partners";
import Services from "@/components/layout/Services";
import Steps from "@/components/layout/Steps";
import Testimonials from "@/components/layout/Testimonials";
import Video from "@/components/layout/Video";
import WhyChoose from "@/components/layout/WhyChoose";
import { section2Logos, section12Logos } from "@/data";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Partners
        logos={section2Logos}
        title="Trusted By Over 100+ Startups and Freelance Businesses"
      />
      <Services />
      <About />
      <WhyChoose />
      <Video />
      {/* <Clients /> */}
      <Steps />
      <BlogListing />
      <Testimonials />
      <Faq />
      <OurApp />
      <ImportantNumbers />
      <DigitalReality />
      <Partners logos={section12Logos} />
    </div>
  );
}
