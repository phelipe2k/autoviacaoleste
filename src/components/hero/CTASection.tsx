"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { companyContact, whatsappUrl } from "@/lib/contact";
import { publicPath } from "@/lib/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-dark" />
      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-premium"
          >
            <Image
              src={publicPath("/images/experiences/premium-road-trip.webp")}
              alt="Ônibus em estrada ao pôr do sol"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/96 via-dark/78 to-dark/30" />
            <div className="absolute inset-0 route-texture opacity-25" />

            <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Atendimento sob consulta
                </span>
                <h2 className="heading-lg mt-4 max-w-3xl text-white">
                  Sua próxima viagem pode começar com uma conversa simples.
                </h2>
                <p className="body-lg mt-5 max-w-2xl">
                  Conte o destino, a data e o tamanho do grupo. A equipe ajuda a organizar uma proposta com conforto, segurança e clareza.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/passagens" className="btn-primary inline-flex items-center justify-center gap-2">
                    Solicitar orçamento
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center justify-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark/68 p-5 backdrop-blur-xl sm:p-6">
                <h3 className="text-lg font-bold text-white">Canais diretos</h3>
                <div className="mt-5 grid gap-4">
                  <a href={companyContact.phoneHref} className="flex items-center gap-3 text-ice/76 transition-colors hover:text-gold-light">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Phone className="h-4 w-4" />
                    </span>
                    {companyContact.phoneDisplay}
                  </a>
                  <a href={`mailto:${companyContact.email}`} className="flex items-center gap-3 text-ice/76 transition-colors hover:text-gold-light">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Mail className="h-4 w-4" />
                    </span>
                    {companyContact.email}
                  </a>
                  <div className="flex items-center gap-3 text-ice/76">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <MapPin className="h-4 w-4" />
                    </span>
                    {companyContact.city}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
