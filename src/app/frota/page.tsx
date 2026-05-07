"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FleetSection } from "@/components/fleet/FleetSection";
import { Bus, Shield, Wrench, Award } from "lucide-react";

const certifications = [
  { icon: Shield, title: "ISO 9001", description: "Gestão de Qualidade" },
  { icon: Award, title: "Selo Ouro", description: "Programa Bem-Estar no Ônibus" },
  { icon: Wrench, title: "Manutenção", description: "Revisões periódicas rigorosas" },
  { icon: Bus, title: "Frota 5 estrelas", description: "Avaliação ANTT" },
];

export default function FrotaPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-teal opacity-20 blur-3xl" />
        
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
                Nossa Frota
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Conforto e <span className="text-gradient">Tecnologia</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Ônibus modernos, seguros e equipados com o que há de mais avançado
                para sua viagem ser inesquecível.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <cert.icon className="w-8 h-8 text-cyan mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="text-sm text-ice/60">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Details */}
      <FleetSection />

      {/* Maintenance Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
                  Segurança Primeiro
                </span>
                <h2 className="heading-md text-white mt-4 mb-4">
                  Manutenção de <span className="text-gradient">Alto Padrão</span>
                </h2>
                <p className="body-md mb-6">
                  Nossa frota passa por rigorosos processos de manutenção preventiva
                  e corretiva, garantindo a máxima segurança em todas as viagens.
                </p>
                <ul className="space-y-3">
                  {[
                    "Revisões a cada 10.000 km",
                    "Inspeção diária de todos os veículos",
                    "Equipe técnica especializada",
                    "Peças originais e certificadas",
                    "Sistema de rastreamento em tempo real",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-ice/80">
                      <div className="w-2 h-2 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 h-80 flex items-center justify-center"
              >
                <div className="text-center">
                  <Wrench className="w-20 h-20 text-cyan/30 mx-auto mb-4" />
                  <p className="text-ice/60">Área Técnica</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
