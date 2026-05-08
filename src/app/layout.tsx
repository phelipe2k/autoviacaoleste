import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { publicPath } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auto Viação Leste | Turismo Rodoviário e Excursões",
  description:
    "Turismo rodoviário, excursões, passeios e roteiros personalizados sob consulta com a Auto Viação Leste.",
  keywords: ["ônibus", "turismo", "excursão", "roteiros turísticos", "viagens em grupo", "Auto Viação Leste"],
  authors: [{ name: "Auto Viação Leste" }],
  icons: {
    icon: publicPath("/images/favicon-64.png"),
    shortcut: publicPath("/images/favicon-32.png"),
    apple: publicPath("/images/apple-touch-icon.png"),
  },
  openGraph: {
    title: "Auto Viação Leste | Turismo Rodoviário e Excursões",
    description: "Frota, roteiros e orçamento para turismo, excursões e viagens em grupo.",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
