import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { FleetSection } from "@/components/fleet/FleetSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TestimonialsSection } from "@/components/institutional/TestimonialsSection";
import { CTASection } from "@/components/hero/CTASection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <FleetSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
