"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingSearch } from "@/components/booking/BookingSearch";
import { MapPin, ArrowRight, Clock, Calendar, Bus, ChevronRight, Star } from "lucide-react";

// Horarios simulados exibidos na tabela de consulta.
const schedules = [
  { from: "São Paulo", to: "Rio de Janeiro", departure: "06:00", arrival: "12:00", duration: "6h", price: "R$ 89,90", busType: "Leito", seats: 24 },
  { from: "São Paulo", to: "Rio de Janeiro", departure: "08:00", arrival: "14:00", duration: "6h", price: "R$ 99,90", busType: "Executivo", seats: 36 },
  { from: "São Paulo", to: "Rio de Janeiro", departure: "10:00", arrival: "16:00", duration: "6h", price: "R$ 89,90", busType: "Convencional", seats: 42 },
  { from: "São Paulo", to: "Rio de Janeiro", departure: "14:00", arrival: "20:00", duration: "6h", price: "R$ 109,90", busType: "Leito Premium", seats: 18 },
  { from: "São Paulo", to: "Rio de Janeiro", departure: "18:00", arrival: "00:00", duration: "6h", price: "R$ 99,90", busType: "Executivo", seats: 36 },
  { from: "São Paulo", to: "Rio de Janeiro", departure: "22:00", arrival: "04:00", duration: "6h", price: "R$ 119,90", busType: "Leito Premium", seats: 18 },
  { from: "São Paulo", to: "Curitiba", departure: "07:00", arrival: "12:30", duration: "5h 30min", price: "R$ 99,90", busType: "Executivo", seats: 36 },
  { from: "São Paulo", to: "Curitiba", departure: "13:00", arrival: "18:30", duration: "5h 30min", price: "R$ 89,90", busType: "Convencional", seats: 42 },
  { from: "São Paulo", to: "Curitiba", departure: "19:00", arrival: "00:30", duration: "5h 30min", price: "R$ 109,90", busType: "Leito", seats: 24 },
  { from: "São Paulo", to: "Belo Horizonte", departure: "08:00", arrival: "15:00", duration: "7h", price: "R$ 79,90", busType: "Executivo", seats: 36 },
  { from: "São Paulo", to: "Belo Horizonte", departure: "14:00", arrival: "21:00", duration: "7h", price: "R$ 69,90", busType: "Convencional", seats: 42 },
  { from: "São Paulo", to: "Florianópolis", departure: "06:00", arrival: "16:00", duration: "10h", price: "R$ 149,90", busType: "Leito", seats: 24 },
];

// Rotas destacadas com maior frequencia de saida.
const popularDestinations = [
  { from: "São Paulo", to: "Rio de Janeiro", frequency: "12x/dia" },
  { from: "São Paulo", to: "Curitiba", frequency: "8x/dia" },
  { from: "São Paulo", to: "Belo Horizonte", frequency: "6x/dia" },
  { from: "São Paulo", to: "Florianópolis", frequency: "4x/dia" },
];

// Pagina de horarios: combina busca, rotas populares e tabela detalhada de saidas.
export default function HorariosPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero da pagina com titulo e contexto da funcionalidade. */}
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
                Consulta de Horários
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Horários e <span className="text-gradient">Rotas</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Consulte os horários disponíveis e planeje sua viagem com antecedência.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <BookingSearch />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rotas populares ajudam o usuario a encontrar rapidamente trajetos comuns. */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="heading-md text-white mb-2">Rotas Mais Buscadas</h2>
              <p className="text-ice/60">Horários frequentes para destinos populares</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {popularDestinations.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-cyan" />
                    <span className="text-white font-medium">{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-ice/40" />
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-white font-medium">{route.to}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ice/60">
                    <Clock className="w-4 h-4" />
                    <span>{route.frequency}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tabela principal com saida, chegada, duracao, tipo de onibus e preco. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan" />
                  Horários Disponíveis
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Rota</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Saída</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Chegada</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Duração</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Tipo</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Preço</th>
                      <th className="text-right p-4 text-ice/60 text-sm font-medium">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.map((schedule, index) => (
                      <tr key={index} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{schedule.from}</span>
                            <ArrowRight className="w-4 h-4 text-ice/40" />
                            <span className="text-white font-medium">{schedule.to}</span>
                          </div>
                        </td>
                        <td className="p-4 text-ice/80">{schedule.departure}</td>
                        <td className="p-4 text-ice/80">{schedule.arrival}</td>
                        <td className="p-4 text-ice/80">{schedule.duration}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Bus className="w-4 h-4 text-cyan" />
                            <span className="text-ice/80">{schedule.busType}</span>
                            {schedule.busType.includes("Premium") && (
                              <Star className="w-4 h-4 text-primary fill-current" />
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-cyan font-semibold">{schedule.price}</span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="btn-primary text-sm px-4 py-2">
                            Comprar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Info Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 glass-card p-6"
            >
              <p className="text-ice/60 text-sm">
                <strong className="text-white">Observação:</strong> Os horários podem sofrer alterações 
                devido a condições de trânsito, clima ou outros fatores externos. Recomendamos chegar 
                ao terminal com 30 minutos de antecedência. Horários em verão podem incluir paradas 
                adicionais.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
