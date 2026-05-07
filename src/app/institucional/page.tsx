"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Heart, Award, Users, Clock, MapPin, TrendingUp } from "lucide-react";

const values = [
  { icon: Heart, title: "Compromisso", description: "Dedicação total à satisfação dos nossos passageiros e clientes." },
  { icon: Award, title: "Excelência", description: "Busca constante pela qualidade em todos os nossos serviços." },
  { icon: Users, title: "Respeito", description: "Valorização das pessoas: passageiros, colaboradores e parceiros." },
  { icon: Clock, title: "Pontualidade", description: "Respeito ao tempo de quem confia em nossos serviços." },
];

const timeline = [
  { year: "1994", title: "Fundação", description: "Início das operações com 5 ônibus e 2 rotas." },
  { year: "2000", title: "Expansão", description: "Ampliação da frota para 20 ônibus e cobertura estadual." },
  { year: "2010", title: "Certificação ISO", description: "Conquista da certificação ISO 9001 em qualidade." },
  { year: "2015", title: "Frota Renovada", description: "100% da frota renovada com ônibus de última geração." },
  { year: "2020", title: "Tecnologia", description: "Lançamento do aplicativo e bilhete digital." },
  { year: "2024", title: "Referência", description: "Mais de 1 milhão de passageiros transportados anualmente." },
];

const stats = [
  { value: "30+", label: "Anos de experiência", icon: Clock },
  { value: "120+", label: "Rotas atendidas", icon: MapPin },
  { value: "50+", label: "Ônibus na frota", icon: TrendingUp },
  { value: "500+", label: "Colaboradores", icon: Users },
];

export default function InstitucionalPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
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
                Quem Somos
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Nossa <span className="text-gradient">História</span>
              </h1>
              <p className="body-lg max-w-3xl mx-auto">
                Há mais de 30 anos conectando pessoas e destinos com segurança,
                conforto e compromisso. A Auto Viação Leste nasceu com uma missão
                clara: transformar a experiência de viagem dos brasileiros.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Missão</h3>
                <p className="text-ice/70">
                  Conectar pessoas e destinos com segurança, conforto e pontualidade,
                  superando expectativas e criando experiências de viagem memoráveis.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-teal-neon flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visão</h3>
                <p className="text-ice/70">
                  Ser reconhecida como a melhor empresa de transporte rodoviário
                  do Brasil, referência em inovação, qualidade e satisfação do cliente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-neon to-primary flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Valores</h3>
                <p className="text-ice/70">
                  Segurança, pontualidade, respeito ao cliente, inovação contínua
                  e compromisso com a excelência em tudo que fazemos.
                </p>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <value.icon className="w-8 h-8 text-cyan mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-ice/60">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-cyan mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-ice/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-md text-white mb-4">
                Nossa <span className="text-gradient">Trajetória</span>
              </h2>
              <p className="body-lg">
                Três décadas de história, crescimento e inovação no transporte brasileiro.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-primary to-cyan transform -translate-x-1/2 hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="glass-card p-6 inline-block max-w-md">
                        <h3 className="text-xl font-bold text-cyan mb-2">{item.title}</h3>
                        <p className="text-ice/70">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center shrink-0 z-10">
                      <span className="text-dark font-bold text-sm">{item.year}</span>
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
