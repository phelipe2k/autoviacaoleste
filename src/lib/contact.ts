// Dados de contato oficiais usados em todos os pontos de conversao do site.
export const companyContact = {
  phoneDisplay: "(33) 3000-0000",
  phoneHref: "tel:+553330000000",
  email: "contato@viacaoleste.com.br",
  ombudsmanEmail: "ouvidoria@viacaoleste.com.br",
  city: "Governador Valadares - MG",
  whatsappNumber: "553330000000",
};

// Mensagem padrao para abrir o WhatsApp ja contextualizado.
const defaultWhatsAppMessage =
  "Olá! Gostaria de falar com a Auto Viação Leste sobre uma viagem turística.";

// Cria uma URL de WhatsApp segura, codificando qualquer mensagem personalizada.
export function whatsappUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${companyContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
