import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "./ClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="text-white m-0 p-0 min-h-screen">
      <head>
        <title>KlowHub</title>
      </head>
      <body className="bg-gradient-to-tr from-[#34395C] via-[#181941] to-[#1B1B1F]">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
export { Metadata };
