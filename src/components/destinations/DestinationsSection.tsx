"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Clock, Calendar } from "lucide-react";
import { useState } from "react";

const destinations = [
  {
    id: 1,
    city: "São Paulo",
    state: "SP",
    duration: "Sob consulta",
    frequency: "Agenda flexível",
    status: "Atendimento regional",
    popular: true,
  },
  {
    id: 2,
    city: "Rio de Janeiro",
    state: "RJ",
    duration: "Planejamento",
    frequency: "Futuras rotas",
    status: "Em estruturação",
    popular: true,
  },
  {
    id: 3,
    city: "Curitiba",
    state: "PR",
    duration: "Sob consulta",
    frequency: "Viagens sob demanda",
    status: "Consulta comercial",
    popular: false,
  },
  {
    id: 4,
    city: "Florianópolis",
    state: "SC",
    duration: "Sob orçamento",
    frequency: "Roteiro combinado",
    status: "Turismo e grupos",
    popular: true,
  },
  {
    id: 5,
    city: "Belo Horizonte",
    state: "MG",
    duration: "Planejamento",
    frequency: "Futuras rotas",
    status: "Em avaliação",
    popular: false,
  },
  {
    id: 6,
    city: "Outras cidades",
    state: "BR",
    duration: "Sob consulta",
    frequency: "Conforme solicitação",
    status: "Avaliação comercial",
    popular: false,
  },
];

export function DestinationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-cyan opacity-20 blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
              Área de atuação
            </span>
            <h2 className="heading-lg text-white mt-4 mb-4">
              Destinos e <span className="text-gradient">Possibilidades</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Consulte viagens sob demanda e acompanhe a estrutura preparada para futuras rotas regulares.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(destination.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter to-dark flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-cyan/30 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-ice/60">{destination.city}</p>
                    <p className="text-sm text-ice/40">{destination.state}</p>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent transition-opacity duration-500 ${
                    hoveredId === destination.id ? "opacity-90" : "opacity-70"
                  }`}
                />

                {destination.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-cyan rounded-full">
                    <span className="text-xs font-semibold text-dark">CONSULTA</span>
                  </div>
                )}

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    animate={{
                      y: hoveredId === destination.id ? 0 : 10,
                      opacity: hoveredId === destination.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-cyan" />
                      <span className="text-sm text-ice/70">
                        {destination.city}, {destination.state}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {destination.city}
                    </h3>

                    <div className="flex items-center gap-4 mb-4 text-sm text-ice/60">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {destination.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {destination.frequency}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-ice/50">Status</p>
                        <p className="text-xl font-bold text-gradient">
                          {destination.status}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          x: hoveredId === destination.id ? 5 : 0,
                          opacity: hoveredId === destination.id ? 1 : 0.7,
                        }}
                        className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center"
                      >
                        <ArrowRight className="w-5 h-5 text-cyan" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                    hoveredId === destination.id
                      ? "border-cyan/50 shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                      : "border-transparent"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button className="btn-outline inline-flex items-center gap-2 px-8 py-4 text-base">
              Consultar destinos
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
