"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { publicPath } from "@/lib/site";
import { companyContact, whatsappUrl } from "@/lib/contact";

// Links do rodape divididos por assunto para evitar repeticao manual no JSX.
const footerLinks = {
  servicos: [
    { href: "/passagens", label: "Solicitar orçamento" },
    { href: "/frota", label: "Nossa Frota" },
    { href: "/destinos", label: "Roteiros sob consulta" },
    { href: "/servicos", label: "Turismo" },
    { href: "/servicos", label: "Excursões" },
    { href: "/contato", label: "WhatsApp" },
  ],
  empresa: [
    { href: "/institucional", label: "Quem Somos" },
    { href: "/institucional#historia", label: "História" },
    { href: "/institucional#valores", label: "Missão e Valores" },
    { href: "/contato", label: "Atendimento" },
    { href: "/contato", label: "Fale Conosco" },
    { href: "/contato", label: "Trabalhe Conosco" },
  ],
};

export function Footer() {
  // Estado pequeno para confirmar o cadastro sem recarregar a pagina.
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  // Evita envio vazio e deixa um feedback local ate existir uma integracao real.
  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newsletterEmail.trim()) {
      return;
    }
    setNewsletterSent(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark-light to-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-cyan opacity-30 blur-3xl" />

      <div className="relative section-padding pt-20 pb-8">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-cyan/20 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading-md text-white mb-3">
                  Receba novidades da Auto Viação Leste
                </h3>
                <p className="body-md">
                  Cadastre-se para receber novidades sobre excursões, roteiros turísticos e próximas viagens sob consulta.
                </p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(event) => {
                    setNewsletterEmail(event.target.value);
                    setNewsletterSent(false);
                  }}
                  placeholder="Seu e-mail"
                  aria-label="E-mail para receber novidades"
                  className="flex-1 px-5 py-3 bg-dark/50 border border-white/10 rounded-xl text-ice placeholder:text-ice/40 focus:outline-none focus:border-cyan/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Cadastrar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {newsletterSent && (
                <p className="md:col-start-2 text-sm text-cyan">
                  Cadastro recebido. Em breve entraremos em contato.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image
                  src={publicPath("/images/logo-transparente.webp")}
                  alt="Auto Viação Leste"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
                <div className="sr-only">
                  <p className="text-sm font-semibold text-ice font-display tracking-wider">
                    AUTO VIAÇÃO
                  </p>
                  <p className="text-xs text-cyan tracking-[0.2em]">LESTE</p>
                </div>
              </Link>
              <p className="body-md mb-6 max-w-sm">
                Turismo rodoviário sob consulta, com foco em excursões, grupos, roteiros personalizados, segurança e conforto.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-ice mb-4 uppercase tracking-wider">
                Serviços
              </h4>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-ice/60 hover:text-cyan transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-ice mb-4 uppercase tracking-wider">
                Empresa
              </h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-ice/60 hover:text-cyan transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-ice mb-4 uppercase tracking-wider">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan mt-1 shrink-0" />
                  <span className="text-sm text-ice/60">
                    {companyContact.city}
                    <br />
                    Atendimento turístico sob consulta
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan shrink-0" />
                  <a href={companyContact.phoneHref} className="text-sm text-ice/60 hover:text-cyan transition-colors">
                    {companyContact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan shrink-0" />
                  <a href={`mailto:${companyContact.email}`} className="text-sm text-ice/60 hover:text-cyan transition-colors">
                    {companyContact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan mt-1 shrink-0" />
                  <span className="text-sm text-ice/60">
                    Seg - Sex: 8h às 18h
                    <br />
                    Atendimento sob consulta
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-ice/40 text-center md:text-left">
                © 2026 Auto Viação Leste. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/politica-de-privacidade" className="text-xs text-ice/40 hover:text-cyan transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/termos-de-uso" className="text-xs text-ice/40 hover:text-cyan transition-colors">
                  Termos de Uso
                </Link>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-ice/40 hover:text-cyan transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
