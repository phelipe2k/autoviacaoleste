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
import { whatsappUrl } from "@/lib/contact";

type TabType = "orcamento" | "roteiro" | "whatsapp";

export function BookingSearch() {
  // Aba ativa define qual fluxo de atendimento aparece no box.
  const [activeTab, setActiveTab] = useState<TabType>("orcamento");
  // Campos do pedido rapido de orcamento.
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(15);

  // Abas disponiveis no componente de busca/contato.
  const tabs = [
    { id: "orcamento" as TabType, label: "Orçamento turístico", shortLabel: "Orçamento", icon: ClipboardList },
    { id: "roteiro" as TabType, label: "Montar roteiro", shortLabel: "Roteiro", icon: Route },
    { id: "whatsapp" as TabType, label: "WhatsApp", shortLabel: "WhatsApp", icon: MessageCircle },
  ];

  // Mensagem enviada ao WhatsApp quando o usuario usa o formulario rapido.
  const quoteMessage = [
    "Olá! Gostaria de solicitar um orçamento turístico.",
    origin ? `Saída: ${origin}` : "Saída: a definir",
    destination ? `Destino: ${destination}` : "Destino: a definir",
    date ? `Data: ${date}` : "Data: a definir",
    `Grupo: até ${passengers} pessoas`,
  ].join("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative z-20"
    >
      <div className="glass-card bg-dark-lighter/90 border-cyan/20 overflow-hidden shadow-deep">
        <div className="grid grid-cols-3 sm:flex border-b border-white/10">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 sm:py-4 text-[11px] sm:text-sm font-semibold sm:font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "text-cyan border-b-2 border-cyan bg-cyan/5"
                  : "text-ice/80 hover:text-ice hover:bg-white/5"
              )}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span className="truncate sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-3 sm:p-6">
          {activeTab === "orcamento" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4"
            >
              <div className="relative group col-span-2 md:col-span-1 lg:col-span-1">
                <label className="sr-only sm:not-sr-only sm:block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Saída
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Cidade de saída"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full pl-12 pr-4 py-2.5 sm:py-3.5 bg-dark/75 border border-white/10 rounded-xl text-sm sm:text-base text-ice placeholder:text-ice/50 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group col-span-2 md:col-span-1 lg:col-span-1">
                <label className="sr-only sm:not-sr-only sm:block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Destino turístico
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="text"
                    placeholder="Praia, cidade ou evento"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-2.5 sm:py-3.5 bg-dark/75 border border-white/10 rounded-xl text-sm sm:text-base text-ice placeholder:text-ice/50 focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="sr-only sm:not-sr-only sm:block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Data da viagem
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-2 sm:pr-4 py-2.5 sm:py-3.5 bg-dark/75 border border-white/10 rounded-xl text-xs sm:text-base text-ice focus:outline-none focus:border-cyan/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="sr-only sm:not-sr-only sm:block text-xs text-ice/50 mb-2 uppercase tracking-wider">
                  Pessoas
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full pl-10 sm:pl-12 pr-2 sm:pr-4 py-2.5 sm:py-3.5 bg-dark/75 border border-white/10 rounded-xl text-xs sm:text-base text-ice focus:outline-none focus:border-cyan/50 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    {[15, 25, 35, 45, 50].map((num) => (
                      <option key={num} value={num}>
                        Até {num} pessoas
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1 flex items-end">
                <a
                  href={whatsappUrl(quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-2.5 sm:py-3.5 text-sm sm:text-base"
                >
                  Solicitar orçamento
                  <ArrowRight className="w-5 h-5" />
                </a>
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
              <a
                href={whatsappUrl("Olá! Gostaria de montar um roteiro turístico com a Auto Viação Leste.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Route className="w-4 h-4" />
                Planejar roteiro turístico
              </a>
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
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
