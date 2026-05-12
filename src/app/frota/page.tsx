"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FleetSection } from "@/components/fleet/FleetSection";
import { PageHero } from "@/components/ui/premium";
import { Award, Bus, Shield, Wrench } from "lucide-react";
import { publicPath } from "@/lib/site";

const certifications = [
  { icon: Shield, title: "Segurança", description: "Inspeções e cuidado operacional" },
  { icon: Wrench, title: "Manutenção", description: "Revisões preventivas" },
  { icon: Bus, title: "Identidade própria", description: "Padrão visual teal e azul-claro" },
  { icon: Award, title: "Conforto", description: "Frota pensada para grupos" },
];

export default function FrotaPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      <PageHero
        eyebrow="Frota Auto Viação Leste"
        title={<>Ônibus com identidade própria e <span className="text-warm-gradient">presença premium.</span></>}
        description="A pintura oficial teal e azul-claro, as faixas de movimento e o acabamento escuro dos vidros passam a guiar toda imagem da frota."
        image="/images/brand-scenes/fleet-exterior-premium.webp"
        imageAlt="Ônibus Auto Viação Leste com padrão visual oficial"
        primaryCta={{ href: "/contato", label: "Consultar veículo" }}
        secondaryCta={{ href: "/passagens", label: "Solicitar orçamento" }}
      />

      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="premium-panel p-5 text-center"
              >
                <cert.icon className="mx-auto mb-3 h-7 w-7 text-gold" />
                <h3 className="text-base font-semibold text-white">{cert.title}</h3>
                <p className="mt-1 text-sm text-ice/60">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FleetSection />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-road to-dark" />
        <div className="relative section-padding">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Padrão visual oficial</span>
              <h2 className="heading-md mt-4 text-white">
                A frota deve parecer <span className="text-warm-gradient">Auto Viação Leste</span> em qualquer imagem.
              </h2>
              <p className="body-md mt-5">
                Imagens externas de ônibus devem preservar a paleta teal, azul-claro, vidros escuros, faixas de movimento laterais e presença limpa da marca. Quando isso não for possível, usamos imagem institucional, interior ou cenário sem mostrar pintura externa genérica.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-80 overflow-hidden rounded-[1.35rem] border border-white/10 bg-road shadow-premium">
              <Image
                src={publicPath("/images/brand-scenes/fleet-exterior-premium.webp")}
                alt="Prancha do padrão visual oficial do ônibus"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
