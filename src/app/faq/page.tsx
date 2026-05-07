"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "geral", label: "Geral" },
  { id: "passagens", label: "Passagens" },
  { id: "pagamento", label: "Pagamento" },
  { id: "bagagem", label: "Bagagem" },
  { id: "cancelamento", label: "Cancelamento" },
];

const faqs = [
  {
    id: 1,
    category: "geral",
    question: "Como funciona o sistema de pontos AVL?",
    answer: "O programa de fidelidade AVL permite acumular pontos a cada viagem realizada. A cada R$ 1 gasto, você ganha 1 ponto. Os pontos podem ser trocados por descontos em futuras viagens, upgrades de assento ou serviços adicionais.",
  },
  {
    id: 2,
    category: "passagens",
    question: "Como comprar passagens online?",
    answer: "Você pode comprar passagens através do nosso site ou aplicativo. Basta selecionar origem, destino, data e horário, escolher seu assento e efetuar o pagamento. O bilhete digital será enviado para seu e-mail e estará disponível no aplicativo.",
  },
  {
    id: 3,
    category: "passagens",
    question: "Posso escolher meu assento?",
    answer: "Sim! Durante o processo de compra, você visualiza o mapa de assentos do ônibus e pode escolher a poltrona que preferir. Assentos com mais espaço para as pernas ou próximos às janelas podem ter tarifas diferenciadas.",
  },
  {
    id: 4,
    category: "pagamento",
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito (Visa, Mastercard, Elo, American Express), cartões de débito, PIX, boleto bancário e carteiras digitais como PicPay e Mercado Pago.",
  },
  {
    id: 5,
    category: "pagamento",
    question: "É seguro comprar pelo site?",
    answer: "Sim, utilizamos criptografia SSL de 256 bits e processamos pagamentos através de gateways certificados pelo PCI DSS. Seus dados estão protegidos de acordo com a LGPD.",
  },
  {
    id: 6,
    category: "bagagem",
    question: "Qual a política de bagagem?",
    answer: "Cada passageiro pode transportar até 30kg de bagagem no bagageiro, além de uma mala de mão que caiba no compartimento superior ou embaixo do assento. É recomendado etiquetar todas as malas com nome e telefone.",
  },
  {
    id: 7,
    category: "bagagem",
    question: "Posso transportar animais de estimação?",
    answer: "Animais de pequeno porte (até 10kg) podem viajar em caixas transportadoras no bagageiro, mediante taxa adicional. Cães-guia viajam gratuitamente junto ao passageiro. Consulte regulamentos específicos antes da viagem.",
  },
  {
    id: 8,
    category: "cancelamento",
    question: "Como funciona o cancelamento e reembolso?",
    answer: "O cancelamento pode ser solicitado até 3 horas antes do horário de embarque. O reembolso segue as regras da ANTT: 90% até 24h antes, 80% de 24h a 3h antes. Para cancelamentos em até 72h da compra, reembolso integral.",
  },
  {
    id: 9,
    category: "cancelamento",
    question: "O que acontece se meu ônibus atrasar?",
    answer: "Monitoramos nossa frota em tempo real. Em caso de atrasos significativos causados por fatores externos (trânsito, clima), nossa central de atendimento informa os passageiros via SMS e aplicativo. Oferecemos suporte para reacomodação quando necessário.",
  },
  {
    id: 10,
    category: "geral",
    question: "Como faço para trabalhar na AVL?",
    answer: "Estamos sempre em busca de talentos! Acesse a seção Trabalhe Conosco em nosso site para ver vagas disponíveis ou envie seu currículo para rh@viacaoleste.com.br. Valorizamos profissionais comprometidos com excelência no atendimento.",
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "todos" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
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
                Ajuda
              </span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Perguntas <span className="text-gradient">Frequentes</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
              </p>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                <input
                  type="text"
                  placeholder="Buscar pergunta..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              <button
                onClick={() => setActiveCategory("todos")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "todos"
                    ? "bg-cyan text-dark"
                    : "bg-white/5 text-ice/70 hover:bg-white/10"
                }`}
              >
                Todas
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-cyan text-dark"
                      : "bg-white/5 text-ice/70 hover:bg-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan shrink-0 transition-transform ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="text-ice/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-cyan/20 mx-auto mb-4" />
                <p className="text-ice/60">Nenhuma pergunta encontrada</p>
                <p className="text-sm text-ice/40 mt-2">
                  Tente buscar com outros termos
                </p>
              </div>
            )}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 glass-card p-8 text-center"
            >
              <MessageCircle className="w-12 h-12 text-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Não encontrou sua dúvida?
              </h3>
              <p className="text-ice/70 mb-6">
                Nossa equipe de atendimento está pronta para ajudar você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Falar com Atendente
                </button>
                <button className="btn-outline">
                  Ver todos os contatos
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
