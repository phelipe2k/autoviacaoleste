import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Auto Viação Leste | Transporte com Segurança e Conforto",
  description:
    "Área institucional da Auto Viação Leste, com informações sobre frota, serviços, contato e solicitações de viagens sob consulta.",
  keywords: ["ônibus", "viagem", "transporte", "fretamento", "turismo", "Auto Viação Leste"],
  authors: [{ name: "Auto Viação Leste" }],
  icons: {
    icon: "/images/favicon-64.png",
    shortcut: "/images/favicon-32.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "Auto Viação Leste | Transporte com Segurança e Conforto",
    description: "Frota, serviços, contato e solicitações de viagens sob consulta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
