"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ImageCard, PageHero } from "@/components/ui/premium";
import { ArrowRight, CheckCircle } from "lucide-react";

const detailedServices = [
  {
    title: "Excursões turísticas",
    tag: "Para grupos",
    image: "/images/brand-scenes/destination-coast.webp",
    description: "Roteiros para praias, cidades históricas, eventos, encontros e experiências culturais.",
    features: ["Roteiro flexível", "Paradas combinadas", "Frota adequada ao grupo", "Atendimento por WhatsApp"],
  },
  {
    title: "Viagens personalizadas",
    tag: "Sob medida",
    image: "/images/brand-scenes/travel-planning-team.webp",
    description: "Organização conforme origem, destino, data, duração e perfil dos passageiros.",
    features: ["Orçamento personalizado", "Apoio no planejamento", "Agenda sob consulta", "Comunicação clara"],
  },
  {
    title: "Passeios e eventos",
    tag: "Agenda turística",
    image: "/images/brand-scenes/destination-cultural.webp",
    description: "Transporte turístico para shows, feiras, eventos religiosos, encontros e datas especiais.",
    features: ["Embarque combinado", "Planejamento de ida e volta", "Conforto no trajeto", "Suporte comercial"],
  },
  {
    title: "Frota para grupos",
    tag: "Conforto",
    image: "/images/brand-scenes/fleet-exterior-premium.webp",
    description: "Veículos alinhados ao padrão visual da empresa e ao tipo de roteiro solicitado.",
    features: ["Identidade oficial", "Manutenção preventiva", "Veículo adequado", "Viagem mais segura"],
  },
];

export default function ServicosPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      <PageHero
        eyebrow="Serviços turísticos"
        title={<>Do roteiro ao embarque, uma experiência <span className="text-warm-gradient">mais bem conduzida.</span></>}
        description="A Auto Viação Leste atende excursões, passeios e viagens em grupo com planejamento comercial claro e frota preparada."
        image="/images/brand-scenes/travel-planning-team.webp"
        imageAlt="Planejamento de roteiro turístico com equipe de atendimento"
        primaryCta={{ href: "/passagens", label: "Solicitar orçamento" }}
        secondaryCta={{ href: "/contato", label: "Falar com atendimento" }}
      />

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-road" />
        <div className="relative section-padding">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <ImageCard image={service.image} imageAlt={service.title} eyebrow={service.tag} title={service.title} description={service.description}>
                  <ul className="mt-5 grid gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-ice/72">
                        <CheckCircle className="h-4 w-4 shrink-0 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contato" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
                    Consultar serviço
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ImageCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
