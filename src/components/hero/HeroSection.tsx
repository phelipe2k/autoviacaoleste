"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Play,
  Armchair,
  Shield,
  Clock,
  Wifi,
  Route,
  Users,
  Bus,
  ShieldCheck,
} from "lucide-react";
import { BookingSearch } from "@/components/booking/BookingSearch";

const features = [
  {
    icon: Armchair,
    title: "CONFORTO",
    description: "Poltronas reclináveis e ar-condicionado",
  },
  {
    icon: Shield,
    title: "SEGURANÇA",
    description: "Frota segura, motoristas treinados e equipe qualificada",
  },
  {
    icon: Clock,
    title: "PLANEJAMENTO",
    description: "Viagens combinadas conforme necessidade",
  },
  {
    icon: Wifi,
    title: "CONECTIVIDADE",
    description: "Estrutura preparada para viagens confortáveis",
  },
];

const stats = [
  { icon: Route, value: "Sob consulta", label: "ROTEIROS TURÍSTICOS", sublabel: "Viagens planejadas" },
  { icon: Users, value: "Atendimento", label: "GRUPOS E EMPRESAS", sublabel: "Orçamentos personalizados" },
  { icon: Bus, value: "Frota", label: "ÔNIBUS REVISADOS", sublabel: "Veículos para diferentes perfis" },
  { icon: ShieldCheck, value: "Cuidado", label: "VIAGENS SEGURAS", sublabel: "Prioridade em cada trajeto" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/banner-home.png"
          alt="Ônibus executivo viajando pela estrada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/65 to-dark/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/45 via-transparent to-dark/80 z-10" />

        <div
          className="absolute inset-0 z-15 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-glow-teal opacity-20 blur-3xl z-20" />
      </div>

      <div className="relative z-30 section-padding pt-32 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.8fr)] gap-12 items-center min-h-[60vh]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="text-cyan text-xs sm:text-sm tracking-[0.3em] font-medium uppercase">
                  SEU DESTINO. NOSSA MISSÃO.
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-xl mb-6"
              >
                <span className="text-white">CONFORTO QUE</span>
                <br />
                <span className="text-gradient">CONECTA DESTINOS.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-lg mb-8 max-w-lg"
              >
                Turismo, excursões e fretamento sob consulta, com frota moderna, equipe qualificada e planejamento para cada roteiro.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center shrink-0 group-hover:bg-cyan/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-cyan" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-xs font-semibold text-ice/90">
                        {feature.title}
                      </p>
                      <p className="text-[10px] text-ice/50 leading-tight mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="hidden lg:block" aria-hidden="true">
              <div>
                <div className="absolute inset-0 bg-gradient-radial from-cyan/20 via-transparent to-transparent blur-2xl" />

                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-teal/30 to-cyan/20 rounded-2xl border border-cyan/20 flex items-center justify-center">
                    <div className="text-center">
                      <Bus className="w-24 h-24 text-cyan/40 mx-auto mb-4" />
                      <p className="text-cyan/60 text-sm">Imagem do ônibus</p>
                      <p className="text-ice/40 text-xs mt-2">
                        Substituir por imagem real
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass-card p-4"
                >
                  <p className="text-2xl font-bold text-gradient">30+</p>
                  <p className="text-xs text-ice/60">Anos de experiência</p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <BookingSearch />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="glass-card p-4 flex items-center gap-4 hover:bg-dark-lighter/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-primary/20 flex items-center justify-center shrink-0 group-hover:from-cyan/30 group-hover:to-primary/30 transition-all">
                  <stat.icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <p className="text-lg font-bold text-ice">{stat.value}</p>
                  <p className="text-xs font-medium text-cyan">{stat.label}</p>
                  <p className="text-[10px] text-ice/50">{stat.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 flex justify-end"
          >
            <button className="group flex items-center gap-3 px-6 py-3 glass-card hover:bg-cyan/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                <Play className="w-4 h-4 text-cyan fill-current" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-ice">
                  VIAJE COM QUEM ENTENDE DE ESTRADA.
                </p>
                <p className="text-xs text-cyan">Assista ao vídeo</p>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
