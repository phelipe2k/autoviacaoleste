"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, AlertCircle, Calendar, Scale } from "lucide-react";

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao acessar e utilizar o site da Auto Viação Leste, você concorda com estes termos de uso. Caso não concorde com alguma condição, recomendamos não utilizar os canais digitais da empresa.`,
  },
  {
    title: "2. Serviços Apresentados",
    content: `O site apresenta informações institucionais, frota, roteiros turísticos, canais de contato e formulários para solicitação de orçamento turístico sob consulta. O atendimento atual é exclusivo para turismo, excursões, passeios e roteiros personalizados.`,
  },
  {
    title: "3. Solicitações e Orçamentos",
    content: `O envio de uma solicitação pelo site não representa confirmação automática de viagem. Todo valor, roteiro, data e condição operacional dependem de análise e confirmação formal pela equipe da Auto Viação Leste.`,
  },
  {
    title: "4. Informações do Usuário",
    content: `Ao solicitar contato, orçamento ou informações, você se compromete a fornecer dados corretos e atualizados. Dados incompletos podem impedir o retorno da equipe ou atrasar a análise da solicitação.`,
  },
  {
    title: "5. Uso Adequado",
    content: `O usuário não deve utilizar o site para enviar informações falsas, violar direitos de terceiros, tentar acessar áreas restritas ou comprometer o funcionamento dos sistemas.`,
  },
  {
    title: "6. Atualizações",
    content: `A Auto Viação Leste pode atualizar páginas, textos, recursos e estes termos a qualquer momento. A continuidade de uso do site após alterações representa ciência das novas condições.`,
  },
];

export default function TermosDeUsoPage() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-cyan opacity-20 blur-3xl" />

        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">Legal</span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Termos de <span className="text-gradient">Uso</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Condições para uso do site, canais de atendimento e solicitações comerciais.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 mb-12 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Última atualização: 08/05/2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Vigência imediata</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Versão inicial</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-cyan" />
                </div>
                <h2 className="text-xl font-bold text-white">Importante</h2>
              </div>
              <p className="text-ice/70 leading-relaxed">
                Este site funciona como canal institucional e turístico. O atendimento atual é exclusivo para excursões, passeios, grupos e roteiros sob consulta.
              </p>
            </motion.div>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="glass-card p-8">
                  <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                  <div className="text-ice/70 leading-relaxed whitespace-pre-line">{section.content}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 mt-8">
              <h2 className="text-xl font-bold text-white mb-4">Contato</h2>
              <p className="text-ice/70 mb-4">Para esclarecimentos sobre estes termos, entre em contato:</p>
              <div className="space-y-2 text-ice/70">
                <p><strong className="text-white">E-mail:</strong> contato@viacaoleste.com.br</p>
                <p><strong className="text-white">Telefone:</strong> (33) 3000-0000</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
