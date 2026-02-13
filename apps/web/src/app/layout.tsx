import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stakei — Controle suas apostas e calcule seu IR",
  description:
    "O primeiro app brasileiro que organiza suas apostas, mostra seu lucro real e calcula seu Imposto de Renda automaticamente.",
  keywords: [
    "apostas",
    "controle de apostas",
    "gestão de banca",
    "imposto de renda apostas",
    "bet tracker",
    "calculadora IR apostas",
    "stakei",
  ],
  openGraph: {
    title: "Stakei — Pare de apostar no escuro",
    description:
      "Controle suas apostas, conheça seu lucro real e calcule seu IR automaticamente.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
