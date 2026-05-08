import type { Metadata } from "next";
import "@/styles/globals.css";

// Metadados globais usados pelo Next.js para SEO, aba do navegador e compartilhamento em redes sociais.
export const metadata: Metadata = {
  title: "Auto Viação Leste | Conforto que Conecta Destinos",
  description: "Viagens intermunicipais com segurança, pontualidade e o conforto que você merece. Mais de 120 rotas conectando destinos com frota moderna.",
  keywords: ["ônibus", "viagem", "transporte", "intermunicipal", "fretamento", "turismo", "Auto Viação Leste"],
  authors: [{ name: "Auto Viação Leste" }],
  icons: {
    icon: "/images/favicon-64.png",
    shortcut: "/images/favicon-32.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "Auto Viação Leste | Conforto que Conecta Destinos",
    description: "Viagens intermunicipais com segurança, pontualidade e conforto.",
    type: "website",
  },
};

// Layout raiz: envolve todas as paginas da aplicacao e injeta os estilos globais.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {/* O Next.js renderiza aqui a pagina correspondente a rota acessada. */}
        {children}
      </body>
    </html>
  );
}
