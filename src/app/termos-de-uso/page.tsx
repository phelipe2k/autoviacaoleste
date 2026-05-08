"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, AlertCircle, Calendar, Scale } from "lucide-react";

// Secoes dos termos de uso, mantidas em dados para evitar repeticao de markup.
const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao acessar e utilizar os serviços da Auto Viação Leste, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.

    Estes termos aplicam-se a todos os usuários do site, aplicativo e serviços relacionados.`,
  },
  {
    title: "2. Serviços Oferecidos",
    content: `A Auto Viação Leste oferece serviços de transporte rodoviário de passageiros, incluindo:
    • Vendas de passagens para viagens interestaduais e interestaduais
    • Fretamento de ônibus para empresas e grupos
    • Serviços de turismo e excursões
    • Transporte executivo
    • Programa de fidelidade AVL
    
    Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer serviço a qualquer momento.`,
  },
  {
    title: "3. Cadastro e Conta",
    content: `Para utilizar alguns de nossos serviços, você precisa criar uma conta fornecendo informações precisas, completas e atualizadas. Você é responsável por:
    • Manter a confidencialidade de sua senha
    • Restringir o acesso à sua conta
    • Todas as atividades que ocorrem em sua conta
    • Notificar imediatamente qualquer uso não autorizado
    
    A Auto Viação Leste não será responsável por perdas resultantes de acesso não autorizado à sua conta.`,
  },
  {
    title: "4. Compra de Passagens",
    content: `Ao comprar passagens, você concorda que:
    • Todas as informações fornecidas são precisas
    • Você é maior de 18 anos ou possui autorização de responsável legal
    • Os preços estão sujeitos a alterações sem aviso prévio
    • A disponibilidade de assentos é limitada e sujeita a confirmação
    • Passagens são pessoais e intransferíveis (exceto conforme regras específicas)
    
    A emissão do bilhete está condicionada à confirmação do pagamento.`,
  },
  {
    title: "5. Política de Cancelamento",
    content: `O cancelamento de passagens segue as regras estabelecidas pela ANTT:
    • Até 72 horas após a compra: reembolso integral
    • Até 24 horas antes da viagem: 90% de reembolso
    • De 24 a 3 horas antes: 80% de reembolso
    • Menos de 3 horas: sem direito a reembolso
    
    O reembolso é processado em até 10 dias úteis na forma de pagamento original.`,
  },
  {
    title: "6. Bagagem",
    content: `Cada passageiro tem direito a transportar:
    • 01 mala ou volume no bagageiro (até 30kg)
    • 01 mala de mão (dimensões máximas: 40cm x 30cm x 20cm)
    
    Itens de valor, documentos e objetos frágeis devem viajar na bagagem de mão. A AVL não se responsabiliza por perdas, danos ou extravios de bagagem, exceto em caso de dolo ou culpa grave.`,
  },
  {
    title: "7. Conduta do Passageiro",
    content: `O passageiro compromete-se a:
    • Chegar ao embarque com 30 minutos de antecedência
    • Apresentar documento oficial com foto válido
    • Respeitar horários e procedimentos de embarque
    • Não fumar dentro dos ônibus (incluindo cigarros eletrônicos)
    • Não consumir bebidas alcoólicas durante a viagem
    • Respeitar outros passageiros e a tripulação
    
    O descumprimento pode resultar na recusa de embarque ou desembarque em ponto intermediário.`,
  },
  {
    title: "8. Responsabilidades",
    content: `A Auto Viação Leste se esforça para cumprir todos os horários programados, mas não se responsabiliza por atrasos causados por:
    • Condições de trânsito
    • Condições climáticas adversas
    • Acidentes ou ocorrências na via
    • Problemas mecânicos imprevistos
    • Ações de terceiros ou força maior
    
    Nestes casos, providenciaremos a reacomodação dos passageiros na primeira oportunidade disponível.`,
  },
  {
    title: "9. Propriedade Intelectual",
    content: `Todo o conteúdo do site e aplicativo (textos, imagens, logos, software) é de propriedade exclusiva da Auto Viação Leste ou de seus licenciadores e está protegido por leis de direitos autorais e marcas registradas.

    É proibido copiar, reproduzir, distribuir ou criar trabalhos derivados sem autorização expressa.`,
  },
  {
    title: "10. Modificações dos Termos",
    content: `Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação.

    O uso continuado dos serviços após modificações constitui aceitação dos novos termos. Recomendamos revisar regularmente esta página.`,
  },
];

// Pagina legal com condicoes de uso dos servicos da Auto Viacao Leste.
export default function TermosDeUsoPage() {
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
                Termos de <span className="text-gradient">Uso</span>
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Leia atentamente os termos e condições para utilização
                dos nossos serviços.
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
            {/* Banner mostra data, vigencia e versao do documento. */}
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
                <Scale className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Vigência imediata</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-cyan" />
                <span className="text-ice/70 text-sm">Versão 5.0</span>
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
                  <AlertCircle className="w-6 h-6 text-cyan" />
                </div>
                <h2 className="text-xl font-bold text-white">Importante</h2>
              </div>
              <p className="text-ice/70 leading-relaxed">
                Estes Termos de Uso estabelecem as condições gerais para utilização dos serviços 
                oferecidos pela Auto Viação Leste Ltda., inscrita no CNPJ sob o nº 12.345.678/0001-90, 
                doravante denominada &ldquo;AVL&rdquo; ou &ldquo;empresa&rdquo;.
              </p>
              <p className="text-ice/70 leading-relaxed mt-4">
                Ao utilizar nossos serviços, você declara ter lido, compreendido e concordado 
                integralmente com estes termos. Caso discorde de qualquer disposição, 
                solicitamos que não utilize nossos serviços.
              </p>
            </motion.div>

            {/* Renderiza os topicos legais preservando paragrafos e listas. */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-8"
                >
                  <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                  <div className="text-ice/70 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contato para duvidas sobre o documento. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 mt-8"
            >
              <h2 className="text-xl font-bold text-white mb-4">Contato</h2>
              <p className="text-ice/70 mb-4">
                Para esclarecimentos sobre estes termos, entre em contato:
              </p>
              <div className="space-y-2 text-ice/70">
                <p><strong className="text-white">E-mail:</strong> juridico@viacaoleste.com.br</p>
                <p><strong className="text-white">Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP</p>
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
