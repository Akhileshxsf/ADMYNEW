import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import FeaturesSection from "@/sections/FeaturesSection";
import { FAQ } from "@/sections/FAQ";
import { InteractivePricingCalculator } from "@/sections/Interactivepricingcalculator";
import { AiAnalytics } from "@/sections/AiAnalytics";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <Pricing />
      <InteractivePricingCalculator/>
      <FAQ/>
      <Testimonials />
      <CallToAction />
      <AiAnalytics />
      <Footer />
    </>
  );
}
