"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Route } from "lucide-react";
import { ImageCard, SectionHeader } from "@/components/ui/premium";

const destinations = [
  {
    city: "Litoral e praias",
    state: "RJ, ES e SC",
    status: "Excursões sob consulta",
    frequency: "Datas combinadas",
    image: "/images/brand-scenes/destination-coast.webp",
    alt: "Destino litorâneo para excursão de ônibus",
    tag: "Praia e lazer",
  },
  {
    city: "Cidades históricas",
    state: "Minas e região",
    status: "Roteiro personalizado",
    frequency: "Grupos e escolas",
    image: "/images/brand-scenes/travel-planning-team.webp",
    alt: "Grupo planejando roteiro turístico",
    tag: "Cultura",
  },
  {
    city: "Eventos e encontros",
    state: "Brasil",
    status: "Sob orçamento",
    frequency: "Agenda flexível",
    image: "/images/brand-scenes/destination-cultural.webp",
    alt: "Ônibus Auto Viação Leste com identidade visual oficial",
    tag: "Grupos",
  },
];

export function DestinationsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-road to-dark" />
      <div className="absolute inset-0 route-texture opacity-25" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 bg-warm-glow opacity-60 blur-3xl" />

      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Roteiros vivos"
            title={<>Destinos com cara de <span className="text-warm-gradient">experiência</span></>}
            description="Mais do que escolher uma cidade: a equipe entende o grupo, o objetivo da viagem e o ritmo ideal para montar um roteiro possível, confortável e memorável."
            className="mb-10 sm:mb-16"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.city}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ImageCard
                  href="/destinos"
                  image={destination.image}
                  imageAlt={destination.alt}
                  eyebrow={destination.tag}
                  title={destination.city}
                  meta={destination.state}
                  description={destination.status}
                >
                  <div className="mt-5 grid gap-3 text-sm text-ice/68">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gold" />
                      {destination.frequency}
                    </span>
                    <span className="flex items-center gap-2 text-cyan">
                      <MapPin className="h-4 w-4" />
                      Consultar disponibilidade
                    </span>
                  </div>
                </ImageCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 rounded-2xl border border-white/10 bg-dark/55 p-5 shadow-premium backdrop-blur-xl sm:p-6"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Route className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Seu roteiro não precisa caber em um card.</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ice/65">
                    Conte origem, destino, data e tamanho do grupo. A equipe avalia o melhor formato de viagem.
                  </p>
                </div>
              </div>
              <Link href="/passagens" className="btn-primary inline-flex items-center justify-center gap-2">
                Montar orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
