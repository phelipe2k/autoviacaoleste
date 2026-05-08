"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Building2, Users, Briefcase, Bus, ArrowRight, CheckCircle } from "lucide-react";

// Versao detalhada dos servicos, usada na pagina especifica de servicos.
const detailedServices = [
  {
    icon: Building2,
    title: "Fretamento Empresarial",
    description: "Soluções completas de transporte para empresas de todos os portes. Deslocamento de funcionários, eventos corporativos e mais.",
    features: [
      "Contratos flexíveis e personalizados",
      "Frota dedicada exclusiva",
      "Motoristas uniformizados e treinados",
      "Rastreamento GPS em tempo real",
      "Relatórios de utilização detalhados",
      "Atendimento 24 horas",
    ],
    cta: "Solicitar Orçamento",
  },
  {
    icon: Users,
    title: "Turismo e Excursões",
    description: "Roteiros especiais para grupos, com conforto e segurança. Ideal para agências de turismo, escolas e grupos de amigos.",
    features: [
      "Roteiros personalizados",
      "Guias de turismo especializados",
      "Seguro viagem incluso",
      "Paradas estratégicas programadas",
      "Descontos para grupos grandes",
      "Pacotes promocionais",
    ],
    cta: "Ver Roteiros",
  },
  {
    icon: Briefcase,
    title: "Viagens Corporativas",
    description: "Transporte executivo para reuniões, eventos e deslocamentos de negócios com máxima pontualidade.",
    features: [
      "Pontualidade garantida",
      "Wi-Fi premium de alta velocidade",
      "Ambiente silencioso para trabalho",
      "Atendimento VIP exclusivo",
      "Flexibilidade de horários",
      "Faturamento facilitado",
    ],
    cta: "Conhecer Mais",
  },
  {
    icon: Bus,
    title: "Transporte Escolar",
    description: "Segurança máxima no transporte de estudantes, com rigorosos padrões de qualidade e certificações.",
    features: [
      "Motoristas especializados em transporte escolar",
      "Veículos monitorados constantemente",
      "Certificação de segurança veicular",
      "Rastreamento GPS para pais",
      "Aplicativo de acompanhamento",
      "Monitores a bordo (opcional)",
    ],
    cta: "Saiba Mais",
  },
];

// Pagina de servicos: detalha solucoes comerciais e leva o usuario para contato.
export default function ServicosPage() {
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
                Serviços
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Soluções <span className="text-gradient">Completas</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Oferecemos uma variedade de serviços de transporte para atender
                todas as suas necessidades de mobilidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards detalhados com descricao, beneficios e chamada de acao de cada servico. */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {detailedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-dark" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-ice/70 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-ice/80">
                        <CheckCircle className="w-4 h-4 text-cyan shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-primary flex items-center gap-2">
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chamada final para demandas personalizadas que nao aparecem nos cards. */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center"
            >
              <h2 className="heading-md text-white mb-4">
                Não encontrou o que procura?
              </h2>
              <p className="text-ice/70 mb-8 max-w-xl mx-auto">
                Entre em contato conosco e desenvolveremos uma solução
                personalizada para sua necessidade específica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary flex items-center justify-center gap-2">
                  Falar com Especialista
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="btn-outline flex items-center justify-center gap-2">
                  Ver Todos os Serviços
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
