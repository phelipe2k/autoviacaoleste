"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, MapPin, Bus, Eye, Search, Filter } from "lucide-react";
import { useState } from "react";

// Solicitações de exemplo usadas para demonstrar busca e filtro.
const requests = [
  { id: "AVL-2026-001", route: "Governador Valadares -> Rio de Janeiro", date: "15/06/2026", time: "Sob consulta", status: "open", detail: "Grupo turístico" },
  { id: "AVL-2026-002", route: "Governador Valadares -> Belo Horizonte", date: "20/06/2026", time: "A combinar", status: "open", detail: "Orçamento solicitado" },
  { id: "AVL-2026-003", route: "Governador Valadares -> Vitória", date: "05/07/2026", time: "Planejamento", status: "completed", detail: "Atendimento concluído" },
];

export default function MinhasViagensPage() {
  // Texto usado para buscar pelo trajeto ou identificador da solicitacao.
  const [searchTerm, setSearchTerm] = useState("");
  // Status selecionado no filtro da listagem.
  const [filter, setFilter] = useState("all");

  // Resultado final depois de aplicar busca e status.
  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || request.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />

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
                Minhas <span className="text-gradient">Solicitações</span>
              </h1>
              <p className="body-lg max-w-2xl">
                Acompanhe pedidos de orçamento, disponibilidade e informações sobre viagens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                <input
                  type="text"
                  placeholder="Buscar solicitação..."
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
                  <option value="open">Em andamento</option>
                  <option value="completed">Concluídas</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredRequests.map((request, index) => (
                <motion.div
                  key={request.id}
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
                        <p className="text-white font-semibold text-lg">{request.route}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-ice/60 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {request.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {request.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {request.detail}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          request.status === "open"
                            ? "bg-cyan/20 text-cyan"
                            : "bg-emerald-500/20 text-emerald-400"
                        }`}
                      >
                        {request.status === "open" ? "Em andamento" : "Concluída"}
                      </span>
                      <Link
                        href="/contato"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        title="Ver solicitação"
                        aria-label={`Ver solicitação ${request.id}`}
                      >
                        <Eye className="w-5 h-5 text-cyan" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredRequests.length === 0 && (
              <div className="text-center py-16">
                <Bus className="w-16 h-16 text-cyan/20 mx-auto mb-4" />
                <p className="text-ice/60">Nenhuma solicitação encontrada</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
