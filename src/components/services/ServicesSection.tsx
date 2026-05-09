"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPinned,
  Users,
  CalendarCheck,
  Camera,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    icon: MapPinned,
    title: "Excursões turísticas",
    description:
      "Viagens em grupo para destinos turísticos, eventos, praias, cidades históricas e experiências culturais.",
    features: [
      "Roteiros sob consulta",
      "Planejamento de ida e volta",
      "Paradas combinadas",
      "Atendimento para grupos",
    ],
    color: "from-primary to-cyan",
    highlight: "Para grupos",
  },
  {
    id: 2,
    icon: Users,
    title: "Viagens personalizadas",
    description:
      "Organização de viagens turísticas conforme origem, destino, data, quantidade de pessoas e perfil do grupo.",
    features: [
      "Orçamento personalizado",
      "Roteiro flexível",
      "Apoio no planejamento",
      "Conforto durante a viagem",
    ],
    color: "from-cyan to-teal-neon",
    highlight: "Sob medida",
  },
  {
    id: 3,
    icon: CalendarCheck,
    title: "Passeios e eventos",
    description:
      "Transporte turístico para passeios, encontros, feiras, shows, eventos religiosos e datas especiais.",
    features: [
      "Datas sob consulta",
      "Embarque combinado",
      "Acompanhamento comercial",
      "Confirmação por WhatsApp",
    ],
    color: "from-teal-neon to-primary",
    highlight: "Agenda turística",
  },
  {
    id: 4,
    icon: Camera,
    title: "Experiências de viagem",
    description:
      "Viagens com foco em conforto, segurança e uma experiência tranquila para quem quer aproveitar o destino.",
    features: [
      "Frota revisada",
      "Motoristas qualificados",
      "Viagens confortáveis",
      "Atenção ao grupo",
    ],
    color: "from-primary-light to-cyan",
    highlight: "Turismo com cuidado",
  },
];

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glow-cyan opacity-15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glow-teal opacity-15 blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
              Turismo rodoviário
            </span>
            <h2 className="heading-lg text-white mt-4 mb-4">
              Viagens <span className="text-gradient">turísticas</span> sob consulta
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Atendimento exclusivo para excursões, passeios, grupos e roteiros turísticos personalizados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <div
                  className={`glass-card p-5 sm:p-8 h-full transition-all duration-500 ${
                    hoveredId === service.id
                      ? "shadow-glow-cyan border-cyan/30"
                      : ""
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className="w-8 h-8 text-dark" />
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                    <span className="text-xs font-medium text-cyan">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-ice/60 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-ice/70"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/passagens" className="flex items-center gap-2 text-cyan font-medium group-hover:gap-4 transition-all duration-300">
                    Consultar viagem
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 sm:mt-16 glass-card p-5 sm:p-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                  Quer montar uma viagem turística?
                </h3>
                <p className="text-ice/60">
                  Conte o destino, a data e o tamanho do grupo para receber orientação e orçamento.
                </p>
              </div>
              <Link href="/passagens" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-8 py-4 text-sm sm:text-base">
                Solicitar orçamento turístico
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
