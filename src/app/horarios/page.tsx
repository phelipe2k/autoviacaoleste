"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingSearch } from "@/components/booking/BookingSearch";
import { MapPin, ArrowRight, Clock, Calendar, Bus, Star } from "lucide-react";

const futureSchedules = [
  { from: "Origem a definir", to: "Destino a definir", departure: "Sob consulta", arrival: "Sob consulta", duration: "A combinar", status: "Em estruturação", busType: "Executivo" },
  { from: "Excursão turística", to: "Roteiro personalizado", departure: "Agenda flexível", arrival: "Conforme roteiro", duration: "Sob orçamento", status: "Disponível para consulta", busType: "Turismo" },
  { from: "Grupo particular", to: "Evento ou excursão", departure: "Data desejada", arrival: "Conforme roteiro", duration: "Planejamento", status: "Sob consulta", busType: "Turismo" },
];

const serviceOptions = [
  { from: "Empresas", to: "Turismo", frequency: "Agenda sob consulta" },
  { from: "Grupos", to: "Excursões", frequency: "Roteiro personalizado" },
  { from: "Eventos", to: "Transporte dedicado", frequency: "Horário combinado" },
  { from: "Turismo", to: "Viagem planejada", frequency: "Sob orçamento" },
];

export default function HorariosPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />

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
                Disponibilidade
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Estrutura futura de <span className="text-gradient">Rotas e Horários</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Esta área apresenta apenas viagens turísticas sob consulta. Orçamentos são organizados conforme destino, data e grupo.
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
              <h2 className="heading-md text-white mb-2">Consultas Disponíveis</h2>
              <p className="text-ice/60">Opções de atendimento para viagens sob demanda e planejamento futuro.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {serviceOptions.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan" />
                  Quadro preparado para futuras operações
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Tipo</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Origem</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Destino</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Saída</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Retorno/Chegada</th>
                      <th className="text-left p-4 text-ice/60 text-sm font-medium">Status</th>
                      <th className="text-right p-4 text-ice/60 text-sm font-medium">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {futureSchedules.map((schedule, index) => (
                      <tr key={index} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Bus className="w-4 h-4 text-cyan" />
                            <span className="text-ice/80">{schedule.busType}</span>
                            {schedule.busType.includes("Executivo") && (
                              <Star className="w-4 h-4 text-primary fill-current" />
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-ice/80">{schedule.from}</td>
                        <td className="p-4 text-ice/80">{schedule.to}</td>
                        <td className="p-4 text-ice/80">{schedule.departure}</td>
                        <td className="p-4 text-ice/80">{schedule.arrival}</td>
                        <td className="p-4">
                          <span className="text-cyan font-semibold">{schedule.status}</span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="btn-primary text-sm px-4 py-2">
                            Consultar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 glass-card p-6"
            >
              <p className="text-ice/60 text-sm">
                <strong className="text-white">Observação:</strong> esta página apresenta somente ideias de viagens turísticas sob consulta. O atendimento é exclusivo para excursões, passeios e roteiros personalizados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
