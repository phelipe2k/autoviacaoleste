"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, MapPin, Bus, Download, Eye, Search, Filter } from "lucide-react";
import { useState } from "react";

// Historico e proximas viagens simuladas do cliente.
const trips = [
  { id: "AVL-2024-001", route: "São Paulo → Rio de Janeiro", date: "15/01/2024", time: "08:00", status: "completed", seat: "15A", price: "R$ 89,90" },
  { id: "AVL-2024-002", route: "Rio de Janeiro → São Paulo", date: "20/01/2024", time: "14:00", status: "completed", seat: "12B", price: "R$ 89,90" },
  { id: "AVL-2024-003", route: "São Paulo → Curitiba", date: "05/03/2024", time: "07:30", status: "completed", seat: "08A", price: "R$ 99,90" },
  { id: "AVL-2024-004", route: "São Paulo → Florianópolis", date: "10/05/2024", time: "09:00", status: "completed", seat: "18C", price: "R$ 149,90" },
  { id: "AVL-2024-005", route: "São Paulo → Belo Horizonte", date: "12/07/2024", time: "10:00", status: "completed", seat: "05B", price: "R$ 79,90" },
  { id: "AVL-2025-001", route: "São Paulo → Rio de Janeiro", date: "15/06/2025", time: "08:00", status: "upcoming", seat: "15A", price: "R$ 89,90" },
  { id: "AVL-2025-002", route: "Rio de Janeiro → São Paulo", date: "20/06/2025", time: "14:00", status: "upcoming", seat: "12B", price: "R$ 89,90" },
];

export default function MinhasViagensPage() {
  // searchTerm busca por rota/codigo; filter separa viagens realizadas e proximas.
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Aplica busca textual e filtro de status antes de montar a lista.
  const filteredTrips = trips.filter((trip) => {
    const matchesSearch = trip.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || trip.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero da pagina com titulo e contexto da funcionalidade. */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-cyan opacity-20 blur-3xl" />
        
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
                Área do Cliente
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Minhas <span className="text-gradient">Viagens</span>
              </h1>
              <p className="body-lg max-w-2xl">
                Acompanhe seu histórico de viagens e visualize suas próximas passagens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Busca e filtro permitem localizar passagens especificas rapidamente. */}
      <section className="py-8 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                <input
                  type="text"
                  placeholder="Buscar viagem..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-cyan" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice focus:outline-none focus:border-cyan/50"
                >
                  <option value="all">Todas</option>
                  <option value="upcoming">Próximas</option>
                  <option value="completed">Realizadas</option>
                </select>
              </div>
            </div>

            {/* Lista renderiza os bilhetes encontrados depois dos filtros. */}
            <div className="space-y-4">
              {filteredTrips.map((trip, index) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                        <Bus className="w-7 h-7 text-cyan" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">{trip.route}</p>
                        <div className="flex items-center gap-4 text-sm text-ice/60 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {trip.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {trip.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            Poltrona {trip.seat}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        trip.status === "upcoming" 
                          ?"bg-cyan/20 text-cyan" 
                          : "bg-emerald-500/20 text-emerald-400"
                      }`}>
                        {trip.status === "upcoming" ?"Próxima" : "Realizada"}
                      </span>
                      <span className="text-white font-semibold">{trip.price}</span>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" title="Ver bilhete">
                          <Eye className="w-5 h-5 text-cyan" />
                        </button>
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" title="Download">
                          <Download className="w-5 h-5 text-cyan" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredTrips.length === 0 && (
              <div className="text-center py-16">
                <Bus className="w-16 h-16 text-cyan/20 mx-auto mb-4" />
                <p className="text-ice/60">Nenhuma viagem encontrada</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
