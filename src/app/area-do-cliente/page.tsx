"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { User, ClipboardList, Clock, Bell, Settings, ChevronRight, Bus, MessageCircle } from "lucide-react";

const menuItems = [
  { icon: ClipboardList, label: "Minhas Solicita??es", href: "#" },
  { icon: Clock, label: "Hist?rico de Atendimento", href: "#" },
  { icon: Bell, label: "Notifica??es", href: "#" },
  { icon: User, label: "Dados Pessoais", href: "#" },
  { icon: Settings, label: "Configura??es", href: "#" },
];

const requests = [
  { id: "AVL001", route: "S?o Paulo -> Rio de Janeiro", date: "15/06/2026", time: "Sob consulta", status: "Em an?lise" },
  { id: "AVL002", route: "Grupo empresarial -> Evento", date: "20/06/2026", time: "A combinar", status: "Aguardando retorno" },
];

export default function AreaDoClientePage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />

      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-glow-cyan opacity-20 blur-3xl" />

        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                <User className="w-10 h-10 text-dark" />
              </div>
              <div>
                <span className="text-cyan text-sm font-medium">?rea de atendimento</span>
                <h1 className="text-3xl font-bold text-white">Solicita??es</h1>
                <p className="text-ice/60 text-sm">Acompanhe pedidos de informa??o, or?amento e disponibilidade.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-1"
              >
                <div className="glass-card overflow-hidden">
                  {menuItems.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-6 py-4 transition-colors ${
                        index !== menuItems.length - 1 ? "border-b border-white/5" : ""
                      } hover:bg-white/5`}
                    >
                      <item.icon className="w-5 h-5 text-cyan" />
                      <span className="text-ice/80 text-sm">{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-ice/40 ml-auto" />
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-3 space-y-6"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card p-6 text-center">
                    <p className="text-3xl font-bold text-gradient">2</p>
                    <p className="text-sm text-ice/60">Solicita??es abertas</p>
                  </div>
                  <div className="glass-card p-6 text-center">
                    <p className="text-3xl font-bold text-gradient">1</p>
                    <p className="text-sm text-ice/60">Or?amento em an�lise</p>
                  </div>
                  <div className="glass-card p-6 text-center">
                    <p className="text-3xl font-bold text-gradient">24h</p>
                    <p className="text-sm text-ice/60">Prazo de retorno</p>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <Bus className="w-5 h-5 text-cyan" />
                      Solicita??es Recentes
                    </h2>
                    <button className="text-sm text-cyan hover:underline">
                      Ver todas
                    </button>
                  </div>

                  <div className="space-y-4">
                    {requests.map((request) => (
                      <div
                        key={request.id}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                            <Bus className="w-6 h-6 text-cyan" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{request.route}</p>
                            <p className="text-sm text-ice/60">
                              {request.date} " {request.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-cyan/20 text-cyan text-xs font-medium">
                            {request.status}
                          </span>
                          <button className="btn-outline text-sm px-4 py-2">
                            Ver solicita??o
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 bg-gradient-to-r from-primary/10 to-cyan/10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-cyan text-sm font-semibold">ATENDIMENTO</span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        Precisa atualizar uma solicita??o?
                      </h3>
                      <p className="text-ice/60 text-sm mt-1">
                        Envie novas informa??es sobre data, destino, quantidade de pessoas ou roteiro.
                      </p>
                    </div>
                    <button className="btn-primary whitespace-nowrap inline-flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Fale conosco
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
