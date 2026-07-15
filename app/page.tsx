import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import TrustSection from "@/components/TrustSection";
import ServicesMenu from "@/components/ServicesMenu";
import CalculatorSection from "@/components/CalculatorSection";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ServicesMenu />
        <CalculatorSection />
        <TrustSection />
        <WhyUs />
        <Process />
        <Gallery />
        <VideoSection />
        <Testimonials />
        <Team />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}