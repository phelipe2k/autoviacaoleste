"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

// Depoimentos usados no carrossel de prova social.
const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Viagem frequente",
    avatar: "/images/avatars/maria.jpg",
    rating: 5,
    text: "Sempre viajo com a Auto Viação Leste. A pontualidade é incrével e o conforto das poltronas faz toda a diferenéa nas viagens longas. Recomendo a todos!",
    route: "Governador Valadares - Rio de Janeiro",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Executivo",
    avatar: "/images/avatars/joao.jpg",
    rating: 5,
    text: "Organizamos uma excursão em grupo e a viagem foi tranquila do começo ao fim. A equipe ajudou no planejamento e no conforto durante o trajeto.",
    route: "Excursão para Curitiba",
  },
  {
    id: 3,
    name: "Ana Paula",
    role: "Turista",
    avatar: "/images/avatars/ana.jpg",
    rating: 5,
    text: "Viajei com minha família para o Rio e foi uma experiência maravilhosa. A equipe foi super atenciosa e o Wi-Fi funcionou perfeitamente durante toda a viagem.",
    route: "Roteiro para o Rio de Janeiro",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Organizador de grupo",
    avatar: "/images/avatars/carlos.jpg",
    rating: 5,
    text: "Nossa viagem turística foi muito bem organizada. O atendimento foi claro, o ônibus confortável e o grupo aproveitou cada parada.",
    route: "Turismo Corporativo",
  },
];

export function TestimonialsSection() {
  // Indice do depoimento atualmente visivel no carrossel.
  const [activeIndex, setActiveIndex] = useState(0);

  // Avanca e volta de forma circular, sem estourar os limites do array.
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fundo da secao, normalmente com degrade escuro. */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />
      
      {/* Elementos decorativos de brilho no fundo da secao. */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-glow-cyan opacity-10 blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Cabecalho da secao com etiqueta, titulo e descricao. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
              Depoimentos
            </span>
            <h2 className="heading-lg text-white mt-4 mb-4">
              O Que Nossos <span className="text-gradient">Clientes</span> Dizem
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              A satisfação de nossos passageiros é o nosso maior orgulho.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 md:p-12 relative"
            >
              {/* icone decorativo de citacao. */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center">
                <Quote className="w-8 h-8 text-cyan" />
              </div>

              {/* Conteudo do depoimento ativo. */}
              <div className="pt-16 text-center">
                {/* Estrelas geradas conforme a nota do depoimento. */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Texto do depoimento. */}
                <p className="text-xl md:text-2xl text-ice/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>

                {/* Rota relacionada ao depoimento. */}
                <div className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 mb-6">
                  <span className="text-sm text-cyan">
                    {testimonials[activeIndex].route}
                  </span>
                </div>

                {/* Nome e perfil de quem deu o depoimento. */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan/30 to-primary/30 flex items-center justify-center">
                    <User className="w-7 h-7 text-cyan" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-ice/60">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botoes laterais navegam entre os depoimentos. */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  type="button"
                  aria-label="Depoimento anterior"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-cyan/20 transition-colors pointer-events-auto"
                >
                  <ChevronLeft className="w-5 h-5 text-cyan" />
                </button>
                <button
                  type="button"
                  aria-label="Próximo depoimento"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-cyan/20 transition-colors pointer-events-auto"
                >
                  <ChevronRight className="w-5 h-5 text-cyan" />
                </button>
              </div>
            </motion.div>

            {/* Indicadores inferiores permitem pular diretamente para um depoimento. */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ver depoimento ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-cyan w-8"
                      : "bg-ice/20 hover:bg-ice/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Linha de estatisticas de satisfacao. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "4.9", label: "Avaliação Média", suffix: "/5" },
              { value: "98", label: "Satisfação", suffix: "%" },
              { value: "50k+", label: "Avaliações", suffix: "" },
              { value: "30", label: "Anos de", suffix: "+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center"
              >
                <p className="text-3xl font-bold text-gradient">
                  {stat.value}
                  <span className="text-lg">{stat.suffix}</span>
                </p>
                <p className="text-sm text-ice/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
