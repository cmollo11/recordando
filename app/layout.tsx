import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Recordando",
  description: "Terapias, viajes y formación espiritual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

  
}) {
  return (
    <html lang="es">

        <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}