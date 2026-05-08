"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ClipboardList,
  MessageCircle,
  Route,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "orcamento" | "roteiro" | "whatsapp";

export function BookingSearch() {
  const [activeTab, setActiveTab] = useState<TabType>("orcamento");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(15);

  const tabs = [
    { id: "orcamento" as TabType, label: "Orçamento turístico", icon: ClipboardList },
    { id: "roteiro" as TabType, label: "Montar roteiro", icon: Route },
    { id: "whatsapp" as TabType, label: "WhatsApp", icon: MessageCircle },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative z-20"
    >
      <div className="glass-card overflow-hidden">
        <div className="flex border-b border-white/10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 whitespace-nowrap",
                activeTab === tab.id
                  ? "text-cyan border-b-2 border-cyan bg-cyan/5"
                  : "text-ice/60 hover:text-ice hover:bg-white/5"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === "orcamento" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Saída
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Cidade de saída"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Destino turístico
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Praia, cidade ou evento"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Data da viagem
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

              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Pessoas
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice focus:outline-none focus:border-cyan/50 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    {[15, 25, 35, 45, 50].map((num) => (
                      <option key={num} value={num}>
                        Até {num} pessoas
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full btn-primary flex items-center justify-center gap-2 py-3.5">
                  Solicitar orçamento
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "roteiro" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-ice/60 mb-4">
                Informe o destino desejado, quantidade de pessoas, cidade de saída e duração da viagem. A equipe ajuda a organizar uma proposta turística sob consulta.
              </p>
              <button className="btn-outline inline-flex items-center gap-2">
                <Route className="w-4 h-4" />
                Planejar roteiro turístico
              </button>
            </motion.div>
          )}

          {activeTab === "whatsapp" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-ice/60 mb-4">
                Prefere atendimento direto? Chame pelo WhatsApp para falar sobre excursões, grupos e destinos turísticos.
              </p>
              <button className="btn-primary inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
