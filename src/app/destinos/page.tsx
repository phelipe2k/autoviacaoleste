"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const allDestinations = [
  { city: "São Paulo", state: "SP", coverage: "Sob consulta", image: "/images/destinations/sp.jpg" },
  { city: "Rio de Janeiro", state: "RJ", coverage: "Turismo sob consulta", image: "/images/destinations/rj.jpg" },
  { city: "Curitiba", state: "PR", coverage: "Sob consulta", image: "/images/destinations/pr.jpg" },
  { city: "Florianópolis", state: "SC", coverage: "Sob consulta", image: "/images/destinations/sc.jpg" },
  { city: "Belo Horizonte", state: "MG", coverage: "Eventos e grupos", image: "/images/destinations/mg.jpg" },
  { city: "Campinas", state: "SP", coverage: "Atendimento regional", image: "/images/destinations/campinas.jpg" },
  { city: "Santos", state: "SP", coverage: "Atendimento regional", image: "/images/destinations/santos.jpg" },
  { city: "Outras cidades", state: "BR", coverage: "Avaliação comercial", image: "/images/destinations/br.jpg" },
];

export default function DestinosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch =
      dest.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "todos" ||
      (selectedRegion === "sudeste" && ["SP", "RJ", "MG"].includes(dest.state)) ||
      (selectedRegion === "sul" && ["PR", "SC", "RS"].includes(dest.state)) ||
      (selectedRegion === "nacional" && dest.state === "BR");
    return matchesSearch && matchesRegion;
  });

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-cyan opacity-20 blur-3xl" />

        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
                Turismo e fretamento
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Roteiros sob <span className="text-gradient">Consulta</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Consulte nossa equipe para avaliar excursões, eventos, viagens em grupo e fretamentos por região.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                <input
                  type="text"
                  placeholder="Buscar cidade ou estado..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                />
              </div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice focus:outline-none focus:border-cyan/50"
              >
                <option value="todos">Todas as regiões</option>
                <option value="sudeste">Sudeste</option>
                <option value="sul">Sul</option>
                <option value="nacional">Outras regiões</option>
              </select>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDestinations.map((dest, index) => (
                <motion.div
                  key={dest.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group glass-card overflow-hidden cursor-pointer hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-teal/20 to-cyan/10 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-cyan/30" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan transition-colors">
                      {dest.city}
                    </h3>
                    <p className="text-sm text-ice/60">{dest.state}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-cyan">{dest.coverage}</span>
                      <ArrowRight className="w-4 h-4 text-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-16">
                <MapPin className="w-16 h-16 text-cyan/20 mx-auto mb-4" />
                <p className="text-ice/60">Nenhum destino encontrado</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
