"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  MapPinned,
  Route,
  Users,
} from "lucide-react";
import { ImageCard, SectionHeader } from "@/components/ui/premium";

const journey = [
  {
    icon: ClipboardList,
    title: "Conte o roteiro",
    description: "Origem, destino, data, quantidade de pessoas e perfil do grupo.",
  },
  {
    icon: CalendarCheck,
    title: "Alinhamos a agenda",
    description: "A equipe avalia disponibilidade, duração, paradas e melhor formato.",
  },
  {
    icon: Route,
    title: "Preparamos a viagem",
    description: "O orçamento considera conforto, segurança e necessidades do trajeto.",
  },
  {
    icon: Users,
    title: "Embarque com suporte",
    description: "Contato claro antes da saída e organização para o grupo viajar tranquilo.",
  },
];

const services = [
  {
    title: "Excursões turísticas",
    tag: "Para grupos",
    image: "/images/destinations/coastal-excursion.webp",
    alt: "Excursão turística em destino de praia",
    description: "Viagens para praias, cidades históricas, eventos, encontros religiosos e experiências culturais.",
    features: ["Roteiros sob consulta", "Paradas combinadas", "Atendimento por WhatsApp"],
  },
  {
    title: "Roteiros personalizados",
    tag: "Sob medida",
    image: "/images/experiences/travel-planning.webp",
    alt: "Atendimento para planejamento de viagem turística",
    description: "Planejamento conforme data, origem, destino, tamanho do grupo e estilo da viagem.",
    features: ["Orçamento personalizado", "Apoio comercial", "Viagem pensada para o grupo"],
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-road via-dark to-dark-light" />
      <div className="absolute inset-0 route-texture opacity-20" />
      <div className="absolute bottom-0 left-0 h-[460px] w-[560px] bg-warm-glow opacity-45 blur-3xl" />

      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Como funciona"
            title={<>Uma jornada simples para <span className="text-warm-gradient">viajar melhor</span></>}
            description="A seção de serviços passa a explicar a experiência de contratação, ajudando o visitante a entender o próximo passo sem se perder em cards repetidos."
            className="mb-10 sm:mb-16"
          />

          <div className="grid gap-4 md:grid-cols-4">
            {journey.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-premium backdrop-blur"
              >
                <span className="text-xs font-bold text-gold">0{index + 1}</span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ice/62">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ImageCard
                  href="/servicos"
                  image={service.image}
                  imageAlt={service.alt}
                  eyebrow={service.tag}
                  title={service.title}
                  description={service.description}
                >
                  <ul className="mt-5 grid gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-ice/72">
                        <CheckCircle className="h-4 w-4 shrink-0 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ImageCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-10 overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/14 via-white/[0.04] to-cyan/10 p-6 shadow-premium"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dark/50 text-gold">
                  <MapPinned className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quer montar uma viagem turística?</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ice/65">
                    Envie destino, data e tamanho do grupo para receber orientação e orçamento.
                  </p>
                </div>
              </div>
              <Link href="/passagens" className="btn-primary inline-flex items-center justify-center gap-2">
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
