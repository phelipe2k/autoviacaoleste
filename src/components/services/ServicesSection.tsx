"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Plane,
  Briefcase,
  Bus,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Wifi,
  Coffee,
} from "lucide-react";
import { useState } from "react";

// Servicos comerciais apresentados na home, com icone, beneficios e destaque.
const services = [
  {
    id: 1,
    icon: Building2,
    title: "Fretamento",
    description:
      "Transporte sob medida para empresas, eventos e equipes, com frota moderna e equipe especializada.",
    features: [
      "Contratos flex?veis",
      "Frota dedicada",
      "Motoristas treinados",
      "Rastreamento em tempo real",
    ],
    color: "from-primary to-cyan",
    highlight: "Ideal para empresas",
  },
  {
    id: 2,
    icon: Users,
    title: "Turismo",
    description:
      "Passeios, excurs?es e roteiros personalizados com conforto e seguran?a para grupos de todos os tamanhos.",
    features: [
      "Roteiros personalizados",
      "Atendimento para excurs?es",
      "Planejamento por demanda",
      "Paradas programadas",
    ],
    color: "from-cyan to-teal-neon",
    highlight: "Experi?ncias �nicas",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Viagens Corporativas",
    description:
      "Transporte executivo para reuni?es, eventos e deslocamentos de neg?cios.",
    features: [
      "Pontualidade garantida",
      "Agenda sob consulta",
      "Ambiente confort�vel",
      "Atendimento comercial",
    ],
    color: "from-teal-neon to-primary",
    highlight: "Para executivos",
  },
  {
    id: 4,
    icon: Bus,
    title: "Transporte Escolar",
    description:
      "Seguran?a e confiabilidade no transporte de estudantes, com rigorosos padr?es de qualidade.",
    features: [
      "Motoristas especializados",
      "Ve?culos monitorados",
      "Seguran?a certificada",
      "Rastreamento GPS",
    ],
    color: "from-primary-light to-cyan",
    highlight: "Seguran?a m?xima",
  },
];

export function ServicesSection() {
  // Controla qual servico esta em hover para aplicar brilho e reforco visual.
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fundo da secao, normalmente com degrade escuro. */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />
      
      {/* Elementos decorativos de brilho no fundo da secao. */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glow-cyan opacity-15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glow-teal opacity-15 blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Cabecalho da secao com etiqueta, titulo e descricao. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
              Nossos Servi?os
            </span>
            <h2 className="heading-lg text-white mt-4 mb-4">
              Solu??es <span className="text-gradient">Completas</span> em Transporte
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Nesta primeira fase, atendemos principalmente turismo, excurs?es,
              eventos, grupos e fretamentos sob consulta.
            </p>
          </motion.div>

          {/* Grade de servicos gerada a partir do array services. */}
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
                  className={`glass-card p-8 h-full transition-all duration-500 ${
                    hoveredId === service.id
                      ?"shadow-glow-cyan border-cyan/30"
                      : ""
                  }`}
                >
                  {/* icone principal do servico. */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className="w-8 h-8 text-dark" />
                  </div>

                  {/* Etiqueta curta que resume o melhor uso do servico. */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                    <span className="text-xs font-medium text-cyan">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Titulo do card. */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Descricao curta do card. */}
                  <p className="text-ice/60 mb-6">{service.description}</p>

                  {/* Lista de beneficios de cada servico. */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-ice/70"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Chamada de acao da secao. */}
                  <button className="flex items-center gap-2 text-cyan font-medium group-hover:gap-4 transition-all duration-300">
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Brilho aparece no hover para destacar o card. */}
                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chamada inferior para solucao personalizada. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 glass-card p-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Precisa de uma solu��o personalizada?
                </h3>
                <p className="text-ice/60">
                  Entre em contato conosco e desenvolveremos a melhor solu��o
                  para voc?.
                </p>
              </div>
              <button className="btn-primary flex items-center gap-2 px-8 py-4 whitespace-nowrap">
                Solicitar Or?amento
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
