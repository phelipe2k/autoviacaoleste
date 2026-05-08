"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "geral", label: "Geral" },
  { id: "solicitacoes", label: "Solicitações" },
  { id: "orcamento", label: "Orçamento" },
  { id: "frota", label: "Frota" },
  { id: "documentacao", label: "Documentação" },
];

const faqs = [
  {
    id: 1,
    category: "geral",
    question: "Como funciona o orçamento turístico?",
    answer: "O atendimento é feito sob consulta. Você informa destino, cidade de saída, data e tamanho do grupo; nossa equipe retorna com orientação e proposta personalizada.",
  },
  {
    id: 2,
    category: "solicitacoes",
    question: "Como faço para solicitar um orçamento?",
    answer: "Use o formulário de solicitação informando origem, destino, data desejada e quantidade de pessoas. A equipe comercial retornará com disponibilidade, orientações e próximos passos.",
  },
  {
    id: 3,
    category: "orcamento",
    question: "Posso pedir orçamento para grupo ou excursão?",
    answer: "Sim. O atendimento sob consulta é indicado para excursões, passeios, grupos turísticos e viagens personalizadas. Quanto mais detalhes você enviar, mais precisa será a avaliação.",
  },
  {
    id: 4,
    category: "frota",
    question: "Quais informações da frota posso consultar?",
    answer: "O site apresenta categorias de ônibus, recursos de conforto, segurança e manutenção. A disponibilidade de veículo para uma data específica é confirmada pela equipe.",
  },
  {
    id: 5,
    category: "documentacao",
    question: "Vocês trabalham com horários fixos?",
    answer: "Não neste site. A proposta atual é exclusivamente turística, com orçamento sob consulta para grupos, excursões e roteiros personalizados.",
  },
  {
    id: 6,
    category: "geral",
    question: "Como entro em contato para uma viagem turística?",
    answer: "Você pode usar a página de contato, telefone ou e-mail informados no site para solicitar informações, consultar disponibilidade ou falar com a equipe comercial.",
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "todos" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative min-h-screen bg-dark">
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-cyan opacity-20 blur-3xl" />

        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">Ajuda</span>
              <h1 className="heading-lg text-white mt-4 mb-4">
                Perguntas <span className="text-gradient">Frequentes</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Encontre respostas sobre atendimento, solicitações e serviços sob consulta.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 max-w-xl mx-auto">
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

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveCategory("todos")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "todos" ? "bg-cyan text-dark" : "bg-white/5 text-ice/70 hover:bg-white/10"
                }`}
              >
                Todas
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id ? "bg-cyan text-dark" : "bg-white/5 text-ice/70 hover:bg-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="glass-card overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between p-6 text-left">
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-cyan shrink-0 transition-transform ${openFaq === faq.id ? "rotate-180" : ""}`} />
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
                <p className="text-sm text-ice/40 mt-2">Tente buscar com outros termos</p>
              </div>
            )}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 glass-card p-8 text-center">
              <MessageCircle className="w-12 h-12 text-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Não encontrou sua dúvida?</h3>
              <p className="text-ice/70 mb-6">Nossa equipe de atendimento está pronta para ajudar você.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Falar com Atendente</button>
                <button className="btn-outline">Ver todos os contatos</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
