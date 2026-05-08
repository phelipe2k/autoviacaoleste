"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ClipboardList,
  Briefcase,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "solicitacao" | "atendimento" | "disponibilidade";

export function BookingSearch() {
  const [activeTab, setActiveTab] = useState<TabType>("solicitacao");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const tabs = [
    { id: "solicitacao" as TabType, label: "Solicitar or?amento", icon: ClipboardList },
    { id: "atendimento" as TabType, label: "Atendimento", icon: Briefcase },
    { id: "disponibilidade" as TabType, label: "Disponibilidade", icon: Clock },
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
          {activeTab === "solicitacao" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Origem
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="De onde voc? sai?"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Destino
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Para onde voc? vai?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Data desejada
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
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "pessoa" : "pessoas"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full btn-primary flex items-center justify-center gap-2 py-3.5">
                  Solicitar or?amento
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "atendimento" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-ice/60 mb-4">
                Fale com nossa equipe para tirar d?vidas, pedir or?amento ou acompanhar uma solicita??o.
              </p>
              <button className="btn-outline inline-flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Fale conosco
              </button>
            </motion.div>
          )}

          {activeTab === "disponibilidade" && (
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
                  Consultar disponibilidade
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
