import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { FleetSection } from "@/components/fleet/FleetSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TestimonialsSection } from "@/components/institutional/TestimonialsSection";
import { CTASection } from "@/components/hero/CTASection";

// Pagina inicial: organiza os blocos principais na ordem em que aparecem para o visitante.
export default function Home() {
  return (
    <main className="relative">
      {/* Navegacao fixa no topo do site. */}
      <Navbar />
      {/* Primeira dobra da home, com banner, chamada principal e busca de passagens. */}
      <HeroSection />
      {/* Secoes comerciais reutilizaveis que apresentam destinos, frota, servicos e prova social. */}
      <DestinationsSection />
      <FleetSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* Chamada final para estimular solicitação ou contato. */}
      <CTASection />
      <Footer />
    </main>
  );
}
