"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, SectionHeader } from "@/components/ui/premium";
import { Award, Clock, Eye, Heart, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import { publicPath } from "@/lib/site";

const values = [
  { icon: ShieldCheck, title: "Segurança", description: "Cuidado antes, durante e depois da viagem." },
  { icon: Heart, title: "Compromisso", description: "Atendimento próximo para quem organiza grupos." },
  { icon: Users, title: "Respeito", description: "Comunicação clara com passageiros, clientes e parceiros." },
  { icon: Award, title: "Qualidade", description: "Evolução constante da frota e dos processos." },
];

const timeline = [
  { year: "1994", title: "Fundação", description: "Início de uma trajetória dedicada ao transporte rodoviário com responsabilidade." },
  { year: "2015", title: "Frota renovada", description: "Investimento em veículos mais confortáveis para excursões e viagens em grupo." },
  { year: "2024", title: "Nova fase", description: "Estruturação comercial com foco inicial em turismo e serviços sob consulta." },
  { year: "2026", title: "Presença digital", description: "Identidade visual mais forte para comunicar turismo, segurança e conforto." },
];

const stats = [
  { value: "30+", label: "Anos de experiência", icon: Clock },
  { value: "GV", label: "Base em Minas Gerais", icon: MapPin },
  { value: "Sob consulta", label: "Roteiros turísticos", icon: Users },
  { value: "Frota", label: "Veículos revisados", icon: ShieldCheck },
];

export default function InstitucionalPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      <PageHero
        eyebrow="Quem somos"
        title={<>Tradição rodoviária com uma nova fase de <span className="text-warm-gradient">turismo premium.</span></>}
        description="Mais de três décadas de estrada agora comunicadas com uma identidade mais viva, humana e coerente com a frota da Auto Viação Leste."
        image="/images/brand-scenes/safety-preparation.webp"
        imageAlt="Cuidado e inspeção de segurança antes da viagem"
      />

      <section id="valores" className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-road" />
        <div className="relative section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Target, title: "Missão", text: "Conectar pessoas e grupos a experiências turísticas planejadas com segurança, conforto e transparência." },
                { icon: Eye, title: "Visão", text: "Crescer com organização, qualidade e presença de marca no turismo rodoviário." },
                { icon: Heart, title: "Valores", text: "Segurança, pontualidade, respeito ao cliente, atendimento claro e compromisso com a experiência." },
              ].map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="premium-panel p-7 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-ice/70">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <value.icon className="mb-4 h-7 w-7 text-gold" />
                  <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                  <p className="mt-2 text-sm text-ice/62">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="premium-panel p-5 text-center">
                  <stat.icon className="mx-auto mb-3 h-7 w-7 text-gold" />
                  <p className="text-2xl font-bold text-warm-gradient">{stat.value}</p>
                  <p className="mt-1 text-sm text-ice/62">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-road to-dark" />
        <div className="relative section-padding">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Trajetória"
              title={<>Uma história que agora ganha <span className="text-warm-gradient">mais presença visual</span></>}
              description="A linha do tempo combina tradição, cuidado operacional e a nova fase turística."
              className="mb-12"
            />
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative h-80 overflow-hidden rounded-[1.35rem] border border-white/10 bg-road shadow-premium">
                <Image src={publicPath("/images/brand-scenes/fleet-exterior-premium.webp")} alt="Ônibus Auto Viação Leste" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="space-y-5">
                {timeline.map((item, index) => (
                  <motion.div key={item.year} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="premium-panel p-5">
                    <span className="text-sm font-bold text-gold">{item.year}</span>
                    <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ice/65">{item.description}</p>
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
