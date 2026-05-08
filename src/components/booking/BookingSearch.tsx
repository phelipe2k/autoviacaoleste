"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Ticket,
  Briefcase,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define as abas permitidas no formulario para manter o estado tipado e evitar valores invalidos.
type TabType = "passagens" | "viagens" | "horarios";

export function BookingSearch() {
  // Estados controlam a aba ativa e os campos digitados pelo usuario na busca.
  const [activeTab, setActiveTab] = useState<TabType>("passagens");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  // Configuracao das abas: cada item informa o identificador, texto e icone exibido.
  const tabs = [
    { id: "passagens" as TabType, label: "Passagens", icon: Ticket },
    { id: "viagens" as TabType, label: "Minhas Viagens", icon: Briefcase },
    { id: "horarios" as TabType, label: "Horários", icon: Clock },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative z-20"
    >
      <div className="glass-card overflow-hidden">
        {/* Abas superiores alternam entre compra de passagens, viagens e consulta de horarios. */}
        <div className="flex border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ?"text-cyan border-b-2 border-cyan bg-cyan/5"
                  : "text-ice/60 hover:text-ice hover:bg-white/5"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Formulario principal de busca de passagens. */}
          {activeTab === "passagens" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {/* Origin */}
              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Origem
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="De onde você sai?"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Destino
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Para onde você vai?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Data da Viagem
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Passageiros
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice focus:outline-none focus:border-cyan/50 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ?"passageiro" : "passageiros"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full btn-primary flex items-center justify-center gap-2 py-3.5">
                  Buscar
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Atalho para a area onde o cliente acompanha compras ja realizadas. */}
          {activeTab === "viagens" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-ice/60 mb-4">
                Acesse suas viagens e bilhetes comprados
              </p>
              <button className="btn-outline inline-flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Entrar na Área do Cliente
              </button>
            </motion.div>
          )}

          {/* Consulta simplificada para verificar horarios entre duas cidades. */}
          {activeTab === "horarios" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="relative">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Origem
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Cidade de origem"
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Destino
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Cidade de destino"
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full btn-primary flex items-center justify-center gap-2 py-3.5">
                  <Clock className="w-5 h-5" />
                  Ver Horários
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
