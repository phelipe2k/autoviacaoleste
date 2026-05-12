"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingSearch } from "@/components/booking/BookingSearch";
import { PageHero } from "@/components/ui/premium";
import { Calendar, Clock, MapPin, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

const serviceProfiles = [
  { from: "Grupo turístico", to: "Roteiro personalizado", status: "Sob consulta", timing: "Data combinada" },
  { from: "Grupo particular", to: "Evento ou excursão", status: "Sob orçamento", timing: "Agenda flexível" },
  { from: "Turismo", to: "Destino escolhido", status: "Planejamento", timing: "Conforme roteiro" },
  { from: "Excursão especial", to: "Destino sob consulta", status: "Avaliação comercial", timing: "Data reservada" },
];

export default function PassagensPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      <PageHero
        eyebrow="Orçamento turístico"
        title={<>Solicite uma viagem sob demanda com <span className="text-warm-gradient">mais clareza.</span></>}
        description="Informe origem, destino, data e quantidade de pessoas. A equipe retorna com orientação, disponibilidade e proposta personalizada."
        image="/images/brand-scenes/home-hero-road.webp"
        imageAlt="Ônibus Auto Viação Leste com identidade visual oficial"
      />

      <section className="relative -mt-8 overflow-hidden pb-16">
        <div className="relative section-padding">
          <div className="mx-auto max-w-6xl">
            <BookingSearch />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-road" />
        <div className="relative section-padding">
          <div className="mx-auto max-w-6xl">
            <h2 className="heading-md text-white">Formatos de atendimento</h2>
            <p className="mt-2 max-w-2xl text-ice/62">Escolha um ponto de partida. O orçamento final é ajustado ao roteiro real do grupo.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {serviceProfiles.map((route, index) => (
                <motion.a
                  key={`${route.from}-${route.to}`}
                  href={whatsappUrl(`Olá! Gostaria de orçamento para: ${route.from} -> ${route.to}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="premium-panel block p-6 transition-all hover:-translate-y-1 hover:border-gold/40 sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3 text-white">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="font-medium">{route.from}</span>
                    <span className="text-ice/35">→</span>
                    <span className="font-medium">{route.to}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-ice/62">
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{route.status}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{route.timing}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6 shadow-premium">
              <a href={whatsappUrl("Olá! Gostaria de planejar uma viagem turística com a Auto Viação Leste.")} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-sm font-semibold text-emerald-300">WHATSAPP COMERCIAL</span>
                  <h3 className="mt-1 text-xl font-bold text-white">Prefere explicar a viagem conversando?</h3>
                  <p className="mt-1 text-sm text-ice/62">Envie o trajeto, a data e o perfil do grupo diretamente para a equipe.</p>
                </div>
                <span className="btn-whatsapp inline-flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Fale conosco
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
