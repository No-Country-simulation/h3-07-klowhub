import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";


export const metadata: Metadata = {
  title: "KlowHub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
