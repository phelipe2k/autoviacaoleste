"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingSearch } from "@/components/booking/BookingSearch";
import { MapPin, ArrowRight, Clock, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/contact";

// Perfis de atendimento que substituem rotas fixas por orcamentos sob consulta.
const serviceProfiles = [
  { from: "Grupo turístico", to: "Roteiro personalizado", status: "Sob consulta", timing: "Data combinada" },
  { from: "Grupo particular", to: "Evento ou excursão", status: "Sob orçamento", timing: "Agenda flexível" },
  { from: "Turismo", to: "Roteiro personalizado", status: "Planejamento", timing: "Conforme roteiro" },
  { from: "Excursão especial", to: "Destino sob consulta", status: "Sob consulta", timing: "Data reservada" },
];

export default function PassagensPage() {
  // Card selecionado pelo usuario para dar destaque visual ao perfil escolhido.
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

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
                Orçamento de turismo
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Consulte uma <span className="text-gradient">Viagem Sob Demanda</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Informe origem, destino, data desejada e quantidade de pessoas. Nossa equipe retorna com disponibilidade, orientação e orçamento personalizado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <BookingSearch />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />

        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8 gap-4"
            >
              <div>
                <h2 className="heading-md text-white">Formatos de Atendimento</h2>
                <p className="text-ice/60 mt-2">
                  Atendimento voltado exclusivamente para orçamento de viagens turísticas sob consulta.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceProfiles.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedRoute(`${route.from}-${route.to}`)}
                  className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                    selectedRoute === `${route.from}-${route.to}`
                      ? "border-cyan/50 shadow-glow-cyan"
                      : "hover:border-cyan/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan" />
                          <span className="text-white font-medium">{route.from}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-ice/40" />
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-white font-medium">{route.to}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-ice/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {route.status}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {route.timing}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contato"
                      onClick={(event) => event.stopPropagation()}
                      className="text-sm text-cyan hover:underline mt-1 whitespace-nowrap"
                    >
                      Solicitar orçamento
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 glass-card p-8 bg-gradient-to-r from-primary/10 to-cyan/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-primary text-sm font-semibold">WHATSAPP COMERCIAL</span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Precisa planejar uma viagem?
                  </h3>
                  <p className="text-ice/60 text-sm mt-1">
                    Conte o trajeto, a data e o perfil do grupo para avaliarmos a melhor opção disponível.
                  </p>
                </div>
                <a
                  href={whatsappUrl("Olá! Gostaria de planejar uma viagem turística com a Auto Viação Leste.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fale conosco
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
