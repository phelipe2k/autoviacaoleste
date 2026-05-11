"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Armchair,
  Shield,
  Clock,
  Wifi,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { BookingSearch } from "@/components/booking/BookingSearch";
import { publicPath } from "@/lib/site";

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

const featuredTrips = [
  {
    title: "Rio de Janeiro",
    origin: "Saídas de Gov. Valadares",
    date: "Excursão sob consulta",
    tag: "Praia e lazer",
    tone: "from-cyan/80 via-primary/45 to-dark",
  },
  {
    title: "Belo Horizonte",
    origin: "Eventos e grupos",
    date: "Roteiro personalizado",
    tag: "Turismo urbano",
    tone: "from-primary/75 via-teal/45 to-dark",
  },
  {
    title: "Florianópolis",
    origin: "Viagens em grupo",
    date: "Agenda flexível",
    tag: "Excursão",
    tone: "from-cyan/70 via-teal/40 to-dark",
  },
  {
    title: "Outros destinos",
    origin: "Monte seu roteiro",
    date: "Sob orçamento",
    tag: "Sob consulta",
    tone: "from-primary/70 via-cyan/35 to-dark",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <Image
          src={publicPath("/images/banner-home.webp")}
          alt="Ônibus de turismo viajando pela estrada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_center] sm:object-[58%_center] lg:object-[62%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-dark/98 via-dark/76 to-dark/24 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/72 via-dark/28 to-dark/92 sm:from-dark/52 sm:via-transparent sm:to-dark/84 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,212,255,0.08),transparent_42%)] sm:hidden z-10" />

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

      <div className="relative z-30 section-padding pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[30vh] sm:min-h-[42vh] lg:min-h-[44vh] flex items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 sm:mb-6"
              >
                <span className="text-cyan text-[10px] sm:text-sm tracking-[0.22em] sm:tracking-[0.3em] font-medium uppercase">
                  TURISMO EM GRUPO SOB CONSULTA.
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-xl mb-5 sm:mb-6 max-w-[11ch] sm:max-w-none"
              >
                <span className="text-white">VIAGENS TURÍSTICAS</span>
                <br />
                <span className="text-gradient">COM CONFORTO.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-lg mb-5 sm:mb-8 max-w-[34rem]"
              >
                Turismo rodoviário sob consulta para excursões, grupos, passeios e roteiros personalizados com conforto e planejamento.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden sm:grid grid-cols-4 gap-4 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center sm:items-start gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-dark/60 p-3 backdrop-blur-md group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center shrink-0 group-hover:bg-cyan/20 transition-colors">
                      <feature.icon className="w-4 sm:w-5 h-4 sm:h-5 text-cyan" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-semibold text-ice/90 leading-tight">
                        {feature.title}
                      </p>
                      <p className="hidden sm:block text-[10px] text-ice/70 leading-tight mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="mt-3 sm:mt-6 lg:mt-0">
            <BookingSearch />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-5 sm:mt-8"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-cyan text-[10px] sm:text-xs tracking-[0.22em] uppercase font-medium">
                  Próximas viagens
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                  Rotas e excursões em destaque
                </h2>
              </div>
              <Link href="/destinos" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-cyan-light transition-colors">
                Ver roteiros
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:px-0 sm:pb-0">
              {featuredTrips.map((trip, index) => (
                <motion.div
                  key={trip.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
                  className="group relative min-w-[238px] overflow-hidden rounded-xl border border-white/10 bg-dark-lighter/85 shadow-card transition-all hover:-translate-y-1 hover:border-cyan/40 sm:min-w-0"
                >
                  <div className={`relative h-20 overflow-hidden bg-gradient-to-br ${trip.tone}`}>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,transparent_34%,rgba(0,0,0,0.38)_100%)]" />
                    <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full border border-white/20" />
                    <div className="absolute bottom-3 left-4 rounded-full bg-dark/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ice backdrop-blur">
                      {trip.tag}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {trip.title}
                    </h3>
                    <div className="mt-3 space-y-2 text-xs sm:text-sm text-ice/70">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-cyan" />
                        <span className="truncate">{trip.origin}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate">{trip.date}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 hidden sm:flex justify-end"
          >
            <Link href="/institucional" className="group w-full sm:w-auto flex items-center gap-3 px-4 sm:px-6 py-3 glass-card hover:bg-cyan/10 transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-cyan/30 transition-colors">
                <Play className="w-4 h-4 text-cyan fill-current" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ice leading-snug">
                  VIAJE COM QUEM PLANEJA CADA ROTEIRO.
                </p>
                <p className="text-xs text-cyan">Conheça nossa história</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
