"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { User, Ticket, Clock, CreditCard, Bell, Settings, ChevronRight, Bus } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: Ticket, label: "Minhas Passagens", href: "#" },
  { icon: Clock, label: "Histórico de Viagens", href: "#" },
  { icon: CreditCard, label: "Formas de Pagamento", href: "#" },
  { icon: Bell, label: "Notificações", href: "#" },
  { icon: User, label: "Dados Pessoais", href: "#" },
  { icon: Settings, label: "Configurações", href: "#" },
];

const upcomingTrips = [
  { id: "AVL001", route: "São Paulo → Rio de Janeiro", date: "15/06/2026", time: "08:00", seat: "15A", status: "Confirmado" },
  { id: "AVL002", route: "Rio de Janeiro → São Paulo", date: "20/06/2026", time: "14:00", seat: "12B", status: "Confirmado" },
];

export default function AreaDoClientePage() {
  const [activeTab, setActiveTab] = useState("trips");

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
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
                <span className="text-cyan text-sm font-medium">Bem-vindo de volta,</span>
                <h1 className="text-3xl font-bold text-white">João Silva</h1>
                <p className="text-ice/60 text-sm">joao.silva@email.com • CPF: 123.***.***-45</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-8 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Sidebar Menu */}
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

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-3 space-y-6"
              >
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card p-6 text-center">
                    <p className="text-3xl font-bold text-gradient">12</p>
                    <p className="text-sm text-ice/60">Viagens este ano</p>
                  </div>
                  <div className="glass-card p-6 text-center">
                    <p className="text-3xl font-bold text-gradient">2</p>
                    <p className="text-sm text-ice/60">Próximas viagens</p>
                  </div>
                  <div className="glass-card p-6 text-center">
                    <p className="text-3xl font-bold text-gradient">4.850</p>
                    <p className="text-sm text-ice/60">Pontos AVL</p>
                  </div>
                </div>

                {/* Upcoming Trips */}
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <Bus className="w-5 h-5 text-cyan" />
                      Próximas Viagens
                    </h2>
                    <button className="text-sm text-cyan hover:underline">
                      Ver todas
                    </button>
                  </div>

                  <div className="space-y-4">
                    {upcomingTrips.map((trip, index) => (
                      <div
                        key={trip.id}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                            <Bus className="w-6 h-6 text-cyan" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{trip.route}</p>
                            <p className="text-sm text-ice/60">
                              {trip.date} às {trip.time} • Poltrona {trip.seat}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                            {trip.status}
                          </span>
                          <button className="btn-outline text-sm px-4 py-2">
                            Ver bilhete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promotions */}
                <div className="glass-card p-6 bg-gradient-to-r from-primary/10 to-cyan/10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-cyan text-sm font-semibold">OFERTA ESPECIAL</span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        Indique um amigo e ganhe 10% de desconto
                      </h3>
                      <p className="text-ice/60 text-sm mt-1">
                        Compartilhe seu código e economize em suas próximas viagens.
                      </p>
                    </div>
                    <button className="btn-primary whitespace-nowrap">
                      Ver Detalhes
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
