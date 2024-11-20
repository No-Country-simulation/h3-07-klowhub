"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <title>KlowHub</title>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

export { Metadata };
