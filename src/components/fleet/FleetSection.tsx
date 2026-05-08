"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Bus,
  Wifi,
  Usb,
  Snowflake,
  Armchair,
  Tv,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Catalogo resumido da frota; cada onibus informa categoria, recursos e especificacoes.
const fleet = [
  {
    id: 1,
    name: "Executivo Plus",
    category: "Premium",
    image: "/images/fleet/executivo-plus.jpg",
    features: [
      { icon: Armchair, label: "Poltrona 160° reclinável" },
      { icon: Wifi, label: "Wi-Fi Premium" },
      { icon: Usb, label: "USB e tomadas individuais" },
      { icon: Tv, label: "Entretenimento a bordo" },
      { icon: Snowflake, label: "Ar-condicionado individual" },
    ],
    specs: {
      capacity: "42 poltronas",
      age: "2023/2024",
      wifi: "Incluído",
    },
    description:
      "Experiência premium de viagem com máximo conforto e tecnologia de ponta.",
  },
  {
    id: 2,
    name: "Executivo",
    category: "Executivo",
    image: "/images/fleet/executivo.jpg",
    features: [
      { icon: Armchair, label: "Poltrona 140° reclinável" },
      { icon: Wifi, label: "Wi-Fi gratuito" },
      { icon: Usb, label: "USB individuais" },
      { icon: Snowflake, label: "Ar-condicionado" },
    ],
    specs: {
      capacity: "46 poltronas",
      age: "2022/2023",
      wifi: "Incluído",
    },
    description:
      "Conforto executivo ideal para viagens de negócios ou lazer.",
  },
  {
    id: 3,
    name: "Convencional",
    category: "Econômico",
    image: "/images/fleet/convencional.jpg",
    features: [
      { icon: Armchair, label: "Poltrona reclinável" },
      { icon: Snowflake, label: "Ar-condicionado" },
      { icon: Usb, label: "Carregadores USB" },
    ],
    specs: {
      capacity: "50 poltronas",
      age: "2021/2022",
      wifi: "Disponível",
    },
    description:
      "Qualidade e economia para suas viagens diárias.",
  },
];

export function FleetSection() {
  // activeIndex define o onibus selecionado; swiper fica reservado para controles do carrossel.
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // A area de detalhes sempre usa o onibus atualmente selecionado.
  const activeBus = fleet[activeIndex];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fundo da secao, normalmente com degrade escuro. */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      {/* Elementos decorativos de brilho no fundo da secao. */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-glow-teal opacity-20 blur-3xl transform -translate-y-1/2" />

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
              Nossa Frota
            </span>
            <h2 className="heading-lg text-white mt-4 mb-4">
              Frota <span className="text-gradient">Moderna</span> e Confortável
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Ônibus novos, revisados e equipados com o que há de mais moderno
              em tecnologia e conforto.
            </p>
          </motion.div>

          {/* Cards da frota: clicar em um card muda os detalhes exibidos abaixo. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {fleet.map((bus, index) => (
              <motion.div
                key={bus.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`glass-card overflow-hidden cursor-pointer transition-all duration-500 ${
                  activeIndex === index
                    ?"ring-2 ring-cyan/50 shadow-glow-cyan"
                    : "hover:ring-2 hover:ring-cyan/30"
                }`}
              >
                {/* area visual do card do onibus. */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-cyan/10 flex items-center justify-center">
                    <Bus className="w-20 h-20 text-cyan/30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        bus.category === "Premium"
                          ?"bg-primary text-dark"
                          : bus.category === "Executivo"
                          ?"bg-cyan text-dark"
                          : "bg-white/20 text-ice"
                      }`}
                    >
                      {bus.category}
                    </span>
                  </div>
                </div>

                {/* Conteudo textual do card. */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {bus.name}
                  </h3>
                  <p className="text-sm text-ice/60 mb-4">{bus.description}</p>

                  {/* Especificacoes rapidas: capacidade, ano e Wi-Fi. */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="p-2 bg-dark/50 rounded-lg">
                      <p className="text-xs text-ice/50">Capacidade</p>
                      <p className="text-sm font-semibold text-cyan">
                        {bus.specs.capacity}
                      </p>
                    </div>
                    <div className="p-2 bg-dark/50 rounded-lg">
                      <p className="text-xs text-ice/50">Ano</p>
                      <p className="text-sm font-semibold text-cyan">
                        {bus.specs.age}
                      </p>
                    </div>
                    <div className="p-2 bg-dark/50 rounded-lg">
                      <p className="text-xs text-ice/50">Wi-Fi</p>
                      <p className="text-sm font-semibold text-cyan">
                        {bus.specs.wifi}
                      </p>
                    </div>
                  </div>

                  {/* Previa dos principais recursos do onibus. */}
                  <div className="flex flex-wrap gap-2">
                    {bus.features.slice(0, 3).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 text-xs text-ice/70"
                      >
                        <feature.icon className="w-3 h-3 text-cyan" />
                        {feature.label}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detalhes do veiculo selecionado, atualizados conforme activeIndex. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {activeBus.name}
                </h3>
                <p className="text-ice/60">Recursos e diferenciais</p>
              </div>
              <button className="btn-primary flex items-center gap-2 mt-4 md:mt-0">
                Ver Detalhes
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeBus.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-dark/50 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <span className="text-sm text-ice/80">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chamada de acao da secao. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-ice/60 mb-4">
              Quer conhecer nossa frota pessoalmente?
            </p>
            <button className="btn-outline inline-flex items-center gap-2">
              Agende uma Visita
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
