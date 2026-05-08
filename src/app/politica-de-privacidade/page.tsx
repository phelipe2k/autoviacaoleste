"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText, Calendar } from "lucide-react";

const sections = [
  {
    title: "1. Coleta de Dados",
    content: `A Auto Viação Leste coleta dados necessários para atendimento, contato e análise de solicitações, como nome, telefone, e-mail, origem, destino, data desejada e informações sobre o serviço solicitado.`,
  },
  {
    title: "2. Uso das Informações",
    content: `Utilizamos seus dados para responder dúvidas, elaborar orçamentos, consultar disponibilidade, organizar atendimento comercial, cumprir obrigações legais e melhorar nossos serviços digitais.`,
  },
  {
    title: "3. Proteção de Dados",
    content: `Adotamos medidas técnicas e administrativas para proteger informações pessoais contra acessos não autorizados, perda, alteração ou uso indevido.`,
  },
  {
    title: "4. Compartilhamento",
    content: `Dados podem ser compartilhados com prestadores de serviços essenciais ao atendimento ou com autoridades quando houver obrigação legal. Não vendemos dados pessoais.`,
  },
  {
    title: "5. Seus Direitos",
    content: `Você pode solicitar acesso, correção, atualização ou exclusão de dados pessoais, conforme a Lei Geral de Proteção de Dados. Para isso, entre em contato pelos canais informados no site.`,
  },
  {
    title: "6. Cookies e Tecnologias",
    content: `Podemos utilizar cookies para melhorar a navegação, entender o uso do site e preservar preferências. Você pode gerenciar cookies nas configurações do navegador.`,
  },
];

export default function PoliticaPrivacidadePage() {
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
                Política de <span className="text-gradient">Privacidade</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Saiba como coletamos, usamos e protegemos informações enviadas pelos canais de atendimento.
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
                <Shield className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">LGPD</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Versão inicial</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-cyan" />
                </div>
                <h2 className="text-xl font-bold text-white">Compromisso com sua Privacidade</h2>
              </div>
              <p className="text-ice/70 leading-relaxed">
                A Auto Viação Leste valoriza a privacidade dos usuários e trata os dados enviados pelo site com finalidade de atendimento, relacionamento e análise de solicitações.
              </p>
            </motion.div>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card p-8">
                  <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                  <div className="text-ice/70 leading-relaxed whitespace-pre-line">{section.content}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 mt-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-cyan" />
                </div>
                <h2 className="text-xl font-bold text-white">Contato sobre Privacidade</h2>
              </div>
              <p className="text-ice/70 mb-4">Para questões relacionadas à privacidade e proteção de dados, entre em contato:</p>
              <div className="space-y-2 text-ice/70">
                <p><strong className="text-white">E-mail:</strong> privacidade@viacaoleste.com.br</p>
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
