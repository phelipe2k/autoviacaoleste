"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingSearch } from "@/components/booking/BookingSearch";
import { MapPin, ArrowRight, Clock, Calendar, Filter } from "lucide-react";
import { useState } from "react";

// Rotas populares usadas como sugestaes rapidas de compra.
const popularRoutes = [
  { from: "São Paulo", to: "Rio de Janeiro", price: "R$ 89,90", duration: "6h", frequency: "12x/dia" },
  { from: "São Paulo", to: "Curitiba", price: "R$ 99,90", duration: "5h 30min", frequency: "8x/dia" },
  { from: "Rio de Janeiro", to: "Belo Horizonte", price: "R$ 79,90", duration: "7h", frequency: "6x/dia" },
  { from: "São Paulo", to: "Florianópolis", price: "R$ 149,90", duration: "10h", frequency: "4x/dia" },
];

export default function PassagensPage() {
  // Guarda a rota selecionada para destacar visualmente o card clicado.
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero da pagina: apresenta o assunto principal da rota. */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-cyan opacity-20 blur-3xl" />
        
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
                Compre sua Passagem
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Encontre sua <span className="text-gradient">Próxima Viagem</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Busque entre mais de 120 rotas e encontre a melhor opção para você.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <BookingSearch />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sugestaes de rotas frequentes para acelerar a escolha do usuario. */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="heading-md text-white">Rotas Populares</h2>
              <button className="btn-outline flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4" />
                Filtrar
              </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedRoute(`${route.from}-${route.to}`)}
                  className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                    selectedRoute === `${route.from}-${route.to}`
                      ?"border-cyan/50 shadow-glow-cyan"
                      : "hover:border-cyan/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan" />
                          <span className="text-white font-medium">{route.from}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-ice/40" />
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-white font-medium">{route.to}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-ice/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {route.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {route.frequency}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gradient">{route.price}</p>
                      <button className="text-sm text-cyan hover:underline mt-1">
                        Ver horários
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Banner promocional estatico para campanhas comerciais. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 glass-card p-8 bg-gradient-to-r from-primary/10 to-cyan/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-primary text-sm font-semibold">PROMOÇÃO ESPECIAL</span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    20% OFF em viagens de ida e volta
                  </h3>
                  <p className="text-ice/60 text-sm mt-1">
                    Válido para compras até o final do mês. Não cumulativo com outras promoções.
                  </p>
                </div>
                <button className="btn-primary whitespace-nowrap">
                  Aproveitar Agora
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
