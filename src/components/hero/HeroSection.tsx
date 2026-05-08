"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Play,
  ArrowRight,
  Armchair,
  Shield,
  Clock,
  Wifi,
  ChevronRight,
  Route,
  Users,
  Bus,
  ShieldCheck,
} from "lucide-react";
import { BookingSearch } from "@/components/booking/BookingSearch";

// Diferenciais exibidos abaixo da chamada principal do hero.
const features = [
  {
    icon: Armchair,
    title: "CONFORTO",
    description: "Poltronas reclináveis e ar-condicionado",
  },
  {
    icon: Shield,
    title: "SEGURANÇA",
    description: "Frota moderna e segura, com motoristas treinados e equipe qualificada",
  },
  {
    icon: Clock,
    title: "PONTUALIDADE",
    description: "Respeito ao seu tempo, sempre no horário",
  },
  {
    icon: Wifi,
    title: "CONECTIVIDADE",
    description: "Wi-Fi a bordo e carregadores USB",
  },
];

// Numeros de apoio que reforcam escala, frota e seguranca da empresa.
const stats = [
  { icon: Route, value: "+120", label: "ROTAS", sublabel: "Conectamos destinos" },
  { icon: Users, value: "+1 MILHÃO", label: "PASSAGEIROS", sublabel: "De passageiros transportados" },
  { icon: Bus, value: "50+", label: "FROTA MODERNA", sublabel: "Ônibus novos e revisados" },
  { icon: ShieldCheck, value: "99%", label: "VIAGENS SEGURAS", sublabel: "Sua tranquilidade em 1º lugar" },
];

// Hero da home: combina imagem de fundo, texto principal, busca de passagens e indicadores.
export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Camadas de fundo: imagem principal, degrades de leitura e efeitos visuais. */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner-home.png"
          alt="Onibus executivo viajando pela estrada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/65 to-dark/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/45 via-transparent to-dark/80 z-10" />
        
        {/* Padrao de grade sutil para dar textura ao hero. */}
        <div 
          className="absolute inset-0 z-15 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Brilho decorativo que reforca a paleta neon. */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-glow-teal opacity-20 blur-3xl z-20" />
      </div>

      {/* Container principal mantem o conteudo acima das camadas de fundo. */}
      <div className="relative z-30 section-padding pt-32 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Conteudo principal do hero em duas colunas no desktop. */}
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.8fr)] gap-12 items-center min-h-[60vh]">
            {/* Coluna esquerda com chamada, descricao e diferenciais. */}
            <div>
              {/* Frase curta acima do titulo para posicionar a marca. */}
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

              {/* Titulo principal da primeira dobra. */}
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

              {/* Descricao curta do card. */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-lg mb-8 max-w-lg"
              >
                Viagens intermunicipais com segurança, pontualidade e o
                conforto que você merece.
              </motion.p>

              {/* Icones dos diferenciais de conforto, seguranca e conectividade. */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
              >
                {/* Cada diferencial usa o icone definido no array features. */}
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
                {/* Brilho atras da area reservada para imagem do onibus. */}
                <div className="absolute inset-0 bg-gradient-radial from-cyan/20 via-transparent to-transparent blur-2xl" />
                
                {/* Espaco temporario para substituir por uma imagem real do onibus. */}
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

                {/* Selo flutuante com tempo de experiencia da empresa. */}
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

          {/* Busca de passagens posicionada logo abaixo da chamada principal. */}
          <div className="mt-8 lg:mt-0">
            {/* Formulario reutilizavel para iniciar a compra ou consulta de viagem. */}
            <BookingSearch />
          </div>

          {/* Estatisticas inferiores que reforcam credibilidade. */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Cards de estatisticas gerados a partir do array stats. */}
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

          {/* Chamada para video institucional. */}
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
