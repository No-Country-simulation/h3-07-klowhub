import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>KlowHub</title>
      </head>
      <body className="bg-gradient-to-tr from-[#34395C] via-[#181941] to-[#1B1B1F]">
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
export { Metadata };
