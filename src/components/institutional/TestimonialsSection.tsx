"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star, UserRound } from "lucide-react";
import { publicPath } from "@/lib/site";
import { SectionHeader } from "@/components/ui/premium";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Organizadora de excursão",
    rating: 5,
    text: "A equipe ajudou a organizar o roteiro com clareza. O grupo viajou tranquilo e tivemos suporte do primeiro contato até o retorno.",
    route: "Excursão para o litoral",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Grupo corporativo",
    rating: 5,
    text: "O atendimento foi direto, o ônibus confortável e a programação ficou bem combinada. Isso fez diferença para quem estava organizando.",
    route: "Evento em Belo Horizonte",
  },
  {
    id: 3,
    name: "Ana Paula",
    role: "Turismo em família",
    rating: 5,
    text: "Gostamos da atenção aos detalhes e da sensação de segurança durante a viagem. Foi uma experiência leve para todo mundo.",
    route: "Roteiro personalizado",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-light via-dark to-road" />
      <div className="absolute inset-0 route-texture opacity-20" />

      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Confiança"
            title={<>Prova social com <span className="text-warm-gradient">tom realista</span></>}
            description="Depoimentos, cuidado operacional e uma identidade visual mais própria substituem números exagerados por sinais de confiança mais críveis."
            className="mb-10 sm:mb-16"
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[420px] overflow-hidden rounded-[1.35rem] border border-white/10 shadow-premium"
            >
              <Image
                src={publicPath("/images/brand-scenes/safety-preparation.webp")}
                alt="Inspeção de segurança antes da viagem"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/92 via-dark/16 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-dark/68 p-5 backdrop-blur-xl">
                <div className="mb-3 flex items-center gap-2 text-gold-light">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">Cuidado operacional</span>
                </div>
                <p className="text-xl font-bold text-white">Viagem boa começa antes da estrada.</p>
                <p className="mt-2 text-sm text-ice/68">Manutenção, planejamento e atendimento claro sustentam a experiência premium.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-panel p-6 sm:p-10"
            >
              <Quote className="h-12 w-12 text-gold/70" />
              <div className="mt-7 flex gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-gold" />
                ))}
              </div>
              <p className="mt-6 text-xl leading-relaxed text-ice/90 sm:text-2xl">
                &ldquo;{active.text}&rdquo;
              </p>
              <div className="mt-8 inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold-light">
                {active.route}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/25 to-cyan/20">
                  <UserRound className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white">{active.name}</p>
                  <p className="text-sm text-ice/58">{active.role}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      aria-label={`Ver depoimento ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeIndex ? "w-9 bg-gold" : "w-2.5 bg-white/25 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Depoimento anterior"
                    onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gold transition-colors hover:bg-white/10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Próximo depoimento"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gold transition-colors hover:bg-white/10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
