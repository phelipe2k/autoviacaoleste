"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-glow-cyan opacity-30 blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,212,255,0.15) 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 mb-6"
              >
                <span className="text-sm font-medium text-cyan">
                  Comece sua jornada
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Pronto para Viajar
                <span className="block text-gradient">com Conforto?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-ice/70 mb-10 max-w-2xl mx-auto"
              >
                Entre em contato conosco e descubra por que milhões de
                passageiros escolhem a Auto Viação Leste para suas viagens.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <button className="btn-primary flex items-center gap-2 px-8 py-4 text-lg">
                  Comprar Passagem
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-outline flex items-center gap-2 px-8 py-4 text-lg">
                  Falar com Especialista
                </button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10"
              >
                <a
                  href="tel:+551130000000"
                  className="flex items-center gap-3 text-ice/70 hover:text-cyan transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan" />
                  </div>
                  <span>(11) 3000-0000</span>
                </a>
                <a
                  href="mailto:contato@viacaoleste.com.br"
                  className="flex items-center gap-3 text-ice/70 hover:text-cyan transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cyan" />
                  </div>
                  <span>contato@viacaoleste.com.br</span>
                </a>
                <div className="flex items-center gap-3 text-ice/70">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-cyan" />
                  </div>
                  <span>São Paulo, SP</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
