"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { BookingSearch } from "@/components/booking/BookingSearch";
import { publicPath } from "@/lib/site";
import { whatsappUrl } from "@/lib/contact";

const trustItems = [
  { icon: ShieldCheck, title: "Segurança", description: "Frota revisada e equipe preparada" },
  { icon: Users, title: "Grupos", description: "Excursões e roteiros sob medida" },
  { icon: Sparkles, title: "Conforto", description: "Viagens planejadas com cuidado" },
];

const featuredTrips = [
  {
    title: "Praias e litoral",
    origin: "Saídas de Governador Valadares",
    date: "Excursões sob consulta",
    tag: "Mais procurado",
    image: "/images/brand-scenes/destination-coast.webp",
  },
  {
    title: "Roteiros personalizados",
    origin: "Eventos, grupos e famílias",
    date: "Agenda flexível",
    tag: "Sob medida",
    image: "/images/brand-scenes/travel-planning-team.webp",
  },
  {
    title: "Viagens premium",
    origin: "Conforto do embarque ao destino",
    date: "Planejamento comercial",
    tag: "Conforto",
    image: "/images/brand-scenes/fleet-exterior-premium.webp",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <Image
          src={publicPath("/images/brand-scenes/home-hero-road.webp")}
          alt="Ônibus de turismo viajando pela estrada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/98 via-dark/72 to-dark/22" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/56 via-transparent to-dark" />
        <div className="absolute inset-0 route-texture opacity-35" />
        <div className="absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-dark to-transparent" />
      </div>

      <div className="relative z-10 section-padding pt-24 sm:pt-32 lg:pt-36 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-[62vh] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-dark/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-md"
              >
                Turismo premium sob consulta
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="heading-xl mt-6 max-w-4xl text-white"
              >
                Viagens turísticas com <span className="text-warm-gradient">conforto, cuidado e presença.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="body-lg mt-5 max-w-2xl"
              >
                Planejamos excursões, passeios e roteiros para grupos com atendimento próximo, frota confortável e uma experiência mais tranquila do primeiro contato ao retorno.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link href="/passagens" className="btn-primary inline-flex items-center justify-center gap-2">
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4 text-emerald-300" />
                  Falar no WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="mt-8 grid gap-3 sm:grid-cols-3"
              >
                {trustItems.map((item) => (
                  <div key={item.title} className="premium-panel rounded-xl p-4">
                    <item.icon className="mb-3 h-5 w-5 text-gold" />
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ice/62">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-[1.35rem] border border-white/12 bg-dark/70 shadow-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-road via-dark to-dark-light route-texture opacity-95" />
                <Image
                  src={publicPath("/images/brand-scenes/fleet-exterior-premium.webp")}
                  alt="Padrão visual oficial do ônibus Auto Viação Leste"
                  width={900}
                  height={420}
                  className="relative h-[520px] w-full object-contain p-8"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/88 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/12 bg-dark/68 p-5 backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2 text-gold-light">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">Experiência planejada</span>
                  </div>
                  <p className="text-xl font-bold text-white">Identidade própria em cada viagem.</p>
                  <p className="mt-2 text-sm text-ice/68">A pintura teal e azul-claro da frota vira parte da experiência e reforça a presença da marca.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 sm:mt-8">
            <BookingSearch />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8"
          >
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Inspire sua próxima viagem</span>
                <h2 className="mt-2 text-2xl font-bold text-white">Experiências em destaque</h2>
              </div>
              <Link href="/destinos" className="hidden items-center gap-2 text-sm font-semibold text-gold-light transition-colors hover:text-cyan sm:inline-flex">
                Ver roteiros
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="-mx-5 flex gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
              {featuredTrips.map((trip, index) => (
                <motion.article
                  key={trip.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.55 + index * 0.08 }}
                  className="group relative min-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-dark-lighter/80 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 sm:min-w-0"
                >
                  <div className="relative h-56 overflow-hidden lg:h-64">
                    <Image
                      src={publicPath(trip.image as `/${string}`)}
                      alt={trip.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/86 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.13em] text-dark">
                      {trip.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{trip.title}</h3>
                    <div className="mt-3 space-y-2 text-sm text-ice/68">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-gold" />
                        {trip.origin}
                      </p>
                      <p className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 shrink-0 text-cyan" />
                        {trip.date}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
