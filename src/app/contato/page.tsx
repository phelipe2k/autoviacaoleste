"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/premium";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { companyContact, whatsappUrl } from "@/lib/contact";

const contactInfo = [
  { icon: Phone, title: "Telefone", content: companyContact.phoneDisplay, subcontent: "Atendimento comercial" },
  { icon: Mail, title: "E-mail", content: companyContact.email, subcontent: "Retorno da equipe" },
  { icon: MapPin, title: "Sede", content: companyContact.city, subcontent: "Base de atendimento" },
  { icon: Clock, title: "Horário", content: "Seg - Sex", subcontent: "8h às 18h" },
];

const subjects = ["Orçamento de turismo", "Excursões e roteiros turísticos", "Atendimento comercial", "Sugestões", "Outros"];

export default function ContatoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitFeedback, setSubmitFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = [
      `Nome: ${formData.name}`,
      `E-mail: ${formData.email}`,
      `Telefone: ${formData.phone || "Não informado"}`,
      `Assunto: ${formData.subject}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${companyContact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    setSubmitFeedback("Abrimos seu aplicativo de e-mail com a mensagem preenchida.");
  };

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      <PageHero
        eyebrow="Fale conosco"
        title={<>Atendimento direto para transformar ideia em <span className="text-warm-gradient">viagem possível.</span></>}
        description="Use o WhatsApp para atendimento rápido ou envie uma mensagem com os detalhes do roteiro."
        image="/images/brand-scenes/travel-planning-team.webp"
        imageAlt="Atendimento para planejamento de viagem turística"
        primaryCta={{ href: "/passagens", label: "Solicitar orçamento" }}
      />

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-road" />
        <div className="relative section-padding">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {contactInfo.map((info, index) => (
                <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="premium-panel p-6 text-center sm:p-7">
                  <info.icon className="mx-auto mb-3 h-6 w-6 text-gold" />
                  <h3 className="text-sm text-ice/60">{info.title}</h3>
                  <p className="mt-1 font-semibold text-white">{info.content}</p>
                  <p className="mt-1 text-xs text-ice/40">{info.subcontent}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.8fr]">
              <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="premium-panel p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white">Envie uma mensagem</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border border-white/10 bg-dark/55 px-4 py-3 text-ice placeholder:text-ice/40 focus:border-gold/60 focus:outline-none" placeholder="Seu nome" required />
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border border-white/10 bg-dark/55 px-4 py-3 text-ice placeholder:text-ice/40 focus:border-gold/60 focus:outline-none" placeholder="seu@email.com" required />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl border border-white/10 bg-dark/55 px-4 py-3 text-ice placeholder:text-ice/40 focus:border-gold/60 focus:outline-none" placeholder="Telefone" />
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="rounded-xl border border-white/10 bg-dark/55 px-4 py-3 text-ice focus:border-gold/60 focus:outline-none" required>
                      <option value="">Selecione o assunto</option>
                      {subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
                    </select>
                  </div>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full rounded-xl border border-white/10 bg-dark/55 px-4 py-3 text-ice placeholder:text-ice/40 focus:border-gold/60 focus:outline-none" placeholder="Conte destino, data, quantidade de pessoas e objetivo da viagem..." required />
                  <button type="submit" className="btn-primary flex w-full items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Enviar mensagem
                  </button>
                  {submitFeedback && <p className="text-center text-sm text-gold-light">{submitFeedback}</p>}
                </form>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/12 p-8 shadow-premium">
                  <MessageCircle className="mb-5 h-12 w-12 text-emerald-300" />
                  <h3 className="text-2xl font-bold text-white">WhatsApp primeiro</h3>
                  <p className="mt-3 text-ice/70">Para orçamento turístico, o WhatsApp é o caminho mais rápido para alinhar detalhes do grupo.</p>
                  <a href={whatsappUrl("Olá! Gostaria de atendimento comercial da Auto Viação Leste.")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 inline-flex w-full items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Iniciar conversa
                  </a>
                </div>
                <div className="premium-panel p-6">
                  <h3 className="text-xl font-bold text-white">Ouvidoria</h3>
                  <p className="mt-3 text-ice/70">Se já falou com o atendimento e precisa registrar uma solicitação, envie um e-mail para a ouvidoria.</p>
                  <a href={`mailto:${companyContact.ombudsmanEmail}`} className="mt-4 inline-flex text-gold-light hover:text-cyan">{companyContact.ombudsmanEmail}</a>
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
