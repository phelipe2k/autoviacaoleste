"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { MapPin, Search, Filter, ArrowRight } from "lucide-react";
import { useState } from "react";

// Lista completa de destinos usada para busca e filtro por regiao.
const allDestinations = [
  { city: "São Paulo", state: "SP", routes: 45, image: "/images/destinations/sp.jpg" },
  { city: "Rio de Janeiro", state: "RJ", routes: 32, image: "/images/destinations/rj.jpg" },
  { city: "Curitiba", state: "PR", routes: 28, image: "/images/destinations/pr.jpg" },
  { city: "Florianópolis", state: "SC", routes: 15, image: "/images/destinations/sc.jpg" },
  { city: "Porto Alegre", state: "RS", routes: 12, image: "/images/destinations/rs.jpg" },
  { city: "Belo Horizonte", state: "MG", routes: 20, image: "/images/destinations/mg.jpg" },
  { city: "Salvador", state: "BA", routes: 8, image: "/images/destinations/ba.jpg" },
  { city: "Recife", state: "PE", routes: 6, image: "/images/destinations/pe.jpg" },
  { city: "Brasília", state: "DF", routes: 18, image: "/images/destinations/df.jpg" },
  { city: "Goiânia", state: "GO", routes: 14, image: "/images/destinations/go.jpg" },
  { city: "Campinas", state: "SP", routes: 22, image: "/images/destinations/campinas.jpg" },
  { city: "Santos", state: "SP", routes: 16, image: "/images/destinations/santos.jpg" },
];

export default function DestinosPage() {
  // searchTerm filtra por texto; selectedRegion filtra por grupos de estados.
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  // Calcula os destinos visiveis combinando busca por cidade/estado e regiao selecionada.
  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch = dest.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "todos" || 
                         (selectedRegion === "sudeste" && ["SP", "RJ", "MG"].includes(dest.state)) ||
                         (selectedRegion === "sul" && ["PR", "SC", "RS"].includes(dest.state)) ||
                         (selectedRegion === "nordeste" && ["BA", "PE"].includes(dest.state)) ||
                         (selectedRegion === "centro" && ["DF", "GO"].includes(dest.state));
    return matchesSearch && matchesRegion;
  });

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero da pagina: apresenta o assunto principal da rota. */}
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
                Destinos
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Explore o <span className="text-gradient">Brasil</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Mais de 120 rotas conectando você aos melhores destinos do país.
              </p>
            </motion.div>

            {/* Campo de busca e filtro regional atualizam a lista em tempo real. */}
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
                  placeholder="Buscar destino..."
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
                <option value="nordeste">Nordeste</option>
                <option value="centro">Centro-Oeste</option>
              </select>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grade renderiza somente os destinos filtrados. */}
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
                      <span className="text-xs text-cyan">{dest.routes} rotas</span>
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
