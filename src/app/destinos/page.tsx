"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ImageCard, PageHero, SectionHeader } from "@/components/ui/premium";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const allDestinations = [
  { city: "Litoral e praias", state: "RJ / ES / SC", region: "sul-sudeste", coverage: "Excursões sob consulta", tag: "Praia", image: "/images/brand-scenes/destination-coast.webp", alt: "Ônibus Auto Viação Leste chegando ao litoral" },
  { city: "Governador Valadares", state: "MG", region: "sudeste", coverage: "Base de saída", tag: "Base", image: "/images/brand-scenes/fleet-exterior-premium.webp", alt: "Ônibus Auto Viação Leste com identidade visual oficial" },
  { city: "Belo Horizonte", state: "MG", region: "sudeste", coverage: "Eventos e grupos", tag: "Eventos", image: "/images/brand-scenes/travel-planning-team.webp", alt: "Planejamento de viagem em grupo" },
  { city: "Cidades históricas", state: "MG / BR", region: "nacional", coverage: "Roteiro personalizado", tag: "Cultura", image: "/images/brand-scenes/destination-cultural.webp", alt: "Ônibus Auto Viação Leste em roteiro cultural" },
  { city: "Outros destinos", state: "BR", region: "nacional", coverage: "Avaliação comercial", tag: "Sob medida", image: "/images/brand-scenes/cta-brand-bus.webp", alt: "Ônibus Auto Viação Leste em composição premium" },
];

export default function DestinosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  const filteredDestinations = allDestinations.filter((dest) => {
    const query = `${dest.city} ${dest.state} ${dest.coverage}`.toLowerCase();
    const matchesSearch = query.includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "todos" || dest.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      <PageHero
        eyebrow="Roteiros e excursões"
        title={<>Escolha o destino. A gente ajuda a <span className="text-warm-gradient">dar forma à viagem.</span></>}
        description="Consulte possibilidades para praias, eventos, cidades históricas, encontros e roteiros personalizados para grupos."
        image="/images/brand-scenes/destination-coast.webp"
        imageAlt="Destino de praia para excursões turísticas"
        primaryCta={{ href: "/passagens", label: "Solicitar orçamento" }}
        secondaryCta={{ href: "/contato", label: "Falar com a equipe" }}
      />

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-road" />
        <div className="relative section-padding">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Catálogo turístico"
              title={<>Roteiros com <span className="text-warm-gradient">contexto visual</span></>}
              description="Os cards deixam de ser placeholders e passam a comunicar experiência, tipo de viagem e disponibilidade."
              className="mb-8"
            />

            <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
                <input
                  type="text"
                  placeholder="Buscar cidade, estado ou tipo de roteiro..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-dark/60 py-3 pl-12 pr-4 text-ice placeholder:text-ice/40 focus:border-gold/60 focus:outline-none"
                />
              </div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="rounded-xl border border-white/10 bg-dark/60 px-4 py-3 text-ice focus:border-gold/60 focus:outline-none"
              >
                <option value="todos">Todas as regiões</option>
                <option value="sudeste">Sudeste</option>
                <option value="sul-sudeste">Sul e Sudeste</option>
                <option value="nacional">Outras regiões</option>
              </select>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((dest, index) => (
                <motion.div
                  key={dest.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ImageCard href="/contato" image={dest.image} imageAlt={dest.alt} eyebrow={dest.tag} title={dest.city} meta={dest.state} description={dest.coverage}>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
                      Consultar roteiro
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </ImageCard>
                </motion.div>
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="py-16 text-center text-ice/60">Nenhum destino encontrado.</div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
