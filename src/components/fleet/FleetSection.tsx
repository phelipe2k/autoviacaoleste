"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Armchair,
  Bus,
  CheckCircle2,
  ShieldCheck,
  Snowflake,
  Usb,
  Wifi,
} from "lucide-react";
import { publicPath } from "@/lib/site";
import { SectionHeader } from "@/components/ui/premium";
import { cn } from "@/lib/utils";

const fleet = [
  {
    id: 1,
    name: "Executivo Plus",
    category: "Premium",
    image: "/images/fleet/premium-coach-interior.webp",
    cover: "/images/experiences/premium-road-trip.webp",
    features: [
      { icon: Armchair, label: "Poltronas reclináveis" },
      { icon: Wifi, label: "Conectividade sob disponibilidade" },
      { icon: Usb, label: "Pontos de carregamento" },
      { icon: Snowflake, label: "Climatização" },
    ],
    specs: ["Viagens longas", "Grupos e excursões", "Conforto superior"],
    description: "Opção indicada para grupos que valorizam conforto, organização e uma experiência mais tranquila durante o trajeto.",
  },
  {
    id: 2,
    name: "Executivo Turismo",
    category: "Versátil",
    image: "/images/experiences/premium-road-trip.webp",
    cover: "/images/fleet/premium-coach-interior.webp",
    features: [
      { icon: Armchair, label: "Assentos confortáveis" },
      { icon: Snowflake, label: "Ar-condicionado" },
      { icon: ShieldCheck, label: "Manutenção preventiva" },
      { icon: Bus, label: "Bagageiro para grupos" },
    ],
    specs: ["Eventos", "Passeios", "Roteiros personalizados"],
    description: "Equilíbrio entre conforto e praticidade para excursões, eventos, igrejas, escolas e grupos particulares.",
  },
  {
    id: 3,
    name: "Grupo Sob Medida",
    category: "Consulta",
    image: "/images/experiences/travel-planning.webp",
    cover: "/images/institutional/safety-inspection.webp",
    features: [
      { icon: ShieldCheck, label: "Avaliação do roteiro" },
      { icon: Bus, label: "Veículo adequado ao grupo" },
      { icon: Armchair, label: "Conforto planejado" },
      { icon: CheckCircle2, label: "Acompanhamento comercial" },
    ],
    specs: ["Sob orçamento", "Datas combinadas", "Apoio no planejamento"],
    description: "A equipe entende destino, duração, perfil do grupo e necessidade de bagagem antes de indicar a melhor configuração.",
  },
];

export function FleetSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBus = fleet[activeIndex];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-road" />
      <div className="absolute inset-0 route-texture opacity-20" />
      <div className="absolute right-0 top-1/3 h-[560px] w-[620px] bg-glow-teal opacity-20 blur-3xl" />

      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Nossa frota"
            title={<>Conforto que aparece <span className="text-warm-gradient">antes do embarque</span></>}
            description="A frota deixa de ser um item técnico e vira parte da experiência: interiores mais acolhedores, segurança visível e detalhes que ajudam o organizador a confiar."
            className="mb-10 sm:mb-16"
          />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              {fleet.map((bus, index) => (
                <motion.button
                  type="button"
                  key={bus.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group w-full overflow-hidden rounded-2xl border bg-dark-lighter/70 text-left shadow-premium transition-all duration-300",
                    activeIndex === index ? "border-gold/55" : "border-white/10 hover:border-gold/35"
                  )}
                >
                  <div className="grid grid-cols-[116px_1fr] gap-4 p-3 sm:grid-cols-[150px_1fr]">
                    <div className="relative h-32 overflow-hidden rounded-xl">
                      <Image
                        src={publicPath(bus.image as `/${string}`)}
                        alt={bus.name}
                        fill
                        sizes="150px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 py-1 pr-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                        {bus.category}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-white">{bus.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ice/62">
                        {bus.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeBus.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-dark/70 shadow-premium"
            >
              <div className="relative h-72 sm:h-96">
                <Image
                  src={publicPath(activeBus.cover as `/${string}`)}
                  alt={`Detalhe da frota ${activeBus.name}`}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    {activeBus.category}
                  </span>
                  <h3 className="mt-4 text-3xl font-bold text-white">{activeBus.name}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ice/72">{activeBus.description}</p>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="mb-6 flex flex-wrap gap-2">
                  {activeBus.specs.map((spec) => (
                    <span key={spec} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-ice/75">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {activeBus.features.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-ice/78">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/frota" className="btn-outline inline-flex items-center justify-center gap-2">
                    Conhecer frota
                  </Link>
                  <Link href="/contato" className="btn-primary inline-flex items-center justify-center gap-2">
                    Consultar veículo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
