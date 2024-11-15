import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";


export const metadata: Metadata = {
  title: "KlowHub",
  description: "Generated by create next app",
  applicationName: "KlowHub",
  keywords: undefined,
  themeColor: undefined,
  generator: "Next.js",
  authors: [
    { url: "https://github.com/Maidana0", name: "Franco Maidana" },
    { url: "https://github.com/rafaric", name: "Rafael Strongoli" },
    { url: "https://github.com/illiCristian", name: "Cristian" },
    { url: "", name: "Yazuline" },
    { url: "", name: "Javier" }
  ],
  icons: "/assets/icons/klowhub.png",
  openGraph: {
    images: "/assets/icons/klowhub.png",
    title: "KlowHub"
  },
  robots: "noindex, nofollow"
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
