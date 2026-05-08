"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText, Calendar } from "lucide-react";

// Secoes do documento legal, renderizadas como blocos de texto reutilizaveis.
const sections = [
  {
    title: "1. Coleta de Dados",
    content: `A Auto Viação Leste coleta informações pessoais necessárias para a prestação de serviços de transporte, incluindo:
    • Nome completo e CPF
    • Informações de contato (e-mail, telefone)
    • Dados de pagamento
    • Histórico de viagens
    • Preferências de viagem
    
    Esses dados são coletados quando você realiza cadastro, compra passagens, entra em contato conosco ou utiliza nossos serviços.`,
  },
  {
    title: "2. Uso das Informações",
    content: `Utilizamos seus dados para:
    • Processar compras e emitir bilhetes
    • Enviar confirmações e lembretes de viagem
    • Gerenciar sua conta e programa de fidelidade
    • Personalizar sua experiência
    • Cumprir obrigações legais e regulatórias
    • Melhorar nossos serviços
    
    Seus dados também podem ser utilizados para comunicações de marketing, desde que você tenha consentido previamente.`,
  },
  {
    title: "3. Proteção de Dados",
    content: `Adotamos medidas técnicas e administrativas rigorosas para proteger suas informações:
    • Criptografia SSL em todas as transações
    • Firewalls e sistemas de detecção de intrusão
    • Controle de acesso restrito a funcionários autorizados
    • Auditorias regulares de segurança
    • Backups criptografados
    
    Nossos sistemas são certificados e atendem aos mais altos padrões de segurança da indústria.`,
  },
  {
    title: "4. Compartilhamento",
    content: `Seus dados pessoais podem ser compartilhados com:
    • Prestadores de serviços essenciais (processadores de pagamento, plataformas técnicas)
    • Autoridades competentes quando legalmente obrigatório
    • Empresas do grupo Auto Viação Leste
    
    Não vendemos nem comercializamos seus dados pessoais para terceiros.`,
  },
  {
    title: "5. Seus Direitos",
    content: `De acordo com a LGPD, você tem direito a:
    • Acessar seus dados pessoais
    • Corrigir informações incompletas ou desatualizadas
    • Solicitar a exclusão de dados
    • Revogar consentimento para marketing
    • Portabilidade dos dados
    • Opção de não participar de decisões automatizadas
    
    Para exercer seus direitos, entre em contato pelo e-mail privacidade@viacaoleste.com.br.`,
  },
  {
    title: "6. Cookies e Tecnologias",
    content: `Utilizamos cookies e tecnologias similares para:
    • Manter você logado em sua conta
    • Lembrar suas preferências
    • Analisar o uso do site e melhorar a experiência
    • Personalizar conteúdo e publicidade
    
    Você pode gerenciar as configurações de cookies em seu navegador a qualquer momento.`,
  },
  {
    title: "7. Retenção de Dados",
    content: `Mantemos seus dados pessoais apenas pelo tempo necessário para:
    • Cumprir obrigações legais e fiscais
    • Resolver disputas
    • Prevenir fraudes e abusos
    • Executar contratos
    
    Após esse período, os dados são anonimizados ou excluídos de forma segura.`,
  },
  {
    title: "8. Alterações na Política",
    content: `Esta política de privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação. A data da última atualização é sempre indicada no topo do documento.
    
    Recomendamos revisar esta política regularmente para se manter informado sobre como protegemos suas informações.`,
  },
];

// Pagina legal de privacidade com resumo, versao e conteudo completo da politica.
export default function PoliticaPrivacidadePage() {
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
                Legal
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Política de <span className="text-gradient">Privacidade</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Sua privacidade é nossa prioridade. Saiba como coletamos,
                usamos e protegemos suas informações pessoais.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conteudo textual do card. */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Banner resume versao, data de atualizacao e conformidade com LGPD. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 mb-12 flex flex-wrap items-center justify-center gap-6"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Última atualização: 01/01/2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Versão 3.0</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">LGPD Compliant</span>
              </div>
            </motion.div>

            {/* Introducao contextual do documento legal. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-cyan" />
                </div>
                <h2 className="text-xl font-bold text-white">Compromisso com sua Privacidade</h2>
              </div>
              <p className="text-ice/70 leading-relaxed">
                A Auto Viação Leste valoriza a privacidade de seus usuários e está comprometida 
                com a proteção de dados pessoais. Esta política descreve como coletamos, 
                utilizamos, armazenamos e protegemos suas informações, em conformidade com a 
                Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </motion.div>

            {/* Renderiza cada secao da politica preservando quebras de linha do texto. */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8"
                >
                  <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                  <div className="text-ice/70 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contato especifico para assuntos de privacidade. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 mt-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-cyan" />
                </div>
                <h2 className="text-xl font-bold text-white">Contato do DPO</h2>
              </div>
              <p className="text-ice/70 mb-4">
                Para questões relacionadas à privacidade e proteção de dados, entre em contato 
                com nosso Encarregado de Proteção de Dados (DPO):
              </p>
              <div className="space-y-2 text-ice/70">
                <p><strong className="text-white">E-mail:</strong> privacidade@viacaoleste.com.br</p>
                <p><strong className="text-white">Endereço:</strong> Av. Paulista, 1000 - 10º andar - São Paulo, SP</p>
                <p><strong className="text-white">Telefone:</strong> (11) 3000-0000</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
