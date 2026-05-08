import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Auto Viação Leste | Turismo, Fretamento e Transporte sob Consulta",
  description:
    "Turismo, excursões, fretamento e transporte sob consulta com a Auto Viação Leste. Frota, serviços, contato e orçamentos personalizados.",
  keywords: ["ônibus", "turismo", "excursão", "fretamento", "transporte sob consulta", "Auto Viação Leste"],
  authors: [{ name: "Auto Viação Leste" }],
  icons: {
    icon: "/images/favicon-64.png",
    shortcut: "/images/favicon-32.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "Auto Viação Leste | Turismo, Fretamento e Transporte sob Consulta",
    description: "Frota, serviços, contato e orçamentos para turismo, grupos e fretamento.",
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
