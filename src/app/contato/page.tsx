"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

// Canais de atendimento exibidos nos cards do topo.
const contactInfo = [
  { icon: Phone, title: "Telefone", content: "(33) 3000-0000", subcontent: "Segunda a Sexta, 8h às 20h" },
  { icon: Mail, title: "E-mail", content: "contato@viacaoleste.com.br", subcontent: "Respondemos em 24h" },
  { icon: MapPin, title: "Sede", content: "Governador Valadares", subcontent: "Minas Gerais" },
  { icon: Clock, title: "Horário", content: "Atendimento 24h", subcontent: "Central de atendimento" },
];

// Assuntos disponiveis no select do formulario de contato.
const subjects = [
  "Orçamento de turismo",
  "Excursões e roteiros turísticos",
  "Reclamações",
  "Sugestões",
  "Outros",
];

export default function ContatoPage() {
  // Estado unico guarda todos os campos do formulario para facilitar atualizacao e envio.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Envio temporario: impede recarregar a pagina e registra os dados; aqui entra a integracao real.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
                Fale Conosco
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Entre em <span className="text-gradient">Contato</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Estamos aqui para ajudar. Entre em contato por qualquer
                um dos nossos canais de atendimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards com telefone, e-mail, endereco e horario de atendimento. */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="text-sm text-ice/60 mb-1">{info.title}</h3>
                  <p className="text-white font-semibold">{info.content}</p>
                  <p className="text-xs text-ice/40 mt-1">{info.subcontent}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* area com formulario e canais alternativos de atendimento. */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Formulario controlado: cada campo atualiza uma propriedade de formData. */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envie uma Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-ice/70 mb-2">Nome</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-ice/70 mb-2">E-mail</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-ice/70 mb-2">Telefone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                        placeholder="(33) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-ice/70 mb-2">Assunto</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice focus:outline-none focus:border-cyan/50"
                        required
                      >
                        <option value="">Selecione...</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-ice/70 mb-2">Mensagem</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 resize-none"
                      placeholder="Digite sua mensagem..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </button>
                </form>
              </motion.div>

              {/* Blocos alternativos para contato rapido via WhatsApp e Ouvidoria. */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="glass-card p-8 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/30">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Atendimento via WhatsApp
                  </h3>
                  <p className="text-ice/70 mb-6">
                    Prefere conversar pelo WhatsApp?Nossa equipe está disponível
                    para atender você em horário comercial.
                  </p>
                  <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Iniciar Conversa
                  </button>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Ouvidoria
                  </h3>
                  <p className="text-ice/70 mb-4">
                    Se você já entrou em contato com nossos canais de atendimento
                    e não ficou satisfeito, fale com nossa Ouvidoria.
                  </p>
                  <a href="mailto:ouvidoria@viacaoleste.com.br" className="text-cyan hover:underline flex items-center gap-2">
                    ouvidoria@viacaoleste.com.br
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
