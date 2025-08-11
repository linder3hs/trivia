import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trivia Game - Juego de Preguntas y Respuestas",
  description: "Pon a prueba tus conocimientos con nuestro juego de trivia interactivo. Categorías de ciencia, geografía, historia, música, cine, deportes y más. ¡Desafía tu mente!",
  keywords: "trivia, juego, preguntas, respuestas, conocimiento, quiz, educativo, entretenimiento, ciencia, geografía, historia",
  authors: [{ name: "Trivia Game" }],
  creator: "Trivia Game",
  publisher: "Trivia Game",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://trivia-game.vercel.app",
    title: "Trivia Game - Juego de Preguntas y Respuestas",
    description: "Pon a prueba tus conocimientos con nuestro juego de trivia interactivo. Múltiples categorías y preguntas desafiantes.",
    siteName: "Trivia Game",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trivia Game - Juego de Preguntas y Respuestas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trivia Game - Juego de Preguntas y Respuestas",
    description: "Pon a prueba tus conocimientos con nuestro juego de trivia interactivo.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
