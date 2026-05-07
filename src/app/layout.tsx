import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Auto Viação Leste | Conforto que Conecta Destinos",
  description: "Viagens intermunicipais com segurança, pontualidade e o conforto que você merece. Mais de 120 rotas conectando destinos com frota moderna.",
  keywords: ["ônibus", "viagem", "transporte", "intermunicipal", "fretamento", "turismo", "Auto Viação Leste"],
  authors: [{ name: "Auto Viação Leste" }],
  openGraph: {
    title: "Auto Viação Leste | Conforto que Conecta Destinos",
    description: "Viagens intermunicipais com segurança, pontualidade e conforto.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
